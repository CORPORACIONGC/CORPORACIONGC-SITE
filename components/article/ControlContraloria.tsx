/* Figuras de la guía «El control de la Contraloría en la Asamblea: los
   proyectos 25.692 y 25.901». Mismo lenguaje editorial que las demás guías
   (.gc-fig de app/globals.css).
   Fuentes, cotejadas el 26-11-2026: artículo 184 de la Constitución (texto
   vigente); proyecto 25.692, Alcance 105 a La Gaceta 151 del 12-08-2026;
   proyecto 25.901, Alcance 153 a La Gaceta 218 del 17-11-2026; votos de la
   Sala Constitucional 2024-021375 y 2024-028774 (textos de los proyectos
   24.364 y 24.467 transcritos en ellos). */

import { RunningHead } from "@/components/ui/RunningHead";

const ALCANCE_105 = "https://www.imprentanacional.go.cr/pub/2026/08/12/ALCA105_12_08_2026.pdf";
const ALCANCE_153 = "https://www.imprentanacional.go.cr/pub/2026/11/17/ALCA153_17_11_2026.pdf";
const CONSTITUCION = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1";
const VOTO_21375 = "https://nexuspj.poder-judicial.go.cr/document/sen-1-0007-1250313";
const VOTO_28774 = "https://nexuspj.poder-judicial.go.cr/document/sen-1-0007-1264836";
const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;

