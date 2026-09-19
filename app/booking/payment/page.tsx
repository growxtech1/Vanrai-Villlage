import type { Metadata } from "next";
import { PaymentClient } from "./payment-client";
import { SITE_NAME } from "@/constants/site";

export const metadata: Metadata = {
  title: "Secure Payment & Checkout",
  description: `Complete your secure payment for reservation at ${SITE_NAME}.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaymentPage() {
  return <PaymentClient />;
}
