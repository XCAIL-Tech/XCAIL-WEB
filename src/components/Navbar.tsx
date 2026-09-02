import { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { buttonVariants } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useI18n } from "@/lib/i18n";
import type { Language } from "@/lib/i18n";

const SECTION_IDS = ["home", "products", "awards", "about", "contact"];

const PATH_MAP: Record<string, string> = {
  home:     "/",
  products: "/products",
  awards:   "/awards",
  about:    "/about",
  contact:  "/contact",
};

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      // Si la sección "home" del Hero no está en el DOM, no estamos en la
      // landing (estamos en /preguntas-frecuentes, /privacidad, /terminos,
      // etc.) — no tocar la URL ni el estado activo, esas páginas no
      // tienen anclas de scroll.
      if (!document.getElementById("home")) return;

      const offset = 80;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.getBoundingClientRect().top <= offset) {
          const id = SECTION_IDS[i];
          setActive(id);
          window.history.pushState(null, "", PATH_MAP[id]);
          return;
        }
      }
      setActive("home");
      window.history.pushState(null, "", "/");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", PATH_MAP[id] ?? "/");
    return;
  }
  // La landing no está montada (estamos en /preguntas-frecuentes,
  // /privacidad, /terminos, etc.) — navegación real en vez de pushState,
  // para volver a montar el Home en la sección pedida.
  window.location.href = PATH_MAP[id] ?? "/";
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, tr } = useI18n();
  const active = useActiveSection();
  const { isDark, toggle: toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const routes = [
    { id: "home",     label: tr.navbar.inicio },
    { id: "products", label: tr.navbar.productos },
    { id: "awards",   label: tr.navbar.premios },
    { id: "about",    label: tr.navbar.nosotros },
    { id: "contact",  label: tr.navbar.contacto },
  ];

  function LangToggle({ mobile }: { mobile?: boolean }) {
    const toggleLang = (l: Language) => {
      setLang(l);
      if (mobile) setIsOpen(false);
    };
    return (
      <div className="flex items-center gap-0.5 dark:bg-white/[0.08] dark:border-white/[0.15] bg-foreground/[0.06] border-border rounded-full p-0.5 shadow-inner">
        {(["es", "en"] as Language[]).map((l) => (
          <button
            key={l}
            onClick={() => toggleLang(l)}
            className={`text-[10px] tracking-wide font-bold px-3 py-1 rounded-full transition-all duration-200 ${
              lang === l
                ? "bg-gradient-to-r from-[#5F33FF] to-[#00BFFF] text-white shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  function ThemeToggle() {
    return (
      <button
        onClick={toggleTheme}
        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        className="w-8 h-8 rounded-full border border-[#1d5a96] dark:border-[#1d5a96] bg-transparent text-slate-500 dark:text-slate-400 hover:border-[#00BFFF] hover:text-[#00BFFF] flex items-center justify-center transition-all duration-200"
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
    );
  }

  return (
    <header className={`sticky top-0 z-40 w-full border-b backdrop-blur-md transition-all duration-300 ${
      scrolled
        ? "border-transparent bg-white/95 dark:bg-black/95 shadow-xl shadow-black/10 dark:shadow-black/40"
        : "dark:border-[#164272]/40 border-border bg-xcail-hero/80 shadow-lg shadow-black/10"
    }`}>
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex h-16 w-screen justify-between px-4">

          {/* Logo */}
          <NavigationMenuItem className="flex font-bold">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
              className="ml-2 flex items-center gap-2"
            >
              <img
                src="/media/logos/XCAIL-TECH-DORADO-PNG.png"
                alt="XCAIL Technologies"
                className="h-11 sm:h-12 w-auto"
              />
            </a>
          </NavigationMenuItem>

          {/* Mobile */}
          <span className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <LangToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2 dark:text-slate-300 dark:hover:text-white text-slate-600 hover:text-foreground">
                <Menu className="h-6 w-6" onClick={() => setIsOpen(true)}>
                  <span className="sr-only">Menú</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side="left" className="bg-background border-r border-border text-foreground">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold text-foreground flex items-center">
                    <img src="/media/logos/XCAIL-TECH-DORADO-PNG.png" alt="XCAIL Technologies" className="h-10 w-auto" />
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-8 flex flex-col items-center gap-3">
                  {routes.map(({ id, label }) => (
                    <a
                      key={id}
                      href={PATH_MAP[id]}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        scrollToSection(id);
                      }}
                      className={`${buttonVariants({ variant: "ghost" })} w-full text-center text-muted-foreground hover:text-foreground ${
                        active === id ? "text-[#00BFFF] bg-[#00BFFF]/5 font-semibold" : ""
                      }`}
                    >
                      {label}
                    </a>
                  ))}

                  <div className="mt-6">
                    <LangToggle mobile />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-1 items-center">
            {routes.map((route) => (
              <a
                key={route.id}
                href={PATH_MAP[route.id]}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(route.id);
                }}
                className={`relative text-[14px] tracking-wide font-medium ${buttonVariants({ variant: "ghost" })} dark:text-slate-300 dark:hover:text-white text-slate-600 hover:text-foreground transition-colors duration-200 ${
                  active === route.id ? "dark:text-white text-foreground font-semibold" : ""
                }`}
              >
                {route.label}
                {active === route.id && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#00BFFF] shadow-[0_0_8px_#00BFFF]" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop: theme toggle + lang toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <LangToggle />
          </div>

        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
