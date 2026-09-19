import type { Metadata } from "next";
import { ConfirmationClient } from "./confirmation-client";
import { SITE_NAME } from "@/constants/site";

export const metadata: Metadata = {
  title: "Reservation Confirmed",
  description: `Your reservation at ${SITE_NAME} has been confirmed. View your booking details and check-in instructions.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function ConfirmationPage() {
  return <ConfirmationClient />;
}
