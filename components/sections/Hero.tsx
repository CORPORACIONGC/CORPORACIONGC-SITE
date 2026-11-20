import { PerfilHero } from "@/components/sections/PerfilHero";

/* Hero del perfil de Khevin. El retrato corta justo debajo del tercer botón
   de la camisa (0,71 del alto de la foto), como él lo pidió el 19-11-2026. */
export function Hero() {
  return (
    <PerfilHero
      cargo="Abogado Asociado"
      nombre={["Lic. Khevin", "Sánchez Zamora"]}
      carne="Carnet CAACR 37920"
      secundario={{ href: "/articulos", rotulo: "Artículos" }}
      foto={{
        /* La misma foto de siempre, tomada del original de 1684 × 2528 px
           (la del resto del sitio mide 1400 × 2101). */
        src: "/images/khevin-sanchez-retrato.jpg",
        alt: "Lic. Khevin Alberto Sánchez Zamora — Abogado Asociado de Corporación GC",
        ancho: 1684,
        alto: 2528,
        hasta: 0.71,
        x: "55%",
      }}
    >
      Abogado especializado en Litigio Contencioso-Administrativo,
      Medidas Cautelares, Casación y Contratación Pública.
      Licenciado en Derecho por la UCR con el tercer mejor promedio
      del Examen de Excelencia Académica, e investigador en
      inteligencia artificial aplicada a la justicia.
    </PerfilHero>
  );
}
