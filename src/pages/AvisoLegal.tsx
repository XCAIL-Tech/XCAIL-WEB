import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AvisoLegal() {
  return (
    <>
      <Navbar />
      <main className="container py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Aviso Legal</h1>
        <p className="text-sm text-muted-foreground mb-10">Última actualización: 3 de septiembre de 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">

          <div className="rounded-2xl border border-[#1d5a96]/60 bg-card px-5 py-4 text-sm text-foreground">
            Este Aviso Legal regula el acceso y uso del sitio institucional{" "}
            <a href="https://xcail.com" className="text-[#00BFFF] hover:underline">xcail.com</a>{" "}
            y de los perfiles en redes sociales pertenecientes a XCAIL Technologies SAS. El uso de
            nuestros productos —{" "}
            <a href="https://asistea.app" target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] hover:underline">AsisTEA</a>{" "}
            e{" "}
            <a href="https://incluxia.app" target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] hover:underline">INCLUXIA</a>{" "}
            — se rige por los documentos legales de cada plataforma.
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Información del titular</h2>
            <ul className="list-none space-y-1.5 pl-2">
              <li><strong>Razón social:</strong> XCAIL Technologies SAS</li>
              <li><strong>CUIT:</strong> <span className="font-mono tracking-wide">30-71921679-6</span></li>
              <li><strong>Domicilio legal:</strong> Nicaragua 4817, Ciudad Autónoma de Buenos Aires (CP 1414), República Argentina</li>
              <li><strong>Sede corporativa:</strong> Ciudad Autónoma de Buenos Aires, Argentina</li>
              <li>
                <strong>Correo electrónico:</strong>{" "}
                <a href="mailto:contacto@xcail.com" className="text-[#00BFFF] hover:underline">contacto@xcail.com</a>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Registro y constitución</h2>
            <p>
              XCAIL Technologies SAS es una sociedad debidamente constituida e inscripta ante la
              Inspección General de Justicia (IGJ) de la República Argentina bajo el número de
              registro RL-2025-130785373-APN-DA#IGJ. "XCAIL Technologies" es marca registrada ante
              el Instituto Nacional de la Propiedad Industrial (INPI) de Argentina.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Representación legal</h2>
            <ul className="list-none space-y-1.5 pl-2">
              <li><strong>Director Ejecutivo / Fundador:</strong> Carlos Ezequiel Leiva</li>
              <li><strong>Responsable de contenido editorial:</strong> Carlos Ezequiel Leiva</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Objeto del sitio</h2>
            <p>
              <strong>xcail.com</strong> es el sitio institucional de XCAIL Technologies. Presenta a
              la empresa y sus productos propios de software (SaaS) y canaliza consultas
              institucionales a través del formulario de contacto. No requiere registro de cuenta ni
              permite el uso directo de los productos: cada uno tiene su propia plataforma y sus
              propios documentos legales.
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                <strong>AsisTEA</strong> — plataforma de inteligencia artificial para el
                acompañamiento de personas neurodivergentes, en{" "}
                <a href="https://asistea.app" target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] hover:underline">asistea.app</a>.
              </li>
              <li>
                <strong>INCLUXIA Connect</strong> — comunicador aumentativo y alternativo (AAC) por
                barrido automático, en{" "}
                <a href="https://incluxia.app" target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] hover:underline">incluxia.app</a>.
              </li>
              <li>
                <strong>INCLUXIA Stroke</strong> — reconocimiento temprano de señales de ACV
                (FAST/BE-FAST), actualmente en desarrollo.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Propiedad intelectual y marcas</h2>
            <p>
              El nombre y los logotipos de XCAIL Technologies, AsisTEA e INCLUXIA, el diseño de las
              interfaces (UI/UX), los algoritmos, el código fuente y todo el contenido del Sitio son
              propiedad exclusiva de XCAIL Technologies SAS o de sus licenciantes. Cualquier
              reproducción, distribución o transformación de estos contenidos sin la autorización
              expresa y por escrito de la Empresa está estrictamente prohibida bajo la Ley 11.723 de
              Propiedad Intelectual y demás normativa aplicable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Condiciones de uso y privacidad</h2>
            <p>
              El acceso y uso de este Sitio implica la aceptación de los{" "}
              <a href="/terminos" className="text-[#00BFFF] hover:underline">Términos y Condiciones</a>{" "}
              y de la{" "}
              <a href="/privacidad" className="text-[#00BFFF] hover:underline">Política de Privacidad</a>, que
              forman parte integrante de este Aviso Legal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Resolución de disputas y jurisdicción</h2>
            <p>
              Este Aviso Legal se rige por las leyes de la República Argentina. Para cualquier
              controversia derivada del acceso o uso del Sitio, las partes se someten a la
              jurisdicción de los Tribunales Ordinarios en lo Comercial de la Ciudad Autónoma de
              Buenos Aires, sin perjuicio de las disposiciones imperativas de protección al
              consumidor que resulten aplicables.
            </p>
            <p>
              Si sos consumidor residente en la República Argentina, podés realizar consultas o
              reclamos ante la Dirección Nacional de Defensa del Consumidor a través de{" "}
              <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor" target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] hover:underline">
                argentina.gob.ar/produccion/defensadelconsumidor
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Contacto</h2>
            <ul className="list-none space-y-1.5 pl-2">
              <li><strong>Empresa:</strong> XCAIL Technologies SAS</li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:contacto@xcail.com" className="text-[#00BFFF] hover:underline">contacto@xcail.com</a>
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
