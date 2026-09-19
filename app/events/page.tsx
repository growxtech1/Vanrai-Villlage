import type { Metadata } from "next";
import { EventsClient } from "./events-client";
import { SITE_NAME, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "Weddings, Lawns & Celebrations",
  description:
    `Host destination weddings, corporate retreats, festive gatherings, and private celebrations at ${SITE_NAME} near Ahmednagar. Expansive lawns, banquet halls, and full catering.`,
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: `Events, Weddings & Celebrations | ${SITE_NAME}`,
    description:
      `Discover event venues at ${SITE_NAME} near Ahmednagar. Destination weddings, corporate offsites, festive galas, and poolside banquets with 500+ guest capacity.`,
    url: "/events",
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
      name: "Events & Celebrations",
      item: `${SITE_URL}/events`,
    },
  ],
};

export default function EventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EventsClient />
    </>
  );
}
