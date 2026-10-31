import Image from "next/image";
import {
  Envelope,
  Phone,
  WhatsappLogo,
  MapPin,
  GraduationCap,
  Trophy,
  Translate,
  BookOpen,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";
import { RunningHead } from "@/components/ui/RunningHead";
import { FIRM_CONTACT } from "@/lib/constants";
import type { Asistente } from "@/lib/asistentes";

/* Perfil de un asistente legal con el mismo formato que el de los abogados
   (EstebanHero, EstebanAbout, EstebanExperience y EstebanContact), con menos
   contenido y sin ofrecer consultas jurídicas: esas las atienden los
   abogados de la firma. */

export function AsistenteHero({ a }: { a: Asistente }) {
  const [l1, l2, l3] = a.nameLines;
  return (
    <section id="inicio" className="relative min-h-[100dvh] bg-surface overflow-hidden">
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-burgundy/[0.08] to-transparent pointer-events-none hidden dark:block" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-28 md:pt-0 md:min-h-[100dvh] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative z-10 py-8 md:py-0">
          <AnimatedEntry delay={0.1}>
            <RunningHead title={a.role} />
          </AnimatedEntry>

          <AnimatedEntry delay={0.2}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-none text-cream">
              {l1}
              <br />
              {l2} <span className="text-hilo-texto">{l3}</span>
            </h1>
          </AnimatedEntry>

          <AnimatedEntry delay={0.35}>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-burgundy rounded-full" />
              <p className="text-base md:text-lg text-cream/65 leading-relaxed max-w-[50ch]">{a.heroDescription}</p>
            </div>
          </AnimatedEntry>

          <AnimatedEntry delay={0.65}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton href="#contacto" variant="primary">
                Contactar
              </MagneticButton>
              <MagneticButton href="/#equipo" variant="outline">
                El equipo
              </MagneticButton>
            </div>
          </AnimatedEntry>
        </div>

        <AnimatedEntry delay={0.3} direction="right" className="relative">
          <div className="relative md:h-[75vh] max-h-[700px] flex items-center justify-center">
            <div className="relative w-[80%] md:w-[85%] mx-auto aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
              <Image src={a.portrait} alt={a.name} width={768} height={1024} priority className="w-full h-full object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent" />
            </div>
          </div>
        </AnimatedEntry>
      </div>
    </section>
  );
}

function Tarjeta({ icon: Icon, title, detail }: { icon: React.ElementType; title: string; detail: string }) {
  return (
    <div className="group p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03] hover:border-burgundy/20 transition-colors duration-400">
      <div className="flex items-start gap-4">
        <div className="mt-0.5 p-2.5 rounded-lg bg-burgundy/[0.15] text-burgundy-light group-hover:bg-burgundy/25 transition-colors duration-300">
          <Icon size={20} weight="duotone" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-cream/90 tracking-tight">{title}</h3>
          <p className="mt-1.5 text-xs text-cream/50 leading-relaxed">{detail}</p>
        </div>
      </div>
    </div>
  );
}

export function AsistenteAbout({ a }: { a: Asistente }) {
  return (
    <section id="perfil" className="relative bg-surface-alt py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20">
          <div>
            <AnimatedEntry>
              <RunningHead title="Perfil" />
            </AnimatedEntry>
            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Formación en Derecho.
                <br />
                <span className="text-burgundy-light">Trabajo junto al equipo.</span>
              </h2>
            </AnimatedEntry>
            {a.bio.map((p, i) => (
              <AnimatedEntry key={i} delay={0.2 + i * 0.1}>
                <p className={`${i === 0 ? "mt-8" : "mt-5"} text-base text-cream/65 leading-[1.85] max-w-[58ch]`}>{p}</p>
              </AnimatedEntry>
            ))}
          </div>

          <div className="lg:pt-16">
            <AnimatedEntry delay={0.15}>
              <RunningHead title="Formación" />
            </AnimatedEntry>
            <StaggerContainer className="space-y-3" stagger={0.07}>
              {a.education.map((e) => (
                <StaggerItem key={e.degree + e.institution}>
                  <Tarjeta
                    icon={GraduationCap}
                    title={e.degree}
                    detail={`${e.institution} · ${e.period}${e.note ? ` · ${e.note}` : ""}`}
                  />
                </StaggerItem>
              ))}
              {a.awards?.map((w) => (
                <StaggerItem key={w.title}>
                  <Tarjeta icon={Trophy} title={w.title} detail={w.detail} />
                </StaggerItem>
              ))}
              {a.activities?.map((w) => (
                <StaggerItem key={w.title}>
                  <Tarjeta icon={BookOpen} title={w.title} detail={w.detail} />
                </StaggerItem>
              ))}
              <StaggerItem>
                <Tarjeta icon={Translate} title="Idiomas" detail={a.languages.join(" · ")} />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AsistenteExperience({ a }: { a: Asistente }) {
  return (
    <section id="trayectoria" className="relative bg-surface py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] gap-12 lg:gap-20">
          <div>
            <AnimatedEntry>
              <RunningHead title="Trayectoria" />
            </AnimatedEntry>
            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Experiencia
                <br />
                <span className="text-burgundy-light">y formación</span>
              </h2>
            </AnimatedEntry>
            <AnimatedEntry delay={0.2}>
              <p className="mt-5 text-sm text-cream/50 leading-relaxed max-w-[35ch]">
                {a.study}.
              </p>
            </AnimatedEntry>
          </div>

          <StaggerContainer className="relative" stagger={0.1}>
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-cream/[0.10]" />
            <div className="space-y-1">
              {a.career.map((exp, i) => (
                <StaggerItem key={i}>
                  <div className={`relative pl-10 pr-5 py-5 rounded-xl ${exp.highlight ? "bg-emphasis/[0.06] border border-emphasis/[0.15]" : ""}`}>
                    <div className={`absolute left-[7px] top-7 w-[9px] h-[9px] rounded-full border-2 ${exp.highlight ? "border-emphasis bg-emphasis" : "border-cream/25 bg-surface"}`} />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                      <h3 className="text-sm font-semibold text-cream/90 tracking-tight">{exp.role}</h3>
                      <span className="text-[10px] tracking-wider text-cream/35 uppercase shrink-0">{exp.period}</span>
                    </div>
                    <div className="text-xs text-emphasis font-medium mb-2">
                      {exp.org}
                      {exp.place && <span className="font-normal text-cream/40"> · {exp.place}</span>}
                    </div>
                    {exp.description && (
                      <ul className="space-y-1">
                        {exp.description.map((d) => (
                          <li key={d} className="text-xs text-cream/50 leading-relaxed max-w-[60ch]">
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                    {exp.highlight && (
                      <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emphasis/[0.1] text-emphasis text-[10px] tracking-wide font-medium">
                        Posición actual
                      </div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </div>

            {(a.skills || a.extras) && (
              <StaggerItem>
                <div className="relative pl-10 mt-8 pt-6 border-t border-cream/[0.08]">
                  {a.skills && (
                    <>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-3">Habilidades</div>
                      <div className="flex flex-wrap gap-2">
                        {a.skills.map((s) => (
                          <span key={s} className="px-2.5 py-1 rounded-md bg-cream/[0.05] text-cream/55 text-[11px] tracking-wide">
                            {s}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                  {a.extras && (
                    <>
                      <div className="mt-6 text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-3">Datos adicionales</div>
                      <ul className="space-y-1">
                        {a.extras.map((x) => (
                          <li key={x} className="text-xs text-cream/55 leading-relaxed">
                            {x}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </StaggerItem>
            )}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

export function AsistenteContact({ a }: { a: Asistente }) {
  const items = [
    { icon: Envelope, label: "Email", value: FIRM_CONTACT.email, href: `mailto:${FIRM_CONTACT.email}` },
    { icon: Phone, label: "Teléfono", value: FIRM_CONTACT.phone, href: `tel:+${FIRM_CONTACT.phoneRaw}` },
  ];
  return (
    <section id="contacto" className="relative bg-dark-bg py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-cream/[0.08]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-burgundy/[0.04] blur-[120px] pointer-events-none hidden dark:block" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-20">
          <div>
            <AnimatedEntry>
              <RunningHead title="Contacto" />
            </AnimatedEntry>
            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Contacto con
                <br />
                <span className="text-burgundy-light">la firma</span>
              </h2>
            </AnimatedEntry>
            <StaggerContainer className="mt-10 space-y-4" stagger={0.06}>
              {items.map((item) => (
                <StaggerItem key={item.label}>
                  <TrackedContactLink
                    href={item.href}
                    contactTarget="general"
                    className="group flex items-center gap-4 p-4 rounded-xl border border-cream/[0.08] hover:border-burgundy/20 transition-all duration-400"
                  >
                    <div className="p-2.5 rounded-lg bg-cream/[0.06] text-cream/60 group-hover:text-burgundy-light group-hover:bg-burgundy/[0.12] transition-all duration-300">
                      <item.icon size={20} weight="duotone" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-wider uppercase text-cream/40">{item.label}</div>
                      <div className="text-sm text-cream/75 group-hover:text-cream transition-colors duration-300">{item.value}</div>
                    </div>
                  </TrackedContactLink>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="flex items-center">
            <AnimatedEntry delay={0.3} direction="right" className="w-full">
              <div className="p-8 md:p-10 rounded-2xl bg-cream/[0.04] border border-cream/[0.10] backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <MapPin size={16} weight="duotone" className="text-emphasis" />
                  <span className="text-xs text-cream/50">{FIRM_CONTACT.location}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-cream tracking-tight mb-3">Consultas jurídicas</h3>
                <p className="text-xs text-cream/45 leading-relaxed mb-8">
                  Las consultas sobre un caso las atienden los abogados de la firma. Escríbanos por WhatsApp y le
                  responderemos a la brevedad.
                </p>
                <MagneticButton
                  href={`https://wa.me/${FIRM_CONTACT.phoneRaw}?text=Hola%2C%20me%20gustar%C3%ADa%20coordinar%20una%20consulta%20jur%C3%ADdica.`}
                  variant="primary"
                  className="w-full justify-center"
                  contactTarget="general"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  Escribir a la firma
                </MagneticButton>
                <div className="mt-8 pt-6 border-t border-cream/[0.08] flex items-center gap-3">
                  <Image
                    src="/images/logo-gc.png"
                    alt="Corporación GC"
                    width={40}
                    height={40}
                    className="h-8 w-auto opacity-60 dark:opacity-90 dark:brightness-0 dark:invert"
                  />
                  <div>
                    <div className="text-[10px] text-cream/40 tracking-wide">{a.role} de</div>
                    <div className="text-xs text-cream/60 font-medium">Corporación GC</div>
                  </div>
                </div>
              </div>
            </AnimatedEntry>
          </div>
        </div>
      </div>
    </section>
  );
}
