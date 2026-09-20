import type { Metadata } from "next";
import { AvailabilityClient } from "./availability-client";
import { SITE_NAME, SITE_URL } from "@/constants/site";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Check Room Availability";
  const description =
    "Check real-time availability for handcrafted wooden cottages, deluxe AC rooms, and nature stays at Vanrai Resort Ahmednagar. Instant reservation and direct booking perks.";

  return {
    title,
    description,
    keywords: [
      "Vanrai Resort availability",
      "book cottage Ahmednagar",
      "wooden cottage booking",
      "resort room booking Maharashtra",
      "weekend resort check in"
    ],
    alternates: {
      canonical: `${SITE_URL}/availability`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/availability`,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/img/Rooms/CottageHouse.jpeg",
          width: 1200,
          height: 630,
          alt: "Luxury Wooden Cottages Availability at Vanrai Resort",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/img/Rooms/CottageHouse.jpeg"],
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function AvailabilityPage() {
  return <AvailabilityClient />;
}
