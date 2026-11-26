import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FirmContact } from "@/components/sections/FirmContact";
import { FIRM, FIRM_CONTACT } from "@/lib/constants";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";
import { ORGANIZATION_SCHEMA } from "@/lib/organization-schema";
import { contactoMetadata } from "@/lib/page-metadata";
import { RunningHead } from "@/components/ui/RunningHead";

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
          /* La organización va completa aquí: Google no resuelve el @id
             entre páginas, y esta es la que más debe confirmar dirección,
             teléfono y horario. */
          __html: JSON.stringify([jsonLdContactPage, jsonLdBreadcrumb, ORGANIZATION_SCHEMA]),
        }}
      />
      <Navbar />
      <main id="contenido" className="bg-dark-bg min-h-[100dvh]">
        <FirmContact
          showHeading={false}
          encabezado={
            <>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs text-cream/65 hover:text-emphasis transition-colors duration-300 mb-6"
              >
                <ArrowLeft size={14} weight="regular" />
                Volver al inicio
              </Link>

              <RunningHead title="Contacto" />

              <h1 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream max-w-[20ch]">
                Hablemos de <span className="text-burgundy-light">su caso</span>
              </h1>

              <p className="mt-5 text-sm md:text-base text-cream/70 leading-relaxed max-w-[62ch]">
                Somos un bufete dedicado al Derecho Público y al litigio
                contencioso-administrativo en Costa Rica, dirigido por el
                Dr. Óscar González Camacho, ex-Magistrado de la Sala Primera y
                coordinador de la comisión redactora del Código Procesal Contencioso Administrativo.
                Cuéntenos su situación y le indicaremos si la vía es la adecuada
                y qué opciones tiene.
              </p>
              {/* WhatsApp es el canal que más se usa: va primero (D-04). */}
              <TrackedContactLink
                href={`https://wa.me/${FIRM_CONTACT.phoneRaw}?text=${encodeURIComponent(FIRM_CONTACT.whatsappMessage)}`}
                contactTarget="contacto-encabezado"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-burgundy px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-burgundy-light active:scale-[0.98]"
              >
                <WhatsappLogo size={20} weight="fill" aria-hidden="true" />
                Escribir por WhatsApp
              </TrackedContactLink>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
