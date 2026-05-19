import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function Solutions() {
  return (
    <section
      id="producto"
      className="container py-20 sm:py-28"
    >
      <div className="space-y-14">

        {/* Título */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="bg-gradient-to-b from-[#00BFFF] to-[#0099CC] text-transparent bg-clip-text">
              Producto impulsado por IA:
            </span>
            {" "}
            AsisTEA
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Plataforma de Inteligencia Artificial Generativa diseñada para
            transformar información compleja en evidencia, apoyo y toma de
            decisiones escalables en neurodiversidad.
          </p>
        </div>

        {/* Card principal */}
        <Card className="bg-muted/50 border">
          <CardContent className="p-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-center">

            {/* Logo */}
            <div className="flex justify-center">
              <img
                src="/media/logos/asistea-logo.png"
                alt="AsisTEA - Plataforma de Inteligencia Artificial"
                className="max-w-[260px] w-full object-contain"
              />
            </div>

            {/* Texto */}
            <div className="space-y-5 text-center md:text-left">

              <p className="text-lg text-muted-foreground">
                AsisTEA es una plataforma de Inteligencia Artificial
                Generativa desarrollada por XCAIL Technologies para apoyar a
                familias, profesionales e instituciones mediante herramientas
                basadas en evidencia y procesamiento avanzado de información.
              </p>

              <p className="text-muted-foreground">
                La plataforma integra modelos de lenguaje de última generación
                (LLMs) para transformar registros heterogéneos y datos
                cualitativos en información estructurada, trazable y accionable.
                Su arquitectura permite centralizar información, generar
                acompañamiento personalizado y fortalecer la toma de decisiones
                mediante análisis asistido por IA.
              </p>

              <p className="text-muted-foreground">
                Diseñada con una arquitectura escalable sobre infraestructura
                cloud, AsisTEA evoluciona como un ecosistema tecnológico capaz
                de integrarse progresivamente en contextos de salud,
                educación y apoyo institucional en mercados de habla hispana.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">

                {/* Plataforma */}
                <Button
                  className="
                    bg-transparent
                    border-2 border-[#00BFFF]
                    text-[#0099CC]
                    hover:bg-[#02a9e0]
                    hover:text-black
                    font-semibold
                  "
                  asChild
                >
                  <a
                    href="https://asistea.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Conocer la plataforma
                  </a>
                </Button>

                {/* Contacto */}
                <Button
                  className="
                    bg-transparent
                    border-2 border-[#D4AF37]
                    text-[#fca311]
                    hover:bg-[#fca311]
                    hover:text-black
                    font-semibold
                  "
                  asChild
                >
                  <a href="#contacto">
                    Contacto
                  </a>
                </Button>

              </div>
            </div>

          </CardContent>
        </Card>

      </div>
    </section>
  );
}