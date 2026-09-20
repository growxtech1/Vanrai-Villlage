import type { Metadata } from "next";
import { ContactClient } from "./contact-client";
import { SITE_NAME, SITE_LOCATION, SITE_PHONE_DISPLAY, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    `Get in touch with ${SITE_NAME} at ${SITE_LOCATION.full}. Call ${SITE_PHONE_DISPLAY} for cottage bookings, destination wedding enquiries, corporate retreat quotes, and general concierge services.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact & Reservations | ${SITE_NAME}`,
    description:
      `Contact ${SITE_NAME} for reservations, event planning, and concierge assistance. Located on Ahmednagar City Bypass.`,
    url: "/contact",
    images: [
      {
        url: "/img/vanrai-reception-night.webp",
        width: 1200,
        height: 630,
        alt: "Vanrai Resort - Reception & Contact",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact Us",
      item: `${SITE_URL}/contact`,
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
