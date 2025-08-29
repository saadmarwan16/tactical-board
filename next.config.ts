import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://media.api-sports.io/**")],
  },
};

export default nextConfig;
