import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Credentials } from "@/components/sections/Credentials";
import { AsistenteHero, AsistenteAbout, AsistenteExperience, AsistenteContact } from "@/components/sections/AsistentePerfil";
import { FIRM } from "@/lib/constants";
import { ASISTENTES } from "@/lib/asistentes";

/* Perfil de un asistente legal, con el mismo formato que el de los
   abogados (portada, credenciales, perfil, trayectoria y contacto). */

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return ASISTENTES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = ASISTENTES.find((x) => x.slug === slug);
  if (!a) return {};
  const title = `${a.short} · ${a.role}`;
  const description = `${a.name}, ${a.role.toLowerCase()} de Corporación GC desde ${a.since.toLowerCase()}. ${a.study}.`;
  const url = `${FIRM.url}/equipo/${a.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "profile", images: [{ url: a.portrait }] },
  };
}

export default async function AsistentePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = ASISTENTES.find((x) => x.slug === slug);
  if (!a) return notFound();

  const url = `${FIRM.url}/equipo/${a.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${url}#page`,
      url,
      dateModified: a.actualizado,
      mainEntity: {
        "@type": "Person",
        "@id": `${url}#person`,
        name: a.name,
        jobTitle: a.role,
        image: `${FIRM.url}${a.portrait}`,
        worksFor: { "@type": "LegalService", "@id": `${FIRM.url}/#organization`, name: "Corporación GC" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad de Costa Rica" },
        knowsLanguage: a.languages.map((l) => l.replace(/\s*\(.*\)$/, "")),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: FIRM.url },
        { "@type": "ListItem", position: 2, name: "Equipo", item: `${FIRM.url}/abogados` },
        { "@type": "ListItem", position: 3, name: a.short, item: url },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="fixed top-0 left-0 right-0 z-50 bg-burgundy-dark">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center h-8">
          <Link
            href="/"
            className="text-[10px] tracking-[0.15em] uppercase text-white/60 hover:text-hilo-texto transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>&larr;</span>
            <span>Volver a Corporación GC</span>
          </Link>
        </div>
      </div>
      <div className="pt-8">
        <Navbar navLinks={NAV} topOffset />
        <main>
          <AsistenteHero a={a} />
          <Credentials credentials={a.credentials} />
          <AsistenteAbout a={a} />
          <AsistenteExperience a={a} />
          <AsistenteContact a={a} />
        </main>
        <Footer />
      </div>
    </>
  );
}
