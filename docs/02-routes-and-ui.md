# Phase 3 & Phase 4 — Routing, Pages & UI Components

---

## Phase 3: Routing and Pages

### 3.1 Route Inventory & Specification Table

Every route across the application is itemized below based on code inspection:

| Route URL | File Path | Component Type | Rendering Mode | Data Sources | Robots Setting |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | [app/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/page.tsx) | Server (RSC) | Static (`○`) | [constants/site.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/constants/site.ts), [constants/pricing.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/constants/pricing.ts), [lib/stays-data.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/stays-data.ts) | `index: true, follow: true` |
| `/stays` | [app/stays/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/stays/page.tsx) | Server (RSC) $\rightarrow$ Client | Static (`○`) | [lib/stays-data.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/stays-data.ts), [constants/pricing.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/constants/pricing.ts) | `index: true, follow: true` |
| `/experiences` | [app/experiences/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/experiences/page.tsx) | Server (RSC) $\rightarrow$ Client | Static (`○`) | [lib/experiences-data.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/experiences-data.ts) | `index: true, follow: true` |
| `/experiences/[id]` | [app/experiences/[id]/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/experiences/%5Bid%5D/page.tsx) | Server (RSC) $\rightarrow$ Client | SSG (`●`) `generateStaticParams` | [lib/experiences-data.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/experiences-data.ts) (13 IDs) | `index: true, follow: true` |
| `/events` | [app/events/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/events/page.tsx) | Server (RSC) $\rightarrow$ Client | Static (`○`) | [lib/events-data.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/events-data.ts) | `index: true, follow: true` |
| `/events/[slug]` | [app/events/[slug]/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/events/%5Bslug%5D/page.tsx) | Server (RSC) $\rightarrow$ Client | SSG (`●`) `generateStaticParams` | [lib/events-data.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/events-data.ts) (4 Slugs) | `index: true, follow: true` |
| `/about` | [app/about/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/about/page.tsx) | Server (RSC) $\rightarrow$ Client | Static (`○`) | Hardcoded story, metrics & [constants/site.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/constants/site.ts) | `index: true, follow: true` |
| `/gallery` | [app/gallery/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/gallery/page.tsx) | Server (RSC) $\rightarrow$ Client | Static (`○`) | Internal image list & Unsplash fallbacks | `index: true, follow: true` |
| `/membership` | [app/membership/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/membership/page.tsx) | Server (RSC) $\rightarrow$ Client | Static (`○`) | [components/membership/membership-plans.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/membership/membership-plans.tsx) | `index: true, follow: true` |
| `/contact` | [app/contact/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/contact/page.tsx) | Server (RSC) $\rightarrow$ Client | Static (`○`) | [lib/contact-config.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/contact-config.ts), [constants/site.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/constants/site.ts) | `index: true, follow: true` |
| `/book` | [app/book/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/book/page.tsx) | Server (RSC) $\rightarrow$ Client | Static (`○`) | [lib/contact-config.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/contact-config.ts) | `index: false, follow: false` |
| `/availability` | [app/availability/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/availability/page.tsx) | Server (RSC) $\rightarrow$ Client | Static (`○`) | Mock inventory array in `availability-client.tsx` | `index: false, follow: false` |
| `/booking/details` | [app/booking/details/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/booking/details/page.tsx) | Server (RSC) $\rightarrow$ Client | Static (`○`) | [lib/booking-context.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/booking-context.tsx) | `index: false, follow: false` |
| `/booking/payment` | [app/booking/payment/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/booking/payment/page.tsx) | Server (RSC) $\rightarrow$ Client | Static (`○`) | [lib/booking-context.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/booking-context.tsx) | `index: false, follow: false` |
| `/booking/confirmation` | [app/booking/confirmation/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/booking/confirmation/page.tsx) | Server (RSC) $\rightarrow$ Client | Static (`○`) | [lib/booking-context.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/booking-context.tsx) | `index: false, follow: false` |
| `/privacy-policy` | [app/privacy-policy/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/privacy-policy/page.tsx) | Server (RSC) $\rightarrow$ Client | Static (`○`) | Static legal copy in `privacy-policy-client.tsx` | `index: true, follow: true` |
| `/terms` | [app/terms/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/terms/page.tsx) | Server (RSC) $\rightarrow$ Client | Static (`○`) | Static legal copy in `terms-client.tsx` | `index: true, follow: true` |
| `/api/enquiry` | [app/api/enquiry/route.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/api/enquiry/route.ts) | API Route Handler | Dynamic (`ƒ`) | Supabase (`event_enquiries`), Nodemailer Gmail SMTP | N/A (API) |

