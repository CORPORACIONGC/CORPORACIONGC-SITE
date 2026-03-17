"use client";

import { useState, type FormEvent } from "react";
import {
  PaperPlaneTilt,
  CircleNotch,
  CheckCircle,
  WarningCircle,
} from "@phosphor-icons/react";
import { FIRM_CONTACT } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState("submitting");

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${FIRM_CONTACT.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
            _subject: "Nueva consulta jurídica — Corporación GC",
            _template: "table",
          }),
        }
      );

      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="p-3 rounded-full bg-gold/[0.12] mb-4">
          <CheckCircle size={32} weight="duotone" className="text-gold" />
        </div>
        <h4 className="text-base font-semibold text-cream mb-2">
          Mensaje enviado
        </h4>
        <p className="text-xs text-cream/50 leading-relaxed max-w-[30ch]">
          Revisaremos su consulta y le contactaremos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="text-[10px] tracking-wider uppercase text-cream/40 mb-1.5 block">
          Nombre completo *
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={state === "submitting"}
          className="w-full px-4 py-3 rounded-lg bg-cream/[0.06] border border-cream/[0.10] text-sm text-cream placeholder:text-cream/25 focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-300 outline-none disabled:opacity-50"
          placeholder="Su nombre"
        />
      </div>

      {/* Email + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[10px] tracking-wider uppercase text-cream/40 mb-1.5 block">
            Correo electrónico *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={state === "submitting"}
            className="w-full px-4 py-3 rounded-lg bg-cream/[0.06] border border-cream/[0.10] text-sm text-cream placeholder:text-cream/25 focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-300 outline-none disabled:opacity-50"
            placeholder="correo@ejemplo.com"
          />
        </div>
        <div>
          <label className="text-[10px] tracking-wider uppercase text-cream/40 mb-1.5 block">
            Teléfono
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={state === "submitting"}
            className="w-full px-4 py-3 rounded-lg bg-cream/[0.06] border border-cream/[0.10] text-sm text-cream placeholder:text-cream/25 focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-300 outline-none disabled:opacity-50"
            placeholder="+506 0000-0000"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="text-[10px] tracking-wider uppercase text-cream/40 mb-1.5 block">
          Describa brevemente su consulta *
        </label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={state === "submitting"}
          className="w-full px-4 py-3 rounded-lg bg-cream/[0.06] border border-cream/[0.10] text-sm text-cream placeholder:text-cream/25 focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-300 outline-none resize-none disabled:opacity-50"
          placeholder="Tipo de caso, contexto general, urgencia..."
        />
      </div>

      {/* Error message */}
      {state === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-burgundy/[0.08] border border-burgundy/20">
          <WarningCircle size={16} className="text-burgundy-light shrink-0" />
          <p className="text-xs text-cream/60">
            No se pudo enviar. Intente de nuevo o escríbanos a{" "}
            <a
              href={`mailto:${FIRM_CONTACT.email}`}
              className="text-gold underline"
            >
              {FIRM_CONTACT.email}
            </a>
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-b from-burgundy via-[#5A1730] to-[#4A0E27] text-white text-sm font-medium tracking-wide hover:from-burgundy-light hover:via-burgundy hover:to-[#5A1730] active:scale-[0.97] transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none"
      >
        {state === "submitting" ? (
          <>
            <CircleNotch size={16} weight="bold" className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <PaperPlaneTilt size={16} weight="fill" />
            Enviar consulta
          </>
        )}
      </button>

      <p className="text-[10px] text-cream/30 text-center leading-relaxed">
        Sus datos se tratan de forma confidencial y no se comparten con
        terceros.
      </p>
    </form>
  );
}
