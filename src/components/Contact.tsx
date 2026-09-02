import { useState } from "react";
import { Button } from "./ui/button";
import { supabase } from "@/lib/supabase";
import { useI18n } from "@/lib/i18n";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send } from "lucide-react";

export function Contact() {
  const { tr } = useI18n();
  const c = tr.contact;
  const { ref, isVisible } = useScrollReveal();

  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const { error } = await supabase.from("contacts").insert([{
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        status: "new",
      }]);

      if (error) throw error;

      try {
        const NOTIFY_URL = import.meta.env.VITE_NOTIFY_URL || "http://localhost:3001/api/notify";
        await fetch(NOTIFY_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData }),
        });
      } catch {
        console.warn("⚠️ Email notification unavailable");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("Error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="bg-background relative py-20 sm:py-24">
      {/* Luz decorativa */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[35%] bg-[#00BFFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto relative z-10 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
              {c.title}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">{c.subtitle}</p>
        </div>

        {/* Formulario full-width */}
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl p-6 lg:p-8">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white">{c.form_title}</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{c.form_subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Nombre + Email en fila */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-300 uppercase tracking-wider">{c.name} *</label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange}
                    required disabled={status === "sending"}
                    placeholder={c.name_placeholder}
                    className="w-full px-4 py-3 bg-background/75 border border-[#1d5a96] text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:border-[#5F33FF] focus:ring-1 focus:ring-[#5F33FF] transition-all disabled:opacity-50 text-xs sm:text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-300 uppercase tracking-wider">{c.email_label} *</label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    required disabled={status === "sending"}
                    placeholder={c.email_placeholder}
                    className="w-full px-4 py-3 bg-background/75 border border-[#1d5a96] text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:border-[#5F33FF] focus:ring-1 focus:ring-[#5F33FF] transition-all disabled:opacity-50 text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Asunto */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-slate-300 uppercase tracking-wider">{c.subject} *</label>
                <select
                  id="subject" name="subject"
                  value={formData.subject} onChange={handleChange}
                  required disabled={status === "sending"}
                  className="w-full px-4 py-3 bg-background/75 border border-[#1d5a96] text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:border-[#5F33FF] focus:ring-1 focus:ring-[#5F33FF] transition-all disabled:opacity-50 text-xs sm:text-sm appearance-none relative"
                >
                  <option value="" className="bg-[#071e3d]">{c.subject_placeholder}</option>
                  {c.subjects.map((s) => (
                    <option key={s} value={s} className="bg-[#071e3d]">{s}</option>
                  ))}
                </select>
              </div>

              {/* Mensaje */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-300 uppercase tracking-wider">{c.message} *</label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  required disabled={status === "sending"}
                  rows={4} placeholder={c.message_placeholder}
                  className="w-full px-4 py-3 bg-background/75 border border-[#1d5a96] text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:border-[#5F33FF] focus:ring-1 focus:ring-[#5F33FF] transition-all disabled:opacity-50 text-xs sm:text-sm"
                />
              </div>

              {/* Estado de envío */}
              {status === "success" && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs text-center font-bold">
                  {c.success}
                </div>
              )}

              {status === "error" && (
                <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-400 text-xs text-center font-bold">
                  {c.error}
                </div>
              )}

              {/* Enviar */}
              <div className="pt-2">
                <Button
                  type="submit" disabled={status === "sending"}
                  className="w-full btn-primary-gradient border-0 font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-[#5f33ff]/15 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-1.5 text-xs"
                >
                  {status === "sending" ? (
                    c.sending
                  ) : (
                    <>
                      {c.submit} <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </Button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
