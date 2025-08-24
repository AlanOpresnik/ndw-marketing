import React from "react";

export default function ImageBackgroundSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/backgroundImage.jpg')`,
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

      {/* Contenido */}
      <div className="relative z-10 flex w-full items-center h-full !px-6 md:!px-20">
       {/* <div className="max-w-xl text-white">
          <h1 className="text-3xl md:text-4xl font-light leading-snug !mb-6">
            Somos una agencia creativa con más de 6 años de experiencia,
            dedicada a transformar ideas en marcas con identidad, estrategia y
            personalidad. 
          </h1>
          <button className="!px-6 !py-3 border border-white rounded-md text-white hover:bg-white hover:text-black transition">
            TRABAJEMOS JUNTOS
          </button>
        </div>*/}
      </div>
    </section>
  );
}
