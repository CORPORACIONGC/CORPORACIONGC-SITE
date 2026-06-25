"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import {
  CalendarBlank,
  Clock,
  Buildings,
  CaretRight,
  CaretLeft,
} from "@phosphor-icons/react";

/* ──────────────────────────────────────────────────────────────────────────
   Datos de los mazos. Cada "deck" es una sesión de la capacitación.
   Para sumar la próxima sesión, basta con añadir otro objeto a DECKS.
   ────────────────────────────────────────────────────────────────────────── */

type Fact = { icon: "building" | "calendar" | "clock"; text: string };
type Person = { name: string; role: string; accent: "burgundy" | "gold" };

type CardData = {
  id: string;
  eyebrow: string;
  title: string;
  image?: string;
  imageAlt?: string;
  imagePos?: string;
  lead?: string;
  body?: string[];
  quote?: string;
  facts?: Fact[];
  people?: Person[];
  footnote?: string;
};

type Deck = {
  id: string;
  label: string;
  title: string;
  meta: string;
  blurb: string;
  cards: CardData[];
};

const DECKS: Deck[] = [
  {
    id: "sesion-1",
    label: "Sesión 1 de 3",
    title: "Bases generales y caso práctico",
    meta: "Capacitación a ELEINMSA · 13 de junio de 2026",
    blurb:
      "El marco conceptual del equilibrio económico en la contratación administrativa, a cargo del Dr. González Camacho.",
    cards: [
      {
        id: "s1-resumen",
        eyebrow: "Reseña",
        title: "Equilibrio económico y reajuste de precios",
        image: "/images/oscar-imsa-equilibrio.jpg",
        imageAlt:
          "Dr. Óscar Eduardo González Camacho y Allan Ugalde Rojas en la capacitación a ELEINMSA",
        imagePos: "50% 60%",
        facts: [
          { icon: "building", text: "Cliente: ELEINMSA — Electrónica Industrial y Médica S.A." },
          { icon: "calendar", text: "Sábado 13 de junio de 2026" },
          { icon: "clock", text: "8:00 a. m. a 12:00 m. d. · Primera de tres sesiones" },
        ],
        people: [
          {
            name: "Dr. Óscar Eduardo González Camacho",
            role: "Exmagistrado de la Sala Primera de la Corte Suprema",
            accent: "burgundy",
          },
          {
            name: "Allan Ugalde Rojas",
            role: "Coexpositor · Exgerente de Contratación Administrativa, CGR",
            accent: "gold",
          },
        ],
      },
      {
        id: "s1-ponencia",
        eyebrow: "La ponencia del Dr. González",
        title: "El marco conceptual del equilibrio económico",
        image: "/images/oscar-imsa-ponencia.jpg",
        imageAlt:
          "Dr. Óscar Eduardo González Camacho exponiendo el equilibrio económico del contrato",
        imagePos: "38% 42%",
        lead:
          "El Dr. González Camacho expuso las bases de la materia: qué protege el derecho —la ecuación financiera del contrato—, cuándo se rompe ese equilibrio y cómo se distingue un reajuste de un reclamo de daños.",
        quote: "El derecho es el equilibrio, no la fórmula.",
        footnote: "Primera de tres sesiones del ciclo.",
      },
      {
        id: "s1-claves",
        eyebrow: "Alcance",
        title: "El tratamiento de la materia",
        image: "/images/oscar-imsa-ponencia-contrato.jpg",
        imageAlt:
          "Dr. Óscar Eduardo González Camacho durante la ponencia sobre el contrato público y el equilibrio económico",
        imagePos: "52% 72%",
        body: [
          "La ponencia abordó, con respaldo doctrinal y jurisprudencial, los fundamentos del equilibrio económico: su naturaleza jurídica y el alcance de la protección que el ordenamiento reconoce a la ecuación financiera del contrato.",
          "Sobre esa base se delimitaron las figuras centrales de la materia —la asignación del riesgo, el restablecimiento del equilibrio y la distinción entre reajuste y resarcimiento—, con el rigor con que Corporación GC acompaña a sus clientes.",
        ],
        footnote: "Marco conceptual · Dr. González Camacho",
      },
    ],
  },
];

const FACT_ICONS = {
  building: Buildings,
  calendar: CalendarBlank,
  clock: Clock,
} as const;

const pad = (n: number) => String(n).padStart(2, "0");

