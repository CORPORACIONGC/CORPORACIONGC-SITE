"use client";

import {
  ArrowSquareOut,
  DownloadSimple,
  FilePdf,
} from "@phosphor-icons/react";

export function PDFViewer({ pdfFile }: { pdfFile: string }) {
  const pdfUrl = `/pdfs/${pdfFile}`;

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-cream/40 tracking-wider uppercase">
          Documento PDF
        </span>
        <div className="flex items-center gap-2">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cream/[0.10] text-xs text-cream/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
          >
            <ArrowSquareOut size={14} weight="regular" />
            Abrir
          </a>
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cream/[0.10] text-xs text-cream/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
          >
            <DownloadSimple size={14} weight="regular" />
            Descargar
          </a>
        </div>
      </div>

      {/* Mobile fallback */}
      <div className="block md:hidden p-8 rounded-xl border border-cream/[0.08] bg-cream/[0.03] text-center">
        <FilePdf
          size={48}
          weight="duotone"
          className="mx-auto text-burgundy mb-4"
        />
        <p className="text-sm text-cream/60 mb-2 font-medium">
          Documento completo disponible
        </p>
        <p className="text-xs text-cream/40 leading-relaxed mb-6 max-w-[35ch] mx-auto">
          Para una mejor experiencia de lectura, descargue el documento o ábralo
          en una nueva pestaña.
        </p>
        <div className="flex flex-col gap-2">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-burgundy text-cream text-sm font-medium active:scale-[0.98] transition-all duration-300"
          >
            <ArrowSquareOut size={16} weight="regular" />
            Abrir PDF
          </a>
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-cream/[0.10] text-cream/60 text-sm active:scale-[0.98] transition-all duration-300"
          >
            <DownloadSimple size={16} weight="regular" />
            Descargar
          </a>
        </div>
      </div>

      {/* Desktop PDF viewer — uses iframe for reliable browser rendering */}
      <div className="hidden md:block rounded-xl overflow-hidden border border-cream/[0.08] bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
        <iframe
          src={`${pdfUrl}#view=Fit`}
          className="w-full h-[80vh] min-h-[600px]"
          title="Visor de PDF"
        />
      </div>
    </div>
  );
}
