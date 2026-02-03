import { Button } from "./ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="container flex items-center justify-center py-24 md:py-32"
    >
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        {/* Título */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#fca311] text-transparent bg-clip-text">
            XCAIL
          </span>{" "}
          Technologies
        </h1>

        {/* Descripción principal */}
        <p className="text-xl text-muted-foreground">
          Empresa de innovación tecnológica enfocada en el desarrollo de
          plataformas digitales y sistemas de información basados en datos.
        </p>

        {/* Descripción secundaria */}
        <p className="text-base text-muted-foreground max-w-3xl mx-auto">
          Diseñamos soluciones tecnológicas con foco en la gobernanza del dato,
          la escalabilidad y la resolución de problemáticas complejas en entornos
          institucionales y productivos.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          {/* Conocer AsisTEA (celeste) */}
          <Button
            asChild
            className="
              w-full sm:w-auto
              bg-transparent
              border-2 border-[#00BFFF]
              text-[#0099CC]
              hover:bg-[#02a9e0]
              hover:text-black
              font-semibold
            "
          >
            <a href="#producto">Conocer AsisTEA</a>
          </Button>

          {/* Reconocimientos institucionales (verde) */}
          <Button
            asChild
            className="
              w-full sm:w-auto
              bg-transparent
              border-2 border-[#4CAF50]
              text-[#4CAF50]
              hover:bg-[#4CAF50]
              hover:text-white
              font-semibold
            "
          >
            <a href="#reconocimientos">Reconocimientos institucionales</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
