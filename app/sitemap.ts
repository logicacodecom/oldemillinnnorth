import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/property";
import { langs, localePath } from "@/lib/i18n";

const paths = ["/", "/extended-stay", "/room", "/things-to-do", "/contact", "/privacy", "/accessibility"];

// Every page in both languages, each listing its hreflang alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (lang: (typeof langs)[number], path: string) =>
    `${siteUrl}${localePath(lang, path) === "/" ? "" : localePath(lang, path)}`;
  return paths.flatMap((path) =>
    langs.map((lang) => ({
      url: url(lang, path),
      lastModified: now,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.7,
      alternates: { languages: { en: url("en", path), es: url("es", path) } },
    }))
  );
}
