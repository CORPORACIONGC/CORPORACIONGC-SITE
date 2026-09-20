"use client";

import { NormaNavegable } from "./NormaNavegable";
import { CPCA_FICHA, CPCA_GRUPOS, CPCA_INDICE, CPCA_JURISPRUDENCIA, CPCA_TITULOS } from "@/lib/cpca";

/** El Código Procesal Contencioso-Administrativo, navegable dentro del
 *  artículo que lo explica, con las sentencias de la casa que interpretan
 *  sus artículos. */
export function CodigoCPCA() {
  return (
    <NormaNavegable
      ficha={CPCA_FICHA}
      titulos={CPCA_TITULOS}
      indice={CPCA_INDICE}
      grupos={CPCA_GRUPOS}
      votos={CPCA_JURISPRUDENCIA}
    />
  );
}
