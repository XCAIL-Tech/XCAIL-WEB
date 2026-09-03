import { useI18n } from "@/lib/i18n";
import { Linkedin } from "lucide-react";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2.5 before:content-[''] before:block before:w-1.5 before:h-5 before:rounded-full before:bg-[#00BFFF] before:shadow-[0_0_8px_#00BFFF]">
      {children}
    </h3>
  );
}

export function About() {
  const { tr } = useI18n();
  const a = tr.about;

  return (
    <section id="about" className="bg-background relative py-20 sm:py-28">
      {/* Luces decorativas */}
      <div className="absolute top-[10%] right-[-10%] w-[35%] h-[35%] bg-[#5f33ff]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Encabezado de Sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
              {a.title}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">{a.subtitle}</p>
        </div>

        {/* ── Stats grid ── */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {a.stats.map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-5 text-center">
              <p className="text-3xl font-extrabold text-[#00BFFF] mb-1.5 tracking-tight">{s.value}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Layout: Sobre XCAIL + Timeline */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-stretch mb-12">

          {/* Sobre XCAIL */}
          <div className="glass-card rounded-2xl p-6 lg:p-8 space-y-4">
            <img
              src="/media/logos/XCAIL-LOGO-2026.png"
              alt="XCAIL Technologies"
              className="h-8 w-auto object-contain object-left mb-3"
            />
            <SectionHeading>{a.company_section_title}</SectionHeading>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{a.company_p1}</p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{a.company_p2}</p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{a.company_p3}</p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{a.company_p4}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="bg-background/50 border border-[#00BFFF]/30 rounded-xl p-4">
                <p className="text-xs font-bold text-[#00BFFF] mb-1 tracking-wide">{a.asistea_mini_title}</p>
                <p className="text-[11px] text-slate-400 leading-relaxed">{a.asistea_mini_desc}</p>
              </div>
              <div className="bg-background/50 border border-[#00BFFF]/30 rounded-xl p-4">
                <p className="text-xs font-bold text-[#00BFFF] mb-1 tracking-wide">{a.ohm_mini_title}</p>
                <p className="text-[11px] text-slate-400 leading-relaxed">{a.ohm_mini_desc}</p>
              </div>
              <div className="bg-background/50 border border-[#fca311]/30 rounded-xl p-4">
                <p className="text-xs font-bold text-[#fca311] mb-1 tracking-wide">{a.stroke_mini_title}</p>
                <p className="text-[11px] text-slate-400 leading-relaxed">{a.stroke_mini_desc}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">{a.company_closing}</p>
          </div>

          {/* Timeline */}
          <div className="glass-card rounded-2xl p-6 lg:p-8">
            <SectionHeading>{a.timeline_title}</SectionHeading>

            <div className="relative mt-6 space-y-0">
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#00BFFF] via-[#5F33FF] to-transparent shadow-[0_0_8px_#00BFFF]" />

              {a.timeline.map((item, i) => (
                <div key={i} className="flex gap-5 pb-8 last:pb-0">
                  <div className="flex flex-col items-center shrink-0 z-10">
                    <div className="w-10 h-10 rounded-full bg-card border-2 border-[#00BFFF] flex items-center justify-center shadow-[0_0_15px_rgba(0,191,255,0.3)]">
                      <span className="text-[#00BFFF] text-[10px] font-extrabold">{item.year}</span>
                    </div>
                  </div>
                  <div className="pt-1 bg-card/50 border border-[#1d5a96]/50 p-4 rounded-xl flex-1 backdrop-blur-sm shadow-sm">
                    <span className="inline-block text-[9px] font-bold uppercase tracking-wider bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-[#00BFFF] px-2.5 py-1 rounded-full mb-2">
                      {item.badge}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Visión (full width) ── */}
        <div className="glass-card rounded-2xl p-6 lg:p-8 max-w-6xl mx-auto space-y-3 mb-12">
          <SectionHeading>{a.vision_title}</SectionHeading>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{a.vision_p1}</p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{a.vision_p2}</p>
        </div>

        {/* ── Liderazgo (full width) ── */}
        <div className="glass-card rounded-2xl p-6 lg:p-8 max-w-6xl mx-auto space-y-6 mb-12">
          <SectionHeading>{a.leadership_title}</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 items-start">
            <div className="flex flex-col items-center sm:items-start gap-4 sm:w-44">
              <div className="w-28 h-28 rounded-2xl overflow-hidden border border-[#00BFFF]/30 shrink-0 shadow-[0_8px_25px_rgba(0,0,0,0.3)]">
                <img
                  src="/media/equipo/carlos.jpg"
                  alt="Carlos Ezequiel Leiva — Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-extrabold text-sm text-white">{a.founder_name}</p>
                <p className="text-[10px] text-[#00BFFF] font-bold tracking-wide mt-1 uppercase">{a.founder_role}</p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <a
                  href="https://www.linkedin.com/in/c-e-leiva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#0A66C2] text-white text-[10px] font-bold uppercase tracking-wider py-2.5 rounded-xl hover:bg-[#0958a8] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  {a.linkedin_btn}
                </a>
                <a
                  href="https://www.linkedin.com/company/xcail-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-transparent border border-[#0A66C2] text-[#0A66C2] text-[10px] font-bold uppercase tracking-wider py-2.5 rounded-xl hover:bg-[#0A66C2]/10 transition-colors"
                >
                  {a.company_linkedin}
                </a>
              </div>
            </div>

            <div className="space-y-3">
              {a.founder_bio.map((paragraph, i) => (
                <p key={i} className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#164272]/40">
            <p className="text-[10px] font-bold text-[#00BFFF] mb-3 uppercase tracking-widest">
              {a.founder_specializations_title}
            </p>
            <div className="flex flex-wrap gap-2">
              {a.founder_specializations.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-bold uppercase tracking-wider bg-card border border-[#1d5a96] text-slate-400 px-3 py-1.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
