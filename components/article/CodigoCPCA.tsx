import { NormaNavegable } from "./NormaNavegable";
import type { ArticuloNorma } from "@/lib/normas";
import textoIntegro from "@/public/datos/cpca.json";
import { CPCA_FICHA, CPCA_GRUPOS, CPCA_GUIAS, CPCA_INDICE, CPCA_JURISPRUDENCIA, CPCA_TITULOS } from "@/lib/cpca";

/* El texto íntegro viaja con la página para que Google lo lea; el JSON
   público sigue sirviendo a quien lo descarga. El JSON trae `null` donde
   el tipo espera un campo ausente, de ahí la doble conversión. */
const TEXTOS: Record<string, ArticuloNorma> = Object.fromEntries(
  (textoIntegro as unknown as ArticuloNorma[]).map((a) => [a.art, a]),
);

/** El Código Procesal Contencioso-Administrativo, navegable dentro del
 *  artículo que lo explica, con las sentencias de la casa que interpretan
 *  sus artículos y las guías que los desarrollan. */
export function CodigoCPCA() {
  return (
    <NormaNavegable
      ficha={CPCA_FICHA}
      titulos={CPCA_TITULOS}
      indice={CPCA_INDICE}
      grupos={CPCA_GRUPOS}
      votos={CPCA_JURISPRUDENCIA}
      guias={CPCA_GUIAS}
      textosServidor={TEXTOS}
    />
  );
}
