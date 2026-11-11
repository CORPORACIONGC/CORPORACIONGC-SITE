import {
  Envelope,
  Phone,
  MapPin,
  Clock,
} from "@phosphor-icons/react/dist/ssr";
import {
  AnimatedEntry,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedEntry";
import { LeadForm } from "@/components/sections/LeadForm";
import { GoogleMap } from "@/components/sections/GoogleMap";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";
import { FIRM_CONTACT } from "@/lib/constants";
import { RunningHead } from "@/components/ui/RunningHead";

const contactItems = [
  {
    icon: Envelope,
    label: "Email",
    value: FIRM_CONTACT.email,
    href: `mailto:${FIRM_CONTACT.email}`,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: FIRM_CONTACT.phone,
    href: `tel:+${FIRM_CONTACT.phoneRaw}`,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: FIRM_CONTACT.location,
    href: null,
  },
  {
    icon: Clock,
    label: "Horario",
    value: FIRM_CONTACT.hours,
    href: null,
  },
];

export function FirmContact({ showHeading = true }: { showHeading?: boolean } = {}) {
  return (
    <section
      id="contacto"
      className="relative bg-dark-bg py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-cream/[0.08]" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-burgundy/[0.04] blur-[120px] pointer-events-none hidden dark:block" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        {/* ─── Top: Info + Lead Form ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20">
          {/* Left — Info */}
          <div>
            {showHeading && (
              <>
                <AnimatedEntry>
                  <RunningHead title="Contacto" />
                  <h2 className="type-headline text-cream">
                    Hablemos sobre
                    <br />
                    <span className="text-emphasis">su caso</span>
                  </h2>
                </AnimatedEntry>

                <AnimatedEntry delay={0.2}>
                  <p className="mt-6 type-body text-cream/70 max-w-[50ch]">
                    Ofrecemos asesoría y representación jurídica de primer nivel
                    en todas las ramas del Derecho Público. Cuéntenos su
                    situación y buscaremos juntos la mejor estrategia legal.
                  </p>
                </AnimatedEntry>
              </>
            )}

            {/* Los datos de contacto van como filas con filete, igual que las
                listas del resto del sitio: sin cajas ni fondos. */}
            <StaggerContainer className={`${showHeading ? "mt-10 " : ""}border-t border-cream/[0.12]`} stagger={0.06}>
              {contactItems.map((item, i) => {
                const cardClassName = "group flex items-start gap-4 border-b border-cream/[0.08] py-4";
                const inner = (
                  <>
                    <item.icon size={20} weight="regular" className="mt-0.5 shrink-0 text-cream/55 transition-colors duration-300 group-hover:text-burgundy-light dark:group-hover:text-hilo-texto" />
                    <div className="min-w-0">
                      <div className="text-[13px] text-cream/65">
                        {item.label}
                      </div>
                      <div className={`mt-0.5 text-[15px] md:text-base leading-snug text-cream/[0.88] transition-colors duration-300 ${item.href ? "group-hover:text-burgundy dark:group-hover:text-hilo-texto" : ""}`}>
                        {item.value}
                      </div>
                    </div>
                  </>
                );
                return (
                  <StaggerItem key={i}>
                    {item.href ? (
                      <TrackedContactLink
                        href={item.href}
                        contactTarget="firm"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={cardClassName}
                      >
                        {inner}
                      </TrackedContactLink>
                    ) : (
                      <div className={cardClassName}>{inner}</div>
                    )}
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Right — Lead Form Card */}
          <div className="flex items-start lg:items-center">
            <AnimatedEntry delay={0.3} direction="right" className="w-full">
              <div className="p-7 md:p-10 rounded-xl bg-surface border border-cream/[0.12]">
                <h3 className="text-xl font-semibold text-cream tracking-[-0.01em] mb-2">
                  Solicite una consulta
                </h3>
                <p className="text-[15px] text-cream/[0.72] leading-relaxed mb-8">
                  Complete el formulario y le contactaremos a la brevedad para
                  coordinar una reunión.
                </p>

                <LeadForm />
              </div>
            </AnimatedEntry>
          </div>
        </div>

        {/* ─── Google Maps ─── */}
        <AnimatedEntry delay={0.2} className="mt-16">
          <GoogleMap />
        </AnimatedEntry>
      </div>
    </section>
  );
}
