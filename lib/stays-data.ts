export interface RoomGalleryImage {
  src: string;
  alt: string;
  label: string;
}

import { WOODEN_COTTAGE_PRICE_PER_NIGHT } from "@/constants/pricing";

export interface RoomDetail {
  id: string;
  name: string;
  shortName: string;
  type: "Wooden Cottage" | "Deluxe AC Room" | "Standard Room";
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice: number;
  priceUnit: string;
  capacity: string;
  maxAdults: number;
  bedType: string;
  bathType: string;
  climate: string;
  view: string;
  hasBreakfast: boolean;
  hasPoolAccess: boolean;
  badge: {
    label: string;
    variant: "amber" | "emerald" | "neutral" | "blue";
  };
  rating: number;
  reviewsCount: number;
  images: {
    src: string;
    alt: string;
    label: string;
  }[];
  highlights: string[];
  amenities: {
    iconName: string;
    name: string;
    category: "comfort" | "bathroom" | "entertainment" | "essentials";
  }[];
  packageInclusions: string[];
  bestFor: string;
  checkInNotice?: string;
}

export const ROOMS_DATA: RoomDetail[] = [
  {
    id: "wooden-cottage",
    name: "Luxury Wooden Cottage",
    shortName: "Wooden Cottage",
    type: "Wooden Cottage",
    tagline: "Rustic Luxury & Private Teak Retreat Amidst Nature",
    description: "Handcrafted teak cottages nestled among green foliage, offering maximum privacy, warm timber interiors, and a tranquil escape.",
    longDescription: "Our signature Wooden Cottages provide an intimate rustic sanctuary. Built with premium teak timber and natural materials, each cottage features plush bedding, nature-facing sit-outs, and handcrafted accents that evoke peaceful village tranquility while providing elite resort comforts.",
    price: WOODEN_COTTAGE_PRICE_PER_NIGHT,
    originalPrice: WOODEN_COTTAGE_PRICE_PER_NIGHT,
    priceUnit: "per night",
    capacity: "Up to 4 Guests (2 Adults + 2 Kids or 3 Adults)",
    maxAdults: 4,
    bedType: "King Size Solid Teak Bed",
    bathType: "Modern Ensuite with Hot Water",
    climate: "Split AC & Natural Cross Ventilation",
    view: "Lush Greenery & Garden Canopy",
    hasBreakfast: true,
    hasPoolAccess: true,
    badge: {
      label: "Premium Signature Stay",
      variant: "amber",
    },
    rating: 4.9,
    reviewsCount: 128,
    images: [
      {
        src: "/img/Rooms/CottageHouse.jpeg",
        alt: "Luxury Wooden Cottage exterior and warm architecture",
        label: "Cottage Facade",
      },
      {
        src: "/img/Rooms/StaysCoversHero.webp",
        alt: "Wooden Cottage front porch and serene nature surroundings",
        label: "Private Sit-Out",
      },
      {
        src: "/img/vanrai-walkway-night.webp",
        alt: "Evening illuminated pathway leading to cottages",
        label: "Illuminated Walkway",
      },
      {
        src: "/img/vanrai_resort_view.webp",
        alt: "Panoramic green resort landscape surrounding cottages",
        label: "Forest Canopy",
      }
    ],
    highlights: [
      "Maximum privacy in independent cottage layout",
      "Handcrafted solid teak woodwork & rustic ambiance",
      "Complimentary chef-curated morning breakfast included",
      "Complimentary resort swimming pool access",
      "Private nature sit-out overlooking lush gardens",
      "Individual high-efficiency quiet split AC"
    ],
    amenities: [
      { iconName: "Wind", name: "High-Efficiency Split AC", category: "comfort" },
      { iconName: "Wifi", name: "High-Speed Wi-Fi", category: "entertainment" },
      { iconName: "Coffee", name: "Tea & Coffee Maker", category: "essentials" },
      { iconName: "Tv", name: "Flat-screen HD TV", category: "entertainment" },
      { iconName: "Droplets", name: "24/7 Hot & Cold Shower", category: "bathroom" },
      { iconName: "Sparkles", name: "Premium Toiletries Kit", category: "bathroom" },
      { iconName: "ShieldCheck", name: "Electronic Safe & Wardrobe", category: "essentials" },
      { iconName: "Utensils", name: "In-Room Dining Service", category: "essentials" },
    ],
    packageInclusions: [
      "Lavish Breakfast Buffet Included",
      "Resort Swimming Pool Access Included",
      "Access to Sports Turf, Badminton & Indoor Games",
      "Guided Morning Village & Agro-Farm Tour",
      "Dedicated On-Call Resort Concierge"
    ],
    bestFor: "Couples, Honeymooners, Romantic Escapes & Nature Lovers"
  },
  {
    id: "deluxe-ac",
    name: "Deluxe AC Room",
    shortName: "Deluxe AC",
    type: "Deluxe AC Room",
    tagline: "Contemporary Comfort Blended with Village Serenity",
    description: "Spacious, climate-controlled rooms crafted for modern comfort, featuring contemporary appointments and tranquil green courtyard views.",
    longDescription: "Our Deluxe AC Rooms deliver the ideal balance between contemporary hospitality and natural countryside living. With sound insulation, high-grade linen, modern ensuite bathrooms, and premium amenities, these rooms offer pure comfort for couples and families looking for a relaxing holiday.",
    price: 3500,
    originalPrice: 3500,
    priceUnit: "per night",
    capacity: "Up to 4 Guests (2 Adults + 2 Kids or 3 Adults)",
    maxAdults: 4,
    bedType: "Queen Size Comfort Bed + Divan",
    bathType: "Spacious Modern Bath with Geyser",
    climate: "Full Air-Conditioning (Climate Controlled)",
    view: "Central Courtyard & Lawn View",
    hasBreakfast: true,
    hasPoolAccess: true,
    badge: {
      label: "Most Popular Choice",
      variant: "emerald",
    },
    rating: 4.8,
    reviewsCount: 214,
    images: [
      {
        src: "/img/Rooms/DeluxeAc.jpeg",
        alt: "Deluxe AC Room interior with premium bedding and decor",
        label: "Room Interior",
      },
      {
        src: "/img/pool-aerial-sunset.jpg",
        alt: "Resort swimming pool adjacent to deluxe wings",
        label: "Poolside Access",
      },
      {
        src: "/img/vanrai-lawn-sunset.webp",
        alt: "Lush sunset lawn view in front of deluxe accommodations",
        label: "Lawn Garden View",
      },
      {
        src: "/img/dining-hall-interior.webp",
        alt: "Resort dining hall near the deluxe rooms",
        label: "Dining Access",
      }
    ],
    highlights: [
      "Modern climate-controlled split AC interior",
      "Complimentary breakfast buffet included",
      "Complimentary resort swimming pool access",
      "Relaxing living space with comfortable seating",
      "Smart modern washroom with premium fittings",
      "Fast optical fiber Wi-Fi throughout"
    ],
    amenities: [
      { iconName: "Wind", name: "Rapid-Cool Split Air Conditioning", category: "comfort" },
      { iconName: "Wifi", name: "High-Speed Wi-Fi", category: "entertainment" },
      { iconName: "Coffee", name: "Electric Kettle & Tea Setup", category: "essentials" },
      { iconName: "Tv", name: "Cable / Satellite HD TV", category: "entertainment" },
      { iconName: "Droplets", name: "Continuous Hot Water", category: "bathroom" },
      { iconName: "BedDouble", name: "Fresh Towels & Linen", category: "bathroom" },
      { iconName: "Clock", name: "24-Hour Front Desk Support", category: "essentials" },
      { iconName: "Car", name: "Designated Reserved Parking", category: "essentials" },
    ],
    packageInclusions: [
      "Complimentary Nutritious Breakfast Included",
      "Resort Swimming Pool Access Included",
      "Lawn Sports & Kids Play Zone Access",
      "Organic Farm Experience & Nursery Tour",
      "Express Check-in Experience"
    ],
    bestFor: "Families with Children, Couples, & Weekend Leisure Stays"
  },
  {
    id: "standard-room",
    name: "Standard Room",
    shortName: "Standard Room",
    type: "Standard Room",
    tagline: "Authentic, Restful & Pocket-Friendly Village Living",
    description: "Simple, welcoming, and spotless accommodation designed for value-conscious travelers, small families, and groups.",
    longDescription: "Our Standard Rooms are tailored for guests who prioritize neatness, genuine rustic warmth, and peace of mind. Built with traditional ventilation and surrounded by swaying trees, these comfortable rooms provide an authentic countryside resting haven with essential conveniences at an unbeatable value.",
    price: 2500,
    originalPrice: 2500,
    priceUnit: "per night",
    capacity: "Up to 3 Guests (2 Adults + 1 Child)",
    maxAdults: 3,
    bedType: "Comfort Queen Bed or Twin Beds",
    bathType: "Clean Attached Bathroom with Geyser",
    climate: "Ceiling Fan & Natural Cross Ventilation",
    view: "Green Garden & Village Walkway",
    hasBreakfast: false,
    hasPoolAccess: true,
    badge: {
      label: "Best Value",
      variant: "blue",
    },
    rating: 4.7,
    reviewsCount: 96,
    images: [
      {
        src: "/img/Rooms/StandardRoom.jpeg",
        alt: "Standard Room clean interior and comfortable bedding",
        label: "Standard Room Interior",
      },
      {
        src: "/img/vanrai-lawn-sunset.webp",
        alt: "Green peaceful open lawns around the standard rooms",
        label: "Garden Walkways",
      },
      {
        src: "/img/vanrai_resort_view.webp",
        alt: "Vanrai Resort trees and landscape",
        label: "Resort Panorama",
      }
    ],
    highlights: [
      "Clean, serene, and budget-conscious accommodation",
      "Close proximity to gardens, lawns & activity zones",
      "Complimentary resort swimming pool access",
      "Attached private washroom with hot water",
      "Natural cooling and peaceful village atmosphere",
      "Room only (breakfast not included; dining available at restaurant)"
    ],
    amenities: [
      { iconName: "Fan", name: "High-Speed Ceiling Fan & Ventilation", category: "comfort" },
      { iconName: "Wifi", name: "Complimentary Wi-Fi in Public Zones", category: "entertainment" },
      { iconName: "Droplets", name: "Hot Water Facility", category: "bathroom" },
      { iconName: "BedDouble", name: "Daily Housekeeping & Clean Linen", category: "bathroom" },
      { iconName: "Coffee", name: "Bottled Drinking Water Included", category: "essentials" },
      { iconName: "Car", name: "Free Secure Vehicle Parking", category: "essentials" },
    ],
    packageInclusions: [
      "Resort Swimming Pool Access Included",
      "Access to Resort Garden & Open Lawns",
      "Complimentary Outdoor Games Equipment",
      "Agro-Tourism Farm Walk Experience",
      "24/7 Security & Caretaker Support"
    ],
    bestFor: "Budget-conscious travelers, Backpackers, Small Groups & Short Stays"
  }
];

