// app/politica-de-privacidad/opengraph-image.tsx
import { renderDefaultOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";

export const runtime = "nodejs";
export const alt =
  "Política de privacidad de Corporación GC, bufete costarricense de Derecho Público.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderDefaultOg({
    eyebrow: "Información legal",
    title: "Política de {{em}}",
    emphasis: "Privacidad",
    body:
      "Tratamiento de datos personales conforme a la Ley N.° 8968 y al Reglamento de PRODHAB.",
    url: "corporaciongc.com/politica-de-privacidad",
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "https://corporaciongc.com",
  });
}
