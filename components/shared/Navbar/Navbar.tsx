import Image from "next/image";
import Link from "next/link";
import React from "react";
import MainButton from "../MainButton";

export default function Navbar() {
  return (
    <nav className="fixed w-full glass-nav !mx-auto">
      <div className="relative z-10 flex justify-between  items-center !p-2  !md:p-8">
        <div className="flex items-center gap-2">
          <Link href={'/'}>
            <Image src={"/logo.webp"} alt="Logo" width={200} height={200} />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-navy font-medium">
            Inicio
          </Link>
          <Link
            href="#services"
            className="text-white hover:text-navy font-medium"
          >
            Servicios
          </Link>
          <Link
            href="/contactanos"
            className="text-white hover:text-navy font-medium"
          >
            Contacto
          </Link>
        </div>
        <MainButton href="/contactanos" className=" !px-4 !py-2 md:!px-6 md:!py-3 bg-navy text-white font-bold rounded-full hover:bg-primary-blue transition-colors">
          Contáctanos →
        </MainButton>
      </div>
    </nav>
  );
}
