// app/jurisprudencia-destacada/[slug]/opengraph-image.tsx
import {
  renderJurisprudenceOg,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og-templates";
import { getSentenciaBySlug } from "@/lib/jurisprudencia";

// nodejs runtime: lee la foto del redactor y las fuentes desde el filesystem.
export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSentenciaBySlug(slug);
  return [
    {
      id: "default",
      alt: s
        ? `${s.titulo} — ${s.numero}, redactada por el Dr. Óscar Eduardo González Camacho.`
        : "Jurisprudencia destacada de Corporación GC, Costa Rica.",
      size: OG_SIZE,
      contentType: OG_CONTENT_TYPE,
    },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSentenciaBySlug(slug);
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://corporaciongc.com";

  if (!s) {
    return renderJurisprudenceOg({
      numero: "Resolución",
      fechaCorta: "—",
      tribunal: "Sala Primera de la Corte Suprema de Justicia",
      title: "Jurisprudencia destacada",
      pullQuote:
        "Sentencias paradigmáticas redactadas por el Dr. Óscar Eduardo González Camacho como Magistrado de la Sala Primera de la Corte Suprema.",
      baseUrl,
    });
  }

  return renderJurisprudenceOg({
    badge: s.badge?.label,
    numero: s.numero,
    fechaCorta: s.fechaCorta,
    tribunal: s.tribunal,
    title: s.titulo,
    pullQuote: s.pullQuote.texto,
    baseUrl,
  });
}
