/* Medición de la búsqueda del sitio (OD-05, 25-11-2026). Sigue el patrón de
   lib/analytics.ts, que pertenece a otro frente y no se edita desde aquí: el
   evento va a la cola `dataLayer` como el objeto `arguments` de una llamada
   a gtag, con el contexto de la página. Si más adelante se prefiere tenerlo
   junto a los demás, se puede mover a lib/analytics.ts tal cual. */

import { contextoPagina } from "@/lib/analytics";

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- la firma documenta la llamada; se lee con `arguments`
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

/** Búsqueda en /buscar, cuando el texto se asienta: qué se buscó y cuántos
 *  resultados devolvió en total. Una búsqueda sin resultados señala un tema
 *  que el sitio no trae con esa palabra. Lleva el mismo `termino_busqueda`
 *  del buscador de las normas y, además, `search_term`, la dimensión
 *  predefinida de GA4 para búsquedas internas. */
export function trackBusquedaSitio(termino: string, resultados: number) {
  if (typeof window === "undefined") return;
  const t = termino.slice(0, 100);
  try {
    gtag("event", "busqueda_sitio", {
      page_path: window.location.pathname,
      ...contextoPagina(),
      termino_busqueda: t,
      search_term: t,
      resultados,
    });
  } catch {
    // La medición nunca rompe la página.
  }
}
