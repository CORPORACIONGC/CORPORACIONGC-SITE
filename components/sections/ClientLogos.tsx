import Image from "next/image";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { CLIENT_LOGOS } from "@/lib/constants";

function LogoItem({ logo }: { logo: (typeof CLIENT_LOGOS)[number] }) {
  /* Los logos llevan un scale() de normalización visual que crece más allá
     de su caja (hasta 2.15×) e invade el espacio del vecino. Este margen
     lateral proporcional al scale devuelve a cada logo el aire que su
     agrandamiento le roba al gap del contenedor. */
  const bleed = Math.round((logo.scale - 1) * 24);
  return (
    <div
      className="shrink-0 flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity duration-500 h-12 md:h-16"
      title={logo.name}
      style={{ marginInline: bleed }}
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={180}
        height={60}
        className="h-full w-auto object-contain mix-blend-screen"
        style={{ transform: `scale(${logo.scale}) translateY(${logo.offsetY}px)` }}
      />
    </div>
  );
}

export function ClientLogos() {
  return (
    <section className="relative bg-[#3A0B1F] overflow-hidden">
      {/* Elegant subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#280D16] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-12 md:pt-16">
        <AnimatedEntry>
          <div className="flex items-center justify-center gap-4 mb-10 md:mb-12">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/30" />
            <span className="text-[9px] tracking-[0.3em] uppercase text-white/60 font-medium">
              Han confiado en nosotros
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/30" />
          </div>
        </AnimatedEntry>
      </div>

      <AnimatedEntry delay={0.1}>
        <div className="relative pb-12 md:pb-16">
          {/* Fade edges matching burgundy bg — extra tall to cover scaled logos */}
          <div className="absolute left-0 -top-16 -bottom-16 w-36 md:w-56 bg-gradient-to-r from-[#3A0B1F] via-[#3A0B1F]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 -top-16 -bottom-16 w-36 md:w-56 bg-gradient-to-l from-[#3A0B1F] via-[#3A0B1F]/90 to-transparent z-10 pointer-events-none" />

          {/* pr igual al gap: cierra el ciclo con un espacio final para que el
              translateX(-50%) del bucle caiga exactamente en el inicio de la
              copia y la cinta no dé un salto en cada vuelta. */}
          <div className="animate-marquee flex items-center gap-24 md:gap-32 pr-24 md:pr-32 w-max">
            {CLIENT_LOGOS.map((logo) => (
              <LogoItem key={logo.name} logo={logo} />
            ))}
            {/* Copia para el bucle infinito de la cinta — oculta a lectores
                de pantalla para no anunciar cada logo dos veces. */}
            <div aria-hidden="true" className="contents">
              {CLIENT_LOGOS.map((logo) => (
                <LogoItem key={`dup-${logo.name}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedEntry>
    </section>
  );
}
