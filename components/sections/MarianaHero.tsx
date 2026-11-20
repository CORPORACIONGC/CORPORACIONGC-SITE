import { PerfilHero } from "@/components/sections/PerfilHero";

/* Hero del perfil de Mariana. El retrato corta a medio pecho, sobre el botón
   del saco (0,68): el mismo busto que en los demás perfiles. */
export function MarianaHero() {
  return (
    <PerfilHero
      cargo="Abogada Asociada"
      nombre={["Licda. Mariana", "Montero Acuña"]}
      carne="Carnet CAACR 33716"
      secundario={{ href: "#perfil", rotulo: "Ver perfil" }}
      foto={{
        src: "/images/mariana-montero.png",
        alt: "Licda. Mariana Montero Acuña",
        ancho: 1024,
        alto: 1536,
        hasta: 0.68,
        x: "50%",
      }}
    >
      Especialista en malpraxis médica, iatrogenia y
      responsabilidad patrimonial del Estado. Licenciada con
      mención en Derechos Humanos por la UCR, aprobada con
      distinción.
    </PerfilHero>
  );
}
