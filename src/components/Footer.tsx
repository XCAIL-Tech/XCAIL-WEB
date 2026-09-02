import { Mail, Linkedin, Instagram } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { tr } = useI18n();
  const f = tr.footer;
  const c = tr.contact;
  const p = tr.products;

  const productLinks = [
    { label: p.asistea.title, href: "https://asistea.app" },
    { label: p.ohm.title, href: "https://incluxia.app/connect" },
    { label: p.stroke.title, href: "https://incluxia.app/stroke" },
  ];

  const legalLinks = [
    { label: f.privacy, href: "/privacidad" },
    { label: f.terms, href: "/terminos" },
    { label: f.faq, href: "/preguntas-frecuentes" },
  ];

  return (
    <footer id="footer" className="border-t dark:border-white/[0.07] border-border bg-slate-100 dark:bg-black">
      <div className="container py-12">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mb-8">

          {/* Marca */}
          <div className="col-span-2 md:col-span-2 flex flex-col gap-4 md:pr-6">
            <a href="/" aria-label="Volver al inicio" className="w-fit hover:opacity-80 transition-opacity">
              <img
                src="/media/logos/XCAIL-TECH-DORADO-PNG.png"
                alt="XCAIL Technologies"
                className="h-16 w-auto object-contain"
                style={{ transform: "translateX(-11%)" }}
              />
            </a>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed -mt-1">
              {f.tagline}
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.linkedin.com/company/xcail-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn XCAIL Technologies"
                className="text-[#00BFFF] hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/xcail.tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram XCAIL Technologies"
                className="text-[#00BFFF] hover:text-[#E1306C] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:contacto@xcail.com"
                aria-label="Email institucional"
                className="text-[#00BFFF] hover:brightness-125 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Productos */}
          <div>
            <p className="text-xs font-semibold text-[#00BFFF] uppercase tracking-wider mb-3">
              {f.products_title}
            </p>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa — ficha corporativa */}
          <div>
            <p className="text-xs font-semibold text-[#00BFFF] uppercase tracking-wider mb-3">
              {f.company_title}
            </p>
            <div className="space-y-1.5">
              <p className="text-sm text-foreground font-medium">{c.legal_name}</p>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground/70 font-medium">{c.cuit_label}</span>
                {" "}<span className="font-mono tracking-wide">{c.cuit}</span>
              </p>
              <p className="text-sm text-muted-foreground">{c.address}</p>
              <a
                href="mailto:contacto@xcail.com"
                className="block text-sm text-muted-foreground hover:text-[#00BFFF] transition-colors"
              >
                contacto@xcail.com
              </a>
            </div>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center pt-6 border-t dark:border-white/[0.07] border-border gap-3">

          <div className="flex items-center gap-1 flex-wrap justify-center sm:justify-start">
            {legalLinks.map((l, i) => (
              <span key={l.label} className="flex items-center gap-1">
                <a
                  href={l.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                >
                  {l.label}
                </a>
                {i < legalLinks.length - 1 && <span className="text-muted-foreground/30 text-xs">·</span>}
              </span>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center">
            ® 2026{" "}
            <strong className="text-[#00BFFF]">XCAIL</strong>
            <strong> Technologies</strong>
            {" "}· {f.rights}
          </p>

          <div className="hidden sm:block" />

        </div>

      </div>
    </footer>
  );
}
