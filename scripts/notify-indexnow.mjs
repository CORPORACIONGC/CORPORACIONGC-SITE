/**
 * IndexNow notifier — se ejecuta automáticamente como `postbuild` en Vercel.
 *
 * Notifica a Bing/Yandex (y por extensión a Bing Copilot, ChatGPT search,
 * DuckDuckGo) de todas las URLs públicas del sitio para que las indexen
 * en horas en lugar de días/semanas.
 *
 * Solo corre en deploys de producción de Vercel (`VERCEL_ENV=production`).
 * En local y en deploys de preview no hace nada — para forzar manualmente:
 *   INDEXNOW_FORCE=1 node scripts/notify-indexnow.mjs
 *
 * No falla el build si IndexNow devuelve error: solo lo loggea.
 */

import fs from "node:fs/promises";
import path from "node:path";

const HOST = "www.corporaciongc.com";
const BASE = `https://${HOST}`;
const KEY = "9bfd4199e0da6032800261f5b858adeb";
const KEY_LOCATION = `${BASE}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const VERCEL_ENV = process.env.VERCEL_ENV;
const FORCE = process.env.INDEXNOW_FORCE === "1";

if (VERCEL_ENV !== "production" && !FORCE) {
  console.log(
    `[indexnow] skip — VERCEL_ENV=${VERCEL_ENV ?? "unset"}. Forzar con INDEXNOW_FORCE=1.`
  );
  process.exit(0);
}

/* ── Páginas estáticas raíz ────────────────────────────────────────────── */
const STATIC_PAGES = [
  "/",
  "/articulos",
  "/sobre-nosotros",
  "/areas",
  "/jurisprudencia-destacada",
];

/* ── Áreas de práctica ──────────────────────────────────────────────────
   Sincronizar con lib/constants.ts → PRACTICE_AREA_PAGES si se añaden áreas. */
const PRACTICE_AREA_SLUGS = [
  "litigio-contencioso-administrativo",
  "medidas-cautelares",
  "casacion-sala-primera",
  "contratacion-publica",
  "recursos-de-amparo",
  "acciones-de-inconstitucionalidad",
  "asesoria-regulatoria",
  "informes-juridicos-dictamenes",
  "derecho-administrativo",
  "procedimientos-sancionatorios",
  "empleo-publico",
  "servicio-publico",
  "materia-municipal",
  "dominio-publico",
  "zona-maritimo-terrestre",
  "derecho-urbanistico",
  "materia-presupuestaria",
  "comercio-internacional",
  "compliance-publico-anticorrupcion",
  "gobierno-digital-inteligencia-artificial-datos",
  "defensa-regulatoria-sectorial",
  "regulacion-ambiental-mercados-carbono",
  "alianzas-publico-privadas-infraestructura",
  "regulacion-fintech-criptoactivos",
  "derecho-electoral-financiamiento-politico",
  "telecomunicaciones-espectro-5g",
  "energia-renovable-transicion-energetica",
  "derecho-civil",
  "derecho-de-familia",
  "derecho-laboral",
  "derecho-notarial",
];

/* ── Abogados ───────────────────────────────────────────────────────────
   Sincronizar con lib/constants.ts → TEAM si se añaden o quitan miembros. */
const ATTORNEY_SLUGS = [
  "oscar-gonzalez",
  "khevin-sanchez",
  "katherine-gonzalez",
  "mariana-montero",
  "esteban-perez",
  "jose-carlos-solano",
];

/* ── Sentencias destacadas ──────────────────────────────────────────────
   Sincronizar con lib/jurisprudencia.ts si se añaden sentencias. */
const SENTENCIA_SLUGS = ["indexacion-de-obligaciones-dinerarias"];

/* ── Artículos: lectura dinámica desde content/articles/*.md ──────────── */
const articlesDir = path.join(process.cwd(), "content", "articles");
let articleSlugs = [];
try {
  const files = await fs.readdir(articlesDir);
  articleSlugs = files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
} catch (err) {
  console.warn(`[indexnow] no se pudo leer ${articlesDir}: ${err.message}`);
}

const urls = [
  ...STATIC_PAGES.map((p) => `${BASE}${p}`),
  ...PRACTICE_AREA_SLUGS.map((s) => `${BASE}/areas/${s}`),
  ...ATTORNEY_SLUGS.map((s) => `${BASE}/abogados/${s}`),
  ...SENTENCIA_SLUGS.map((s) => `${BASE}/jurisprudencia-destacada/${s}`),
  ...articleSlugs.map((s) => `${BASE}/articulos/${s}`),
];

console.log(`[indexnow] notificando ${urls.length} URLs a ${ENDPOINT}`);

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
