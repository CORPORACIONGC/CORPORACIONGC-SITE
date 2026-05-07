// app/sobre-nosotros/opengraph-image.tsx
import { renderDefaultOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";

export const runtime = "nodejs";
export const alt =
  "Equipo de Corporación GC, bufete costarricense especializado en Derecho Público fundado en 2015.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderDefaultOg({
    eyebrow: "La Firma · Desde 2015",
    title: "Seis abogados, una sola {{em}}: Derecho Público.",
    emphasis: "disciplina",
    body:
      "Fundado por el Dr. Óscar González Camacho, ex-Magistrado de la Sala Primera y co-redactor del CPCA. Equipo dedicado exclusivamente al Derecho Público.",
    url: "corporaciongc.com/sobre-nosotros",
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "https://corporaciongc.com",
  });
}
