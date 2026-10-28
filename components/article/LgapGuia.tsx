/* Figuras de la guía «Ley General de la Administración Pública: texto
   vigente, artículos clave y su historia legislativa». Mismo lenguaje
   editorial que la guía del CPCA (bloque .gc-fig de app/globals.css). Los
   textos de la ley se cotejaron con SINALEVI el 28-10-2026; la
   investigación está en ~/PAGINA GC/guia-lgap-2026-10-28. */

import { RunningHead } from "@/components/ui/RunningHead";
import { LGAP_FICHA, LGAP_REFORMAS } from "@/lib/lgap";

const ART = (n: string) => `#art-${n}`;
const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;

function FigHead({ id, n, kicker, title, lead }: { id: string; n?: number; kicker?: string; title: string; lead?: string }) {
  return (
    <header className="gc-fig-head">
      {kicker && <RunningHead title={kicker} locator={n ? `Figura ${n}` : undefined} />}
      <p id={id} className="gc-fig-title">
        {title}
      </p>
      {lead && <p className="gc-fig-lead">{lead}</p>}
    </header>
  );
}

function FigSource({ children }: { children: React.ReactNode }) {
  return (
    <p className="gc-fig-source">
      <span>Fuente:</span> {children}
    </p>
  );
}

/** «1982-09-14» → «14-09-1982». */
const fecha = (iso: string) => iso.split("-").reverse().join("-");

const articulos = (arts: string[]) =>
  arts.length === 1 ? `art. ${arts[0]}` : `arts. ${arts.slice(0, -1).join(", ")} y ${arts[arts.length - 1]}`;

/* ── Las reformas de la ley ─────────────────────────────────────────── */

