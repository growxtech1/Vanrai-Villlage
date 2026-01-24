import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
