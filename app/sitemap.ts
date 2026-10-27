import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { getAllSentencias } from "@/lib/jurisprudencia";
import { TEAM, PRACTICE_AREA_PAGES } from "@/lib/constants";
import { fechaPerfil } from "@/lib/fechas";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.corporaciongc.com";
  const articles = getAllArticles();
  const sentencias = getAllSentencias();

  /* Cada sentencia declara la fecha de la última revisión de su comentario;
     el índice toma la más reciente. */
  const sentenciasLastUpdated = new Date(sentencias.map((s) => s.actualizado).sort().pop() ?? "2026-05-07");
  const sentenciaUrls = sentencias.map((s) => ({
    url: `${baseUrl}/jurisprudencia-destacada/${s.slug}`,
    lastModified: new Date(s.actualizado),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  // El cambio más reciente entre los artículos: publicación o revisión
  const mostRecentArticleDate = new Date(
    articles.map((a) => a.cambiado ?? a.date).sort().pop() ?? "2026-03-28",
  );

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/articulos/${article.slug}`,
    lastModified: new Date(article.cambiado ?? article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    // Guías con versión en otro idioma: cada URL declara las dos (hreflang).
    ...(article.translation
      ? {
          alternates: {
            languages: {
              [article.lang ?? "es"]: `${baseUrl}/articulos/${article.slug}`,
              [article.lang === "en" ? "es" : "en"]: `${baseUrl}/articulos/${article.translation}`,
              // x-default apunta a la versión en español, como en la página.
              "x-default": `${baseUrl}/articulos/${article.lang === "en" ? article.translation : article.slug}`,
            },
          },
        }
      : {}),
  }));

  /* Fecha de la última revisión de las páginas de área. Se actualiza a mano
     cuando se reescriben sus textos: el 20-09-2026 se rehicieron los títulos
     y las descripciones de las treinta y dos. */
  const areasLastUpdated = new Date("2026-09-20");
  /* Las áreas reescritas después de esa revisión general. */
  const AREAS_REVISADAS: Record<string, string> = {
    "derecho-administrativo": "2026-10-25",
    "casacion-sala-primera": "2026-10-25",
  };

  const teamUrls = TEAM.map((member) => ({
    url: `${baseUrl}/abogados/${member.slug}`,
    lastModified: new Date(fechaPerfil(member.slug) ?? "2026-03-28"),
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
      url: `${baseUrl}/contacto`,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/abogados`,
      lastModified: new Date(TEAM.map((m) => fechaPerfil(m.slug) ?? "2026-03-28").sort().pop() ?? "2026-03-28"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre-nosotros`,
      lastModified: new Date("2026-03-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    /* La política de privacidad no va en el sitemap: no es contenido que
       deba competir en la Búsqueda y se llevaba autoridad interna. */
    {
      url: `${baseUrl}/areas`,
      lastModified: areasLastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    /* Prioridad estratificada por relevancia del área: las áreas core del
       bufete (litigio, recursos extraordinarios, contratación) reciben señal
       más alta para Google; complementarias bajan a 0.6. Ayuda al crawler a
       jerarquizar el descubrimiento. */
    ...PRACTICE_AREA_PAGES.map((area) => ({
      url: `${baseUrl}/areas/${area.slug}`,
      lastModified: AREAS_REVISADAS[area.slug] ? new Date(AREAS_REVISADAS[area.slug]) : areasLastUpdated,
      changeFrequency: "monthly" as const,
      priority:
        area.priority === "primary"
          ? 0.9
          : area.priority === "specialized"
            ? 0.7
            : 0.6,
    })),
    {
      url: `${baseUrl}/jurisprudencia-destacada`,
      lastModified: sentenciasLastUpdated,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...sentenciaUrls,
    ...teamUrls,
    ...articleUrls,
  ];
}
