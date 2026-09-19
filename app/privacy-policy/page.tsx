import type { Metadata } from "next";
import { PrivacyPolicyClient } from "@/app/privacy-policy/privacy-policy-client";
import { SITE_NAME, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    `Read the privacy policy of ${SITE_NAME}. Learn how we collect, use, and protect your personal and reservation information when booking or visiting our resort.`,
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      `Privacy policy and guest data protection guidelines for ${SITE_NAME} near Ahmednagar.`,
    url: `${SITE_URL}/privacy-policy`,
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
      name: "Privacy Policy",
      item: `${SITE_URL}/privacy-policy`,
    },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PrivacyPolicyClient />
    </>
  );
}
