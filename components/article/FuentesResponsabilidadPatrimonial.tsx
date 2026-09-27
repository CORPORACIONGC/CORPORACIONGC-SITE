/* Fuentes de la guía «Responsabilidad patrimonial del Estado en Costa Rica».
   Mismo diseño que las fuentes de la guía del Tribunal (gc-biblio). Cada
   norma, voto y dictamen se verificó en las bases locales el 26-09-2026; los
   votos redactados por el magistrado González Camacho lo indican en el órgano.
   Las actas del expediente 15.134 no tienen copia pública en línea y se citan
   por sesión y folio. */

const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;
const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const PGR = (p1: number) =>
  `https://sinalevi.go.cr/ResultadosPronunciamiento/Informacion?param1=${p1}&param2=1&param3=1`;
const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;

type Fuente = { titulo: string; detalle: string; href?: string };
type Criterio = { numero: string; organo: string; fecha: string; tema: string; criterio: string; href?: string };

const GC = "Sala Primera · redacta González Camacho";

const NORMAS: Fuente[] = [
  { titulo: "Constitución Política", detalle: "Arts. 9, 41 y 45", href: SINALEVI(871, 147492) },
  { titulo: "Ley General de la Administración Pública", detalle: "Ley N.° 6227, arts. 190 a 213", href: SINALEVI(13231, 150737) },
  { titulo: "Reforma de varias leyes sobre la prescripción de daños causados a personas menores de edad", detalle: "Ley N.° 9057 de 2012, art. 3 (texto vigente del art. 198 LGAP)", href: SINALEVI(73438, 90113) },
  { titulo: "Código Procesal Contencioso-Administrativo", detalle: "Ley N.° 8508, arts. 2, 31, 39 a 42, 122 a 124, 166 a 172 y 179", href: SINALEVI(57436, 146091) },
  { titulo: "Código Procesal Penal", detalle: "Ley N.° 7594, art. 271", href: SINALEVI(41297, 151404) },
  { titulo: "Código Procesal Civil", detalle: "Ley N.° 9342, art. 36", href: SINALEVI(81360, 150778) },
];

