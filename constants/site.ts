/**
 * Central site branding and configuration constant.
 * Single source of truth for brand name, canonical base, and resort details.
 */

export const SITE_NAME = "Vanrai Resort";
export const SITE_TAGLINE = "Nature Resort with Luxury Wooden Cottages & Agro-Tourism Stays";
export const SITE_DESCRIPTION =
  "Escape to Vanrai Resort near Ahmednagar. Enjoy handcrafted wooden cottages, water park slides, farm-fresh dining & peaceful green lawns surrounded by 2.5 acres of nature.";

/** Always the non-www canonical URL in production. */
export const SITE_URL =
  process.env.NODE_ENV === "production"
    ? "https://vanrairesort.com"
    : (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000");

/** Schema / tel: link format — no spaces. */
export const SITE_PHONE = "+919730001579";
/** Human-readable display format. */
export const SITE_PHONE_DISPLAY = "+91 97300 01579";

export const SITE_EMAIL = "vanrai_resort@yahoo.co.in";

/** Confirmed social profile URLs. */
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/vanraivillage/",
  facebook: "https://www.facebook.com/vanraivillageresort/",
  youtube: "https://www.youtube.com/@VanraiResort",
  // X/Twitter: account does not exist — do not add
} as const;

export const SITE_LOCATION = {
  full: "G.No 648, Wadgaon Gupta, Ahmednagar City Bypass, Ahmednagar, Maharashtra 414111",
  street: "G.No 648, Wadgaon Gupta, Ahmednagar City Bypass",
  locality: "Ahmednagar",
  region: "Maharashtra",
  postalCode: "414111",
  country: "IN",
  geo: {
    // TODO: replace with coordinates copied from Google Maps pin.
    // Current value in constants (used by JSON-LD after this fix): 19.1383, 74.7214
    // Old hardcoded value in app/page.tsx JSON-LD (now removed): 19.1417, 74.7289
    // Pick whichever matches the actual Google Maps pin for the resort.
    latitude: 19.1383,
    longitude: 74.7214,
  },
};

export const RESORT_LOCATION = SITE_LOCATION;
