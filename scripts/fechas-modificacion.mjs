/* Fecha del último cambio de cada artículo, tomada del historial de git.
   Corre antes de cada build y escribe lib/fechas-modificacion.json, que
   lib/articles.ts usa para dateModified, el lastmod del sitemap y la fecha
   «Revisado el» de la página.

   Vercel clona el repositorio con historial corto. En un clon así, el
   commit más antiguo disponible aparece como autor de todos los archivos
   que no cambiaron dentro de la ventana, con una fecha falsa. Para esos
   archivos se conserva la fecha ya guardada en el JSON, que se regenera
   con el historial completo en cada build local. */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const RAIZ = process.cwd();
const DIR = path.join(RAIZ, "content/articles");
const SALIDA = path.join(RAIZ, "lib/fechas-modificacion.json");

const git = (...args) => execFileSync("git", args, { cwd: RAIZ, encoding: "utf8" }).trim();

let previo = { articulos: {} };
try {
  previo = JSON.parse(fs.readFileSync(SALIDA, "utf8"));
} catch {}

let bordes = new Set();
try {
  if (git("rev-parse", "--is-shallow-repository") === "true") {
    const archivo = git("rev-parse", "--git-path", "shallow");
    bordes = new Set(fs.readFileSync(path.resolve(RAIZ, archivo), "utf8").split("\n").filter(Boolean));
  }
} catch {
  console.log("fechas-modificacion: sin git, se conserva el JSON existente");
  process.exit(0);
}

const articulos = {};
for (const nombre of fs.readdirSync(DIR).filter((f) => f.endsWith(".md")).sort()) {
  const slug = nombre.replace(/\.md$/, "");
  const [hash, fecha] = git("log", "-1", "--format=%H %cs", "--", path.join("content/articles", nombre)).split(" ");
  const guardada = previo.articulos?.[slug];
  if (!hash || bordes.has(hash)) {
    if (guardada) articulos[slug] = guardada;
    continue;
  }
  articulos[slug] = guardada && guardada > fecha ? guardada : fecha;
}

fs.writeFileSync(SALIDA, JSON.stringify({ articulos }, null, 2) + "\n");
console.log(`fechas-modificacion: ${Object.keys(articulos).length} artículos${bordes.size ? " (clon corto)" : ""}`);
