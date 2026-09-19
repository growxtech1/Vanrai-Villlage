import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EVENT_DATA } from "@/lib/events-data";
import { EventDetailClient } from "./event-detail-client";
import { SITE_NAME, SITE_URL } from "@/constants/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(EVENT_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = EVENT_DATA[slug];

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: event.title,
    description: `${event.description.slice(0, 155)}...`,
    alternates: {
      canonical: `/events/${slug}`,
    },
    openGraph: {
      title: `${event.title} | ${SITE_NAME}`,
      description: event.description,
      url: `/events/${slug}`,
      images: [
        {
          url: event.image,
          alt: `${event.title} at ${SITE_NAME}`,
        },
      ],
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = EVENT_DATA[slug];

  if (!data) {
    notFound();
  }

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
        name: "Events",
        item: `${SITE_URL}/events`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.title,
        item: `${SITE_URL}/events/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EventDetailClient data={data} />
    </>
  );
}
