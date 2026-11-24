/* El <html lang> de las guías en inglés (informe 23-11, B-T4).
   El elemento <html> lo escribe el layout raíz, que no conoce el artículo
   que se muestra, y leer la ruta allí volvería dinámicas todas las páginas.
   Este paso corre después del build y cambia lang="es" por lang="en" en el
   HTML prerenderizado de cada artículo con `lang: "en"` en su Markdown, que
   es lo que leen los buscadores. La navegación dentro del sitio la cubre
   components/article/IdiomaDocumento.tsx. El <html> lleva
   suppressHydrationWarning, así que React no se queja de la diferencia. */
import fs from "node:fs";
import path from "node:path";

const RAIZ = process.cwd();
const ARTICULOS = path.join(RAIZ, "content", "articles");
const HTML = path.join(RAIZ, ".next", "server", "app", "articulos");

if (!fs.existsSync(HTML)) {
  console.log("[lang-html] no hay HTML prerenderizado de artículos; nada que hacer");
  process.exit(0);
}

const enIngles = fs
  .readdirSync(ARTICULOS)
  .filter((f) => f.endsWith(".md"))
  .filter((f) => /^lang:\s*"?en"?\s*$/m.test(fs.readFileSync(path.join(ARTICULOS, f), "utf8")))
  .map((f) => f.replace(/\.md$/, ""));

let cambiadas = 0;
for (const slug of enIngles) {
  const archivo = path.join(HTML, `${slug}.html`);
  if (!fs.existsSync(archivo)) {
    console.warn(`[lang-html] falta ${slug}.html`);
    continue;
  }
  const html = fs.readFileSync(archivo, "utf8");
  const nuevo = html.replace(/<html lang="es"/, '<html lang="en"');
  if (nuevo !== html) {
    fs.writeFileSync(archivo, nuevo);
    cambiadas += 1;
  }
}
console.log(`[lang-html] ${cambiadas} de ${enIngles.length} guías en inglés con <html lang="en">`);
