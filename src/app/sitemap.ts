import type { MetadataRoute } from "next";

// Static export needs route handlers marked static to be prerendered.
export const dynamic = "force-static";

const base = "https://vexoradevelopers.com.np";

// Paths end in "/" to match trailingSlash: true in next.config.ts.
const routes = ["/", "/services/", "/work/", "/how-we-work/", "/about/", "/contact/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
