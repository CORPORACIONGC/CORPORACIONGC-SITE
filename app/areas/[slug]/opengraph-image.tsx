// app/areas/[slug]/opengraph-image.tsx — Áreas individuales
import { renderDefaultOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";
import { PRACTICE_AREA_PAGES } from "@/lib/seo-constants";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = PRACTICE_AREA_PAGES[slug];
  return [{ id: "default", alt: `${area?.title ?? "Área"} — Corporación GC, Costa Rica`, size: OG_SIZE, contentType: OG_CONTENT_TYPE }];
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = PRACTICE_AREA_PAGES[slug];
  if (!area) {
    return renderDefaultOg({
      eyebrow: "Área de práctica",
      title: "Corporación {{em}}",
      emphasis: "GC",
      body: "Bufete líder en Derecho Público en Costa Rica.",
      url: "corporaciongc.com/areas",
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "https://corporaciongc.com",
    });
  }

  return renderDefaultOg({
    eyebrow: "Área de práctica",
    title: area.ogShortTitle ?? `${area.title} {{em}}`,
    emphasis: area.ogEmphasis,
    body: area.seoDescription ?? area.description,
    url: `corporaciongc.com/areas/${slug}`,
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "https://corporaciongc.com",
  });
}
