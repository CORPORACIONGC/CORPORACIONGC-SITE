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
      // Block AI training-only crawlers (no search benefit, only scraping)
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "cohere-ai", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "Meta-ExternalAgent", disallow: "/" },
    ],
    sitemap: "https://www.corporaciongc.com/sitemap.xml",
  };
}
