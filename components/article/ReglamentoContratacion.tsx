import { NormaNavegable } from "./NormaNavegable";
import type { ArticuloNorma } from "@/lib/normas";
import textoIntegro from "@/public/datos/reglamento-contratacion.json";
import {
  REGLAMENTO_DEROGADOS,
  REGLAMENTO_FICHA,
  REGLAMENTO_GRUPOS,
  REGLAMENTO_GUIAS,
  REGLAMENTO_INDICE,
  REGLAMENTO_TITULOS,
} from "@/lib/reglamento-contratacion";

/* El texto íntegro viaja con la página para que Google lo lea; el JSON
   público sigue sirviendo a quien lo descarga. El JSON trae `null` donde
   el tipo espera un campo ausente, de ahí la doble conversión. */
const TEXTOS: Record<string, ArticuloNorma> = Object.fromEntries(
  (textoIntegro as unknown as ArticuloNorma[]).map((a) => [a.art, a]),
);

/** El Reglamento a la Ley General de Contratación Pública, navegable dentro
 *  del artículo que explica su reforma, con las guías de la casa sobre los
 *  artículos que más se discuten en un concurso. */
export function ReglamentoContratacion() {
  return (
    <NormaNavegable
      ficha={REGLAMENTO_FICHA}
      titulos={REGLAMENTO_TITULOS}
      indice={REGLAMENTO_INDICE}
      grupos={REGLAMENTO_GRUPOS}
      guias={REGLAMENTO_GUIAS}
      derogados={REGLAMENTO_DEROGADOS}
      textosServidor={TEXTOS}
    />
  );
}
