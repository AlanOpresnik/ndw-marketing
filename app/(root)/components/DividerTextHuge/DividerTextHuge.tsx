"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DividerTextHuge() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // gsap.context se encarga de limpiar las animaciones al desmontar el componente
    const ctx = gsap.context(() => {
      const [text1, text2] = containerRef.current!.querySelectorAll("span");

      gsap.fromTo(
        text1,
        { x: -70 },
        {
          x: 20,
          ease: "none",
          scrollTrigger: {
            trigger: text1,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
            // markers: true, // descomenta si querés debug
          },
        }
      );

      gsap.fromTo(
        text2,
        { x: 70 },
        {
          x: -20,
          ease: "none",
          scrollTrigger: {
            trigger: text2,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // <- Limpieza automática
  }, []);

  return (
    <div ref={containerRef} className="flex !mb-12 md:!mb-0">
      <span className="block text-[3.4rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[12rem] font-bold text-[#E0EAF9]">
        IMPULSANDO
      </span>
      <span className="block text-[3.3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[12rem] font-bold relative top-[50px] left-[-190px] text-[#F05928]">
        MARCAS
      </span>
    </div>
  );
}
