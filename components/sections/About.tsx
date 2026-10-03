
import {
  Scales,
  Gavel,
  ShieldCheck,
  Shield,
  FileText,
  Stamp,
  Brain,
  Bank,
  Medal,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { PRACTICE_AREAS, CONFERENCES, EDUCATION, EDUCATION_DISTINCTION } from "@/lib/constants";
import { RunningHead } from "@/components/ui/RunningHead";

const iconMap: Record<string, React.ElementType> = {
  Scales,
  Gavel,
  ShieldCheck,
  Shield,
  FileText,
  Stamp,
  Brain,
  Bank,
};

export function About() {
  return (
    <section id="perfil" className="relative bg-surface-alt py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20">
          {/* Left — Bio */}
          <div>
            <AnimatedEntry>
              <RunningHead title="Perfil profesional" />
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Derecho público en litigio,
                <br />
                <span className="text-burgundy-light">del acto administrativo a la Sala Primera</span>
              </h2>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="mt-6 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Litigo contra el Estado y los entes públicos ante el Tribunal
                Contencioso Administrativo, la Sala Primera, la Sala
                Constitucional y la Contraloría General de la República.
                Atiendo el proceso contencioso en todas sus fases: medidas
                cautelares provisionalísimas y ante causam, demandas de
                nulidad y de responsabilidad patrimonial, audiencias
                preliminares, juicios orales y recursos de casación.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.25}>
              <p className="mt-4 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                En contratación pública asesoro a empresas oferentes y
                contratistas, con recursos de objeción, apelación y
                revocatoria ante la Contraloría y la Administración, y llevo
                al Tribunal la impugnación cuando la vía administrativa se
                agota. Preparo también recursos de amparo y acciones de
                inconstitucionalidad. Mi práctica atraviesa sectores muy
                diversos: telecomunicaciones, energía, mercado de valores,
                salud, empleo público, expropiaciones y régimen disciplinario,
                entre otros.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.3}>
              <p className="mt-4 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Inicié mi carrera en la Sala Constitucional, en el despacho
                del magistrado Paul Rueda Leal. Desde 2019 trabajo al lado del
                Dr. Óscar Eduardo González Camacho, coordinador de la comisión
                redactora del Código Procesal Contencioso Administrativo:
                primero como asistente legal, a partir de 2020 en el trabajo
                de fondo de sus litigios y, desde mi incorporación en 2025,
                como abogado asociado.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.35}>
              <p className="mt-4 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Investigo la aplicación de la inteligencia artificial a la
                justicia y a la contratación estatal. He publicado sobre ese
                tema y sobre organización administrativa en revistas
                jurídicas, lo he expuesto en paneles internacionales en Bogotá
                y San José, y lo aplico a diario como herramienta de trabajo
                en el despacho.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.4}>
              <div className="mt-8 p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-3">
                  Formación académica
                </div>
                <ul className="space-y-3">
                  {EDUCATION.map((ed) => (
                    <li key={ed.degree} className="flex items-baseline gap-2">
                      <div className="w-1 h-1 rounded-full bg-emphasis mt-1.5 shrink-0" />
                      <div>
                        <div className="text-sm text-cream/75">{ed.degree}</div>
                        <div className="mt-0.5 text-[11px] text-cream/50">
                          {ed.institution}
                          <span className="ml-1.5 text-[9px] tracking-wider uppercase text-emphasis/70 font-medium">{ed.status}</span>
                        </div>
                        {"note" in ed && (
                          <div className="mt-0.5 text-[10px] text-cream/40">{ed.note}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-cream/[0.06]">
                  <div className="flex items-start gap-3 px-3.5 py-3 rounded-lg border border-emphasis/20 bg-emphasis/[0.05]">
                    <Medal size={18} weight="duotone" className="text-emphasis shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[9px] tracking-[0.2em] uppercase text-emphasis/70 font-medium">
                        Distinción
                      </div>
                      <div className="mt-1 text-sm text-cream/85 font-medium">
                        {EDUCATION_DISTINCTION.title}
                      </div>
                      <div className="mt-0.5 text-[11px] text-cream/50 leading-relaxed">
                        {EDUCATION_DISTINCTION.detail}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedEntry>

            {/* Investigación & IA */}
            <AnimatedEntry delay={0.5}>
              <div className="mt-6 p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-3">
                  Investigación en IA y Derecho
                </div>
                <h3 className="text-sm font-semibold text-cream/90 tracking-tight max-w-[55ch]">
                  Hacia la implementación de sistemas automatizados de decisión
                  basados en inteligencia artificial en la administración de
                  justicia costarricense
                </h3>
                <p className="mt-2 text-xs text-cream/50 leading-relaxed max-w-[55ch]">
                  Trabajo Final de Graduación que analiza la integración de
                  inteligencia artificial en el ámbito judicial desde el marco
                  normativo de la Unión Europea (EU AI Act), proponiendo una
                  hoja de ruta para su adopción segura en Costa Rica.
                </p>
                <div className="mt-2 text-[10px] text-cream/35">
                  Director: Dr. Óscar Eduardo González Camacho — UCR, 2025
                </div>
                <a
                  href="/articulos/tesis-ia-justicia"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-emphasis/80 hover:text-emphasis transition-colors duration-300 font-medium"
                >
                  Leer la investigación completa
                  <span aria-hidden>&rarr;</span>
                </a>
                <div className="mt-4 pt-4 border-t border-cream/[0.06]">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-2">
                    Publicaciones académicas
                  </div>
                  <h3 className="text-sm font-semibold text-cream/90 tracking-tight max-w-[55ch]">
                    La personalidad jurídica instrumental como técnica de
                    organización administrativa
                  </h3>
                  <p className="mt-1.5 text-xs text-cream/50 leading-relaxed max-w-[55ch]">
                    Revista El Foro, N.° 32 — Colegio de Abogados y Abogadas
                    de Costa Rica, ISSN 2215-6771, pp. 7–22.
                  </p>
                  <a
                    href="/articulos/personalidad-juridica-instrumental"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-emphasis/80 hover:text-emphasis transition-colors duration-300 font-medium"
                  >
                    Leer el artículo
                    <span aria-hidden>&rarr;</span>
                  </a>
                  <div className="mt-4 pt-4 border-t border-cream/[0.06]">
                    <h3 className="text-sm font-semibold text-cream/90 tracking-tight max-w-[55ch]">
                      Administración Pública aumentada: inteligencia artificial
                      en la contratación estatal costarricense
                    </h3>
                    <p className="mt-1.5 text-xs text-cream/50 leading-relaxed max-w-[55ch]">
                      Revista Estudiantil Hermenéutica, Ed. XXVI — Facultad de
                      Derecho, Universidad de Costa Rica, 2025, pp. 75–144.
                      Coautoría con la Licda. Mariana Montero Acuña.
                    </p>
                    <a
                      href="/articulos/hermeneutica-ia-contratacion-publica"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs text-emphasis/80 hover:text-emphasis transition-colors duration-300 font-medium"
                    >
                      Leer el artículo
                      <span aria-hidden>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedEntry>

            {/* Conferencias */}
            <AnimatedEntry delay={0.6}>
              <div className="mt-4 p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-3">
                  Conferencias y paneles internacionales
                </div>
                <div className="space-y-4">
                  {CONFERENCES.map((conf, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-burgundy/[0.2] text-burgundy-light text-[9px] tracking-wide font-medium uppercase">
                          {conf.role}
                        </span>
                        <span className="text-[10px] text-cream/35 tracking-wide">
                          {conf.date}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-cream/90 tracking-tight">
                        {conf.title}
                      </h4>
                      <p className="mt-1 text-xs text-emphasis/80 font-medium leading-relaxed max-w-[55ch]">
                        {conf.panel}
                      </p>
                      <div className="mt-1 text-[10px] text-cream/40">
                        {conf.location}
                      </div>
                      {i < CONFERENCES.length - 1 && (
                        <div className="mt-4 h-px bg-cream/[0.06]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedEntry>
          </div>

          {/* Right — Practice areas */}
          <div className="lg:pt-16">
            <AnimatedEntry delay={0.15}>
              <RunningHead title="Áreas de práctica" />
            </AnimatedEntry>

            <StaggerContainer className="space-y-3" stagger={0.07}>
              {PRACTICE_AREAS.map((area, i) => {
                const Icon = iconMap[area.icon];
                return (
                  <StaggerItem key={i}>
                    <div className="group p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03] hover:border-burgundy/20 transition-colors duration-400">
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-burgundy/[0.15] text-burgundy-light group-hover:bg-burgundy/25 transition-colors duration-300">
                          <Icon size={20} weight="duotone" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-cream/90 tracking-tight">
                            {area.title}
                          </h3>
                          <p className="mt-1.5 text-xs text-cream/50 leading-relaxed">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
