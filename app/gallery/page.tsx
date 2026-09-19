import type { Metadata } from "next";
import { GalleryClient } from "./gallery-client";
import { SITE_NAME, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "Photo Gallery & Property Tour",
  description:
    `Explore photos of ${SITE_NAME} in Ahmednagar. View our luxury wooden cottages, resort swimming pool, water slides, banquet lawns, dining restaurant, and scenic evening grounds.`,
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: `Photo Gallery | ${SITE_NAME}`,
    description:
      `High-definition photo gallery of ${SITE_NAME}: wooden cottages, luxury pool, rain dance, dining halls, and event stages.`,
    url: "/gallery",
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
      name: "Gallery",
      item: `${SITE_URL}/gallery`,
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryClient />
    </>
  );
}
