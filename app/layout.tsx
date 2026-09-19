import type { Metadata, Viewport } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import { BookingProvider } from "@/lib/booking-context";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/constants/site";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vanrai Resort | Nature Resort in Ahmednagar",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  generator: "Next.js",
  keywords: [
    "Vanrai Resort",
    "resort in Ahmednagar",
    "wooden cottages Ahmednagar",
    "nature resort Maharashtra",
    "agro tourism resort",
    "family resort with water park",
    "pure veg resort",
    "destination wedding lawns Ahmednagar"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Vanrai Resort | Nature Resort in Ahmednagar",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/img/vanrai-lawn-sunset.webp",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Scenic Sunset View & Green Lawns`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanrai Resort | Nature Resort in Ahmednagar",
    description: SITE_DESCRIPTION,
    images: ["/img/vanrai-lawn-sunset.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
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