---

### 3.2 Detailed Route Breakdown

#### 1. Home Route (`/`)
- **File:** [app/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/page.tsx)
- **Component Type:** Server Component (RSC).
- **Sections in Order:**
  1. `<Header />`: Fixed floating navigation pill.
  2. `<HeroSlider />`: 3-slide automated hero slider with headline, subhead, and `<BookingBar />`.
  3. `<StaysSection />`: 3 accommodation cards (Wooden Cottage, Deluxe AC, Standard Room) with specs and pricing.
  4. `<ExperiencesSection />`: Grid previewing bonfire, candlelight dining, waterpark, rain dance, etc.
  5. `<AboutVanraiSection />`: Brand philosophy, 2.5-acre acreage badge, stats, and agro-tourism benefits.
  6. `<PrivilegeClubSection />` *(dynamic import)*: VIP Privilege Club teaser banner.
  7. `<GallerySection />` *(dynamic import)*: Masonry photo showcase of resort grounds, pools, and lawns.
  8. `<TestimonialsSection />` *(dynamic import)*: Editorial carousel with quotes, ratings, and reviewer initials.
  9. `<div id="contact"><ContactFormStepper /></div>` *(dynamic import)*: 4-step event planning stepper form.
  10. `<Footer />`: Multi-column footer with contact details, links, embedded Google Map, and copyright.
- **Metadata:** Canonical `/`, absolute title `"Vanrai Resort | Nature Resort in Ahmednagar"`, OG image `/img/vanrai-lawn-sunset.webp`.
- **JSON-LD:** `LodgingBusiness` schema detailing name, description, address, geo coordinates, amenities, checkinTime ("12:00"), checkoutTime ("11:00").

#### 2. Accommodations Route (`/stays`)
- **Files:** [app/stays/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/stays/page.tsx) (Server) + [app/stays/stays-client.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/stays/stays-client.tsx) (Client).
- **Sections in Order:**
  1. `<Header />`
  2. `<StaysHero />`: Typography banner with direct "Explore Stays" and "Compare Specs" actions.
  3. `<StaysFilterNav />`: Sticky filter tabs (`All`, `Wooden Cottages`, `Deluxe AC`, `Standard`, `Compare`).
  4. Room Cards List: Renders `<RoomShowcaseCard />` for each accommodation from `ROOMS_DATA`.
  5. `<StaysComparison />`: Side-by-side technical comparison table (pricing, square footage, bed type, AC, breakfast, pool access, views).
  6. `<StaysPrivileges />`: 6 core privileges (pool access, dining, 2.5 acres agro-sanctuary, sports turf, 24/7 security, stargazing).
  7. `<StaysPolicies />`: Accordion/grid of resort stay policies, check-in rules, cancellation, and ID requirements.
  8. `<StaysMobileBar />`: Fixed mobile-only bottom bar with starting price (₹2,500) and book button.
  9. `<Footer />`
- **Metadata:** Canonical `/stays`, title `"Accommodations & Wooden Cottages"`, OG image `/img/Rooms/StaysCoversHero.webp`.
- **JSON-LD:** `BreadcrumbList` (Home $\rightarrow$ Stays & Cottages).

#### 3. Experiences Route (`/experiences`)
- **Files:** [app/experiences/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/experiences/page.tsx) (Server) + [app/experiences/experiences-client.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/experiences/experiences-client.tsx) (Client).
- **Sections in Order:**
  1. `<Header />`
  2. Hero Banner: Editorial headline and filter tabs (`All`, `Water & Pool`, `Dining & Romance`, `Sports & Recreation`, `Celebrations & Groups`).
  3. Experiences Showcase Grid: Renders interactive cards for 13 experiences from `EXPERIENCES_DATA`.
  4. Curated Package Inclusions & FAQ.
  5. `<Footer />`
