import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Credentials } from "@/components/sections/Credentials";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Publications } from "@/components/sections/Publications";
import { Contact } from "@/components/sections/Contact";
import { OscarHero } from "@/components/sections/OscarHero";
import { OscarAbout } from "@/components/sections/OscarAbout";
import { OscarExperience } from "@/components/sections/OscarExperience";
import { OscarConferencias } from "@/components/sections/OscarConferencias";
import { OscarEventoDestacado } from "@/components/sections/OscarEventoDestacado";
import { KhevinEventoDestacado } from "@/components/sections/KhevinEventoDestacado";
import { OscarContact } from "@/components/sections/OscarContact";
import { EstebanHero } from "@/components/sections/EstebanHero";
import { EstebanAbout } from "@/components/sections/EstebanAbout";
import { EstebanExperience } from "@/components/sections/EstebanExperience";
import { EstebanContact } from "@/components/sections/EstebanContact";
import { JoseCarlosHero } from "@/components/sections/JoseCarlosHero";
import { JoseCarlosAbout } from "@/components/sections/JoseCarlosAbout";
import { JoseCarlosExperience } from "@/components/sections/JoseCarlosExperience";
import { JoseCarlosContact } from "@/components/sections/JoseCarlosContact";
import { KatherineHero } from "@/components/sections/KatherineHero";
import { KatherineAbout } from "@/components/sections/KatherineAbout";
import { KatherineExperience } from "@/components/sections/KatherineExperience";
import { KatherineContact } from "@/components/sections/KatherineContact";
import { MarianaHero } from "@/components/sections/MarianaHero";
import { MarianaAbout } from "@/components/sections/MarianaAbout";
import { MarianaExperience } from "@/components/sections/MarianaExperience";
import { MarianaContact } from "@/components/sections/MarianaContact";
import { getArticlesByAuthor } from "@/lib/articles";
import {
  TEAM,
  FIRM,
  OSCAR_NAV_LINKS,
  ESTEBAN_PROFILE,
  ESTEBAN_NAV_LINKS,
  JOSE_CARLOS_PROFILE,
  JOSE_CARLOS_NAV_LINKS,
  KATHERINE_PROFILE,
  KATHERINE_NAV_LINKS,
  MARIANA_PROFILE,
  MARIANA_NAV_LINKS,
} from "@/lib/constants";

// Generate static params for all team members
export function generateStaticParams() {
  return TEAM.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);
  if (!member) return {};

  return {
    title: `${member.name} | ${member.role} · Abogado Derecho Público Costa Rica`,
    description: `${member.shortBio} Corporación GC — Abogados en Derecho Administrativo y Contencioso Administrativo, Costa Rica.`,
    alternates: {
      canonical: `${FIRM.url}/abogados/${member.slug}`,
    },
    openGraph: {
      title: `${member.name} | ${member.role} · Corporación GC`,
      description: `${member.shortBio} Corporación GC.`,
      url: `${FIRM.url}/abogados/${member.slug}`,
      siteName: FIRM.name,
      locale: FIRM.locale,
      type: "profile",
    },
  };
}

