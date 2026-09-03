import { useI18n } from "@/lib/i18n";
import { Award, ExternalLink } from "lucide-react";

export function Awards() {
  const { tr } = useI18n();
  const a = tr.awards;

  return (
    <section id="awards" className="bg-background relative py-20 sm:py-24">
      {/* Luz decorativa */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] h-[35%] bg-[#5f33ff]/5 rounded-full blur-[115px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
              {a.title}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">{a.subtitle}</p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">

          {/* ══ BRITCHAM ══════════════════════════════════════════════════ */}
          <div className="glass-card rounded-2xl p-6 lg:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#164272]/40 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">{a.britcham_title}</h3>
                  <p className="text-[10px] text-[#D4AF37] font-bold tracking-wide uppercase mt-1 leading-none">{a.britcham_badge}</p>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{a.britcham_body}</p>

            {/* Rejilla de fotos oficiales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">

              <figure className="space-y-2 group">
                <div className="w-full rounded-xl border border-[#1d5a96] dark:bg-[#071e3d] bg-slate-50 flex items-center justify-center p-4 h-[240px] overflow-hidden transition-all duration-300 group-hover:border-[#00BFFF]/50">
                  <img
                    src="/media/reconocimientos/britcham/certificado-dei.webp"
                    alt="Certificado oficial BritCham DEI"
                    className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="text-[10px] text-slate-400 font-semibold leading-relaxed group-hover:text-white transition-colors">{a.britcham_cert_caption}</figcaption>
              </figure>

              <figure className="space-y-2 group">
                <div className="w-full rounded-xl border border-[#1d5a96] dark:bg-[#071e3d] bg-slate-50 flex items-center justify-center p-4 h-[240px] overflow-hidden transition-all duration-300 group-hover:border-[#00BFFF]/50">
                  <img
                    src="/media/reconocimientos/britcham/foto-embajador-directivos.webp"
                    alt="Ceremonia BritCham con embajador británico"
                    className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="text-[10px] text-slate-400 font-semibold leading-relaxed group-hover:text-white transition-colors">{a.britcham_ceremony_caption}</figcaption>
              </figure>

              <figure className="space-y-2 group">
                <div className="w-full rounded-xl border border-[#1d5a96] dark:bg-[#071e3d] bg-slate-50 flex items-center justify-center p-4 h-[240px] overflow-hidden transition-all duration-300 group-hover:border-[#00BFFF]/50">
                  <img
                    src="/media/reconocimientos/britcham/entrega-jurado-embajada.webp"
                    alt="Entrega del reconocimiento en la Embajada Británica"
                    className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="text-[10px] text-slate-400 font-semibold leading-relaxed group-hover:text-white transition-colors">{a.britcham_award_caption}</figcaption>
              </figure>

            </div>
          </div>

          {/* ══ SADOSKY ══════════════════════════════════════════════════ */}
          <div className="glass-card rounded-2xl p-6 lg:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#164272]/40 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">{a.sadosky_title}</h3>
                  <p className="text-[10px] text-[#D4AF37] font-bold tracking-wide uppercase mt-1 leading-none">{a.sadosky_badge}</p>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{a.sadosky_body}</p>

            {/* Certificados Sadosky */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="group rounded-xl border border-[#1d5a96] dark:bg-[#071e3d] bg-slate-50 p-4 flex items-center justify-center h-[280px] overflow-hidden transition-all duration-300 group-hover:border-[#00BFFF]/50">
                <img
                  src="/media/reconocimientos/sadosky/certificado-innovacion-transformadora.webp"
                  alt="Certificado Innovación Transformadora — Premios Sadosky 2025"
                  className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-102"
                />
              </div>
              <div className="group rounded-xl border border-[#1d5a96] dark:bg-[#071e3d] bg-slate-50 p-4 flex items-center justify-center h-[280px] overflow-hidden transition-all duration-300 group-hover:border-[#00BFFF]/50">
                <img
                  src="/media/reconocimientos/sadosky/certificado-impacto-digital.webp"
                  alt="Certificado Impacto Digital — Premios Sadosky 2025"
                  className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            </div>
          </div>

          {/* ══ PREMIOS VERDES ══════════════════════════════════════════════ */}
          <div className="glass-card rounded-2xl p-6 lg:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#164272]/40 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">{a.premiosverdes_title}</h3>
                  <p className="text-[10px] text-[#D4AF37] font-bold tracking-wide uppercase mt-1 leading-none">{a.premiosverdes_badge}</p>
                </div>
              </div>
              <a
                href="https://500-mejores.premiosverdes.org/es/proyecto-500-mejores?proyecto=asistea-carlos-ezequiel-leiva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl border border-[#1d5a96] text-[#00BFFF] hover:border-[#00BFFF] transition-colors whitespace-nowrap w-fit"
              >
                {a.premiosverdes_cta} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{a.premiosverdes_body}</p>

            {/* Pieza de selección Top 500 + certificado de participación */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <figure className="space-y-2 group">
                <div className="w-full rounded-xl border border-[#1d5a96] dark:bg-[#071e3d] bg-slate-50 flex items-center justify-center p-4 h-[280px] overflow-hidden transition-all duration-300 group-hover:border-[#00BFFF]/50">
                  <img
                    src="/media/reconocimientos/premios-verdes/500M.webp"
                    alt="AsisTEA — Top 500 Premios Verdes 2026"
                    className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="text-[10px] text-slate-400 font-semibold leading-relaxed group-hover:text-white transition-colors">{a.premiosverdes_gif_caption}</figcaption>
              </figure>
              <figure className="space-y-2 group">
                <div className="w-full rounded-xl border border-[#1d5a96] dark:bg-[#071e3d] bg-slate-50 flex items-center justify-center p-4 h-[280px] overflow-hidden transition-all duration-300 group-hover:border-[#00BFFF]/50">
                  <img
                    src="/media/reconocimientos/premios-verdes/certificado_participacion.webp"
                    alt="Certificado oficial de participación — Premios Verdes 2026"
                    className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="text-[10px] text-slate-400 font-semibold leading-relaxed group-hover:text-white transition-colors">{a.premiosverdes_cert_caption}</figcaption>
              </figure>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
