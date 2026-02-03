import { Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="border-t">
      <section className="container py-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">

        {/* Texto */}
        <p className="text-sm text-muted-foreground text-center">
          <strong>© 2026 </strong>
          <strong className="text-[#00BFFF]">XCAIL</strong>
          <strong> Technologies</strong>
          {" "}— Tecnología con propósito
        </p>

        {/* Iconos */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:contacto@xcail.com"
            aria-label="Email institucional"
            className="text-muted-foreground hover:text-[#00BFFF] transition-colors"
          >
            <Mail size={18} />
          </a>

          <a
            href="https://instagram.com/xcail.tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram XCAIL"
            className="text-muted-foreground hover:text-[#00BFFF] transition-colors"
          >
            <Instagram size={18} />
          </a>
        </div>

      </section>
    </footer>
  );
}
