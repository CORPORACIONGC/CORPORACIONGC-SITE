import { getArticlesByAuthor } from "./articles";
import { TEAM } from "./constants";

/** Fecha del último cambio de un perfil: la más reciente entre su edición
 *  y su última publicación, que aparece en la página. */
export function fechaPerfil(slug: string): string | undefined {
  const miembro = TEAM.find((m) => m.slug === slug);
  if (!miembro) return undefined;
  const publicaciones = getArticlesByAuthor(miembro.autor).map((a) => a.date);
  return [miembro.actualizado, ...publicaciones].sort().pop();
}
