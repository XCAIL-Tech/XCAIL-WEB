export function About() {
  return (
    <section id="empresa" className="container py-20 sm:py-28">
      <div className="space-y-12">

        {/* Foto del CEO + Sobre XCAIL */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 items-stretch">

          {/* Foto del CEO */}
          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col items-center justify-between text-center h-full">
            <div className="w-[180px] h-[180px] flex items-center justify-center">
              <img
                src="/media/equipo/carlos.jpg"
                alt="Carlos Ezequiel Leiva - Fundador y CEO de XCAIL Technologies"
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>

            <p className="text-sm text-muted-foreground italic mt-6">
              Carlos Ezequiel Leiva — Fundador y Director General (CEO)
              <br />
              Responsable de la visión estratégica, el diseño tecnológico
              y el desarrollo institucional de XCAIL Technologies.
            </p>
          </div>

          {/* Sobre XCAIL */}
          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col justify-center text-center md:text-left h-full">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <span className="text-[#0099CC]">Sobre</span>{" "}
              XCAIL Technologies
            </h2>

            <p className="text-lg text-muted-foreground">
              XCAIL Technologies es una empresa de innovación tecnológica
              especializada en el desarrollo de plataformas digitales
              y sistemas de información basados en datos, orientados a
              contextos institucionales y organizacionales.
            </p>

            <p className="text-muted-foreground mt-4">
              Diseñamos soluciones confiables, escalables y sostenibles,
              priorizando la gobernanza del dato, la integridad de la
              información y la evolución controlada de los sistemas,
              con una visión de impacto y adopción a largo plazo.
            </p>
          </div>
        </div>

        {/* Capacidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col text-center sm:text-left">
            <h3 className="text-lg font-medium mb-2">
              Desarrollo de Software
            </h3>
            <p className="text-sm text-muted-foreground">
              Diseño y desarrollo de plataformas digitales con
              arquitecturas escalables, mantenibles y preparadas
              para su evolución continua en entornos reales.
            </p>
          </div>

          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col text-center sm:text-left">
            <h3 className="text-lg font-medium mb-2">
              Inteligencia Artificial
            </h3>
            <p className="text-sm text-muted-foreground">
              Aplicación de modelos de análisis y automatización
              en contextos de decisión, con uso estratégico
              de la información y criterios de validación institucional.
            </p>
          </div>

          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col text-center sm:text-left">
            <h3 className="text-lg font-medium mb-2">
              Sistemas de Información
            </h3>
            <p className="text-sm text-muted-foreground">
              Diseño de sistemas orientados al análisis agregado,
              la trazabilidad de datos y la lectura contextual
              en organizaciones complejas.
            </p>
          </div>

          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col text-center sm:text-left">
            <h3 className="text-lg font-medium mb-2">
              Arquitectura y Gobernanza
            </h3>
            <p className="text-sm text-muted-foreground">
              Enfoque técnico centrado en la gobernanza del dato,
              la integridad de la información y la evolución
              controlada de sistemas a nivel institucional.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
