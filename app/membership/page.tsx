import type { Metadata } from "next";
import { MembershipClient } from "./membership-client";
import { SITE_NAME, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privilege Club Membership",
  description:
    `Join the ${SITE_NAME} Privilege Club. Enjoy complimentary cottage nights, 10% dining discounts, priority event booking, pool access, and exclusive member perks year-round.`,
  alternates: {
    canonical: "/membership",
  },
  openGraph: {
    title: `Privilege Club Membership | ${SITE_NAME}`,
    description:
      `Exclusive resort memberships at ${SITE_NAME}. Unlock complimentary stays, restaurant discounts, and priority event access in Ahmednagar.`,
    url: "/membership",
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
      name: "Privilege Club",
      item: `${SITE_URL}/membership`,
    },
  ],
};

export default function MembershipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MembershipClient />
    </>
  );
}
