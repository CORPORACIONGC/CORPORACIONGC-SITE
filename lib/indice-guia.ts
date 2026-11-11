/* El índice de una guía se saca de sus subtítulos de segundo nivel. El ancla
   se calcula igual que en la página (`anclaDe`), de modo que cada entrada
   apunta al `id` que el subtítulo recibe al pintarse. */

export type Apartado = { id: string; titulo: string; pos: number };

/** Quita el marcado de un subtítulo y deja solo lo que se lee. */
function textoPlano(md: string): string {
  return md
    .replace(/\[\^[^\]]+\]/g, "")
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[*_`]/g, "")
    .replace(/\s+#+\s*$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function anclaDeTexto(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Los `##` del Markdown, en orden, con la posición donde empieza cada uno.
 *  Salta los bloques de código. */
export function apartadosDe(md: string): Apartado[] {
  const salida: Apartado[] = [];
  let enCodigo = false;
  let pos = 0;
  for (const linea of md.split("\n")) {
    if (/^\s*(```|~~~)/.test(linea)) enCodigo = !enCodigo;
    const m = !enCodigo && /^##\s+(.+?)\s*$/.exec(linea);
    if (m) {
      const titulo = textoPlano(m[1]);
      const id = anclaDeTexto(titulo);
      if (titulo && id) salida.push({ id, titulo, pos });
    }
    pos += linea.length + 1;
  }
  return salida;
}

/** Dónde insertar la llamada intermedia al contacto: al comienzo del
 *  apartado que arranca más cerca del 38 % del texto, sin pasar de la mitad
 *  y sin caer en el primer apartado ni en los de cierre. Devuelve −1 si la
 *  guía es corta o no tiene un corte razonable. */
export function corteIntermedio(md: string, apartados: Apartado[]): number {
  if (apartados.length < 5 || md.length < 9000) return -1;
  const cierre = /^(preguntas|frequently|faq|fuentes|sources|bibliograf|referencias|notas)/i;
  const candidatos = apartados
    .slice(1)
    .filter((a) => !cierre.test(a.titulo) && a.pos / md.length >= 0.22 && a.pos / md.length <= 0.5);
  if (candidatos.length === 0) return -1;
  const meta = md.length * 0.38;
  return candidatos.reduce((mejor, a) => (Math.abs(a.pos - meta) < Math.abs(mejor.pos - meta) ? a : mejor)).pos;
}
