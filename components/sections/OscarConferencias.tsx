"use client";

import { useState, useCallback } from "react";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { VideoCamera, Play } from "@phosphor-icons/react";

type Video = {
  id: string;
  title: string;
  event: string;
  organizer: string;
  description: string;
};

const VIDEOS: Video[] = [
  {
    id: "K5YjYwaqAGU",
    title: "I Seminario de Litigación Oral y Contencioso Administrativo",
    event: "I Seminario de Litigación Oral y Contencioso Administrativo",
    organizer: "Colegio de Abogados y Abogadas de Costa Rica",
    description:
      "Ponencia del Dr. Óscar Eduardo González Camacho sobre litigación oral en la jurisdicción contencioso-administrativa, organizada por el Colegio de Abogados y Abogadas de Costa Rica.",
  },
  {
    id: "95hHm6MiLOQ",
    title: "Seminario Internacional de Derecho Administrativo",
    event: "Seminario Internacional de Derecho Administrativo",
    organizer: "Colegio de Abogados y Abogadas de Costa Rica",
    description:
      "Ponencia del Dr. Óscar Eduardo González Camacho en el Seminario Internacional de Derecho Administrativo organizado por el Colegio de Abogados y Abogadas de Costa Rica.",
  },
  {
    id: "o5TwVynhOY8",
    title: "Efectos jurídicos de la contratación administrativa en la época de la pandemia",
    event: "Conferencia sobre contratación administrativa y pandemia",
    organizer: "Universidad Escuela Libre de Derecho",
    description:
      "Conferencia del Dr. Óscar Eduardo González Camacho sobre los efectos jurídicos de la contratación administrativa durante la pandemia, organizada por la Universidad Escuela Libre de Derecho.",
  },
  {
    id: "LrT-ofnCZoE",
    title: "Seminario: Medidas cautelares en el contencioso administrativo",
    event: "Seminario sobre Medidas Cautelares en el Contencioso Administrativo",
    organizer: "Colegio de Abogados y Abogadas de Costa Rica",
    description:
      "Seminario del Dr. Óscar Eduardo González Camacho sobre medidas cautelares en la jurisdicción contencioso-administrativa, organizado por el Colegio de Abogados y Abogadas de Costa Rica.",
  },
  {
    id: "704meiyKlOY",
    title: "Aporte sustancial del Código Procesal Contencioso Administrativo",
    event: "Seminario sobre el aporte del CPCA",
    organizer: "Colegio de Abogados y Abogadas de Costa Rica",
    description:
      "Seminario del Dr. Óscar Eduardo González Camacho sobre el aporte sustancial del Código Procesal Contencioso Administrativo al ordenamiento jurídico costarricense, organizado por el Colegio de Abogados y Abogadas de Costa Rica.",
  },
  {
    id: "nREXX_oROBY",
    title: "El Contencioso Administrativo",
    event: "Conferencia sobre el Contencioso Administrativo",
    organizer: "Universidad Escuela Libre de Derecho",
    description:
      "Conferencia del Dr. Óscar Eduardo González Camacho sobre la jurisdicción contencioso-administrativa costarricense, organizada por la Universidad Escuela Libre de Derecho.",
  },
  {
    id: "0ZKzZrXZiKY",
    title: "Mesa Redonda: El Nuevo Régimen del Servicio Público",
    event: "Mesa Redonda — Derecho Administrativo",
    organizer: "Instituto de Investigaciones Jurídicas, UCR",
    description:
      "Participación del Dr. Óscar Eduardo González Camacho en la mesa redonda sobre el nuevo régimen del servicio público, organizada por el Instituto de Investigaciones Jurídicas de la Universidad de Costa Rica.",
  },
  {
    id: "uyj9G96ib4s",
    title: "Congreso de Derecho Ambiental 2013",
    event: "Congreso de Derecho Ambiental",
    organizer: "Colegio de Abogados y Abogadas de Costa Rica",
    description:
      "Participación del Dr. Óscar Eduardo González Camacho en el Congreso de Derecho Ambiental 2013 organizado por el Colegio de Abogados y Abogadas de Costa Rica.",
  },
];

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
      {/* YouTube thumbnail */}
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/95 group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xl">
          <Play size={22} weight="fill" className="text-neutral-900 ml-0.5" />
        </div>
      </div>
    </button>
  );
}

export function OscarConferencias() {
  return (
    <section className="relative bg-surface py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatedEntry>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-cream/55 font-medium">
              Conferencias y Ponencias
            </span>
          </div>
        </AnimatedEntry>

        <AnimatedEntry delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl tracking-tighter leading-[1.05] text-cream mb-12">
            En{" "}
            <span className="text-burgundy-light">video</span>
          </h2>
        </AnimatedEntry>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VIDEOS.map((video) => (
            <AnimatedEntry key={video.id} delay={0.2}>
              <div className="rounded-xl border border-cream/[0.06] bg-cream/[0.02] overflow-hidden">
                {/* Lite YouTube — thumbnail until click */}
                <LiteYouTube id={video.id} title={video.title} />
                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <VideoCamera
                      size={16}
                      weight="duotone"
                      className="text-burgundy-light shrink-0"
                    />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-cream/40">
                      {video.organizer}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-cream">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/55 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </AnimatedEntry>
          ))}
        </div>
      </div>

      {/* JSON-LD VideoObject — para que Google e IA indexen los videos */}
      {VIDEOS.map((video) => (
        <script
          key={video.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: video.title,
              description: video.description,
              thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
              uploadDate: "2023-01-01",
              contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
              embedUrl: `https://www.youtube.com/embed/${video.id}`,
              publisher: {
                "@type": "Organization",
                name: video.organizer,
              },
              performer: {
                "@type": "Person",
                name: "Dr. Óscar Eduardo González Camacho",
                "@id": "https://corporaciongc.com/abogados/oscar-gonzalez#person",
              },
            }),
          }}
        />
      ))}
    </section>
  );
}
