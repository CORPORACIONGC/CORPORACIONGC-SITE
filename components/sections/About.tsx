
import {
  Scales,
  Gavel,
  ShieldCheck,
  Shield,
  FileText,
  Stamp,
  Brain,
  Bank,
  Wallet,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { PRACTICE_AREAS, CONFERENCES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Scales,
  Gavel,
  ShieldCheck,
  Shield,
  FileText,
  Stamp,
  Brain,
  Bank,
  Wallet,
};

export function About() {
  return (
    <section id="perfil" className="relative bg-surface-alt py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20">
          {/* Left — Bio */}
          <div>
            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-lg text-cream/15 font-semibold">01</span>
                <div className="h-px w-6 bg-cream/10" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">
                  Perfil profesional
                </span>
              </div>
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Litigio contencioso e inteligencia
                <br />
                artificial{" "}
                <span className="text-burgundy-light">al servicio del derecho</span>
              </h2>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="mt-6 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Litigo contra el Estado ante el Tribunal Contencioso
                Administrativo, la Sala Constitucional, la Sala Primera y la
                Contraloría General de la República. Mi práctica cruza
                materias y sectores muy diversos: contratación administrativa,
                expropiaciones, empleo público, régimen disciplinario,
                responsabilidad del Estado, telecomunicaciones, energía,
                mercado de valores, banca, fintech y activos virtuales,
                salud, educación y turismo, entre otros. Junto con Esteban
                Pérez Herrera conduzco el área de regulación fintech de la
                firma: inscripción de proveedores de servicios de activos
                virtuales ante SUGEF bajo la Ley N.° 10961 y cumplimiento
                antilavado.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.3}>
              <p className="mt-4 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Manejo el proceso contencioso completo: medidas cautelares
                provisionalísimas y ante causam, demandas de nulidad y de
                responsabilidad patrimonial, preparación de audiencias
                orales y recursos de casación. Inicié mi carrera en la Sala
                Constitucional, en el despacho del Magistrado Paul Rueda
                Leal, y me formé durante siete años bajo la dirección del
                Dr. Óscar Eduardo González Camacho, co-redactor del Código
                Procesal Contencioso Administrativo.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.35}>
              <p className="mt-4 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                A esa base procesal sumo una línea de investigación en
                inteligencia artificial aplicada a la justicia, que integro
                como infraestructura técnica del ejercicio profesional, que
                he presentado en paneles internacionales en Bogotá y San
                José, y que he publicado en revistas jurídicas
                especializadas.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.4}>
              <div className="mt-8 p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-3">
                  Formación académica
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <div className="w-1 h-1 rounded-full bg-gold mt-1.5 shrink-0" />
                    <span className="text-sm text-cream/75">
                      Licenciatura en Derecho con mención en Derecho Tributario — Universidad de Costa Rica
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <div className="w-1 h-1 rounded-full bg-burgundy-light mt-1.5 shrink-0" />
                    <span className="text-sm text-cream/75">
                      Bachillerato en Historia — Universidad de Costa Rica
                      <span className="ml-1.5 text-[9px] tracking-wider uppercase text-gold/70 font-medium">En curso</span>
                      <span className="block mt-0.5 text-[10px] text-cream/40">Formación complementaria aplicada al litigio de casos con componente histórico-registral</span>
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-[10px] text-cream/40">
                  3er mejor promedio — II Convocatoria, Examen de Excelencia
                  Académica del Colegio de Abogados y Abogadas de Costa Rica, 2025
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
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-gold/80 hover:text-gold transition-colors duration-300 font-medium"
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
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-gold/80 hover:text-gold transition-colors duration-300 font-medium"
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
                      className="mt-2 inline-flex items-center gap-1.5 text-xs text-gold/80 hover:text-gold transition-colors duration-300 font-medium"
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
                      <p className="mt-1 text-xs text-gold/80 font-medium leading-relaxed max-w-[55ch]">
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
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-burgundy/50" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">
                  Áreas de práctica
                </span>
              </div>
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
