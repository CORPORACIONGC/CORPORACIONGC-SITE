/* Guías que piden revisión de fondo: las prácticas y comerciales cuya
   última revisión declarada (`updated`, o la publicación si nunca se
   revisaron) tiene más de 90 días. Las piezas académicas (tesis, libros,
   ponencias) quedan fuera: no se actualizan, se publican.

   Regla de la casa desde el 27-10-2026:
   - «Revisado el» (`updated` en el frontmatter) solo cuando alguien revisó el
     contenido a fondo; un cambio de enlaces o de pie no cuenta.
   - Las piezas de actualidad llevan una nota «Verificado el …» con fecha,
     aunque la verificación no cambie nada.
   - Cada trimestre se corre este script y se revisa lo que liste.

   Uso: node scripts/revision-trimestral.mjs [días]   (90 por omisión) */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DIAS = Number(process.argv[2] ?? 90);
const DIR = path.join(process.cwd(), "content", "articles");
const ACADEMICO = new Set(["tesis", "libro", "ponencia"]);
const hoy = new Date();
const limite = new Date(hoy.getTime() - DIAS * 864e5).toISOString().slice(0, 10);

const vencidas = fs
  .readdirSync(DIR)
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const { data } = matter(fs.readFileSync(path.join(DIR, f), "utf8"));
    const revisada = String(data.updated ?? data.date);
    // Lo publicado en una revista o un libro (sourceReference) tampoco se actualiza.
    return { slug: f.replace(/\.md$/, ""), tipo: data.publicationType ?? "", externa: Boolean(data.sourceReference), revisada, titulo: data.title };
  })
  .filter((g) => !ACADEMICO.has(g.tipo) && !g.externa && g.revisada < limite)
  .sort((a, b) => a.revisada.localeCompare(b.revisada));

console.log(`Guías sin revisión de fondo en ${DIAS} días (antes del ${limite}): ${vencidas.length}\n`);
for (const g of vencidas) console.log(`${g.revisada}  ${g.slug}`);
