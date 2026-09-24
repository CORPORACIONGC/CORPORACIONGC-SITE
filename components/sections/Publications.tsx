import Link from "next/link";
import Image from "next/image";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Article } from "@phosphor-icons/react/dist/ssr";
import { TEAM, FOOTER_GUIAS } from "@/lib/constants";
import { RunningHead } from "@/components/ui/RunningHead";

type ArticlePreview = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  /** Autor visible del artículo; ausente si el artículo lo oculta. */
  author?: string;
  minutos: number;
};

/* ── Autor: el nombre del artículo se cruza con el equipo para mostrar el
   retrato y el nombre con su título académico. ── */
const quitarTilde = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const RETRATOS: Record<string, string> = { "oscar-gonzalez": "/images/equipo/oscar-gonzalez-oficina.jpg" };
/* Encuadre del retrato en su marco 4:5: ancho de la imagen y desplazamiento
   en % del marco. Los retratos normalizados del equipo ya vienen en 4:5, con
   cabeza y hombros, y se muestran enteros; la foto de oficina de don Óscar
   lo tiene a la derecha y más pequeño, y se acerca un poco hacia él. */
type Encuadre = { ancho: number; izq: number; arriba: number };
const ENCUADRE_BASE: Encuadre = { ancho: 100, izq: 0, arriba: 0 };
const ENCUADRES: Record<string, Encuadre> = { "oscar-gonzalez": { ancho: 150, izq: -44, arriba: -9.6 } };

function autorDe(nombre?: string) {
  if (!nombre) return null;
  const n = quitarTilde(nombre);
  const m = TEAM.find((t) => {
    const partes = quitarTilde(t.name).split(" ").filter((p) => !p.endsWith("."));
    return partes.slice(-2).every((p) => n.includes(p));
  });
  if (!m) return { nombre, retrato: null as string | null, encuadre: ENCUADRE_BASE };
  return {
    nombre: m.name,
    retrato: RETRATOS[m.slug] ?? `/images/equipo/${m.slug}.jpg`,
    encuadre: ENCUADRES[m.slug] ?? ENCUADRE_BASE,
  };
}

const MESES = ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "set.", "oct.", "nov.", "dic."];
function fechaCorta(iso: string) {
  const [a, m, d] = iso.split("-").map(Number);
  return a && m && d ? `${d} ${MESES[m - 1]} ${a}` : "";
}

/* Retrato en 4:5, con esquinas rectas como las fotos del equipo. */
function Retrato({ src, ancho, encuadre = ENCUADRE_BASE }: { src: string; ancho: number; encuadre?: Encuadre }) {
  return (
    <span
      aria-hidden="true"
      className="relative shrink-0 overflow-hidden bg-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
      style={{ width: ancho, height: Math.round(ancho * 1.25) }}
    >
      <Image
        src={src}
        alt=""
        width={Math.round((ancho * encuadre.ancho) / 50)}
        height={Math.round((ancho * encuadre.ancho * 1.25) / 50)}
        className="absolute max-w-none saturate-[0.9] transition-[filter] duration-500 group-hover:saturate-100 group-focus-visible:saturate-100"
        style={{ width: `${encuadre.ancho}%`, height: "auto", left: `${encuadre.izq}%`, top: `${encuadre.arriba}%` }}
      />
    </span>
  );
}

function Firma({ article, retrato = 40 }: { article: ArticlePreview; retrato?: number }) {
  const autor = autorDe(article.author);
  return (
    <div className="flex items-center gap-3">
      {autor?.retrato && <Retrato src={autor.retrato} ancho={retrato} encuadre={autor.encuadre} />}
      <div className="min-w-0 text-[13px] leading-snug">
        {autor && <p className="truncate font-semibold text-white/90">{autor.nombre}</p>}
        <p className="tabular-nums text-white/65">
          {article.date && <time dateTime={article.date}>{fechaCorta(article.date)}</time>}
          {article.date && " · "}
          {article.minutos} min de lectura
        </p>
      </div>
    </div>
  );
}

/* Trazo dorado al pie de una fila: el mismo gesto de las filas del equipo y
   de las áreas de práctica. */
const Trazo = () => (
  <span
    aria-hidden="true"
    className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-gold transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
  />
);
const Flecha = () => (
  <ArrowRight
    size={16}
    weight="bold"
    aria-hidden="true"
    className="shrink-0 -translate-x-1.5 text-gold opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
  />
);

/* ── Sumario: un artículo principal y los siguientes en lista, como la
   portada de una revista de ideas. Sin cajas: los grupos los separa un
   filete. El filete vertical queda a igual distancia de ambas columnas. ── */
