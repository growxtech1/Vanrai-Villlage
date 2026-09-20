/**
 * Centralized Contact & Sales Configuration for Vanrai Resort
 * Single source of truth for phone numbers, WhatsApp, and official email.
 */

export const RESORT_CONTACT = {
  // Official Primary Sales & Concierge Phone Number
  phoneDisplay: "+91 97300 01579",
  phoneRaw: "919730001579",
  phoneTel: "tel:+919730001579",

  // Official Sales WhatsApp
  whatsAppNumber: "919730001579",
  whatsAppBaseUrl: "https://wa.me/919730001579",

  // Official Resort Email
  emailAddress: "vanrai_resort@yahoo.co.in",
  emailMailto: "mailto:vanrai_resort@yahoo.co.in",

  // Physical Location
  address: "G.No 648, Wadgaon Gupta, Ahmednagar City Bypass, Maharashtra 414111",
  mapQuery: "Vanrai+Resort+Ahmednagar",

  // Social Channels
  socials: {
    // CONFIRMED
    instagram: "https://www.instagram.com/vanraivillage/",
    facebook: "https://www.facebook.com/vanraivillageresort/",
    youtube: "https://www.youtube.com/@VanraiResort"
  }
} as const;

/**
 * Contextual WhatsApp Message Generator
 * Returns properly encoded WhatsApp URL with pre-filled enquiry message.
 */
export function getWhatsAppUrl(message?: string): string {
  if (!message) {
    return RESORT_CONTACT.whatsAppBaseUrl;
  }
  return `${RESORT_CONTACT.whatsAppBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  general: "Hi, I would like to know more about Vanrai Resort.",
  stay: "Hi, I would like to enquire about staying at Vanrai Resort.",
  room: (roomName: string) => `Hi, I would like to enquire about booking the ${roomName} at Vanrai Resort.`,
  events: "Hi, I would like to enquire about hosting an event at Vanrai Resort.",
  eventCategory: (categoryName: string) => `Hi, I would like to enquire about hosting a ${categoryName} event at Vanrai Resort.`,
  dining: "Hi, I would like to enquire about dining at Vanrai Resort.",
  experience: (experienceName?: string) =>
    experienceName
      ? `Hi, I would like to know more about the ${experienceName} experience at Vanrai Resort.`
      : "Hi, I would like to know more about the experiences at Vanrai Resort.",
  membership: (planName?: string) =>
    planName
      ? `Hi, I would like to enquire about the ${planName} Membership at Vanrai Resort.`
      : "Hi, I would like to enquire about the Privilege Club Membership at Vanrai Resort."
} as const;
