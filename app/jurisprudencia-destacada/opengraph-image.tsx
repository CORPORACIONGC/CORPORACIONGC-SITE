// app/jurisprudencia-destacada/opengraph-image.tsx
import { renderDefaultOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export const alt =
  "Jurisprudencia Destacada del Dr. Óscar Eduardo González Camacho — Corporación GC, Costa Rica.";

export default async function Image() {
  return renderDefaultOg({
    eyebrow: "Jurisprudencia Destacada",
    title: "Sentencias que marcaron el {{em}}",
    emphasis: "rumbo",
    body: "Fallos paradigmáticos redactados por el Dr. Óscar Eduardo González Camacho durante sus doce años como Magistrado de la Sala Primera de la Corte Suprema (2002–2014). Texto íntegro verificado y pasajes destacados.",
    url: "corporaciongc.com/jurisprudencia-destacada",
  });
}