const JURISPRUDENCIA: Criterio[] = [
  { numero: "Voto 584-F-2005", organo: GC, fecha: "11-08-2005", tema: "Funcionamiento anormal y omisión", criterio: "Define el funcionamiento anormal, afirma la responsabilidad por inactividad y trata la culpa de la víctima como eximente parcial.", href: NEXUS("sen-1-0004-880546") },
  { numero: "Voto 979-F-2006", organo: GC, fecha: "19-12-2006", tema: "Omisión de fiscalización", criterio: "La fiscalización municipal de obras es sustantiva y su omisión genera responsabilidad frente a terceros.", href: NEXUS("sen-1-0004-771198") },
  { numero: "Voto 213-F-S1-2008", organo: GC, fecha: "25-03-2008", tema: "Daño especial", criterio: "Responsabilidad por funcionamiento normal cuando la lesión es de intensidad excepcional.", href: NEXUS("sen-1-0004-764673") },
  { numero: "Voto 654-F-S1-2008", organo: GC, fecha: "26-09-2008", tema: "Estado-juez y prescripción", criterio: "Tres facetas de la responsabilidad por la administración de justicia; cuatro años de prescripción; el reclamo administrativo interrumpe.", href: NEXUS("sen-1-0004-764867") },
  { numero: "Voto 769-F-S1-2008", organo: GC, fecha: "13-11-2008", tema: "Caso fortuito", criterio: "El caso fortuito no exime en el régimen objetivo de la LGAP.", href: NEXUS("sen-1-0004-764966") },
  { numero: "Voto 206-F-S1-2009", organo: "Sala Primera", fecha: "26-02-2009", tema: "Daño moral de personas jurídicas", criterio: "La persona jurídica sufre daño moral objetivo y debe probarlo.", href: NEXUS("sen-1-0004-764969") },
  { numero: "Voto 211-F-S1-2009", organo: GC, fecha: "10-03-2009", tema: "Prisión preventiva", criterio: "La absolutoria por duda no genera el deber de indemnizar del art. 271 CPP.", href: NEXUS("sen-1-0004-764953") },
  { numero: "Voto 300-F-S1-2009", organo: GC, fecha: "26-03-2009", tema: "Causalidad adecuada", criterio: "Fórmula de la causalidad adecuada y carga de la prueba de las eximentes.", href: NEXUS("sen-1-0004-765018") },
  { numero: "Voto 53-F-S1-2010", organo: GC, fecha: "06-01-2010", tema: "Responsabilidad objetiva", criterio: "Esquema preeminentemente objetivo; las eximentes las prueba el demandado.", href: NEXUS("sen-1-0004-765253") },
  { numero: "Voto 615-F-S1-2010", organo: "Sala Primera", fecha: "20-05-2010", tema: "Prescripción", criterio: "El reclamo indemnizatorio se rige por el art. 198 LGAP; inicio e interrupción del plazo.", href: NEXUS("sen-1-0004-765501") },
  { numero: "Voto 687-F-S1-2010", organo: GC, fecha: "09-06-2010", tema: "Anormalidad en el resultado", criterio: "Normalidad y licitud; causalidad jurídica frente a la científica.", href: NEXUS("sen-1-0004-765536") },
  { numero: "Voto 502-F-S1-2011", organo: "Sala Primera", fecha: "14-04-2011", tema: "Inicio de la prescripción", criterio: "El plazo corre desde que la víctima puede ejercer su derecho.", href: NEXUS("sen-1-0004-766137") },
  { numero: "Voto 1102-F-S1-2011", organo: "Sala Primera", fecha: "08-09-2011", tema: "Daño especial", criterio: "Funcionamiento normal con anormalidad en el resultado (art. 194 LGAP).", href: NEXUS("sen-1-0004-766608") },
  { numero: "Voto 1261-F-S1-2011", organo: "Sala Primera", fecha: "27-09-2011", tema: "Daño continuado", criterio: "En el acto lesivo continuado, el plazo corre desde su cese; prescripción para lo resarcitorio.", href: NEXUS("sen-1-0004-766718") },
  { numero: "Voto 119-F-S1-2012", organo: GC, fecha: "02-02-2012", tema: "Daño moral", criterio: "Prueba in re ipsa y fijación prudencial del monto.", href: NEXUS("sen-1-0004-766903") },
  { numero: "Voto 191-F-S1-2012", organo: "Sala Primera", fecha: "16-02-2012", tema: "Elementos", criterio: "Hecho, daño, nexo de causalidad y criterio de imputación.", href: NEXUS("sen-1-0004-766960") },
  { numero: "Voto 1144-F-S1-2012", organo: GC, fecha: "13-09-2012", tema: "Intereses e indexación", criterio: "No se acumulan sobre la misma suma; el daño moral se fija a valor presente.", href: NEXUS("sen-1-0004-888107") },
  { numero: "Voto 7-F-S1-2013", organo: GC, fecha: "17-01-2013", tema: "Prueba del daño", criterio: "El lucro cesante se prueba; la presunción del daño moral cede ante lo probado.", href: NEXUS("sen-1-0004-767716") },
  { numero: "Voto 8-F-S1-2013", organo: GC, fecha: "17-01-2013", tema: "Cómputo de la prescripción", criterio: "Elemento objetivo y subjetivo en el inicio del plazo del art. 198 LGAP.", href: NEXUS("sen-1-0004-767649") },
  { numero: "Voto 2992-2013", organo: "Sala Constitucional", fecha: "05-03-2013", tema: "Art. 271 CPP", criterio: "Interpretación conforme de la «plena demostración de inocencia»." },
  { numero: "Voto 510-F-S1-2014", organo: "Sala Primera", fecha: "10-04-2014", tema: "Daño continuado", criterio: "Lo define el carácter constante y prolongado de la conducta que lo produce.", href: NEXUS("sen-1-0004-768601") },
  { numero: "Voto 836-F-S1-2016", organo: "Sala Primera", fecha: "11-08-2016", tema: "Acto instantáneo", criterio: "Consecuencias permanentes de un acto instantáneo; solo interrumpen las gestiones indemnizatorias.", href: NEXUS("sen-1-0004-770498") },
  { numero: "Voto 1228-F-S1-2017", organo: "Sala Primera", fecha: "19-10-2017", tema: "Estado legislador", criterio: "Exige daño especial y excluye el lucro cesante.", href: NEXUS("sen-1-0004-892356") },
  { numero: "Resolución 1778-A-S1-2021", organo: "Sala Primera", fecha: "12-10-2021", tema: "Prescripción y caducidad", criterio: "La pretensión solo indemnizatoria se rige por la prescripción del art. 41 CPCA y el art. 198 LGAP.", href: NEXUS("sen-1-0004-1060850") },
  { numero: "Voto 1023-F-S1-2025", organo: "Sala Primera", fecha: "26-06-2025", tema: "Cómputo de la prescripción", criterio: "Reitera los elementos objetivo y subjetivo del inicio del plazo.", href: NEXUS("sen-1-0004-1309432") },
];

