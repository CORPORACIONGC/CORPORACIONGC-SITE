/* Bloque de respaldo para el área de contratación pública.
   Muestra una foto del Dr. González Camacho en la capacitación a ELEINMSA y
   una mención breve, con enlace a su perfil.

   La foto va a todo el ancho y en su proporción casi completa: el doctor está
   en el borde izquierdo del encuadre y cualquier recorte lateral lo dejaba
   fuera. El texto va debajo, alineado a la izquierda: el bloque vive dentro
   de los artículos, cuyo cuerpo es justificado. */

import Image from "next/image";
import Link from "next/link";

export function CapacitacionEleinmsa() {
  return (
    <figure className="not-prose my-12 overflow-hidden rounded-2xl border border-burgundy/15 bg-burgundy/[0.03] text-left">
      <div className="relative aspect-[3/2] overflow-hidden bg-cream/[0.04]">
        <Image
          src="/images/oscar-imsa-ponencia.jpg"
          alt="Dr. Óscar Eduardo González Camacho durante la ponencia sobre el ajuste del precio y el equilibrio económico del contrato en la capacitación a ELEINMSA"
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover"
          style={{ objectPosition: "50% 55%" }}
        />
      </div>

      <figcaption className="p-6 md:p-8">
        <p className="m-0 mb-3 text-left text-[11px] font-semibold uppercase tracking-[0.16em] text-burgundy dark:text-gold">
          De la pr&aacute;ctica de Corporaci&oacute;n GC
        </p>
        <h3 className="m-0 mb-3 font-display text-xl text-cream md:text-2xl">
          Capacitaci&oacute;n a clientes sobre contrataci&oacute;n p&uacute;blica
        </h3>
        <p className="m-0 mb-5 max-w-[62ch] text-left text-base leading-relaxed text-cream/75">
          En junio de 2026, el Dr. &Oacute;scar Eduardo Gonz&aacute;lez Camacho &mdash;fundador de
          Corporaci&oacute;n GC y exmagistrado de la Sala Primera de la Corte Suprema&mdash;
          capacit&oacute; al equipo de ELEINMSA (Electr&oacute;nica Industrial y M&eacute;dica
          S.A.) sobre el equilibrio econ&oacute;mico de los contratos p&uacute;blicos y el reajuste
          de precios en la contrataci&oacute;n administrativa.
        </p>
        <Link
          href="/abogados/oscar-gonzalez"
          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-burgundy transition-colors hover:text-burgundy-light dark:text-gold dark:hover:text-gold-light"
        >
          Conozca su trayectoria
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </figcaption>
    </figure>
  );
}
