import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EXPERIENCES_DATA } from "@/lib/experiences-data";
import { ExperienceDetailClient } from "./experience-detail-client";
import { SITE_NAME, SITE_URL } from "@/constants/site";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(EXPERIENCES_DATA).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const experience = EXPERIENCES_DATA[id];

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  return {
    title: experience.name,
    description: `${experience.summary} ${experience.tagline}`,
    alternates: {
      canonical: `/experiences/${id}`,
    },
    openGraph: {
      title: `${experience.name} | ${SITE_NAME}`,
      description: experience.description,
      url: `/experiences/${id}`,
      images: [
        {
          url: experience.image,
          alt: `${experience.name} at ${SITE_NAME}`,
        },
      ],
    },
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const experience = EXPERIENCES_DATA[id];

  if (!experience) {
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
        name: "Experiences",
        item: `${SITE_URL}/experiences`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: experience.name,
        item: `${SITE_URL}/experiences/${id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExperienceDetailClient experience={experience} />
    </>
  );
}
