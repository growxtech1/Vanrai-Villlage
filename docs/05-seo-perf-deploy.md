# Phase 9, Phase 10 & Phase 11 — SEO, Performance, Quality & Deployment Operations

---

## Phase 9: SEO Implementation

### 9.1 Sitemap, Robots & Canonical Strategy

#### 1. Sitemap Architecture ([app/sitemap.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/sitemap.ts))
- **File:** [app/sitemap.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/sitemap.ts)
- Generates `/sitemap.xml` dynamically at runtime/build time conforming to Sitemaps XML protocol.
- **Fixed Dates Pattern:** Uses `lastModified: new Date("2026-09-19")` rather than `new Date()` at build time to avoid spurious cache invalidation by search engine spiders.
- **Priorities & Change Frequencies:**
  - `/` (Priority: 1.0, `weekly`)
  - `/stays`, `/experiences`, `/events`, `/contact` (Priority: 0.8 - 0.9, `weekly` / `monthly`)
  - Detail and informational pages (Priority: 0.7, `monthly`)
  - `/privacy-policy`, `/terms` (Priority: 0.5, `yearly`)

#### 2. Robots Configuration ([app/robots.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/robots.ts))
- **File:** [app/robots.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/robots.ts)
- Allows all user agents on `/` (`userAgent: "*", allow: "/"`).
- Explicitly disallows API paths (`disallow: ["/api/"]`).
- Points spiders to the XML sitemap: `sitemap: https://vanrairesort.com/sitemap.xml`.

