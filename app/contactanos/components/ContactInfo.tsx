import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="!space-y-8">
      {/* Contact Details */}
      <Card className="border-0 bg-gradient-to-br from-white/90 to-green-100 backdrop-blur-sm shadow-lg">
        <CardContent className="!p-8">
          <h3 className=" text-2xl font-bold text-black/90 !mb-6">Información de Contacto</h3>

          <div className="!space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-green-900" />
              </div>
              <div>
                <p className="font-medium text-black/90">Email</p>
                <p className="text-black/60">ndw.agencia@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-green-900" />
              </div>
              <div>
                <p className="font-medium text-black/90">Teléfono</p>
                <p className="text-black/70">+54 11 69 98 55 66</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-green-900" />
              </div>
              <div>
                <p className="font-medium text-black/90">Ubicación</p>
                <p className="text-black/70">Argentina, Buenos Aires</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-green-900" />
              </div>
              <div>
                <p className="font-medium text-black/90">Horario</p>
                <p className="text-black/70">Lun - Vie: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
