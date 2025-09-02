import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function PhotosSection() {
  return (
    <div className="md:grid grid-cols-2 gap-12 !p-12 !z-50">
      <div className="h-[600px] !z-50">
        <Image
          width={700}
          height={700}
          alt="Imagen de trago"
          className="h-[600px] object-cover rounded-xl"
          src={"/photoCupLemon.jpg"}
        />
      </div>
      <div className="max-w-[600px] z-10">
        <h3 className="text-4xl !mt-6 md:!mt-0 md:text-5xl lg:text-6xl text-white font-bold !mb-6">
          Nos encargamos de la <span className="text-[#E0634D]">imagen</span> de
          tu marca
        </h3>
        <p className="hidden md:block text-white/80">
          En el mundo digital, tu marca necesita mucho más que solo presencia:
          necesita identidad. En NDW, diseñamos y fortalecemos la imagen de tu
          negocio para que conecte con tu público, transmita confianza y
          destaque frente a la competencia. Desde el desarrollo de una identidad
          visual sólida hasta estrategias creativas de comunicación, nos
          ocupamos de cada detalle para que tu marca hable por sí misma y deje
          huella en cada interacción.
        </p>
        <p className="block md:hidden text-white/80">
          En el mundo digital, tu marca necesita mucho más que solo presencia:
          necesita identidad. En NDW, diseñamos y fortalecemos la imagen de tu
          negocio para que conecte con tu público, transmita confianza y
          destaque frente a la competencia.
        </p>

        <a
          href="https://www.instagram.com/agencia.ndw/"
          target="_blank"
          className="!mt-6 !px-6 !w-fit cursor-pointer flex !z-[9999] gap-2 !py-3 bg-navy text-white font-bold rounded-full hover:bg-primary-blue transition-colors"
        >
          <ArrowRight />
          Ver galeria de imagenes
        </a>
      </div>
    </div>
  );
}
