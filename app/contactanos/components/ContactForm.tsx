"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="border-emerald-500/30 bg-gray-950/80 backdrop-blur-sm">
        <CardContent className="!pt-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center !mx-auto !mb-4 shadow-lg shadow-emerald-500/25">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className=" text-2xl font-bold text-white !mb-2">
              ¡Mensaje Enviado!
            </h3>
            <p className="text-gray-300">
              Gracias por contactarnos. Te responderemos en las próximas 24
              horas.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative">
      {/* Animated background lights */}

      <Card className="relative shadow-2xl bg-gradient-to-b from-white/90 to-green-100 border !p-4">
        <CardHeader>
          <CardTitle className=" text-3xl font-bold text-black/90">
            Hablemos de tu proyecto
          </CardTitle>
          <CardDescription className="text-lg text-gray-800">
            Completa el formulario y discutamos cómo podemos elevar tu marca.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="!space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="!space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-black/90"
                >
                  Nombre *
                </label>
                <Input
                  id="name"
                  placeholder="Tu nombre completo"
                  required
                  className="border-gray-700  !px-2 bg-gray-950/80 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/50"
                />
              </div>
              <div className="!space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-black/90"
                >
                  Empresa
                </label>
                <Input
                  id="company"
                  placeholder="Nombre de tu empresa"
                  className="border-gray-700 !px-2 bg-gray-950/80 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/50"
                />
              </div>
            </div>

            <div className="!space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-black/90"
              >
                Email *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="border-gray-700  !px-2 bg-gray-950/80 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/50"
              />
            </div>

            <div className="!space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-black/90"
              >
                Teléfono
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+54 600 000 000"
                className="border-gray-700 !px-2 bg-gray-950/80 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/50"
              />
            </div>

            <div className="!space-y-2">
              <label
                htmlFor="service"
                className="text-sm font-medium text-black/90"
              >
                Servicio de interés
              </label>
              <select
                id="service"
                className="w-full !px-3 !py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 bg-gray-950/80 text-white"
              >
                <option value="">Selecciona un servicio</option>
                <option value="seo">SEO y Posicionamiento</option>
                <option value="sem">Publicidad Digital (SEM)</option>
                <option value="social">Redes Sociales</option>
                <option value="web">Desarrollo Web</option>
                <option value="branding">Branding Digital</option>
                <option value="analytics">Analytics y Reporting</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div className="!space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-black/90"
              >
                Mensaje *
              </label>
              <Textarea
                id="message"
                placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."
                required
                rows={5}
                className="border-gray-700 !p-2 bg-gray-950/80 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/50 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-medium py-3 transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/25"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Enviar Mensaje
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
