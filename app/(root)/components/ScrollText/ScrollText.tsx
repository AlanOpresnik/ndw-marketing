"use client";
import Image from "next/image";
import MainButton from "@/components/shared/MainButton";
import { ArrowRightFromLine } from "lucide-react";

export default function HeroScrollText() {
  return (
    <section className="min-h-[120vh] relative bg-gradient-to-b from-[#131213] via-[#131213] to-transparent text-white flex items-center justify-center overflow-hidden px-4 !z-50">
      {/* Íconos fijos */}
      <Image
        src="/mano-icon.png"
        alt="Mano Icon"
        width={150}
        height={150}
        className="absolute top-4 left-4 sm:top-10 sm:left-10 w-16 sm:w-32 z-20"
      />
      <Image
        src="/sticker-mano.png"
        alt="Sticker Icon"
        width={150}
        height={150}
        className="absolute top-4 right-4 sm:top-10 sm:right-10 w-16 sm:w-32 z-20"
      />

      {/* Contenido estático */}
      <div className="text-center flex flex-col items-center justify-center px-4   !z-50">
        <div className="flex justify-center">
          <Image
            src="/sticker-ndw.png"
            alt="Sticker NDW Icon"
            width={200}
            height={200}
            className="rotate-[-5deg]   z-10 w-30 sm:w-40"
          />
        </div>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight">
          Accedé a <span className="text-[#0373FF]">Talento</span> y{" "}
          <span className="text-[#f97316]">Marketing</span>
        </h2>
        <span className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight">
          En un equipo{" "}
        </span>
        <span className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight bg-gradient-to-r from-[#F05928] via-[#0373FF] to-[#A4A9F6] bg-clip-text text-transparent">
          de verdad.
        </span>
        <p className="!mt-4 sm:!mt-6 text-base sm:text-xl text-neutral-500">
          No solo queremos generar visualizaciones sino una comunidad para tu
          marca.
        </p>

        <MainButton
          href="/contactanos"
          className="!mt-6 sm:!mt-8 mx-auto block text-sm sm:text-base !z-50"
          icon={<ArrowRightFromLine />}
        >
          Empecemos a trabajar juntos
        </MainButton>
      </div>
    </section>
  );
}
