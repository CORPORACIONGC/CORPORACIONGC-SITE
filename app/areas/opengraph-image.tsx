import { renderDefaultOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";

export const runtime = "nodejs";
export const alt =
  "Listado de áreas de práctica jurídica de Corporación GC en Costa Rica.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderDefaultOg({
    eyebrow: "Áreas de Práctica",
    title: "31 áreas en ",
    emphasis: "Derecho Público",
    body:
      "Litigio contencioso · Medidas cautelares · Casación ante Sala Primera · Recursos de amparo · Contratación pública · ZMT.",
    url: "corporaciongc.com/areas",
  });
}
