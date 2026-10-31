import type { MetadataRoute } from "next";

// Static export needs route handlers marked static to be prerendered.
export const dynamic = "force-static";

const base = "https://vexoradevelopers.com.np";

// Paths end in "/" to match trailingSlash: true in next.config.ts.
const routes = [
  "/",
  "/services/",
  "/work/",
  "/how-we-work/",
  "/about/",
  "/contact/",
  "/privacy/",
  "/terms/",
];

const legal = new Set(["/privacy/", "/terms/"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: legal.has(path) ? "yearly" : "monthly",
    priority: path === "/" ? 1 : legal.has(path) ? 0.3 : 0.8,
  }));
}
