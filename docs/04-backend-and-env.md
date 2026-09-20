# Phase 7 & Phase 8 — Backend, APIs, Integrations & Environment

---

## Phase 7: Backend, APIs and Integrations

### 7.1 API Routes & Server Actions Audit

#### Server Actions Audit
- **Search Query:** Checked for `"use server"` and `'use server'`.
- **Finding:** **Zero Server Actions exist** across the application. All client-to-server communication is handled through traditional REST route handlers.

#### API Route: `POST /api/enquiry`
- **File:** [app/api/enquiry/route.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/api/enquiry/route.ts)
- **Method:** `POST`
- **Path:** `/api/enquiry`
- **Input Payload (JSON):**
  ```typescript
  {
    firstName: string;       // Required, non-empty
    lastName: string;        // Required, non-empty
    phone: string;           // Required, non-empty
    email: string;           // Required, valid email format regex
    eventType?: string;      // e.g. "wedding", "corporate", "birthday"
    date?: string | null;    // ISO date string e.g. "2026-10-15T00:00:00.000Z"
    numDays?: number;        // integer >= 1
    rooms?: number;          // integer >= 0
    pax?: number;            // expected guests (defaults to 50)
    catering?: boolean;      // true/false
    cateringType?: string;   // "veg" | "non-veg" | "both" | null
  }
  ```
