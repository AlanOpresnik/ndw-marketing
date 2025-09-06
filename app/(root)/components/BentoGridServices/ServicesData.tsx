import {
  Palette,
  Share2,
  Megaphone,
  Code,
  Camera,
  CopyrightIcon,
  Video,
  StretchHorizontal,
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
    title: "Registro de Marca y Contratos",
    description:
      "Asesoramiento y gestión para proteger legalmente tu marca y tus productos.",
    icon: <CopyrightIcon className="h-8 w-8" />,
  },
  {
    title: "Creacion de contenido",
    description:
      "Nos encargamos de todo el proceso de producción de reels y videos para redes sociales: desde el guion y la grabación, hasta la edición final. Ya sea para pautas publicitarias o contenido orgánico, transformamos ideas en piezas dinámicas y efectivas.",
    icon: <Video />,
  },
  {
    title: "MKT con influencers y streams",
    description:
      "Conectamos tu marca con influencers que realmente llegan a tu público. Armamos la campaña, definimos la estrategia y medimos los resultados para que tu inversión tenga impacto real. ¿Querés aparecer en los streams más vistos de Argentina?  Te acompañamos desde la idea creativa hasta la acción final para que tu marca esté presente donde todos miran. ",
    icon: <StretchHorizontal/>
      },
];
