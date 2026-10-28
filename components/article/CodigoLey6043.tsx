import { NormaNavegable } from "./NormaNavegable";
import type { ArticuloNorma } from "@/lib/normas";
import textoIntegro from "@/public/datos/ley-6043.json";
import { LEY6043_FICHA, LEY6043_GRUPOS, LEY6043_GUIAS, LEY6043_INDICE, LEY6043_TITULOS } from "@/lib/ley6043";

/* El texto íntegro viaja con la página para que Google lo lea; el JSON
   público sigue sirviendo a quien lo descarga. El JSON trae `null` donde
   el tipo espera un campo ausente, de ahí la doble conversión. */
const TEXTOS: Record<string, ArticuloNorma> = Object.fromEntries(
  (textoIntegro as unknown as ArticuloNorma[]).map((a) => [a.art, a]),
);

/** La Ley sobre la Zona Marítimo Terrestre, navegable dentro de la guía que
 *  la explica, con el enlace al área en los artículos de las concesiones. */
export function CodigoLey6043() {
  return (
    <NormaNavegable
      ficha={LEY6043_FICHA}
      titulos={LEY6043_TITULOS}
      indice={LEY6043_INDICE}
      grupos={LEY6043_GRUPOS}
      guias={LEY6043_GUIAS}
      textosServidor={TEXTOS}
    />
  );
}
