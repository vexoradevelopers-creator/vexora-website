import type { NextConfig } from "next";

/**
 * Static export, deployable to both hosts from the same code.
 *
 * GitHub Pages serves a project repo from /<repo>, so its workflow sets
 * NEXT_PUBLIC_BASE_PATH=/vexora-website. Vercel serves from the root and leaves
 * it unset. asset() reads the same variable to prefix files in /public, which
 * next/image leaves bare when optimisation is off.
 *
 * There is no server at runtime on either host, which is why the enquiry form
 * posts to Supabase directly rather than through a route handler.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
