import { getAllArticles } from "@/lib/articles";

/* Feed RSS de las guías y publicaciones, en español y en orden de
   publicación. Lo anuncia el <link rel="alternate"> del layout. */
export const dynamic = "force-static";

const BASE = "https://www.corporaciongc.com";

const escapar = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* Las fechas del frontmatter son días: se publican a mediodía de Costa Rica. */
const rfc822 = (dia: string) => new Date(`${dia}T12:00:00-06:00`).toUTCString();

export function GET() {
  const piezas = getAllArticles()
    .filter((a) => a.lang !== "en")
    .sort((a, b) => b.date.localeCompare(a.date));

  const items = piezas
    .map(
      (a) => `    <item>
      <title>${escapar(a.title)}</title>
      <link>${BASE}/articulos/${a.slug}</link>
      <guid isPermaLink="true">${BASE}/articulos/${a.slug}</guid>
      <pubDate>${rfc822(a.date)}</pubDate>
      <description>${escapar(a.excerpt)}</description>${a.author ? `\n      <dc:creator>${escapar(a.author)}</dc:creator>` : ""}
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Corporación GC · Guías y análisis de Derecho Público</title>
    <link>${BASE}/articulos</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Guías prácticas y publicaciones de Corporación GC sobre Derecho Público en Costa Rica.</description>
    <language>es-CR</language>
    <lastBuildDate>${rfc822(piezas[0]?.updated ?? piezas[0]?.date ?? "2026-01-01")}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
