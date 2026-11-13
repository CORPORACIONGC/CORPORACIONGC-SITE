import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { LiteYouTube } from "@/components/ui/LiteYouTube";
import { RunningHead } from "@/components/ui/RunningHead";

/* Participación de la MSc. González Coto en el pódcast de la Universidad
   Escuela Libre de Derecho, donde es profesora. Datos tomados el 13-11-2026
   del propio video de YouTube (fecha y duración) y de la ficha del episodio
   en Spotify (título). */
const EPISODIO = {
  youtube: "cNwuFPgOcGY",
  spotify: "https://open.spotify.com/episode/6cmCY120nfxspuow445CbB",
  titulo: "Expropiaciones en Costa Rica: celeridad frente a garantías",
  programa: "Ayer y Hoy en La Libre",
  temporada: "Temporada 14, episodio 5",
  organizador: "Universidad Escuela Libre de Derecho",
  fecha: "2026-10-15T07:00:09-07:00",
  fechaVisible: "15 de octubre de 2026",
  duracion: "PT33M46S",
  minutos: 34,
  resumen:
    "Conversación sobre las expropiaciones en Costa Rica y la tensión entre la celeridad del procedimiento y las garantías de la persona propietaria. El episodio repasa tres exigencias de todo procedimiento expropiatorio: que se le comunique la motivación del interés público sobre su inmueble, que se notifique correctamente a quienes resultan afectados y que se le dé la oportunidad de obtener un justo precio.",
};

const enlace =
  "inline-flex items-center gap-1.5 py-1.5 text-sm text-cream/80 underline decoration-cream/25 underline-offset-4 transition-colors duration-300 hover:text-burgundy hover:decoration-burgundy dark:hover:text-hilo-texto dark:hover:decoration-hilo";

export function KatherineDivulgacion() {
  return (
    <section id="divulgacion" className="relative scroll-mt-28 bg-surface-alt py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] gap-12 lg:gap-20">
          <div>
            <AnimatedEntry>
              <RunningHead title="Divulgación" />
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Ayer y Hoy
                <br />
                <span className="text-burgundy-light">en La Libre</span>
              </h2>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="mt-5 text-sm text-cream/70 leading-relaxed max-w-[35ch]">
                Pódcast de la {EPISODIO.organizador}. {EPISODIO.temporada}.
              </p>
            </AnimatedEntry>
          </div>

          <AnimatedEntry delay={0.2}>
            <article className="max-w-[820px]">
              <div className="overflow-hidden border border-cream/[0.10] bg-neutral-900">
                <LiteYouTube id={EPISODIO.youtube} title={EPISODIO.titulo} miniaturaHd />
              </div>

              <p className="mt-7 text-[13px] text-cream/70 tabular-nums">
                {EPISODIO.organizador} · <time dateTime={EPISODIO.fecha.slice(0, 10)}>{EPISODIO.fechaVisible}</time> ·{" "}
                {EPISODIO.minutos} min
              </p>

              <h3 className="mt-3 font-display text-xl md:text-2xl tracking-tight leading-snug text-cream">
                {EPISODIO.titulo}
              </h3>

              <p className="mt-4 text-[15px] md:text-base text-cream/[0.78] leading-[1.7] max-w-[62ch]">
                {EPISODIO.resumen}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2 border-t border-cream/10 pt-5">
                <a href={EPISODIO.spotify} target="_blank" rel="noopener noreferrer" className={enlace}>
                  Escuchar en Spotify
                  <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
                </a>
                <a
                  href={`https://www.youtube.com/watch?v=${EPISODIO.youtube}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={enlace}
                >
                  Ver en YouTube
                  <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
                </a>
                <Link href="/areas/expropiaciones" className={enlace}>
                  Área de expropiaciones
                </Link>
              </div>
            </article>
          </AnimatedEntry>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: EPISODIO.titulo,
            description: EPISODIO.resumen,
            thumbnailUrl: `https://i.ytimg.com/vi/${EPISODIO.youtube}/maxresdefault.jpg`,
            uploadDate: EPISODIO.fecha,
            duration: EPISODIO.duracion,
            embedUrl: `https://www.youtube.com/embed/${EPISODIO.youtube}`,
            inLanguage: "es",
            isPartOf: { "@type": "CreativeWorkSeries", name: EPISODIO.programa },
            publisher: { "@type": "CollegeOrUniversity", name: EPISODIO.organizador },
            contributor: {
              "@type": "Person",
              "@id": "https://www.corporaciongc.com/abogados/katherine-gonzalez#person",
              name: "Katherine González Coto",
              honorificPrefix: "MSc.",
            },
            about: { "@type": "Thing", name: "Expropiación forzosa en Costa Rica" },
          }),
        }}
      />
    </section>
  );
}
