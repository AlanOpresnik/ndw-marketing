import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Share2, Megaphone, Code, Camera, Search, Lightbulb, Mail, BarChart } from "lucide-react"
import { cn } from "@/lib/utils"

interface BentoGridItemProps {
  className?: string
  title: string
  description: string
  icon: React.ReactNode
}

function BentoGridItem({ className, title, description, icon }: BentoGridItemProps) {
  return (
    <Card
      className={cn(
        "flex flex-col justify-between p-6 bg-white/5 backdrop-blur-lg border border-neutral-700/50 text-neutral-50 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl",
        className,
      )}
    >
      <CardHeader className="p-0 pb-4">
        <div className="mb-4 text-ndw-green">{icon}</div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 text-neutral-200">
        <p className="text-base leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function BentoGridServices() {
  const services = [
    {
      title: "Branding y Diseño Gráfico",
      description:
        "Creamos la identidad visual de tu marca: logo, colores, tipografías. Diseñamos piezas visuales atractivas para redes, folletos o catálogos, asegurando una presencia coherente y memorable.",
      icon: <Palette className="h-8 w-8" />,
      className: "lg:col-span-2 lg:row-span-2", // Ocupa 2 columnas y 2 filas
    },
    {
      title: "Gestión de Redes Sociales",
      description:
        "Construimos comunidad y posicionamos tu marca. Creamos calendarios de contenido, diseñamos piezas, redactamos copies que conectan y analizamos métricas para optimizar cada acción.",
      icon: <Share2 className="h-8 w-8" />,
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Publicidad en Ads",
      description:
        "Campañas efectivas en Meta Ads y Google Ads. Segmentamos, optimizamos y analizamos resultados para que tu marca llegue a más personas y aumente sus conversiones.",
      icon: <Megaphone className="h-8 w-8" />,
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Desarrollo Web",
      description:
        "Creamos sitios web modernos, funcionales y autoadministrables. Cuidamos el diseño y la experiencia de usuario para una presencia online optimizada y exitosa.",
      icon: <Code className="h-8 w-8" />,
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Producción Audiovisual",
      description:
        "Contenido visual que transmite emociones y propósito. Desde fotografía profesional hasta videos estilo filmmaker y tomas con drone, contamos la historia de tu marca de forma auténtica y creativa.",
      icon: <Camera className="h-8 w-8" />,
      className: "lg:col-span-2 lg:row-span-1", // Ocupa 2 columnas
    },
    {
      title: "SEO y Contenido",
      description:
        "Mejoramos tu visibilidad en buscadores y atraemos tráfico orgánico. Creamos contenido de valor que resuena con tu audiencia y te posiciona como referente en tu sector.",
      icon: <Search className="h-8 w-8" />,
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Consultoría Digital",
      description:
        "Asesoramiento estratégico para tu negocio. Identificamos oportunidades, optimizamos procesos y te guiamos en la toma de decisiones para un crecimiento digital sostenible.",
      icon: <Lightbulb className="h-8 w-8" />,
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Email Marketing",
      description:
        "Diseñamos y ejecutamos campañas de email marketing personalizadas. Construimos relaciones duraderas con tus clientes y fomentamos la lealtad a tu marca.",
      icon: <Mail className="h-8 w-8" />,
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Analítica Web",
      description:
        "Medimos y analizamos el rendimiento de tus activos digitales. Convertimos datos en insights accionables para optimizar tus estrategias y maximizar el retorno de inversión.",
      icon: <BarChart className="h-8 w-8" />,
      className: "lg:col-span-1 lg:row-span-1",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-950 text-neutral-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-ndw-green">
            Servicios que brindamos
          </h2>
          <p className="mt-4 text-xl text-neutral-300">
            En NDW Agencia Digital potenciamos tu marca desde la estrategia hasta la ejecución. Estos son los servicios
            que ofrecemos:
          </p>
        </div>
        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <BentoGridItem key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
