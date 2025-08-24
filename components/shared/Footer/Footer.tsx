import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="  bg-[#111111] ">
      <div className="max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="!space-y-4">
            <h3 className="text-lg font-semibold text-white">New Digital World</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transformamos tu presencia digital con estrategias innovadoras de
              marketing que generan resultados reales.
            </p>
            <div className="flex !space-x-4">
              <a
                
                href="https://www.instagram.com/agencia.ndw/ "
                className="!p-2 hover:bg-accent  text-white hover:text-white/50"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="!space-y-4">
            <h3 className="text-lg font-semibold text-white">Servicios</h3>
            <ul className="!space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white/50 transition-colors text-sm"
                >
                  SEO & SEM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white/50 transition-colors text-sm"
                >
                  Marketing de Contenidos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white/50 transition-colors text-sm"
                >
                  Redes Sociales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white/50 transition-colors text-sm"
                >
                  Email Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white/50 transition-colors text-sm"
                >
                  Publicidad Digital
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="!space-y-4">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <div className="!space-y-3">
              <div className="flex items-center !space-x-3">
                <Mail className="h-4 w-4 text-white" />
                <span className="text-white text-sm">
                  info@digitalboost.com
                </span>
              </div>
              <div className="flex items-center !space-x-3">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-white text-sm">+34 900 123 456</span>
              </div>
              <div className="flex items-center !space-x-3">
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-white text-sm">Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="!space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-white text-sm">
              Recibe las últimas tendencias en marketing digital
            </p>
            <div className="!space-y-2">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-white border-white"
              />
              <Button className="w-full bg-white hover:bg-white/50 text-white">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="!mt-12 !pt-8 border-t border-white">
          <div className="flex flex-col md:flex-row justify-between items-center !space-y-4 md:!space-y-0">
            <div className="text-white text-sm">
              © 2024 DigitalBoost. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white transition-colors text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-white transition-colors text-sm">
                Términos de Servicio
              </a>
              <a href="#" className="text-white transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
