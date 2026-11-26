"use client";

import { useEffect } from "react";

/* En el teléfono (por debajo de 768 px) cierra al cargar los grupos de
   «Fuentes» (GrupoFuentes), que en el HTML salen abiertos. Las fuentes van al
   pie de la guía, así que el cambio de alto ocurre fuera de la pantalla. No
   pinta nada. */
export function PliegueFuentes() {
  useEffect(() => {
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    document.querySelectorAll<HTMLDetailsElement>("details.gc-fuentes-grupo[open]").forEach((grupo) => {
      grupo.open = false;
    });
  }, []);
  return null;
}
