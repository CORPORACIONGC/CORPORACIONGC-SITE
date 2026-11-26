"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "@phosphor-icons/react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  /* El hueco mide lo mismo que el botón, para que la barra no salte al
     montarse. */
  if (!mounted) return <div className={`h-11 w-11 ${className}`} />;

  return (
    <button
      onClick={toggle}
      /* Área táctil de 44 × 44 px (D-15) con el icono en 16 px: el relleno
         agranda el blanco, no el dibujo. */
      className={`flex h-11 w-11 items-center justify-center text-cream/65 hover:text-cream/80 transition-colors duration-300 nav-tactile ${className}`}
      aria-label={dark ? "Cambiar a modo diurno" : "Cambiar a modo nocturno"}
    >
      <span
        key={dark ? "sun" : "moon"}
        className="block animate-theme-icon"
      >
        {dark ? <Sun size={16} weight="duotone" /> : <Moon size={16} weight="duotone" />}
      </span>
    </button>
  );
}