- **Metadata:** Canonical `/experiences`, title `"Activities & Curated Experiences"`.
- **JSON-LD:** `BreadcrumbList` (Home $\rightarrow$ Experiences).

#### 4. Experience Detail Route (`/experiences/[id]`)
- **Files:** [app/experiences/[id]/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/experiences/%5Bid%5D/page.tsx) (Server) + [app/experiences/[id]/experience-detail-client.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/experiences/%5Bid%5D/experience-detail-client.tsx) (Client).
- **SSG Parameters:** `generateStaticParams()` pre-renders 13 static pages:
  - `bonfire`, `candle-light`, `rain-dance`, `waterpark`, `dining`, `weddings`, `picnics`, `birthdays`, `anniversary`, `yoga`, `sports`, `indoor`, `kids-zone`.
- **Sections in Order:**
  1. `<Header />`
  2. Experience Detail Hero with full-bleed image and tag badge.
  3. Experience Overview & Story.
  4. Key Highlights List & "Ideal For" guest tags.
  5. High-Resolution Photo Gallery.
  6. Floating / Bottom Concierge Actions: "Book via WhatsApp" and "Call Concierge".
  7. `<Footer />`
- **Metadata:** Dynamic title `${experience.name} | Vanrai Resort`, canonical `/experiences/${id}`.
- **JSON-LD:** `BreadcrumbList` (Home $\rightarrow$ Experiences $\rightarrow$ [Experience Name]).

#### 5. Events Route (`/events`)
- **Files:** [app/events/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/events/page.tsx) (Server) + [app/events/events-client.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/events/events-client.tsx) (Client).
- **Sections in Order:**
  1. `<Header />`
  2. Hero Section: "Sanctuary of Celebrations" with guest capacity badge (500+ guests).
  3. Event Pillars Grid: 4 categories linking to dynamic detail pages (`wedding`, `festive`, `corporate`, `experiential`).
  4. Venue Highlights & Amenities.
  5. Direct Event Planning Form anchor.
  6. `<Footer />`
- **Metadata:** Canonical `/events`, title `"Weddings, Lawns & Celebrations"`.
- **JSON-LD:** `BreadcrumbList` (Home $\rightarrow$ Events & Celebrations).

#### 6. Event Detail Route (`/events/[slug]`)
- **Files:** [app/events/[slug]/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/events/%5Bslug%5D/page.tsx) (Server) + [app/events/[slug]/event-detail-client.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/events/%5Bslug%5D/event-detail-client.tsx) (Client).
- **SSG Parameters:** `generateStaticParams()` pre-renders 4 static slugs:
  - `wedding`, `festive`, `corporate`, `experiential`.
- **Sections in Order:**
  1. `<Header />`
  2. Full-bleed Event Hero with title, category, and description.
  3. Interactive Event Day Timeline (schedule of events from welcome to gala dinner).
  4. Curated Package Tiers (e.g. "Day Wedding" ₹1.5L vs "Full Destination" ₹5L vs "Custom").
  5. Event Venue Photo Gallery.
  6. Dedicated Direct Enquiry CTA.
  7. `<Footer />`
- **Metadata:** Dynamic title `${event.title} | Vanrai Resort`, canonical `/events/${slug}`.
- **JSON-LD:** `BreadcrumbList` (Home $\rightarrow$ Events $\rightarrow$ [Event Title]).

#### 7. About Route (`/about`)
- **Files:** [app/about/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/about/page.tsx) (Server) + [app/about/about-client.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/about/about-client.tsx) (Client).
- **Sections in Order:**
  1. `<Header />`
  2. Hero: "Where Nature Meets Refined Luxury" with 2.5-acre acreage badge.
  3. The Vanrai Story: Agro-tourism roots, tree plantation history, and philosophy.
  4. Key Resort Statistics: 2.5 Acres, 100% Pure Veg, 500+ Event Capacity, 4.8+ Guest Rating.
  5. The Three Sanctuary Pillars: Natural Tranquility, Handcrafted Luxury, Wholesome Nourishment.
  6. Resort Timeline / Milestone Journey.
  7. `<Footer />`
