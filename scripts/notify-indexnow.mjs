/**
 * IndexNow notifier — se ejecuta automáticamente como `postbuild` en Vercel.
 *
 * Avisa a Bing/Yandex (y por extensión a Bing Copilot, ChatGPT search y
 * DuckDuckGo) de las URL que cambiaron, para que las rastreen en horas.
 *
 * La lista sale del sitemap que acaba de compilar Next (app/sitemap.ts), de
 * modo que nunca anuncia direcciones retiradas ni olvida las nuevas. Solo se
 * envían las URL cuyo `lastmod` cae dentro de los últimos días: el protocolo
 * pide avisar lo que cambió, no todo el sitio en cada despliegue.
 *
 * Solo corre en deploys de producción de Vercel (`VERCEL_ENV=production`).
 * En local y en deploys de preview no hace nada — para forzar manualmente:
 *   INDEXNOW_FORCE=1 node scripts/notify-indexnow.mjs
 *   INDEXNOW_DIAS=30 amplía la ventana (por omisión, 2 días).
 *
 * No falla el build si IndexNow devuelve error: solo lo loggea.
 */

import fs from "node:fs/promises";
import path from "node:path";
import {
  INDEXNOW_KEY,
  INDEXNOW_HOST,
  INDEXNOW_ENDPOINT,
} from "../lib/indexnow.mjs";

const HOST = INDEXNOW_HOST;
const KEY = INDEXNOW_KEY;
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = INDEXNOW_ENDPOINT;

const VERCEL_ENV = process.env.VERCEL_ENV;
const FORCE = process.env.INDEXNOW_FORCE === "1";
const DIAS = Number(process.env.INDEXNOW_DIAS ?? 2);

if (VERCEL_ENV !== "production" && !FORCE) {
  console.log(
    `[indexnow] skip — VERCEL_ENV=${VERCEL_ENV ?? "unset"}. Forzar con INDEXNOW_FORCE=1.`
  );
  process.exit(0);
}

const SITEMAP = path.join(process.cwd(), ".next", "server", "app", "sitemap.xml.body");
let xml;
try {
  xml = await fs.readFile(SITEMAP, "utf8");
} catch (err) {
  console.warn(`[indexnow] no se encontró el sitemap compilado (${err.message}); no se avisa nada`);
  process.exit(0);
}

/* Por días enteros: el lastmod es una fecha sin hora (medianoche UTC). */
const hoy = new Date();
const desde = Date.UTC(hoy.getUTCFullYear(), hoy.getUTCMonth(), hoy.getUTCDate() - DIAS);
const urls = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)]
  .map(([, bloque]) => ({
    loc: bloque.match(/<loc>([^<]+)<\/loc>/)?.[1],
    lastmod: bloque.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1],
  }))
  .filter((u) => u.loc && u.lastmod && Date.parse(u.lastmod) >= desde)
  .map((u) => u.loc);

if (urls.length === 0) {
  console.log(`[indexnow] ninguna URL cambió en los últimos ${DIAS} días; no se avisa nada`);
  process.exit(0);
}

console.log(`[indexnow] notificando ${urls.length} URL cambiadas a ${ENDPOINT}`);
for (const u of urls) console.log(`[indexnow]   ${u}`);

try {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  });
  console.log(
    `[indexnow] respuesta: HTTP ${response.status} ${response.statusText}`
  );
  if (response.status >= 400) {
    const body = await response.text();
    console.error(`[indexnow] cuerpo del error: ${body}`);
  }
} catch (err) {
  console.error(`[indexnow] error de red: ${err.message}`);
}
