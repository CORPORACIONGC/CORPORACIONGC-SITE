import { PerfilHero } from "@/components/sections/PerfilHero";

/* Hero del perfil de Katherine. El retrato corta sobre los brazos cruzados
   (0,65), para no partir las manos. */
export function KatherineHero() {
  return (
    <PerfilHero
      cargo="Abogada Asociada"
      nombre={["MSc. Katherine", "González Coto"]}
      carne="Carnet CAACR 30256"
      secundario={{ href: "#perfil", rotulo: "Ver perfil" }}
      foto={{
        src: "/images/katherine-gonzalez.jpg",
        alt: "MSc. Katherine González Coto",
        ancho: 2016,
        alto: 2122,
        hasta: 0.65,
        x: "46%",
      }}
    >
      Abogada, Notaria Pública y Máster en Derecho Público
      por la Universidad de Costa Rica. Profesora en la
      Universidad Escuela Libre de Derecho y especialista en
      responsabilidad patrimonial del Estado y procedimiento
      expropiatorio.
    </PerfilHero>
  );
}
