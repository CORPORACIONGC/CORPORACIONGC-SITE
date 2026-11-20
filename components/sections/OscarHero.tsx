import { PerfilHero } from "@/components/sections/PerfilHero";

/* Hero del perfil de don Óscar. La foto es apaisada (sentado a la mesa) y solo
   mide 1536 × 1024 px, así que se acerca lo menos posible: el recorte baja
   hasta debajo de las manos y el borde de la computadora (0,8) y deja fuera
   el primer plano de la mesa. El 54 % horizontal deja su cabeza un poco a la
   derecha del centro, con aire hacia donde mira. En el teléfono el marco es
   apaisado (5:4), para acercar todavía menos. */
export function OscarHero() {
  return (
    <PerfilHero
      cargo="Fundador y Director"
      nombre={["Dr. Óscar Eduardo", "González Camacho"]}
      carne="Carnet CAACR 3191"
      secundario={{ href: "/articulos", rotulo: "Artículos" }}
      foto={{
        src: "/images/oscar-gonzalez-oficina.png",
        alt: "Dr. Óscar Eduardo González Camacho",
        ancho: 1536,
        alto: 1024,
        hasta: 0.8,
        x: "54%",
        movil: { marco: "aspect-[5/4]" },
      }}
    >
      Ex-Magistrado de la Corte Suprema de Justicia. Coordinó la
      comisión redactora del Código Procesal Contencioso
      Administrativo. Uno de los litigantes de mayor calado en la
      jurisdicción contencioso-administrativa costarricense.
    </PerfilHero>
  );
}
