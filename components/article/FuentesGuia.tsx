/* Bloque «Fuentes» de las guías: el mismo formato que las de setiembre
   (FuentesAgotamiento, FuentesNulidad…), alimentado con los datos de
   lib/fuentes-guias/<slug>.ts. */

import { FUENTES_GUIAS } from "@/lib/fuentes-guias";
import type { Criterio, Fuente } from "@/lib/fuentes-guias/tipos";

const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;

function Grupo({ titulo, items }: { titulo: string; items?: Fuente[] }) {
  if (!items?.length) return null;
  return (
    <section className="gc-juris-grupo">
      <span className="gc-fig-label">{titulo}</span>
      <ol>
        {items.map((f) => (
          <li key={f.titulo + f.detalle} className="gc-juris-item gc-juris-item--simple">
            <span className="gc-juris-id">
              <b>
                {f.href ? (
                  <a href={f.href} {...EXT}>
                    {f.titulo}
                  </a>
                ) : (
                  f.titulo
                )}
              </b>
              <span className="gc-juris-org">{f.detalle}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Resoluciones({ titulo, items }: { titulo: string; items?: Criterio[] }) {
  if (!items?.length) return null;
  return (
    <section className="gc-juris-grupo">
      <span className="gc-fig-label">{titulo}</span>
      <ol>
        {items.map((c) => (
          <li key={c.numero + c.organo} className="gc-juris-item">
            <span className="gc-juris-id">
              <b>
                <a href={c.href} {...EXT}>
                  {c.numero}
                </a>
              </b>
              <span className="gc-juris-org">{c.organo}</span>
              <span className="gc-juris-fecha">{c.fecha}</span>
            </span>
            <span className="gc-juris-criterio">
              <span className="gc-juris-tema">{c.tema}</span>
              {c.criterio}
              {c.gc && <span className="gc-juris-redacta">Redactó el magistrado González Camacho.</span>}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

const ROTULOS = {
  es: { normas: "Normativa", juris: "Jurisprudencia", cgr: "Contraloría General de la República", pgr: "Procuraduría General de la República" },
  en: { normas: "Legislation", juris: "Case law", cgr: "Office of the Comptroller General", pgr: "Office of the Attorney General" },
};

export function FuentesGuia({ slug, lang = "es" }: { slug: string; lang?: "es" | "en" }) {
  const f = FUENTES_GUIAS[slug];
  if (!f) return null;
  const r = ROTULOS[lang];
  return (
    <div className="gc-fig gc-biblio">
      <Grupo titulo={r.normas} items={f.normas} />
      <Resoluciones titulo={r.juris} items={f.jurisprudencia} />
      <Resoluciones titulo={r.cgr} items={f.contraloria} />
      <Grupo titulo={r.pgr} items={f.procuraduria} />
      {f.otros?.map((g) => <Grupo key={g.titulo} titulo={g.titulo} items={g.items} />)}
      <p className="gc-fig-source">{f.pie}</p>
    </div>
  );
}