export default async function AttorneyProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);
  if (!member) return notFound();

  /* JSON-LD Person schema for all attorney pages */
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${FIRM.url}/abogados/${member.slug}#person`,
    name: member.name,
    jobTitle: member.role,
    url: `${FIRM.url}/abogados/${member.slug}`,
    image: `${FIRM.url}${member.photo}`,
    description: member.shortBio,
    worksFor: {
      "@id": `${FIRM.url}/#organization`,
    },
    knowsAbout: [...member.areas],
    knowsLanguage: member.languages?.map((l: string) => l) ?? ["Español"],
    memberOf: {
      "@type": "Organization",
      name: "Colegio de Abogados y Abogadas de Costa Rica",
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: FIRM.url },
      { "@type": "ListItem", position: 2, name: "Equipo", item: `${FIRM.url}/#equipo` },
      { "@type": "ListItem", position: 3, name: member.name, item: `${FIRM.url}/abogados/${member.slug}` },
    ],
  };

  const schemaScripts = (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
    </>
  );

  if (member.slug === "khevin-sanchez") {
    const jsonLdEvent = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Global Summit Legal Hackers 2025",
      startDate: "2025-10-22",
      endDate: "2025-10-23",
      eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Universidad Javeriana",
        address: { "@type": "PostalAddress", addressLocality: "Bogotá", addressCountry: "CO" },
      },
      organizer: [
        { "@type": "Organization", name: "Legal Hackers Bogotá" },
        { "@type": "Organization", name: "Universidad Javeriana" },
      ],
      performer: {
        "@type": "Person",
        name: "Lic. Khevin Sánchez Zamora",
        "@id": `${FIRM.url}/abogados/khevin-sanchez#person`,
      },
      description: "Primera edición suramericana del Global Summit Legal Hackers. Panel: Inteligencia Artificial — la Urgencia de un Marco Ético. Encuentro internacional con líderes en legaltech, legal design, IA aplicada al Derecho y gobernanza de datos de más de 130 ciudades.",
    };
    return (
      <>
        {schemaScripts}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }} />
        <KhevinProfile />
      </>
    );
  }
  if (member.slug === "oscar-gonzalez") {
    const jsonLdEvent = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "CPCA 20 Años: Balance, transformaciones y desafíos de la justicia administrativa",
      startDate: "2026-03-25",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Colegio de Abogados y Abogadas de Costa Rica",
        address: { "@type": "PostalAddress", addressCountry: "CR" },
      },
      organizer: [
        { "@type": "Organization", name: "Colegio de Abogados y Abogadas de Costa Rica" },
        { "@type": "Organization", name: "Tirant Editorial" },
        { "@type": "Organization", name: "Universidad Escuela Libre de Derecho" },
      ],
      performer: {
        "@type": "Person",
        name: "Dr. Óscar Eduardo González Camacho",
        "@id": `${FIRM.url}/abogados/oscar-gonzalez#person`,
      },
      description: "Evento conmemorativo de los 20 años del Código Procesal Contencioso Administrativo de Costa Rica. Mesa II: El futuro del proceso contencioso administrativo — Innovación y desafíos regionales. Capítulo presentado: «El por qué y para qué del contencioso administrativo» (Editorial Tirant lo Blanch, 2026).",
      workPerformed: {
        "@type": "ScholarlyArticle",
        name: "El por qué y para qué del contencioso administrativo",
        url: `${FIRM.url}/articulos/por-que-y-para-que-contencioso-administrativo`,
        isPartOf: {
          "@type": "Book",
          name: "CPCA, 20 años después: Perspectivas críticas sobre la justicia administrativa",
          isbn: "9791370214753",
          publisher: { "@type": "Organization", name: "Editorial Tirant lo Blanch" },
          url: "https://editorial.tirant.com/cr/libro/cpca-20-anos-despues-perspectivas-criticas-sobre-la-justicia-administrativa-alex-rojas-ortega-9791370214753",
        },
      },
    };
    return (
      <>
        {schemaScripts}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }} />
        <OscarProfile />
      </>
    );
  }
  if (member.slug === "esteban-perez") return <>{schemaScripts}<EstebanProfile /></>;
  if (member.slug === "jose-carlos-solano") return <>{schemaScripts}<JoseCarlosProfile /></>;
  if (member.slug === "katherine-gonzalez") return <>{schemaScripts}<KatherineProfile /></>;
  if (member.slug === "mariana-montero") return <>{schemaScripts}<MarianaProfile /></>;

  // Other attorneys get a basic profile
  return <>{schemaScripts}<BasicProfile member={member} /></>;
}

// ─── Khevin's Full Profile ───

