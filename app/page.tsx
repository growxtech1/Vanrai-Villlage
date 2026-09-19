import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/ui/header";
import { HeroSlider } from "@/components/ui/hero-slider";
import { StaysSection } from "@/components/ui/stays-section";
import { ExperiencesSection } from "@/components/ui/experiences-section";
import { AboutVanraiSection } from "@/components/ui/about-vanrai-section";
import { Footer } from "@/components/ui/footer";
import { SITE_NAME, SITE_LOCATION, SITE_PHONE } from "@/constants/site";
import { WOODEN_COTTAGE_PRICE_PER_NIGHT, STANDARD_ROOM_PRICE_PER_NIGHT, formatINR } from "@/constants/pricing";

// Dynamic imports for below-the-fold components to reduce initial JavaScript execution
const PrivilegeClubSection = dynamic(
  () => import("@/components/ui/privilege-club-section").then((mod) => mod.PrivilegeClubSection),
  { ssr: true }
);
const GallerySection = dynamic(
  () => import("@/components/ui/gallery-section").then((mod) => mod.GallerySection),
  { ssr: true }
);
const TestimonialsSection = dynamic(
  () => import("@/components/ui/testimonials-section").then((mod) => mod.TestimonialsSection),
  { ssr: true }
);
const ContactFormStepper = dynamic(
  () => import("@/components/ui/contact-form-stepper").then((mod) => mod.ContactFormStepper),
  { ssr: true }
);

export const metadata: Metadata = {
  title: {
    absolute: "Vanrai Resort | Nature Resort in Ahmednagar",
  },
  description:
    `Experience serene nature at ${SITE_NAME} in Ahmednagar. Enjoy luxury wooden cottages from ${formatINR(WOODEN_COTTAGE_PRICE_PER_NIGHT)}/night, swimming pool, organic pure-veg dining, adventure activities, and banquet lawns.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vanrai Resort | Nature Resort in Ahmednagar",
    description:
      `Experience serene nature at ${SITE_NAME} in Ahmednagar. Luxury wooden cottages, swimming pool, organic dining, and event venues.`,
    url: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: SITE_NAME,
  description:
    "Nature resort featuring premium wooden cottages, swimming pool, organic farm dining, and scenic event venues near Ahmednagar.",
  image: "https://vanrairesort.com/images/wooden-cottage.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_LOCATION.street,
    addressLocality: SITE_LOCATION.locality,
    addressRegion: SITE_LOCATION.region,
    postalCode: SITE_LOCATION.postalCode,
    addressCountry: SITE_LOCATION.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.1417,
    longitude: 74.7289,
  },
  url: "https://vanrairesort.com",
  telephone: SITE_PHONE,
  priceRange: `₹${STANDARD_ROOM_PRICE_PER_NIGHT} - ₹${WOODEN_COTTAGE_PRICE_PER_NIGHT}`,
  amenities: [
    "Swimming Pool",
    "Free Wi-Fi",
    "Organic Farm Dining",
    "Children Play Area",
    "Adventure Activities",
    "Banquet Lawn",
    "Free Parking",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-green-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Universal Floating Header */}
      <Header />

      {/* Hero Section - Full Width, starts from top */}
      <HeroSlider />

      {/* Stays Section - Room Cards */}
      <StaysSection />

      {/* Experiences & Activities Section */}
      <ExperiencesSection />

      {/* About Vanrai Section */}
      <AboutVanraiSection />

      {/* Privilege Club Section */}
      <PrivilegeClubSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Form Stepper */}
      <div id="contact">
        <ContactFormStepper />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
