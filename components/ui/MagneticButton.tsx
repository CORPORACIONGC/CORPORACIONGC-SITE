"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { trackContactFromHref } from "@/lib/analytics";

export function MagneticButton({
  children,
  href,
  className = "",
  variant = "primary",
  onClick,
  contactTarget,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "outline-inverse";
  onClick?: () => void;
  contactTarget?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) * 0.2;
    const dy = (e.clientY - centerY) * 0.2;
    ref.current.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = "translate(0, 0)";
    }
  }, []);

  const handleClick = useCallback(() => {
    if (href) trackContactFromHref(href, contactTarget);
    onClick?.();
  }, [href, contactTarget, onClick]);

  const baseStyles =
    "inline-flex items-center gap-2 font-medium transition-colors duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-b from-burgundy via-[#5A1730] to-[#4A0E27] text-white px-7 py-3.5 rounded-lg text-sm tracking-wide hover:from-burgundy-light hover:via-burgundy hover:to-[#5A1730] active:scale-[0.98]",
    secondary:
      "bg-charcoal text-white px-7 py-3.5 rounded-lg text-sm tracking-wide hover:bg-dark-bg active:scale-[0.98]",
    /* Sobre fondo claro el dorado de marca no alcanza 4.5:1 como texto:
       el rótulo usa el bronce oscuro y el borde conserva el dorado. */
    outline:
      "border-2 border-burgundy/50 text-burgundy px-7 py-3.5 rounded-lg text-sm tracking-wide hover:border-burgundy hover:bg-burgundy/[0.05] dark:border-[#5A1730] dark:bg-[#3A0B1F] dark:text-white dark:hover:border-[#6B1D3A] dark:hover:bg-[#4A0E27] active:scale-[0.98]",
    /* Para secciones siempre oscuras (borgoña), en cualquier tema. */
    "outline-inverse":
      "bg-gradient-to-b from-burgundy via-[#5A1730] to-[#4A0E27] text-white ring-1 ring-white/10 px-7 py-3.5 rounded-lg text-sm tracking-wide hover:from-burgundy-light hover:via-burgundy hover:to-[#5A1730] active:scale-[0.98]",
  };

  const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
  const isExternal = href && !isInternal;
  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
      style={{ transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
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
