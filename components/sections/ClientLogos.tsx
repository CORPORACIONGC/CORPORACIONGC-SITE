"use client";

import Image from "next/image";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { CLIENT_LOGOS } from "@/lib/constants";

function LogoItem({ logo }: { logo: (typeof CLIENT_LOGOS)[number] }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center opacity-60 hover:opacity-90 transition-opacity duration-500 h-12 md:h-16"
      title={logo.name}
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
    <section className="relative bg-gradient-to-b from-[#421025] via-[#3A0B1F] to-[#280D16] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-8 md:pt-10">
        <AnimatedEntry>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-6 bg-gold/20" />
            <span className="text-[9px] tracking-[0.3em] uppercase text-white/60 font-medium">
              Han confiado en nosotros
            </span>
            <div className="h-px w-6 bg-gold/20" />
          </div>
        </AnimatedEntry>
      </div>

      <AnimatedEntry delay={0.1}>
        <div className="relative pb-8 md:pb-10">
          {/* Fade edges matching burgundy bg — extra tall to cover scaled logos */}
          <div className="absolute left-0 -top-16 -bottom-16 w-36 md:w-56 bg-gradient-to-r from-[#3A0B1F] via-[#3A0B1F]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 -top-16 -bottom-16 w-36 md:w-56 bg-gradient-to-l from-[#3A0B1F] via-[#3A0B1F]/90 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-20 md:gap-28 w-max">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </AnimatedEntry>
    </section>
  );
}
