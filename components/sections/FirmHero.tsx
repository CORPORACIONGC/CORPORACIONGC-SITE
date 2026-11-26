import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";

import { OSCAR_PROFILE } from "@/lib/constants";
import { RunningHead } from "@/components/ui/RunningHead";

/* Hero de la portada (19-11-2026). Es oscuro en los dos temas: en escritorio
   la foto del fundador sale de la derecha a todo el alto y se desvanece hacia
   el texto, que va en marfil; en teléfono y tableta la foto abre el hero de
   borde a borde, su parte baja (la mesa, que ya es negra) se funde con el
   fondo y el nombre se apoya ahí. Sustituye a la foto en columna con velo
   burdeos y desvanecido al pie, que dejaba un blanco a su izquierda. */

const ALT = `${OSCAR_PROFILE.name} — Fundador y Director de Corporación GC`;

/* El borde izquierdo de la foto se mide desde el contenedor de 1400 px que
   lleva el texto, no desde el borde de la pantalla: así, en un monitor ancho,
   la foto se aleja junto con el texto. El último sumando corre al fundador
   hasta 60 px más a la derecha desde 1100 px de ancho; por debajo no, porque
   se le cortaría el hombro contra el borde. */
const FOTO_IZQUIERDA =
  "calc(max(0px, (100vw - 1400px) / 2) + min(100vw, 1400px) * 0.26 + clamp(0px, (100vw - 1100px) * 0.2, 60px))";

/* La foto se desvanece hacia la izquierda con una máscara, nunca con una
   franja del color del fondo. */
const FOTO_MASCARA = "linear-gradient(to right, transparent 0%, #000 40%)";

/* En teléfono y tableta la foto se funde hacia abajo: el desvanecido empieza
   a la altura de las manos y termina al pie, sobre la mesa. */
const FOTO_MASCARA_MOVIL = "linear-gradient(to bottom, #000 54%, transparent 97%)";