- **Metadata:** Canonical `/about`, title `"About Our Agro-Tourism Resort"`.
- **JSON-LD:** `@graph` containing `BreadcrumbList` and `AboutPage` schema linked to `/#website`.

#### 8. Gallery Route (`/gallery`)
- **Files:** [app/gallery/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/gallery/page.tsx) (Server) + [app/gallery/gallery-client.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/gallery/gallery-client.tsx) (Client).
- **Sections in Order:**
  1. `<Header />`
  2. Hero with photo tour description.
  3. Category Filter Tabs: `All`, `Cottages & Rooms`, `Pool & Waterpark`, `Lawns & Nature`, `Dining & Events`.
  4. Masonry Photo Grid with zoom overlays, captions, and `FallbackImage` handling.
  5. Direct Visit / Booking CTA banner.
  6. `<Footer />`
- **Metadata:** Canonical `/gallery`, title `"Photo Gallery & Property Tour"`.
- **JSON-LD:** `BreadcrumbList` (Home $\rightarrow$ Gallery).

#### 9. Privilege Club Route (`/membership`)
- **Files:** [app/membership/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/membership/page.tsx) (Server) + [app/membership/membership-client.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/membership/membership-client.tsx) (Client).
- **Sections in Order:**
  1. `<Header />`
  2. `<MembershipHero />`: Headline and VIP gold badge.
  3. `<ExclusivePrivileges />`: VIP perks breakdown.
  4. `<MembershipPlans />`: Pricing cards for Couple Membership (₹20,000/yr) and Family Membership (₹30,000/yr).
  5. `<ValueBreakdown />`: Return on investment and savings computation.
  6. `<HowItWorks />`: 3-step membership enrollment process.
  7. `<WhyJoin />`: 6 core membership advantages.
  8. `<MembershipFaqs />`: Expandable FAQ accordion.
  9. `<MembershipTerms />`: Legal disclaimer and rules.
  10. `<FinalCta />`: Bottom WhatsApp inquiry banner.
  11. `<Footer />`
- **Metadata:** Canonical `/membership`, title `"Privilege Club Membership"`.
- **JSON-LD:** `BreadcrumbList` (Home $\rightarrow$ Privilege Club).

#### 10. Contact Route (`/contact`)
- **Files:** [app/contact/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/contact/page.tsx) (Server) + [app/contact/contact-client.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/contact/contact-client.tsx) (Client).
- **Sections in Order:**
  1. `<Header />`
  2. Hero with concierge hours and direct contact channels.
  3. `<ContactFormStepper />`: Full 4-step interactive event inquiry form.
  4. Location Details Card: Address, phone, email, Google Maps directions button.
  5. `<Footer />`
- **Metadata:** Canonical `/contact`, title `"Contact & Reservations"`.
- **JSON-LD:** `BreadcrumbList` (Home $\rightarrow$ Contact Us).

#### 11. Booking Funnel Routes (`/book`, `/availability`, `/booking/*`)
All 5 routes in this group have `robots: { index: false, follow: false }` to prevent search engine indexing of transactional or in-progress steps:

- **`/book` ([app/book/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/book/page.tsx)):**
  - Shows "Online Booking Engine Coming Soon" screen with direct WhatsApp and phone call buttons.
- **`/availability` ([app/availability/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/availability/page.tsx)):**
  - Shows top `<BookingBar />` populated with URL query parameters (`checkIn`, `checkOut`, `adults`, `children`, `roomType`).
  - Shows room inventory cards with live counts (`totalRooms`, `bookedRooms`), add/remove room buttons, add-on checkboxes (bonfire, candlelight dinner), and sticky summary bar leading to `/booking/details`.
