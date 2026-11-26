import Image from "next/image";
import { Envelope, Phone, WhatsappLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";
import { RunningHead } from "@/components/ui/RunningHead";
import { FIRM_CONTACT } from "@/lib/constants";
import type { Asistente } from "@/lib/asistentes";
import { PerfilHero, WHATSAPP_PERFIL } from "@/components/sections/PerfilHero";
import { RelatoPerfil, type ApartadoRelato } from "@/components/sections/RelatoPerfil";

/* Perfil de un asistente legal con el mismo formato que el de los abogados
   (EstebanHero, EstebanAbout, EstebanExperience y EstebanContact), con menos
   contenido y sin ofrecer consultas jurídicas: esas las atienden los
   abogados de la firma. */

export function AsistenteHero({ a }: { a: Asistente }) {
  const [l1, l2, l3] = a.nameLines;
  return (
    <PerfilHero
      cargo={a.role}
      nombre={[l1, `${l2} ${l3}`]}
      secundario={{ href: "/#equipo", rotulo: "El equipo" }}
      /* Las consultas las atienden los abogados: WhatsApp de la firma. */
      whatsapp={WHATSAPP_PERFIL.firma}
      /* El retrato del equipo ya viene recortado a busto (4:5): va entero. */
      foto={{ src: a.portrait, alt: a.name, ancho: 4, alto: 5, hasta: 1, x: "50%" }}
    >
      {a.heroDescription}
    </PerfilHero>
  );
}

/* Perfil y trayectoria en prosa (D-06, 25-11-2026), con RelatoPerfil, como
   los del Director. Sustituyen las tarjetas de formación, la línea de
   tiempo con «Posición actual» y las etiquetas de habilidades. La prosa se
   arma con los campos de cada asistente en lib/asistentes.ts, en tercera
   persona: el nombre completo la primera vez y después el apellido o el
   sujeto tácito. No se usa `bio`, que resume esos mismos campos y los
   repetiría. Los lugares («San José, Costa Rica») se omiten: todos son el
   mismo y la sección de contacto ya da la ubicación de la firma. */

const MESES: Record<string, string> = {
  ene: "enero", feb: "febrero", mar: "marzo", abr: "abril", may: "mayo", jun: "junio",
  jul: "julio", ago: "agosto", set: "setiembre", sep: "setiembre", oct: "octubre", nov: "noviembre", dic: "diciembre",
};

const minuscula = (t: string) => t.charAt(0).toLowerCase() + t.slice(1);
const mayuscula = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);
const sinPunto = (t: string) => t.trim().replace(/\.$/, "");

/** «a, b y c», con «e» delante de un sonido /i/ («español e inglés»). */
function enumerar(items: string[]): string {
  if (items.length <= 1) return items.join("");
  const ultimo = items[items.length - 1];
  const y = /^h?i[^aeiouáéíóú]/i.test(ultimo) ? "e" : "y";
  return `${items.slice(0, -1).join(", ")} ${y} ${ultimo}`;
}

/** Artículo de una institución por su primera palabra. */
function articulo(nombre: string): "la " | "el " | "" {
  const p = nombre.split(" ")[0].toLowerCase();
  if (/^(universidad|facultad|revista|orquesta|escuela|vicerrectoría|asociación|competencia|corte|sala|procuraduría|contraloría|municipalidad|oficina|clínica|comisión)$/.test(p)) return "la ";
  if (/^(instituto|colegio|liceo|bufete|programa|grupo|tribunal|centro|despacho|ministerio|juzgado|proyecto|equipo|taller|curso|seminario)$/.test(p)) return "el ";
  return "";
}

/** «Facultad de Derecho, Universidad de Costa Rica» → «Facultad de Derecho de la Universidad de Costa Rica». */
const nombreEnProsa = (nombre: string) =>
  nombre.split(", ").reduce((acc, parte) => `${acc} ${de(parte)}`);

/** «en la Universidad…», «en el Liceo…», «en Corporación GC». */
const en = (nombre: string) => `en ${articulo(nombre)}${nombreEnProsa(nombre)}`;

