import Image from "next/image";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { CLIENTES, tamanoOptico } from "@/lib/constants";

type Cliente = (typeof CLIENTES)[number];

/* Un logo a su tamaño óptico. Los archivos son blancos sobre transparente
   (algunos traen un fondo negro que el modo de mezcla «screen» vuelve
   invisible sobre el borgoña). Carga inmediata: la banda está justo debajo
   del hero y la cinta mueve los logos hacia la pantalla. */
function Logo({ c, alto, className = "" }: { c: Cliente; alto: number; className?: string }) {
  const t = tamanoOptico(c.ratio, c.densidad, alto);
  return (
    <Image
      src={c.src}
      alt={c.name}
      title={c.name}
      width={t.width * 2}
      height={t.height * 2}
      loading="eager"
      className={`mix-blend-screen ${className}`}
      style={{ width: t.width, height: t.height }}
    />
  );
}

const Rotulo = () => (
  <div className="flex items-center justify-center gap-4">
    <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-transparent to-gold/40" />
    <h2 className="type-label text-white/70">Han confiado en nosotros</h2>
    <span aria-hidden="true" className="h-px w-10 bg-gradient-to-l from-transparent to-gold/40" />
  </div>
);

/* ── Cinta de clientes: los logos igualados por tamaño óptico, a 80 s por
   vuelta, con pausa al pasar el cursor o recibir el foco. ── */
function Cinta() {
  return (
    <div className="pb-12 pt-12 md:pb-16 md:pt-16">
      <AnimatedEntry>
        <Rotulo />
      </AnimatedEntry>
      {/* Los bordes se desvanecen con una máscara, no con franjas del color de
          fondo: así no aparecen rectángulos si el fondo cambia de tono. */}
      <div className="group/cinta relative mt-10 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] md:mt-12 motion-reduce:[mask-image:none]">
        {/* El pr igual al gap cierra el ciclo: el translateX(-50%) cae justo
            en el inicio de la copia. Con movimiento reducido, la cinta se
            detiene y los logos se reparten en filas centradas. */}
        <ul
          role="list"
          aria-label="Clientes"
          className="animate-marquee-lenta flex w-max items-center gap-14 pr-14 group-hover/cinta:[animation-play-state:paused] group-focus-within/cinta:[animation-play-state:paused] md:gap-20 md:pr-20 motion-reduce:mx-auto motion-reduce:grid motion-reduce:w-auto motion-reduce:max-w-[1400px] motion-reduce:grid-cols-3 motion-reduce:justify-items-center motion-reduce:gap-y-10 motion-reduce:px-6 motion-reduce:pr-6 motion-reduce:[animation:none] md:motion-reduce:grid-cols-6 md:motion-reduce:px-10"
        >
          {CLIENTES.map((c) => (
            <li key={c.name} className="flex shrink-0 items-center opacity-75 transition-opacity duration-500 hover:opacity-100">
              <Logo c={c} alto={52} />
            </li>
          ))}
          {CLIENTES.map((c) => (
            <li key={`copia-${c.name}`} aria-hidden="true" className="flex shrink-0 items-center opacity-75 motion-reduce:hidden">
              <Logo c={c} alto={52} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ClientLogos() {
  return (
    <section className="gc-on-dark relative overflow-hidden bg-[#3A0B1F]">
      <Cinta />
    </section>
  );
}
