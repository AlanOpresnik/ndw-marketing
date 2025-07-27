  import {
  Palette,
  Share2,
  Megaphone,
  Code,
  Camera,
  Search,
  Mail,
  BarChart,
} from "lucide-react";

  export const services = [
    {
      title: "Branding y Diseño Gráfico",
      description:
        "Creamos la identidad visual de tu marca: logo, colores, tipografías. Diseñamos piezas visuales atractivas para redes, folletos o catálogos, asegurando una presencia coherente y memorable.",
      icon: <Palette className="h-8 w-8" />,
      className: "lg:col-span-2",
    },
    {
      title: "Gestión de Redes Sociales",
      description:
        "Construimos comunidad y posicionamos tu marca. Creamos calendarios de contenido, diseñamos piezas, redactamos copies que conectan y analizamos métricas para optimizar cada acción.",
      icon: <Share2 className="h-8 w-8" />,
    },
    {
      title: "Publicidad en Ads",
      description: "Campañas efectivas en Meta Ads y Google Ads. Segmentamos, optimizamos y analizamos resultados para que tu marca llegue a más personas y aumente sus conversiones.",
      icon: <Megaphone className="h-8 w-8" />,
    },
    {
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos, funcionales y autoadministrables. Cuidamos el diseño y la experiencia de usuario para una presencia online optimizada y exitosa.",
      icon: <Code className="h-8 w-8" />,
    },
    {
      title: "Producción Audiovisual",
      description: "Contenido visual que transmite emociones y propósito. Desde fotografía profesional hasta videos estilo filmmaker y tomas con drone, contamos la historia de tu marca de forma auténtica y creativa.",
      icon: <Camera className="h-8 w-8" />,
    },
    {
      title: "SEO y Contenido",
      description: "Mejoramos tu visibilidad en buscadores y atraemos tráfico orgánico. Creamos contenido de valor que resuena con tu audiencia y te posiciona como referente en tu sector.",
      icon: <Search className="h-8 w-8" />,
    },
    {
      title: "Email Marketing",
      description: "Diseñamos y ejecutamos campañas de email marketing personalizadas. Construimos relaciones duraderas con tus clientes y fomentamos la lealtad a tu marca.",
      icon: <Mail className="h-8 w-8" />,
    },
    {
      title: "Analítica Web",
      description: "Medimos y analizamos el rendimiento de tus activos digitales. Convertimos datos en insights accionables para optimizar tus estrategias y maximizar el retorno de inversión.",
      icon: <BarChart className="h-8 w-8" />,
    },
  ];