import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="relative z-10 flex justify-between items-center !p-6 !md:p-8">
      <div className="flex items-center gap-2">
        <Image src={"/logo.png"} alt="Logo" width={200} height={200} />
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-white hover:text-navy font-medium">
          Home
        </a>
        <a href="#services" className="text-white hover:text-navy font-medium">
          Servicios
        </a>
        <a href="#" className="text-white hover:text-navy font-medium">
          Nosotros
        </a>
      </div>
      <button className=" !px-4 !py-2 md:!px-6 md:!py-3 bg-navy text-white font-bold rounded-full hover:bg-primary-blue transition-colors">
        Contáctanos →
      </button>
    </nav>
  );
}
