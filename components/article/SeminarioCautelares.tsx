/* Seminario del Colegio de Abogados y Abogadas sobre medidas cautelares en el
   contencioso administrativo (transmitido el 17 de junio de 2024). El Dr.
   González integró la segunda mesa, «Diálogo entre jueces y litigantes», y el
   video arranca en la pregunta del moderador que abre su intervención
   (1:33:25). Contenido comprobado en la transcripción del video el 26-09-2026.

   Sigue el patrón de CapacitacionEleinmsa: figura fuera de la prosa, con el
   texto alineado a la izquierda porque el cuerpo del artículo es justificado. */

import Link from "next/link";
import { LiteYouTube } from "@/components/ui/LiteYouTube";

const VIDEO_ID = "LrT-ofnCZoE";
const INICIO_INTERVENCION = 5605; // 1:33:25
const TITULO = "Seminario: Medidas cautelares en el contencioso administrativo";

export function SeminarioCautelares() {
  return (
    <figure className="not-prose my-12 overflow-hidden rounded-2xl border border-burgundy/15 bg-burgundy/[0.03] text-left">
      <LiteYouTube id={VIDEO_ID} title={TITULO} start={INICIO_INTERVENCION} />

      <figcaption className="p-6 md:p-8">
        <p className="m-0 mb-3 text-left text-[11px] font-semibold uppercase tracking-[0.16em] text-burgundy dark:text-hilo-texto">
          Colegio de Abogados y Abogadas de Costa Rica · 2024
        </p>
        <h3 className="m-0 mb-3 font-display text-xl text-cream md:text-2xl">
          Diálogo entre jueces y litigantes sobre la eficacia de la tutela cautelar
        </h3>
        <p className="m-0 mb-5 max-w-[62ch] text-left text-base leading-relaxed text-cream/75">
          El 17 de junio de 2024, en el seminario que el Colegio dedicó a las medidas cautelares
          en el contencioso administrativo, el Dr. Óscar Eduardo González Camacho integró la mesa
          sobre el impacto y la eficacia de estas medidas. El video comienza en su intervención. El
          moderador le pregunta si, al redactar el Código, se previó el alcance que tendría el
          régimen de medidas atípicas. El Dr. González sostiene que el capítulo cautelar es de los
          mejores del Código y requiere poco ajuste, y sitúa los problemas de la jurisdicción en el
          procedimiento, la organización y la gestión.
        </p>
        <Link
          href="/abogados/oscar-gonzalez"
          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-burgundy transition-colors hover:text-burgundy-light dark:text-hilo-texto dark:hover:text-hilo-texto"
        >
          Otras conferencias del Dr. González
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </figcaption>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: TITULO,
            description:
              "Seminario del Colegio de Abogados y Abogadas de Costa Rica sobre medidas cautelares en el contencioso administrativo, con la intervención del Dr. Óscar Eduardo González Camacho en la mesa sobre el impacto y la eficacia de la tutela cautelar.",
            thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`,
            uploadDate: "2024-06-17",
            contentUrl: `https://www.youtube.com/watch?v=${VIDEO_ID}`,
            embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
            publisher: {
              "@type": "Organization",
              name: "Colegio de Abogados y Abogadas de Costa Rica",
            },
            hasPart: {
              "@type": "Clip",
              name: "Intervención del Dr. Óscar Eduardo González Camacho",
              startOffset: INICIO_INTERVENCION,
              url: `https://www.youtube.com/watch?v=${VIDEO_ID}&t=${INICIO_INTERVENCION}`,
            },
          }),
        }}
      />
    </figure>
  );
}
