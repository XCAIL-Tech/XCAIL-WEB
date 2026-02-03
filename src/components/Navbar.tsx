import { useState } from "react";
import { Menu } from "lucide-react";

import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

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

// ✅ IMPORT DEL LOGO (clave)
import logoXcail from "@/assets/img/XCAIL-TECH-LOGO-SF.png";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#empresa", label: "Empresa" },
  { href: "#producto", label: "Producto" },
  { href: "#reconocimientos", label: "Reconocimientos" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex h-14 w-screen justify-between px-4">

          {/* Logo */}
          <NavigationMenuItem className="flex font-bold">
            <a href="/" className="ml-2 flex items-center text-xl font-bold">
              <img
                src={logoXcail}
                alt="XCAIL Technologies"
                className="h-10 w-auto"
                loading="eager"
              />
            </a>
          </NavigationMenuItem>

          {/* Mobile */}
          <span className="flex md:hidden items-center gap-2">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">
                    XCAIL Technologies
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-4 flex flex-col items-center justify-center gap-2">
                  {routeList.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route) => (
              <a
                key={route.href}
                href={route.href}
                className={`text-[17px] ${buttonVariants({ variant: "ghost" })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <ModeToggle />
          </div>

        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