/** «de la Revista…», «del Instituto…», «de Corporación GC». */
function de(nombre: string): string {
  const art = articulo(nombre);
  return `${art === "el " ? "del " : `de ${art}`}${nombre}`;
}

/** «Mar. 2025 – Mar. 2026» → «de marzo de 2025 a marzo de 2026»; «Jun. 2026 – Presente» → «desde junio de 2026». */
function periodo(texto: string): { frase: string; vigente: boolean } {
  const fecha = (t: string, anioPorDefecto?: string) => {
    const m = t.trim().match(/^(?:([A-Za-zÁÉÍÓÚáéíóú]{3})\.?)?\s*(\d{4})?$/);
    if (!m) return null;
    const mes = m[1] ? MESES[m[1].toLowerCase()] : undefined;
    const anio = m[2] ?? anioPorDefecto;
    if (!mes && !anio) return null;
    return { mes, anio };
  };
  const [ini, fin] = texto.split(/\s+–\s+/);
  if (fin && /^(presente|en curso)$/i.test(fin.trim())) {
    const f = fecha(ini);
    if (!f) return { frase: "", vigente: true };
    return { frase: `desde ${f.mes ? `${f.mes} de ` : ""}${f.anio}`, vigente: true };
  }
  if (fin) {
    const b = fecha(fin);
    const a = fecha(ini, b?.anio);
    if (!a || !b) return { frase: "", vigente: false };
    if (a.anio === b.anio && a.mes && b.mes) return { frase: `de ${a.mes} a ${b.mes} de ${b.anio}`, vigente: false };
    const larga = (f: { mes?: string; anio?: string }) => (f.mes ? `${f.mes} de ${f.anio}` : `${f.anio}`);
    return { frase: `de ${larga(a)} a ${larga(b)}`, vigente: false };
  }
  const f = fecha(ini);
  if (!f) return { frase: "", vigente: false };
  return { frase: `en ${f.mes ? `${f.mes} de ` : ""}${f.anio}`, vigente: false };
}

/** Funciones de un puesto: «del análisis…, de la asesoría… y de la redacción…». */
function funciones(items: string[]): string {
  return enumerar(
    items.map((d) => {
      const t = minuscula(sinPunto(d));
      const primera = t.split(" ")[0];
      return /(a|ión|dad)$/.test(primera) ? `de la ${t}` : `del ${t}`;
    }),
  );
}

/** Grado con su artículo y el verbo que le corresponde. */
function grado(texto: string): { frase: string; verbo: "cursar" | "estudiar" } {
  const p = texto.split(" ")[0].toLowerCase();
  if (/^(licenciatura|maestría|especialidad|especialización|diplomatura)$/.test(p)) return { frase: `la ${texto}`, verbo: "cursar" };
  if (/^(bachillerato|programa|doctorado|diplomado|técnico|international|diploma|curso)$/.test(p)) return { frase: `el ${texto}`, verbo: "cursar" };
  if (p === "educación") return { frase: `la ${minuscula(texto)}`, verbo: "cursar" };
  /* Una disciplina («Derecho») conserva la mayúscula; un nombre descriptivo
     de varias palabras («Habilidades blandas y comunicación») la pierde. */
  return { frase: texto.includes(" ") ? minuscula(texto) : texto, verbo: "estudiar" };
}

/** «Cuarto año de la carrera · promedio ponderado 9,22» → «(cuarto año de la carrera; promedio ponderado 9,22)». */
const nota = (texto?: string) => (texto ? ` (${texto.split(" · ").map(minuscula).join("; ")})` : "");