function Sumario({ articles }: { articles: ArticlePreview[] }) {
  const [principal, ...resto] = articles;
  const lista = resto.slice(0, 3);
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-12">
      <AnimatedEntry delay={0.15} className={lista.length ? "lg:col-span-7" : "lg:col-span-8"}>
        <Link href={`/articulos/${principal.slug}`} className="group block outline-offset-8">
          <Firma article={principal} retrato={56} />
          <h3 className="type-title mt-8 max-w-[24ch] text-white transition-colors duration-300 group-hover:text-gold-light">
            {principal.title}
          </h3>
          <p className="type-lead mt-6 max-w-[58ch] text-white/75 line-clamp-3 md:line-clamp-4">
            {principal.excerpt}
          </p>
          <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors duration-300 group-hover:text-gold-light">
            Leer el artículo
            <ArrowRight
              size={14}
              weight="bold"
              aria-hidden="true"
              className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            />
          </span>
        </Link>
      </AnimatedEntry>

      {lista.length > 0 && (
        <StaggerContainer
          role="list"
          className="border-t border-white/10 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-12"
          stagger={0.08}
        >
          {lista.map((a, i) => (
            <StaggerItem key={a.slug} role="listitem">
              <Link
                href={`/articulos/${a.slug}`}
                className={`group relative flex items-start justify-between gap-6 border-b border-white/10 py-7 outline-offset-4 ${
                  i === 0 ? "lg:pt-0" : ""
                }`}
              >
                <div className="min-w-0">
                  <h3 className="type-card-title max-w-[46ch] text-white transition-colors duration-300 group-hover:text-gold-light">
                    {a.title}
                  </h3>
                  <div className="mt-4">
                    <Firma article={a} retrato={40} />
                  </div>
                </div>
                <span className="mt-1">
                  <Flecha />
                </span>
                <Trazo />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </div>
  );
}

/**
 * Artículos de la portada y de los perfiles. `total` es la cantidad de
 * artículos del sitio: si se pasa, el botón la dice («Ver los 43
 * artículos»); los perfiles no la pasan, porque muestran solo los del autor.
 */
export function Publications({
  articles,
  total,
  locator,
}: {
  articles: ArticlePreview[];
  total?: number;
  /* Posición de la sección en la página (la portada la numera). */
  locator?: string;
}) {
  const hasArticles = articles.length > 0;
  const rotulo = total ? `Ver los ${total} artículos` : "Ver todos los artículos";

  return (
    <section
      aria-labelledby="articulos-titulo"
      className="gc-on-dark relative overflow-hidden bg-gradient-to-b from-burgundy-dark via-[#3A0B1F] to-[#1E0610] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <AnimatedEntry>
          <RunningHead title="Publicaciones" locator={locator} tone="dark" />
        </AnimatedEntry>
        <div className="mb-14 flex items-end justify-between gap-6 md:mb-20">
          <AnimatedEntry>
            <h2 id="articulos-titulo" className="type-headline text-white">
              Artículos y análisis jurídico
            </h2>
          </AnimatedEntry>

          {hasArticles && (
            <AnimatedEntry delay={0.3} className="hidden shrink-0 sm:block">
              <MagneticButton href="/articulos" variant="outline-inverse">
                {rotulo}
                <ArrowRight size={14} weight="bold" />
              </MagneticButton>
            </AnimatedEntry>
          )}
        </div>

        {hasArticles ? (
          <>
            <Sumario articles={articles} />

            {/* Las guías pilar, fijas. El sumario muestra lo más reciente y
                por eso dejaba fuera al pilar de amparo, que es la pieza más
                consultada del sitio. Esta fila no depende de la fecha. */}
            <nav
              aria-label="Guías más consultadas"
              className="mt-14 border-t border-white/[0.10] pt-8 md:mt-16"
            >
              <div className="type-label mb-5 text-white/65">Guías más consultadas</div>
              <ul role="list" className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {FOOTER_GUIAS.map((g) => (
                  <li key={g.href}>
                    <Link
                      href={g.href}
                      className="group relative block py-1 text-sm text-white/80 transition-colors duration-300 hover:text-white"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-gold transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
                      />
                      {g.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-12 sm:hidden">
              <MagneticButton href="/articulos" variant="outline-inverse">
                {rotulo}
                <ArrowRight size={14} weight="bold" />
              </MagneticButton>
            </div>
          </>
        ) : (
          <AnimatedEntry delay={0.3}>
            <div className="rounded-xl border border-dashed border-white/[0.10] bg-white/[0.03] px-6 py-16 text-center">
              <Article size={40} weight="duotone" className="mx-auto mb-4 text-white/20" />
              <p className="mb-1 text-sm text-white/65">Próximamente</p>
              <p className="text-[13px] text-white/65">Los artículos y publicaciones aparecerán aquí.</p>
            </div>
          </AnimatedEntry>
        )}
      </div>

    </section>
  );
}
