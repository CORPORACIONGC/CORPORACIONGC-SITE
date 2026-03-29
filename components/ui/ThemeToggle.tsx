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

  if (!mounted) return <div className={`w-8 h-8 ${className}`} />;

  return (
    <button
      onClick={toggle}
      className={`p-2 text-cream/40 hover:text-cream/80 transition-colors duration-300 ${className}`}
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
