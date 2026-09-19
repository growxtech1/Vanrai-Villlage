import type { Metadata } from "next";
import { TermsClient } from "@/app/terms/terms-client";
import { SITE_NAME, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    `Review the terms and conditions for bookings, check-in policies, pure-vegetarian guidelines, and stay regulations at ${SITE_NAME}.`,
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  openGraph: {
    title: `Terms & Conditions | ${SITE_NAME}`,
    description:
      `Reservation terms, check-in/out policies, and property guidelines for ${SITE_NAME} near Ahmednagar.`,
    url: `${SITE_URL}/terms`,
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
      name: "Terms & Conditions",
      item: `${SITE_URL}/terms`,
    },
  ],
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TermsClient />
    </>
  );
}
