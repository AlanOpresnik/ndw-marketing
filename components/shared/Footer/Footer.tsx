import {
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#111111] via-[#1a1a1a] to-[#0a0a0a] opacity-95"></div>

      <div className="relative  !mx-auto !px-6 lg:!px-8 !py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="!space-y-4">
            <h3 className="text-xl font-bold tracking-wide text-white">
              New Digital World
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformamos tu presencia digital con estrategias innovadoras de
              marketing que generan resultados reales.
            </p>
            <div className="flex !space-x-4 !mt-4">
              <a
                href="https://www.instagram.com/agencia.ndw/"
                className="!p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold tracking-wide !mb-4">Servicios</h3>
            <ul className="!space-y-2 text-sm">
              {[
                "Branding y Diseño Gráfico",
                "Gestión de Redes Sociales",
                "Publicidad en Ads",
                "Desarrollo Web",
                "Producción Audiovisual",
                "Registro de Marcas y Patentes",
                "Etc",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold tracking-wide !mb-4">Contacto</h3>
            <ul className="!space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span>ndw.agencia@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span>+54 11 69 98 55 66</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>Argentina, Buenos Aires</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold tracking-wide !mb-4">
              Suscríbete
            </h3>
            <p className="text-gray-400 text-sm !mb-4">
              Recibe tips y novedades sobre marketing digital.
            </p>
            <form className="flex bg-white/5 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Tu correo"
                className="flex-1 !px-3 !py-2 bg-transparent text-sm focus:outline-none placeholder-gray-400"
              />
              <button
                type="submit"
                className="!p-4 bg-white text-black text-sm font-semibold hover:bg-gray-200 transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="!mt-12 !pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2025 NDW. Todos los derechos reservados.</p>
      
        </div>
      </div>
    </footer>
  );
}
