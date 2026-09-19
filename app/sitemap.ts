import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const routes = [
    { url: `${SITE_URL}`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/stays`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/book`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/availability`, priority: 0.8, changeFrequency: "daily" as const },
    { url: `${SITE_URL}/experiences`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/experiences/bonfire`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/experiences/candle-light`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/experiences/rain-dance`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/experiences/waterpark`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/experiences/dining`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/experiences/weddings`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/events`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/events/wedding`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/events/festive`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/events/corporate`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/events/experiential`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/gallery`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/membership`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/privacy-policy`, priority: 0.5, changeFrequency: "yearly" as const },
    { url: `${SITE_URL}/terms`, priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    ...route,
    lastModified: currentDate,
  }));
}
