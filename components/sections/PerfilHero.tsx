import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RunningHead } from "@/components/ui/RunningHead";

/* Hero de los perfiles (19-11-2026), común a abogados y asistentes. El retrato
   va «a sangre»: en escritorio ocupa la derecha, de la barra de navegación al
   pie y hasta el borde de la pantalla; en el teléfono abre el hero de borde a
   borde. En ninguno de los dos lleva velo ni desvanecido: es una lámina de
   bordes limpios. A la izquierda, sobre un mismo eje: el cargo, el nombre, el
   párrafo, el carné y los botones.

   Las fotos se sirven a calidad 90 y con `sizes` calculado sobre el ancho
   real con que se pinta cada una (que es mayor que el del marco, porque el
   recorte la acerca), para que el navegador pida siempre la variante más
   grande que el archivo permita.

   Sustituye a la foto en columna con desvanecido al pie y a la rayita burdeos
   junto al párrafo, que no cumplía función y sacaba el texto de su eje.

   Cada perfil pasa su texto tal cual y el recorte de su retrato. */

export type RetratoPerfil = {
  src: string;
  alt: string;
  /** Medidas del archivo, para calcular el recorte. */
  ancho: number;
  alto: number;
  /** Fracción del alto de la foto que se muestra, contada desde arriba. En el
      retrato de pie de Khevin, 0,71 corta justo debajo del tercer botón de la
      camisa: se ve el busto y no el abdomen. */
  hasta: number;
  /** Punto horizontal de la foto que queda centrado cuando sobra ancho. */
  x: string;
  /** Encuadre propio para el teléfono, si el de escritorio no le sirve: la
      clase de proporción del marco y, si hace falta, otro recorte. */
  movil?: { marco?: string; hasta?: number; x?: string };
};

/* Alto del hero en escritorio: la pantalla menos la franja «Volver» (32 px)
   y la barra de navegación (80 px). */
const ALTO = "calc(100dvh - 7rem)";

function Retrato({
  foto,
  hasta,
  x,
  sizes,
  className = "",
}: {
  foto: RetratoPerfil;
  hasta: number;
  x: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* La caja interior es más alta que el marco: lo que sobra por abajo
          queda fuera, y así el retrato termina donde dice `hasta`. */}
      <div className="absolute inset-x-0 top-0" style={{ height: `${100 / hasta}%` }}>
        <Image
          src={foto.src}
          alt={foto.alt}
          fill
          priority
          quality={90}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: `${x} 0%` }}
        />
      </div>
    </div>
  );
}

/* Proporción (ancho entre alto) de los marcos de teléfono admitidos. */
const MARCOS_MOVIL: Record<string, number> = {
  "aspect-[15/16]": 15 / 16,
  "aspect-square": 1,
  "aspect-[5/4]": 5 / 4,
  "aspect-[4/3]": 4 / 3,
};

export function PerfilHero({
  cargo,
  nombre,
  children,
  carne,
  secundario,
  foto,
}: {
  /** El rótulo sobre el nombre: «Abogado Asociado», «Asistente legal»… */
  cargo: string;
  /** El nombre en sus dos líneas, con el título académico en la primera. */
  nombre: readonly [string, string];
  /** El párrafo de presentación. */
  children: React.ReactNode;
  /** «Carnet CAACR 37920»; los asistentes no llevan. */
  carne?: string;
  /** El segundo botón; el primero es siempre «Contactar». */
  secundario: { href: string; rotulo: string };
  foto: RetratoPerfil;
}) {
  /* El cuerpo del nombre se ajusta a su línea más larga para que nunca se
     parta en tres: 72 px como tope en escritorio y 36 px en el teléfono. */
  const letras = Math.max(nombre[0].length, nombre[1].length);
  const divisor = (letras * 0.52).toFixed(2);

  /* En pantallas muy anchas y bajas la columna del retrato se estrecha lo
     justo para que el recorte siga terminando en el mismo punto. */
  const razon = foto.ancho / foto.alto;
  const proporcion = (razon / foto.hasta).toFixed(3);

  /* Teléfono: marco y recorte propios si el perfil los trae. */
  const marco = foto.movil?.marco ?? "aspect-[15/16]";
  const hastaMovil = foto.movil?.hasta ?? foto.hasta;
  const xMovil = foto.movil?.x ?? foto.x;
  /* Ancho real con que se pinta la foto en el teléfono, en anchos de
     pantalla: 1 si entra justa, más si el recorte la acerca. */
  const anchoMovil = Math.max(1, razon / hastaMovil / (MARCOS_MOVIL[marco] ?? 1));

  return (
    <section id="inicio" className="relative bg-surface">
      {/* El bloque empieza debajo de la barra de navegación. */}
      <div className="relative mt-16 md:mt-20">
        {/* Teléfono: el retrato abre el hero, de borde a borde y sin
            desvanecido. No se anima (es la imagen LCP). Las dos fotos se
            precargan, pero cada `sizes` vale 0px en el rango donde su
            versión está oculta. */}
        <div className="md:hidden">
          <Retrato
            foto={foto}
            hasta={hastaMovil}
            x={xMovil}
            sizes={`(min-width: 768px) 0px, ${Math.ceil(anchoMovil * 100)}vw`}
            className={marco}
          />
        </div>

        {/* Escritorio: el retrato a sangre. */}
        <div
          className="absolute inset-y-0 right-0 hidden md:block"
          style={{ width: `min(44vw, calc((${ALTO}) * ${proporcion}))` }}
        >
          <Retrato
            foto={foto}
            hasta={foto.hasta}
            x={foto.x}
            sizes={`(max-width: 767px) 0px, max(44vw, calc((100vh - 7rem) * ${proporcion}))`}
            className="h-full w-full"
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 pb-12 pt-8 md:px-10 md:py-12">
          {/* La columna mide el alto del hero menos su relleno (6 rem) y
              centra el texto en vertical. */}
          <div className="gc-rise flex flex-col md:min-h-[calc(100dvh-13rem)] md:w-[calc(56vw-7rem)] md:max-w-[640px] md:justify-center">
            <RunningHead title={cargo} className="order-1" />

            <h1
              className="type-headline order-2 text-cream [--ancho:calc(100vw-3rem)] [--tope:2.25rem] md:[--ancho:min(640px,calc(56vw-7rem))] md:[--tope:4.5rem]"
              style={{ fontSize: `min(var(--tope), calc(var(--ancho) / ${divisor}))`, lineHeight: 1 }}
            >
              {nombre[0]}
              <br />
              {nombre[1]}
            </h1>

            {/* En el teléfono los botones van bajo el nombre, dentro de la
                primera pantalla; en escritorio cierran el bloque. */}
            <div className="order-3 mt-6 flex flex-wrap items-stretch gap-4 md:order-5 md:mt-8">
              <MagneticButton href="#contacto" variant="primary" className="h-full">
                Contactar
              </MagneticButton>
              <MagneticButton href={secundario.href} variant="outline" className="h-full">
                {secundario.rotulo}
              </MagneticButton>
            </div>

            <p className="order-4 mt-8 max-w-[52ch] text-base leading-relaxed text-cream/65 md:order-3 md:mt-6 md:text-lg">
              {children}
            </p>

            {carne && (
              <div className="order-5 mt-5 text-[11px] tracking-wide text-cream/65 md:order-4">{carne}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
