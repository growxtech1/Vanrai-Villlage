import type { Metadata } from "next";
import { AboutClient } from "./about-client";
import { SITE_NAME, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "About Our Agro-Tourism Resort",
  description:
    `Discover the story of ${SITE_NAME} near Ahmednagar. Spanning 2.5 acres of peaceful greenery, our retreat combines rustic serenity, wooden cottages, and refined luxury for stays and events.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Our Resort | ${SITE_NAME}`,
    description:
      `Learn about ${SITE_NAME}, a premier 2.5-acre nature sanctuary with wooden cottages, event lawns, and farm-fresh dining near Ahmednagar.`,
    url: "/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
          name: "About Us",
          item: `${SITE_URL}/about`,
        },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about#webpage`,
      url: `${SITE_URL}/about`,
      name: `About Our Agro-Tourism Resort | ${SITE_NAME}`,
      description: `Discover the story of ${SITE_NAME} near Ahmednagar. Spanning 2.5 acres of peaceful greenery, our retreat combines rustic serenity, wooden cottages, and refined luxury for stays and events.`,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
