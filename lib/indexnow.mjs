/**
 * Configuración de IndexNow — FUENTE ÚNICA DE VERDAD.
 *
 * Importado tanto por la API route (app/api/indexnow/route.ts) como por el
 * script de post-build (scripts/notify-indexnow.mjs), para que la llave y el
 * host nunca queden desincronizados entre ambos.
 *
 * La llave es pública por diseño (vive también en https://www.corporaciongc.com/<KEY>.txt),
 * por lo que no es un secreto y puede versionarse sin riesgo.
 */
export const INDEXNOW_KEY = "9bfd4199e0da6032800261f5b858adeb";
export const INDEXNOW_HOST = "www.corporaciongc.com";
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
