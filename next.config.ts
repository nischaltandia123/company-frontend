import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.yourdomain.com",
      },
    ],
  },

  assetPrefix: isProduction
    ? "https://cdn.yourdomain.com"
    : "",

  poweredByHeader: false,

  compress: true,
};

export default nextConfig;