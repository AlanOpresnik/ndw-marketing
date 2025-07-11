"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import MainButton from "@/components/shared/MainButton";
import { ArrowRightFromLine } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScrollText() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Separación por letras
    const split = new SplitType(".headline, .headline-gradient", {
      types: "chars",
      tagName: "span",
    });

    if (!sectionRef.current) return;

    const width = window.innerWidth;

    const isMobile = width < 768;

    const getResponsiveValues = () => {
      // Valores por defecto para escritorio
      let iconX = 1500;
      let icon2X = -1500;
      let stickerX = 390;
      let stickerY = -250;
      let btnX = 230;

      if (width < 1400) {
        iconX = 800;
        icon2X = -800;
      }
      if (width < 1200) {
        iconX = 600;
        icon2X = -600;
        stickerX = 300;
        btnX = 150;
      }
      if (width < 1050) {
        iconX = 600;
        icon2X = -600;
        stickerX = 290;
        btnX = 150;
      }
      if (width < 900) {
        iconX = 600;
        icon2X = -600;
        stickerX = 290;
        btnX = 150;
      }
      if (width < 850) {
        iconX = 490;
        icon2X = -470;
        stickerX = 290;
        btnX = 120;
      }
      if (width < 640) {
        iconX = 470;
        icon2X = -470;
        stickerX = 245;
        stickerY = -160;
        btnX = 100;
      }
      if (width < 540) {
        iconX = 290;
        icon2X = -300;
        stickerX = 205;
        stickerY = -190;
        btnX = 70;
      }

      return { iconX, icon2X, stickerX, stickerY, btnX };
    };

    const { iconX, icon2X, stickerX, stickerY, btnX } = getResponsiveValues();

    gsap.set(
      [".highlight-yellow", ".highlight-orange", ".icon", ".icon2", ".sticker"],
      { color: "#555" }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      ".icon",
      { opacity: 0.5, y: -20 },
      { opacity: 1, y: isMobile ? 590 : 200, x: iconX, duration: 10, ease: "power2.out" },
      0
    );

    tl.fromTo(
      ".icon2",
      { opacity: 0.5, y: -20 },
      { opacity: 1, y: isMobile ? 380 : 200 , x: icon2X, duration: 10, ease: "power2.out" },
      0
    );

    tl.fromTo(
      ".sticker",
      { opacity: 0, scale: 0.5, y: -150, x: stickerX },
      {
        opacity: 1,
        scale: 1,
        y: stickerY,
        x: stickerX,
        duration: 10,
        ease: "power2.out",
      },
      0
    );

    tl.fromTo(
      ".headline .char",
      { opacity: 0.2, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        ease: "power2.out",
        duration: 1,
      }
    );

    tl.fromTo(
      ".headline-gradient .char",
      { y: 20 },
      {
        y: 0,
        color: "#A4A9F6",
        ease: "power2.out",
        duration: 1,
      }
    );

    // Colores
    tl.to(".highlight-yellow", {
      color: "#0373FF",
      duration: 1,
    });

    tl.to(".highlight-orange", {
      color: "#f97316",
      duration: 1,
    });
        tl.fromTo(
        ".subtitle",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 20, duration: 1 },
        "+=0.2"
      );
    tl.fromTo(
      ".btn-cta",
      { opacity: 0, y: 60, x: btnX + 60 },
      {
        opacity: 1,
        y: 40,
        x: btnX,
        duration: 1.5,
        ease: "power2.out",
      }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[120vh] bg-gradient-to-b from-[#131213] via-[#131213] to-transparent text-white flex items-center justify-center overflow-hidden px-4"
    >
      {/* Íconos animados */}
      <Image
        src="/mano-icon.png"
        alt="Mano Icon"
        width={150}
        height={150}
        className="absolute icon top-4 left-4 sm:top-10 sm:left-10 w-16 sm:w-32 z-20"
      />
      <Image
        src="/sticker-mano.png"
        alt="Sticker Icon"
        width={150}
        height={150}
        className="absolute icon2 top-4 right-4 sm:top-10 sm:right-10 w-16 sm:w-32 z-20"
      />
      <div className="flex justify-center">
        <Image
          src="/sticker-ndw.png"
          alt="Sticker NDW Icon"
          width={200}
          height={200}
          className="sticker rotate-[-5deg] absolute z-10 w-30 sm:w-40"
        />
      </div>

      {/* Contenido */}
      <div className="text-center px-4 max-w-3xl mx-auto">
        <h2 className="headline text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight">
          Accedé a <span className="highlight-yellow">Talento</span> y{" "}
          <span className="highlight-orange">Marketing</span>
        </h2>
        <span className="headline text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight">
          De{" "}
        </span>
        <span className="headline-gradient text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight bg-gradient-to-r from-[#F05928] via-[#0373FF] to-[#A4A9F6] bg-clip-text text-transparent">
          Primera calidad
        </span>
        <p className="subtitle mt-4 sm:mt-6 text-base sm:text-xl text-neutral-500">
          difícil de encontrar en un solo proveedor.
        </p>

        <MainButton
          className="btn-cta mt-6 sm:mt-8 mx-auto block  text-sm sm:text-base"
          icon={<ArrowRightFromLine />}
        >
          Empecemos a trabajar juntos
        </MainButton>
      </div>
    </section>
  );
}
