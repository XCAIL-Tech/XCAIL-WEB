"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { supabase } from "@/lib/supabase";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // 1. Guardar en Supabase
      const { error } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          institution: formData.institution || null,
          subject: formData.subject,
          message: formData.message,
          status: "new",
        },
      ]);

      if (error) throw error;

      // 2. Enviar notificación por email (no bloquea si falla)
      try {
        // URL del servidor de notificaciones (configurada por variable de entorno)
        const NOTIFY_URL = import.meta.env.VITE_NOTIFY_URL || "http://localhost:3001/api/notify";
        
        await fetch(NOTIFY_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            institution: formData.institution || "",
            subject: formData.subject,
            message: formData.message,
          }),
        });
      } catch {
        console.warn("⚠️ Notificación por email no disponible");
      }

      setStatus("success");
      setFormData({ name: "", email: "", institution: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contacto" className="container py-24 sm:py-32">

      {/* Titulo */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        <span className="bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-transparent bg-clip-text">
          Contacto
        </span>
      </h2>

      {/* Subtitulo institucional */}
      <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        En XCAIL Technologies desarrollamos soluciones tecnologicas para organizaciones
        e instituciones que buscan estructurar informacion, optimizar procesos y escalar
        sistemas con una vision de largo plazo.
      </p>

      <div className="max-w-4xl mx-auto space-y-8">

        {/* Formulario */}
        <Card>
          <CardHeader>
            <CardTitle>Contacto institucional</CardTitle>
            <p className="text-sm text-muted-foreground">
              Completa el formulario y nuestro equipo se pondra en contacto a la brevedad.
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  placeholder="Tu nombre"
                  className="w-full px-3 py-2 border rounded-md bg-background disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Correo electronico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  placeholder="tu@email.com"
                  className="w-full px-3 py-2 border rounded-md bg-background disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="institution" className="block text-sm font-medium mb-2">
                  Institucion / Organizacion
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  placeholder="Nombre de la institucion (opcional)"
                  className="w-full px-3 py-2 border rounded-md bg-background disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Asunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  className="w-full px-3 py-2 border rounded-md bg-background disabled:opacity-50"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="Consulta sobre AsisTEA">Consulta sobre AsisTEA</option>
                  <option value="Implementacion institucional">
                    Implementacion institucional
                  </option>
                  <option value="Propuesta de colaboracion">
                    Propuesta de colaboracion
                  </option>
                  <option value="Consulta general">Consulta general</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  rows={5}
                  placeholder="Describe brevemente el motivo de tu contacto..."
                  className="w-full px-3 py-2 border rounded-md bg-background disabled:opacity-50"
                />
              </div>

              {/* Mensaje éxito - justo arriba del botón */}
              {status === "success" && (
                <div className="p-3 rounded-md bg-green-900/95 border border-green-600 text-green-400 text-sm text-center">
                  Mensaje enviado correctamente. Nos comunicaremos pronto.
                </div>
              )}

              {/* Mensaje error - justo arriba del botón */}
              {status === "error" && (
                <div className="p-3 rounded-md bg-red-900/30 border border-red-600 text-red-400 text-sm text-center">
                  Hubo un error al enviar. Intenta nuevamente o escribinos a contacto@xcail.com
                </div>
              )}

              {/* Boton */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-transparent border-2 border-[#fca311] text-[#fca311] hover:bg-[#fca311] hover:text-black font-semibold disabled:opacity-50"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Informacion institucional */}
        <Card>
          <CardHeader>
            <CardTitle>Informacion institucional</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">

              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <div className="text-2xl">📧</div>
                <div>
                  <h3 className="font-semibold mb-1">Email institucional</h3>
                  <a
                    href="mailto:contacto@xcail.com"
                    className="text-[#00BFFF] hover:underline"
                  >
                    contacto@xcail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold mb-1">Domicilio</h3>
                  <p className="text-sm text-muted-foreground">
                    Nicaragua 4817<br />
                    Ciudad Autonoma de Buenos Aires<br />
                    Argentina
                  </p>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
