import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { getAllSentencias } from "@/lib/jurisprudencia";
import { TEAM, PRACTICE_AREA_PAGES } from "@/lib/constants";
import { ASISTENTES } from "@/lib/asistentes";
import { fechaPerfil } from "@/lib/fechas";
import fechas from "@/lib/fechas-modificacion.json";

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

  /* Áreas y páginas institucionales: la fecha de su última revisión se anota
     a mano en lib/fechas-modificacion.json, en el mismo commit del cambio.
     «*» vale para las áreas sin fecha propia. */
  const AREAS: Record<string, string> = fechas.areas;
  const PAGINAS: Record<string, string> = fechas.paginas;
  const fechaArea = (slug: string) => new Date(AREAS[slug] ?? AREAS["*"]);
  const fechaPagina = (ruta: string, respaldo: string) => new Date(PAGINAS[ruta] ?? respaldo);

  const teamUrls = TEAM.map((member) => ({
    url: `${baseUrl}/abogados/${member.slug}`,
    lastModified: new Date(fechaPerfil(member.slug) ?? "2026-03-28"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const asistentesUrls = ASISTENTES.map((a) => ({
    url: `${baseUrl}/equipo/${a.slug}`,
    lastModified: new Date(a.actualizado),
    changeFrequency: "monthly" as const,
    priority: 0.5,
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
      lastModified: fechaPagina("/contacto", "2026-05-20"),
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
      url: `${baseUrl}/politica-editorial`,
      lastModified: fechaPagina("/politica-editorial", "2026-10-27"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/sobre-nosotros`,
      lastModified: fechaPagina("/sobre-nosotros", "2026-03-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    /* La política de privacidad no va en el sitemap: no es contenido que
       deba competir en la Búsqueda y se llevaba autoridad interna. */
    {
      url: `${baseUrl}/areas`,
      lastModified: fechaPagina("/areas", AREAS["*"]),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    /* Prioridad estratificada por relevancia del área: las áreas core del
       bufete (litigio, recursos extraordinarios, contratación) reciben señal
       más alta para Google; complementarias bajan a 0.6. Ayuda al crawler a
       jerarquizar el descubrimiento. */
    ...PRACTICE_AREA_PAGES.map((area) => ({
      url: `${baseUrl}/areas/${area.slug}`,
      lastModified: fechaArea(area.slug),
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
    ...asistentesUrls,
    ...articleUrls,
  ];
}
