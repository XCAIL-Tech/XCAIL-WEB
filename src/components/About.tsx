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
              Responsable de la visión y el desarrollo tecnológico de
              XCAIL Technologies.
            </p>
          </div>

          {/* Sobre XCAIL */}
          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col justify-center text-center md:text-left h-full">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <span className="text-[#0099CC]">Sobre</span>
              {" "}
              XCAIL Technologies
            </h2>

            <p className="text-lg text-muted-foreground">
              XCAIL Technologies es una startup de Inteligencia Artificial
              enfocada en el desarrollo de productos tecnológicos propios
              impulsados por modelos de lenguaje de última generación
              (LLMs), orientados a neurodiversidad, salud y toma de
              decisiones basadas en datos.
            </p>

            <p className="text-muted-foreground mt-4">
              Nuestro enfoque combina Inteligencia Artificial Generativa,
              arquitectura cloud escalable y gobernanza del dato para
              construir plataformas tecnológicas preparadas para crecer
              en entornos de alta complejidad, con foco en adopción,
              generación de evidencia e impacto a largo plazo.
            </p>
          </div>
        </div>

        {/* Capacidades tecnológicas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Ingeniería de Software */}
          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col text-center">
            <h3 className="text-lg font-medium mb-2">
              Ingeniería de Software
            </h3>

            <p className="text-sm text-muted-foreground">
              Arquitecturas escalables y resilientes diseñadas para
              soportar productos de Inteligencia Artificial con alta
              disponibilidad, trazabilidad y evolución continua.
            </p>
          </div>

          {/* Inteligencia Artificial */}
          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col text-center">
            <h3 className="text-lg font-medium mb-2">
              Inteligencia Artificial
            </h3>

            <p className="text-sm text-muted-foreground">
              Integración de modelos de lenguaje (LLMs) y sistemas de
              IA generativa aplicados a procesos de apoyo, análisis
              contextual y generación de evidencia.
            </p>
          </div>

          {/* Analítica Avanzada */}
          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col text-center">
            <h3 className="text-lg font-medium mb-2">
              Analítica Avanzada
            </h3>

            <p className="text-sm text-muted-foreground">
              Procesamiento y estructuración de datos complejos para
              generar indicadores e información accionable en contextos
              de alta complejidad.
            </p>
          </div>

          {/* Gobernanza de Datos */}
          <div className="bg-muted/50 border rounded-lg p-6 flex flex-col text-center">
            <h3 className="text-lg font-medium mb-2">
              Gobernanza de Datos
            </h3>

            <p className="text-sm text-muted-foreground">
              Infraestructura y protocolos orientados a integridad,
              trazabilidad y gestión responsable de datos en entornos
              institucionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}