import type { NextConfig } from "next";

const tmdbImageBaseUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;

if (!tmdbImageBaseUrl) {
  throw new Error("NEXT_PUBLIC_TMDB_IMAGE_BASE_URL is not defined.");
}

const tmdbImageHostname = new URL(tmdbImageBaseUrl).hostname;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: tmdbImageHostname,
      },
    ],
  },
};

export default nextConfig;