function KhevinProfile() {
  const articles = getArticlesByAuthor("Sánchez").map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    date: a.date,
    type: a.type,
    tags: [...a.tags],
  }));

  const profileNavLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Perfil", href: "#perfil" },
    { label: "Trayectoria", href: "#trayectoria" },
    { label: "Artículos", href: "/articulos" },
    { label: "Contacto", href: "#contacto" },
  ] as const;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-burgundy-dark">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center h-8">
          <Link
            href="/"
            className="text-[10px] tracking-[0.15em] uppercase text-white/60 hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>&larr;</span>
            <span>Volver a Corporación GC</span>
          </Link>
        </div>
      </div>
      <div className="pt-8">
        <Navbar navLinks={profileNavLinks} topOffset />
        <main>
          <Hero />
          <About />
          <Experience />
          <Publications articles={articles} />
          <KhevinEventoDestacado />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

// ─── Oscar's Full Profile ───

function OscarProfile() {
  const articles = getArticlesByAuthor("González Camacho").map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    date: a.date,
    type: a.type,
    tags: [...a.tags],
  }));

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-burgundy-dark via-[#3A0B1F] to-burgundy-dark">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center h-8">
          <Link
            href="/"
            className="text-[10px] tracking-[0.15em] uppercase text-white/60 hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>&larr;</span>
            <span>Volver a Corporación GC</span>
          </Link>
        </div>
      </div>
      <div className="pt-8">
        <Navbar navLinks={OSCAR_NAV_LINKS} topOffset />
        <main>
          <OscarHero />
          <OscarAbout />
          <OscarExperience />
          <Publications articles={articles} />
          <OscarEventoDestacado />
          <OscarConferencias />
          <OscarContact />
        </main>
        <Footer />
      </div>
    </>
  );
}

// ─── Esteban's Full Profile ───

function EstebanProfile() {
  const articles = getArticlesByAuthor("Pérez").map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    date: a.date,
    type: a.type,
    tags: [...a.tags],
  }));

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-burgundy-dark">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center h-8">
          <Link
            href="/"
            className="text-[10px] tracking-[0.15em] uppercase text-white/60 hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>&larr;</span>
            <span>Volver a Corporación GC</span>
          </Link>
        </div>
      </div>
      <div className="pt-8">
        <Navbar navLinks={ESTEBAN_NAV_LINKS} topOffset />
        <main>
          <EstebanHero />
          <Credentials credentials={ESTEBAN_PROFILE.credentials} />
          <EstebanAbout />
          <EstebanExperience />
          <Publications articles={articles} />
          <EstebanContact />
        </main>
        <Footer />
      </div>
    </>
  );
}

// ─── José Carlos's Full Profile ───

function JoseCarlosProfile() {
  const articles = getArticlesByAuthor("Solano").map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    date: a.date,
    type: a.type,
    tags: [...a.tags],
  }));

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-burgundy-dark">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center h-8">
          <Link
            href="/"
            className="text-[10px] tracking-[0.15em] uppercase text-white/60 hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>&larr;</span>
            <span>Volver a Corporación GC</span>
          </Link>
        </div>
      </div>
      <div className="pt-8">
        <Navbar navLinks={JOSE_CARLOS_NAV_LINKS} topOffset />
        <main>
          <JoseCarlosHero />
          <Credentials credentials={JOSE_CARLOS_PROFILE.credentials} />
          <JoseCarlosAbout />
          <JoseCarlosExperience />
          <Publications articles={articles} />
          <JoseCarlosContact />
        </main>
        <Footer />
      </div>
    </>
  );
}

// ─── Katherine's Full Profile ───

function KatherineProfile() {
  const articles = getArticlesByAuthor("González Coto").map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    date: a.date,
    type: a.type,
    tags: [...a.tags],
  }));

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-burgundy-dark">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center h-8">
          <Link
            href="/"
            className="text-[10px] tracking-[0.15em] uppercase text-white/60 hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>&larr;</span>
            <span>Volver a Corporación GC</span>
          </Link>
        </div>
      </div>
      <div className="pt-8">
        <Navbar navLinks={KATHERINE_NAV_LINKS} topOffset />
        <main>
          <KatherineHero />
          <Credentials credentials={KATHERINE_PROFILE.credentials} />
          <KatherineAbout />
          <KatherineExperience />
          <Publications articles={articles} />
          <KatherineContact />
        </main>
        <Footer />
      </div>
    </>
  );
}

