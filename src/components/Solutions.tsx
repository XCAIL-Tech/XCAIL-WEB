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
              Producto tecnológico:
            </span>{" "}
            AsisTEA
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ecosistema de Inteligencia Artificial Generativa orientado a la transformación de 
            datos cualitativos en evidencia para el apoyo integral de la neurodiversidad.
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
                Ecosistema de Inteligencia Artificial Generativa orientado a la 
                generación de evidencia y la optimización del acompañamiento en la neurodiversidad.
              </p>

              <p className="text-muted-foreground">
                AsisTEA integra modelos de lenguaje de última generación (LLMs) para transformar la 
                complejidad de los registros heterogéneos en activos de información estructurada. 
                Nuestra arquitectura permite una supervisión técnica de alta precisión, garantizando 
                trazabilidad y soporte basado en datos para familias, profesionales y organizaciones de 
                habla hispana.
              </p>

              <p className="text-muted-foreground">
                La plataforma actúa como un motor de inteligencia estratégica, facilitando indicadores 
                clave para la toma de decisiones en salud, educación y desarrollo social. Nuestra 
                infraestructura está preparada para integrarse en sistemas prestacionales de gran escala, 
                fortaleciendo la planificación de acciones con impacto poblacional en múltiples regiones.
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
