import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly allow AI search crawlers (these cite us in search results)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      // Google-Extended: permitido para que Gemini (Google) pueda citar el
      // sitio. No afecta el ranking ni los AI Overviews (usan Googlebot).
      { userAgent: "Google-Extended", allow: "/" },
      /* Se bloquean los rastreadores que alimentan conjuntos de datos o
         modelos sin un buscador o asistente que cite y enlace la fuente
         (Common Crawl, Cohere, ByteDance, Meta). GPTBot y ClaudeBot, que
         también entrenan, se permiten arriba porque sus empresas operan
         asistentes que citan el sitio. CCBot queda bloqueado hasta que se
         decida si conviene estar en Common Crawl (informe 23-11, G1). */
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "cohere-ai", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "Meta-ExternalAgent", disallow: "/" },
    ],
    sitemap: "https://www.corporaciongc.com/sitemap.xml",
  };
}
