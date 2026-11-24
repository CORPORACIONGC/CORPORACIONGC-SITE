/* Una pregunta frecuente escrita dentro del cuerpo de la guía, mostrada
   como desplegable con el mismo diseño que las preguntas que la plantilla
   pinta al pie (app/articulos/[slug]/page.tsx). La plantilla convierte
   cada «### ¿Pregunta?» del apartado «## Preguntas frecuentes» en este
   componente; la respuesta conserva su Markdown (enlaces, negritas,
   listas). El texto queda en el HTML aunque esté plegado, de modo que
   Google y los asistentes lo leen igual. */

import { Children, isValidElement, type ReactElement, type ReactNode } from "react";

/* La pregunta llega como el primer hijo (el «### …» del Markdown, ya
   convertido en <h3>); el resto es la respuesta. Así el enunciado conserva
   su texto exacto, comillas incluidas. */
export function PreguntaFrecuente({ children }: { children: ReactNode }) {
  const [primero, ...resto] = Children.toArray(children).filter(
    (c) => !(typeof c === "string" && c.trim() === ""),
  );
  const pregunta = isValidElement(primero)
    ? (primero as ReactElement<{ children?: ReactNode }>).props.children
    : primero;
  return (
    <details className="gc-faq group not-prose py-1">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-4 text-[15px] font-semibold leading-snug text-cream transition-colors hover:text-emphasis [&::-webkit-details-marker]:hidden">
        <span>{pregunta}</span>
        <span aria-hidden="true" className="mt-0.5 shrink-0 text-cream/45 transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="gc-faq-respuesta pb-5 pr-8">{resto}</div>
    </details>
  );
}

/* Contenedor del bloque de preguntas: los mismos filetes que el bloque del pie. */
export function ListaPreguntas({ children }: { children: ReactNode }) {
  return <div className="not-prose mt-6 divide-y divide-cream/10 border-y border-cream/10">{children}</div>;
}

/** Convierte el apartado «## Preguntas frecuentes…» del Markdown: cada
 *  «### pregunta» y su respuesta pasan a <PreguntaFrecuente>, dentro de un
 *  <ListaPreguntas>. El apartado termina en el siguiente «## » o al final.
 *  Lo que haya antes de la primera pregunta (una introducción) se respeta. */
export function preguntasDesplegables(md: string): string {
  const lineas = md.split("\n");
  const salida: string[] = [];
  let enApartado = false;
  let abierta = false;
  let enLista = false;
  let enCodigo = false;
  const cerrarPregunta = () => {
    if (abierta) {
      salida.push("", "</PreguntaFrecuente>", "");
      abierta = false;
    }
  };
  const cerrarLista = () => {
    cerrarPregunta();
    if (enLista) {
      salida.push("</ListaPreguntas>", "");
      enLista = false;
    }
  };
  for (const linea of lineas) {
    if (/^\s*(```|~~~)/.test(linea)) enCodigo = !enCodigo;
    if (!enCodigo && /^##\s/.test(linea)) {
      cerrarLista();
      enApartado = /^##\s+(Preguntas|Frequently asked|FAQ)/i.test(linea);
      salida.push(linea);
      continue;
    }
    /* Una línea divisoria o un «📌 Lea también» cierran el bloque: lo que
       sigue (notas sobre la firma, enlaces a otras guías) queda fuera de la
       última respuesta. */
    if (!enCodigo && enLista && (linea.trim() === "---" || linea.trimStart().startsWith("📌"))) {
      cerrarLista();
      enApartado = false;
      salida.push(linea);
      continue;
    }
    const pregunta = !enCodigo && enApartado ? /^###\s+(.+?)\s*$/.exec(linea) : null;
    if (pregunta) {
      cerrarPregunta();
      if (!enLista) {
        salida.push("", "<ListaPreguntas>", "");
        enLista = true;
      }
      salida.push("<PreguntaFrecuente>", "", linea, "");
      abierta = true;
      continue;
    }
    salida.push(linea);
  }
  cerrarLista();
  return salida.join("\n");
}

/** Las preguntas que la guía muestra en su apartado «## Preguntas
 *  frecuentes», con la respuesta en texto plano, para el FAQPage: el marcado
 *  tiene que decir lo mismo que la página (informe 23-11, M-S5). Recorre el
 *  Markdown con las mismas reglas que preguntasDesplegables. */
export function preguntasDelCuerpo(md: string): { question: string; answer: string }[] {
  const plano = (t: string) =>
    t
      .replace(/<[^>]+>/g, "")
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/(\*\*|__)(.+?)\1/g, "$2")
      .replace(/(\*|_)(.+?)\1/g, "$2")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/^\s*>\s?/gm, "")
      .replace(/^\s*[-*+]\s+/gm, "")
      .replace(/\s+/g, " ")
      .trim();
  const salida: { question: string; answer: string }[] = [];
  let enApartado = false;
  let enCodigo = false;
  let actual: { question: string; lineas: string[] } | null = null;
  const cerrar = () => {
    if (actual) {
      const answer = plano(actual.lineas.join("\n"));
      if (answer) salida.push({ question: plano(actual.question), answer });
      actual = null;
    }
  };
  for (const linea of md.split("\n")) {
    if (/^\s*(```|~~~)/.test(linea)) enCodigo = !enCodigo;
    if (enCodigo) continue;
    if (/^##\s/.test(linea)) {
      cerrar();
      enApartado = /^##\s+(Preguntas|Frequently asked|FAQ)/i.test(linea);
      continue;
    }
    if (!enApartado) continue;
    if (actual && (linea.trim() === "---" || linea.trimStart().startsWith("📌"))) {
      cerrar();
      enApartado = false;
      continue;
    }
    const pregunta = /^###\s+(.+?)\s*$/.exec(linea);
    if (pregunta) {
      cerrar();
      actual = { question: pregunta[1], lineas: [] };
      continue;
    }
    if (actual) actual.lineas.push(linea);
  }
  cerrar();
  return salida;
}
