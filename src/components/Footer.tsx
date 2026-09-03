import { Mail, Linkedin, Instagram, Package, Users, ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { LucideIcon } from "lucide-react";

function ColumnHeading({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon className="w-4 h-4 text-[#00BFFF]" />
      <p className="text-xs font-semibold text-[#00BFFF] uppercase tracking-wider">
        {children}
      </p>
    </div>
  );
}

export function Footer() {
  const { tr } = useI18n();
  const f = tr.footer;
  const c = tr.contact;
  const p = tr.products;

  const productLinks = [
    { label: p.asistea.title, href: "https://asistea.app", external: true },
    { label: p.ohm.title, href: "https://incluxia.app/connect", external: true },
    { label: p.stroke.title, href: "https://incluxia.app/stroke", external: true },
  ];

  const companyLinks = [
    { label: f.about_link, href: "/about" },
    { label: f.faq, href: "/preguntas-frecuentes" },
    { label: c.title, href: "/contact" },
  ];

  const legalLinks = [
    { label: f.privacy, href: "/privacidad" },
    { label: f.terms, href: "/terminos" },
    { label: f.aviso_legal, href: "/aviso-legal" },
  ];

  return (
    <footer id="footer" className="border-t dark:border-white/[0.07] border-border bg-slate-100 dark:bg-black">
      <div className="container py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mb-8">

          {/* Marca */}
          <div className="flex flex-col gap-4">
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
            <ColumnHeading icon={Package}>{f.products_title}</ColumnHeading>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <ColumnHeading icon={Users}>{f.company_title}</ColumnHeading>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <ColumnHeading icon={ShieldCheck}>{f.legal_title}</ColumnHeading>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t dark:border-white/[0.07] border-border space-y-1.5">
              <p className="text-sm text-muted-foreground">{f.location}</p>
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
        <div className="flex justify-center pt-6 border-t dark:border-white/[0.07] border-border">
          <p className="text-xs text-muted-foreground text-center">
            ® 2026{" "}
            <strong className="text-[#00BFFF]">XCAIL</strong>
            <strong> Technologies</strong>
            {" "}· {f.rights}
          </p>
        </div>

      </div>
    </footer>
  );
}
