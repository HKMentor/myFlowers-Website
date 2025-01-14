import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com"], // Add your allowed domains here
  },
};

export default nextConfig;
