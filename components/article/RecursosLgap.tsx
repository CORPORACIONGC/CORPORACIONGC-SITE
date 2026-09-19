/* Piezas gráficas de la guía «Recurso de revocatoria y apelación contra un
   acto administrativo» (LGAP). Todo es HTML semántico, sin imágenes: el texto
   de los diagramas queda legible para buscadores y lectores de pantalla, y los
   colores salen de las variables del tema (claro y oscuro). Estilos en
   app/globals.css, bloque .gc-lgap. Cada artículo citado se verificó contra el
   texto vigente de la Ley N.° 6227, el CPCA (Ley N.° 8508), el Código
   Municipal (Ley N.° 7794) y el Código de Normas y Procedimientos Tributarios. */

import Link from "next/link";

function Ref({ children }: { children: React.ReactNode }) {
  return <span className="gc-lgap-ref">{children}</span>;
}

/* ── 1. Las cifras que deciden un recurso ───────────────────────────── */

const CLAVES = [
  { valor: "3", unidad: "días hábiles", texto: "para recurrir el acto final", ref: "LGAP, arts. 346.1 y 256.2" },
  { valor: "24", unidad: "horas", texto: "contra los demás actos recurribles", ref: "LGAP, art. 346.1" },
  { valor: "8", unidad: "días", texto: "para resolver la revocatoria y la apelación", ref: "LGAP, art. 352" },
  { valor: "1", unidad: "mes", texto: "de silencio y el recurso se tiene por desestimado", ref: "LGAP, art. 261; CPCA, art. 31.6" },
  { valor: "1", unidad: "año", texto: "para presentar la demanda ante el Tribunal", ref: "CPCA, arts. 39 y 31.7" },
];

export function ClavesRecursosLgap() {
  return (
    <figure className="gc-lgap gc-lgap-claves" aria-labelledby="lgap-claves-titulo">
      <figcaption id="lgap-claves-titulo" className="gc-lgap-eyebrow">
        Las cifras que deciden un recurso
      </figcaption>
      <ul className="gc-lgap-claves-grid">
        {CLAVES.map((c) => (
          <li key={c.texto} className="gc-lgap-clave">
            <span className="gc-lgap-clave-valor">
              {c.valor}
              <span className="gc-lgap-clave-unidad">{c.unidad}</span>
            </span>
            <span className="gc-lgap-clave-texto">{c.texto}</span>
            <Ref>{c.ref}</Ref>
          </li>
        ))}
      </ul>
    </figure>
  );
}

/* ── 2. Mapa de decisión: qué recurso cabe, ante quién y en qué plazo ── */

