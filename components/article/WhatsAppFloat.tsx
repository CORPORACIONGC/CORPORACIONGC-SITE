"use client";

import { useState, useEffect } from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { trackContactFromHref } from "@/lib/analytics";

/* Botón flotante de WhatsApp para los artículos. Aparece tras un pequeño
   scroll para no competir con el encabezado, y registra el clic como
   whatsapp_click (vía trackContactFromHref). */
export function WhatsAppFloat({
  href,
  contactTarget = "article-float",
}: {
  href: string;
  contactTarget?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackContactFromHref(href, contactTarget)}
      aria-label="Escríbanos por WhatsApp"
      className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-burgundy via-[#5A1730] to-[#4A0E27] text-white shadow-lg shadow-black/30 p-4 md:py-3.5 md:px-5 hover:from-burgundy-light hover:via-burgundy hover:to-[#5A1730] hover:scale-[1.04] active:scale-95 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <WhatsappLogo size={26} weight="fill" className="shrink-0" />
      <span className="hidden md:inline text-sm font-semibold tracking-tight pr-0.5">
        Escríbanos
      </span>
    </a>
  );
}
