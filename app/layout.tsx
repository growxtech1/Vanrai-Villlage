import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import "react-day-picker/dist/style.css";
import { BookingProvider } from "@/lib/booking-context";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

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
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SmoothScroll>
          <BookingProvider>
            {children}
            <FloatingWhatsApp />
          </BookingProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
