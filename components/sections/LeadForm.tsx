"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  PaperPlaneTilt,
  CircleNotch,
  CheckCircle,
  WarningCircle,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { FIRM_CONTACT } from "@/lib/constants";
import { sendContactEmail } from "@/app/actions/send-email";
import { trackFormStart, trackFormSubmit } from "@/lib/analytics";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";

type FormState = "idle" | "submitting" | "success" | "error";

/* Vía para instituciones públicas (OD-04, 25-11-2026). La asesora legal de
   una institución que evalúa a quién contratar no encontraba un camino
   propio para pedir una propuesta. El formulario ofrece dos tipos de
   consulta; el institucional pide además el nombre de la institución y
   cambia los rótulos y el texto de ayuda. No promete servicios, plazos ni
   cifras. El enlace «Solicitar una propuesta» de la sección de contacto
   (y cualquier enlace a #propuesta-institucional) llega con esta opción
   ya elegida. */
type TipoConsulta = "caso" | "institucion";

const ANCLA_INSTITUCIONAL = "propuesta-institucional";

const OPCIONES: { valor: TipoConsulta; rotulo: string; detalle: string }[] = [
  { valor: "caso", rotulo: "Consulta sobre un caso", detalle: "Persona o empresa" },
  { valor: "institucion", rotulo: "Soy una institución pública", detalle: "Solicitar una propuesta" },
];

/* Mensajes de WhatsApp del contexto: el genérico de la firma y, en la vía
   institucional, uno que ya dice quién escribe y qué pide. */
const whatsappDe = (mensaje: string) =>
  `https://wa.me/${FIRM_CONTACT.phoneRaw}?text=${encodeURIComponent(mensaje)}`;
const WHATSAPP_GENERAL = whatsappDe(FIRM_CONTACT.whatsappMessage);
const WHATSAPP_INSTITUCION = whatsappDe(
  "Hola, escribo en nombre de una institución pública y me gustaría solicitar una propuesta a Corporación GC."
);

const CAMPO =
  "w-full px-4 py-3 rounded-lg bg-surface border border-cream/50 text-base sm:text-[15px] text-cream placeholder:text-cream/65 hover:border-cream/70 focus:border-burgundy focus:ring-2 focus:ring-burgundy/25 dark:focus:border-hilo/70 dark:focus:ring-hilo/25 transition-colors duration-200 outline-none disabled:opacity-50";
const ROTULO = "text-sm font-medium text-cream/[0.82] mb-1.5 block";

