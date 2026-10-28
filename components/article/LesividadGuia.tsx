/* Figuras de la guía «Proceso de lesividad en Costa Rica». Normas cotejadas
   en el texto vigente (bases GC y SINALEVI); votos y dictámenes leídos en la
   copia local de Nexus y SINALEVI el 28-10-2026. */

import { RunningHead } from "@/components/ui/RunningHead";

type Fila = { quien: string; declara: string; fuente: string };

const ORGANOS: Fila[] = [
  {
    quien: "Un ministerio",
    declara: "El ministro del ramo. La competencia es indelegable; solo puede delegarse la firma de una decisión que conste tomada por el ministro.",
    fuente: "CPCA, art. 34.1; LGAP, art. 89.3; PGR, C-005-2024",
  },
  {
    quien: "Un órgano desconcentrado del Poder Ejecutivo, aunque tenga personalidad jurídica instrumental",
    declara: "El ministro al que pertenece. El órgano puede litigar, pero no declarar lesivos sus propios actos.",
    fuente: "CPCA, art. 34.4; PGR, OJ-137-2014 y C-071-2016",
  },
  {
    quien: "Dos o más ministerios, o un ministerio con un ente descentralizado",
    declara: "El Consejo de Gobierno. No puede hacerlo un ministro de distinto ramo.",
    fuente: "CPCA, art. 34.3; Casación, 1-F-TC-2012; Sala Primera, 135-F-S1-2026",
  },
  {
    quien: "Una institución autónoma",
    declara: "Su órgano superior, de ordinario la junta o el consejo directivo. En la CCSS, la Junta Directiva y no la gerencia.",
    fuente: "Sala Primera, 94-F-S1-2011; PGR, C-227-2016",
  },
  {
    quien: "Una municipalidad",
    declara: "El Concejo Municipal, nunca el alcalde. A la alcaldía le toca ejecutar el acuerdo y asegurar que se presente la demanda.",
    fuente: "PGR, C-259-2016 y C-247-2012",
  },
  {
    quien: "La Administración Tributaria, frente a un fallo del Tribunal Fiscal Administrativo",
    declara: "Necesita la autorización escrita del Ministerio de Hacienda, previo informe motivado y dictamen del órgano legal.",
    fuente: "Código de Normas y Procedimientos Tributarios, art. 165",
  },
];

export function QuienDeclaraLesividad() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-quien-declara">
      <header className="gc-fig-head">
        <RunningHead title="Competencia" locator="Figura 1" />
        <p id="fig-quien-declara" className="gc-fig-title">
          Quién declara la lesividad, según quién dictó el acto
        </p>
        <p className="gc-fig-lead">
          La ley la confía al superior jerárquico supremo. Si la declara otro órgano, la demanda es inadmisible.
        </p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Acto dictado por</th>
                <th scope="col">Declara la lesividad</th>
              </tr>
            </thead>
            <tbody>
              {ORGANOS.map((f) => (
                <tr key={f.quien}>
                  <td className="gc-recurso">{f.quien}</td>
                  <td>
                    {f.declara} <span className="gc-fig-ref">{f.fuente}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        En las universidades públicas y en el Poder Judicial, la Procuraduría identifica el órgano superior supremo a
        propósito de la anulación del artículo 173 de la LGAP: el Consejo Universitario, salvo que el estatuto disponga
        otra cosa para ciertas materias, y la Corte Plena (C-206-2014, C-106-2022 y C-293-2014).
      </p>
      <p className="gc-fig-source">
        <span>Fuente:</span> Código Procesal Contencioso-Administrativo, art. 34; Sala Primera y Tribunal de Casación
        Contencioso-Administrativo; Procuraduría General de la República, dictámenes y opiniones jurídicas citados.
      </p>
    </figure>
  );
}

type Cambio = { aspecto: string; antes: string; ahora: string };

const CAMBIOS: Cambio[] = [
  {
    aspecto: "Plazo para declarar la lesividad",
    antes: "Cuatro años desde que se dictó el acto (art. 35.1).",
    ahora: "Un año desde el día siguiente al dictado; con nulidad absoluta, mientras perduren sus efectos, y la sentencia anula solo hacia el futuro (art. 34.1).",
  },
  {
    aspecto: "Dominio público",
    antes: "Sin regla propia.",
    ahora: "La lesividad que tutela bienes del dominio público no está sujeta a plazo (art. 34.2).",
  },
  {
    aspecto: "Plazo para demandar",
    antes: "Dos meses desde el día siguiente a la declaratoria (art. 37.3).",
    ahora: "Un año desde el día siguiente a la firmeza de la declaratoria (art. 39.1.e).",
  },
  {
    aspecto: "Quién declara",
    antes: "El órgano superior de la jerarquía administrativa que dictó el acto (art. 10.4).",
    ahora: "El superior jerárquico supremo; el Consejo de Gobierno en actos de varios ministerios o de un ministerio con un ente descentralizado (arts. 10.5 y 34.3-4).",
  },
  {
    aspecto: "Efectos de la sentencia",
    antes: "Sin regla en la ley.",
    ahora: "Retroactivos si la lesividad se tramitó dentro del año del art. 34; solo hacia el futuro en la nulidad absoluta de efectos continuados (arts. 39.2 y 34.1).",
  },
  {
    aspecto: "Forma de iniciar el proceso",
    antes: "Demanda directa con el expediente y la certificación de la declaratoria (art. 36.4).",
    ahora: "La demanda común del Código, sin escrito de interposición previo.",
  },
];

export function LesividadAntesYAhora() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-antes-ahora">
      <header className="gc-fig-head">
        <RunningHead title="Reforma de 2008" locator="Figura 2" />
        <p id="fig-antes-ahora" className="gc-fig-title">
          La lesividad antes y después del Código Procesal Contencioso-Administrativo
        </p>
        <p className="gc-fig-lead">El Código acortó el plazo para declarar y alargó el plazo para demandar.</p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Aspecto</th>
                <th scope="col">Ley Reguladora (1966-2007)</th>
                <th scope="col">CPCA (desde 2008)</th>
              </tr>
            </thead>
            <tbody>
              {CAMBIOS.map((c) => (
                <tr key={c.aspecto}>
                  <td className="gc-recurso">{c.aspecto}</td>
                  <td>{c.antes}</td>
                  <td>{c.ahora}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-source">
        <span>Fuente:</span> Ley Reguladora de la Jurisdicción Contencioso-Administrativa, Ley N.° 3667, en su última
        versión; Código Procesal Contencioso-Administrativo, Ley N.° 8508.
      </p>
    </figure>
  );
}
