import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Terminos() {
  return (
    <>
      <Navbar />
      <main className="container py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Términos y Condiciones</h1>
        <p className="text-sm text-muted-foreground mb-10">Última actualización: 2 de septiembre de 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">

          <div className="rounded-2xl border border-[#1d5a96]/60 bg-card px-5 py-4 text-sm text-foreground">
            AsisTEA e INCLUXIA son herramientas de apoyo y no reemplazan el criterio profesional de
            médicos, terapeutas u otros especialistas de salud. En particular, INCLUXIA Stroke no
            diagnostica ni sustituye la atención médica de emergencia.
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Aceptación</h2>
            <p>
              Al acceder o utilizar el sitio web{" "}
              <a href="https://xcail.com" className="text-[#00BFFF] hover:underline">xcail.com</a>{" "}
              ("el Sitio"), operado por <strong>XCAIL Technologies SAS</strong> ("XCAIL", "la
              Empresa"), aceptás íntegramente estos Términos y Condiciones. Si no estás de acuerdo,
              debés abstenerte de utilizar el Sitio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Titularidad</h2>
            <p>
              El Sitio es operado por <strong>XCAIL Technologies SAS</strong>, CUIT 30-71921679-6,
              con domicilio en Nicaragua 4817, Ciudad Autónoma de Buenos Aires, Argentina,
              debidamente inscripta ante la IGJ. "XCAIL Technologies" es marca registrada ante el
              Instituto Nacional de la Propiedad Industrial (INPI) de Argentina.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Naturaleza del Sitio</h2>
            <p>
              <strong>xcail.com</strong> es el sitio institucional de XCAIL Technologies. Su
              función es presentar a la empresa y sus productos propios de software (SaaS) y
              canalizar consultas institucionales a través del formulario de contacto. El Sitio no
              requiere registro de cuenta ni permite el uso directo de AsisTEA o INCLUXIA — para
              eso, cada producto tiene su propia plataforma:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                <strong>AsisTEA</strong> — plataforma de inteligencia artificial para el
                acompañamiento de personas neurodivergentes, disponible en{" "}
                <a href="https://asistea.app" target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] hover:underline">asistea.app</a>.
              </li>
              <li>
                <strong>INCLUXIA Connect</strong> — comunicador aumentativo y alternativo (AAC) por
                barrido automático, disponible en{" "}
                <a href="https://incluxia.app" target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] hover:underline">incluxia.app</a>.
              </li>
              <li>
                <strong>INCLUXIA Stroke</strong> — reconocimiento temprano de señales de ACV
                (FAST/BE-FAST), actualmente en desarrollo.
              </li>
            </ul>
            <p>
              El uso de esas plataformas se rige por sus propios Términos y Condiciones y su
              propia Política de Privacidad, no por este documento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Uso del Sitio</h2>
            <p>Al utilizar el Sitio, te comprometés a:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Utilizarlo de conformidad con la legislación vigente y estos términos.</li>
              <li>No utilizarlo para fines ilícitos, fraudulentos o que perjudiquen a terceros.</li>
              <li>No intentar acceder a sistemas, datos o áreas no autorizadas.</li>
              <li>Proveer información veraz al completar el formulario de contacto.</li>
              <li>No utilizar bots, scrapers ni sistemas automatizados para extraer contenido del Sitio.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Propiedad intelectual</h2>
            <p>
              Todos los contenidos, diseños, marcas, código fuente, productos, algoritmos y
              materiales del Sitio son propiedad exclusiva de XCAIL Technologies SAS o de sus
              licenciantes, y están protegidos por las leyes de propiedad intelectual aplicables.
              Ninguna parte del Sitio puede ser reproducida, distribuida o utilizada sin
              autorización expresa y por escrito de XCAIL Technologies.
            </p>
            <p>
              Cualquier idea o sugerencia de mejora enviada a través del formulario de contacto
              podrá ser considerada libremente por la Empresa, sin generar derecho a compensación
              ni reconocimiento de autoría.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Enlaces a sitios y plataformas de terceros</h2>
            <p>
              El Sitio puede contener enlaces a plataformas propias (AsisTEA, INCLUXIA) o de
              terceros (por ejemplo, redes sociales). XCAIL no controla el contenido de sitios de
              terceros y no asume responsabilidad por su disponibilidad, contenido o prácticas de
              privacidad.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Limitación de responsabilidad</h2>
            <p>
              El Sitio se proporciona "tal como está". En la máxima medida permitida por la ley,
              XCAIL Technologies no asume responsabilidad por interrupciones temporales o fallas
              del Sitio, ni por decisiones tomadas por terceros en base a la información publicada
              en él.
            </p>
            <p>
              AsisTEA e INCLUXIA son herramientas de apoyo y no reemplazan el criterio profesional
              de médicos, terapeutas u otros especialistas de salud. INCLUXIA Stroke no diagnostica
              ni sustituye la atención médica de emergencia; ante una sospecha de ACV o cualquier
              otra emergencia médica, llamá de inmediato a los servicios de emergencia de tu
              localidad.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Privacidad</h2>
            <p>
              El tratamiento de datos personales recopilados a través de este Sitio (formulario de
              contacto) se rige por nuestra{" "}
              <a href="/privacidad" className="text-[#00BFFF] hover:underline">
                Política de Privacidad
              </a>
              , que forma parte integrante de estos términos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">9. Modificaciones</h2>
            <p>
              XCAIL Technologies se reserva el derecho de modificar estos Términos y Condiciones
              en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en
              este sitio. El uso continuado del Sitio implica la aceptación de los términos
              actualizados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">10. Ley aplicable y jurisdicción</h2>
            <p>
              Estos términos se rigen por las leyes de la República Argentina. Para cualquier
              controversia derivada del uso del Sitio, las partes se someten a la jurisdicción de
              los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, Argentina, sin
              perjuicio de las disposiciones imperativas de protección al consumidor de la
              jurisdicción del usuario que no puedan ser derogadas por acuerdo entre partes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">11. Contacto</h2>
            <ul className="list-none space-y-1.5 pl-2">
              <li><strong>Empresa:</strong> XCAIL Technologies SAS</li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:contacto@xcail.com" className="text-[#00BFFF] hover:underline">
                  contacto@xcail.com
                </a>
              </li>
              <li><strong>Domicilio:</strong> Nicaragua 4817, Ciudad Autónoma de Buenos Aires, Argentina</li>
            </ul>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
