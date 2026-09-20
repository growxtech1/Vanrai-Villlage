import type { Metadata } from "next";
import { StaysClient } from "./stays-client";
import { SITE_NAME, SITE_URL } from "@/constants/site";
import { WOODEN_COTTAGE_PRICE_PER_NIGHT, STANDARD_ROOM_PRICE_PER_NIGHT, DELUXE_AC_ROOM_PRICE_PER_NIGHT, formatINR } from "@/constants/pricing";

export const metadata: Metadata = {
  title: "Accommodations & Wooden Cottages",
  description:
    `Discover peaceful stays at ${SITE_NAME}. Luxury wooden cottages from ${formatINR(WOODEN_COTTAGE_PRICE_PER_NIGHT)}/night and Deluxe AC rooms with complimentary pure-veg breakfast, plus Standard rooms from ${formatINR(STANDARD_ROOM_PRICE_PER_NIGHT)}/night with swimming pool access.`,
  alternates: {
    canonical: "/stays",
  },
  openGraph: {
    title: `Accommodations & Wooden Cottages | ${SITE_NAME}`,
    description:
      `Explore serene wooden cottages starting at ${formatINR(WOODEN_COTTAGE_PRICE_PER_NIGHT)}/night and resort rooms in Ahmednagar with complimentary breakfast and swimming pool access.`,
    url: "/stays",
    images: [
      {
        url: "/img/Rooms/StaysCoversHero.webp",
        width: 1200,
        height: 630,
        alt: "Vanrai Resort - Wooden Cottages & Luxury Accommodations",
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
      name: "Stays & Cottages",
      item: `${SITE_URL}/stays`,
    },
  ],
};

export default function StaysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StaysClient />
    </>
  );
}
