"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MapPin, Microphone, BookOpen, Play, VideoCamera } from "@phosphor-icons/react";

const EVENT_VIDEO_ID = "NA4SYDhNtQ0";
const EVENT_VIDEO_TITLE =
  "CPCA 20 Años — Mesa II: El futuro del proceso contencioso administrativo";
const EVENT_VIDEO_DESCRIPTION =
  "Grabación oficial de la Mesa II del evento conmemorativo del CPCA 20 Años, en la que el Dr. Óscar Eduardo González Camacho presentó el capítulo «El por qué y para qué del contencioso administrativo» (Editorial Tirant lo Blanch, 2026).";

/* ── Lite YouTube embed — shows thumbnail, loads iframe on click ── */
function LiteYouTube({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false);
  const activate = useCallback(() => setActive(true), []);

  if (active) {
    return (
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={activate}
      aria-label={`Reproducir: ${title}`}
      className="relative w-full cursor-pointer group bg-neutral-900"
      style={{ paddingBottom: "56.25%" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/95 group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xl">
          <Play size={26} weight="fill" className="text-neutral-900 ml-0.5" />
        </div>
      </div>
    </button>
  );
}

export function OscarEventoDestacado() {
  return (
    <section className="relative bg-surface py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatedEntry>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-cream/55 font-medium">
              Evento Destacado
            </span>
          </div>
        </AnimatedEntry>

        <AnimatedEntry delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl tracking-tighter leading-[1.05] text-cream mb-12">
            CPCA 20 A&ntilde;os:{" "}
            <span className="text-burgundy-light">Balance y desaf&iacute;os</span>
          </h2>
        </AnimatedEntry>

        <AnimatedEntry delay={0.2}>
          <div className="rounded-2xl bg-cream/[0.025] shadow-[0_8px_30px_-16px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.03)] overflow-hidden backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-0">
              {/* Photo */}
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                <Image
                  src="/images/oscar-cpca-podio.png"
                  alt="Dr. Óscar Eduardo González Camacho — Ponencia en CPCA 20 Años, Colegio de Abogados"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover object-[50%_20%]"
                />
                {/* Seamless blend into info panel */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface/40 pointer-events-none hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/30 to-transparent pointer-events-none md:hidden" />
              </div>

              {/* Event info */}
              <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/40 font-medium mb-5">
                  25 de marzo, 2026
                </span>

                <h3 className="font-display text-xl md:text-[1.65rem] tracking-tight text-cream leading-snug mb-5">
                  CPCA 20 A&ntilde;os: Balance, transformaciones y desaf&iacute;os de la justicia administrativa
                </h3>

                <div className="space-y-2.5 mb-8">
                  <div className="flex items-start gap-2.5">
                    <Microphone size={14} weight="duotone" className="text-cream/30 shrink-0 mt-0.5" />
                    <p className="text-[13px] text-cream/55 leading-relaxed">
                      <span className="text-cream/70 font-medium">Mesa II</span>{" "}
                      &mdash; El futuro del proceso contencioso administrativo
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin size={14} weight="duotone" className="text-cream/30 shrink-0 mt-0.5" />
                    <p className="text-[13px] text-cream/55 leading-relaxed">
                      Colegio de Abogados y Abogadas de Costa Rica
                    </p>
                  </div>
                </div>

                {/* Article presented */}
                <div className="mb-8 pl-4 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />
                  <p className="text-[13px] text-cream/65 leading-relaxed italic">
                    &ldquo;El por qu&eacute; y para qu&eacute; del contencioso administrativo&rdquo;
                  </p>
                  <p className="text-[11px] text-cream/35 mt-2 leading-relaxed">
                    En: <em>CPCA, 20 a&ntilde;os despu&eacute;s</em> &mdash; Tirant lo Blanch, 2026
                  </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <MagneticButton
                    href="/articulos/por-que-y-para-que-contencioso-administrativo"
                    variant="primary"
                  >
                    Leer cap&iacute;tulo
                  </MagneticButton>
                  <MagneticButton
                    href="https://editorial.tirant.com/cr/libro/cpca-20-anos-despues-perspectivas-criticas-sobre-la-justicia-administrativa-alex-rojas-ortega-9791370214753"
                    variant="outline"
                  >
                    <BookOpen size={16} weight="duotone" />
                    Comprar el libro
                  </MagneticButton>
                </div>

                {/* Co-organizers */}
                <p className="text-[11px] text-cream/25 tracking-wide">
                  Tirant Editorial &middot; Universidad Escuela Libre de Derecho
                </p>
              </div>
            </div>
          </div>
        </AnimatedEntry>

        {/* Video recording of the event */}
        <AnimatedEntry delay={0.3}>
          <div className="mt-6 rounded-2xl bg-cream/[0.025] shadow-[0_8px_30px_-16px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.03)] overflow-hidden backdrop-blur-sm">
            <LiteYouTube id={EVENT_VIDEO_ID} title={EVENT_VIDEO_TITLE} />
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-3">
                <VideoCamera
                  size={14}
                  weight="duotone"
                  className="text-burgundy-light shrink-0"
                />
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/40 font-medium">
                  Grabaci&oacute;n oficial &middot; Colegio de Abogados
                </span>
              </div>
              <h3 className="font-display text-lg md:text-xl text-cream mb-2 leading-snug">
                {EVENT_VIDEO_TITLE}
              </h3>
              <p className="text-[13px] text-cream/55 leading-relaxed">
                {EVENT_VIDEO_DESCRIPTION}
              </p>
            </div>
          </div>
        </AnimatedEntry>
      </div>

      {/* JSON-LD VideoObject — para que Google e IA indexen el video del evento */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: EVENT_VIDEO_TITLE,
            description: EVENT_VIDEO_DESCRIPTION,
            thumbnailUrl: `https://i.ytimg.com/vi/${EVENT_VIDEO_ID}/hqdefault.jpg`,
            uploadDate: "2026-03-25",
            contentUrl: `https://www.youtube.com/watch?v=${EVENT_VIDEO_ID}`,
            embedUrl: `https://www.youtube.com/embed/${EVENT_VIDEO_ID}`,
            publisher: {
              "@type": "Organization",
              name: "Colegio de Abogados y Abogadas de Costa Rica",
            },
            performer: {
              "@type": "Person",
              name: "Dr. Óscar Eduardo González Camacho",
              "@id": "https://corporaciongc.com/abogados/oscar-gonzalez#person",
            },
          }),
        }}
      />
    </section>
  );
}
