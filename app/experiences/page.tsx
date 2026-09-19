import type { Metadata } from "next";
import { ExperiencesClient } from "./experiences-client";
import { SITE_NAME, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "Activities & Curated Experiences",
  description:
    `Explore outdoor adventures and leisure experiences at ${SITE_NAME}. Swimming pool, water slides, rain dance, bonfires, candlelight dinners, sports turf, and picnic lawns near Ahmednagar.`,
  alternates: {
    canonical: "/experiences",
  },
  openGraph: {
    title: `Activities & Curated Experiences | ${SITE_NAME}`,
    description:
      `Discover exciting activities at ${SITE_NAME}: swimming pool, rain dance, bonfires, candlelight dining, sports lawns, and indoor recreation.`,
    url: "/experiences",
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
      name: "Experiences",
      item: `${SITE_URL}/experiences`,
    },
  ],
};

export default function ExperiencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExperiencesClient />
    </>
  );
}
