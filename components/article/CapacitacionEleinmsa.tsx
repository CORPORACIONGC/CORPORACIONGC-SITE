/* Bloque de respaldo para el área de contratación pública.
   Muestra una foto del Dr. González Camacho en la capacitación a ELEINMSA y
   una mención breve, con enlace a su perfil. */

import Image from "next/image";
import Link from "next/link";

export function CapacitacionEleinmsa() {
  return (
    <aside className="my-12 overflow-hidden rounded-2xl border border-burgundy/15 bg-burgundy/[0.04]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Foto */}
        <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
          <Image
            src="/images/oscar-imsa-ponencia.jpg"
            alt="Dr. Óscar Eduardo González Camacho durante la ponencia sobre el ajuste del precio y el equilibrio económico del contrato en la capacitación a ELEINMSA"
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover"
            style={{ objectPosition: "45% 40%" }}
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
          <p className="m-0 mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-burgundy dark:text-gold">
            De la pr&aacute;ctica de Corporaci&oacute;n GC
          </p>
          <h3 className="m-0 mb-3 font-display text-xl tracking-tight text-cream md:text-2xl">
            Capacitaci&oacute;n a clientes sobre contrataci&oacute;n p&uacute;blica
          </h3>
          <p className="m-0 mb-5 text-[15px] leading-relaxed text-cream/70">
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
        </div>
      </div>
    </aside>
  );
}