export const RESORT_PRIVILEGES = [
  {
    icon: "Waves",
    title: "Resort Swimming Pool Access",
    desc: "Clean, well-maintained family swimming pool and refreshing splash pool access included with your room stay.",
    badge: "Pool Included"
  },
  {
    icon: "UtensilsCrossed",
    title: "Authentic Multi-Cuisine Dining",
    desc: "Wholesome Maharashtrian village specialties, North Indian delicacies, and freshly prepared farm food.",
    badge: "Farm-Fresh"
  },
  {
    icon: "Sprout",
    title: "2.5 Acres Agro-Tourism Sanctuary",
    desc: "Stroll through organic tree groves, flowering gardens, shaded sit-outs, and serene walking paths.",
    badge: "Agro Experience"
  },
  {
    icon: "Gamepad2",
    title: "Sports Turf & Recreation",
    desc: "Box cricket, badminton turf, table tennis, carrom, children's park with swings, slides, and obstacle fun.",
    badge: "All Ages"
  },
  {
    icon: "ShieldCheck",
    title: "Gated Security & 24/7 Support",
    desc: "Round-the-clock security, CCTV surveillance, private secure parking, and on-call concierge assistance.",
    badge: "Family Safe"
  },
  {
    icon: "Sunset",
    title: "Evening Bonfire & Stargazing",
    desc: "Clear unpolluted country night skies, gentle cool breeze, and occasional bonfire gatherings under the stars.",
    badge: "Serene Nights"
  }
];

