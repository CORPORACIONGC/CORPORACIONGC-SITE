import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PRACTICE_AREA_PAGES, FIRM_NAV_LINKS } from "@/lib/constants";
import {
  ArrowLeft,
  ArrowRight,
  Gavel,
  ShieldCheck,
  Scales,
  FileText,
  Stamp,
  BookOpen,
  Briefcase,
  Bank,
  Handshake,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Áreas de Práctica | Corporación GC",
  description:
    "Áreas de práctica de Corporación GC: litigio contencioso administrativo, medidas cautelares, casación ante Sala Primera, Derecho Constitucional, Contratación Pública y Derecho Administrativo.",
  alternates: {
    canonical: "https://corporaciongc.com/areas",
  },
  openGraph: {
    title: "Áreas de Práctica | Corporación GC",
    description:
      "Áreas de práctica de Corporación GC: litigio contencioso administrativo, medidas cautelares, casación ante Sala Primera, Derecho Constitucional, Contratación Pública y Derecho Administrativo.",
    url: "https://corporaciongc.com/areas",
    siteName: "Corporación GC",
    locale: "es_CR",
    type: "website",
  },
};

const iconMap = {
  Gavel: Gavel,
  ShieldCheck: ShieldCheck,
  Scales: Scales,
  FileText: FileText,
  Stamp: Stamp,
  BookOpen: BookOpen,
  Briefcase: Briefcase,
  Bank: Bank,
  Handshake: Handshake,
} as const;

export default function AreasPage() {
  const primary = PRACTICE_AREA_PAGES.filter((a) => a.priority === "primary");
  const secondary = PRACTICE_AREA_PAGES.filter((a) => a.priority === "secondary");

  return (
    <>
      <Navbar />
      <main className="bg-surface min-h-[100dvh]">
        <div className="pt-28 md:pt-36 pb-20 md:pb-32">
          <div className="max-w-[1000px] mx-auto px-6 md:px-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={14} weight="regular" />
              Volver al inicio
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-cream/35 font-medium">
                Áreas de Práctica
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
              Lo que{" "}
              <span className="text-burgundy">hacemos</span>
            </h1>

            <div className="mt-8 text-sm text-cream/55 leading-relaxed max-w-[65ch] space-y-4">
              <p>
                Corporación GC es un bufete costarricense dedicado exclusivamente al
                Derecho Público. Cada área de práctica refleja una competencia
                específica de nuestro equipo: desde la interposición de demandas ante
                el Tribunal Contencioso Administrativo hasta la defensa en
                procedimientos administrativos y la impugnación de sentencias ante la
                Sala Primera de la Corte Suprema de Justicia.
              </p>
            </div>

            {/* Primary Areas */}
            <div className="mt-16">
              <div className="text-[10px] tracking-[0.25em] uppercase text-cream/35 font-medium mb-6">
                Áreas Principales
              </div>
              <div className="grid grid-cols-1 gap-4">
                {primary.map((area) => {
                  const Icon = iconMap[area.icon as keyof typeof iconMap] || Scales;
                  return (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className="group block p-6 md:p-8 rounded-xl border border-cream/[0.06] bg-cream/[0.02] hover:border-burgundy/20 transition-all duration-400"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Icon
                              size={20}
                              weight="duotone"
                              className="text-burgundy shrink-0"
                            />
                            <h2 className="font-display text-lg md:text-xl text-cream group-hover:text-gold transition-colors duration-300">
                              {area.title}
                            </h2>
                          </div>
                          <p className="text-sm text-cream/50 leading-relaxed max-w-[55ch]">
                            {area.subtitle}
                          </p>
                        </div>
                        <ArrowRight
                          size={18}
                          weight="bold"
                          className="text-cream/20 group-hover:text-gold transition-colors duration-300 shrink-0 mt-1"
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Secondary Areas */}
            <div className="mt-12">
              <div className="text-[10px] tracking-[0.25em] uppercase text-cream/35 font-medium mb-6">
                Áreas Complementarias
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {secondary.map((area) => {
                  const Icon = iconMap[area.icon as keyof typeof iconMap] || Scales;
                  return (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className="group block p-6 rounded-xl border border-cream/[0.06] bg-cream/[0.02] hover:border-burgundy/20 transition-all duration-400"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Icon
                          size={18}
                          weight="duotone"
                          className="text-burgundy shrink-0"
                        />
                        <h2 className="font-display text-base text-cream group-hover:text-gold transition-colors duration-300">
                          {area.title}
                        </h2>
                      </div>
                      <p className="text-xs text-cream/45 leading-relaxed">
                        {area.subtitle}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 rounded-xl border border-burgundy/15 bg-burgundy/[0.04] text-center">
              <p className="font-display text-lg text-cream mb-2">
                ¿Necesita asesoría en Derecho Público?
              </p>
              <p className="text-sm text-cream/50 mb-6 max-w-[45ch] mx-auto">
                Coordine una consulta con nuestro equipo para evaluar su caso.
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-b from-burgundy via-[#5A1730] to-[#4A0E27] text-white text-sm tracking-wide font-medium hover:from-burgundy-light hover:via-burgundy hover:to-[#5A1730] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-burgundy/20"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
