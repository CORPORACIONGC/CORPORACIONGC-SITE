import Link from "next/link";

/* Migas de pan visibles (D-22, 25-11-2026). Un solo patrón de regreso para
   las plantillas que antes abrían con «← Volver al inicio»: índices,
   contacto, sobre nosotros y la 404. Repite el de las guías (nav «Ruta»,
   separador › atenuado, último tramo sin enlace y con aria-current), para
   que el lector suba siempre por el mismo camino.

   Cada página conserva su BreadcrumbList en JSON-LD; los rótulos que se le
   pasan aquí deben ser los mismos de ese marcado, en el mismo orden, para
   que lo que ve el lector y lo que lee Google coincidan. El último tramo es
   la página actual y no lleva `href`.

   Los enlaces miden 24 px de alto como mínimo (WCAG 2.5.8): son texto de
   12 px y el relleno vertical les da un blanco cómodo sin mover la línea. */
export type Miga = { label: string; href?: string };

export function Migas({ items, className = "" }: { items: Miga[]; className?: string }) {
  return (
    <nav aria-label="Ruta" className={`text-xs text-cream/65 ${className}`}>
      <ol role="list" className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((m, i) => {
          const ultima = i === items.length - 1;
          return (
            <li key={`${m.label}-${i}`} className="flex items-center gap-x-2">
              {m.href && !ultima ? (
                <Link
                  href={m.href}
                  className="inline-flex min-h-6 items-center transition-colors duration-300 hover:text-burgundy dark:hover:text-hilo-texto"
                >
                  {m.label}
                </Link>
              ) : (
                <span aria-current={ultima ? "page" : undefined} className="inline-flex min-h-6 items-center">
                  {m.label}
                </span>
              )}
              {!ultima && (
                <span aria-hidden="true" className="text-cream/30">
                  ›
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
