/* Figura de plazos de la guía de responsabilidad patrimonial. Sigue el diseño
   de la figura de plazos de la guía del CPCA (gc-fig-tabla apilada en móvil):
   dos columnas, qué se reclama y el plazo con su cómputo y su norma. */

import { RunningHead } from "@/components/ui/RunningHead";

const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;
const LGAP = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1";
const CPCA = "/articulos/que-es-el-cpca-costa-rica";

type Fila = { que: string; plazo: string; computo: string; norma: string; href: string; externo?: boolean };

const FILAS: Fila[] = [
  { que: "Indemnización a la Administración", plazo: "Cuatro años, de prescripción", computo: "Desde el hecho que motiva la responsabilidad, conocido por la víctima.", norma: "LGAP, art. 198", href: LGAP, externo: true },
  { que: "Indemnización a un servidor público", plazo: "Cuatro años, de prescripción", computo: "Desde el conocimiento del hecho dañoso.", norma: "LGAP, art. 198", href: LGAP, externo: true },
  { que: "Daños a una persona menor de edad", plazo: "Cuatro años, de prescripción", computo: "Desde que la persona afectada alcanza la mayoría de edad.", norma: "LGAP, art. 198", href: LGAP, externo: true },
  { que: "Anulación del acto que causó el daño", plazo: "Un año, de caducidad", computo: "Desde la notificación, la publicación o el cese de la actuación material.", norma: "CPCA, art. 39", href: `${CPCA}#art-39` },
  { que: "Anulación de un acto absolutamente nulo o de una omisión", plazo: "Mientras subsistan sus efectos", computo: "Luego, un año desde el cese de los efectos.", norma: "CPCA, art. 40", href: `${CPCA}#art-40` },
  { que: "Ejecución de la indemnización ordenada en un amparo", plazo: "Cuatro años, de prescripción", computo: "Desde la firmeza de la sentencia constitucional.", norma: "CPCA, art. 179", href: `${CPCA}#art-179` },
  { que: "Recuperación de lo pagado por el Estado contra su servidor", plazo: "Un año", computo: "Desde la firmeza de la sentencia que fijó la suma.", norma: "LGAP, art. 208", href: LGAP, externo: true },
];

export function PlazosResponsabilidad() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-plazos-responsabilidad">
      <header className="gc-fig-head">
        <RunningHead title="Plazos" locator="Figura 1" />
        <p id="fig-plazos-responsabilidad" className="gc-fig-title">
          Los plazos de la responsabilidad patrimonial
        </p>
        <p className="gc-fig-lead">Qué plazo rige cada pretensión y desde cuándo corre.</p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Qué se reclama</th>
                <th scope="col">Plazo y cómputo</th>
              </tr>
            </thead>
            <tbody>
              {FILAS.map((f) => (
                <tr key={f.que}>
                  <td className="gc-recurso">{f.que}</td>
                  <td>
                    <strong>{f.plazo}.</strong> {f.computo}{" "}
                    <span className="gc-fig-ref">
                      <a href={f.href} {...(f.externo ? EXT : {})}>
                        {f.norma}
                      </a>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        El artículo 198 no regula los daños continuados: su cómputo lo fijó la Sala Primera, que lo cuenta desde el cese
        de la conducta lesiva.
      </p>
      <p className="gc-fig-source">
        <span>Fuente:</span> Ley General de la Administración Pública, arts. 198 y 208, texto vigente en{" "}
        <a href={LGAP} {...EXT}>
          SINALEVI
        </a>
        ; Código Procesal Contencioso-Administrativo, arts. 39, 40 y 179.
      </p>
    </figure>
  );
}
