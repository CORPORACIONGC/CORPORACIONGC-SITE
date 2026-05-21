"use client";

import { usePathname } from "next/navigation";
import { WhatsAppFloat } from "@/components/article/WhatsAppFloat";
import { FIRM_CONTACT } from "@/lib/constants";

/* Botón flotante de WhatsApp para TODO el sitio (montado en el layout).
   Excepción: en los artículos individuales (/articulos/[slug]) la propia
   página ya renderiza un WhatsAppFloat con mensaje contextual del tema, así
   que aquí no lo duplicamos. En el resto de páginas usa el mensaje genérico. */
export function GlobalWhatsAppFloat() {
  const pathname = usePathname() || "";
  const esArticuloIndividual = /^\/articulos\/.+/.test(pathname);
  if (esArticuloIndividual) return null;

  const href = `https://wa.me/${FIRM_CONTACT.phoneRaw}?text=${encodeURIComponent(
    FIRM_CONTACT.whatsappMessage
  )}`;

  return <WhatsAppFloat href={href} contactTarget="site-float" />;
}
