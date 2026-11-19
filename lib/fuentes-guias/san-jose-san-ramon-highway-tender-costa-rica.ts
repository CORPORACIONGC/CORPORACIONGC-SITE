import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const GLOBALEX = (id: number) => `https://www.globalexweb.com/new/controller/juris_controller.php?function=getContent&idFile=${id}`;
const ALCANCE_37 = "https://www.imprentanacional.go.cr/pub/2026/04/15/ALCA37_15_04_2026.pdf";
const PORTAL = "https://portal.conavi.go.cr/licitaciones/carteles";
const SC = "Constitutional Chamber of the Supreme Court";
const TCA = "Contentious-Administrative Court";
const CGR = "Comptroller General of the Republic";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Law 10899, approving the CABEI and OPEC Fund loan agreements for the San José–San Ramón road corridor", detalle: "9 Apr 2026, Supplement 37 to La Gaceta 68 of 15 Apr 2026: arts. 3 to 18, especially 7 (CABEI procurement regime and transparency portal), 11 (expropriations), 13 (tax exemptions) and 18 (evaluation); loan 2341 (sections 9.10, 9.13 and 14.01; Annexes E, F and H) and loan 16603P (GC 7.03)", href: SINALEVI(106786, 150600) },
    { titulo: "Official publication of Law 10899 with the loan agreements", detalle: "Supplement 37 to La Gaceta 68, 15 Apr 2026 (Spanish)", href: ALCANCE_37 },
    { titulo: "General Public Procurement Law (Law 9986)", detalle: "Arts. 2 c) (exclusion of public loans), 3 a), 8, 92 (remedies in tenders under the rules of international public-law bodies), 95 to 98 (objection and appeal) and 118", href: SINALEVI(94469, 152662) },
    { titulo: "Law 9292, public works trust for the San José–San Ramón corridor and its radials", detalle: "23 Feb 2015", href: SINALEVI(79249, 100148) },
    { titulo: "Commercial Code (Law 3284)", detalle: "Arts. 226, 232 and 233 (branches and attorneys-in-fact of foreign companies)", href: SINALEVI(6239, 151293) },
    { titulo: "Organic Law of the Federated Association of Engineers and Architects (Law 3663)", detalle: "Arts. 5 g), 12, 13, 52 and 54 d)", href: SINALEVI(12689, 148453) },
    { titulo: "CFIA Regulation on Firms", detalle: "14 Jan 2020: arts. 3, 4, 6, 8 (temporary registration to bid) and 9", href: SINALEVI(90458, 119175) },
    { titulo: "Organic Law of the Costa Rican Social Security Fund (CCSS)", detalle: "Art. 74 (being current to contract with entities managing public funds)", href: SINALEVI(2340, 127333) },
  ],
  jurisprudencia: [
    { numero: "Vote 1027-90", organo: SC, fecha: "29-08-1990", tema: "Loans and national law", criterio: "A loan agreement approved by law may exclude national rules for its subject matter; the lender's procurement rules apply first and national law is supplementary, within the limit of public-order rules.", href: GLOBALEX(46412) },
    { numero: "Judgment 627-2018", organo: TCA, fecha: "05-11-2018", tema: "Judicial review", criterio: "The award of an IDB-financed tender and the Comptroller General's decision upholding it can be challenged before the contentious-administrative courts; the injunction is denied given the public interest in the works.", href: NEXUS("sen-1-0034-898111") },
    { numero: "Resolution 441-2024", organo: TCA, fecha: "24-01-2024", tema: "Public funds", criterio: "In a water utility programme financed by CABEI and executed through UNOPS, the contentious-administrative court has jurisdiction because public funds are committed.", href: GLOBALEX(1144196) },
  ],
  contraloria: [
    { numero: "R-DCP-00030-2024", organo: CGR, fecha: "27-06-2024", tema: "Remedies regime", criterio: "The Comptroller General's criterion on the remedies regime in tenders financed by loans from international lenders.", href: GLOBALEX(1151605) },
    { numero: "R-DCA-0058-2019", organo: CGR, fecha: "21-01-2019", tema: "Corridor trust", criterio: "Despite the San José–San Ramón trust's own procurement regulation, the Comptroller General held it could hear objections to the prequalification for the urgent works, by virtue of its oversight role.", href: GLOBALEX(823653) },
    { numero: "R-DCA-0813-2019", organo: CGR, fecha: "21-08-2019", tema: "Barranca–Limonal (IDB)", criterio: "Law 9283 gave the Comptroller General jurisdiction over objections and appeals in IDB tender PIT-115 for Route 1, Barranca–Limonal section, with the time limits of an abbreviated tender.", href: GLOBALEX(839041) },
  ],
  procuraduria: [
    { titulo: "Opinion C-150-1993", detalle: "8 Nov 1993: tax exemptions in loan laws prevent loan resources from being diverted to taxes", href: PGR(1083) },
    { titulo: "Opinion C-034-2006", detalle: "3 Feb 2006: the exemption for contractors under CABEI loan 1605 is objective and covers what is financed by the loan and incorporated into the works", href: PGR(13637) },
    { titulo: "Legal opinion PGR-OL-002-2026", detalle: "25 May 2026: CABEI loan agreement 2341; Law 10899 in force since 15 Apr 2026", href: PGR(25406) },
  ],
  otros: [
    {
      titulo: "Tender CRI-2026-2341-34907-O",
      items: [
        { titulo: "CONAVI, Request for Bids, version 1.0 (Spanish)", detalle: "21 Oct 2026, 694 pp.: ITB 5, 6, 8, 41, 47 to 50; BDS 2.1, 5, 8, 11, 12, 15 to 17, 20 to 25, 35, 36, 42, 44, 48, 50 to 52; PCC 6, 8.1, 33, 41 and 61.2", href: PORTAL },
        { titulo: "CABEI no-objection GERCR-PSD0221-2026", detalle: "12 Oct 2026", href: PORTAL },
        { titulo: "CONAVI notice on the Data Room", detalle: "Access “temporarily limited” as of 19 Nov 2026", href: PORTAL },
        { titulo: "SICOP: tenders 2025LY-000001-0006000001 (Barranca–Limonal), 2019PR-000001-0021200244 and 2018PP-000002-0021200244 (corridor trust)", detalle: "Bid openings, recommendations and awards consulted on 19 Nov 2026", href: "https://www.sicop.go.cr" },
      ],
    },
  ],
  pie: "Legislation checked against SINALEVI and La Gaceta on 19 Nov 2026; Comptroller General resolutions and court decisions read in full; bidding documents downloaded from CONAVI's tender portal on 19 Nov 2026; CABEI policies (DI-52/2020, PRE-18/2024, DI-15/2025 and PRE-35/2025) consulted in archived copies of the Bank's procurement site, which was not responding on that date.",
};
