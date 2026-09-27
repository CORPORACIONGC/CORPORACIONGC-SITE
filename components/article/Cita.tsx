/* Cita literal con su crédito debajo, al modo de una revista jurídica:
   el texto citado en el color del cuerpo, un filete fino a la izquierda y la
   fuente en una línea aparte. Uso en Markdown:
   <Cita fuente="Sala Primera" enlace="53-F-S1-2010" href="…" detalle="considerando IV">
   texto citado
   </Cita> */

const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;

export function Cita({
  children,
  fuente,
  enlace,
  href,
  detalle,
}: {
  children: React.ReactNode;
  fuente: string;
  enlace?: string;
  href?: string;
  detalle?: string;
}) {
  return (
    <figure className="gc-cita">
      <blockquote>{children}</blockquote>
      <figcaption>
        {fuente}
        {enlace && (
          <>
            {", "}
            {href ? (
              <a href={href} {...(href.startsWith("http") ? EXT : {})}>
                {enlace}
              </a>
            ) : (
              enlace
            )}
          </>
        )}
        {detalle && <>{`, ${detalle}`}</>}
      </figcaption>
    </figure>
  );
}
