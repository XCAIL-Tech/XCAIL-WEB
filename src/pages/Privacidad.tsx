import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacidad() {
  return (
    <>
      <Navbar />
      <main className="container py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Política de Privacidad</h1>
        <p className="text-sm text-muted-foreground mb-10">Última actualización: 2 de septiembre de 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">

          <div className="rounded-2xl border border-[#1d5a96]/60 bg-card px-5 py-4 text-sm text-foreground">
            Esta Política de Privacidad se aplica al sitio institucional{" "}
            <a href="https://xcail.com" className="text-[#00BFFF] hover:underline">xcail.com</a>{" "}
            y a su formulario de contacto. Nuestros productos —{" "}
            <a href="https://asistea.app" target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] hover:underline">AsisTEA</a>{" "}
            e{" "}
            <a href="https://incluxia.app" target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] hover:underline">INCLUXIA</a>{" "}
            — son plataformas propias con su propia Política de Privacidad, que rige el tratamiento de los datos de sus usuarios registrados.
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Quiénes somos</h2>
            <p>
              Este sitio es operado por <strong>XCAIL Technologies SAS</strong> (CUIT 30-71921679-6),
              con domicilio legal en Nicaragua 4817, Ciudad Autónoma de Buenos Aires (CP 1414),
              República Argentina, debidamente constituida e inscripta ante la Inspección General
              de Justicia (IGJ). "XCAIL Technologies" es marca registrada ante el Instituto Nacional
              de la Propiedad Industrial (INPI) de Argentina.
            </p>
            <p>
              Actuamos como Responsable del Tratamiento de los datos personales recopilados a
              través de este sitio, en cumplimiento de la Ley N° 25.326 de Protección de Datos
              Personales de Argentina y su Decreto Reglamentario 1558/2001, el Reglamento General
              de Protección de Datos (RGPD) 2016/679 de la Unión Europea para visitantes residentes
              en la UE, y la Lei Geral de Proteção de Dados (LGPD — Ley 13.709/2018) para
              visitantes residentes en Brasil.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Datos que recopilamos</h2>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                <strong>Formulario de contacto:</strong> nombre completo, correo electrónico,
                institución u organización (opcional) y el mensaje que nos envíes.
              </li>
              <li>
                <strong>Datos técnicos automáticos:</strong> dirección IP, tipo de dispositivo y
                navegador, y páginas visitadas dentro del sitio, recopilados con fines de seguridad
                y estabilidad técnica.
              </li>
            </ul>
            <p>
              Este sitio no requiere creación de cuenta ni recopila datos de salud. No utilizamos
              formularios ni mecanismos para captar datos de menores de edad.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Finalidad y base jurídica</h2>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                <strong>Responder tu consulta:</strong> ejecución de medidas precontractuales a tu
                solicitud (Art. 6.1.b RGPD).
              </li>
              <li>
                <strong>Evaluar alianzas institucionales o pilotos:</strong> interés legítimo en
                dar curso a la solicitud recibida (Art. 6.1.f RGPD).
              </li>
              <li>
                <strong>Seguridad técnica del sitio:</strong> interés legítimo en prevenir abusos y
                mantener la estabilidad del servicio (Art. 6.1.f RGPD).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Dónde se almacenan y cómo se protegen los datos</h2>
            <p>
              Los datos del formulario de contacto se almacenan en <strong>Supabase</strong>{" "}
              (infraestructura sobre AWS) y las notificaciones por correo se envían a través de{" "}
              <strong>Resend</strong>. El sitio está alojado en <strong>Vercel</strong>. Todas las
              conexiones se realizan bajo cifrado TLS.
            </p>
            <p>
              <strong>Transferencia internacional:</strong> Supabase, Resend y Vercel operan con
              infraestructura fuera de Argentina (principalmente Estados Unidos). Para usuarios de
              la Unión Europea, estas transferencias se amparan en las Cláusulas Contractuales
              Estándar (SCC) aprobadas por la Comisión Europea. La transferencia UE → Argentina
              está además cubierta por la Decisión de Adecuación 2003/490/CE.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Divulgación de datos a terceros</h2>
            <p>
              Compartimos datos únicamente con los proveedores técnicos necesarios para operar
              este sitio y su formulario de contacto — <strong>Supabase</strong>,{" "}
              <strong>Resend</strong> y <strong>Vercel</strong> — quienes actúan como Encargados
              del Tratamiento bajo sus propios acuerdos de procesamiento de datos. Podemos también
              divulgar datos ante requerimiento de autoridad judicial o administrativa competente.
            </p>
            <p>
              <strong>Nunca vendemos</strong> datos personales a terceros con fines publicitarios.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Plazos de conservación</h2>
            <p>
              Los datos del formulario de contacto se conservan mientras sea necesario para
              responder tu consulta y, en caso de una alianza o piloto activo, mientras dure la
              relación institucional. Ante inactividad, se conservan por un máximo de 24 meses
              desde el último contacto, salvo que solicites su eliminación antes. Los registros
              técnicos de seguridad se conservan por 60 días, salvo incidencias activas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Tus derechos</h2>
            <p>
              De acuerdo con la Ley N° 25.326 (Argentina) y, cuando corresponda, el RGPD o la
              LGPD, tenés derecho a:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong>Acceso:</strong> confirmar qué datos personales tuyos tenemos registrados.</li>
              <li><strong>Rectificación:</strong> corregir datos incorrectos o desactualizados.</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
            </ul>
            <p>
              Para ejercer estos derechos, escribinos a{" "}
              <a href="mailto:contacto@xcail.com" className="text-[#00BFFF] hover:underline">
                contacto@xcail.com
              </a>. Responderemos dentro de los plazos que establezca la normativa aplicable a tu
              país de residencia, o en su defecto, dentro de un máximo de 30 días hábiles.
            </p>
            <p>
              Si sos usuario de la Unión Europea y considerás que el tratamiento de tus datos no
              es conforme al RGPD, podés presentar una reclamación ante la autoridad de control de
              tu país de residencia.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Cookies y almacenamiento local</h2>
            <p>
              Este sitio utiliza almacenamiento local del navegador (localStorage) únicamente para
              recordar tu preferencia de idioma y tema visual (claro/oscuro). No utilizamos
              cookies de rastreo publicitario ni de terceros con fines de perfilado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">9. AsisTEA e INCLUXIA</h2>
            <p>
              Si te registrás o usás las plataformas{" "}
              <a href="https://asistea.app" target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] hover:underline">AsisTEA</a>{" "}
              o{" "}
              <a href="https://incluxia.app" target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] hover:underline">INCLUXIA</a>,
              el tratamiento de tus datos se rige por la Política de Privacidad propia de cada
              plataforma, disponible dentro de cada producto — no por este documento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">10. Modificaciones</h2>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente. La fecha de última
              actualización figura al inicio de este documento. Los cambios relevantes se
              publicarán en esta misma página.
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