export function MapaRecursosLgap() {
  return (
    <figure className="gc-lgap gc-lgap-mapa" aria-labelledby="lgap-mapa-titulo">
      <figcaption id="lgap-mapa-titulo">
        <span className="gc-lgap-eyebrow">Mapa de decisión</span>
        <span className="gc-lgap-titulo">Qué recurso cabe, ante quién y en qué plazo</span>
      </figcaption>

      <ol className="gc-lgap-pasos">
        <li className="gc-lgap-paso">
          <span className="gc-lgap-paso-num" aria-hidden="true">1</span>
          <div className="gc-lgap-paso-cuerpo">
            <p className="gc-lgap-pregunta">¿Le comunicaron el acto?</p>
            <p className="gc-lgap-texto">
              El plazo corre desde el día hábil siguiente a la última comunicación.
              Si la Administración ejecuta el acto sin haberlo comunicado, usted
              puede recurrirlo desde que conoce la ejecución.
            </p>
            <Ref>LGAP, arts. 141 y 256.3</Ref>
          </div>
        </li>

        <li className="gc-lgap-paso">
          <span className="gc-lgap-paso-num" aria-hidden="true">2</span>
          <div className="gc-lgap-paso-cuerpo">
            <p className="gc-lgap-pregunta">¿Qué acto recibió?</p>
            <div className="gc-lgap-ramas">
              <div className="gc-lgap-rama gc-lgap-rama--fuerte">
                <p className="gc-lgap-rama-caso">
                  Acto final, o el de trámite que suspende indefinidamente o impide
                  continuar el procedimiento
                </p>
                <p className="gc-lgap-rama-resultado">
                  Revocatoria, apelación o ambas
                  <span className="gc-lgap-plazo">3 días hábiles</span>
                </p>
                <Ref>LGAP, arts. 345.1, 345.3 y 346.1</Ref>
              </div>
              <div className="gc-lgap-rama">
                <p className="gc-lgap-rama-caso">
                  Acto que inicia el procedimiento, o que deniega la comparecencia
                  oral o una prueba
                </p>
                <p className="gc-lgap-rama-resultado">
                  Revocatoria, apelación o ambas
                  <span className="gc-lgap-plazo">24 horas</span>
                </p>
                <Ref>LGAP, arts. 345.1 y 346</Ref>
              </div>
              <div className="gc-lgap-rama gc-lgap-rama--tenue">
                <p className="gc-lgap-rama-caso">Cualquier otro acto de trámite</p>
                <p className="gc-lgap-rama-resultado">
                  Sin recurso propio: sus vicios se alegan al recurrir el acto final
                </p>
                <Ref>LGAP, art. 345.1</Ref>
              </div>
            </div>
          </div>
        </li>

        <li className="gc-lgap-paso">
          <span className="gc-lgap-paso-num" aria-hidden="true">3</span>
          <div className="gc-lgap-paso-cuerpo">
            <p className="gc-lgap-pregunta">¿La materia tiene ley especial?</p>
            <ul className="gc-lgap-chips">
              <li><b>Municipal</b> quinto día hábil <Ref>Código Municipal, arts. 165, 170 y 171</Ref></li>
              <li><b>Tributaria</b> 30 días hábiles <Ref>CNPT, arts. 145, 146 y 156</Ref></li>
              <li>
                <b>Contratación pública</b> régimen propio de la Ley N.° 9986{" "}
                <Link href="/articulos/recursos-contratacion-publica-objecion-apelacion-revocatoria">ver guía</Link>
              </li>
              <li><b>Todo lo demás</b> reglas generales de la LGAP</li>
            </ul>
          </div>
        </li>

        <li className="gc-lgap-paso">
          <span className="gc-lgap-paso-num" aria-hidden="true">4</span>
          <div className="gc-lgap-paso-cuerpo">
            <p className="gc-lgap-pregunta">¿Ante quién lo presenta y quién decide?</p>
            <div className="gc-lgap-ramas gc-lgap-ramas--tres">
              <div className="gc-lgap-rama">
                <p className="gc-lgap-rama-caso">Revocatoria</p>
                <p className="gc-lgap-rama-resultado">Decide el mismo órgano que dictó el acto</p>
              </div>
              <div className="gc-lgap-rama">
                <p className="gc-lgap-rama-caso">Apelación</p>
                <p className="gc-lgap-rama-resultado">Decide el superior jerárquico, en única alzada</p>
              </div>
              <div className="gc-lgap-rama gc-lgap-rama--fuerte">
                <p className="gc-lgap-rama-caso">Las dos en un escrito</p>
                <p className="gc-lgap-rama-resultado">Revocatoria con apelación en subsidio</p>
              </div>
            </div>
            <p className="gc-lgap-texto">
              Los recursos ordinarios se presentan siempre ante el órgano director del
              procedimiento, que eleva la apelación al superior.
            </p>
            <Ref>LGAP, arts. 347, 349 y 350</Ref>
          </div>
        </li>
      </ol>

      <p className="gc-lgap-salida">
        Con el acto firme quedan dos puertas: el recurso extraordinario de revisión,
        por causales tasadas, y la demanda ante el Tribunal Contencioso-Administrativo.
        <Ref>LGAP, arts. 353 y 354; CPCA, art. 39</Ref>
      </p>
    </figure>
  );
}

/* ── 3. Cómputo del plazo de tres días hábiles ──────────────────────── */

const SEMANA = [
  { dia: "Vie", estado: "notif", nota: "Le notifican" },
  { dia: "Sáb", estado: "inhabil", nota: "Inhábil" },
  { dia: "Dom", estado: "inhabil", nota: "Inhábil" },
  { dia: "Lun", estado: "habil", nota: "Día 1" },
  { dia: "Mar", estado: "habil", nota: "Día 2" },
  { dia: "Mié", estado: "vence", nota: "Día 3: vence" },
  { dia: "Jue", estado: "tarde", nota: "Inadmisible" },
];

