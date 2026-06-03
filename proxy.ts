import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Normalización de URLs con parámetros — anti "index bloat".
 * (Convención Next.js 16: este archivo reemplaza a middleware.ts.)
 *
 * El sitio NO usa query params para nada (es 100% basado en rutas; ninguna
 * página lee searchParams). En Search Console aparecían ~170 URLs "rastreadas
 * sin indexar", en parte por variantes con parámetros (?p=, ?fbclid=, etc.)
 * que devolvían 200 indexable e inflaban el índice.
 *
 * Estrategia (sin romper nada):
 *  - Parámetros de SEGUIMIENTO (utm_*, gclid, fbclid, msclkid, _gl, ...): NO se
 *    tocan. Eliminarlos en el servidor rompería la atribución de campañas en
 *    GA4 (que los lee en el cliente). El <link rel="canonical"> ya consolida
 *    estas variantes para la indexación.
 *  - Parámetros INTERNOS de Next.js (_rsc) y peticiones RSC / prefetch: NO se
 *    tocan, para no romper la navegación del cliente.
 *  - Cualquier otro parámetro (no funcional): 308 a la URL limpia. Así Google
 *    deja de indexar/rastrear duplicados y se preserva el presupuesto de rastreo.
 */

const TRACKING_PARAMS = new Set([
  "gclid", "gbraid", "wbraid", "fbclid", "msclkid", "dclid", "yclid", "ttclid",
  "li_fat_id", "twclid", "igshid", "mc_cid", "mc_eid", "_gl", "gad_source", "gclsrc",
]);

// Parámetros internos de Next.js que jamás deben provocar redirección.
const NEXT_INTERNAL = new Set(["_rsc"]);

function isTracking(key: string): boolean {
  return key.startsWith("utm_") || TRACKING_PARAMS.has(key);
}

export function proxy(req: NextRequest) {
  const keys = [...req.nextUrl.searchParams.keys()];
  if (keys.length === 0) return NextResponse.next();

  // No tocar navegación interna de Next (RSC / prefetch).
  if (
    req.headers.get("rsc") ||
    req.headers.get("next-router-prefetch") ||
    keys.some((k) => NEXT_INTERNAL.has(k))
  ) {
    return NextResponse.next();
  }

  // Si hay algún parámetro de seguimiento, preservar la URL (atribución intacta).
  if (keys.some(isTracking)) return NextResponse.next();

  // Solo quedan parámetros no funcionales → redirigir 308 a la URL limpia.
  const clean = req.nextUrl.clone();
  clean.search = "";
  return NextResponse.redirect(clean, 308);
}

export const config = {
  // Excluye internos de Next, API y archivos con extensión (sitemap.xml,
  // robots.txt, imágenes, etc.) para no interferir con ellos.
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
