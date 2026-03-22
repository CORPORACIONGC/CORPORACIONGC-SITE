import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { TEAM, PRACTICE_AREA_PAGES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://corporaciongc.com";
  const articles = getAllArticles();

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/articulos/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const teamUrls = TEAM.map((member) => ({
    url: `${baseUrl}/abogados/${member.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/articulos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre-nosotros`,
      lastModified: new Date("2026-03-21"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/politica-de-privacidad`,
      lastModified: new Date("2026-03-21"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified: new Date("2026-03-21"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...PRACTICE_AREA_PAGES.map((area) => ({
      url: `${baseUrl}/areas/${area.slug}`,
      lastModified: new Date("2026-03-21"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...teamUrls,
    ...articleUrls,
  ];
}
