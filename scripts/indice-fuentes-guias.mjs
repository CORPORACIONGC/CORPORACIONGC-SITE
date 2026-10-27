/* Regenera lib/fuentes-guias/index.ts con todos los archivos de datos de la
   carpeta (uno por guía). Uso: node scripts/indice-fuentes-guias.mjs [slug…]
   Sin argumentos incluye todos; con slugs, solo esos. */
import fs from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "lib", "fuentes-guias");
const pedidos = process.argv.slice(2);
const slugs = fs
  .readdirSync(DIR)
  .filter((f) => f.endsWith(".ts") && f !== "tipos.ts" && f !== "index.ts")
  .map((f) => f.replace(/\.ts$/, ""))
  .filter((s) => !pedidos.length || pedidos.includes(s))
  .sort();
const id = (s) => "f_" + s.replace(/[^a-z0-9]/gi, "_");
const salida = `/* Generado por scripts/indice-fuentes-guias.mjs: no se edita a mano. */
import type { FuentesDeGuia } from "./tipos";
${slugs.map((s) => `import { fuentes as ${id(s)} } from "./${s}";`).join("\n")}

export const FUENTES_GUIAS: Record<string, FuentesDeGuia> = {
${slugs.map((s) => `  "${s}": ${id(s)},`).join("\n")}
};
`;
fs.writeFileSync(path.join(DIR, "index.ts"), salida);
console.log(`fuentes-guias: ${slugs.length} guías`);
