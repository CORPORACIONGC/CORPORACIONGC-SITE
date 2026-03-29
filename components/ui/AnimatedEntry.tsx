"use client";

import { useRef, useEffect, useState, Children, cloneElement, isValidElement } from "react";

/**
 * CSS-based replacement for Framer Motion AnimatedEntry.
 * Uses IntersectionObserver + CSS transitions (zero external dependencies).
 * Spring-like cubic-bezier: cubic-bezier(0.34, 1.56, 0.64, 1)
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
    up: "translateY(32px)",
    down: "translateY(-32px)",
    left: "translateX(32px)",
    right: "translateX(-32px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translate(0, 0)" : offsets[direction],
        transition: `opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`,
        willChange: isInView ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/**
 * CSS-based StaggerContainer — observes visibility, then applies
 * staggered delays to each StaggerItem child via CSS custom property.
 */
export function StaggerContainer({
  children,
  className = "",
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

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

  // Inject stagger delay and visibility state into each StaggerItem child
  const enhancedChildren = Children.map(children, (child, index) => {
    if (isValidElement<{ _staggerDelay?: number; _isVisible?: boolean }>(child)) {
      return cloneElement(child, {
        _staggerDelay: index * stagger,
        _isVisible: isInView,
      });
    }
    return child;
  });

  return (
    <div ref={ref} className={className}>
      {enhancedChildren}
    </div>
  );
}

/**
 * CSS-based StaggerItem — receives delay and visibility from parent StaggerContainer.
 */
export function StaggerItem({
  children,
  className = "",
  _staggerDelay = 0,
  _isVisible = false,
}: {
  children: React.ReactNode;
  className?: string;
  _staggerDelay?: number;
  _isVisible?: boolean;
}) {
  return (
    <div
      className={className}
      style={{
        opacity: _isVisible ? 1 : 0,
        transform: _isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${_staggerDelay}s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${_staggerDelay}s`,
        willChange: _isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
