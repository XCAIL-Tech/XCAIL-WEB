import { useRef, useState } from "react";
import {
  ArrowRight, ChevronLeft, ChevronRight,
  Calendar, Sparkles, Activity, Users, BarChart2, SlidersHorizontal,
  ScanLine, WifiOff, Eye, Volume2, Smartphone,
  Siren, TrafficCone, TimerReset, Cloud,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { LucideIcon } from "lucide-react";

const ASISTEA_ICONS: LucideIcon[] = [Calendar, Sparkles, Activity, Users, BarChart2, SlidersHorizontal];
const CONNECT_ICONS: LucideIcon[] = [ScanLine, Sparkles, Eye, Volume2, WifiOff, Smartphone];
const STROKE_ICONS: LucideIcon[]  = [Siren, TrafficCone, TimerReset];

function FeatureCard({ title, desc, icon: Icon, accent }: {
  title: string; desc: string; icon: LucideIcon; accent: string;
}) {
  return (
    <div
      className="group flex flex-col gap-3.5 p-5 rounded-2xl border border-[#1d5a96]/60 bg-card hover:border-[#1d5a96] hover:bg-[#1a4e84] transition-all duration-300"
      style={{ ["--accent" as string]: accent }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${accent}12`, border: `1px solid ${accent}30` }}
      >
        <Icon className="w-5 h-5" style={{ color: accent }} />
      </div>
      <div>
        <p className="text-sm font-bold leading-snug text-white group-hover:text-[#00BFFF] transition-colors">{title}</p>
        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

interface Screenshot { src: string; label: string; }

// Alto fijo compartido por AsisTEA / Connect / Stroke — así los tres frames
// se ven del mismo tamaño en pantalla sin importar la proporción real de
// cada imagen (evita que Stroke, con su placeholder 16:9, se vea "más chico").
const FRAME_ASPECT = "aspect-[4/3]";
const SWIPE_THRESHOLD = 40;

function ScreenshotSlide({ src, label, fallbackLogo }: { src: string; label: string; fallbackLogo: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${FRAME_ASPECT} dark:bg-[#071e3d] bg-slate-100 w-full h-full`}>
      {!error && (
        <img
          src={src}
          alt={label}
          draggable={false}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 select-none ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
      {(!loaded || error) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
          <img src={fallbackLogo} alt="" className="w-24 h-auto opacity-30 animate-pulse" />
          <span className="text-[10px] tracking-wider text-slate-400 font-semibold bg-card border border-[#1d5a96] px-3.5 py-1.5 rounded-full shadow-inner">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

function ScreenshotCarousel({ slides, urlLabel, fallbackLogo }: { slides: Screenshot[]; urlLabel: string; fallbackLogo: string }) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const touchX = useRef<number | null>(null);

  const goPrev = () => setCurrent((c) => (c - 1 + total) % total);
  const goNext = () => setCurrent((c) => (c + 1) % total);

  function onTouchStart(e: React.TouchEvent) {
    touchX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    if (delta > SWIPE_THRESHOLD) goPrev();
    else if (delta < -SWIPE_THRESHOLD) goNext();
    touchX.current = null;
  }

  return (
    <div className="space-y-4">
      {/* Marco de Ventana macOS */}
      <div
        className="group rounded-2xl border border-[#1d5a96]/80 overflow-hidden bg-card shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="dark:bg-[#071e3d] bg-slate-200 border-b border-border dark:border-[#1d5a96]/60 px-4 py-3 flex items-center gap-2">
          {/* Botones de ventana */}
          <div className="flex gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          {/* Barra de dirección ficticia */}
          <div className="mx-auto max-w-[280px] w-full bg-background/80 text-[10px] text-slate-500 py-1 px-4 rounded-md border border-border dark:border-[#1d5a96]/40 text-center truncate select-none">
            {urlLabel}
          </div>
        </div>

        <ScreenshotSlide src={slides[current].src} label={slides[current].label} fallbackLogo={fallbackLogo} />

        {/* Flechas overlay — semi-transparentes, visibles al pasar el mouse
            (desktop) y con opacidad baja constante en touch, como affordance
            de que se puede deslizar */}
        {total > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            {/* Indicador de posición — sutil, dentro del marco */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#00BFFF] w-5" : "bg-white/40 w-1.5"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function Products() {
  const { tr } = useI18n();
  const p = tr.products;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="products" className="bg-background relative">
      {/* Luces decorativas */}
      <div className="absolute top-[20%] left-[-10%] w-[35%] h-[35%] bg-[#00BFFF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] bg-[#5f33ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto py-24 lg:py-32 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Encabezado */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
              {p.title}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">{p.subtitle}</p>
        </div>

        <div className="space-y-32 max-w-6xl mx-auto">

          {/* ══ AsisTEA ══════════════════════════════════════════════════ */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/35 text-emerald-400 text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {p.asistea.badge}
                </span>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">{p.asistea.title}</h3>
                  <p className="text-base text-[#00BFFF] font-medium leading-snug mt-2">{p.asistea.subtitle}</p>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{p.asistea.description}</p>

                <a
                  href="https://asistea.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary-gradient text-xs font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-[#5f33ff]/10"
                >
                  {p.asistea.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <ScreenshotCarousel slides={p.asistea.screenshots} urlLabel="https://asistea.app" fallbackLogo="/media/logos/asistea-logo.png" />
            </div>

            {/* Cómo funciona */}
            <div className="space-y-8 bg-card/40 border border-[#1d5a96]/40 rounded-3xl p-6 lg:p-10 backdrop-blur-sm">
              <p className="text-xs font-bold text-[#00BFFF] uppercase tracking-widest text-center sm:text-left">
                {p.asistea.how_it_works_title}
              </p>

              <div className="relative grid grid-cols-1 sm:grid-cols-4 gap-8">
                {/* Línea horizontal en desktop */}
                <div className="absolute top-5 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#00BFFF]/10 via-[#00BFFF]/35 to-[#00BFFF]/10 hidden sm:block pointer-events-none" />

                {p.asistea.how_it_works.map((s) => (
                  <div key={s.step} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4 relative">
                    <div className="w-10 h-10 rounded-full border border-[#00BFFF]/50 bg-[#00BFFF]/10 flex items-center justify-center z-10 shrink-0 shadow-[0_0_15px_rgba(0,191,255,0.15)]">
                      <span className="text-[#00BFFF] font-bold text-xs">{s.step}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white leading-snug">{s.title}</p>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {p.asistea.features.map((f, i) => (
                <FeatureCard key={f.title} title={f.title} desc={f.desc} icon={ASISTEA_ICONS[i] ?? Sparkles} accent="#00BFFF" />
              ))}
            </div>
          </div>

          <div className="border-t border-[#164272]/40" />

          {/* ══ INCLUXIA Connect ══════════════════════════════════════════════ */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
              <ScreenshotCarousel slides={p.ohm.screenshots} urlLabel="https://incluxia.app/connect" fallbackLogo="/media/logos/INCLUXIA-ISOLOGO.png" />

              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 bg-[#00BFFF]/10 border border-[#00BFFF]/35 text-[#00BFFF] text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] animate-pulse" />
                  {p.ohm.badge}
                </span>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">{p.ohm.title}</h3>
                  <p className="text-base text-[#00BFFF] font-medium leading-snug mt-2">{p.ohm.subtitle}</p>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{p.ohm.description}</p>

                <a
                  href="https://incluxia.app/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary-gradient text-xs font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-[#5f33ff]/10"
                >
                  {p.ohm.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {p.ohm.features.map((f, i) => (
                <FeatureCard key={f.title} title={f.title} desc={f.desc} icon={CONNECT_ICONS[i] ?? Cloud} accent="#00BFFF" />
              ))}
            </div>
          </div>

          <div className="border-t border-[#164272]/40" />

          {/* ══ INCLUXIA Stroke ══════════════════════════════════════════════ */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
              <ScreenshotCarousel slides={p.stroke.screenshots} urlLabel="https://incluxia.app/stroke" fallbackLogo="/media/logos/INCLUXIA-ISOLOGO.png" />

              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/35 text-amber-400 text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {p.stroke.badge}
                </span>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">{p.stroke.title}</h3>
                  <p className="text-base text-[#fca311] font-medium leading-snug mt-2">{p.stroke.subtitle}</p>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{p.stroke.description}</p>

                <a
                  href="https://incluxia.app/stroke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary-gradient text-xs font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-[#5f33ff]/10"
                >
                  {p.stroke.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {p.stroke.features.map((f, i) => (
                <FeatureCard key={f.title} title={f.title} desc={f.desc} icon={STROKE_ICONS[i] ?? Cloud} accent="#fca311" />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
