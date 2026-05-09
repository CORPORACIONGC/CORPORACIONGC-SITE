// app/areas/[slug]/opengraph-image.tsx — Áreas individuales
import { renderDefaultOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";
/* Lee de constants.ts (array, fuente única con las 31 áreas) y NO de
   seo-constants.ts (Record incompleto con 28). Antes faltaban ZMT,
   litigio-contencioso-administrativo y medidas-cautelares, lo que hacía
   caer al fallback genérico en sus imágenes OG. */
import { PRACTICE_AREA_PAGES } from "@/lib/constants";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = PRACTICE_AREA_PAGES.find((a) => a.slug === slug);
  return [{ id: "default", alt: `${area?.title ?? "Área"} — Corporación GC, Costa Rica`, size: OG_SIZE, contentType: OG_CONTENT_TYPE }];
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = PRACTICE_AREA_PAGES.find((a) => a.slug === slug);
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
