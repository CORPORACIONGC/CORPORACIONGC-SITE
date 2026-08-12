import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FirmContact } from "@/components/sections/FirmContact";
import { FIRM } from "@/lib/constants";
import { contactoMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = {
  ...contactoMetadata,
  alternates: {
    canonical: `${FIRM.url}/contacto`,
  },
};

const jsonLdContactPage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${FIRM.url}/contacto#contactpage`,
  url: `${FIRM.url}/contacto`,
  name: "Contacto · Corporación GC",
  description:
    "Canales de contacto de Corporación GC, bufete especialista en Derecho Público y litigio contencioso-administrativo en Costa Rica.",
  inLanguage: "es-CR",
  isPartOf: { "@id": `${FIRM.url}/#website` },
  about: { "@id": `${FIRM.url}/#organization` },
  mainEntity: { "@id": `${FIRM.url}/#organization` },
  breadcrumb: { "@id": `${FIRM.url}/contacto#breadcrumb` },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${FIRM.url}/contacto#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: FIRM.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contacto",
      item: `${FIRM.url}/contacto`,
    },
  ],
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLdContactPage, jsonLdBreadcrumb]),
        }}
      />
      <Navbar />
      <main className="bg-dark-bg min-h-[100dvh]">
        <header className="relative pt-28 md:pt-36 pb-2 md:pb-6">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
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
                Contacto
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream max-w-[20ch]">
              Hablemos de <span className="text-burgundy-light">su caso</span>
            </h1>

            <p className="mt-5 text-sm md:text-base text-cream/70 leading-relaxed max-w-[62ch]">
              Somos un bufete dedicado exclusivamente al Derecho Público y al
              litigio contencioso-administrativo en Costa Rica, dirigido por el
              Dr. Óscar González Camacho, ex-Magistrado de la Sala Primera y
              co-redactor del Código Procesal Contencioso Administrativo.
              Cuéntenos su situación y le indicaremos si la vía es la adecuada
              y qué opciones tiene.
            </p>
          </div>
        </header>

        <FirmContact showHeading={false} />
      </main>
      <Footer />
    </>
  );
}
