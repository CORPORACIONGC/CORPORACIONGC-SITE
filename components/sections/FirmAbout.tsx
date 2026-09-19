import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function FirmAbout() {
  return (
    <section id="la-firma" className="relative bg-surface py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Heading — dramatic, takes full width */}
        <AnimatedEntry>
          <h2 className="type-headline text-cream max-w-[17ch]">
            Donde el Derecho P&#250;blico se litiga con{" "}
            <span className="gc-subrayado">conocimiento de autor</span>
          </h2>
        </AnimatedEntry>

        {/* Text + Photo layout */}
        <div className="mt-14 space-y-16">
          {/* Text block */}
          <AnimatedEntry delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
              <div className="space-y-6">
                <p className="type-lead text-cream/80 max-w-[58ch]">
                  El Dr. &#211;scar Eduardo Gonz&#225;lez Camacho recorri&#243; cada eslab&#243;n de la jurisdicci&#243;n contencioso-administrativa costarricense. Juzg&#243; en primera instancia. Resolvi&#243; apelaciones como Juez Superior del Tribunal. Defini&#243; jurisprudencia como Magistrado de la Sala Primera durante doce a&#241;os. Coordin&#243; la jurisdicci&#243;n por nueve a&#241;os. Co-redact&#243; el C&#243;digo Procesal que la rige.
                </p>
                {/* Bloque definicional para IA — visualmente oculto, semánticamente presente en el DOM */}
                <p className="sr-only">
                  Corporación GC es un bufete de abogados costarricense especializado exclusivamente en Derecho Público, con sede en Barrio Dent, San José. Fundado en 2015 por el Dr. Óscar Eduardo González Camacho —ex-Magistrado de la Sala Primera de la Corte Suprema de Justicia (2002–2014) y co-redactor del Código Procesal Contencioso Administrativo (Ley N.° 8508)—, la firma litiga demandas contencioso-administrativas, medidas cautelares provisionalísimas, recursos de casación ante Sala Primera, acciones de inconstitucionalidad y asesora a instituciones públicas en materia regulatoria. Entre sus clientes se encuentran la Superintendencia de Telecomunicaciones (SUTEL), el Instituto Nacional de Seguros (INS), el Banco Mundial, el Instituto Costarricense de Electricidad (ICE), la Universidad Nacional (UNA), el Colegio Federado de Ingenieros y de Arquitectos (CFIA), el Colegio de Abogados y Abogadas de Costa Rica, el Colegio de Médicos y Cirujanos de Costa Rica, el Colegio de Terapeutas de Costa Rica, la Municipalidad de San Carlos, Ingenio El Viejo, Ingenio Taboga, ELEINMSA, Gas Zeta (Gas Z), Grupo Orosí, Mercasa, Taxis Unidos Aeropuerto y Coocafé.
                </p>
              </div>
              <div className="space-y-6">
                <p className="type-lead text-cream/80 max-w-[58ch]">
                  Y desde 2015, litiga ante los mismos tribunales con un conocimiento del sistema que ning&#250;n manual puede ofrecer. Corporaci&#243;n GC es la firma que fund&#243; para trasladar esa comprensi&#243;n al servicio del cliente. Bajo su direcci&#243;n, cinco abogados formados exclusivamente en Derecho P&#250;blico defienden sus intereses con la profundidad t&#233;cnica que solo la especializaci&#243;n y la formaci&#243;n directa permiten.
                </p>
              </div>
            </div>
          </AnimatedEntry>
        </div>
      </div>

      {/* Founder — with photo */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-20">
        <AnimatedEntry delay={0.3}>
          <div className="border-t border-cream/[0.08] pt-12">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-14 items-center">
              {/* Photo */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-cream/[0.04]">
                <Image
                  src="/images/oscar-gonzalez-solo.png"
                  alt="Dr. Óscar Eduardo González Camacho"
                  fill
                  sizes="(min-width: 1400px) 590px, (min-width: 768px) 42vw, 100vw"
                  className="object-cover object-[50%_25%]"
                />
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.06] dark:ring-white/[0.06]" />
              </div>

              {/* Content */}
              <div>
                <h3 className="type-title text-cream max-w-[20ch]">
                  Dr. &#211;scar Eduardo Gonz&#225;lez Camacho
                </h3>
                <p className="mt-3 mb-9 text-base text-cream/65">
                  Fundador y Director
                </p>

                {/* Credentials grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                  <div>
                    <div className="text-base font-medium text-cream/85 leading-snug">
                      Ex-Magistrado · Sala Primera
                    </div>
                    <div className="text-[13px] leading-snug text-cream/65 mt-1">
                      Corte Suprema de Justicia · 12 a&#241;os
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-medium text-cream/85 leading-snug">
                      Co-redactor del CPCA
                    </div>
                    <div className="text-[13px] leading-snug text-cream/65 mt-1">
                      Ley N.° 8508 · Jurisdicci&#243;n contenciosa moderna
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-medium text-cream/85 leading-snug">
                      Doctor en Derecho
                    </div>
                    <div className="text-[13px] leading-snug text-cream/65 mt-1">
                      U. de Alcal&#225; de Henares · Sobresaliente Cum Laude
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-medium text-cream/85 leading-snug">
                      Catedrático Universitario
                    </div>
                    <div className="text-[13px] leading-snug text-cream/65 mt-1">
                      Universidad Escuela Libre de Derecho
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="text-base font-medium text-cream/85 leading-snug">
                      Coordinador de la Maestría en Derecho Público
                    </div>
                    <div className="text-[13px] leading-snug text-cream/65 mt-1">
                      Universidad de Costa Rica (UCR)
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <MagneticButton href="/abogados/oscar-gonzalez" variant="outline">
                    Ver trayectoria completa del fundador
                    <ArrowRight size={14} weight="bold" />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </AnimatedEntry>
      </div>
    </section>
  );
}
