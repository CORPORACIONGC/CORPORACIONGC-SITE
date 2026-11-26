"use client";

import { useEffect } from "react";

/* Declara para la medición el contexto de la página abierta: su tipo, su
   área de práctica principal, su autor y su tipo de publicación. No pinta
   nada. Lo leen los eventos de lib/analytics.ts (contextoPagina). */
export function DatosPagina({
  tipo,
  area,
  autor,
  publicacion,
}: {
  tipo?: string;
  area?: string;
  autor?: string;
  publicacion?: string;
}) {
  useEffect(() => {
    window.__gcPagina = { ruta: window.location.pathname, tipo, area, autor, publicacion };
  }, [tipo, area, autor, publicacion]);
  return null;
}