export function PlazoTresDiasLgap() {
  return (
    <figure className="gc-lgap gc-lgap-plazo-fig" aria-labelledby="lgap-plazo-titulo">
      <figcaption id="lgap-plazo-titulo">
        <span className="gc-lgap-eyebrow">Cómo se cuenta</span>
        <span className="gc-lgap-titulo">Un acto final notificado el viernes vence el miércoles</span>
      </figcaption>
      <ol className="gc-lgap-semana">
        {SEMANA.map((d) => (
          <li key={d.dia} className={`gc-lgap-dia gc-lgap-dia--${d.estado}`}>
            <span className="gc-lgap-dia-nombre">{d.dia}</span>
            <span className="gc-lgap-dia-nota">{d.nota}</span>
          </li>
        ))}
      </ol>
      <p className="gc-lgap-pie">
        El plazo arranca el día hábil siguiente a la notificación y cuenta solo días
        hábiles; un feriado en medio corre el vencimiento. El recurso presentado
        después es inadmisible.
        <Ref>LGAP, arts. 256, 346.1 y 347.2</Ref>
      </p>
    </figure>
  );
}

/* ── 4. Recorrido de la revocatoria con apelación en subsidio ───────── */

type Actor = "usted" | "organo" | "superior" | "juez";
const ACTOR_LABEL: Record<Actor, string> = {
  usted: "Usted",
  organo: "Órgano que dictó el acto",
  superior: "Superior jerárquico",
  juez: "Tribunal",
};

const FLUJO: {
  actor: Actor;
  titulo: string;
  texto: string;
  plazo?: string;
  ref: string;
  desvio?: { titulo: string; texto: string; ref: string };
}[] = [
  {
    actor: "usted",
    titulo: "Presenta un solo escrito",
    texto: "Revocatoria con apelación en subsidio, ante el órgano director del procedimiento. Si el acto se ejecuta de inmediato, pida en el mismo escrito la suspensión.",
    plazo: "3 días hábiles",
    ref: "LGAP, arts. 148, 346.1, 347.3 y 349.1",
  },
  {
    actor: "organo",
    titulo: "Resuelve la revocatoria",
    texto: "Puede acogerla o rechazarla. También puede reservarla para el acto final, y debe comunicarlo.",
    plazo: "8 días",
    ref: "LGAP, art. 352.1",
    desvio: {
      titulo: "Si la acoge",
      texto: "El acto se revoca o se modifica y el recorrido termina ahí.",
      ref: "LGAP, art. 347.3",
    },
  },
  {
    actor: "organo",
    titulo: "Si la rechaza, eleva la apelación",
    texto: "Emplaza a las partes ante el superior y remite el expediente con un informe. La apelación sube sin que el inferior la admita o la rechace.",
    ref: "LGAP, arts. 347.3 y 349.2",
  },
  {
    actor: "superior",
    titulo: "Decide la apelación",
    texto: "Confirma, modifica o revoca el acto, con dictamen previo de la asesoría jurídica. Si encuentra una nulidad absoluta, puede resolver aun en perjuicio de quien recurre.",
    plazo: "8 días desde que recibe el expediente",
    ref: "LGAP, arts. 351, 352.2 y 356",
    desvio: {
      titulo: "Si pasa un mes sin respuesta",
      texto: "El recurso puede tenerse por desestimado y la vía por agotada. La Administración sigue obligada a resolver.",
      ref: "LGAP, arts. 127 y 261; CPCA, art. 31.6",
    },
  },
  {
    actor: "juez",
    titulo: "Queda abierta la vía judicial",
    texto: "La apelación agota la vía administrativa. El año para demandar corre desde el día siguiente a la notificación de lo resuelto.",
    plazo: "1 año",
    ref: "LGAP, art. 350; CPCA, arts. 31.7 y 39",
  },
];