function parrafoFormacion(education: Asistente["education"]): string {
  /* Entradas seguidas de la misma institución y el mismo período se cuentan
     juntas, con la educación general antes del programa que la acompaña. */
  const grupos: Asistente["education"][] = [];
  for (const e of education) {
    const previo = grupos[grupos.length - 1];
    if (previo && previo[0].institution === e.institution && previo[0].period === e.period) previo.push(e);
    else grupos.push([e]);
  }
  for (const g of grupos) g.sort((x, y) => Number(/^Educación/.test(y.degree)) - Number(/^Educación/.test(x.degree)));

  let institucionPrevia = "";
  let yaHuboPasado = false;
  return grupos
    .map((g) => {
      const { frase: cuando, vigente } = periodo(g[0].period);
      const grados = g.map((e) => grado(e.degree));
      const verbo = grados[0].verbo === "cursar" ? (vigente ? "cursa" : "cursó") : vigente ? "estudia" : "estudió";
      const inst = g[0].institution;
      const misma = inst === institucionPrevia;
      const donde = misma
        ? /^Universidad/.test(inst)
          ? "en la misma universidad"
          : /^(Colegio|Liceo)/.test(inst)
            ? "en el mismo colegio"
            : "en la misma institución"
        : en(inst);
      institucionPrevia = inst;
      const que = enumerar(grados.map((x) => x.frase));
      const notas = g.map((e) => nota(e.note)).join("");
      if (vigente) return `${mayuscula(verbo)} ${que} ${donde}${cuando ? ` ${cuando}` : ""}${notas}.`;
      const inicio = !yaHuboPasado ? `Antes, ${cuando ? `${cuando}, ` : ""}${verbo}` : cuando ? `${mayuscula(cuando)} ${verbo}` : mayuscula(verbo);
      yaHuboPasado = true;
      return `${inicio} ${que} ${donde}${notas}.`;
    })
    .join(" ");
}

/** «Habla español (lengua materna), inglés (bilingüe: …) y alemán (C1: …)». */
function parrafoIdiomas(languages: string[]): string {
  const items = languages.map((l) => {
    const [idioma, ...resto] = l.split(": ");
    const nivel = resto.join(": ").replace(/\s*\((.*)\)$/, (_, d: string) => `: ${d.replace(/;\s*/g, ", ")}`);
    return nivel ? `${minuscula(idioma)} (${nivel})` : minuscula(idioma);
  });
  return `Habla ${enumerar(items)}.`;
}

/** «En 2026, como investigador y líder del equipo, obtuvo el primer lugar en la Competencia…, en Ciudad de México.» */
function frasePremio(w: { title: string; detail: string }): string {
  const [primero, ...resto] = w.detail.split(" · ");
  const anio = primero.match(/\b(19|20)\d{2}\b/)?.[0];
  const lugar = primero.replace(/,?\s*\b(19|20)\d{2}\b/, "").trim();
  const papel = resto.find((r) => /^(investigador|investigadora|líder|miembro|integrante|capitán|capitana|orador|oradora|coordinador|coordinadora)/i.test(r));
  const otros = resto.filter((r) => r !== papel);
  const lugarEnTitulo = w.title.match(/^(\S+ lugar), (.+)$/);
  const que = lugarEnTitulo
    ? `obtuvo el ${minuscula(lugarEnTitulo[1])} en ${articulo(lugarEnTitulo[2])}${lugarEnTitulo[2]}`
    : `recibió la distinción «${w.title}»`;
  const intro = [anio ? `En ${anio}` : "", papel ? `como ${minuscula(papel)}` : ""].filter(Boolean).join(", ");
  const cola = [lugar ? `en ${lugar}` : "", ...otros.map(minuscula)].filter(Boolean).join(", ");
  return `${intro ? `${intro}, ${que}` : mayuscula(que)}${cola ? `, ${cola}` : ""}.`;
}

/** Actividades agrupadas por semestre o año: «En el I semestre de 2026 participó en … y en …». */
function parrafoActividades(activities: { title: string; detail: string }[]): string {
  const porPeriodo = new Map<string, string[]>();
  for (const act of activities) {
    const partes = act.detail.split(" · ");
    const cuando = partes.find((p) => /\b(19|20)\d{2}\b/.test(p)) ?? "";
    const otras = partes.filter((p) => p !== cuando);
    const art = articulo(act.title);
    const nombre = art ? `${art}${minuscula(act.title)}` : `«${act.title}»`;
    const marco =
      otras.length >= 2
        ? `, ${minuscula(otras[0])} ${de(otras.slice(1).join(", "))}`
        : otras.length === 1
          ? `, ${de(otras[0]).replace(otras[0], minuscula(otras[0]))}`
          : "";
    const lista = porPeriodo.get(cuando) ?? [];
    lista.push(`en ${nombre}${marco}`);
    porPeriodo.set(cuando, lista);
  }
  return [...porPeriodo]
    .map(([cuando, items]) => {
      const c = /^(I|II|III|primer|segundo|tercer)\b/i.test(cuando) ? `En el ${cuando}` : cuando ? `En ${cuando}` : "";
      const cuerpo = items.length > 1 ? `${items.slice(0, -1).join(", ")}, y ${items[items.length - 1]}` : items[0];
      return `${c ? `${c} participó` : "Participó"} ${cuerpo}.`;
    })
    .join(" ");
}

