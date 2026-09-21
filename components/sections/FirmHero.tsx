import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";

import { OSCAR_PROFILE } from "@/lib/constants";

export function FirmHero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] bg-surface overflow-hidden"
    >
      {/* Subtle burgundy gradient accent — dark mode only */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-burgundy/[0.08] to-transparent pointer-events-none hidden dark:block" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-28 md:pt-0 md:min-h-[100dvh] grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-6 items-center">
        {/* Left — Content */}
        <div className="relative z-10 py-8 md:py-0">
          <div className="gc-rise" style={{ animationDelay: "0.05s" }}>
            <div className="flex items-center gap-3 mb-7">
              <div className="hidden sm:block h-px w-8 bg-gold" />
              <span className="type-label text-cream/65">
                Bufete de Abogados en Derecho P&#250;blico
              </span>
            </div>
          </div>

          <div className="gc-rise" style={{ animationDelay: "0.12s" }}>
            {/* Misma composición del logotipo: DM Sans en mayúsculas espaciadas.
                En móvil baja a 32 px para que no se parta en dos líneas. */}
            <h1 className="font-body text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl tracking-[0.08em] uppercase leading-none text-cream font-medium">
              Corporaci&#243;n GC
              <span className="sr-only"> — Abogados Especialistas en Derecho Administrativo y Contencioso Administrativo en Costa Rica</span>
            </h1>
          </div>

          <div className="gc-rise" style={{ animationDelay: "0.2s" }}>
            <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-cream/65 font-medium">
              Fundado y dirigido por el Dr. &#211;scar Eduardo Gonz&#225;lez Camacho
            </p>
          </div>

          {/* Mobile-only: full editorial photo (LCP en móvil — solo transform, sin opacidad) */}
          <div className="md:hidden gc-slide-x">
            <div className="mt-6 w-full overflow-hidden relative">
              <Image
                src={OSCAR_PROFILE.photo}
                alt={`${OSCAR_PROFILE.name} \u2014 Fundador y Director de Corporaci\u00f3n GC`}
                width={1536}
                height={1024}
                priority
                quality={90}
                sizes="100vw"
                className="w-full h-auto"
              />
              {/* Burgundy tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/30 via-transparent to-burgundy-dark/10 mix-blend-multiply pointer-events-none" />
              {/* Bottom fade into surface */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
              {/* Thin gold accent line — bottom */}
              <div className="absolute inset-x-[15%] bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            </div>
          </div>

          <div className="gc-rise" style={{ animationDelay: "0.28s" }}>
            <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-cream/10 max-w-[52ch]">
              <p className="type-lead text-cream/85">
                Coordinador de la comisión redactora del Código Procesal Contencioso
                Administrativo. Magistrado de la Sala Primera de la Corte
                Suprema durante doce años. Coordinador de la
                Jurisdicción Contencioso-Administrativa por nueve
                años. Once años litigando ante los tribunales que
                ayudó a construir.
              </p>
            </div>
          </div>

          <div className="gc-rise" style={{ animationDelay: "0.36s" }}>
            <p className="mt-4 type-body text-cream/65 max-w-[52ch]">
              El Dr. Gonz&#225;lez Camacho dirige y trabaja personalmente
              en cada caso junto a un equipo de cinco abogados formados
              exclusivamente en Derecho P&#250;blico bajo su
              supervisi&#243;n directa. Conocimiento de autor y un equipo
              entrenado para ejecutarlo.
            </p>
          </div>

          <div className="gc-rise" style={{ animationDelay: "0.44s" }}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton href="#contacto" variant="primary">
                Agendar consulta
              </MagneticButton>
              <MagneticButton href="#la-firma" variant="outline">
                Conocer la firma
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Right — Founder Photo (desktop only, monumental editorial treatment).
            LCP element: solo desliza (transform), nunca queda invisible. */}
        <div className="relative hidden md:block gc-slide-x">
          <div className="relative md:h-[82vh] max-h-[780px]">
            {/* Photo — full column, no rounded corners, editorial crop */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={OSCAR_PROFILE.photo}
                alt={`${OSCAR_PROFILE.name} \u2014 Fundador y Director de Corporaci\u00f3n GC`}
                width={1536}
                height={1024}
                priority
                quality={90}
                sizes="(max-width: 767px) 0px, 1536px"
                className="w-full h-full object-cover object-[50%_20%]"
              />

              {/* Subtle burgundy tint overlay for editorial tone */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/40 via-transparent to-burgundy-dark/10 mix-blend-multiply pointer-events-none" />

              {/* Bottom fade into surface */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface via-surface/60 to-transparent" />

              {/* Thin gold accent line — left edge */}
              <div className="absolute top-[10%] bottom-[10%] left-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
