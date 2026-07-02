/* Tabla comparativa de los recursos en contratación pública (objeción,
   apelación y revocatoria) bajo la Ley N.° 9986. Reutiliza los estilos
   .gc-comparativa de app/globals.css (mismo patrón que ComparativaViasAmparo).
   Sin encabezado propio: el título de sección lo aporta el "##" del artículo. */

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

export function ComparativaRecursosContratacion() {
  return (
    <div className="gc-comparativa">
      <h3 className="gc-table-title">Contra el pliego de condiciones (cartel)</h3>
      <p className="gc-table-sub">
        Recurso de objeción — antes de la apertura de ofertas
      </p>

      <div className="gc-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Procedimiento</th>
              <th scope="col">Ante quién se presenta</th>
              <th scope="col">Plazo para objetar</th>
              <th scope="col">Efecto suspensivo</th>
              <th scope="col">Fundamento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="gc-recurso">Licitación mayor</td>
              <td>Contraloría General de la República, en el sistema digital unificado (SICOP).</td>
              <td className="gc-plazo">Ocho días hábiles siguientes a la publicación del pliego.</td>
              <td className="gc-patrocinio"><span className="gc-flag gc-flag--si">Automático</span></td>
              <td>
                <div className="gc-refs">
                  <span className="gc-ref"><LegalRefIcon />LGCP, arts. 95.a y 96</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="gc-recurso">Licitación menor</td>
              <td>La propia Administración licitante.</td>
              <td className="gc-plazo">Tres días hábiles siguientes a la comunicación del pliego.</td>
              <td className="gc-patrocinio"><span className="gc-flag gc-flag--si">Automático</span></td>
              <td>
                <div className="gc-refs">
                  <span className="gc-ref"><LegalRefIcon />LGCP, arts. 95.b y 96</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="gc-recurso">Licitación reducida</td>
              <td>La propia Administración licitante.</td>
              <td className="gc-plazo">Dos días hábiles siguientes a la comunicación del pliego.</td>
              <td className="gc-patrocinio"><span className="gc-flag gc-flag--si">Automático</span></td>
              <td>
                <div className="gc-refs">
                  <span className="gc-ref"><LegalRefIcon />LGCP, art. 63.n</span>
                  <span className="gc-ref"><LegalRefIcon />RLGCP, art. 255</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="gc-table-title">Contra el acto final (adjudicación, desierto o infructuoso)</h3>
      <p className="gc-table-sub">
        Recurso de apelación o de revocatoria — según el tipo de procedimiento
      </p>

      <div className="gc-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Recurso</th>
              <th scope="col">Cuándo procede y ante quién</th>
              <th scope="col">Plazo para recurrir</th>
              <th scope="col">Efecto suspensivo</th>
              <th scope="col">Fundamento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="gc-recurso">Apelación</td>
              <td>
                Contra el acto final de la licitación mayor, ante la Contraloría
                General de la República. También en compras de la CCSS cuando la
                adjudicación alcanza el umbral de la licitación mayor.
              </td>
              <td className="gc-plazo">Ocho días hábiles siguientes a la comunicación del acto final.</td>
              <td className="gc-patrocinio"><span className="gc-flag gc-flag--si">Automático</span></td>
              <td>
                <div className="gc-refs">
                  <span className="gc-ref"><LegalRefIcon />LGCP, arts. 97 y 98</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="gc-recurso">Revocatoria</td>
              <td>
                Contra el acto final de la licitación menor, la subasta inversa
                electrónica y las nuevas adjudicaciones, ante el órgano que dictó
                el acto. Única instancia.
              </td>
              <td className="gc-plazo">Cinco días hábiles siguientes a la comunicación del acto final.</td>
              <td className="gc-patrocinio"><span className="gc-flag gc-flag--no">Sin regla expresa</span></td>
              <td>
                <div className="gc-refs">
                  <span className="gc-ref"><LegalRefIcon />LGCP, art. 99</span>
                  <span className="gc-ref"><LegalRefIcon />RLGCP, art. 270</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="gc-recurso">Revocatoria en licitación reducida</td>
              <td>
                Contra el acto final de la licitación reducida, ante la
                Administración que promovió el concurso.
              </td>
              <td className="gc-plazo">Dos días hábiles siguientes a la notificación del acto final.</td>
              <td className="gc-patrocinio"><span className="gc-flag gc-flag--no">Sin regla expresa</span></td>
              <td>
                <div className="gc-refs">
                  <span className="gc-ref"><LegalRefIcon />LGCP, art. 63.l</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="gc-acronyms">
        <b>LGCP</b> — Ley General de Contratación Pública (Ley N.° 9986).{" "}
        <b>RLGCP</b> — Reglamento a la Ley General de Contratación Pública
        (Decreto Ejecutivo N.° 43808-H).
      </p>

      <aside className="gc-closing">
        <p>
          Aunque la ley no atribuye a la revocatoria un efecto suspensivo
          expreso, mientras el recurso esté pendiente el acto final no adquiere
          firmeza — y sin acto firme el contrato no se perfecciona (art. 100
          LGCP). Presentar el recurso equivocado, o presentarlo tarde, conduce
          al <em>rechazo de plano</em> por inadmisible (art. 87 LGCP) y a la
          preclusión del derecho a impugnar.
        </p>
      </aside>
    </div>
  );
}
