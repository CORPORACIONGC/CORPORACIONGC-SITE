import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { SentenciaDestacada } from "@/lib/jurisprudencia";

/* Las sentencias de la firma que tocan una materia, al pie de un área de
   práctica o de un artículo. Cierra el circuito de enlaces: la portada lleva
   al folio de sentencias, cada área lleva a las suyas y cada sentencia
   devuelve a las áreas donde aplicamos su criterio. */
export function SentenciasRelacionadas({
  sentencias,
  rotulo = "Jurisprudencia de la firma",
  titulo,
}: {
  sentencias: SentenciaDestacada[];
  rotulo?: string;
  titulo: string;
}) {
  if (sentencias.length === 0) return null;
  return (
    <nav aria-label="Jurisprudencia relacionada" className="mt-16 pt-10 border-t border-cream/[0.08]">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px w-8 bg-gold" />
        <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">{rotulo}</span>
      </div>
      <h2 className="font-display text-xl md:text-2xl text-cream tracking-tight mb-8 max-w-[50ch]">{titulo}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sentencias.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/jurisprudencia-destacada/${s.slug}`}
              className="group flex h-full items-start justify-between gap-4 p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.02] hover:border-burgundy/25 hover:bg-cream/[0.04] transition-all duration-300"
            >
              <div className="min-w-0">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40">
                  {s.numero.replace("Resolución N° ", "")} · {s.fechaCorta}
                </div>
                <div className="mt-2 text-sm font-semibold text-cream group-hover:text-gold transition-colors duration-300">
                  {s.titulo}
                </div>
                <div className="mt-1 text-xs text-cream/50 leading-relaxed line-clamp-2">{s.materia}</div>
              </div>
              <ArrowRight
                size={14}
                weight="bold"
                className="mt-1 text-cream/30 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-300 shrink-0"
              />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          href="/jurisprudencia-destacada"
          className="inline-flex items-center gap-1.5 text-xs text-cream/45 hover:text-gold transition-colors duration-300"
        >
          Ver todas las sentencias comentadas
          <ArrowRight size={12} weight="bold" />
        </Link>
      </div>
    </nav>
  );
}
