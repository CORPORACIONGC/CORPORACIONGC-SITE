import { PerfilHero } from "@/components/sections/PerfilHero";

/* Hero del perfil de Esteban. El retrato corta a media corbata, sobre el
   botón del saco (0,67): el mismo busto que en los demás perfiles. */
export function EstebanHero() {
  return (
    <PerfilHero
      cargo="Abogado Asociado"
      nombre={["Lic. Esteban", "Pérez Herrera"]}
      carne="Carnet CAACR 34399"
      secundario={{ href: "/articulos", rotulo: "Artículos" }}
      foto={{
        src: "/images/esteban-perez.jpg",
        alt: "Lic. Esteban Pérez Herrera",
        ancho: 532,
        alto: 848,
        hasta: 0.67,
        x: "55%",
      }}
    >
      Abogado litigante y Notario Público, especializado en Derecho
      Administrativo, Contencioso Administrativo, Contratación Pública
      y Derecho Constitucional.
    </PerfilHero>
  );
}