function FigHead({ id, n, kicker, title, lead }: { id: string; n: number; kicker: string; title: string; lead?: string }) {
  return (
    <header className="gc-fig-head">
      <RunningHead title={kicker} locator={`Figura ${n}`} />
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

/* ── Figura 1. El artículo 184 vigente frente al proyecto 25.692 ─────── */

const ART184: { tema: string; vigente: string; proyecto: string }[] = [
  {
    tema: "Visado del gasto",
    vigente: "Ninguna orden de pago contra los fondos del Estado sin el visado previo de la Contraloría.",
    proyecto: "Se suprime. Ningún pago requiere aprobación previa para surtir efectos jurídicos.",
  },
  {
    tema: "Refrendo",
    vigente: "No constituye obligación para el Estado la que no haya refrendado la Contraloría.",
    proyecto: "Se suprime. Ninguna obligación o contrato del Estado requiere refrendo previo.",
  },
  {
    tema: "Presupuestos de municipalidades e instituciones autónomas",
    vigente: "La Contraloría los examina, aprueba o imprueba, y fiscaliza su ejecución y liquidación.",
    proyecto: "Aprueba o imprueba la liquidación de los presupuestos del Estado, las instituciones y las municipalidades, ya no los presupuestos.",
  },
  {
    tema: "Tipo de control",
    vigente: "Previo y posterior, según el inciso.",
    proyecto: "«Predominantemente posterior», continuo o después de la ejecución. Revisiones preventivas o concomitantes solo en los supuestos de ley y «de carácter no vinculante».",
  },
  {
    tema: "Cuentas de instituciones y funcionarios",
    vigente: "Examinar, glosar y fenecer las cuentas de las instituciones del Estado y de los funcionarios públicos.",
    proyecto: "El inciso no se reproduce. Se agregan la fiscalización posterior de la gestión patrimonial y contractual y la evaluación de los sistemas de control interno.",
  },
  {
    tema: "Informe a la Asamblea",
    vigente: "Memoria anual del movimiento del año económico anterior, en la primera sesión ordinaria.",
    proyecto: "Informe anual sobre el resultado de su gestión y el estado de las finanzas públicas.",
  },
  {
    tema: "Responsabilidad",
    vigente: "No está en el artículo 184.",
    proyecto: "Jerarcas y funcionarios responden personal y patrimonialmente por los actos contrarios al ordenamiento o que dañen el erario.",
  },
  {
    tema: "Transición",
    vigente: "—",
    proyecto: "Dos años en que la Contraloría puede mantener controles previos en los casos que fije por resolución general, por riesgo fiscal.",
  },
];

export function Art184Comparado() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-art184-comparado">
      <FigHead
        id="fig-art184-comparado"
        n={1}
        kicker="Artículo 184"
        title="El artículo 184 vigente frente al proyecto 25.692"
        lead="La reforma suprime las tres formas de control previo que hoy tiene la Contraloría y deja su fiscalización, como regla, para después de la ejecución."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Constitución vigente</th>
                <th scope="col">Proyecto 25.692</th>
              </tr>
            </thead>
            <tbody>
              {ART184.map((c) => (
                <tr key={c.tema}>
                  <td className="gc-recurso">{c.tema}</td>
                  <td data-label="Vigente">{c.vigente}</td>
                  <td data-label="Proyecto 25.692">{c.proyecto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Cotejo propio del{" "}
        <a href={CONSTITUCION} {...EXT}>
          artículo 184 de la Constitución
        </a>{" "}
        y del texto del expediente 25.692, publicado en el{" "}
        <a href={ALCANCE_105} {...EXT}>
          Alcance 105 a La Gaceta 151 del 12 de agosto de 2026
        </a>
        .
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. El primer párrafo del artículo 12, tres textos ─────────── */

const TEXTOS: { proyecto: string; texto: string; sala: string }[] = [
  {
    proyecto: "Exp. 24.364 (primera «Ley Jaguar», 2024)",
    texto:
      "No podrá «sustituir, abarcar, interferir, ordenar, interpretar, advertir, recordar, ni recomendar» asuntos de la administración activa, ni sustituirla en sus funciones decisora, ejecutiva, resolutora, directiva u operativa, «ni podrá evaluar previamente la gestión administrativa». Suprimía la mención de órgano rector.",
    sala: "Voto 2024-021375: inconstitucional por mayoría, salvo los verbos «sustituir» y «abarcar».",
  },
  {
    proyecto: "Exp. 24.467 (segunda «Ley Jaguar», 2024)",
    texto:
      "Conserva la condición de órgano rector. «De conformidad con los artículos 11, 183 y 184 de la Constitución Política», no podrá «sustituir o abarcar» asuntos de la administración activa «en toda su extensión y en el ejercicio de sus modalidades de función decisora, ejecutiva, resolutora, directiva u operativa».",
    sala: "Voto 2024-028774: sin vicio por mayoría; un voto particular lo condiciona a que las potestades de la Contraloría queden incólumes y tres magistrados lo declaran inconstitucional.",
  },
  {
    proyecto: "Exp. 25.901 (2026)",
    texto:
      "Conserva la condición de órgano rector «de los fondos públicos» y remite al artículo 11 de la ley. Repite la prohibición de «sustituir o abarcar» con la misma enumeración de funciones y la cita del artículo 2 de la Ley General de Control Interno.",
    sala: "Sin consulta. Al 26-11-2026 no tiene trámite posterior a su publicación.",
  },
];

export function Articulo12TresTextos() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-articulo12-tres">
      <FigHead
        id="fig-articulo12-tres"
        n={2}
        kicker="Artículo 12 de la Ley 7428"
        title="Tres textos para el primer párrafo del artículo 12"
        lead="El proyecto 25.901 retoma la segunda versión, la que la Sala no declaró inconstitucional por mayoría."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Proyecto</th>
                <th scope="col">Qué decía el texto</th>
                <th scope="col">Sala Constitucional</th>
              </tr>
            </thead>
            <tbody>
              {TEXTOS.map((c) => (
                <tr key={c.proyecto}>
                  <td className="gc-recurso">{c.proyecto}</td>
                  <td data-label="Texto">{c.texto}</td>
                  <td data-label="Sala">{c.sala}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Textos de los expedientes 24.364 y 24.467 transcritos en los votos{" "}
        <a href={VOTO_21375} {...EXT}>
          2024-021375
        </a>{" "}
        y{" "}
        <a href={VOTO_28774} {...EXT}>
          2024-028774
        </a>{" "}
        de la Sala Constitucional; texto del expediente 25.901 en el{" "}
        <a href={ALCANCE_153} {...EXT}>
          Alcance 153 a La Gaceta 218 del 17 de noviembre de 2026
        </a>
        .
      </FigSource>
    </figure>
  );
}
