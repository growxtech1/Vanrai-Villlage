import type { Metadata } from "next";
import { GuestDetailsClient } from "./details-client";
import { SITE_NAME } from "@/constants/site";

export const metadata: Metadata = {
  title: "Guest Details & Reservation",
  description: `Provide your reservation details and guest verification for booking at ${SITE_NAME}.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function GuestDetailsPage() {
  return <GuestDetailsClient />;
}