/** Un puesto fuera de la firma, en una oración. */
function frasePuesto(exp: Asistente["career"][number], sujeto = ""): string {
  const { frase: cuando, vigente } = periodo(exp.period);
  const rol = minuscula(exp.role);
  const org = nombreEnProsa(exp.org);
  const nucleo = /^pasantía/.test(rol)
    ? `${vigente ? "hace" : "hizo"} una ${rol} ${en(exp.org)}`
    : `${vigente ? "es también" : "fue"} ${rol} ${de(exp.org).replace(exp.org, org)}`;
  const tareas = exp.description?.length
    ? `, donde ${vigente ? "se encarga" : "se encargó"} ${funciones(exp.description)}`
    : "";
  const conSujeto = sujeto ? `${sujeto} ${nucleo}` : nucleo;
  return `${cuando ? `${mayuscula(cuando)} ${conSujeto}` : mayuscula(conSujeto)}${tareas}.`;
}

export function AsistenteAbout({ a }: { a: Asistente }) {
  const estudio = nombreEnProsa(minuscula(a.study));
  const apartados: ApartadoRelato[] = [];
  if (a.education.length) apartados.push({ titulo: "Su formación", contenido: <p>{parrafoFormacion(a.education)}</p> });
  if (a.awards?.length)
    apartados.push({
      titulo: a.awards.length > 1 ? "Distinciones" : "Distinción",
      contenido: <p>{a.awards.map(frasePremio).join(" ")}</p>,
    });
  if (a.activities?.length) apartados.push({ titulo: "Otras actividades", contenido: <p>{parrafoActividades(a.activities)}</p> });

  return (
    <RelatoPerfil
      id="perfil"
      alterno
      rotulo="Perfil"
      titulo={
        <>
          Formación en Derecho.
          <br />
          <span className="text-burgundy-light">Trabajo junto al equipo.</span>
        </>
      }
      entrada={
        <>
          <p>
            {a.name}, {estudio}, es {minuscula(a.role)} de Corporación GC desde {minuscula(a.since)}.
          </p>
          {a.languages.length > 0 && <p>{parrafoIdiomas(a.languages)}</p>}
        </>
      }
      apartados={apartados}
    />
  );
}

export function AsistenteExperience({ a }: { a: Asistente }) {
  const apellido = a.nameLines[1];
  const firma = a.career.filter((c) => c.highlight);
  const fuera = a.career.filter((c) => !c.highlight).reverse();
  const apartados: ApartadoRelato[] = [];

  const enFirma = firma.filter((c) => c.description?.length);
  if (enFirma.length)
    apartados.push({
      titulo: "Su trabajo en la firma",
      contenido: (
        <>
          {enFirma.map((c) => (
            <p key={c.org + c.role}>
              En {c.org}, {apellido} se encarga {funciones(c.description ?? [])}.
            </p>
          ))}
        </>
      ),
    });
  if (!enFirma.length && firma.length && !fuera.length)
    apartados.push({
      titulo: "Su trabajo en la firma",
      contenido: (
        <p>
          {apellido} trabaja en {firma[0].org} como {minuscula(firma[0].role)} {periodo(firma[0].period).frase}.
        </p>
      ),
    });
  if (fuera.length)
    apartados.push({
      titulo: fuera.some((c) => periodo(c.period).vigente) ? "Fuera de la firma" : "Antes de la firma",
      /* Si no hubo apartado de la firma, el apellido abre el relato. */
      contenido: <p>{fuera.map((c, i) => frasePuesto(c, i === 0 && !enFirma.length ? apellido : "")).join(" ")}</p>,
    });
  if (a.skills?.length || a.extras?.length)
    apartados.push({
      titulo: "Otros datos",
      contenido: (
        <>
          {a.skills?.length ? <p>Entre sus habilidades están {enumerar(a.skills.map(minuscula))}.</p> : null}
          {a.extras?.map((x) => (
            <p key={x}>{/[.!?]$/.test(x) ? x : `${x}.`}</p>
          ))}
        </>
      ),
    });

  return (
    <RelatoPerfil
      id="trayectoria"
      rotulo="Trayectoria"
      titulo={
        <>
          Trabajo
          <br />
          <span className="text-burgundy-light">y experiencia</span>
        </>
      }
      apartados={apartados}
    />
  );
}

