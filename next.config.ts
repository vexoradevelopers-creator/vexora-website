import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 *
 * Pages serves a project repo from /<repo>, so basePath keeps every internal
 * link and asset URL correct. There is no server at runtime, which is why the
 * enquiry form posts to Supabase directly rather than through a route handler.
 */
const repo = "vexora-website";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  images: { unoptimized: true },
  trailingSlash: true,
  // Exposed so asset() can prefix /public files that next/image leaves bare.
  env: { NEXT_PUBLIC_BASE_PATH: `/${repo}` },
};

export default nextConfig;
