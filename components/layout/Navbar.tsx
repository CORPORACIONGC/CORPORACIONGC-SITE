"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { FIRM_NAV_LINKS } from "@/lib/constants";

export function Navbar({ navLinks = FIRM_NAV_LINKS, topOffset = false }: { navLinks?: readonly { label: string; href: string }[]; topOffset?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          topOffset ? "top-8" : "top-0"
        } ${
          scrolled
            ? "bg-surface/80 backdrop-blur-xl shadow-[0_1px_0_rgba(196,162,101,0.08)] border-b border-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo-gc.png"
              alt="Corporación GC"
              width={40}
              height={40}
              className="h-9 w-auto dark:brightness-0 dark:invert"
            />
            <div className="hidden sm:block">
              <div className="text-[13px] font-semibold tracking-[0.22em] text-cream leading-none">
                CORPORACIÓN GC
              </div>
              <div className="text-[9px] tracking-[0.3em] text-cream/40 mt-1 font-light">
                ABOGADOS
              </div>
            </div>
          </Link>

          {/* Desktop links + toggle */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-[0.12em] uppercase text-cream/60 hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const id = link.href.replace("#", "");
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    window.history.replaceState(null, "", link.href);
                  }}
                  className="text-xs tracking-[0.12em] uppercase text-cream/60 hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </a>
              )
            )}
            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle + menu */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-cream/70 hover:text-gold transition-colors"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileOpen ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-surface"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <Image
                src="/images/logo-gc.png"
                alt="Corporación GC"
                width={36}
                height={36}
                className="h-8 w-auto dark:brightness-0 dark:invert"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-cream/70"
                aria-label="Cerrar menú"
              >
                <X size={22} weight="light" />
              </button>
            </div>
            <div className="flex flex-col items-start gap-1 px-6 pt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setMobileOpen(false);
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      const id = link.href.replace("#", "");
                      setTimeout(() => {
                        const el = document.getElementById(id);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }, 400);
                    }
                  }}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-2xl font-light tracking-wide text-cream py-3 border-b border-cream/5 w-full"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <div className="absolute bottom-12 left-6 right-6">
              <div className="text-xs tracking-[0.2em] text-cream/30 uppercase">
                Corporación GC
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
