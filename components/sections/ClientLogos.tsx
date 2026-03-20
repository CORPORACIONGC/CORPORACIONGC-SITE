"use client";

import Image from "next/image";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { CLIENT_LOGOS } from "@/lib/constants";

function LogoItem({
  logo,
  interactive = false,
}: {
  logo: (typeof CLIENT_LOGOS)[number];
  interactive?: boolean;
}) {
  return (
    <div
      className={`shrink-0 opacity-60 dark:grayscale dark:opacity-40 dark:invert transition-all duration-500 ${
        interactive
          ? "hover:opacity-100 dark:hover:opacity-70"
          : ""
      }`}
      title={logo.name}
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={180}
        height={60}
        className="h-12 md:h-14 w-auto object-contain"
        style={{ transform: `scale(${logo.scale})` }}
      />
    </div>
  );
}

export function ClientLogos() {
  return (
    <section className="relative bg-surface py-14 md:py-16 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatedEntry>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-cream/55 font-medium">
              Han confiado en nosotros
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
        </AnimatedEntry>
      </div>

      {/* Infinite marquee — all screen sizes */}
      <AnimatedEntry delay={0.1}>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-12 md:gap-16 w-max">
            {/* Duplicate logos for seamless loop */}
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </AnimatedEntry>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />
    </section>
  );
}