#### 3. Canonical Strategy & `metadataBase`
- **`metadataBase`:** Defined globally in [app/layout.tsx:17](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/layout.tsx#L17) as `new URL(SITE_URL)` (`https://vanrairesort.com`). This ensures all relative metadata paths resolve deterministically to non-www production URLs.
- **Canonical Tags:** Every public route explicitly sets `alternates: { canonical: "/<path>" }` to prevent duplicate indexing across URL parameters or protocol variants.
- **Trailing Slash Normalization:** [next.config.ts:13](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/next.config.ts#L13) sets `trailingSlash: false`, enforcing strict canonical forms without trailing slashes.

---

### 9.2 Per-Page Metadata Matrix

| Route | Title | Description Length | Canonical | Open Graph Image | Robots Directive |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | `Vanrai Resort \| Nature Resort in Ahmednagar` | 185 chars | `https://vanrairesort.com/` | `/img/vanrai-lawn-sunset.webp` | `index: true, follow: true` |
| `/stays` | `Accommodations & Wooden Cottages \| Vanrai Resort` | 215 chars | `https://vanrairesort.com/stays` | `/img/Rooms/StaysCoversHero.webp` | `index: true, follow: true` |
| `/experiences` | `Activities & Curated Experiences \| Vanrai Resort` | 196 chars | `https://vanrairesort.com/experiences` | `/img/pool-sunset-luxury.jpg` | `index: true, follow: true` |
| `/experiences/[id]` | `[Experience Name] \| Vanrai Resort` | Dynamic | `https://vanrairesort.com/experiences/[id]` | `${experience.image}` | `index: true, follow: true` |
| `/events` | `Weddings, Lawns & Celebrations \| Vanrai Resort` | 189 chars | `https://vanrairesort.com/events` | `/img/event-wedding-hall-stage.webp`| `index: true, follow: true` |
| `/events/[slug]` | `[Event Title] \| Vanrai Resort` | 155 chars | `https://vanrairesort.com/events/[slug]` | `${event.image}` | `index: true, follow: true` |
| `/about` | `About Our Agro-Tourism Resort \| Vanrai Resort` | 195 chars | `https://vanrairesort.com/about` | `/img/vanrai-resort-aerial-lawn.webp`| `index: true, follow: true` |
| `/gallery` | `Photo Gallery & Property Tour \| Vanrai Resort` | 188 chars | `https://vanrairesort.com/gallery` | `/img/vanrai-entrance-gate.webp` | `index: true, follow: true` |
| `/membership` | `Privilege Club Membership \| Vanrai Resort` | 179 chars | `https://vanrairesort.com/membership` | `/img/vanrai-lawn-sunset.webp` | `index: true, follow: true` |
| `/contact` | `Contact & Reservations \| Vanrai Resort` | 208 chars | `https://vanrairesort.com/contact` | `/img/vanrai-reception-night.webp` | `index: true, follow: true` |
| `/book` | `Book Cottages & Rooms Online \| Vanrai Resort` | 165 chars | `https://vanrairesort.com/book` | Default fallback | `index: false, follow: false` |
| `/availability`| `Check Room Availability \| Vanrai Resort` | 180 chars | `https://vanrairesort.com/availability` | `/img/Rooms/CottageHouse.jpeg` | `index: false, follow: false` |
| `/booking/details`| `Guest Details & Reservation \| Vanrai Resort` | 92 chars | None | Default fallback | `index: false, follow: false` |
| `/booking/payment`| `Secure Payment & Checkout \| Vanrai Resort` | 74 chars | None | Default fallback | `index: false, follow: false` |
| `/booking/confirmation`| `Reservation Confirmed \| Vanrai Resort` | 108 chars | None | Default fallback | `index: false, follow: false` |
| `/privacy-policy`| `Privacy Policy \| Vanrai Resort` | 164 chars | `https://vanrairesort.com/privacy-policy` | Default fallback | `index: true, follow: true` |
| `/terms` | `Terms & Conditions \| Vanrai Resort` | 158 chars | `https://vanrairesort.com/terms` | Default fallback | `index: true, follow: true` |

---

### 9.3 JSON-LD Structured Data Audit

The application implements rich schema markup via `<script type="application/ld+json">`:

#### 1. `LodgingBusiness` Schema ([app/page.tsx:47-84](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/page.tsx#L47-L84))
- **Type:** `LodgingBusiness`
- **Fields:** `@id`, `name`, `description`, `image`, `url`, `telephone`, `email`, `priceRange` (`₹2500 – ₹4000`), `address` (`PostalAddress`), `geo` (`GeoCoordinates`: lat 19.1383, long 74.7214), `sameAs` (Instagram, Facebook, YouTube), `checkinTime` ("12:00"), `checkoutTime` ("11:00"), `amenities`.

#### 2. `AboutPage` Schema ([app/about/page.tsx:49-58](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/about/page.tsx#L49-L58))
- **Type:** `AboutPage`
- **Fields:** `@id`, `url`, `name`, `description`, `isPartOf` (`/#website`).

#### 3. `BreadcrumbList` Schemas
Implemented across 10 routes:
- `/stays`, `/experiences`, `/experiences/[id]`, `/events`, `/events/[slug]`, `/about`, `/gallery`, `/membership`, `/contact`, `/privacy-policy`, `/terms`.

---

### 9.4 Pages with `noindex` Directives

The following 5 routes are configured with `robots: { index: false, follow: false }`:
1. **`/book`:** The online booking engine is not yet live ("Coming Soon" screen). Indexing it would generate poor user experience signals.
2. **`/availability`:** Ephemeral search results page with URL query parameters.
3. **`/booking/details`:** Transitory checkout step collecting personal data.
4. **`/booking/payment`:** Checkout payment gateway step.
5. **`/booking/confirmation`:** Post-transaction receipt page displaying simulated personal booking references.

---

### 9.5 SEO Gaps & Remaining Opportunities

1. **Sitemap Incompleteness (7 Experiences Missing):**
   - [lib/experiences-data.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/experiences-data.ts) defines **13 experiences**.
   - `generateStaticParams()` pre-renders all 13 pages at build time.
   - However, [app/sitemap.ts:27-61](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/sitemap.ts#L27-L61) lists only **6 experiences** (`bonfire`, `candle-light`, `rain-dance`, `waterpark`, `dining`, `weddings`).
   - The remaining **7 experiences** (`picnics`, `birthdays`, `anniversary`, `yoga`, `sports`, `indoor`, `kids-zone`) are **missing from the sitemap**.
2. **Missing `HotelRoom` Structured Data:**
   - On `/stays`, schema is limited to `BreadcrumbList`. Adding `HotelRoom` or `Product` schema with pricing and amenity specifications for the Wooden Cottages and Deluxe AC rooms would qualify the site for rich hotel search snippets in Google.
3. **Missing Geo Coordinates Pin Verification:**
   - In [constants/site.ts:40-46](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/constants/site.ts#L40-L46), code comments note that coordinates `19.1383, 74.7214` need manual confirmation against the physical Google Maps pin.
4. **Slight Meta Description Length Exceedances:**
   - Descriptions on `/stays` (215 chars) and `/contact` (208 chars) exceed the recommended 155-160 character viewport limit on mobile SERPs and will be truncated by Google.

---

## Phase 10: Performance and Quality

### 10.1 Image Optimization Architecture

1. **Next.js Image Formats & Remote Patterns:**
   - [next.config.ts:16](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/next.config.ts#L16) prioritizes modern high-efficiency formats: `["image/avif", "image/webp"]`.
   - Sharp C++ library (`sharp: ^0.35.4`) is installed for high-speed local image conversion.
   - Remote hosts whitelisted in `remotePatterns`: `images.unsplash.com`, `upload.wikimedia.org`.
2. **Hero Image Optimization (LCP Defense):**
   - In [components/ui/hero-slider.tsx:56-60](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/hero-slider.tsx#L56-L60), slide 0 sets:
     - `preload={true}`
     - `loading="eager"`
     - `fetchPriority="high"`
     - `sizes="100vw"`
     - `quality={80}`
   - Subsequent slides (1 and 2) defer rendering until after mount (`!isMounted return null`) to protect initial paint.
3. **Dynamic Imports Below the Fold:**
   - [app/page.tsx:13-28](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/page.tsx#L13-L28) dynamically imports heavy below-the-fold components:
     - `PrivilegeClubSection`
     - `GallerySection`
     - `TestimonialsSection`
     - `ContactFormStepper`

---

### 10.2 Accessibility (a11y) Review

- **Touch Device Targets:** [app/globals.css:258-264](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/globals.css#L258-L264) optimizes touch behavior on mobile devices.
- **Scroll Lock Cleanup:** [components/ui/header.tsx:29-39](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/header.tsx#L29-L39) properly restores Lenis scroll on mobile menu unmount.
- **Motion Reduction:** [app/globals.css:346-352](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/globals.css#L346-L352) and [components/providers/smooth-scroll.tsx:99-109](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/providers/smooth-scroll.tsx#L99-L109) disable animations and smooth scroll when `prefers-reduced-motion: reduce` is detected.
- **Concerns / Warnings:**
  - Standard HTML `<img>` tags are used in [app/privacy-policy/privacy-policy-client.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/privacy-policy/privacy-policy-client.tsx) and [components/ui/resizable-navbar.tsx:229](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/resizable-navbar.tsx#L229) instead of `<Image />` from `next/image`.

---

### 10.3 Static Analysis: TypeScript & ESLint Results

#### 1. TypeScript Verification (`npx tsc --noEmit`)
- **Status:** **PASSED (0 Errors)**.
- Full typecheck exited with code 0.

#### 2. ESLint Audit (`npm run lint`)
- **Status:** **FAILED (18 Errors, 60 Warnings)** across 78 total problems.
- Breakdown of the 18 Errors by file:

| File | Error Count | Exact Error Types |
| :--- | :--- | :--- |
| [app/api/enquiry/route.ts:163](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/api/enquiry/route.ts#L163) | 1 Error | `@typescript-eslint/no-explicit-any` on `catch (err: any)` |
| [app/availability/availability-client.tsx:108](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/availability/availability-client.tsx#L108) | 1 Error | `@typescript-eslint/no-explicit-any` on `roomType as any` |
| [app/booking/confirmation/confirmation-client.tsx:30](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/booking/confirmation/confirmation-client.tsx#L30) | 2 Errors | `@typescript-eslint/no-explicit-any` on interval type and parameters |
| [app/events/events-client.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/events/events-client.tsx) | 3 Errors | `react-hooks/set-state-in-effect` (calling setState inside useEffect) |
| [app/experiences/experiences-client.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/experiences/experiences-client.tsx) | 2 Errors | `react-hooks/set-state-in-effect` (calling setState inside useEffect) |
| [app/template.tsx:18](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/template.tsx#L18) | 1 Error | `react-hooks/set-state-in-effect` (`setShouldAnimate(true)` in effect) |
| [components/membership/why-join.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/membership/why-join.tsx) | 2 Errors | `@typescript-eslint/no-explicit-any` in animation variants |
| [components/providers/smooth-scroll.tsx:104](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/providers/smooth-scroll.tsx#L104) | 1 Error | `react-hooks/set-state-in-effect` |
| [components/ui/contact-form-stepper.tsx:98](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/contact-form-stepper.tsx#L98) | 3 Errors | `react-hooks/set-state-in-effect` and `@typescript-eslint/no-explicit-any` |
| [components/ui/hero-slider.tsx:32](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/hero-slider.tsx#L32) | 1 Error | `react-hooks/set-state-in-effect` (`setIsMounted(true)` in effect) |
| [lib/email.ts:266](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/email.ts#L266) | 1 Error | `@typescript-eslint/no-explicit-any` on `catch (err: any)` |

*Note: The 60 warnings consist mostly of unused imported icons and `@next/next/no-img-element` warnings.*

---

### 10.4 Next.js Production Build Report (`npm run build`)

- **Next.js Version:** 16.1.1 (Turbopack compiler).
- **Compile Time:** 3.6 seconds.
- **Static Page Generation:** 41 pages generated in 686.8 ms across 15 worker threads.
- **Route Table Output:**

```
Route (app)                              Size     First Load JS
┌ ○ /                                    Static   (Pre-rendered)
├ ○ /_not-found                          Static   (Pre-rendered)
├ ○ /about                               Static   (Pre-rendered)
├ ƒ /api/enquiry                         Dynamic  (Server Route)
├ ○ /apple-icon.png                      Static   (Asset)
├ ○ /availability                        Static   (Pre-rendered)
├ ○ /book                                Static   (Pre-rendered)
├ ○ /booking/confirmation                Static   (Pre-rendered)
├ ○ /booking/details                     Static   (Pre-rendered)
├ ○ /booking/payment                     Static   (Pre-rendered)
├ ○ /contact                             Static   (Pre-rendered)
├ ○ /events                              Static   (Pre-rendered)
├ ● /events/[slug]                       SSG      (4 paths)
│ ├ /events/wedding
│ ├ /events/festive
│ ├ /events/corporate
│ └ /events/experiential
├ ○ /experiences                         Static   (Pre-rendered)
├ ● /experiences/[id]                     SSG      (13 paths)
│ ├ /experiences/bonfire
│ ├ /experiences/candle-light
│ ├ /experiences/rain-dance
│ └ [+10 more paths]
├ ○ /gallery                             Static   (Pre-rendered)
├ ○ /icon.png                            Static   (Asset)
├ ○ /manifest.webmanifest                Static   (Asset)
├ ○ /membership                          Static   (Pre-rendered)
├ ○ /privacy-policy                      Static   (Pre-rendered)
├ ○ /robots.txt                          Static   (Asset)
├ ○ /sitemap.xml                         Static   (Asset)
├ ○ /stays                               Static   (Pre-rendered)
└ ○ /terms                               Static   (Pre-rendered)

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```

---

## Phase 11: Deployment and Operations

### 11.1 Deployment Pipeline (Vercel)

- **Hosting Platform:** **Vercel**
- **Framework Preset:** Next.js
- **Node.js Runtime:** Node 20.x (verified via `@types/node: ^20`)
- **Build Command:** `next build` (invoked via `npm run build`)
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Turbopack:** Automatically enabled in Next.js 16 build pipeline.

---

### 11.2 Domain & DNS Setup

- **Canonical Domain:** `https://vanrairesort.com` (non-www)
- **Registrar:** GoDaddy (as stated in project context).
- **DNS Records Setup (Code Evidence vs. Unverified):**
  - Code explicitly forces non-www canonical URL in [constants/site.ts:14](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/constants/site.ts#L14).
  - Permanent redirects configured in [next.config.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/next.config.ts).
  - **UNVERIFIED:** GoDaddy DNS A records, CNAME records (`76.76.21.21` or `cname.vercel-dns.com`), Nameservers, and SSL renewal settings cannot be verified from code and must be checked in the GoDaddy and Vercel dashboards.
  - **UNVERIFIED:** Vercel project domain configuration (whether `www.vanrairesort.com` redirects to `vanrairesort.com` with a 308 redirect in Vercel) must be confirmed in the Vercel dashboard.

---

### 11.3 Step-by-Step Operator Runbook

#### 1. How to Run Locally
```bash
# 1. Navigate to the project folder
cd Vanrai-Villlage

# 2. Install dependencies
npm install

# 3. Create .env.local with credentials from .env.example
cp .env.example .env.local

# 4. Start local development server with Turbopack
npm run dev

# 5. Open in browser at http://localhost:3000
```

#### 2. How to Build and Validate Locally
```bash
# Typecheck
npx tsc --noEmit

# Production build
npm run build

# Start compiled server
npm run start
```

#### 3. How to Deploy to Production (Vercel)
- Push changes to `origin/main` on GitHub/GitLab:
  ```bash
  git add .
  git commit -m "Your descriptive commit message"
  git push origin main
  ```
- Vercel Git integration will automatically build and deploy the production release.

---

### 11.4 Common Content Maintenance Workflows

#### Workflow A: Change a Room Price
1. Open [constants/pricing.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/constants/pricing.ts) and update the relevant constant (`WOODEN_COTTAGE_PRICE_PER_NIGHT`, `DELUXE_AC_ROOM_PRICE_PER_NIGHT`, or `STANDARD_ROOM_PRICE_PER_NIGHT`).
2. Open [lib/stays-data.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/stays-data.ts) and ensure `price` and `originalPrice` match.
3. Open [app/availability/availability-client.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/availability/availability-client.tsx) and update `ROOM_INVENTORY_DATA`.
4. Run `npm run build` and push to `main`.

#### Workflow B: Add a New Resort Experience
1. Open [lib/experiences-data.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/experiences-data.ts) and append a new key-value pair to `EXPERIENCES_DATA` with `id`, `name`, `tagline`, `summary`, `description`, `image`, `gallery`, `highlights`, `idealFor`.
2. Open [app/sitemap.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/sitemap.ts) and add the new URL entry to the sitemap array.
3. Run `npm run build` (Next.js `generateStaticParams` will automatically create the SSG route `/experiences/[new-id]`).
4. Commit and deploy.

#### Workflow C: Add a Photo to the Gallery
1. Add the optimized image (`.webp` recommended) into [public/img/](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/public/img/).
2. Open [app/gallery/gallery-client.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/gallery/gallery-client.tsx) and append a photo object to the gallery array with `id`, `src: "/img/<filename>.webp"`, `alt`, and `category`.
3. If highlighting on the homepage, also add it to `galleryItems` in [components/ui/gallery-section.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/gallery-section.tsx).

#### Workflow D: Update Phone, Email, or Address
1. Open [constants/site.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/constants/site.ts) and update `SITE_PHONE`, `SITE_PHONE_DISPLAY`, `SITE_EMAIL`, and `SITE_LOCATION`.
2. Open [lib/contact-config.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/contact-config.ts) and update `RESORT_CONTACT.phoneDisplay`, `phoneRaw`, `whatsAppNumber`, `emailAddress`, and `address`.

---

### 11.5 Git Status & History

- **Current Branch:** `main`
- **Tracking:** Up to date with `origin/main`.
- **Uncommitted Working Tree:** 21 modified files in `Vanrai-Villlage/`:
  - `app/about/about-client.tsx`, `app/about/page.tsx`, `app/availability/page.tsx`, `app/book/page.tsx`, `app/contact/page.tsx`, `app/events/page.tsx`, `app/experiences/page.tsx`, `app/gallery/page.tsx`, `app/layout.tsx`, `app/membership/page.tsx`, `app/page.tsx`, `app/privacy-policy/privacy-policy-client.tsx`, `app/sitemap.ts`, `app/stays/page.tsx`, `app/terms/terms-client.tsx`, `components/ui/footer.tsx`, `components/ui/testimonials-section.tsx`, `constants/site.ts`, `lib/contact-config.ts`, `package-lock.json`, `package.json`.

#### Recent 15 Commits on `main`:
1. `c698ab3` Done with Seo tags and all
2. `3a18710` Done with comiiting the changes
3. `0d1bb47` Deploywe
4. `f9eeb16` Updated
5. `9c229e9` Done with all the updations
6. `5762edb` done with the changees
7. `91b54fb` Done With implementing the booking system
8. `70c4212` done with ui improvements
9. `0b81f16` Done with Frontend
10. `29d749d` Merge branch 'Jayesh/Hero-Section-HomePage'
11. `64c63cf` Netlify
12. `fe07bc7` Netlify
13. `785236c` Netlify
14. `30f7128` Optimize mobile performance: image responsive sizes, dynamic imports, and reduced backdrop-blur Load
15. `704c5ce` Implemented Footer and Contact Us
