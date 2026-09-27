"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 text-center">
      <h1 className="font-display text-5xl font-bold text-burgundy sm:text-6xl">
        Error
      </h1>
      <p className="mt-4 text-lg text-cream/80">
        Algo salió mal. Por favor, intenta de nuevo.
      </p>
      {error.message && (
        <p className="mt-2 max-w-md text-sm text-cream/50">{error.message}</p>
      )}
      <div className="mt-8 flex gap-4">
        <button
          onClick={reset}
          className="rounded-full border border-hilo bg-transparent px-6 py-3 text-sm font-medium text-hilo-texto transition-colors hover:bg-hilo hover:text-surface"
        >
          Reintentar
        </button>
        <Link
          href="/"
          className="rounded-full border border-cream/20 bg-transparent px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
