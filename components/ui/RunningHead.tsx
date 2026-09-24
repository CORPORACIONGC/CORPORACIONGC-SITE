/* Encabezado corrido (Design System v2, aprobado el 23-09-2026). Sustituye
   al rótulo con filete dorado: a la izquierda, de qué trata la sección, en
   burdeos (dorado de noche o sobre bandas oscuras); a la derecha, en qué
   parte de la página o del sitio está, en versalitas; debajo, un filete
   fino. Estilos en app/globals.css (.running-head). */

type Props = {
  title: React.ReactNode;
  locator?: React.ReactNode;
  /* "dark" para bandas oscuras o burdeos dentro de una página clara. */
  tone?: "light" | "dark";
  /* Elemento del título: "span" por defecto; "h2" cuando el encabezado es el
     único rótulo de la sección y no lo sigue un titular. */
  titleAs?: "span" | "h2" | "p";
  className?: string;
};

export function RunningHead({ title, locator, tone = "light", titleAs: Title = "span", className }: Props) {
  const cls = ["running-head", tone === "dark" && "running-head--dark", className].filter(Boolean).join(" ");
  return (
    <div className={cls}>
      <Title className="running-head__title">{title}</Title>
      {locator && <span className="running-head__locator">{locator}</span>}
    </div>
  );
}
