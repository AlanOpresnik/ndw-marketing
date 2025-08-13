import {
  Palette,
  Share2,
  Megaphone,
  Code,
  Camera,
  Mail,
  BarChart,
  CopyrightIcon,
} from "lucide-react";

export const services = [
  {
    title: "Branding y Diseño Gráfico",
    description:
      "Creamos y desarrollamos la identidad visual de tu marca: el logo, los colores, las tipografías y todo lo necesario para que tu marca tenga una presencia coherente y reconocible. Es la cara con la que se presenta al mundo. Diseñamos piezas visuales para comunicar de forma clara y atractiva. Desde contenido para redes hasta material impreso como folletos, tarjetas o catálogos. Llevado al día a día, es como elegir la ropa perfecta para cada ocasión.",
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
    description:
      "Creamos campañas publicitarias efectivas en Meta Ads (Instagram y Facebook) y Google Ads. Segmentamos, optimizamos y analizamos los resultados para que tu marca llegue a más personas y aumente sus conversiones.",
    icon: <Megaphone className="h-8 w-8" />,
  },
  {
    title: "Desarrollo Web",
    description:
      "Creamos sitios web modernos, funcionales y autoadministrables. Cuidamos el diseño y la experiencia de usuario para una presencia online optimizada y exitosa.",
    icon: <Code className="h-8 w-8" />,
  },
  {
    title: "Producción Audiovisual",
    description:
      "Contenido visual que transmite emociones y propósito. Desde fotografía profesional hasta videos estilo filmmaker y tomas con drone, contamos la historia de tu marca de forma auténtica y creativa. Planificamos cada proyecto con una mirada estratégica: pensamos qué mostrar, cómo contarlo y para quién.",
    icon: <Camera className="h-8 w-8" />,
  },
  {
    title: "Registro de Marca y Patentes",
    description:
      "Asesoramiento y gestión para proteger legalmente tu marca y tus productos.",
    icon: <CopyrightIcon className="h-8 w-8" />,
  },
  {
    title: "Email Marketing",
    description:
      "Diseñamos y ejecutamos campañas de email marketing personalizadas. Construimos relaciones duraderas con tus clientes y fomentamos la lealtad a tu marca.",
    icon: <Mail className="h-8 w-8" />,
  },
  {
    title: "Analítica Web",
    description:
      "Medimos y analizamos el rendimiento de tus activos digitales. Convertimos datos en insights accionables para optimizar tus estrategias y maximizar el retorno de inversión.",
    icon: <BarChart className="h-8 w-8" />,
  },
];
