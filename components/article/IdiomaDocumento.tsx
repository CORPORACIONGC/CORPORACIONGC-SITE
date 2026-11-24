"use client";

import { useEffect } from "react";

/* Al llegar a una guía en inglés navegando dentro del sitio, el <html> ya
   existe y conserva lang="es": este componente lo cambia mientras la guía
   está en pantalla y lo devuelve al salir. La carga directa la resuelve
   scripts/lang-html.mjs en el HTML prerenderizado (B-T4). */
export function IdiomaDocumento({ lang }: { lang: string }) {
  useEffect(() => {
    const raiz = document.documentElement;
    const previo = raiz.lang;
    raiz.lang = lang;
    return () => {
      raiz.lang = previo;
    };
  }, [lang]);
  return null;
}
