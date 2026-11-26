/* Un grupo de la sección «Fuentes» de las guías (normativa, jurisprudencia,
   Procuraduría, Contraloría, antecedentes…), plegable (D-01, 25-11-2026).
   Sale abierto en el HTML, de modo que en escritorio y sin JavaScript se lee
   completo; en el teléfono PliegueFuentes lo cierra al cargar y el lector
   despliega el grupo que busca. El rótulo del grupo es el <summary>, con los
   mismos estilos de la etiqueta de figura (app/globals.css,
   .gc-fuentes-grupo). La guía del CPCA (CpcaGuia.tsx), en medición hasta el
   09-12-2026, conserva su <section> sin plegar. */
export function GrupoFuentes({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <details className="gc-juris-grupo gc-fuentes-grupo" open>
      <summary className="gc-fig-label">{titulo}</summary>
      {children}
    </details>
  );
}