export const STAY_POLICIES = [
  {
    title: "Check-in & Check-out Timings",
    content: "Check-in begins at 12:00 PM (Noon) and Check-out is by 10:00 AM. Early check-in and late check-out can be requested in advance and are subject to room availability."
  },
  {
    title: "Complimentary Breakfast Policy",
    content: "Complimentary chef-curated breakfast is included exclusively for guests staying in Luxury Wooden Cottages and Deluxe AC Rooms. Guests in Standard Rooms may order breakfast separately at the resort dining hall."
  },
  {
    title: "Swimming Pool Access",
    content: "All room stays include complimentary access to the resort swimming pool during standard operational pool hours (proper nylon/polyester swimwear required). Note: Waterpark slides are a separate resort facility."
  },
  {
    title: "Food & In-House Dining Guidelines",
    content: "Vanrai Resort offers fresh in-house multi-cuisine dining prepared with local farm produce. Guests can enjoy breakfast, lunch, and dinner at our dining hall or request outdoor lawn seating."
  },
  {
    title: "Child & Extra Bed Policies",
    content: "Children up to 5 years stay free of charge using existing bedding. For children aged 6–11 or additional adult guests, an extra mattress with bedding and amenities is available at ₹800 per night."
  },
  {
    title: "Booking & Cancellation Policy",
    content: "A 50% advance deposit secures your reservation. Free rescheduling is permitted up to 72 hours prior to check-in. Cancellations within 48 hours are subject to standard resort booking terms."
  },
  {
    title: "ID Proof & Registration",
    content: "As per government regulations, valid government-issued photo identification (Aadhaar Card, Passport, or Driving License) is mandatory for all adult guests upon check-in."
  }
];
