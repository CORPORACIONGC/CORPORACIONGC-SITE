import { renderDefaultOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";
import { PRACTICE_AREA_PAGES } from "@/lib/constants";

export const runtime = "nodejs";
export const alt = "Corporación GC — Área de Práctica";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = PRACTICE_AREA_PAGES.find((a) => a.slug === slug);
  if (!area) {
    return renderDefaultOg({
      eyebrow: "Área de práctica",
      title: "Área de Práctica · ",
      emphasis: "Corporación GC",
      body: "Bufete especialista en Derecho Público en Costa Rica.",
      url: `corporaciongc.com/areas/${slug}`,
    });
  }
  return renderDefaultOg({
    eyebrow: "Área de práctica",
    title: area.ogShortTitle,
    emphasis: area.ogEmphasis,
    body: area.seoDescription,
    url: `corporaciongc.com/areas/${slug}`,
  });
}
