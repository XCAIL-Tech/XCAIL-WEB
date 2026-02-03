import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Awards() {
  return (
    <section id="reconocimientos" className="container py-24 sm:py-32">

      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-transparent bg-clip-text">
            Validaciones
          </span>{" "}
          Institucionales
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          El trabajo de XCAIL Technologies ha sido evaluado y reconocido por instituciones
          nacionales e internacionales, validando su enfoque tecnológico y su impacto.
        </p>
      </div>

      <div className="space-y-12">

        {/* BritCham */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-2xl">
              Cámara de Comercio Argentino-Británica (BritCham)
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Mención Especial — Diversidad, Equidad e Inclusión (DEI) · 2025
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              BritCham Argentina distingue iniciativas con impacto verificable y proyección
              institucional. XCAIL Technologies recibió una Mención Especial en la categoría
              Diversidad, Equidad e Inclusión (DEI) por el desarrollo de AsisTEA, validando su
              enfoque tecnológico, humano y su capacidad de adopción en entornos organizacionales.
            </p>

            {/* Galería institucional 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Arriba izquierda */}
              <figure className="space-y-2 text-center">
                <div className="w-full rounded-lg border bg-background/40 flex items-center justify-center p-4 md:h-[360px]">
                  <img
                    src="/assets/img/XCAILTECH-CERTIFICADO-DEI.jpg"
                    alt="Certificado oficial BritCham DEI"
                    className="max-w-full max-h-[260px] md:max-h-full object-contain"
                  />
                </div>
                <figcaption className="text-xs text-muted-foreground text-center">
                  Certificado oficial — Mención Especial en Diversidad, Equidad e Inclusión (DEI).
                </figcaption>
              </figure>

              {/* Arriba derecha */}
              <figure className="space-y-2 text-center">
                <div className="w-full rounded-lg border bg-background/40 flex items-center justify-center p-4 md:h-[360px]">
                  <img
                    src="/assets/img/4.jpg"
                    alt="Ceremonia BritCham Argentina 2025"
                    className="max-w-full max-h-[260px] md:max-h-full object-contain"
                  />
                </div>
                <figcaption className="text-xs text-muted-foreground text-center">
                  Ceremonia BritCham Argentina 2025 — validación y visibilidad ante actores del ecosistema.
                </figcaption>
              </figure>

              {/* Abajo izquierda */}
              <figure className="space-y-2 text-center">
                <div className="w-full rounded-lg border bg-background/40 flex items-center justify-center p-4 md:h-[360px]">
                  <img
                    src="/assets/img/equipo-xcail.jpg"
                    alt="Equipo XCAIL con certificado y distinción"
                    className="max-w-full max-h-[260px] md:max-h-full object-contain"
                  />
                </div>
                <figcaption className="text-xs text-muted-foreground text-center">
                  Equipo XCAIL — registro institucional con certificado y distinción.
                </figcaption>
              </figure>

              {/* Abajo derecha */}
              <figure className="space-y-2 text-center">
                <div className="w-full rounded-lg border bg-background/40 flex items-center justify-center p-4 md:h-[360px]">
                  <img
                    src="/assets/img/1.jpg"
                    alt="Entrega del reconocimiento en la Embajada Británica"
                    className="max-w-full max-h-[260px] md:max-h-full object-contain"
                  />
                </div>
                <figcaption className="text-xs text-muted-foreground text-center">
                  Momento de entrega del reconocimiento en la Embajada Británica.
                </figcaption>
              </figure>

            </div>
          </CardContent>
        </Card>

        {/* Sadosky */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-2xl">
              Premios Sadosky — Cámara de la Industria Argentina del Software (CESSI)
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Finalista en dos categorías · 2025
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Los Premios Sadosky constituyen el reconocimiento más relevante del sector
              tecnológico argentino. En su 21° edición, XCAIL fue finalista en dos categorías
              simultáneas — Innovación Transformadora e Impacto Digital — destacándose por
              su enfoque tecnológico, su impacto verificable y su capacidad de escalar en
              entornos institucionales.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src="/assets/img/XCAIL-PremioInnovTran.png"
                alt="Certificado Innovación Transformadora"
                className="rounded-lg border w-full object-contain"
              />
              <img
                src="/assets/img/XCAIL-PremioImpactoDigital.png"
                alt="Certificado Impacto Digital"
                className="rounded-lg border w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
