/* Figuras de la guía sobre la licitación CRI-2026-2341-34907-O de CONAVI
   (Corredor Vial San José – San Ramón), en inglés y en español. Mismo
   lenguaje editorial que las demás guías (.gc-fig de app/globals.css).
   Datos cotejados el 19-11-2026 con la Solicitud de Ofertas V1.0 (21-10-2026,
   694 págs.), la ficha pública del portal de licitaciones de CONAVI, la Ley
   10899 y los arts. 95 y 97 de la Ley 9986. */

import { RunningHead } from "@/components/ui/RunningHead";

type Lang = "en" | "es";
const PORTAL = "https://portal.conavi.go.cr/licitaciones/carteles";

function FigHead({ id, n, kicker, title, lead, lang }: { id: string; n: number; kicker: string; title: string; lead?: string; lang: Lang }) {
  return (
    <header className="gc-fig-head">
      <RunningHead title={kicker} locator={`${lang === "en" ? "Figure" : "Figura"} ${n}`} />
      <p id={id} className="gc-fig-title">
        {title}
      </p>
      {lead && <p className="gc-fig-lead">{lead}</p>}
    </header>
  );
}

function FigSource({ children, lang }: { children: React.ReactNode; lang: Lang }) {
  return (
    <p className="gc-fig-source">
      <span>{lang === "en" ? "Source:" : "Fuente:"}</span> {children}
    </p>
  );
}

/* ── Figura 1. Las dos líneas y sus unidades funcionales ──────────────── */

const LINEAS = [
  {
    linea: { en: "Lot 1", es: "Línea 1" },
    presupuesto: "US$324,460,256",
    presupuestoEs: "US$324.460.256",
    ufs: [
      { uf: "UF-1", tramo: "La Sabana – Hospital México", km: "RN 1, km 2+270 – 5+200" },
      { uf: "UF-2", tramo: "Hospital México – Real Cariari", km: "RN 1, km 5+200 – 10+700" },
      { uf: "UF-3", tramo: "Real Cariari – Río Segundo", km: "RN 1, km 10+700 – 14+880" },
      { uf: "UF-6", tramo: "Naranjo – San Ramón", km: "RN 1, km 39+600 – 57+854" },
    ],
  },
  {
    linea: { en: "Lot 2", es: "Línea 2" },
    presupuesto: "US$362,914,045",
    presupuestoEs: "US$362.914.045",
    ufs: [
      { uf: "UF-4", tramo: "Río Segundo – Manolos", km: "RN 1, km 14+880 – 28+060" },
      { uf: "UF-5", tramo: "Manolos – Naranjo", km: "RN 1, km 28+060 – 39+600" },
      { uf: "UF-7", tramo: "Radial Río Segundo", km: "RN 147, km 3+920 – 8+371" },
    ],
  },
];

