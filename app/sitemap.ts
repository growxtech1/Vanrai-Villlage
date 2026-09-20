import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";
import { EXPERIENCES_DATA } from "@/lib/experiences-data";
import { EVENT_DATA } from "@/lib/events-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const experiencePages: MetadataRoute.Sitemap = Object.keys(EXPERIENCES_DATA).map((id) => ({
    url: `${SITE_URL}/experiences/${id}`,
    lastModified: new Date("2026-09-19"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const eventPages: MetadataRoute.Sitemap = Object.keys(EVENT_DATA).map((slug) => ({
    url: `${SITE_URL}/events/${slug}`,
    lastModified: new Date("2026-09-19"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Use fixed dates per route rather than build-time new Date()
  // Update these when you make significant content changes to a route.
  return [
    {
      url: `${SITE_URL}`,
      lastModified: new Date("2026-09-19"),
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: `${SITE_URL}/stays`,
      lastModified: new Date("2026-09-19"),
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${SITE_URL}/experiences`,
      lastModified: new Date("2026-09-19"),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    ...experiencePages,
    {
      url: `${SITE_URL}/events`,
      lastModified: new Date("2026-09-19"),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    ...eventPages,
    {
      url: `${SITE_URL}/gallery`,
      lastModified: new Date("2026-09-19"),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date("2026-09-19"),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${SITE_URL}/membership`,
      lastModified: new Date("2026-09-19"),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-09-19"),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date("2026-09-19"),
      priority: 0.5,
      changeFrequency: "yearly",
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date("2026-09-19"),
      priority: 0.5,
      changeFrequency: "yearly",
    },
    // NOTE: /book, /availability, and /booking/* are intentionally excluded
    // from the sitemap — those pages have robots: noindex.
  ];
}