export function FirmHero() {
  return (
    <section id="inicio" className="relative bg-surface">
      {/* El bloque oscuro empieza debajo de la barra de navegación: así el
          vidrio de la barra no se agrisa sobre el fondo al abrir la página. */}
      <div className="gc-on-dark relative mt-16 overflow-hidden bg-[#0F0A0D] md:mt-20">
        {/* La foto es una sola para todas las pantallas (25-11-2026): antes
            había una para escritorio y otra para teléfono, y el navegador
            bajaba también la oculta. Ahora un solo elemento cambia de forma
            según el ancho.
            Teléfono y tableta: abre el hero de borde a borde, recortada a 4:5
            en el teléfono para que el fundador se vea grande y entera en
            tableta, y se funde hacia abajo sobre la mesa.
            Escritorio (desde 1024 px): sale de la derecha, de la barra al pie,
            y se desvanece hacia el texto.
            Es la imagen LCP: no se anima, para que nunca quede invisible, y se
            precarga con prioridad alta. */}
        <div
          className="relative aspect-[4/5] [-webkit-mask-image:var(--mascara-movil)] [mask-image:var(--mascara-movil)] sm:aspect-[3/2] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[var(--foto-izquierda)] lg:aspect-auto lg:[-webkit-mask-image:var(--mascara)] lg:[mask-image:var(--mascara)]"
          style={
            {
              "--foto-izquierda": FOTO_IZQUIERDA,
              "--mascara": FOTO_MASCARA,
              "--mascara-movil": FOTO_MASCARA_MOVIL,
            } as React.CSSProperties
          }
        >
          <Image
            src={OSCAR_PROFILE.photo}
            alt={ALT}
            fill
            preload
            fetchPriority="high"
            quality={90}
            sizes="(min-width: 1024px) 74vw, (min-width: 640px) 100vw, 190vw"
            className="object-cover object-[62%_50%] lg:object-[4%_20%]"
          />
        </div>

        {/* En teléfono y tableta el texto sube sobre la franja de la mesa,
            ya desvanecida: nunca toca el rostro ni las manos del fundador. */}
        <div className="relative mx-auto -mt-24 max-w-[1400px] px-6 pb-12 sm:-mt-[18vw] md:px-10 lg:mt-0 lg:flex lg:min-h-[calc(100dvh-5rem)] lg:items-center lg:py-12">
          <div className="lg:w-[min(46vw,640px)]">
            <div className="gc-rise" style={{ animationDelay: "0.05s" }}>
              <RunningHead
                title="Abogados especialistas en Derecho P&#250;blico"
                tone="dark"
                className="mb-6 max-w-[52ch] border-b-0 pb-0"
              />
            </div>

            <div className="gc-rise" style={{ animationDelay: "0.12s" }}>
              {/* Misma composición del logotipo: DM Sans en mayúsculas
                  espaciadas, siempre en una sola línea. El cuerpo se calcula
                  para que el nombre quepa en su columna: «Corporación GC»
                  mide 9,53 veces su cuerpo con este espaciado (medido el
                  25-11-2026), y se divide entre 10 para dejar margen. En el
                  teléfono la columna es la pantalla menos 3 rem de margen;
                  en escritorio, min(46vw, 640px). Antes se salía de la
                  columna hasta 46 px sobre la foto. */}
              <h1 className="whitespace-nowrap font-body text-[length:min(2rem,calc((100vw-3rem)/10))] font-medium uppercase leading-none tracking-[0.08em] text-[#F7F3EE] sm:text-4xl md:text-6xl lg:text-[length:min(4.5rem,calc(min(46vw,640px)/10))]">
                Corporaci&#243;n GC
                <span className="sr-only"> — Abogados Especialistas en Derecho Administrativo y Contencioso Administrativo en Costa Rica</span>
              </h1>
            </div>

            <div className="gc-rise" style={{ animationDelay: "0.2s" }}>
              {/* Firma editorial: la fórmula arriba, pequeña y atenuada; el
                  nombre del director en su propia línea, en marfil pleno. */}
              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F7F3EE]/70">
                Fundado y dirigido por el
              </p>
              <p className="mt-1.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#F7F3EE] sm:text-sm sm:tracking-[0.14em] md:text-base">
                Dr. &#211;scar Eduardo Gonz&#225;lez Camacho
              </p>
            </div>

            {/* En el teléfono los dos botones van bajo el nombre, dentro de
                la primera pantalla, y se reparten el ancho; en tableta miden
                lo que su rótulo; en escritorio siguen al pie del texto. Los
                dos miden lo mismo de alto (`h-full`): sin eso, el borde del
                secundario lo dejaba 4 px más alto que el principal. */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-stretch sm:gap-4 lg:hidden">
              <MagneticButton href="#contacto" variant="outline-inverse" fullWidth className="h-full px-3! sm:px-7!">
                Agendar consulta
              </MagneticButton>
              <MagneticButton href="#la-firma" variant="outline-night" fullWidth className="h-full px-3! sm:px-7!">
                Conocer la firma
              </MagneticButton>
            </div>

            <div className="gc-rise" style={{ animationDelay: "0.28s" }}>
              <div className="mt-8 max-w-[52ch] lg:mt-14">
                <p className="type-lead text-[#F7F3EE]/85">
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
              <p className="mt-4 type-body max-w-[52ch] text-[#F7F3EE]/70">
                El Dr. Gonz&#225;lez Camacho dirige y trabaja personalmente
                en cada caso junto a un equipo de cuatro abogados formados
                en Derecho P&#250;blico bajo su
                supervisi&#243;n directa. Conocimiento de autor y un equipo
                entrenado para ejecutarlo.
              </p>
            </div>

            <div className="gc-rise" style={{ animationDelay: "0.44s" }}>
              <div className="mt-8 hidden flex-wrap items-stretch gap-4 lg:flex">
                <MagneticButton href="#contacto" variant="outline-inverse" className="h-full">
                  Agendar consulta
                </MagneticButton>
                <MagneticButton href="#la-firma" variant="outline-night" className="h-full">
                  Conocer la firma
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
