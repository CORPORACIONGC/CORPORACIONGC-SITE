"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";

export function MagneticButton({
  children,
  href,
  className = "",
  variant = "primary",
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
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

  const baseStyles =
    "inline-flex items-center gap-2 font-medium transition-colors duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-b from-burgundy via-[#5A1730] to-[#4A0E27] text-white px-7 py-3.5 rounded-lg text-sm tracking-wide hover:from-burgundy-light hover:via-burgundy hover:to-[#5A1730] active:scale-[0.98]",
    secondary:
      "bg-charcoal text-white px-7 py-3.5 rounded-lg text-sm tracking-wide hover:bg-dark-bg active:scale-[0.98]",
    outline:
      "border-2 border-gold/60 text-gold px-7 py-3.5 rounded-lg text-sm tracking-wide hover:border-gold hover:bg-gold/[0.06] active:scale-[0.98]",
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
      style={{ transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
    >
      {isInternal ? (
        <Link href={href} onClick={onClick} className={combinedClassName}>
          {children}
        </Link>
      ) : isExternal ? (
        <a
          href={href}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={combinedClassName}>
          {children}
        </button>
      )}
    </div>
  );
}