export function LineasSanJoseSanRamon({ lang = "en" }: { lang?: Lang }) {
  const en = lang === "en";
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby={`fig-lineas-sjsr-${lang}`}>
      <FigHead
        id={`fig-lineas-sjsr-${lang}`}
        n={1}
        lang={lang}
        kicker={en ? "What is being procured" : "Qué se licita"}
        title={en ? "Two lots, seven functional units, one budget of US$687.4 million" : "Dos líneas, siete unidades funcionales y un presupuesto de US$687,4 millones"}
        lead={
          en
            ? "Each bid must cover every functional unit of its lot. A firm may bid for one lot or both, and CONAVI may issue separate notices to proceed for each unit."
            : "Cada oferta debe cubrir todas las unidades funcionales de su línea. Se puede ofertar por una línea o por ambas, y CONAVI puede dar órdenes de inicio separadas por unidad."
        }
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">{en ? "Lot" : "Línea"}</th>
                <th scope="col">{en ? "Functional units" : "Unidades funcionales"}</th>
                <th scope="col">{en ? "Budget available" : "Presupuesto disponible"}</th>
              </tr>
            </thead>
            <tbody>
              {LINEAS.map((l) => (
                <tr key={l.linea.en}>
                  <td className="gc-recurso">{l.linea[lang]}</td>
                  <td data-label={en ? "Functional units" : "Unidades funcionales"}>
                    {l.ufs.map((u) => (
                      <span key={u.uf} style={{ display: "block", marginBottom: 6 }}>
                        <b>{u.uf}</b> {u.tramo} <span className="gc-fig-ref" style={{ display: "inline" }}>· {u.km}</span>
                      </span>
                    ))}
                  </td>
                  <td data-label={en ? "Budget available" : "Presupuesto disponible"} className="gc-plazo">
                    <span className="gc-fig-plazo">{en ? l.presupuesto : l.presupuestoEs}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource lang={lang}>
        {en ? "CONAVI, Request for Bids CRI-2026-2341-34907-O, V1.0 of 21 Oct 2026, BDS 16.2 and 17.1 and Part II, p. II-21 (" : "CONAVI, Solicitud de Ofertas CRI-2026-2341-34907-O, V1.0 del 21-10-2026, DDL 16.2 y 17.1 y Parte II, pág. II-21 ("}
        <a href={PORTAL} target="_blank" rel="noopener noreferrer">
          {en ? "CONAVI tender portal" : "portal de licitaciones de CONAVI"}
        </a>
        ).
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. Calendario del procedimiento ───────────────────────────── */

const HITOS: { fecha: { en: string; es: string }; que: { en: string; es: string }; hl?: boolean }[] = [
  { fecha: { en: "21 Oct 2026", es: "21-10-2026" }, que: { en: "Request for Bids published on CONAVI's tender portal; clarification period opens on 22 October.", es: "Se publica la Solicitud de Ofertas en el portal de CONAVI; el periodo de aclaraciones abre el 22 de octubre." } },
  { fecha: { en: "11–12 Jan 2027", es: "11 y 12-01-2027" }, que: { en: "Guided site visits. Recommended, not mandatory; costs borne by each bidder.", es: "Visitas guiadas al sitio. Recomendables, no obligatorias; cada oferente paga sus gastos." } },
  { fecha: { en: "15 Jan 2027", es: "15-01-2027" }, que: { en: "Clarification (homologation) meeting.", es: "Reunión de homologación." } },
  { fecha: { en: "1 Apr 2027, 23:59", es: "01-04-2027, 23:59" }, que: { en: "Last day to submit requests for clarification.", es: "Último día para presentar solicitudes de aclaración." } },
  { fecha: { en: "6 Apr 2027", es: "06-04-2027" }, que: { en: "Last day for CONAVI to publish answers.", es: "Último día para que CONAVI publique las respuestas." } },
  { fecha: { en: "≈ 7 Apr 2027", es: "≈ 07-04-2027" }, que: { en: "Last day to file a complaint against the bidding documents: at least ten business days before the bid deadline (our count).", es: "Último día para presentar una queja contra el pliego: al menos diez días hábiles antes del cierre (cálculo propio)." }, hl: true },
  { fecha: { en: "21 Apr 2027, 23:59", es: "21-04-2027, 23:59" }, que: { en: "Bid deadline. Electronic submission only, technical and financial envelopes uploaded separately.", es: "Cierre de ofertas. Solo por vía electrónica, con los sobres técnico y económico por separado." }, hl: true },
  { fecha: { en: "22 Apr 2027, 10:00", es: "22-04-2027, 10:00" }, que: { en: "Public opening of envelope 1 (technical), streamed online.", es: "Apertura pública del sobre 1 (técnico), con transmisión en línea." } },
  { fecha: { en: "11 Jun 2027", es: "11-06-2027" }, que: { en: "Technical and legal evaluation report; qualified bidders notified.", es: "Informe de evaluación técnica y legal y notificación de los calificados." } },
  { fecha: { en: "14 Jun 2027", es: "14-06-2027" }, que: { en: "Public opening of envelope 2 (price).", es: "Apertura pública del sobre 2 (económico)." } },
  { fecha: { en: "5 Jul 2027", es: "05-07-2027" }, que: { en: "Final report and award recommendation. Complaints against the notice of intention to award: ten business days.", es: "Informe final y recomendación de adjudicación. Quejas contra la intención de adjudicar: diez días hábiles." }, hl: true },
];

export function CalendarioSanJoseSanRamon({ lang = "en" }: { lang?: Lang }) {
  const en = lang === "en";
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby={`fig-calendario-sjsr-${lang}`}>
      <FigHead
        id={`fig-calendario-sjsr-${lang}`}
        n={2}
        lang={lang}
        kicker={en ? "Timeline" : "Calendario"}
        title={en ? "From publication to award recommendation, according to CONAVI's portal" : "De la publicación a la recomendación de adjudicación, según el portal de CONAVI"}
        lead={
          en
            ? "The marked rows are the deadlines that cannot be recovered. The complaint date is our own count of Costa Rican business days; the documents do not state it."
            : "Las filas marcadas son los plazos que no se recuperan. La fecha de la queja es un cálculo propio en días hábiles costarricenses; el pliego no la indica."
        }
      />
      <ol className="gc-flujo">
        <li className="gc-flujo-cab" aria-hidden="true">
          <span />
          <span>{en ? "Date" : "Fecha"}</span>
          <span>{en ? "Milestone" : "Hito"}</span>
          <span />
        </li>
        {HITOS.map((h, i) => (
          <li key={i} className={`gc-flujo-paso${h.hl ? " gc-fig-hl" : ""}`}>
            <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="gc-flujo-quien">{h.fecha[lang]}</span>
            <span className="gc-flujo-que">{h.que[lang]}</span>
            <span className="gc-flujo-plazo" />
          </li>
        ))}
      </ol>
      <FigSource lang={lang}>
        {en
          ? "Public schedule of tender CRI-2026-2341-34907-O on CONAVI's portal (consulted 19 Nov 2026); Request for Bids, ITB 8.4, 48.1–48.2 and BDS 25.1 and 36.1."
          : "Cronograma público del procedimiento CRI-2026-2341-34907-O en el portal de CONAVI (consulta del 19-11-2026); Solicitud de Ofertas, IAO 8.4, 48.1 y 48.2 y DDL 25.1 y 36.1."}
      </FigSource>
    </figure>
  );
}

/* ── Figura 3. Quién resuelve los reclamos ─────────────────────────────── */

const RECLAMOS: { aspecto: { en: string; es: string }; ordinario: { en: string; es: string }; bcie: { en: string; es: string } }[] = [
  {
    aspecto: { en: "Challenge to the bidding documents", es: "Reclamo contra el pliego" },
    ordinario: { en: "Objection before the Comptroller General (CGR), within eight business days of publication (Law 9986, art. 95 a).", es: "Recurso de objeción ante la Contraloría General, dentro de los ocho días hábiles siguientes a la publicación (Ley 9986, art. 95 a)." },
    bcie: { en: "Complaint to CONAVI, at least ten business days before the bid deadline (ITB 48.2 a).", es: "Queja ante CONAVI, al menos diez días hábiles antes del cierre de ofertas (IAO 48.2 a)." },
  },
  {
    aspecto: { en: "Challenge to the award", es: "Reclamo contra la adjudicación" },
    ordinario: { en: "Appeal before the CGR within eight business days of the final act (Law 9986, art. 97).", es: "Recurso de apelación ante la Contraloría dentro de los ocho días hábiles siguientes al acto final (Ley 9986, art. 97)." },
    bcie: { en: "Complaint to CONAVI within ten business days of the notice of intention to award (ITB 48.2 b).", es: "Queja ante CONAVI dentro de los diez días hábiles siguientes a la notificación de la intención de adjudicar (IAO 48.2 b)." },
  },
  {
    aspecto: { en: "Who decides", es: "Quién resuelve" },
    ordinario: { en: "The CGR, an external and independent body.", es: "La Contraloría, órgano externo e independiente." },
    bcie: { en: "CONAVI itself, within ten business days (BDS 48.5). The bidding documents name no second instance.", es: "El propio CONAVI, en diez días hábiles (DDL 48.5). El pliego no designa una segunda instancia." },
  },
  {
    aspecto: { en: "Effect while pending", es: "Efecto mientras se resuelve" },
    ordinario: { en: "Automatic suspension (arts. 96 and 98).", es: "Suspensión automática (arts. 96 y 98)." },
    bcie: { en: "CONAVI suspends the procedure until the complaint is resolved; with lots, only the affected lot (ITB 48.7).", es: "CONAVI suspende el procedimiento hasta resolver; si hay líneas, solo la afectada (IAO 48.7)." },
  },
  {
    aspecto: { en: "Role of the lender", es: "Papel del financiador" },
    ordinario: { en: "None.", es: "Ninguno." },
    bcie: { en: "CABEI does not decide the complaint. It may refuse to finance if it finds the solution inadequate (ITB 48.8).", es: "El BCIE no resuelve la queja. Puede abstenerse de financiar si la solución no le parece adecuada (IAO 48.8)." },
  },
];

export function ReclamosSanJoseSanRamon({ lang = "en" }: { lang?: Lang }) {
  const en = lang === "en";
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby={`fig-reclamos-sjsr-${lang}`}>
      <FigHead
        id={`fig-reclamos-sjsr-${lang}`}
        n={4}
        lang={lang}
        kicker={en ? "Complaints and remedies" : "Reclamos"}
        title={en ? "Where a bidder complains: ordinary Costa Rican procurement and this tender" : "Dónde reclama un oferente: la contratación ordinaria y esta licitación"}
        lead={
          en
            ? "Article 7 of Law 10899 moves both challenges out of the Comptroller General and into the CABEI framework."
            : "El artículo 7 de la Ley 10899 saca los dos reclamos de la Contraloría y los lleva al régimen del BCIE."
        }
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">{en ? "Issue" : "Aspecto"}</th>
                <th scope="col">{en ? "Ordinary tender (Law 9986, major tender)" : "Licitación ordinaria (Ley 9986, licitación mayor)"}</th>
                <th scope="col">{en ? "San José–San Ramón (Law 10899 and CABEI)" : "San José–San Ramón (Ley 10899 y BCIE)"}</th>
              </tr>
            </thead>
            <tbody>
              {RECLAMOS.map((r) => (
                <tr key={r.aspecto.en}>
                  <td className="gc-recurso">{r.aspecto[lang]}</td>
                  <td data-label={en ? "Law 9986" : "Ley 9986"}>{r.ordinario[lang]}</td>
                  <td data-label={en ? "This tender" : "Esta licitación"}>{r.bcie[lang]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource lang={lang}>
        {en
          ? "Law 9986 (General Public Procurement Law), arts. 95 to 98; Law 10899, art. 7; Request for Bids CRI-2026-2341-34907-O, ITB 48 and BDS 48.4–48.5."
          : "Ley 9986, Ley General de Contratación Pública, arts. 95 a 98; Ley 10899, art. 7; Solicitud de Ofertas CRI-2026-2341-34907-O, IAO 48 y DDL 48.4 y 48.5."}
      </FigSource>
    </figure>
  );
}

/* ── Figura 4. Garantías y dinero ─────────────────────────────────────── */

const DINERO: { rubro: { en: string; es: string }; regla: { en: string; es: string }; fuente: string }[] = [
  { rubro: { en: "Bid security", es: "Garantía de participación" }, regla: { en: "None in money. A Bid-Securing Declaration (form CC-6): a bidder that withdraws its bid is barred from CONAVI's tenders for two years.", es: "No hay garantía en dinero. Se firma una Declaración de Mantenimiento de la Oferta (formulario CC-6): quien retire su oferta queda fuera de los concursos de CONAVI por dos años." }, fuente: "DDL 22.1" },
  { rubro: { en: "Bid validity", es: "Vigencia de la oferta" }, regla: { en: "120 days from the bid deadline.", es: "120 días desde el cierre de ofertas." }, fuente: "DDL 21.1" },
  { rubro: { en: "Performance security", es: "Garantía de cumplimiento" }, regla: { en: "5% of each lot's contract price, unconditional bank guarantee on first demand.", es: "5 % del monto de cada línea, garantía bancaria incondicional a primer requerimiento." }, fuente: "CPC 61.2" },
  { rubro: { en: "Environmental and social security", es: "Garantía ambiental y social" }, regla: { en: "0.5% of the accepted contract amount.", es: "0,5 % del monto contractual aceptado." }, fuente: "DDL 50.4" },
  { rubro: { en: "Advance payment", es: "Anticipo" }, regla: { en: "Up to 20% per functional unit with notice to proceed, against a bank guarantee for 100% of the advance.", es: "Hasta 20 % por unidad funcional con orden de inicio, contra garantía bancaria por el 100 % de lo adelantado." }, fuente: "DDL 50.2" },
  { rubro: { en: "Foreign guarantors", es: "Garantes extranjeros" }, regla: { en: "Need a correspondent financial institution in Costa Rica, unless CONAVI agrees otherwise in writing.", es: "Necesitan una institución financiera corresponsal en Costa Rica, salvo acuerdo escrito de CONAVI." }, fuente: "IAO 50.2" },
  { rubro: { en: "Price adjustment", es: "Reajuste de precios" }, regla: { en: "None. Exchange-rate risk is the bidder's. From month 72, adjustment may be requested for pending work if the delay is not the contractor's fault.", es: "No hay. El riesgo cambiario es del oferente. Desde el mes 72 puede pedirse ajuste de lo pendiente si el atraso no es imputable al contratista." }, fuente: "DDL 16.1" },
  { rubro: { en: "Taxes", es: "Impuestos" }, regla: { en: "Bids priced without VAT, selective consumption tax or import duties; the exemption is processed through EXONET and requires being current with Hacienda and the CCSS.", es: "Ofertas sin IVA, impuesto selectivo de consumo ni aranceles; la exoneración se tramita por EXONET y exige estar al día con Hacienda y la CCSS." }, fuente: "Ley 10899, art. 13; DDL 15.3" },
];

/* En inglés, las siglas del pliego en su forma usual: DDL = Bid Data Sheet
   (BDS), IAO = Instructions to Bidders (ITB), CPC = Particular Conditions
   of Contract (PCC). */
function clausulaEn(f: string) {
  return f.replace(/DDL/g, "BDS").replace(/IAO/g, "ITB").replace(/CPC/g, "PCC").replace(/Ley 10899, art\./g, "Law 10899, art.");
}

export function DineroSanJoseSanRamon({ lang = "en" }: { lang?: Lang }) {
  const en = lang === "en";
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby={`fig-dinero-sjsr-${lang}`}>
      <FigHead
        id={`fig-dinero-sjsr-${lang}`}
        n={3}
        lang={lang}
        kicker={en ? "Securities, price and taxes" : "Garantías, precio e impuestos"}
        title={en ? "The money terms a bidder prices in" : "Las condiciones económicas que el oferente debe costear"}
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">{en ? "Item" : "Rubro"}</th>
                <th scope="col">{en ? "Rule" : "Regla"}</th>
                <th scope="col">{en ? "Clause" : "Cláusula"}</th>
              </tr>
            </thead>
            <tbody>
              {DINERO.map((d) => (
                <tr key={d.rubro.en}>
                  <td className="gc-recurso">{d.rubro[lang]}</td>
                  <td>{d.regla[lang]}</td>
                  <td data-label={en ? "Clause" : "Cláusula"}>{en ? clausulaEn(d.fuente) : d.fuente}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource lang={lang}>
        {en
          ? "Request for Bids CRI-2026-2341-34907-O: Bid Data Sheet (BDS), Instructions to Bidders (ITB) and Particular Conditions of Contract (PCC), in the Spanish original as DDL, IAO and CPC; Law 10899, art. 13."
          : "Solicitud de Ofertas CRI-2026-2341-34907-O: Datos de la Licitación (DDL), Instrucciones a los Oferentes (IAO) y Condiciones Particulares del Contrato (CPC); Ley 10899, art. 13."}
      </FigSource>
    </figure>
  );
}
