import { NormaNavegable } from "./NormaNavegable";
import type { ArticuloNorma } from "@/lib/normas";
import textoIntegro from "@/public/datos/lgap.json";
import {
  LGAP_DEROGADOS,
  LGAP_FICHA,
  LGAP_GRUPOS,
  LGAP_GUIAS,
  LGAP_INDICE,
  LGAP_JURISPRUDENCIA,
  LGAP_TITULOS,
} from "@/lib/lgap";

/* El texto íntegro viaja con la página para que Google lo lea; el JSON
   público sigue sirviendo a quien lo descarga. El JSON trae `null` donde
   el tipo espera un campo ausente, de ahí la doble conversión. */
const TEXTOS: Record<string, ArticuloNorma> = Object.fromEntries(
  (textoIntegro as unknown as ArticuloNorma[]).map((a) => [a.art, a]),
);

/** La Ley General de la Administración Pública, navegable dentro de la
 *  guía que la explica, con las sentencias de la casa que interpretan sus
 *  artículos y las guías que los desarrollan. */
export function CodigoLGAP() {
  return (
    <NormaNavegable
      ficha={LGAP_FICHA}
      titulos={LGAP_TITULOS}
      indice={LGAP_INDICE}
      grupos={LGAP_GRUPOS}
      votos={LGAP_JURISPRUDENCIA}
      guias={LGAP_GUIAS}
      derogados={LGAP_DEROGADOS}
      textosServidor={TEXTOS}
    />
  );
}
