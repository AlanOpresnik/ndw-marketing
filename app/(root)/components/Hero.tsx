import React from "react";

import Link from "next/link";

export default function HeroMain() {
  return (
    <div className="relative  z-10 flex items-center justify-center h-[70vh] !px-6">
      <div className="flex justify-center flex-col items-center">
        <div className=" border !mb-2 md:!mb-0 border-white w-fit !p-2 rounded-full">
          <p className="text-white font-semibold">Influenciando marcas</p>
        </div>
        <h1 className="text-[3rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] text-center font-bold bg-gradient-to-r from-[#F05928] via-[#0373FF] to-[#A4A9F6] bg-clip-text text-transparent">
          NEW DIGITAL WORLD
        </h1>
        <p className="text-white text-center  md:text-xl mt-6  delay-300">
          Estrategias digitales que transforman negocios reales.
        </p>
        <div className="!mt-8">
          <Link
            href="/contacto"
            className="items-center cursor-pointer gap-2 !px-6 !py-3 bg-gradient-to-r from-[#F05928] to-[#0373FF] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Contáctanos →
          </Link>
        </div>
    
      </div>
      <div className="text-center  mx-auto"></div>
    </div>
  );
}
