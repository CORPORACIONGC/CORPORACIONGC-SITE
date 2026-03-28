import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { TEAM, PRACTICE_AREA_PAGES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.corporaciongc.com";
  const articles = getAllArticles();

  // Fecha del artículo más reciente — refleja la última actualización real del sitio
  const mostRecentArticleDate =
    articles.length > 0
      ? new Date(
          articles.reduce((latest, a) =>
            new Date(a.date) > new Date(latest.date) ? a : latest
          ).date
        )
      : new Date("2026-03-28");

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/articulos/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Fecha real de última actualización de perfiles (no new Date())
  const teamLastUpdated = new Date("2026-03-28");

  const teamUrls = TEAM.map((member) => ({
    url: `${baseUrl}/abogados/${member.slug}`,
    lastModified: teamLastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: mostRecentArticleDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/articulos`,
      lastModified: mostRecentArticleDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre-nosotros`,
      lastModified: new Date("2026-03-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/politica-de-privacidad`,
      lastModified: new Date("2026-03-28"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified: new Date("2026-03-28"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...PRACTICE_AREA_PAGES.map((area) => ({
      url: `${baseUrl}/areas/${area.slug}`,
      lastModified: new Date("2026-03-28"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...teamUrls,
    ...articleUrls,
  ];
}
