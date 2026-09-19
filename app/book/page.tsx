import type { Metadata } from "next";
import { BookClient } from "./book-client";
import { SITE_NAME, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "Book Cottages & Rooms Online",
  description:
    `Reserve your luxury wooden cottage or deluxe room directly with ${SITE_NAME}. Contact our concierge for reservations, best rate guarantees, and exclusive perks.`,
  alternates: {
    canonical: `${SITE_URL}/book`,
  },
  openGraph: {
    title: `Book Your Stay | ${SITE_NAME}`,
    description:
      `Reserve your stay directly with ${SITE_NAME}. Best rate guarantee on wooden cottages and resort rooms.`,
    url: `${SITE_URL}/book`,
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
      name: "Book Now",
      item: `${SITE_URL}/book`,
    },
  ],
};

export default function BookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BookClient />
    </>
  );
}
