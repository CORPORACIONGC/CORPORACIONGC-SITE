import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FIRM_CONTACT } from "@/lib/constants";

/* El único patrón de llamada de las páginas de área y del índice /areas
   (D-02, D-12 y D-26, 25-11-2026). Dos rótulos en todo el sitio, y siempre
   el mismo destino para cada uno:
   «Escribir por WhatsApp» abre wa.me con el mensaje del contexto, y
   «Enviar una consulta» lleva al formulario de /contacto.
   El botón conserva la medición: MagneticButton llama a
   trackContactFromHref con el contactTarget de cada aparición. */

export const ROTULO_WHATSAPP = "Escribir por WhatsApp";
export const ROTULO_CONSULTA = "Enviar una consulta";
export const DESTINO_CONSULTA = "/contacto";

/** Enlace a WhatsApp con el mensaje del contexto; sin mensaje propio, el
 *  general de la firma. */
export function enlaceWhatsApp(mensaje?: string | null): string {
  return `https://wa.me/${FIRM_CONTACT.phoneRaw}?text=${encodeURIComponent(
    mensaje || FIRM_CONTACT.whatsappMessage,
  )}`;
}

/** La fila de acciones: el botón macizo de WhatsApp y, a su lado, el enlace
 *  al formulario. El enlace lleva py-3 para llegar a 44 px de alto táctil. */
export function AccionesLlamada({
  whatsapp,
  contactTarget,
  className = "",
}: {
  whatsapp: string;
  contactTarget: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-1 ${className}`}>
      <MagneticButton href={whatsapp} variant="primary" contactTarget={contactTarget}>
        <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
        {ROTULO_WHATSAPP}
      </MagneticButton>
      <Link
        href={DESTINO_CONSULTA}
        className="inline-flex items-center py-3 text-sm font-medium text-cream/80 underline decoration-cream/30 underline-offset-4 transition-colors duration-300 hover:text-emphasis hover:decoration-current"
      >
        {ROTULO_CONSULTA}
      </Link>
    </div>
  );
}

/** Llamada en el flujo de la página: una fila con filete superior (sin
 *  caja), una pregunta o frase de contexto y la fila de acciones. Se repite
 *  igual en cada aparición; solo cambia el texto. */
export function LlamadaArea({
  titulo,
  texto,
  whatsapp,
  contactTarget,
  className = "",
}: {
  titulo: string;
  texto?: string;
  whatsapp: string;
  contactTarget: string;
  className?: string;
}) {
  return (
    <div className={`border-t border-cream/[0.12] pt-8 ${className}`}>
      <p className="font-display text-xl md:text-2xl text-cream tracking-tight leading-tight max-w-[40ch]">
        {titulo}
      </p>
      {texto && (
        <p className="mt-3 text-[15px] md:text-base text-cream/[0.78] leading-[1.7] max-w-[60ch]">{texto}</p>
      )}
      <AccionesLlamada whatsapp={whatsapp} contactTarget={contactTarget} className="mt-6" />
    </div>
  );
}