export function ReformasLgap() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-reformas-lgap">
      <FigHead
        id="fig-reformas-lgap"
        title="Las reformas de la ley desde 1978"
        lead="Veintiocho leyes han tocado la Ley General de la Administración Pública, y la Sala Constitucional interpretó dos de sus artículos sin anular ninguno. El texto que se publica en esta página las incorpora todas."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Norma</th>
                <th scope="col">Qué cambió</th>
              </tr>
            </thead>
            <tbody>
              {LGAP_REFORMAS.map((r) => (
                <tr key={r.norma}>
                  <td className="gc-recurso">
                    {r.sinalevi ? (
                      <a href={r.sinalevi} {...EXT}>
                        {r.norma.replace(/^Ley /, "Ley N.° ")}
                      </a>
                    ) : (
                      r.norma.replace(/^Ley /, "Ley N.° ")
                    )}
                    <span className="gc-fig-ref">{fecha(r.fecha)}</span>
                  </td>
                  <td>
                    {r.cambio}{" "}
                    <span className="gc-fig-ref">
                      {r.articulos.length <= 6 ? articulos(r.articulos) : `${r.articulos.length} artículos`}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        La última reforma es la Ley N.° 10889, que adicionó al artículo 298 la inversión de la carga de la prueba a favor
        de las personas consumidoras. Cotejo con SINALEVI del 28 de octubre de 2026.
      </p>
      <FigSource>
        <a href={LGAP_FICHA.sinalevi} {...EXT}>
          SINALEVI, Ley N.° 6227
        </a>
        , historial de versiones y normativa que la afectó.
      </FigSource>
    </figure>
  );
}

/* ── Figura 1. Los plazos de la ley ─────────────────────────────────── */

const PLAZOS: { que: string; plazo: string; arts: string[] }[] = [
  {
    que: "Recurrir el acto final (revocatoria o apelación)",
    plazo: "Tres días desde la última comunicación del acto. Contra los demás actos recurribles, veinticuatro horas.",
    arts: ["346"],
  },
  {
    que: "Resolver los recursos",
    plazo: "Ocho días para la revocatoria, que puede reservarse para el acto final; ocho días para la apelación desde que el superior recibe el expediente.",
    arts: ["352"],
  },
  {
    que: "Recurso de revisión contra un acto final firme",
    plazo: "Un año desde la notificación, si hubo error de hecho manifiesto; tres meses desde que aparecen documentos esenciales; un año desde que se conoce la sentencia firme que declara la falsedad o el delito.",
    arts: ["353", "354"],
  },
  {
    que: "Concluir el procedimiento administrativo",
    plazo: "Dos meses desde su inicio o desde la petición del administrado, y un mes para resolver el recurso contra el acto definitivo. Vencidos sin respuesta, la petición se tiene por rechazada para recurrir o demandar.",
    arts: ["261"],
  },
  {
    que: "Actos de trámite de la Administración",
    plazo: "Tres días para los de mero trámite y las notificaciones; diez días para dictámenes y peritajes; tres días para informes no técnicos.",
    arts: ["262"],
  },
  {
    que: "Trámites a cargo del interesado",
    plazo: "Diez días, salvo que la ley fije otro.",
    arts: ["264"],
  },
  {
    que: "Citar a la comparecencia oral del procedimiento ordinario",
    plazo: "Quince días de anticipación.",
    arts: ["311"],
  },
  {
    que: "Dictar el acto final después de la comparecencia",
    plazo: "Quince días desde la comparecencia; no puede haber más de dos comparecencias.",
    arts: ["319"],
  },
  {
    que: "Silencio positivo",
    plazo: "Un mes desde que el órgano recibe la solicitud de permiso, licencia o autorización con los requisitos legales.",
    arts: ["330", "331"],
  },
  {
    que: "Caducidad del procedimiento",
    plazo: "Paralización por más de seis meses por causa imputable exclusivamente a quien lo promovió o a la Administración que lo inició.",
    arts: ["340"],
  },
  {
    que: "Alegar una notificación defectuosa",
    plazo: "Diez días desde que se practicó, si el defecto produce nulidad relativa; si no se alega, queda convalidada.",
    arts: ["247"],
  },
  {
    que: "Notificación por publicación",
    plazo: "Tres publicaciones consecutivas en La Gaceta; se tiene por hecha cinco días después de la última.",
    arts: ["241"],
  },
  {
    que: "Anular de oficio un acto con nulidad absoluta, evidente y manifiesta",
    plazo: "Un año desde que se adoptó el acto, salvo que sus efectos perduren; exige dictamen favorable de la Procuraduría o de la Contraloría.",
    arts: ["173"],
  },
  {
    que: "Reclamar la responsabilidad patrimonial",
    plazo: "Cuatro años desde el hecho, contra la Administración; cuatro años desde que se conoce el daño, contra el servidor. Para personas menores de edad, el plazo corre desde la mayoría de edad.",
    arts: ["198"],
  },
  {
    que: "Queja por defectos de tramitación",
    plazo: "En cualquier momento; la resolución se notifica dentro de los quince días siguientes.",
    arts: ["358"],
  },
];

export function PlazosLgap() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-plazos-lgap">
      <FigHead
        id="fig-plazos-lgap"
        n={1}
        kicker="Plazos"
        title="Los plazos de la Ley General de la Administración Pública"
        lead="Cada artículo enlaza con su texto vigente en esta misma página."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Qué</th>
                <th scope="col">Plazo</th>
              </tr>
            </thead>
            <tbody>
              {PLAZOS.map((p) => (
                <tr key={p.que}>
                  <td className="gc-recurso">{p.que}</td>
                  <td>
                    {p.plazo}{" "}
                    <span className="gc-fig-ref">
                      {p.arts.map((a, i) => (
                        <span key={a}>
                          {i > 0 && ", "}
                          <a href={ART(a)}>art. {a}</a>
                        </span>
                      ))}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        Para los particulares, los plazos por días son siempre de días hábiles; para la Administración incluyen los
        inhábiles (artículo 256). Las leyes especiales, como el Código Municipal o la Ley General de Contratación
        Pública, fijan sus propios plazos.
      </p>
      <FigSource>
        Ley General de la Administración Pública (Ley N.° 6227), texto vigente en{" "}
        <a href={LGAP_FICHA.sinalevi} {...EXT}>
          SINALEVI
        </a>
        .
      </FigSource>
    </figure>
  );
}
