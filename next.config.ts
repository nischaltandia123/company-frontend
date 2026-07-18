import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
      unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.mirrorcube.in",
      },
    ],
  },

  assetPrefix: isProduction
    ? "https://cdn.mirrorcube.in"
    : "",

  poweredByHeader: false,

  compress: true,
};

export default nextConfig;