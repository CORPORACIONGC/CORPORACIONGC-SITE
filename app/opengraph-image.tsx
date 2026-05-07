import { renderDefaultOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";

export const runtime = "nodejs";
export const alt =
  "Corporación GC — Bufete de abogados especialistas en Derecho Público en Costa Rica, fundado por el Dr. Óscar González Camacho.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderDefaultOg({
    eyebrow: "Corporación GC · Abogados",
    title: "Donde el Derecho Público se litiga con ",
    emphasis: "conocimiento de autor",
    body:
      "Bufete dirigido por el Dr. Óscar González Camacho — ex-Magistrado de la Sala Primera y co-redactor del CPCA (Ley N.° 8508).",
    url: "corporaciongc.com",
  });
}
