import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { RunningHead } from "@/components/ui/RunningHead";

/* Relato de un perfil en prosa (D-06, 25-11-2026). Los perfiles dejaron
   las tarjetas grises con icono, los recuadros de formación y docencia y
   la franja de cifras: PRODUCT.md pide que un perfil no se lea como
   currículum ni como cajas de datos. Cada bloque lleva a la izquierda su
   titular, fijo mientras se lee en escritorio, y a la derecha párrafos
   con subtítulos, como la semblanza de un ponente. Ningún texto baja de
   14 px. Lo usan las secciones «Perfil» y «Trayectoria» de cada abogado y
   de los asistentes. */

/** Clase de los enlaces dentro del relato: subrayados, para no depender
 *  solo del color (WCAG 1.4.1). */
export const enlaceRelato =
  "text-burgundy underline decoration-burgundy/30 underline-offset-4 transition-colors hover:text-burgundy-light dark:text-hilo-texto dark:decoration-hilo/30 dark:hover:text-hilo-texto";

export type ApartadoRelato = { titulo: string; contenido: React.ReactNode };

export function RelatoPerfil({
  id,
  rotulo,
  titulo,
  entrada,
  apartados,
  alterno = false,
}: {
  /** Ancla de la sección: «perfil» o «trayectoria», que usa el menú. */
  id: string;
  /** Rótulo corrido sobre el titular. */
  rotulo: string;
  /** Titular en dos líneas; la segunda puede ir en burdeos. */
  titulo: React.ReactNode;
  /** Párrafos de entrada, en cuerpo mayor (y la cita, si la hay). */
  entrada?: React.ReactNode;
  apartados: ApartadoRelato[];
  /** Fondo alterno, para separar dos bloques seguidos. */
  alterno?: boolean;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${alterno ? "bg-surface-alt" : "bg-surface"}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <AnimatedEntry>
              <RunningHead title={rotulo} />
            </AnimatedEntry>
            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">{titulo}</h2>
            </AnimatedEntry>
          </div>

          <div>
            {entrada && (
              <AnimatedEntry delay={0.15} className="mb-16">
                <div className="space-y-4 text-base md:text-lg leading-[1.75] text-cream/80 max-w-[62ch]">{entrada}</div>
              </AnimatedEntry>
            )}
            <div>
              {apartados.map((a) => (
                <AnimatedEntry key={a.titulo} delay={0.1} className="mt-14 first:mt-0 md:mt-16">
                  <section>
                    <h3 className="font-display text-2xl md:text-[1.75rem] tracking-tight leading-tight text-cream">{a.titulo}</h3>
                    <div className="mt-4 space-y-4 text-base md:text-[1.0625rem] leading-[1.75] text-cream/75 max-w-[62ch]">
                      {a.contenido}
                    </div>
                  </section>
                </AnimatedEntry>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Cita de una fuente dentro de la entrada: en cursiva, con su pie. */
export function CitaRelato({ children, pie }: { children: React.ReactNode; pie: React.ReactNode }) {
  return (
    <figure className="!mt-10 border-l-2 border-emphasis/60 pl-5">
      <blockquote className="text-base italic text-cream/80 leading-relaxed max-w-[58ch]">{children}</blockquote>
      <figcaption className="mt-3 text-sm text-cream/70 leading-relaxed max-w-[62ch]">{pie}</figcaption>
    </figure>
  );
}

/* Posición de la Universidad de Costa Rica en el ranking QS de América
   Latina y el Caribe, para los perfiles de quienes estudiaron o enseñan
   allí. Se actualiza aquí una vez al año, cuando QS publica la edición
   nueva (la de 2027 salió en octubre de 2026). El enlace lleva a la ficha
   de la UCR en QS, donde se ve la posición (puesto 17 de América Latina y
   el Caribe en 2027). En el texto solo se lee «la mejor ubicada de
   Centroamérica», después de «Universidad de Costa Rica,». */
export const QS_UCR = {
  url: "https://www.topuniversities.com/universities/universidad-de-costa-rica",
  puesto: 17,
  edicion: 2027,
};

export function RankingUcr() {
  return (
    <a href={QS_UCR.url} target="_blank" rel="noopener noreferrer" className={enlaceRelato}>
      la mejor ubicada de Centroamérica
    </a>
  );
}
