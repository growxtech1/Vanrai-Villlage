# Phase 1 & Phase 2 — Project Overview & Folder Structure

---

## Phase 1: Project Overview

### 1.1 Purpose of the Site and Target Users
**Vanrai Resort** ([https://vanrairesort.com](https://vanrairesort.com)) is the official web application for a 2.5-acre agro-tourism and luxury nature sanctuary located at Wadgaon Gupta, Ahmednagar City Bypass, Maharashtra 414111 ([constants/site.ts:32-47](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/constants/site.ts#L32-L47)).

The website serves four primary commercial and operational functions:
1. **Showcase Accommodations:** Presenting luxury handcrafted wooden cottages (fixed at ₹4,000/night), Deluxe AC rooms (₹3,500/night), and Standard rooms (₹2,500/night) with high-definition imagery, detailed amenity specs, and policies.
2. **Promote Curated Leisure Experiences:** Showcasing swimming pools, water slides, rain dance setups, starlit evening bonfires, candlelight dinners, sports lawns, and organic farm dining.
3. **Drive Event & Wedding Inquiries:** Capturing high-value leads for destination weddings (up to 500+ guests), corporate offsites, and festive galas through an interactive 4-step event planning wizard that persists entries into Supabase and dispatches instant Nodemailer SMTP notification emails.
4. **Facilitate Direct Reservations & Privilege Memberships:** Offering an instant room availability search widget, a simulated booking checkout flow, VIP Privilege Club tier presentations, and floating concierge connections via official WhatsApp.

#### Target Audience:
- **Couples & Honeymooners:** Looking for quiet teak-wood cottages and private candlelight dinners.
- **Families & Children:** Seeking weekend getaways with waterpark slides, swimming pools, rain dance, and open lawns.
- **Wedding Planners & Families:** Sourcing destination wedding grounds with mandap setups, banquet stages, and room blocks.
- **Corporate Teams:** Booking strategy offsites, sports turf tournaments, and group dining.
- **Local Day-Outing & Picnic Groups:** Booking day passes for agro-tourism lawn games and pool recreation.

---

### 1.2 Technology Stack & Exact Versions
Derived directly from [package.json](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/package.json):

| Category | Technology / Library | Exact Version | Purpose & Usage in Project |
| :--- | :--- | :--- | :--- |
| **Core Framework** | `next` | `16.1.1` | App Router, SSR/SSG prerendering, Turbopack dev/build engine |
| **UI Runtime** | `react` | `19.2.3` | Modern component rendering, React Server Components (RSC) |
| **UI Runtime** | `react-dom` | `19.2.3` | React 19 DOM bindings |
| **Language** | `typescript` | `^5` (5.x) | Strict type safety, interfaces, and compile checks |
| **Styling Engine** | `tailwindcss` | `^4` (4.x) | Utility-first CSS using modern CSS `@import "tailwindcss";` |
| **CSS Post-Processor** | `@tailwindcss/postcss` | `^4` (4.x) | PostCSS integration plugin for Tailwind v4 |
| **CSS Animations** | `tw-animate-css` | `^1.4.0` | Tailwind CSS utility class extension for CSS animations |
| **Class Utilities** | `clsx` | `^2.1.1` | Conditional class manipulation |
| **Class Utilities** | `tailwind-merge` | `^3.4.0` | Conflict resolution for merging Tailwind CSS classes |
| **Variant Authority** | `class-variance-authority` | `^0.7.1` | Type-safe variant generation (`cva`) for UI primitives |
| **UI Primitives** | `radix-ui` | `^1.4.3` | Headless accessible components (`@radix-ui/react-slot`) |
| **Smooth Scrolling** | `lenis` | `^1.3.17` | Smooth inertia-based viewport scrolling ([components/providers/smooth-scroll.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components/providers/smooth-scroll.tsx)) |
| **Animation Library** | `framer-motion` | `^12.25.0` | Motion graphics, slide transitions, fade-ins, and layout animations |
| **Animation Library** | `motion` | `^12.25.0` | Standalone Motion library *(Duplicate package: see audit below)* |
| **Celebration Effects** | `canvas-confetti` | `^1.9.4` | Fireworks/confetti burst on booking confirmation page |
| **Date Handling** | `date-fns` | `^4.1.0` | Lightweight date math, comparisons, and formatting |
| **Date Picker** | `react-day-picker` | `^9.14.0` | Interactive calendar grid in hero and availability booking bars |
| **Icons** | `lucide-react` | `^0.562.0` | Primary icon set across all UI components and navigation |
| **Icons** | `@tabler/icons-react` | `^3.36.1` | Secondary icon set installed in dependencies |
| **Intersection Observer** | `react-intersection-observer` | `^10.0.0` | Viewport entry detection |
| **Database Client** | `@supabase/supabase-js` | `^2.116.0` | Supabase Postgres client used in [app/api/enquiry/route.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/api/enquiry/route.ts) |
| **Supabase SSR** | `@supabase/ssr` | `^0.12.7` | SSR cookie authentication client for Supabase |
| **Email Service** | `nodemailer` | `^10.0.10` | SMTP client dispatching emails via Gmail SSL (Port 465) in [lib/email.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/email.ts) |
| **Email Service** | `resend` | `^6.28.1` | Resend API SDK *(Unused in active codebase: see audit below)* |
| **Analytics** | `@vercel/analytics` | `^2.0.1` | First-party Vercel real-user metrics mounted in [app/layout.tsx](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/layout.tsx) |
| **Image Optimization** | `sharp` | `^0.35.4` | High-performance image transform backend for Next.js image optimization |

---

### 1.3 Dependency Audit: Grouped by Purpose & Flags

#### Core & Framework
- `next` (16.1.1): Next.js App Router core framework.
- `react` (19.2.3): React library.
- `react-dom` (19.2.3): React DOM renderer.
- `typescript` (^5): Type definitions and compiler.
- `@types/node` (^20): Node.js runtime type definitions.
- `@types/react` (^19): React 19 type definitions.
- `@types/react-dom` (^19): React 19 DOM type definitions.

#### Styling & Layout
- `tailwindcss` (^4): Engine for utility classes.
- `@tailwindcss/postcss` (^4): PostCSS build plugin for Tailwind v4.
- `tw-animate-css` (^1.4.0): CSS animation utilities.
- `clsx` (^2.1.1): Construct `className` strings conditionally.
- `tailwind-merge` (^3.4.0): Merges conflicting Tailwind classes cleanly.
- `class-variance-authority` (^0.7.1): Variant orchestration for UI buttons.

#### Animation & Micro-Interactions
- `framer-motion` (^12.25.0): Used throughout headers, sliders, cards, and modal transitions.
- `motion` (^12.25.0): **FLAG (DUPLICATE / REDUNDANT):** `motion` is the unified rebranding of `framer-motion` by the same team. Both packages are listed in `dependencies`, creating unnecessary package bloat.
- `lenis` (^1.3.17): Handles smooth momentum scrolling and hash-link navigation.
- `canvas-confetti` (^1.9.4): Renders canvas particle burst on `/booking/confirmation`.
- `@types/canvas-confetti` (^1.9.0): Type definitions for `canvas-confetti`. **FLAG (MISPLACED):** Placed in `dependencies` instead of `devDependencies`.
- `react-intersection-observer` (^10.0.0): Viewport scroll trigger hooks.

#### UI Components & Icons
- `radix-ui` (^1.4.3): Headless primitive slot utilities.
- `lucide-react` (^0.562.0): Primary icons for navigation, features, contact channels, and amenities.
- `@tabler/icons-react` (^3.36.1): **FLAG (POTENTIALLY UNUSED):** Zero direct imports found in application source code (`app/`, `components/`, `lib/`). Can be removed to slim dependencies.
- `react-day-picker` (^9.14.0): Date range and single-day picker in booking widgets.
- `date-fns` (^4.1.0): Modern date manipulation utility used with `react-day-picker`.

#### Backend, Database & Analytics
- `@supabase/supabase-js` (^2.116.0): Core Supabase client for Postgres database operations.
- `@supabase/ssr` (^0.12.7): **FLAG (UNUSED CODEBASE ARTIFACT):** Used only in [utils/supabase/](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/utils/supabase/), which is never imported by any active page or route.
- `nodemailer` (^10.0.10): Transports luxury event inquiry emails to admin and guest via Gmail SMTP.
- `@types/nodemailer` (^8.0.2): TypeScript definitions for Nodemailer in `devDependencies`.
- `resend` (^6.28.1): **FLAG (UNUSED IN CODE):** Referenced in `.env.example`, but [lib/email.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/lib/email.ts) exclusively implements `nodemailer`. `resend` is never imported or executed in the active project.
- `@vercel/analytics` (^2.0.1): Web analytics tracking via `<Analytics />` in [app/layout.tsx:89](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/app/layout.tsx#L89).

#### Build & Tooling
- `@next/bundle-analyzer` (^16.3.5): Visualizes bundle sizes when `ANALYZE=true`.
- `cross-env` (^10.1.0): Cross-platform environment variable setting for npm scripts.
- `eslint` (^9): Linting engine.
- `eslint-config-next` (16.1.1): Next.js ESLint ruleset (Core Web Vitals + TypeScript).
- `sharp` (^0.35.4): Native C++ image compression backend for Next.js production builds.

---

### 1.4 Scripts in `package.json`

| Script Command | Full Execution Line | Purpose & What It Does |
| :--- | :--- | :--- |
| `npm run dev` | `next dev` | Launches local development server with Turbopack on `http://localhost:3000`. |
| `npm run build` | `next build` | Compiles optimized production bundle using Turbopack, verifies types, and pre-renders static HTML for all 41 route targets. |
| `npm run analyze` | `cross-env ANALYZE=true next build` | Sets `process.env.ANALYZE="true"` and triggers a production build, launching interactive client/server Webpack/Turbopack bundle visualizer maps in the browser. |
| `npm run start` | `next start` | Runs the compiled Node.js production server on `localhost:3000` (used for standalone Node deployments). |
| `npm run lint` | `eslint` | Runs ESLint across all files using flat config [eslint.config.mjs](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/eslint.config.mjs). |

---

### 1.5 Configuration Files & Non-Default Settings

#### 1. [next.config.ts](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/next.config.ts)
```typescript
import type { NextConfig } from "next";
import path from "path";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  trailingSlash: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
  async redirects() {
    return [
      { source: "/about-vanrai", destination: "/about", permanent: true },
      { source: "/memberships", destination: "/membership", permanent: true },
      { source: "/vanrai-village-resort", destination: "/", permanent: true },
      { source: "/village-resort", destination: "/", permanent: true },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
```
- **Turbopack Root:** Explicitly set to `path.join(__dirname)` to ensure module resolution anchors cleanly in the subfolder project structure.
- **Trailing Slash:** `false` enforces strict non-trailing-slash canonical URLs (e.g. `/stays` not `/stays/`).
- **Compression:** Gzip/Brotli compression explicitly enabled (`compress: true`).
- **Next Image Optimization:**
  - Formats: Modern AVIF prioritized ahead of WebP (`["image/avif", "image/webp"]`).
  - Qualities: Calibrated to `[75, 80]` balancing crisp luxury photography with small network payloads.
  - Remote Patterns: Whitelists `images.unsplash.com` and `upload.wikimedia.org`.
- **Permanent Canonical Redirects:**
  - `/about-vanrai` $\rightarrow$ `/about` (308 Permanent)
  - `/memberships` $\rightarrow$ `/membership` (308 Permanent)
  - `/vanrai-village-resort` $\rightarrow$ `/` (308 Permanent)
  - `/village-resort` $\rightarrow$ `/` (308 Permanent)
- **Bundle Analyzer Wrapper:** Wraps the configuration in `withBundleAnalyzer`.

#### 2. [tsconfig.json](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/tsconfig.json)
- `target`: `ES2017`
- `module`: `esnext` with `moduleResolution: "bundler"` (optimized for modern Vite/Turbopack tools).
- `strict`: `true` enforces strict TypeScript checks.
- `paths`: Path mapping `@/*` mapped to `./*`.
- `plugins`: Registered Next.js TypeScript plugin (`"name": "next"`).

#### 3. [eslint.config.mjs](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/eslint.config.mjs)
- Modern ESLint 9 Flat Config syntax using `defineConfig` and `globalIgnores`.
- Imports `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
- Explicitly ignores `.next/**`, `out/**`, `build/**`, and `next-env.d.ts`.

#### 4. [postcss.config.mjs](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/postcss.config.mjs)
- Single plugin: `@tailwindcss/postcss` for Tailwind CSS v4 pipeline.

#### 5. [components.json](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/components.json)
- shadcn/ui configuration:
  - Style: `new-york`
  - React Server Components: `rsc: true`
  - Base Color: `neutral`
  - CSS Variables: `true`
  - CSS Path: `app/globals.css`
  - Added external registry: `@aceternity` (`https://ui.aceternity.com/registry/{name}.json`).

#### 6. [netlify.toml](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/netlify.toml) & [_redirects](file:///d:/APP/Vanrai-Updated/Vanrai-Villlage/_redirects)
- **FLAG (DEPRECATED / CONFLICT RISK):** `netlify.toml` specifies `publish = ".next"` and redirects `/*` to `/index.html` (HTTP 200). Similarly, `_redirects` contains `/* /index.html 200`. These are legacy Single Page Application (SPA) fallback files from earlier Netlify test deployments. Since the site runs on **Vercel** with Next.js App Router, these files are completely ignored by Vercel, but could break SSR/API routes if ever deployed to Netlify.

---

## Phase 2: Folder Structure

### 2.1 Complete Directory Tree
*(Excluding `node_modules`, `.next`, and `.git`)*

```
d:\APP\Vanrai-Updated\Vanrai-Villlage\
├── .env.example                      # Sample template of all environment variable names
├── .env.local                        # Local development environment credentials (uncommitted)
├── .gitignore                        # Git exclusion rules (node_modules, .env, build output)
├── README.md                         # Brief default Next.js template readme
├── _redirects                        # Legacy Netlify SPA rewrite file (unused on Vercel)
├── about.txt                         # Dead/unreferenced draft copy of about-client.tsx
├── evennts.txt                       # Dead/unreferenced draft copy of events-client.tsx
├── components.json                   # shadcn/ui and Aceternity registry configuration
├── eslint.config.mjs                 # Flat ESLint 9 configuration with Next.js rules
├── netlify.toml                      # Legacy Netlify build & rewrite configuration (unused)
├── next-env.d.ts                     # Next.js automatic TypeScript type declarations
├── next.config.ts                    # Next.js Turbopack, images, and canonical redirects config
├── package-lock.json                 # Exact deterministic dependency lockfile
├── package.json                      # Project manifest, dependencies, and npm scripts
├── postcss.config.mjs                # PostCSS config registering Tailwind v4
├── tsconfig.json                     # TypeScript compiler configuration and path aliases
│
├── app/                              # Next.js App Router root
│   ├── apple-icon.png                # iOS home screen touch icon (180x180)
│   ├── favicon.ico                   # Legacy browser tab favicon (32x32)
│   ├── icon.png                      # PWA web icon (512x512)
│   ├── globals.css                   # Global styles, General Sans @font-face, OKLCH design tokens
│   ├── layout.tsx                    # Root layout: metadataBase, font, SmoothScroll, BookingProvider, WhatsApp, Analytics
│   ├── template.tsx                  # Client navigation enter animation wrapper
│   ├── loading.tsx                   # Instant navigation handler (returns null to preserve smooth scrolling)
│   ├── error.tsx                     # Global error boundary with retry button
│   ├── not-found.tsx                 # Custom 404 error page with compass animation
│   ├── manifest.ts                   # Web App Manifest generator (PWA metadata)
│   ├── robots.ts                     # Robots.txt generator (/api/ disallow, sitemap link)
│   ├── sitemap.ts                    # XML sitemap generator with static date stamps
│   ├── page.tsx                      # Homepage (Server Component): Hero, Stays, Experiences, About, Testimonials, Form
│   │
│   ├── about/                        # About Vanrai Resort route
│   │   ├── page.tsx                  # Server component with AboutPage metadata & JSON-LD
│   │   └── about-client.tsx          # Client component: Hero, Story, Metrics, Pillars, Timeline
│   │
│   ├── api/                          # Backend API endpoints
│   │   └── enquiry/
│   │       └── route.ts              # POST /api/enquiry: Validates payload, inserts to Supabase, sends Nodemailer emails
│   │
│   ├── availability/                 # Room availability & search route
│   │   ├── page.tsx                  # Server component with noindex robots metadata
│   │   └── availability-client.tsx   # Client component: interactive inventory grid, room picker, add-ons
│   │
│   ├── book/                         # Direct booking engine entry route
│   │   ├── page.tsx                  # Server component with noindex robots metadata
│   │   └── book-client.tsx           # Client component: "Online Booking Engine Coming Soon" & direct contact actions
│   │
│   ├── booking/                      # Multi-step checkout funnel
│   │   ├── details/
│   │   │   ├── page.tsx              # Server component with noindex robots metadata
│   │   │   └── details-client.tsx    # Client component: guest details, mock OTP verification (1234)
│   │   ├── payment/
│   │   │   ├── page.tsx              # Server component with noindex robots metadata
│   │   │   └── payment-client.tsx    # Client component: simulated UPI, Card, Netbanking checkout
│   │   └── confirmation/
│   │       ├── page.tsx              # Server component with noindex robots metadata
│   │       └── confirmation-client.tsx # Client component: booking confirmation, random VR-ID, confetti animation
│   │
│   ├── contact/                      # Dedicated Contact Us route
│   │   ├── page.tsx                  # Server component with Contact metadata & Breadcrumb JSON-LD
│   │   └── contact-client.tsx        # Client component: Header, ContactFormStepper, Concierge info, Footer
│   │
│   ├── events/                       # Events & celebrations hub
│   │   ├── page.tsx                  # Server component with Events metadata & Breadcrumb JSON-LD
│   │   ├── events-client.tsx         # Client component: Event category cards, capacity metrics, inquiry CTAs
│   │   └── [slug]/                   # Dynamic event category routes (wedding, festive, corporate, experiential)
│   │       ├── page.tsx              # SSG page: generateStaticParams, metadata, breadcrumb JSON-LD
│   │       └── event-detail-client.tsx # Client component: gallery, timeline, packages, inquiry actions
│   │
│   ├── experiences/                  # Activities & experiences hub
│   │   ├── page.tsx                  # Server component with Experiences metadata & JSON-LD
│   │   ├── experiences-client.tsx    # Client component: category filters, 13 experience showcase cards
│   │   └── [id]/                     # Dynamic experience detail routes (bonfire, rain-dance, etc.)
│   │       ├── page.tsx              # SSG page: generateStaticParams for 13 items, metadata, JSON-LD
│   │       └── experience-detail-client.tsx # Client component: hero gallery, highlights, WhatsApp CTA
│   │
│   ├── gallery/                      # Resort photo tour route
│   │   ├── page.tsx                  # Server component with Gallery metadata & JSON-LD
│   │   └── gallery-client.tsx        # Client component: category filter tabs, high-res masonry photo grid
│   │
│   ├── membership/                   # Privilege Club membership route
│   │   ├── page.tsx                  # Server component with Membership metadata & JSON-LD
│   │   └── membership-client.tsx     # Client component: VIP perks, Couple/Family plan comparison, FAQs
│   │
│   ├── privacy-policy/               # Privacy policy legal route
│   │   ├── page.tsx                  # Server component with canonical metadata
│   │   └── privacy-policy-client.tsx # Client component: data collection, security, guest privacy terms
│   │
│   ├── stays/                        # Accommodations hub
│   │   ├── page.tsx                  # Server component with Stays metadata & JSON-LD
│   │   └── stays-client.tsx          # Client component: hero, filter nav, room cards, comparison table, policies
│   │
│   └── terms/                        # Terms & conditions legal route
│       ├── page.tsx                  # Server component with canonical metadata
│       └── terms-client.tsx          # Client component: booking rules, check-in policies, pure-veg code
│
├── components/                       # Shared React UI components
│   ├── demo.tsx                      # DEAD CODE: Unused wrapper importing showcase-card-1.tsx
│   ├── membership/                   # Membership page modular sections
│   │   ├── exclusive-privileges.tsx  # VIP perks breakdown cards
│   │   ├── final-cta.tsx             # Bottom conversion banner with WhatsApp link
│   │   ├── how-it-works.tsx          # 3-step membership enrollment explanation
│   │   ├── membership-faqs.tsx       # Expandable accordion of membership questions
│   │   ├── membership-hero.tsx       # Membership landing hero with gold badge
│   │   ├── membership-plans.tsx      # Couple (₹20k) and Family (₹30k) pricing cards
│   │   ├── membership-terms.tsx      # Membership terms and conditions disclaimers
│   │   ├── value-breakdown.tsx       # ROI and savings calculation cards
│   │   └── why-join.tsx              # Feature grid highlighting exclusive benefits
│   │
│   ├── providers/                    # Context and runtime wrappers
│   │   └── smooth-scroll.tsx         # Lenis smooth scroll provider, hash router handler, popstate support
│   │
│   ├── stays/                        # Stays page modular sections
│   │   ├── room-showcase-card.tsx    # Detailed room presentation card with image carousels and amenities
│   │   ├── stays-comparison.tsx      # Side-by-side room specifications matrix table
│   │   ├── stays-filter-nav.tsx      # Sticky accommodation category filter bar
│   │   ├── stays-hero.tsx            # Stays hero section with typography and quick book button
│   │   ├── stays-mobile-bar.tsx      # Sticky mobile bottom bar with starting price and book CTA
│   │   ├── stays-policies.tsx        # Resort stay rules, check-in timings, and cancellation terms
│   │   └── stays-privileges.tsx      # Inclusions (pool, dining, agro-tour, sports turf)
│   │
│   └── ui/                           # Reusable UI primitives and section blocks
│       ├── about-vanrai-section.tsx  # Homepage About section with metrics and story
│       ├── animated-cta-button.css   # Keyframe styles for fluid animated button
│       ├── animated-cta-button.tsx   # Fluid animated primary CTA button with arrow icon
│       ├── animated-cta-button2.css  # Secondary keyframe styles for CTA button
│       ├── animated-cta-button2.tsx  # Secondary variation of fluid CTA button
│       ├── booking-bar.tsx           # Floating glassmorphic booking bar with date-picker and guest count
│       ├── button.tsx                # DEAD CODE: Unused shadcn CVA button primitive
│       ├── contact-form-stepper.tsx  # 4-step interactive event inquiry wizard with calendar and live POST
│       ├── experiences-section.tsx   # Homepage experiences card grid
│       ├── fallback-image.tsx        # Next.js Image wrapper with automatic fallback on broken URL
│       ├── floating-whatsapp.tsx     # Floating bottom-right WhatsApp action button with radar pulse
│       ├── footer.tsx                # Multi-column resort footer with links, socials, map, copyright
│       ├── gallery-section.tsx       # Homepage photo preview grid with lightbox/view-all CTA
│       ├── google-map.tsx            # Responsive embedded Google Map iframe with data-lenis-prevent
│       ├── header.tsx                # Universal floating glassmorphic navbar with mobile drawer
│       ├── hero-slider.tsx           # Fullscreen automated 3-slide image carousel with high-contrast copy
│       ├── privilege-club-section.tsx# Homepage Privilege Club teaser banner
│       ├── resizable-navbar.tsx      # Aceternity-inspired floating pill navbar and mobile sheet
│       ├── section-header.tsx        # DEAD CODE: Unused heading primitive
│       ├── showcase-card-1.tsx       # DEAD CODE: Aceternity "Bali Island" card demo
│       ├── stays-section.tsx         # Homepage stays card grid
│       └── testimonials-section.tsx  # Editorial testimonial carousel with star ratings and initials
│
├── constants/                        # Single source of truth application constants
│   ├── pricing.ts                    # Nightly room rates (₹4,000, ₹3,500, ₹2,500) and formatINR helper
│   └── site.ts                       # Site name, canonical URL, phone, address, coordinates, socials
│
├── lib/                              # Business logic, helpers, data models
│   ├── booking-context.tsx           # React Context holding in-memory booking dates, guests, cart, totals
│   ├── contact-config.ts             # Contact details, WhatsApp message generator, and prefilled strings
│   ├── email.ts                      # Nodemailer transporter, luxury HTML templates, sendEnquiryEmails()
│   ├── events-data.ts                # Static event packages, timelines, descriptions, and galleries
│   ├── experiences-data.ts           # Static dictionary of 13 resort experiences with metadata
│   ├── stays-data.ts                 # Static accommodation details, amenities, pricing, and policies
│   ├── supabase.ts                   # Server-side Supabase client factory and EventEnquiryRecord interface
│   └── utils.ts                      # Classname combiner function (`cn = twMerge(clsx(...))`)
│
├── public/                           # Static public assets served at root
│   ├── icon-192.png                  # PWA icon 192x192
│   ├── icon-512.png                  # PWA icon 512x512
│   ├── fonts/                        # General Sans font family (OTF files)
│   │   ├── GeneralSans-Regular.otf
│   │   ├── GeneralSans-Medium.otf
│   │   ├── GeneralSans-Semibold.otf
│   │   ├── GeneralSans-Bold.otf
│   │   └── ... (12 font variants total)
│   ├── img/                          # Optimized resort photography (WebP, JPG, PNG)
│   │   ├── hero-1.png, hero-2.png, hero-3.png
│   │   ├── pool-sunset-luxury.jpg, waterpark-slides.jpg, rain-dance.jpg
│   │   ├── vanrai-lawn-sunset.webp, vanrai-walkway-night.webp
│   │   ├── dining-hall-wide.webp, event-wedding-hall-stage.webp
│   │   └── Rooms/                    # Accommodation hero photos
│   │       ├── CottageHouse.jpeg
│   │       ├── DeluxeAc.jpeg
│   │       ├── StandardRoom.jpeg
│   │       └── StaysCoversHero.webp
│   └── svg/
│       └── Vanrai.svg                # Vector brand logo mark
│
├── supabase/                         # Database migrations and schemas
│   └── schema.sql                    # SQL script creating event_enquiries table, indexes, and RLS policies
│
└── utils/                            # DEAD CODE / UTILITIES
    └── supabase/                     # Unused Supabase SSR boilerplate clients
        ├── client.ts                 # Browser client factory (never imported)
        ├── middleware.ts             # Middleware session refresh helper (never imported)
        └── server.ts                 # Server Component client factory (never imported)
```

---

### 2.2 Naming Conventions & Server-Page + Client-Component Split

The codebase rigorously enforces Next.js App Router best practices regarding the **Server Component (RSC) + Client Component split**:

#### 1. The Route Wrapper Pattern (`page.tsx` + `<route>-client.tsx`)
Across nearly every route in `app/`, the developer separates server-only responsibilities from client-side state:
- **`page.tsx` (Server Component):**
  - Contains **no** `"use client"` directive.
  - Exports `export const metadata: Metadata = { ... }` or `export async function generateMetadata()`.
  - Injects JSON-LD structured data (`<script type="application/ld+json">`) directly into the HTML stream on the server.
  - Executes `generateStaticParams()` for dynamic routes (`app/experiences/[id]/page.tsx` and `app/events/[slug]/page.tsx`), enabling pre-rendering of all dynamic paths at build time.
  - Performs 404 validation via `notFound()` if an invalid ID or slug is requested.
  - Imports and renders the corresponding `<RouteClient />` as its root element.
- **`<route>-client.tsx` (Client Component):**
  - Declares `"use client"` at line 1.
  - Manages browser APIs, React state (`useState`, `useRef`, `useEffect`), Framer Motion scroll and hover animations, DayPicker calendars, and Lenis smooth scrolling.

#### 2. File & Component Naming Conventions
- **Routing:** Lowercase kebab-case folder names matching URL paths (`/privacy-policy`, `/experiences/[id]`).
- **Client Components:** Named `<route>-client.tsx` (e.g., `stays-client.tsx`, `events-client.tsx`, `contact-client.tsx`).
- **Data & Configuration Files:** Named `<domain>-data.ts` or `<domain>-config.ts` (e.g., `stays-data.ts`, `events-data.ts`, `contact-config.ts`, `site.ts`).
- **UI Components:** Kebab-case filenames (`booking-bar.tsx`, `room-showcase-card.tsx`), exporting PascalCase components (`BookingBar`, `RoomShowcaseCard`).
- **CSS Modules & Global Styles:** `globals.css` and scoped companion stylesheets (`animated-cta-button.css`).