export function FlujoApelacionSubsidio() {
  return (
    <figure className="gc-lgap gc-lgap-flujo" aria-labelledby="lgap-flujo-titulo">
      <figcaption id="lgap-flujo-titulo">
        <span className="gc-lgap-eyebrow">Paso a paso</span>
        <span className="gc-lgap-titulo">El recorrido de una revocatoria con apelación en subsidio</span>
      </figcaption>
      <ol className="gc-lgap-flujo-lista">
        {FLUJO.map((p) => (
          <li key={p.titulo} className={`gc-lgap-nodo gc-lgap-nodo--${p.actor}`}>
            <div className="gc-lgap-nodo-principal">
              <span className="gc-lgap-actor">{ACTOR_LABEL[p.actor]}</span>
              <p className="gc-lgap-nodo-titulo">
                {p.titulo}
                {p.plazo && <span className="gc-lgap-plazo">{p.plazo}</span>}
              </p>
              <p className="gc-lgap-texto">{p.texto}</p>
              <Ref>{p.ref}</Ref>
            </div>
            {p.desvio && (
              <div className="gc-lgap-desvio">
                <p className="gc-lgap-desvio-titulo">{p.desvio.titulo}</p>
                <p className="gc-lgap-texto">{p.desvio.texto}</p>
                <Ref>{p.desvio.ref}</Ref>
              </div>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}

/* ── 5. Tablas comparativas (reutilizan .gc-comparativa) ─────────────── */

function RefChip({ children }: { children: React.ReactNode }) {
  return <span className="gc-ref">{children}</span>;
}

export function ComparativaRecursosLgap() {
  return (
    <div className="gc-comparativa gc-lgap-tabla">
      <p className="gc-table-title">Los tres recursos de la LGAP, lado a lado</p>
      <p className="gc-table-sub">Régimen general, aplicable salvo ley especial</p>
      <div className="gc-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Recurso</th>
              <th scope="col">Quién lo resuelve</th>
              <th scope="col">Contra qué</th>
              <th scope="col">Plazos</th>
              <th scope="col">Fundamento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="gc-recurso">Revocatoria o reposición</td>
              <td>El mismo órgano que dictó el acto. Se presenta ante el órgano director.</td>
              <td>Acto final, acto de inicio, denegatoria de comparecencia o de prueba.</td>
              <td className="gc-plazo"><span><b>Para presentarla</b>3 días hábiles contra el acto final; 24 horas en los demás casos.</span><span><b>Para resolverla</b>8 días; puede reservarse para el acto final.</span></td>
              <td><div className="gc-refs"><RefChip>LGAP, arts. 343 a 346</RefChip><RefChip>art. 352.1</RefChip></div></td>
            </tr>
            <tr>
              <td className="gc-recurso">Apelación</td>
              <td>El superior jerárquico, en única alzada. Agota la vía administrativa.</td>
              <td>Los mismos actos que la revocatoria.</td>
              <td className="gc-plazo"><span><b>Para presentarla</b>3 días hábiles contra el acto final; 24 horas en los demás casos.</span><span><b>Para resolverla</b>8 días desde que recibe el expediente.</span></td>
              <td><div className="gc-refs"><RefChip>LGAP, arts. 347 a 351</RefChip><RefChip>art. 352.2</RefChip></div></td>
            </tr>
            <tr>
              <td className="gc-recurso">Revisión (extraordinario)</td>
              <td>El jerarca de la Administración.</td>
              <td>Actos finales firmes, solo por las cuatro causales de la ley.</td>
              <td className="gc-plazo"><span><b>Para presentarlo</b>1 año por error de hecho; 3 meses desde que aparecen documentos esenciales; 1 año desde la sentencia en los demás casos.</span><span><b>Para resolverlo</b>Las reglas de los recursos ordinarios, en lo compatible.</span></td>
              <td><div className="gc-refs"><RefChip>LGAP, arts. 353 a 355</RefChip></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function MateriasEspecialesRecursos() {
  return (
    <div className="gc-comparativa gc-lgap-tabla">
      <p className="gc-table-title">Cuando la ley especial cambia el plazo o el órgano</p>
      <p className="gc-table-sub">Los regímenes que desplazan a la LGAP con más frecuencia</p>
      <div className="gc-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Materia y acto</th>
              <th scope="col">Recursos</th>
              <th scope="col">Plazo</th>
              <th scope="col">Quién resuelve la apelación</th>
              <th scope="col">Fundamento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="gc-recurso">Acuerdos del Concejo Municipal</td>
              <td>Revocatoria y apelación, en memorial razonado. La apelación solo por ilegalidad.</td>
              <td className="gc-plazo">Quinto día hábil.</td>
              <td>Tribunal Contencioso-Administrativo.</td>
              <td><div className="gc-refs"><RefChip>Código Municipal, art. 165</RefChip></div></td>
            </tr>
            <tr>
              <td className="gc-recurso">Decisiones de la Alcaldía</td>
              <td>Revocatoria ante la Alcaldía y apelación. No suspenden la ejecución.</td>
              <td className="gc-plazo">Quinto día hábil.</td>
              <td>Tribunal Contencioso-Administrativo.</td>
              <td><div className="gc-refs"><RefChip>Código Municipal, art. 171</RefChip></div></td>
            </tr>
            <tr>
              <td className="gc-recurso">Funcionarios municipales que no dependen del Concejo</td>
              <td>Revocatoria y apelación. Suspenden la ejecución del acto.</td>
              <td className="gc-plazo">Quinto día hábil.</td>
              <td>Alcaldía.</td>
              <td><div className="gc-refs"><RefChip>Código Municipal, art. 171</RefChip></div></td>
            </tr>
            <tr>
              <td className="gc-recurso">Liquidación de oficio tributaria</td>
              <td>Revocatoria potestativa y apelación. Si se presentan ambas a la vez, se tramita la primera y la segunda se declara inadmisible.</td>
              <td className="gc-plazo">30 días hábiles para la revocatoria; 30 días para la apelación.</td>
              <td>Tribunal Fiscal Administrativo.</td>
              <td><div className="gc-refs"><RefChip>CNPT, arts. 145, 146 y 156</RefChip></div></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="gc-acronyms">
        <b>LGAP</b> Ley General de la Administración Pública (Ley N.° 6227).{" "}
        <b>CPCA</b> Código Procesal Contencioso-Administrativo (Ley N.° 8508).{" "}
        <b>CNPT</b> Código de Normas y Procedimientos Tributarios (Ley N.° 4755).{" "}
        El Código Municipal es la Ley N.° 7794. La contratación pública tiene su propio
        régimen en la Ley N.° 9986.
      </p>
    </div>
  );
}

/* ── 6. Nulidad absoluta y nulidad relativa ─────────────────────────── */

const NULIDADES = [
  {
    clase: "absoluta",
    nombre: "Nulidad absoluta",
    cuando: "Falta por completo uno o varios elementos del acto.",
    efectos: [
      "El acto no se presume legítimo y no puede ordenarse su ejecución.",
      "Se impugna en un año desde el día siguiente a su comunicación; si sus efectos son continuados, desde que cesan.",
      "Al resolver la apelación, el superior puede declararla aun en perjuicio de quien recurre.",
    ],
    ref: "LGAP, arts. 166, 169, 175 y 351.2",
  },
  {
    clase: "relativa",
    nombre: "Nulidad relativa",
    cuando: "Uno de los elementos es imperfecto sin impedir el fin del acto.",
    efectos: [
      "El acto se presume legítimo mientras no se anule en firme.",
      "Debe obedecerse, y su incumplimiento genera responsabilidad.",
      "Se impugna con los recursos ordinarios o con la demanda, dentro de sus plazos.",
    ],
    ref: "LGAP, arts. 167 y 176",
  },
];

export function NulidadAbsolutaRelativa() {
  return (
    <figure className="gc-lgap gc-lgap-nulidad" aria-labelledby="lgap-nulidad-titulo">
      <figcaption id="lgap-nulidad-titulo">
        <span className="gc-lgap-eyebrow">Gravedad del vicio</span>
        <span className="gc-lgap-titulo">Qué cambia entre la nulidad absoluta y la relativa</span>
      </figcaption>
      <div className="gc-lgap-nulidad-grid">
        {NULIDADES.map((n) => (
          <section key={n.clase} className={`gc-lgap-nulidad-col gc-lgap-nulidad-col--${n.clase}`}>
            <p className="gc-lgap-nulidad-nombre">{n.nombre}</p>
            <p className="gc-lgap-nulidad-cuando">{n.cuando}</p>
            <ul>
              {n.efectos.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <Ref>{n.ref}</Ref>
          </section>
        ))}
      </div>
    </figure>
  );
}
