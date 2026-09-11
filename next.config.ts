import type { NextConfig } from "next";

/**
 * Static export, hosted on Vercel.
 *
 * There is no server at runtime, which is why the enquiry form posts to Supabase
 * directly rather than through a route handler. Images are served as-is; they are
 * pre-optimised WebP/PNG in /public.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