- **`/booking/details` ([app/booking/details/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/booking/details/page.tsx)):**
  - Collects Full Name, Mobile, Email, Government ID type/number, and Physical Address.
  - Features simulated mobile OTP button (triggers browser alert with hardcoded mock OTP `1234`).
  - Button pushes to `/booking/payment`.
- **`/booking/payment` ([app/booking/payment/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/booking/payment/page.tsx)):**
  - Renders checkout summary with tabs for UPI, Credit/Debit Card, and Netbanking.
  - Simulated payment button runs `setTimeout` for 2000ms then pushes to `/booking/confirmation`.
- **`/booking/confirmation` ([app/booking/confirmation/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/booking/confirmation/page.tsx)):**
  - Fires full-screen `canvas-confetti` fireworks for 3 seconds.
  - Displays random booking ID (`"VR-" + Math.random().toString(36).substring(2, 8).toUpperCase()`).
  - Displays booked room names, check-in/out dates, guest count, and total paid from `useBooking()`.

#### 12. Legal Routes (`/privacy-policy` & `/terms`)
- **`/privacy-policy` ([app/privacy-policy/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/privacy-policy/page.tsx)):**
  - Displays sections on Information Collected, Use of Data, Security Protocols, Cookies, Third-Party Sharing, and Grievance Officer details.
- **`/terms` ([app/terms/page.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/terms/page.tsx)):**
  - Displays check-in/out timings (12:00 PM / 10:00 AM), strictly pure-vegetarian food policy, advance deposit rules (50%), cancellation schedule, and property conduct rules.

#### 13. API Route Handler (`POST /api/enquiry`)
- **File:** [app/api/enquiry/route.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/api/enquiry/route.ts)
- **Method:** `POST`
- **Payload:** JSON containing `firstName`, `lastName`, `phone`, `email`, `eventType`, `date`, `numDays`, `rooms`, `pax`, `catering`, `cateringType`.
- **Operations:**
  1. Validates presence and regex format of name, phone, and email.
  2. Inserts record into Supabase table `event_enquiries` (if `NEXT_PUBLIC_SUPABASE_URL` is set).
  3. Transports two emails via Nodemailer Gmail SMTP: an alert email to the resort admin and a confirmation email to the guest.
  4. Returns `{ success: true, id: enquiryId, message: "..." }` with status 200.

---

### 3.3 Layout, Error, Loading, and Middleware Architecture

#### Root Layout ([app/layout.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/layout.tsx))
- Sets `viewport`: `themeColor: "#0a0a0a"`, `width: "device-width"`.
- Sets global default metadata and title template: `%s | Vanrai Resort`.
- Sets global `metadataBase`: `new URL(SITE_URL)` (`https://vanrairesort.com`).
- Hierarchy of wrapped providers:
  ```tsx
  <html lang="en" suppressHydrationWarning>
    <body className="font-sans antialiased" suppressHydrationWarning>
      <SmoothScroll>
        <BookingProvider>
          {children}
          <FloatingWhatsApp />
        </BookingProvider>
      </SmoothScroll>
      <Analytics />
    </body>
  </html>
  ```
  - **`SmoothScroll`:** Wraps everything to intercept scroll and momentum.
  - **`BookingProvider`:** Globally mounts the booking context so cart/state persists across client navigations.
  - **`FloatingWhatsApp`:** Rendered globally on every page.
  - **`Analytics`:** Vercel web analytics injected at the root.

