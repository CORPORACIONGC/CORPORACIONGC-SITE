"use client";

/* Reproductor liviano de YouTube: muestra la miniatura y solo carga el iframe
   cuando el lector pulsa. Lo usan las conferencias del perfil del Dr. González
   y los artículos que incrustan una ponencia. `start` arranca el video en un
   segundo dado, para llevar al lector directo a la intervención que importa. */

import { useState, useCallback } from "react";
import { Play } from "@phosphor-icons/react";

export function LiteYouTube({
  id,
  title,
  start,
}: {
  id: string;
  title: string;
  start?: number;
}) {
  const [active, setActive] = useState(false);

  const activate = useCallback(() => setActive(true), []);

  if (active) {
    const inicio = start ? `&start=${start}` : "";
    return (
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1${inicio}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={activate}
      aria-label={`Reproducir: ${title}`}
      className="relative w-full cursor-pointer group bg-neutral-900"
      style={{ paddingBottom: "56.25%" }}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/95 group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xl">
          <Play size={22} weight="fill" className="text-neutral-900 ml-0.5" />
        </div>
      </div>
    </button>
  );
}
