import {
  Children,
  Fragment,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

/* Pliegue por subsección del «Análisis jurídico detallado» de las páginas
   de área (D-02, 25-11-2026). Los instrumentos se pliegan solos (el
   componente Instrumento ya es un <details>); aquí se pliegan además las
   secciones del contenido que abren con un <h2>, como «Preguntas
   frecuentes sobre…» o «Quién atiende estos casos». Las secciones sin
   título, que hacen de introducción, quedan abiertas.

   Todo sigue en el HTML aunque esté plegado: los buscadores leen el texto
   completo y el buscador del navegador abre el pliegue que contiene la
   coincidencia. */

type ConHijos = { children?: ReactNode; className?: string };

/** El signo «+» que gira a «×» al abrir el pliegue. Usa el grupo con nombre
 *  `sub` para no reaccionar a otros grupos del contenido. */
export function SignoPliegue() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-lg leading-none text-cream/45 transition-transform duration-300 group-open/sub:rotate-45"
    >
      +
    </span>
  );
}

export function plegarSecciones(contenido: ReactNode): ReactNode {
  const hijos =
    isValidElement<ConHijos>(contenido) && contenido.type === Fragment
      ? contenido.props.children
      : contenido;

  return Children.map(hijos, (hijo) => {
    if (!isValidElement<ConHijos>(hijo) || hijo.type !== "section") return hijo;
    const [primero, ...resto] = Children.toArray(hijo.props.children);
    if (!isValidElement<ConHijos>(primero) || primero.type !== "h2") return hijo;

    /* La sección conserva sus atributos (id, aria) y cambia el aire de
       bloque abierto por el de fila plegada, igual al de los instrumentos. */
    return cloneElement(
      hijo as ReactElement<ConHijos>,
      { className: "border-t border-cream/[0.08]" },
      <details className="group/sub">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-6 [&::-webkit-details-marker]:hidden">
          <h2 className="font-display text-base md:text-lg text-cream font-medium leading-snug transition-colors duration-300 group-hover/sub:text-emphasis">
            {primero.props.children}
          </h2>
          <SignoPliegue />
        </summary>
        <div className="pb-8">{resto}</div>
      </details>,
    );
  });
}