/* ──────────────────────────────────────────────────────────────────────────
   Cara de una tarjeta — vertical en móvil, apaisada en escritorio
   ────────────────────────────────────────────────────────────────────────── */
function CardFace({ card, flip }: { card: CardData; flip: boolean }) {
  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-cream/[0.09] bg-surface-alt ${
        flip ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
      style={{
        boxShadow:
          "0 18px 40px -28px rgba(8,3,6,0.5), inset 0 1px 0 0 rgba(255,255,255,0.05)",
      }}
    >
      {card.image && (
        <div className="relative h-52 w-full shrink-0 overflow-hidden lg:h-auto lg:w-[44%]">
          <Image
            src={card.image}
            alt={card.imageAlt ?? ""}
            width={900}
            height={900}
            className="h-full w-full object-cover"
            style={{ objectPosition: card.imagePos ?? "center" }}
            draggable={false}
          />
          {/* Hairline dorada: abajo en móvil, lateral en escritorio */}
          <div
            className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:inset-x-auto lg:inset-y-0 lg:h-auto lg:w-px lg:bg-gradient-to-b ${
              flip ? "lg:left-0" : "lg:right-0"
            }`}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-7 md:p-8 lg:p-10 lg:justify-center">
        <div className="mb-4 flex items-center gap-2.5">
          <span className="h-px w-5 bg-gold/70" />
          <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-gold/85">
            {card.eyebrow}
          </span>
        </div>

        <h3 className="mb-5 font-display text-[1.4rem] md:text-[1.55rem] lg:text-[1.85rem] leading-[1.12] tracking-tight text-cream">
          {card.title}
        </h3>

        {card.lead && (
          <p className="mb-5 text-[13.5px] lg:text-[15px] leading-relaxed text-cream/65">
            {card.lead}
          </p>
        )}

        {card.body && (
          <div className="flex flex-1 flex-col justify-center gap-4">
            {card.body.map((p, i) => (
              <p key={i} className="text-[13.5px] lg:text-[14.5px] leading-relaxed text-cream/65">
                {p}
              </p>
            ))}
          </div>
        )}

        {card.quote && (
          <figure className="my-2 border-l-2 border-gold/55 pl-5">
            <blockquote className="font-display text-[1.35rem] lg:text-[1.6rem] italic leading-[1.25] tracking-tight text-cream/90">
              El derecho es el equilibrio, no la f&oacute;rmula.
            </blockquote>
            <figcaption className="mt-2.5 text-[10px] uppercase tracking-[0.2em] text-cream/35">
              Idea central de la ponencia
            </figcaption>
          </figure>
        )}

        {card.facts && (
          <div className="mb-6 space-y-3">
            {card.facts.map((f, i) => {
              const Icon = FACT_ICONS[f.icon];
              return (
                <div key={i} className="flex items-start gap-3">
                  <Icon size={16} weight="duotone" className="mt-0.5 shrink-0 text-gold/75" />
                  <p className="text-[12.5px] lg:text-[13.5px] leading-relaxed text-cream/65">
                    {f.text}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {card.people && (
          <div className="mt-auto space-y-3 border-t border-cream/[0.08] pt-5">
            {card.people.map((p, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span
                  className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                    p.accent === "gold" ? "bg-gold" : "bg-burgundy-light"
                  }`}
                />
                <p className="text-[12.5px] lg:text-[13.5px] leading-snug">
                  <span className="font-medium text-cream/90">{p.name}</span>
                  <br />
                  <span className="text-cream/45">{p.role}</span>
                </p>
              </div>
            ))}
          </div>
        )}

        {card.footnote && (
          <p className="mt-auto pt-5 text-[11px] tracking-wide text-cream/35">{card.footnote}</p>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Mazo interactivo de tarjetas 3D
   ────────────────────────────────────────────────────────────────────────── */
const SWIPE_THRESHOLD = 90;
const SPRING = "cubic-bezier(0.22, 1, 0.36, 1)";

function CardDeck({ deck, flip }: { deck: Deck; flip: boolean }) {
  const [cards, setCards] = useState<CardData[]>(deck.cards);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [exitDir, setExitDir] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [noTransId, setNoTransId] = useState<string | null>(null);
  const startX = useRef(0);

  const total = cards.length;
  const frontIndex = deck.cards.findIndex((c) => c.id === cards[0].id);

  const next = useCallback(
    (dir = 1) => {
      if (animating) return;
      setAnimating(true);
      setExitDir(dir);
      setExiting(true);
      setDragging(false);
      setDragX(0);
      window.setTimeout(() => {
        setCards((p) => {
          setNoTransId(p[0].id);
          return [...p.slice(1), p[0]];
        });
        setExiting(false);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setNoTransId(null);
            setAnimating(false);
          })
        );
      }, 440);
    },
    [animating]
  );

  const prev = useCallback(() => {
    if (animating) return;
    setCards((p) => [p[p.length - 1], ...p.slice(0, -1)]);
  }, [animating]);

  const jumpTo = useCallback(
    (id: string) => {
      if (animating) return;
      setCards((p) => {
        const i = p.findIndex((c) => c.id === id);
        if (i <= 0) return p;
        return [...p.slice(i), ...p.slice(0, i)];
      });
    },
    [animating]
  );

  const onPointerDown = (e: React.PointerEvent) => {
    if (animating) return;
    setDragging(true);
    startX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragX(e.clientX - startX.current);
  };
  const endDrag = () => {
    if (!dragging) return;
    if (Math.abs(dragX) > SWIPE_THRESHOLD) next(dragX < 0 ? 1 : -1);
    else {
      setDragging(false);
      setDragX(0);
    }
  };

  return (
    <div>
      {/* Panel de contexto */}
      <div className="mb-10 lg:mb-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-7 bg-gold" />
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gold/85">
              {deck.label}
            </span>
          </div>
          <h3 className="font-display text-3xl md:text-[2.5rem] leading-[1.05] tracking-tight text-cream">
            {deck.title}
          </h3>
        </div>
        <div className="mt-5 lg:mt-0 lg:max-w-[42%] lg:text-right">
          <p className="text-[13px] uppercase tracking-[0.12em] text-cream/40">{deck.meta}</p>
          <p className="mt-3 text-[14px] leading-relaxed text-cream/55">{deck.blurb}</p>
        </div>
      </div>

      {/* Escenario 3D */}
      <div className="flex justify-center">
        <div
          className="relative h-[724px] w-full max-w-[400px] lg:h-[480px] lg:max-w-[1000px]"
          style={{ perspective: 1800 }}
        >
          {cards.map((card, d) => {
            const isFront = d === 0;
            let transform: string;
            let opacity: number;
            let transition: string;
            let zIndex: number;

            if (isFront && exiting) {
              transform = `translateX(${exitDir * 155}%) rotateZ(${exitDir * 12}deg) translateZ(60px)`;
              opacity = 0;
              zIndex = 60;
              transition = `transform 0.44s ${SPRING}, opacity 0.44s ease`;
            } else if (isFront && dragging) {
              transform = `translateX(${dragX}px) rotateZ(${dragX * 0.03}deg)`;
              opacity = 1;
              zIndex = 60;
              transition = "none";
            } else {
              const rot = d === 1 ? -1.6 : d === 2 ? 1.8 : 0;
              transform = `translateY(${d * 15}px) translateZ(${-d * 90}px) rotateZ(${rot}deg)`;
              opacity = d < 3 ? 1 - d * 0.3 : 0;
              zIndex = 50 - d;
              transition =
                card.id === noTransId
                  ? "none"
                  : `transform 0.5s ${SPRING}, opacity 0.5s ease`;
            }

            return (
              <div
                key={card.id}
                className="absolute inset-x-0 top-0 h-[700px] select-none lg:h-[464px]"
                style={{
                  transform,
                  opacity,
                  zIndex,
                  transition,
                  touchAction: "pan-y",
                  cursor: isFront ? (dragging ? "grabbing" : "grab") : "default",
                  pointerEvents: isFront && !exiting ? "auto" : "none",
                }}
                onPointerDown={isFront ? onPointerDown : undefined}
                onPointerMove={isFront ? onPointerMove : undefined}
                onPointerUp={isFront ? endDrag : undefined}
                onPointerCancel={isFront ? endDrag : undefined}
                aria-hidden={!isFront}
              >
                <CardFace card={card} flip={flip} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Controles */}
      <div className="mx-auto mt-9 flex max-w-[1000px] items-center justify-between gap-6 lg:mt-11">
        <div className="flex items-baseline gap-1 font-body">
          <span className="text-xl font-semibold leading-none text-cream tabular-nums">
            {pad(frontIndex + 1)}
          </span>
          <span className="text-[13px] text-cream/35 tabular-nums">/ {pad(total)}</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            {deck.cards.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => jumpTo(c.id)}
                aria-label={`Ir a la tarjeta ${i + 1}`}
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  i === frontIndex ? "w-9 bg-gold" : "w-4 bg-cream/20 hover:bg-cream/40"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={prev}
              disabled={animating}
              aria-label="Tarjeta anterior"
              className="grid h-11 w-11 place-items-center rounded-full border border-cream/[0.14] text-cream/60 transition-all duration-300 hover:border-gold/45 hover:text-gold active:scale-[0.94] disabled:opacity-40"
            >
              <CaretLeft size={16} weight="bold" />
            </button>
            <button
              type="button"
              onClick={() => next(1)}
              disabled={animating}
              aria-label="Siguiente tarjeta"
              className="grid h-11 w-11 place-items-center rounded-full bg-burgundy text-white transition-all duration-300 hover:bg-burgundy-light active:scale-[0.94] disabled:opacity-40"
              style={{ boxShadow: "0 10px 22px -14px rgba(107,29,58,0.5)" }}
            >
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-5 max-w-[1000px] text-[11px] tracking-wide text-cream/30">
        Deslizá las tarjetas o usá las flechas.
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Sección
   ────────────────────────────────────────────────────────────────────────── */
export function OscarCapacitacionEleinmsa() {
  return (
    <section className="relative bg-surface py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Encabezado */}
        <AnimatedEntry>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-cream/55">
              Capacitaci&oacute;n a clientes
            </span>
          </div>
        </AnimatedEntry>

        <AnimatedEntry delay={0.1}>
          <h2 className="mb-5 max-w-[20ch] font-display text-3xl md:text-5xl leading-[1.03] tracking-tighter text-cream">
            Equilibrio econ&oacute;mico y{" "}
            <span className="text-burgundy-light">reajuste de precios</span>
          </h2>
        </AnimatedEntry>

        <AnimatedEntry delay={0.15}>
          <p className="mb-16 max-w-[62ch] text-[15px] md:text-base leading-relaxed text-cream/55">
            Corporaci&oacute;n GC capacit&oacute; al equipo de{" "}
            <span className="font-medium text-cream/80">ELEINMSA</span>{" "}
            <span className="text-cream/45">(Electr&oacute;nica Industrial y M&eacute;dica S.A.)</span>{" "}
            sobre el equilibrio econ&oacute;mico de los contratos p&uacute;blicos y el reajuste de
            precios en la contrataci&oacute;n administrativa.
          </p>
        </AnimatedEntry>

        {/* Mazos (uno por sesión) */}
        <div className="flex flex-col gap-24 lg:gap-28">
          {DECKS.map((deck, i) => (
            <AnimatedEntry key={deck.id} delay={0.2}>
              <CardDeck deck={deck} flip={i % 2 === 1} />
            </AnimatedEntry>
          ))}
        </div>
      </div>

      {/* JSON-LD EducationEvent — para que Google e IA indexen la capacitación */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationEvent",
            name: "Equilibrio económico de los contratos públicos y reajuste de precios — Sesión 1",
            description:
              "Primera sesión de la capacitación impartida por Corporación GC a su cliente ELEINMSA (Electrónica Industrial y Médica S.A.) sobre el equilibrio económico de los contratos públicos y el reajuste de precios en la contratación administrativa.",
            startDate: "2026-06-13T08:00:00-06:00",
            endDate: "2026-06-13T12:00:00-06:00",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            about: "Equilibrio económico y reajuste de precios en la contratación administrativa",
            inLanguage: "es-CR",
            image: "https://www.corporaciongc.com/images/oscar-imsa-equilibrio.jpg",
            organizer: {
              "@type": "Organization",
              name: "Corporación GC",
              url: "https://www.corporaciongc.com",
            },
            performer: [
              {
                "@type": "Person",
                name: "Dr. Óscar Eduardo González Camacho",
                "@id": "https://www.corporaciongc.com/abogados/oscar-gonzalez#person",
              },
              { "@type": "Person", name: "Allan Ugalde Rojas" },
            ],
            audience: {
              "@type": "BusinessAudience",
              name: "ELEINMSA — Electrónica Industrial y Médica S.A.",
            },
          }),
        }}
      />
    </section>
  );
}
