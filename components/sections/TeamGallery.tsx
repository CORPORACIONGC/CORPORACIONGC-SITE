import Image from "next/image";
import Link from "next/link";

export type TeamGalleryMember = {
  slug: string;
  name: string;
  role: string;
  /* Retrato 4:5 recortado a partir del rostro (public/images/equipo): mismo
     tamaño de cabeza y misma línea de ojos para los cinco. */
  portrait: string;
};

const HONORIFIC = /^(Dra?\.|Lic(?:da)?\.|MSc\.)\s+/;

function splitName(name: string) {
  const match = name.match(HONORIFIC);
  return match
    ? { honorific: match[1], rest: name.slice(match[0].length) }
    : { honorific: null, rest: name };
}

/* Retratos del equipo. En escritorio los cinco caben en una sola fila: se
   ven todos a la vez, sin flechas ni desplazamiento. Por debajo de 1024 px la
   fila se desliza con el dedo y la tarjeta siguiente asoma en el borde.
   El nombre vive debajo de la foto, nunca sobre ella. */
export function TeamGallery({ members }: { members: TeamGalleryMember[] }) {
  return (
    <ul
      role="list"
      aria-label="Abogados de Corporación GC"
      className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 gc-scrollbar-none md:-mx-10 md:scroll-px-10 md:gap-5 md:px-10 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0"
    >
      {members.map((member, index) => {
        const { honorific, rest } = splitName(member.name);
        return (
          <li
            key={member.slug}
            className="w-[68vw] max-w-[300px] shrink-0 snap-start sm:w-[42vw] md:w-[30vw] lg:w-auto lg:max-w-none"
          >
            <Link
              href={`/abogados/${member.slug}`}
              className="group block outline-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-cream/[0.04] outline-offset-4 outline-gold group-focus-visible:outline-2">
                <Image
                  src={member.portrait}
                  alt={`Retrato de ${member.name}`}
                  fill
                  loading={index < 2 ? "eager" : "lazy"}
                  sizes="(min-width: 1400px) 250px, (min-width: 1024px) 18vw, (min-width: 768px) 30vw, (min-width: 640px) 42vw, 68vw"
                  className="object-cover saturate-[0.9] transition-[filter] duration-500 ease-out group-hover:saturate-100 group-focus-visible:saturate-100"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.06] dark:ring-white/[0.06]"
                />
              </div>

              <div className="mt-5 border-t border-cream/10 pt-4 transition-colors duration-300 group-hover:border-burgundy/60 dark:group-hover:border-gold/60">
                <h3 className="text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-cream text-balance transition-colors duration-300 group-hover:text-burgundy dark:group-hover:text-gold">
                  {honorific && (
                    <span className="font-normal text-cream/65">{honorific} </span>
                  )}
                  {rest}
                </h3>
                <p className="mt-1.5 text-[13px] leading-snug text-cream/65">
                  {member.role}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
