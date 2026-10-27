import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RunningHead } from "@/components/ui/RunningHead";
import { FIRM, TEAM } from "@/lib/constants";
import { abogadosMetadata, ABOGADOS_DESCRIPCION as DESCRIPCION } from "@/lib/page-metadata";

/* El índice del equipo. Antes no existía: la miga «Equipo» de los perfiles
   apuntaba a /#equipo, que Google lee como la portada, y las búsquedas por
   nombre («mariana montero», «abogado esteban») no tenían una página del
   equipo a la que llegar. */

export const metadata: Metadata = abogadosMetadata;

/* Retrato de cada abogado: los del equipo están en /images/equipo; el del
   Director, en su foto de oficina. */
const retrato = (slug: string) =>
  slug === "oscar-gonzalez" ? "/images/equipo/oscar-gonzalez-oficina.jpg" : `/images/equipo/${slug}.jpg`;

export default function AbogadosPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${FIRM.url}/abogados#page`,
      name: "Abogados de Corporación GC",
      description: DESCRIPCION,
      url: `${FIRM.url}/abogados`,
      isPartOf: { "@id": `${FIRM.url}/#website` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: TEAM.map((m, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@id": `${FIRM.url}/abogados/${m.slug}#person`, name: m.name, url: `${FIRM.url}/abogados/${m.slug}` },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: FIRM.url },
        { "@type": "ListItem", position: 2, name: "Equipo", item: `${FIRM.url}/abogados` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-surface min-h-[100dvh]">
        <div className="pt-28 md:pt-36 pb-20 md:pb-32">
          <div className="max-w-[1000px] mx-auto px-6 md:px-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-emphasis transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={14} weight="regular" />
              Volver al inicio
            </Link>

            <RunningHead title="Equipo" />

            <h1 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
              Abogados de{" "}
              <span className="text-burgundy">Corporación GC</span>
            </h1>
            <p className="mt-6 text-sm text-cream/55 leading-relaxed max-w-[65ch]">
              El Dr. Óscar Eduardo González Camacho dirige la firma y trabaja cada caso con un equipo
              formado en Derecho Público bajo su supervisión directa.
            </p>

            <ul role="list" className="mt-12 divide-y divide-cream/10 border-y border-cream/10">
              {TEAM.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/abogados/${m.slug}`}
                    className="group grid grid-cols-[72px_minmax(0,1fr)] gap-5 py-7 sm:grid-cols-[96px_minmax(0,1fr)_auto] sm:items-center sm:gap-7"
                  >
                    <span className="relative block aspect-[4/5] overflow-hidden bg-cream/[0.04]">
                      <Image
                        src={retrato(m.slug)}
                        alt={`Retrato de ${m.name}`}
                        fill
                        sizes="96px"
                        loading="lazy"
                        className="object-cover saturate-[0.9]"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-lg md:text-xl tracking-tight text-cream transition-colors duration-300 group-hover:text-emphasis">
                        {m.name}
                      </span>
                      <span className="mt-1 block text-xs uppercase tracking-wider text-cream/45">{m.role}</span>
                      <span className="mt-3 block max-w-[65ch] text-sm leading-relaxed text-cream/60">{m.shortBio}</span>
                    </span>
                    <ArrowRight
                      size={16}
                      weight="bold"
                      aria-hidden="true"
                      className="hidden text-cream/35 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-emphasis sm:block"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
