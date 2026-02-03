import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function Solutions() {
  return (
    <section id="producto" className="container py-20 sm:py-28">
      <div className="space-y-14">

        {/* Título institucional */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="bg-gradient-to-b from-[#00BFFF] to-[#0099CC] text-transparent bg-clip-text">
              Producto
            </span>{" "}
            tecnológico
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Plataforma digital desarrollada por XCAIL para abordar problemáticas
            complejas en contextos institucionales y de acompañamiento.
          </p>
        </div>

        {/* Card principal del producto */}
        <Card className="bg-muted/50 border">
          <CardContent className="p-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-center">

            {/* Logo AsisTEA */}
            <div className="flex justify-center">
              <img
                src="/media/logos/asistea-logo.png"
                alt="AsisTEA - Plataforma desarrollada por XCAIL"
                className="max-w-[260px] w-full object-contain"
              />
            </div>

            {/* Texto institucional */}
            <div className="space-y-5 text-center md:text-left">
              <p className="text-lg text-muted-foreground">
                AsisTEA es una plataforma digital inteligente orientada al
                acompañamiento, organización y análisis de información en
                contextos vinculados al Trastorno del Espectro Autista (TEA).
              </p>

              <p className="text-muted-foreground">
                Está diseñada para ser utilizada por familias, profesionales,
                instituciones y organismos que requieren herramientas claras,
                escalables y basadas en datos para mejorar la toma de decisiones,
                el seguimiento y la planificación de acciones.
              </p>

              <p className="text-muted-foreground">
                La solución combina experiencia de usuario accesible, criterios
                de gobernanza del dato y arquitectura tecnológica preparada para
                su adopción en entornos institucionales y sistemas de mayor
                escala.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">

                {/* Conocer plataforma */}
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

                {/* Contacto institucional */}
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
                    Contacto institucional
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
