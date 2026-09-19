import type { NextConfig } from "next";
import path from "path";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  trailingSlash: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about-vanrai",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/memberships",
        destination: "/membership",
        permanent: true,
      },
      {
        source: "/vanrai-village-resort",
        destination: "/",
        permanent: true,
      },
      {
        source: "/village-resort",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);

