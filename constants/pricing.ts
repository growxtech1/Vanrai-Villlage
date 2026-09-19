/**
 * Centralized pricing single source of truth for Vanrai Resort.
 * Task 3: Wooden Cottage price is fixed at ₹4,000 per night.
 */

export const WOODEN_COTTAGE_PRICE_PER_NIGHT = 4000;
export const DELUXE_AC_ROOM_PRICE_PER_NIGHT = 3500;
export const STANDARD_ROOM_PRICE_PER_NIGHT = 2500;

/**
 * Format currency in Indian standard numbering format: ₹4,000
 */
export const formatINR = (amount: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};
