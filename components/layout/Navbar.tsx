"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { FIRM_NAV_LINKS } from "@/lib/constants";

export function Navbar({
  navLinks = FIRM_NAV_LINKS,
  topOffset = false,
}: {
  navLinks?: readonly { label: string; href: string }[];
  topOffset?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const linkEls = useRef<(HTMLElement | null)[]>([]);
  const [pill, setPill] = useState({ x: 0, w: 0, show: false });

  /* ── Scroll state ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Body lock for mobile menu ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ── Mouse glare tracking (only when glass active) ── */
  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = navRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty(
        "--glare-x",
        `${((e.clientX - r.left) / r.width) * 100}%`
      );
      el.style.setProperty(
        "--glare-y",
        `${((e.clientY - r.top) / r.height) * 100}%`
      );
    },
    []
  );

  /* ── Active section detection via IntersectionObserver ── */
  useEffect(() => {
    const anchors = navLinks
      .map((l, i) =>
        l.href.startsWith("#") ? { id: l.href.slice(1), idx: i } : null
      )
      .filter(Boolean) as { id: string; idx: number }[];

    if (anchors.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const match = anchors.find((a) => a.id === entry.target.id);
            if (match) setActiveIndex(match.idx);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    anchors.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) io.observe(section);
    });

    return () => io.disconnect();
  }, [navLinks]);

  /* ── Sliding pill measurement ── */
  useEffect(() => {
    const measure = () => {
      const el = linkEls.current[activeIndex];
      if (!el) {
        setPill((p) => ({ ...p, show: false }));
        return;
      }
      setPill({
        x: el.offsetLeft - 10,
        w: el.offsetWidth + 20,
        show: true,
      });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeIndex]);

  return (
    <>
      <nav
        ref={navRef}
        onMouseMove={onMouseMove}
        className={`fixed left-0 right-0 z-40 navbar-glass transition-all duration-700 ${
          topOffset ? "top-8" : "top-0"
        }`}
      >
        {/* Subtle edge line */}
        <div className="absolute inset-0 pointer-events-none z-[3]">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream/[0.06] to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20 relative z-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group nav-tactile">
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
              <div className="text-[9px] tracking-[0.3em] text-cream/55 mt-1 font-light">
                ABOGADOS
              </div>
            </div>
          </Link>

          {/* Desktop links + toggle */}
          <div
            ref={linksRef}
            className="hidden md:flex items-center gap-8 relative"
          >
            {navLinks.map((link, i) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el: HTMLAnchorElement | null) => {
                    linkEls.current[i] = el;
                  }}
                  className={`nav-link-item text-[11px] tracking-[0.14em] uppercase transition-colors duration-300 ${
                    activeIndex === i
                      ? "text-cream font-medium"
                      : "text-cream/55 hover:text-cream/80"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  ref={(el) => {
                    linkEls.current[i] = el;
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIndex(i);
                    const id = link.href.replace("#", "");
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    window.history.replaceState(null, "", link.href);
                  }}
                  className={`nav-link-item text-[11px] tracking-[0.14em] uppercase transition-colors duration-300 ${
                    activeIndex === i
                      ? "text-cream font-medium"
                      : "text-cream/55 hover:text-cream/80"
                  }`}
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
              className="p-2 text-cream/70 hover:text-gold transition-colors nav-tactile"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileOpen ? (
                <X size={22} weight="light" />
              ) : (
                <List size={22} weight="light" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile panel — CSS transitions instead of Framer Motion */}
      <div
        className="fixed inset-0 z-50 bg-surface transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
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
            className="p-2 text-cream/70 nav-tactile"
            aria-label="Cerrar menú"
          >
            <X size={22} weight="light" />
          </button>
        </div>
        <div className="flex flex-col items-start gap-1 px-6 pt-8">
          {navLinks.map((link, i) => (
            <a
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
              className="font-display text-2xl font-light tracking-wide text-cream py-3 border-b border-cream/5 w-full nav-tactile transition-all duration-400"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateX(0)" : "translateX(24px)",
                transitionDelay: mobileOpen ? `${0.1 + i * 0.06}s` : "0s",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="absolute bottom-12 left-6 right-6">
          <div className="text-xs tracking-[0.2em] text-cream/30 uppercase">
            Corporación GC
          </div>
        </div>
      </div>
    </>
  );
}
