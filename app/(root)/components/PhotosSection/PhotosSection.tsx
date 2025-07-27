import MainButton from "@/components/shared/MainButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function PhotosSection() {
  return (
    <div className="md:grid grid-cols-2 gap-12 bg-gradient-to-b from-[#0A0A0A] to-transparent !p-12 !z-10">
      <div>
        <Image
          width={700}
          height={700}
          alt="Imagen de trago"
          src={"/photoCupLemon.jpg"}
        />
      </div>
      <div className="max-w-[600px] z-10">
        <h3 className="text-4xl !mt-6 md:!mt-0 md:text-5xl lg:text-6xl text-white font-bold !mb-6">
          Nos encargamos de la <span className="text-[#E0634D]">imagen</span> de tu marca
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

        <MainButton className="!mt-6" icon={<ArrowRight />}>
          Ver galeria de imagenes
        </MainButton>
      </div>
    </div>
  );
}
