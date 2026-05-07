import { renderDefaultOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";

export const runtime = "nodejs";
export const alt =
  "Publicaciones académicas en Derecho Público de los abogados de Corporación GC, Costa Rica.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderDefaultOg({
    eyebrow: "Publicaciones académicas",
    title: "Doctrina jurídica ",
    emphasis: "costarricense",
    body:
      "Artículos, tesis y publicaciones especializadas en Derecho Administrativo, Contencioso Administrativo y Derecho Público.",
    url: "corporaciongc.com/articulos",
  });
}