#### Client Page Template ([app/template.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/template.tsx))
- A Next.js App Router `template.tsx` file that remounts on route changes.
- Uses a module-level variable `let isInitialLoad = true;` to **skip** animations on first page load (protecting LCP and First Contentful Paint).
- On subsequent client navigations, applies `.animate-page-enter` (`opacity: 0 -> 1`, `translateY(10px) -> 0`).
- Listens to `prefers-reduced-motion` in [app/globals.css:346](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/globals.css#L346) to disable animations for users with vestibular sensitivities.

#### Error Boundary ([app/error.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/error.tsx))
- Client Component receiving `{ error, reset }`.
- Logs the error to console and presents a dark-themed UI with "Try Again" and "Return Home" options.

#### Loading Screen ([app/loading.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/loading.tsx))
- Explicitly returns `null`.
- **Engineering Rationale:** Avoids flashing intrusive skeleton loaders during rapid client-side transitions; smooth scroll and template enter animations manage visual continuity.

#### 404 Not Found ([app/not-found.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/not-found.tsx))
- Server Component featuring animated spinning compass, "Path Not Found" heading, and links to Home and `/stays`. Sets `robots: { index: false, follow: false }`.

#### Middleware & Proxies
- **Root Middleware:** **None.** There is no `middleware.ts` in the project root.
- **`utils/supabase/middleware.ts`:** Exists as an isolated utility file ([utils/supabase/middleware.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/utils/supabase/middleware.ts)), but is **never invoked or exported as Next.js middleware**.

---

## Phase 4: Components and UI

### 4.1 Component Inventory & Props

#### Folder: `components/ui/`

| Component | File Path | Props & Signatures | Where Used | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`Header`** | [components/ui/header.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/header.tsx) | `{ className?: string }` | All pages | Universal fixed floating glassmorphic navbar with logo, links, book button, and mobile sheet. |
| **`Footer`** | [components/ui/footer.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/footer.tsx) | None | All pages | Multi-column footer with links, contact channels, embedded map, social icons, and legal notice. |
| **`FloatingWhatsApp`** | [components/ui/floating-whatsapp.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/floating-whatsapp.tsx) | None | [app/layout.tsx:86](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/layout.tsx#L86) | Floating bottom-right action button with radar pulse, online badge, and hover tooltip. |
| **`HeroSlider`** | [components/ui/hero-slider.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/hero-slider.tsx) | None | [app/page.tsx:97](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/page.tsx#L97) | 3-slide automated image carousel with preloaded slide 0 and embedded `BookingBar`. |
| **`BookingBar`** | [components/ui/booking-bar.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/booking-bar.tsx) | `{ className?: string }` | `HeroSlider`, `AvailabilityContent` | Floating booking bar with popover DayPicker calendars, guest counter, room type dropdown, and submit button. |
| **`FallbackImage`** | [components/ui/fallback-image.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/fallback-image.tsx) | `FallbackImageProps extends ImageProps { fallbackSrc?: string }` | Stays, Experiences, Gallery | Wrapper around `next/image` that intercepts `onError` and renders high-res resort photography fallback. |
| **`ContactFormStepper`** | [components/ui/contact-form-stepper.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/contact-form-stepper.tsx) | None | Homepage, `/contact` | 4-step interactive event planning wizard with custom calendar, live payload validation, and POST to `/api/enquiry`. |
| **`GoogleMap`** | [components/ui/google-map.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/google-map.tsx) | `{ className?: string; src?: string }` | `Footer`, `/contact` | Embedded responsive Google Map iframe with `data-lenis-prevent`. |
| **`StaysSection`** | [components/ui/stays-section.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/stays-section.tsx) | None | [app/page.tsx:100](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/page.tsx#L100) | Homepage grid presenting the 3 room categories with photos, badges, price, and specs. |
| **`ExperiencesSection`**| [components/ui/experiences-section.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/experiences-section.tsx) | None | [app/page.tsx:103](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/page.tsx#L103) | Homepage showcase of key activities with hover cards and links to `/experiences`. |
| **`AboutVanraiSection`** | [components/ui/about-vanrai-section.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/about-vanrai-section.tsx) | None | [app/page.tsx:106](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/page.tsx#L106) | Homepage story section with acreage metrics and nature philosophy. |
| **`PrivilegeClubSection`**| [components/ui/privilege-club-section.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/privilege-club-section.tsx)| None | [app/page.tsx:109](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/page.tsx#L109) | VIP membership preview banner with gold gradient and CTA to `/membership`. |
| **`GallerySection`** | [components/ui/gallery-section.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/gallery-section.tsx) | None | [app/page.tsx:112](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/page.tsx#L112) | Homepage photo grid with category tags and link to `/gallery`. |
| **`TestimonialsSection`**| [components/ui/testimonials-section.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/testimonials-section.tsx)| None | [app/page.tsx:115](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/page.tsx#L115) | Editorial review carousel with star ratings, reviewer initials, and slide controls. |
| **`AnimatedCTAButton`** | [components/ui/animated-cta-button.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/animated-cta-button.tsx) | `{ text?: string; onClick?: () => void; className?: string }` | Header, Stays, About, Membership | Custom button featuring arrow icon and animated background flow on hover/click. |
| **`AnimatedCTAButton2`** | [components/ui/animated-cta-button2.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/animated-cta-button2.tsx) | `{ text?: string; onClick?: () => void; className?: string }` | Header *(imported)* | Variant style of fluid animated CTA button. |
| **`ResizableNavbar`** | [components/ui/resizable-navbar.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/resizable-navbar.tsx) | Sub-components: `Navbar`, `NavBody`, `NavItems`, `MobileNav`, etc. | [components/ui/header.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/header.tsx) | Aceternity-style responsive pill navbar with animated indicator and mobile drawer. |

#### Folder: `components/stays/`

| Component | File Path | Props | Where Used | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`StaysHero`** | [components/stays/stays-hero.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/stays/stays-hero.tsx) | None | [app/stays/stays-client.tsx:9](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/stays/stays-client.tsx#L9) | Hero header with typography and scroll action buttons. |
| **`StaysFilterNav`** | [components/stays/stays-filter-nav.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/stays/stays-filter-nav.tsx) | `{ activeCategory: FilterCategory; onSelectCategory: (cat: FilterCategory) => void }` | [app/stays/stays-client.tsx:10](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/stays/stays-client.tsx#L10) | Sticky room category filter bar. |
| **`RoomShowcaseCard`** | [components/stays/room-showcase-card.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/stays/room-showcase-card.tsx) | `{ room: RoomDetail; priority?: boolean }` | [app/stays/stays-client.tsx:11](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/stays/stays-client.tsx#L11) | High-detail room card with photo carousel, amenities list, package inclusions, and book button. |
| **`StaysComparison`** | [components/stays/stays-comparison.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/stays/stays-comparison.tsx) | None | [app/stays/stays-client.tsx:12](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/stays/stays-client.tsx#L12) | Side-by-side room specifications matrix table. |
| **`StaysPrivileges`** | [components/stays/stays-privileges.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/stays/stays-privileges.tsx) | None | [app/stays/stays-client.tsx:13](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/stays/stays-client.tsx#L13) | 6 resort stay privileges and perks. |
| **`StaysPolicies`** | [components/stays/stays-policies.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/stays/stays-policies.tsx) | None | [app/stays/stays-client.tsx:14](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/stays/stays-client.tsx#L14) | Check-in/out timings, breakfast rules, pool access, and cancellation terms. |
| **`StaysMobileBar`** | [components/stays/stays-mobile-bar.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/stays/stays-mobile-bar.tsx) | `{ onBookNow: () => void }` | [app/stays/stays-client.tsx:15](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/stays/stays-client.tsx#L15) | Sticky bottom bar for mobile screens. |

#### Folder: `components/membership/`

| Component | File Path | Props | Where Used | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`MembershipHero`** | [components/membership/membership-hero.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/membership/membership-hero.tsx) | None | `membership-client.tsx` | Membership title, subhead, and VIP gold badge. |
| **`ExclusivePrivileges`** | [components/membership/exclusive-privileges.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/membership/exclusive-privileges.tsx) | None | `membership-client.tsx` | Cards detailing pool access, dining discounts, and priority booking. |
| **`MembershipPlans`** | [components/membership/membership-plans.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/membership/membership-plans.tsx) | None | `membership-client.tsx` | Couple (₹20,000) and Family (₹30,000) plan cards. |
| **`ValueBreakdown`** | [components/membership/value-breakdown.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/membership/value-breakdown.tsx) | None | `membership-client.tsx` | Cost-benefit cards demonstrating annual savings. |
| **`HowItWorks`** | [components/membership/how-it-works.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/membership/how-it-works.tsx) | None | `membership-client.tsx` | 3-step membership enrollment sequence. |
| **`WhyJoin`** | [components/membership/why-join.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/membership/why-join.tsx) | None | `membership-client.tsx` | Key reasons to become a Privilege Club member. |
| **`MembershipFaqs`** | [components/membership/membership-faqs.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/membership/membership-faqs.tsx) | None | `membership-client.tsx` | Expandable accordion with membership FAQs. |
| **`MembershipTerms`** | [components/membership/membership-terms.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/membership/membership-terms.tsx) | None | `membership-client.tsx` | Legal disclaimers, validity, and renewal terms. |
| **`FinalCta`** | [components/membership/final-cta.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/membership/final-cta.tsx) | None | `membership-client.tsx` | Bottom WhatsApp enrollment CTA banner. |

#### Folder: `components/providers/`

| Component | File Path | Props | Where Used | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`SmoothScroll`** | [components/providers/smooth-scroll.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/providers/smooth-scroll.tsx) | `{ children: React.ReactNode }` | [app/layout.tsx:83](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/layout.tsx#L83) | Lenis smooth scroll provider, hash router handler, popstate support, and `scrollToTarget` export. |

---

### 4.2 Global Styles, Design Tokens, Typography & Responsiveness

#### 1. Typography & Local Font Loading
The entire application standardizes on **General Sans**, loaded locally from `/public/fonts/` with 12 distinct weights and styles defined in [app/globals.css:1-96](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/globals.css#L1-L96):
- Weights loaded: 200 (Extralight), 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold) in both Normal and Italic styles.
- `font-display: swap` ensures zero render-blocking text flash (FOIT).
- Registered into Tailwind v4 theme via `--font-sans: 'General Sans', ui-sans-serif, system-ui, sans-serif;` ([app/globals.css:104](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/globals.css#L104)).

#### 2. Theme & Design Tokens (OKLCH Color Space)
Defined in [app/globals.css:101-211](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/globals.css#L101-L211):
- **Base Aesthetics:** Dark luxury atmosphere anchored by deep charcoal backgrounds (`#0a0a0a` / `#050505`).
- **Emerald Accent:** `#00c97b` / `emerald-500` representing agricultural lushness and eco-sanctuary nature.
- **Ambient Lighting:** Subtle radial gradients (`emerald-500/10` and `green-900/10`) with `blur-[120px]` to `blur-[150px]`.
- **Surface Materiality:** Frosted glassmorphism (`bg-neutral-900/70`, `bg-black/50`, `backdrop-blur-xl`, `border border-white/10`).
- **Border Radii Tokens:** Custom scale defined from `--radius-sm` to `--radius-4xl`.

#### 3. Responsive Strategy
- **Mobile First:** Breakpoint-specific classes (`sm:`, `md:`, `lg:`, `xl:`).
- **Fluid Typography:** Clamp expressions (`clamp(40px, 5.5vw, 86px)`) in hero titles.
- **Mobile Drawer:** Mobile menu handles touch gestures with body scroll lock enabled via `lenis.stop()` ([components/ui/header.tsx:32](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/header.tsx#L32)).
- **Mobile Action Bars:** Sticky bottom bars on `/stays` (`StaysMobileBar`) and floating action button (`FloatingWhatsApp`) positioned above mobile toolbars (`bottom-20 md:bottom-6`).

---

### 4.3 Dead and Unused Components Report

The following 4 components are present in the repository but have **zero imports** in any active route or page:

1. **`components/ui/button.tsx`:** Standard shadcn/ui CVA button primitive. Not imported anywhere; all buttons are hand-crafted or use `AnimatedCTAButton`.
2. **`components/ui/section-header.tsx`:** Generic heading primitive. Not imported anywhere.
3. **`components/ui/showcase-card-1.tsx`:** Aceternity template card titled "Bali Island" ([components/ui/showcase-card-1.tsx:66](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/ui/showcase-card-1.tsx#L66)). Only imported by `components/demo.tsx`.
4. **`components/demo.tsx`:** Standalone demo wrapper for `showcase-card-1.tsx`. Not imported anywhere.