- **Validation Logic ([app/api/enquiry/route.ts:59-70](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/api/enquiry/route.ts#L59-L70)):**
  ```typescript
  const errors: string[] = [];
  if (!firstName?.trim()) errors.push("First name is required.");
  if (!lastName?.trim()) errors.push("Last name is required.");
  if (!phone?.trim()) errors.push("Phone number is required.");
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("A valid email address is required.");
  }
  if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
  }
  ```
- **Execution Pipeline:**
  1. Computes `startDate` and `endDate` (`addDays(startDate, days - 1)`).
  2. Extracts metadata headers: client IP (`x-forwarded-for` or `x-real-ip`) and `user-agent`.
  3. **Database Insertion:** Connects to Supabase using `getServerSupabaseClient()` and inserts into table `event_enquiries`. If the database returns an error, the handler logs it to `console.error` but **does not block execution**, allowing email notifications to proceed.
  4. **Email Dispatch:** Dispatches two emails concurrently using `sendEnquiryEmails(emailPayload)`.
  5. **Response (200 OK):**
     ```json
     {
       "success": true,
       "id": "uuid-or-null",
       "message": "Your enquiry has been submitted successfully. We will contact you within 24 hours.",
       "emailsSent": {
         "admin": true,
         "customer": true,
         "provider": "smtp"
       }
     }
     ```
  6. **Error Handling (500 Internal Server Error):** Catches unexpected runtime crashes and returns `{ success: false, errors: ["An unexpected error occurred..."] }`.

---

### 7.2 Email System Audit ([lib/email.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/email.ts))

#### 1. Provider & Protocol
- **Transport Library:** `nodemailer` ([lib/email.ts:1](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/email.ts#L1)).
- **Protocol:** Secure SMTP over SSL (Port 465).
- **Default Host:** `smtp.gmail.com` (Gmail SMTP).
- **Transporter Factory ([lib/email.ts:27-40](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/email.ts#L27-L40)):**
  ```typescript
  function createTransporter() {
      return nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: Number(process.env.SMTP_PORT) || 465,
          secure: true, // port 465 always uses TLS/SSL
          auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS, // Google App Password
          },
          tls: {
              rejectUnauthorized: true,
          },
      });
  }
  ```

#### 2. Trigger
- Invoked exclusively when a user submits the 4-step event planning stepper form via `POST /api/enquiry`.

#### 3. Recipients & Templates
Two emails are generated and transmitted per submission:
1. **Resort Admin Alert (`adminEmail`):**
   - Recipient: `process.env.ADMIN_EMAIL` || `vanrai_resort@yahoo.co.in`.
   - Subject: `New Event Enquiry: [EventType] — [FirstName] [LastName]`.
   - Content: Luxury dark-themed HTML table containing customer contact info (name, clickable phone, clickable email), event occasion, date range, guest count (`pax`), room requirements, catering preferences, reference UUID, and direct one-click **"Reply via WhatsApp"** button.
2. **Guest Confirmation Email (`data.email`):**
   - Recipient: Guest's email address provided in form.
   - Subject: `Thank You for Your Enquiry — Vanrai Resort`.
   - Content: Luxury dark-themed acknowledgment card summarizing the request, stating what happens next ("A representative will contact you within 24 hours"), and providing a direct concierge WhatsApp chat button.

#### 4. Fallback / Dev Simulation Mode
- If `SMTP_HOST`, `SMTP_USER`, or `SMTP_PASS` are absent, `sendEnquiryEmails()` logs a formatted simulation alert to stdout and returns `{ adminSent: true, customerSent: true, provider: "mock" }`.

---

### 7.3 Database & Storage Layer

#### 1. Database Architecture
- **Provider:** **Supabase** (PostgreSQL).
- **Client Factory:** [lib/supabase.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/supabase.ts) exports `getSupabaseClient()` using `@supabase/supabase-js`.
- **Administrative Access:** Uses `SUPABASE_SERVICE_ROLE_KEY` on the server to bypass Row Level Security (RLS) during insert operations, falling back to `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

#### 2. Database Schema ([supabase/schema.sql](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/supabase/schema.sql))
The project schema defines a single table, `public.event_enquiries`:

```sql
CREATE TABLE IF NOT EXISTS public.event_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    
    -- Customer Information
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    
    -- Event Specifications
    event_type TEXT NOT NULL,
    event_date DATE,
    num_days INTEGER NOT NULL DEFAULT 1,
    end_date DATE,
    
    -- Requirements
    rooms INTEGER NOT NULL DEFAULT 0,
    pax INTEGER NOT NULL DEFAULT 50,
    catering BOOLEAN NOT NULL DEFAULT false,
    catering_type TEXT CHECK (catering_type IN ('veg', 'non-veg', 'both') OR catering_type IS NULL),
    
    -- Status & CRM tracking
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'confirmed', 'cancelled')),
    admin_notes TEXT,
    ip_address TEXT,
    user_agent TEXT
);
```

#### 3. Indexes & Row Level Security (RLS)
- **Indexes:**
  - `idx_event_enquiries_created_at` on `created_at DESC`
  - `idx_event_enquiries_status` on `status`
  - `idx_event_enquiries_email` on `email`
  - `idx_event_enquiries_phone` on `phone`
  - `idx_event_enquiries_event_date` on `event_date`
- **Policies:**
  - `Allow public insert to event_enquiries`: Allows anonymous visitors to submit entries (`FOR INSERT TO public, anon, authenticated`).
  - `Allow service role full access`: Allows `service_role` full CRUD (`FOR ALL TO service_role`).
  - `Allow authenticated read access`: Allows authenticated dashboard admins to inspect entries (`FOR SELECT TO authenticated`).
- **Trigger:** `handle_updated_at()` automatically syncs `updated_at` on `UPDATE`.

#### 4. Storage for Room Bookings
- **Finding:** **None found.** There is no database table, collection, or cloud storage bucket configured for room bookings. Room bookings remain purely client-side simulations.

---

### 7.4 Third-Party Integrations Audit

| Integration | Implementation in Code | Verification Status | Code Reference |
| :--- | :--- | :--- | :--- |
| **Payment Gateway** | **None active in code.** Word/PDF documents exist in `/Documentation` referencing Razorpay, but the active codebase uses a mock 2000ms `setTimeout` on `/booking/payment`. | **VERIFIED (MOCK SIMULATION)** | [payment-client.tsx:29-34](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/booking/payment/payment-client.tsx#L29-L34) |
| **WhatsApp Chat** | Generates direct `wa.me/919730001579?text=...` links with pre-filled context for stays, rooms, memberships, and inquiries. | **VERIFIED (ACTIVE)** | [lib/contact-config.ts:37-42](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/contact-config.ts#L37-L42) |
| **Google Maps** | Embedded iframe pointing to `https://maps.google.com/maps?q=Vanrai+Resort+Ahmednagar...` with `data-lenis-prevent`. | **VERIFIED (ACTIVE)** | [components/ui/google-map.tsx:15-30](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/google-map.tsx#L15-L30) |
| **Vercel Analytics** | First-party `<Analytics />` component tracking page views and vitals. | **VERIFIED (ACTIVE)** | [app/layout.tsx:89](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/layout.tsx#L89) |
| **Vercel Speed Insights**| Not installed or mounted. | **VERIFIED (ABSENT)** | [package.json](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/package.json) |

---

### 7.5 Security Review

1. **Input Validation:**
   - [app/api/enquiry/route.ts:59-70](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/api/enquiry/route.ts#L59-L70) validates `firstName`, `lastName`, `phone`, and `email` format.
   - However, strings are not sanitized for HTML control characters or length limits before rendering into the HTML email template.
2. **HTML Email Injection / XSS Risk:**
   - In [lib/email.ts:92-102](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/email.ts#L92-L102), customer inputs (`fullName`, `data.email`, `data.eventType`) are interpolated directly into template strings (`getAdminEmailHtml` and `getCustomerEmailHtml`) without escaping (`<`, `>`, `"`). A malicious user could inject arbitrary HTML into emails sent to the resort administrator.
3. **Rate Limiting & Spam Protection:**
   - **Finding:** **None.** There is no IP rate limiting (e.g. via `@upstash/ratelimit`), no CAPTCHA (Turnstile or reCAPTCHA), and no honeypot field on the form.
   - *Risk:* Automated spambots can hammer `/api/enquiry`, exhausting Supabase quotas and triggering spam bans on the Gmail SMTP account.
4. **Exposed Secrets & Git Cleanliness:**
   - Verified that `.env.local` is listed in [.gitignore:3](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/.gitignore#L3) and has never been committed to Git.
   - No active API keys, service role secrets, or database passwords are hardcoded in application source files.
5. **CORS:**
   - No open CORS headers (`Access-Control-Allow-Origin: *`) are declared. The API route only accepts same-origin requests by default.

---

## Phase 8: Environment and Configuration

### 8.1 Environment Variables Master Table

*(Per project rules: variable NAMES only, secret values redacted)*

| Variable Name | Defined In | Where Used in Code | Required / Optional | Scope | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | `.env.example`, `.env.local` | [constants/site.ts:15](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/constants/site.ts#L15) | Required in Dev / Optional in Prod | Public | Base URL for canonical tags, OpenGraph, sitemap, and robots.txt. Defaults to `https://vanrairesort.com` in production. |
| `NEXT_PUBLIC_SUPABASE_URL` | `.env.example`, `.env.local` | [lib/supabase.ts:3](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/supabase.ts#L3), [app/api/enquiry/route.ts:9](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/api/enquiry/route.ts#L9), `utils/supabase/*` | Required for DB | Public | Supabase project API gateway endpoint (`https://<project-ref>.supabase.co`). |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `.env.example`, `.env.local` | [lib/supabase.ts:4](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/supabase.ts#L4), [app/api/enquiry/route.ts:12](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/api/enquiry/route.ts#L12) | Required for client DB | Public | Public anonymous key for client-side Supabase requests. |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | `.env.local` | [utils/supabase/client.ts:4](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/utils/supabase/client.ts#L4), [utils/supabase/server.ts:5](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/utils/supabase/server.ts#L5) | Optional (Unused) | Public | Modern Supabase publishable key used in unused boilerplate files. |
| `SUPABASE_SERVICE_ROLE_KEY` | `.env.example`, `.env.local` | [lib/supabase.ts:4](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/supabase.ts#L4), [app/api/enquiry/route.ts:11](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/api/enquiry/route.ts#L11) | Required for DB | Server-Only | Secret service-role key granting administrative access to insert inquiries bypassing RLS. |
| `DATABASE_URL` | `.env.local` | None | Optional | Server-Only | Direct PostgreSQL connection string for Prisma or migrations. |
| `PGHOST` | `.env.local` | None | Optional | Server-Only | Direct Postgres hostname. |
| `PGPORT` | `.env.local` | None | Optional | Server-Only | Direct Postgres port. |
| `PGDATABASE` | `.env.local` | None | Optional | Server-Only | Postgres database name. |
| `PGUSER` | `.env.local` | None | Optional | Server-Only | Postgres username. |
| `PGPASSWORD` | `.env.local` | None | Optional | Server-Only | Postgres password. |
| `ADMIN_EMAIL` | `.env.example`, `.env.local` | [lib/email.ts:21](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/email.ts#L21) | Optional | Server-Only | Destination email address receiving new event inquiry alerts. Defaults to `vanrai_resort@yahoo.co.in`. |
| `RESEND_API_KEY` | `.env.example` | None | Optional (Unused) | Server-Only | API key for Resend email delivery. Unused in active code. |
| `EMAIL_FROM` | `.env.example` | None | Optional (Unused) | Server-Only | Email sender address header for Resend. Unused in active code. |
| `SMTP_HOST` | `.env.example`, `.env.local` | [lib/email.ts:29](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/email.ts#L29) | Required for Email | Server-Only | SMTP server host. Defaults to `smtp.gmail.com`. |
| `SMTP_PORT` | `.env.example`, `.env.local` | [lib/email.ts:30](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/email.ts#L30) | Required for Email | Server-Only | SMTP server port. Defaults to `465`. |
| `SMTP_USER` | `.env.example`, `.env.local` | [lib/email.ts:23](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/email.ts#L23), [lib/email.ts:33](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/email.ts#L33) | Required for Email | Server-Only | Sender Gmail address used for authenticating SMTP connection. |
| `SMTP_PASS` | `.env.example`, `.env.local` | [lib/email.ts:34](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/email.ts#L34) | Required for Email | Server-Only | 16-character Google App Password for SMTP authentication. |
| `SMTP_SECURE` | `.env.example` | None | Optional | Server-Only | Flag in `.env.example`, but [lib/email.ts:31](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/email.ts#L31) hardcodes `secure: true`. |
| `ANALYZE` | package.json | [next.config.ts:6](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/next.config.ts#L6) | Optional | Build-Time | Enables `@next/bundle-analyzer` when set to `"true"`. |

---

### 8.2 Production Vercel Deployment Checklist

To ensure all features work in production on Vercel without falling back to mock or simulation modes, the following environment variables **must be added to the Vercel Project Dashboard** under **Project Settings $\rightarrow$ Environment Variables**:

| Variable | Environment | Critical Requirement |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Production, Preview | Set to `https://vanrairesort.com`. |
| `NEXT_PUBLIC_SUPABASE_URL` | Production, Preview | Required for inquiries to reach Supabase. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Production, Preview | Required for Supabase client authorization. |
| `SUPABASE_SERVICE_ROLE_KEY` | Production, Preview | Required for server route to insert inquiries bypassing RLS. |
| `ADMIN_EMAIL` | Production, Preview | Set to `vanrai_resort@yahoo.co.in`. |
| `SMTP_HOST` | Production, Preview | Set to `smtp.gmail.com`. |
| `SMTP_PORT` | Production, Preview | Set to `465`. |
| `SMTP_USER` | Production, Preview | Sender Gmail account with 2FA enabled. |
| `SMTP_PASS` | Production, Preview | 16-character Google App Password generated for this app. |