// ─── Mariana's Full Profile ───

function MarianaProfile() {
  const articles = getArticlesByAuthor("Montero").map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    date: a.date,
    type: a.type,
    tags: [...a.tags],
  }));

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-burgundy-dark">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center h-8">
          <Link
            href="/"
            className="text-[10px] tracking-[0.15em] uppercase text-white/60 hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>&larr;</span>
            <span>Volver a Corporación GC</span>
          </Link>
        </div>
      </div>
      <div className="pt-8">
        <Navbar navLinks={MARIANA_NAV_LINKS} topOffset />
        <main>
          <MarianaHero />
          <Credentials credentials={MARIANA_PROFILE.credentials} />
          <MarianaAbout />
          <MarianaExperience />
          <Publications articles={articles} />
          <MarianaContact />
        </main>
        <Footer />
      </div>
    </>
  );
}

// ─── Basic Profile for other attorneys ───

function BasicProfile({
  member,
}: {
  member: { slug: string; name: string; role: string; photo: string | null; shortBio: string; areas: readonly string[]; languages: readonly string[]; featured: boolean };
}) {
  function getInitials(name: string) {
    return name
      .replace(/^(Dr\.|Lic\.|Licda\.)\s+/i, "")
      .split(" ")
      .filter((w) => w.length > 1)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }

  // Extract first surname for author search
  const nameWords = member.name.replace(/^(Dr\.|Lic\.|Licda\.)\s+/i, "").split(" ").filter((w) => w.length > 0);
  const authorKey = nameWords.length >= 3 ? nameWords[nameWords.length - 2] : nameWords[nameWords.length - 1];
  const articles = getArticlesByAuthor(authorKey).map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    date: a.date,
    type: a.type,
    tags: [...a.tags],
  }));

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-burgundy-dark">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center h-8">
          <Link
            href="/"
            className="text-[10px] tracking-[0.15em] uppercase text-white/60 hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>&larr;</span>
            <span>Volver a Corporación GC</span>
          </Link>
        </div>
      </div>
      <div className="pt-8">
        <Navbar navLinks={[{ label: "Inicio", href: "/" }]} topOffset />
        <main>
          <section className="relative min-h-[70dvh] bg-surface overflow-hidden flex items-center">
            <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-burgundy/[0.08] to-transparent pointer-events-none hidden dark:block" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-32 w-full">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_0.6fr] gap-12 items-center">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-px w-8 bg-gold" />
                    <span className="text-[11px] tracking-[0.25em] uppercase text-cream/50 font-medium">
                      {member.role} · Corporación GC
                    </span>
                  </div>

                  <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-none text-cream mb-6">
                    {member.name}
                  </h1>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-burgundy rounded-full" />
                    <p className="text-base md:text-lg text-cream/65 leading-relaxed max-w-[50ch]">
                      {member.shortBio}
                    </p>
                  </div>

                  {/* Areas */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.areas.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 rounded-lg text-xs tracking-wide bg-cream/[0.08] text-cream/60 border border-cream/[0.08]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Languages */}
                  <div className="text-xs text-cream/40">
                    Idiomas: {member.languages.join(", ")}
                  </div>
                </div>

                {/* Photo or placeholder */}
                <div className="flex justify-center">
                  {member.photo ? (
                    <div className="w-64 h-80 rounded-[1.5rem] overflow-hidden border border-cream/[0.08] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={512}
                        height={640}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-64 h-80 rounded-[1.5rem] bg-burgundy/10 border border-cream/[0.08] flex items-center justify-center">
                      <span className="font-display text-6xl font-semibold text-gold/40">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          {articles.length > 0 && <Publications articles={articles} />}
        </main>
        <Footer />
      </div>
    </>
  );
}