export function AsistenteContact({ a }: { a: Asistente }) {
  const items = [
    { icon: Envelope, label: "Email", value: FIRM_CONTACT.email, href: `mailto:${FIRM_CONTACT.email}` },
    { icon: Phone, label: "Teléfono", value: FIRM_CONTACT.phone, href: `tel:+${FIRM_CONTACT.phoneRaw}` },
  ];
  return (
    <section id="contacto" className="relative bg-dark-bg py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-cream/[0.08]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-burgundy/[0.04] blur-[120px] pointer-events-none hidden dark:block" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-20">
          <div>
            <AnimatedEntry>
              <RunningHead title="Contacto" />
            </AnimatedEntry>
            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Contacto con
                {" "}
                <br />
                <span className="text-burgundy-light">la firma</span>
              </h2>
            </AnimatedEntry>
            <StaggerContainer className="mt-10 space-y-4" stagger={0.06}>
              {items.map((item) => (
                <StaggerItem key={item.label}>
                  <TrackedContactLink
                    href={item.href}
                    contactTarget="general"
                    className="group flex items-center gap-4 p-4 rounded-xl border border-cream/[0.08] hover:border-burgundy/20 transition-all duration-400"
                  >
                    <div className="p-2.5 rounded-lg bg-cream/[0.06] text-cream/65 group-hover:text-burgundy-light group-hover:bg-burgundy/[0.12] transition-all duration-300">
                      <item.icon size={20} weight="duotone" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-wider uppercase text-cream/65">{item.label}</div>
                      <div className="text-sm text-cream/75 group-hover:text-cream transition-colors duration-300">{item.value}</div>
                    </div>
                  </TrackedContactLink>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="flex items-center">
            <AnimatedEntry delay={0.3} direction="right" className="w-full">
              <div className="p-8 md:p-10 rounded-xl bg-cream/[0.04] border border-cream/[0.10] backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <MapPin size={16} weight="duotone" className="text-emphasis" />
                  <span className="text-xs text-cream/65">{FIRM_CONTACT.location}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-cream tracking-tight mb-3">Consultas jurídicas</h3>
                <p className="text-xs text-cream/65 leading-relaxed mb-8">
                  Las consultas sobre un caso las atienden los abogados de la firma. Escriba por WhatsApp y le
                  responderemos a la brevedad.
                </p>
                <MagneticButton
                  href={WHATSAPP_PERFIL.firma}
                  variant="primary"
                  className="w-full justify-center"
                  contactTarget="general"
                >
                  <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
                  Escribir por WhatsApp
                </MagneticButton>
                <div className="mt-8 pt-6 border-t border-cream/[0.08] flex items-center gap-3">
                  <Image
                    src="/images/logo-gc.png"
                    alt="Corporación GC"
                    width={34}
                    height={32}
                    className="h-8 w-auto opacity-60 dark:opacity-90 dark:brightness-0 dark:invert"
                  />
                  <div>
                    <div className="text-[10px] text-cream/65 tracking-wide">{a.role} de</div>
                    <div className="text-xs text-cream/65 font-medium">Corporación GC</div>
                  </div>
                </div>
              </div>
            </AnimatedEntry>
          </div>
        </div>
      </div>
    </section>
  );
}
