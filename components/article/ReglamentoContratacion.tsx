"use client";

import { NormaNavegable } from "./NormaNavegable";
import {
  REGLAMENTO_DEROGADOS,
  REGLAMENTO_FICHA,
  REGLAMENTO_GRUPOS,
  REGLAMENTO_GUIAS,
  REGLAMENTO_INDICE,
  REGLAMENTO_TITULOS,
} from "@/lib/reglamento-contratacion";

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
    />
  );
}
