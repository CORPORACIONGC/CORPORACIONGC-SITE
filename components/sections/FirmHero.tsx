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
        {/* Escritorio: la foto, de la barra al pie y hasta el borde derecho.
            Es el elemento LCP: no se anima, para que nunca quede invisible.
            Las dos fotos se precargan, pero cada `sizes` vale 0px en el rango
            donde su versión está oculta: el navegador baja allí la variante
            más pequeña y la imagen grande solo una vez, la que se ve. */}
        <div
          className="absolute inset-y-0 right-0 hidden lg:block"
          style={{
            left: FOTO_IZQUIERDA,
            maskImage: FOTO_MASCARA,
            WebkitMaskImage: FOTO_MASCARA,
          }}
        >
          <Image
            src={OSCAR_PROFILE.photo}
            alt={ALT}
            fill
            priority
            quality={90}
            sizes="(max-width: 1023px) 0px, 74vw"
            className="object-cover object-[4%_20%]"
          />
        </div>

        {/* Teléfono y tableta: la foto abre el hero, de borde a borde. En el
            teléfono va recortada a 4:5 para que el fundador se vea grande; en
            tableta, entera. No se anima (es la imagen LCP en móvil). */}
        <div
          className="relative aspect-[4/5] sm:aspect-[3/2] lg:hidden"
          style={{ maskImage: FOTO_MASCARA_MOVIL, WebkitMaskImage: FOTO_MASCARA_MOVIL }}
        >
          <Image
            src={OSCAR_PROFILE.photo}
            alt={ALT}
            fill
            priority
            quality={90}
            sizes="(min-width: 1024px) 0px, (min-width: 640px) 100vw, 190vw"
            className="object-cover object-[62%_50%]"
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
                  espaciadas, siempre en una sola línea. En pantallas más
                  angostas que un teléfono el cuerpo baja con el ancho en vez
                  de partirse; en escritorio puede salirse de la columna del
                  texto, porque a esa altura la foto ya está desvanecida. */}
              <h1 className="whitespace-nowrap font-body text-[length:min(2rem,8.6vw)] font-medium uppercase leading-none tracking-[0.08em] text-[#F7F3EE] sm:text-4xl md:text-6xl lg:text-[length:min(4.5rem,calc(50vw/9.9))]">
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
