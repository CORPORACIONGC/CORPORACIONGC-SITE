/* Tabla comparativa de vías procesales (amparo, hábeas corpus, contencioso…).
   Diseño estilizado que reemplaza las tablas Markdown dentro del artículo.
   Sin encabezado propio: el título de sección lo aporta el "##" del artículo.
   Estilos en app/globals.css (.gc-comparativa). */

function LegalRefIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h6a3 3 0 0 1 3 3v13" />
      <path d="M20 4h-6a3 3 0 0 0-3 3v13" />
      <path d="M4 4v15h6" />
      <path d="M20 4v15h-6" />
    </svg>
  );
}

export function ComparativaViasAmparo() {
  return (
    <div className="gc-comparativa">
      <h3 className="gc-table-title">Vías constitucionales</h3>
      <p className="gc-table-sub">Competencia de la Sala Constitucional</p>

      <div className="gc-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Recurso</th>
              <th scope="col">Procedencia</th>
              <th scope="col">Plazo</th>
              <th scope="col">Patrocinio letrado</th>
              <th scope="col">Fundamento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="gc-recurso">Amparo</td>
              <td>Vulneración de derechos fundamentales por acto, omisión o vía de hecho.</td>
              <td className="gc-plazo">Dos meses desde el cese de los efectos; no corre mientras subsista la lesión.</td>
              <td className="gc-patrocinio"><span className="gc-flag gc-flag--no">No requerido</span></td>
              <td>
                <div className="gc-refs">
                  <span className="gc-ref"><LegalRefIcon />Constitución, art. 48</span>
                  <span className="gc-ref"><LegalRefIcon />LJC, arts. 29–72</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="gc-recurso">Hábeas corpus</td>
              <td>Restricción a la libertad e integridad personales o a la libertad de tránsito.</td>
              <td className="gc-plazo">No sujeto a plazo.</td>
              <td className="gc-patrocinio"><span className="gc-flag gc-flag--no">No requerido</span></td>
              <td>
                <div className="gc-refs">
                  <span className="gc-ref"><LegalRefIcon />Constitución, art. 48</span>
                  <span className="gc-ref"><LegalRefIcon />LJC, arts. 15–28</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="gc-recurso">Acción de inconstitucionalidad</td>
              <td>Norma contraria a la Constitución o a instrumentos internacionales de derechos humanos.</td>
              <td className="gc-plazo">No sujeta a plazo. Requiere asunto previo, salvo en casos de intereses difusos.</td>
              <td className="gc-patrocinio"><span className="gc-flag gc-flag--si">Requerido</span></td>
              <td>
                <div className="gc-refs">
                  <span className="gc-ref"><LegalRefIcon />LJC, arts. 73–95</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="gc-table-title">Vías administrativas y contencioso-administrativas</h3>
      <p className="gc-table-sub">Sede administrativa y Jurisdicción Contencioso-Administrativa</p>

      <div className="gc-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Recurso</th>
              <th scope="col">Procedencia</th>
              <th scope="col">Plazo</th>
              <th scope="col">Patrocinio letrado</th>
              <th scope="col">Fundamento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="gc-recurso">Revocatoria y apelación en subsidio</td>
              <td>Impugnar un acto administrativo final en sede de la propia Administración.</td>
              <td className="gc-plazo">Tres días hábiles desde la notificación. Veinticuatro horas para actos de mero trámite.</td>
              <td className="gc-patrocinio"><span className="gc-flag gc-flag--no">No requerido</span></td>
              <td>
                <div className="gc-refs">
                  <span className="gc-ref"><LegalRefIcon />LGAP, arts. 342–352</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="gc-recurso">Demanda contencioso-administrativa</td>
              <td>Impugnar conducta de la Administración —acto, omisión o vía de hecho— y exigir reparación.</td>
              <td className="gc-plazo">Un año desde la notificación o desde el cese de los efectos.</td>
              <td className="gc-patrocinio"><span className="gc-flag gc-flag--si">Requerido</span></td>
              <td>
                <div className="gc-refs">
                  <span className="gc-ref"><LegalRefIcon />CPCA, arts. 39–40</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="gc-acronyms">
        <b>LJC</b> — Ley de la Jurisdicción Constitucional (Ley N.° 7135).{" "}
        <b>LGAP</b> — Ley General de la Administración Pública (Ley N.° 6227).{" "}
        <b>CPCA</b> — Código Procesal Contencioso Administrativo (Ley N.° 8508).
      </p>

      <aside className="gc-closing">
        <p>
          Si su situación admite varias vías —por ejemplo, una sanción
          administrativa que también vulnera el debido proceso—, la elección
          estratégica entre amparo y contencioso{" "}
          <em>—o ambos en paralelo—</em> puede determinar la velocidad y el
          alcance de la reparación.
        </p>
      </aside>
    </div>
  );
}
