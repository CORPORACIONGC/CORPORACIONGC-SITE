/* Comprobación del peso del HTML después de cada build (informe 23-11, M-T1).
   Googlebot lee solo los primeros 2 MB del HTML sin comprimir y deja de leer
   ahí. El build falla si alguna página prerenderizada supera 1,8 MB, para que
   el aviso llegue con margen y no cuando una norma ya quedó cortada.
   UMBRAL_HTML_MB cambia el límite si alguna vez hace falta. */
import fs from "node:fs";
import path from "node:path";

const LIMITE = Number(process.env.UMBRAL_HTML_MB ?? 1.8) * 1_000_000;
const RAIZ = path.join(process.cwd(), ".next", "server", "app");

if (!fs.existsSync(RAIZ)) {
  console.log("[peso-html] no hay .next/server/app; nada que comprobar");
  process.exit(0);
}

const paginas = [];
const recorrer = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const ruta = path.join(dir, e.name);
    if (e.isDirectory()) recorrer(ruta);
    else if (e.name.endsWith(".html")) paginas.push({ ruta, bytes: fs.statSync(ruta).size });
  }
};
recorrer(RAIZ);
paginas.sort((a, b) => b.bytes - a.bytes);

const mb = (b) => (b / 1_000_000).toFixed(2).replace(".", ",") + " MB";
const nombre = (r) => "/" + path.relative(RAIZ, r).replace(/\.html$/, "").replace(/^index$/, "");

console.log(`[peso-html] ${paginas.length} páginas; las más pesadas:`);
for (const p of paginas.slice(0, 5)) console.log(`  ${mb(p.bytes)}  ${nombre(p.ruta)}`);

const excedidas = paginas.filter((p) => p.bytes > LIMITE);
if (excedidas.length) {
  console.error(`[peso-html] ${excedidas.length} página(s) superan ${mb(LIMITE)} de HTML (Googlebot corta en 2 MB):`);
  for (const p of excedidas) console.error(`  ${mb(p.bytes)}  ${nombre(p.ruta)}`);
  process.exit(1);
}
console.log(`[peso-html] ninguna supera ${mb(LIMITE)}`);
