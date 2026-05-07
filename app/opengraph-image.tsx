// app/opengraph-image.tsx — Inicio (/)
import { renderHomeOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";

export const runtime = "nodejs";
export const alt =
  "Corporación GC — Bufete de abogados especialistas en Derecho Público en Costa Rica, fundado por el Dr. Óscar González Camacho.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderHomeOg({
    tagline:
      "Bufete dirigido por el Dr. Óscar González Camacho — ex-Magistrado de la Sala Primera y co-redactor del CPCA (Ley N.° 8508).",
    url: "corporaciongc.com",
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "https://corporaciongc.com",
  });
}
