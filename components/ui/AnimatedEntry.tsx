"use client";

import { useRef, useEffect, useState, createContext, useContext } from "react";

// Context for StaggerContainer → StaggerItem communication.
// Using context (instead of cloneElement on direct children) lets
// StaggerItem work even when nested inside wrapper divs.
const StaggerCtx = createContext<{ isVisible: boolean; stagger: number; counter: { n: number }; inmediato: boolean } | null>(null);

/**
 * CSS-based replacement for Framer Motion AnimatedEntry.
 * Uses IntersectionObserver + CSS transitions (zero external dependencies).
 * Desaceleración exponencial, sin rebote: cubic-bezier(0.16, 1, 0.3, 1)
 */

export function AnimatedEntry({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  /* Si algo de adentro recibe el foco antes de que el bloque entre en
     pantalla (quien navega con Tab), se muestra al instante y sin
     transición: nunca hay un elemento enfocado e invisible (WCAG 2.4.7). */
  const [porFoco, setPorFoco] = useState(false);
  const alEnfocar = () => {
    if (isInView) return;
    setPorFoco(true);
    setIsInView(true);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "-60px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const offsets = {
    up: "translateY(20px)",
    down: "translateY(-32px)",
    left: "translateX(32px)",
    right: "translateX(-32px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      suppressHydrationWarning
      onFocus={alEnfocar}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translate(0, 0)" : offsets[direction],
        transition: porFoco
          ? "none"
          : `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: isInView ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/**
 * CSS-based StaggerContainer — observes visibility once, then notifies nested
 * StaggerItems via React Context. Works regardless of wrapper div nesting.
 */
export function StaggerContainer({
  children,
  className = "",
  stagger = 0.1,
  role,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  /** Rol ARIA del contenedor, p. ej. "list" cuando los elementos son una lista. */
  role?: React.AriaRole;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  /* Igual que AnimatedEntry: el foco muestra los elementos al instante. */
  const [porFoco, setPorFoco] = useState(false);
  const alEnfocar = () => {
    if (isInView) return;
    setPorFoco(true);
    setIsInView(true);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "-40px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // A mutable counter shared across renders assigns a monotonic index to each
  // StaggerItem descendant on render, so items get staggered delays even
  // when nested inside intermediate wrapper divs.
  const counter = { n: 0 };

  return (
    <StaggerCtx.Provider value={{ isVisible: isInView, stagger, counter, inmediato: porFoco }}>
      <div ref={ref} className={className} role={role} onFocus={alEnfocar}>
        {children}
      </div>
    </StaggerCtx.Provider>
  );
}

/**
 * CSS-based StaggerItem — reads visibility + delay from the nearest StaggerContainer
 * via React Context. Works at any nesting depth.
 */
export function StaggerItem({
  children,
  className = "",
  role,
}: {
  children: React.ReactNode;
  className?: string;
  /** Rol ARIA del elemento, p. ej. "listitem". */
  role?: React.AriaRole;
}) {
  const ctx = useContext(StaggerCtx);
  const isVisible = ctx?.isVisible ?? true;
  // Assign a stable index per item on this render pass
  const index = ctx ? ctx.counter.n++ : 0;
  const delay = (ctx?.stagger ?? 0) * index;

  return (
    <div
      className={className}
      role={role}
      suppressHydrationWarning
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: ctx?.inmediato
          ? "none"
          : `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