const PROCURADURIA: Fuente[] = [
  { titulo: "Dictamen C-052-1999", detalle: "16-03-1999 · Responsabilidad objetiva y eximentes", href: PGR(8149) },
  { titulo: "Dictamen C-196-2008", detalle: "09-06-2008 · Recuperación de lo pagado contra el servidor", href: PGR(15213) },
  { titulo: "Dictamen C-251-2014", detalle: "14-08-2014 · Carácter prescriptivo del plazo del art. 198", href: PGR(18336) },
  { titulo: "Dictamen C-148-2017", detalle: "26-06-2017 · Cómputo e interrupción de la prescripción", href: PGR(19953) },
  { titulo: "Dictamen C-143-2020", detalle: "20-04-2020 · Reclamo indemnizatorio en las municipalidades", href: PGR(22196) },
  { titulo: "Dictamen C-136-2022", detalle: "24-06-2022 · Pago de indemnizaciones en sede administrativa", href: PGR(23453) },
  { titulo: "Dictamen C-030-2025", detalle: "12-02-2025 · Síntesis del régimen de responsabilidad", href: PGR(24836) },
];

const ACTAS: Fuente[] = [
  { titulo: "Subcomisión, acta n.º 5", detalle: "03-11-2004, folio 598 · Responsabilidad de la Administración y de sus funcionarios (art. 2.b)" },
  { titulo: "Subcomisión, acta n.º 14", detalle: "30-03-2005, folios 945 a 952 · Prescripción del derecho de fondo en la materia civil de Hacienda (art. 41)" },
  { titulo: "Subcomisión, acta n.º 27", detalle: "08-06-2005, folios 1435 a 1437 · Condena en abstracto (art. 122)" },
  { titulo: "Comisión Permanente de Asuntos Jurídicos, sesión n.º 19", detalle: "23-08-2005 · Ejecución de las sentencias" },
];

function Grupo({ titulo, items }: { titulo: string; items: Fuente[] }) {
  return (
    <section className="gc-juris-grupo">
      <span className="gc-fig-label">{titulo}</span>
      <ol>
        {items.map((f) => (
          <li key={f.titulo} className="gc-juris-item gc-juris-item--simple">
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

export function FuentesResponsabilidadPatrimonial() {
  return (
    <div className="gc-fig gc-biblio">
      <Grupo titulo="Normativa" items={NORMAS} />
      <section className="gc-juris-grupo">
        <span className="gc-fig-label">Jurisprudencia</span>
        <ol>
          {JURISPRUDENCIA.map((c) => (
            <li key={c.numero} className="gc-juris-item">
              <span className="gc-juris-id">
                <b>
                  {c.href ? (
                    <a href={c.href} {...EXT}>
                      {c.numero}
                    </a>
                  ) : (
                    c.numero
                  )}
                </b>
                <span className="gc-juris-org">{c.organo}</span>
                <span className="gc-juris-fecha">{c.fecha}</span>
              </span>
              <span className="gc-juris-criterio">
                <span className="gc-juris-tema">{c.tema}</span>
                {c.criterio}
              </span>
            </li>
          ))}
        </ol>
      </section>
      <Grupo titulo="Procuraduría General de la República" items={PROCURADURIA} />
      <Grupo titulo="Antecedentes legislativos del CPCA · Expediente n.º 15.134" items={ACTAS} />
      <p className="gc-fig-source">
        Textos normativos: SINALEVI, en su versión vigente. Jurisprudencia: Nexus del Poder Judicial. Dictámenes:
        SINALEVI. Actas: expediente legislativo 15.134 de la Asamblea Legislativa.
      </p>
    </div>
  );
}