export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [tipo, setTipo] = useState<TipoConsulta>("caso");
  const [name, setName] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const aviso = useRef<HTMLDivElement>(null);
  const esInstitucion = tipo === "institucion";

  /* El resultado se anuncia: al enviarse, el foco pasa al aviso de éxito,
     que reemplaza al formulario; el de error se lee solo (role="alert"). */
  useEffect(() => {
    if (state === "success") aviso.current?.focus();
  }, [state]);

  /* Quien llega por el enlace institucional (#propuesta-institucional)
     encuentra la opción ya elegida. Va por ancla y no por parámetro porque
     proxy.ts redirige toda URL con parámetros a su versión limpia. */
  useEffect(() => {
    const revisar = () => {
      if (window.location.hash === `#${ANCLA_INSTITUCIONAL}`) setTipo("institucion");
    };
    /* Un segundo clic en el mismo enlace no cambia el ancla: se escucha
       también el clic, por si la persona había vuelto a la otra opción. */
    const alClic = (e: MouseEvent) => {
      const enlace = (e.target as Element | null)?.closest?.("a[href]");
      if (enlace?.getAttribute("href")?.endsWith(`#${ANCLA_INSTITUCIONAL}`)) setTipo("institucion");
    };
    revisar();
    window.addEventListener("hashchange", revisar);
    document.addEventListener("click", alClic);
    return () => {
      window.removeEventListener("hashchange", revisar);
      document.removeEventListener("click", alClic);
    };
  }, []);

  /* Alternativa de contacto por WhatsApp (canal preferido por la mayoría de
     consultantes), con el mensaje del tipo de consulta elegido. */
  const whatsappUrl = esInstitucion ? WHATSAPP_INSTITUCION : WHATSAPP_GENERAL;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    /* La acción del servidor recibe un solo campo de texto: el tipo y la
       institución van al principio del mensaje, en líneas propias. */
    const cuerpo = esInstitucion
      ? `Tipo de consulta: institución pública, solicitud de propuesta\nInstitución: ${institucion.trim()}\n\n${message}`
      : message;

    try {
      const result = await sendContactEmail({ name, email, phone, message: cuerpo, honeypot });

      if (result.success) {
        /* La vía institucional se mide aparte; la general conserva su
           nombre para no partir la serie. */
        trackFormSubmit(esInstitucion ? "lead_form_institucion" : "lead_form");
        setState("success");
      } else {
        setErrorMsg(result.error || "No se pudo enviar el mensaje.");
        setState("error");
      }
    } catch {
      setErrorMsg("No se pudo enviar el mensaje.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div
        ref={aviso}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="flex flex-col items-center justify-center py-12 text-center outline-none"
      >
        <div className="p-3 rounded-full bg-emphasis/[0.12] mb-4">
          <CheckCircle size={32} weight="duotone" className="text-emphasis" aria-hidden="true" />
        </div>
        <p className="text-base font-semibold text-cream mb-2">
          {esInstitucion ? "Solicitud enviada" : "Mensaje enviado"}
        </p>
        <p className="text-sm text-cream/75 leading-relaxed max-w-[32ch]">
          {esInstitucion
            ? "Revisaremos la solicitud de la institución y le contactaremos a la brevedad."
            : "Revisaremos su consulta y le contactaremos a la brevedad."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      /* El primer tecleo en el formulario ya es intención de contacto; el
         envío puede no llegar y esa intención se perdía. */
      onInput={() => trackFormStart("lead_form")}
      aria-busy={state === "submitting"}
      className="space-y-4"
    >
      {/* Honeypot — invisible para humanos, los bots lo llenan */}
      <div className="absolute opacity-0 pointer-events-none" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <input
          type="text"
          name="company_url"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Tipo de consulta: dos opciones del mismo peso. La institucional es
          la vía rotulada para instituciones públicas (OD-04). */}
      <fieldset id={ANCLA_INSTITUCIONAL} className="scroll-mt-28">
        <legend className={ROTULO}>Tipo de consulta</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {OPCIONES.map((o) => {
            const elegida = tipo === o.valor;
            return (
              <label
                key={o.valor}
                className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 transition-colors duration-200 ${
                  elegida
                    ? "border-burgundy bg-burgundy/[0.04] dark:border-hilo dark:bg-white/[0.04]"
                    : "border-cream/50 hover:border-cream/70"
                }`}
              >
                <input
                  type="radio"
                  name="tipo"
                  value={o.valor}
                  checked={elegida}
                  onChange={() => setTipo(o.valor)}
                  disabled={state === "submitting"}
                  className="mt-1 size-4 shrink-0 accent-burgundy dark:accent-[#9B2A5C]"
                />
                <span className="min-w-0">
                  <span className="block text-[15px] font-medium leading-snug text-cream">{o.rotulo}</span>
                  <span className="mt-0.5 block text-[13px] leading-snug text-cream/65">{o.detalle}</span>
                </span>
              </label>
            );
          })}
        </div>
        <p className="mt-2 text-[13px] leading-relaxed text-cream/65" aria-live="polite">
          {esInstitucion
            ? "Indique la institución y describa qué necesita; si ya lo tiene definido, mencione el plazo y el procedimiento de contratación. Con eso la firma podrá preparar la propuesta."
            : "Cuéntenos el tipo de caso, el contexto general y si hay un plazo corriendo."}
        </p>
      </fieldset>

      {/* Institución (solo en la vía institucional) */}
      {esInstitucion && (
        <div>
          <label htmlFor="lf-institucion" className={ROTULO}>
            Institución *
          </label>
          <input
            id="lf-institucion"
            name="institucion"
            type="text"
            required
            autoComplete="organization"
            maxLength={200}
            value={institucion}
            onChange={(e) => setInstitucion(e.target.value)}
            disabled={state === "submitting"}
            className={CAMPO}
            placeholder="Nombre de la institución"
          />
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="lf-name" className={ROTULO}>
          {esInstitucion ? "Nombre y cargo *" : "Nombre completo *"}
        </label>
        <input
          id="lf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={state === "submitting"}
          className={CAMPO}
          placeholder={esInstitucion ? "Su nombre y cargo" : "Su nombre"}
        />
      </div>

      {/* Email + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lf-email" className={ROTULO}>
            Correo electrónico *
          </label>
          <input
            id="lf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={state === "submitting"}
            className={CAMPO}
            placeholder="correo@ejemplo.com"
          />
        </div>
        <div>
          <label htmlFor="lf-phone" className={ROTULO}>
            Teléfono
          </label>
          <input
            id="lf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={state === "submitting"}
            className={CAMPO}
            placeholder="+506 0000-0000"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="lf-message" className={ROTULO}>
          {esInstitucion ? "¿Qué necesita la institución? *" : "Describa brevemente su consulta *"}
        </label>
        <textarea
          id="lf-message"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={state === "submitting"}
          className={`${CAMPO} resize-none`}
          placeholder={
            esInstitucion
              ? "Objeto de la contratación, plazo previsto, procedimiento..."
              : "Tipo de caso, contexto general, urgencia..."
          }
        />
      </div>

      {/* Error message */}
      {state === "error" && (
        <div role="alert" className="flex items-start gap-2 p-3 rounded-lg bg-burgundy/[0.08] border border-burgundy/20">
          <WarningCircle size={16} aria-hidden="true" className="mt-0.5 text-burgundy-light shrink-0" />
          <p className="text-sm text-cream/80">
            {errorMsg} Intente de nuevo o envíe un correo a{" "}
            <a
              href={`mailto:${FIRM_CONTACT.email}`}
              className="text-emphasis underline"
            >
              {FIRM_CONTACT.email}
            </a>
          </p>
        </div>
      )}

      {/* Envío: la acción principal de la sección, con el lacre (D-19). El
          rótulo es el mismo en los dos tipos de consulta (D-12). */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="bg-lacre w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-white text-sm font-medium tracking-wide disabled:opacity-60 disabled:pointer-events-none"
      >
        {state === "submitting" ? (
          <>
            <CircleNotch size={16} weight="bold" className="animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            <PaperPlaneTilt size={16} weight="fill" aria-hidden="true" />
            Enviar una consulta
          </>
        )}
      </button>

      {/* Salida directa a WhatsApp — canal preferido por la mayoría de
          consultantes. Ofrece una alternativa inmediata a quien no desea
          completar el formulario, reduciendo el abandono. */}
      <div className="flex items-center gap-3 pt-1">
        <div className="h-px flex-1 bg-cream/[0.08]" />
        <span className="text-xs text-cream/65">o</span>
        <div className="h-px flex-1 bg-cream/[0.08]" />
      </div>
      <TrackedContactLink
        href={whatsappUrl}
        contactTarget={esInstitucion ? "lead-form-whatsapp-institucion" : "lead-form-whatsapp"}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-cream/20 bg-surface text-cream text-sm font-medium tracking-wide hover:border-cream/40 active:scale-[0.97] transition-colors duration-300"
      >
        <WhatsappLogo size={18} weight="fill" aria-hidden="true" className="text-[#25D366]" />
        Escribir por WhatsApp
      </TrackedContactLink>

      <p className="text-xs text-cream/65 text-center leading-relaxed">
        Sus datos se tratan de forma confidencial y no se comparten con
        terceros.
      </p>
    </form>
  );
}
