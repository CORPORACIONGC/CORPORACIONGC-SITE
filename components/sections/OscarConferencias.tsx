"use client";

import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { VideoCamera } from "@phosphor-icons/react";

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
    id: "uyj9G96ib4s",
    title: "Congreso de Derecho Ambiental 2013",
    event: "Congreso de Derecho Ambiental",
    organizer: "Colegio de Abogados y Abogadas de Costa Rica",
    description:
      "Participación del Dr. Óscar Eduardo González Camacho en el Congreso de Derecho Ambiental 2013 organizado por el Colegio de Abogados y Abogadas de Costa Rica.",
  },
];

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
                {/* Video embed — responsive 16:9 */}
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
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
