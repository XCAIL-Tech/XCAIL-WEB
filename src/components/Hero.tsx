import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { useI18n } from "@/lib/i18n";
import { NetworkBackground } from "./ui/NetworkBackground";
import { calTriggerProps } from "@/lib/cal";

export function Hero() {
  const { tr } = useI18n();
  const h = tr.hero;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-xcail-hero pt-24 pb-16 lg:py-28"
    >
      {/* Fondo Canvas Dinámico */}
      <NetworkBackground />

      {/* Sombras e Iluminaciones de Fondo (Blobs de color) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#5F33FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00BFFF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto">
        <div className="space-y-6 text-left">
          {/* Headline Principal — nombre de marca apilado.
              "Technologies" ocupa exactamente el mismo ancho que "XCAIL":
              el contenedor inline-flex/flex-col se dimensiona al ancho de
              XCAIL (el hijo más ancho), items-stretch fuerza a Technologies
              a estirarse a ese mismo ancho, y text-align: justify (+ last)
              reparte el espacio entre cada letra para llenarlo exacto —
              sin necesidad de adivinar font-size/tracking a mano. */}
          <h1 className="inline-flex flex-col items-stretch">
            <span className="animate-brand-pulse whitespace-nowrap text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-none bg-gradient-to-r from-[#00BFFF] via-[#5F33FF] to-[#0099CC] text-transparent bg-clip-text">
              {h.h1_line1}
            </span>
            <span
              className="block mt-3 text-sm sm:text-base font-bold uppercase bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text"
              style={{ textAlign: "justify", textAlignLast: "justify" }}
            >
              {h.h1_line2.split("").join(" ")}
            </span>
          </h1>

          {/* Subheadline */}
          <div className="space-y-1.5">
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed md:whitespace-nowrap">
              {h.subheadline}
            </p>
            <p className="text-sm sm:text-base text-slate-500 font-semibold">
              {h.creators}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              asChild
              className="btn-primary-gradient px-6 py-6 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#5f33ff]/20 border-0 cursor-pointer"
            >
              <a href="#products">
                {h.cta_primary} <ArrowRight className="w-4.5 h-4.5" />
              </a>
            </Button>

            <Button
              type="button"
              variant="outline"
              {...calTriggerProps}
              className="dark:bg-[#0d2d58]/60 dark:hover:bg-[#1a4e84]/80 bg-white/70 hover:bg-white dark:text-white text-foreground dark:border-[#1d5a96] dark:hover:border-[#2a6aaa] border-border px-6 py-6 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md backdrop-blur-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" /> {h.cta_secondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
