"use client";

import Image from "next/image";

const brands = [
  { name: "Google", logo: "/clientes/5.png" },
  { name: "Microsoft", logo: "/clientes/7.png" },
  { name: "Apple", logo: "/clientes/casa_padua.png" },
  { name: "Amazon", logo: "/clientes/farmacia-jar.png" },
  { name: "Meta", logo: "/clientes/farmacia.png" },
  { name: "Netflix", logo: "/clientes/fly-nigth.png" },
  { name: "Tesla", logo: "/clientes/N.png" },
  { name: "Spotify", logo: "/clientes/P.png" },
  { name: "Adobe", logo: "/clientes/sofia_rodados.png" },
  { name: "Nvidia", logo: "/clientes/triangulo.png" },
];
type Brand = {
  name: string;
  logo: string;
};
const BrandSlider = ({
  brands,
  direction = "left",
  speed = "slow",
}: {
  brands: Brand[];
  direction?: "left" | "right";
  speed?: "slow" | "medium" | "fast";
}) => {
  const speedClass = {
    slow: "animate-scroll-slow",
    medium: "animate-scroll-medium",
    fast: "animate-scroll-fast",
  }[speed];

  const directionClass = direction === "right" ? "animate-scroll-reverse" : ""; // <-- ahora sí existe

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className={`inline-flex ${speedClass} ${directionClass}`}>
        {brands.map((brand, index) => (
          <div
            key={`first-${index}`}
            className="!mx-6 flex items-center justify-center min-w-[300px] h-42 bg-gradient-to-br from-transparent  to-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 px-6"
          >
            <Image
              src={brand.logo || "/placeholder.svg"}
              alt={brand.name}
              className="h-42 w-auto object-cover opacity-70 hover:opacity-100 transition-opacity duration-300  hover:grayscale-0"
            />
          </div>
        ))}
        {brands.map((brand, index) => (
          <div
            key={`second-${index}`}
            className="!mx-6 flex items-center justify-center min-w-[300px] h-42 bg-gradient-to-br from-transparent  to-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 px-6"
          >
            <Image
              src={brand.logo || "/placeholder.svg"}
              alt={brand.name}
              className="h-42 w-auto object-cover opacity-70 hover:opacity-100 transition-opacity duration-300  hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function InfiniteBrandSlider() {
  return (
    <div className="min-h-screen !py-24">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className=" mb-16">
          <h1 className="text-4xl font-bold text-white text-center !mb-4">
            Marcas que Confían en Nosotros
          </h1>
          <p className="text-xl text-gray-600 !mb-16 text-center mx-auto ">
            Más de 200 empresas líderes utilizan nuestros servicios para
            impulsar su crecimiento
          </p>
        </div>

        {/* Segundo Slider en Dirección Opuesta */}
        <div className="mb-16">
          <BrandSlider
            brands={brands.slice().reverse()}
            direction="right"
            speed="medium"
          />
        </div>
      </div>
    </div>
  );
}
