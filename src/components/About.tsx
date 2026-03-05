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
              Responsable de la visión y el desarrollo tecnológico de XCAIL Technologies.
            </p>
          </div>

          {/* Sobre XCAIL */}
          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col justify-center text-center md:text-left h-full">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <span className="text-[#0099CC]">Sobre</span>{" "}
              XCAIL Technologies
            </h2>

            <p className="text-lg text-muted-foreground">
              XCAIL Technologies es una empresa de innovación tecnológica orientada al desarrollo de 
              sistemas de información que integran modelos de lenguaje de última generación (LLMs) para potenciar la capacidad de análisis en contextos institucionales.
            </p>

            <p className="text-muted-foreground mt-4">
              Nuestro enfoque combina la Inteligencia Artificial Generativa con arquitecturas robustas, 
              asegurando la gobernanza del dato y la integridad de la información. Diseñamos sistemas 
              preparados para una evolución controlada, permitiendo que la tecnología se adapte a 
              entornos de alta complejidad con una visión de impacto y adopción a largo plazo.
            </p>
          </div>
        </div>

        {/* Capacidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col text-center">
            <h3 className="text-lg font-medium mb-2">
              Ingeniería de Software
            </h3>
            <p className="text-sm text-muted-foreground">
              Desarrollo de arquitecturas escalables y resilientes, diseñadas para operar con solvencia en entornos de gran demanda, alta disponibilidad y evolución tecnológica continua.
            </p>
          </div>

          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col text-center">
            <h3 className="text-lg font-medium mb-2">
              Inteligencia Artificial
            </h3>
            <p className="text-sm text-muted-foreground">
              Implementación de modelos analíticos orientados a la toma de decisiones estratégicas, bajo estrictos marcos de validación institucional, ética de datos y procesos automatizados.
            </p>
          </div>

          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col text-center">
            <h3 className="text-lg font-medium mb-2">
              Analítica Avanzada
            </h3>
            <p className="text-sm text-muted-foreground">
              Sistemas preparados para el análisis masivo de información, garantizando trazabilidad integral, lectura contextual de datos e indicadores clave de alto impacto poblacional.
            </p>
          </div>

          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col text-center">
            <h3 className="text-lg font-medium mb-2">
              Gobernanza de Datos
            </h3>
            <p className="text-sm text-muted-foreground">
              Protocolos de integridad y seguridad avanzada, asegurando el cumplimiento de estándares institucionales, marcos regulatorios internacionales y la gestión responsable de activos digitales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
