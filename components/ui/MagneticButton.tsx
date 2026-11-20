"use client";

import Link from "next/link";
import { trackContactFromHref } from "@/lib/analytics";

/* El nombre es histórico. Hasta el 19-11-2026 el botón se desplazaba hacia el
   cursor; ese movimiento se retiró porque temblaba en los bordes y apartaba
   el botón del puntero. Quedan el degradado y los estados de color. */
export function MagneticButton({
  children,
  href,
  className = "",
  variant = "primary",
  onClick,
  contactTarget,
  fullWidth = false,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "outline-inverse" | "outline-night";
  onClick?: () => void;
  contactTarget?: string;
  /** Ocupa todo el ancho de su celda, con el rótulo centrado. */
  fullWidth?: boolean;
}) {
  const handleClick = () => {
    if (href) trackContactFromHref(href, contactTarget);
    onClick?.();
  };

  const baseStyles =
    "inline-flex items-center gap-2 font-medium transition-colors duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-b from-burgundy via-[#5A1730] to-[#4A0E27] text-white px-7 py-3.5 rounded-lg text-sm tracking-wide hover:from-burgundy-light hover:via-burgundy hover:to-[#5A1730] active:scale-[0.98]",
    secondary:
      "bg-charcoal text-white px-7 py-3.5 rounded-lg text-sm tracking-wide hover:bg-dark-bg active:scale-[0.98]",
    /* De día, borde burdeos al 50 % y rótulo burdeos; de noche, una pieza
       vino con rótulo blanco, porque el burdeos no da contraste sobre negro. */
    outline:
      "border-2 border-burgundy/50 text-burgundy px-7 py-3.5 rounded-lg text-sm tracking-wide hover:border-burgundy hover:bg-burgundy/[0.05] dark:border-[#5A1730] dark:bg-[#3A0B1F] dark:text-white dark:hover:border-[#6B1D3A] dark:hover:bg-[#4A0E27] active:scale-[0.98]",
    /* Para secciones siempre oscuras (borgoña), en cualquier tema. */
    "outline-inverse":
      "bg-gradient-to-b from-burgundy via-[#5A1730] to-[#4A0E27] text-white ring-1 ring-white/10 px-7 py-3.5 rounded-lg text-sm tracking-wide hover:from-burgundy-light hover:via-burgundy hover:to-[#5A1730] active:scale-[0.98]",
    /* La pieza vino del secundario nocturno, fija en los dos temas: para el
       hero de la portada, que es oscuro también de día. */
    "outline-night":
      "border-2 border-[#5A1730] bg-[#3A0B1F] text-white px-7 py-3.5 rounded-lg text-sm tracking-wide hover:border-[#6B1D3A] hover:bg-[#4A0E27] active:scale-[0.98]",
  };

  const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
  const isExternal = href && !isInternal;
  const combinedClassName = `${baseStyles} ${variants[variant]} ${fullWidth ? "w-full justify-center" : ""} ${className}`;

  return (
    <div className={fullWidth ? "block" : "inline-block"}>
      {isInternal ? (
        <Link href={href} onClick={handleClick} className={combinedClassName}>
          {children}
        </Link>
      ) : isExternal ? (
        <a
          href={href}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      ) : (
        <button onClick={handleClick} className={combinedClassName}>
          {children}
        </button>
      )}
    </div>
  );
}
