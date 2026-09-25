import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/property";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/extended-stay", "/room", "/things-to-do", "/contact", "/privacy", "/accessibility"];
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
