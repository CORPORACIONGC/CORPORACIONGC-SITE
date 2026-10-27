// app/abogados/opengraph-image.tsx
import { renderDefaultOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";

export const runtime = "nodejs";
export const alt = "Equipo de abogados de Corporación GC, bufete costarricense de Derecho Público.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderDefaultOg({
    eyebrow: "Equipo",
    title: "Los {{em}} de Corporación GC.",
    emphasis: "abogados",
    body:
      "El Dr. Óscar González Camacho, exmagistrado de la Sala Primera, y el equipo formado en Derecho Público bajo su supervisión.",
    url: "corporaciongc.com/abogados",
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "https://corporaciongc.com",
  });
}
