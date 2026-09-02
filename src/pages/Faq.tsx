import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

function buildFaqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export default function Faq() {
  const { tr } = useI18n();
  const faq = tr.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQPage schema — se inyecta en <head> al montar. Googlebot ejecuta JS al
  // renderizar (a diferencia de los bots de preview social, que solo leen el
  // HTML estático), así que esto sí es efectivo para resultados enriquecidos.
  // Se reinyecta si cambia el idioma para que el schema siempre refleje el
  // contenido visible en pantalla.
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(buildFaqJsonLd(faq.items));
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [faq.items]);

  return (
    <>
      <Navbar />
      <main className="container py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{faq.title}</h1>
        <p className="text-sm text-muted-foreground mb-10">{faq.subtitle}</p>

        <div className="space-y-3">
          {faq.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-[#1d5a96]/60 bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="text-sm font-bold text-foreground">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-[#00BFFF] transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-[#1d5a96]/60 bg-card px-6 py-6 text-center">
          <p className="text-sm font-bold text-foreground mb-3">{faq.still_have_questions}</p>
          <a
            href="mailto:contacto@xcail.com"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl font-bold text-sm btn-primary-gradient"
          >
            {faq.write_us}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
