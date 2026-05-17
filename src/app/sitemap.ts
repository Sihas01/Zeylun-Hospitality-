import type { MetadataRoute } from "next";

const siteUrl = "https://hospitality.zeylun.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/packages/guest-acquisition-system",
    "/privacy-policy",
    "/terms-of-service"
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/packages") ? 0.8 : 0.4
  }));
}
