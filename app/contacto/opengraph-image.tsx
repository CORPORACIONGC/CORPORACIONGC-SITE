// app/contacto/opengraph-image.tsx
import { renderDefaultOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";

export const runtime = "nodejs";
export const alt = "Contacto de Corporación GC, bufete costarricense de Derecho Público.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderDefaultOg({
    eyebrow: "Contacto",
    title: "Cuéntenos su {{em}} con el Estado.",
    emphasis: "caso",
    body:
      "Corporación GC, bufete de Derecho Público dirigido por el Dr. Óscar González Camacho. Formulario, WhatsApp, correo o teléfono: +506 8662-2169.",
    url: "corporaciongc.com/contacto",
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "https://corporaciongc.com",
  });
}
