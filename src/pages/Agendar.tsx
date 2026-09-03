import Cal from "@calcom/embed-react";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useI18n } from "@/lib/i18n";
import { CAL_LINK, CAL_NAMESPACE, useCalInit } from "@/lib/cal";

export default function Agendar() {
  const { tr } = useI18n();
  const s = tr.schedule;
  useCalInit();

  return (
    <>
      <Navbar />
      <main className="container py-10 sm:py-14 max-w-4xl mx-auto">
        {/* Salida siempre visible — en mobile la navbar está colapsada */}
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#00BFFF] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> {s.back}
        </a>

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">{s.title}</h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            {s.subtitle}
          </p>
        </div>

        <div className="rounded-2xl border border-[#1d5a96]/50 bg-card/40 overflow-hidden min-h-[640px]">
          <Cal
            namespace={CAL_NAMESPACE}
            calLink={CAL_LINK}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "dark" }}
          />
        </div>

        {/* Segunda salida al pie, para después de reservar */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#00BFFF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {s.back}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
