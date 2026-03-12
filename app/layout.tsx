import type { Metadata } from "next";
import "./globals.css";
import { BookingProvider } from "@/lib/booking-context";

export const metadata: Metadata = {
  title: "Vanrai Village",
  description: "Experience sustainable rural living with modern amenities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <BookingProvider>
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
