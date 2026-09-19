/**
 * Central site branding and configuration constant.
 * Single source of truth for brand name, canonical base, and resort details.
 */

export const SITE_NAME = "Vanrai Resort";
export const SITE_TAGLINE = "Nature Resort with Luxury Wooden Cottages & Agro-Tourism Stays";
export const SITE_DESCRIPTION =
  "Escape to Vanrai Resort near Ahmednagar. Enjoy handcrafted wooden cottages, water park slides, farm-fresh dining & peaceful green lawns surrounded by 2.5 acres of nature.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://vanrairesort.com");
export const SITE_PHONE = "+91 91582 21111";

export const SITE_LOCATION = {
  full: "G.No 648, Wadgaon Gupta, Ahmednagar City Bypass, Maharashtra 414111",
  street: "G.No 648, Wadgaon Gupta, Ahmednagar City Bypass",
  locality: "Ahmednagar",
  region: "Maharashtra",
  postalCode: "414111",
  country: "IN",
  geo: {
    latitude: 19.1383,
    longitude: 74.7214,
  },
};

export const RESORT_LOCATION = SITE_LOCATION;
