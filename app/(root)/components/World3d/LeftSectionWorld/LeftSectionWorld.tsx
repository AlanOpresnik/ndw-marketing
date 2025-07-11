"use client";
import MainButton from "@/components/shared/MainButton";
import { ArrowRightIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import InformationClients from "./InformationClients";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function LeftSectionWorld() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const informationRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Ejemplo: animar el título desde la derecha al entrar en viewport
      gsap.fromTo(
        titleRef.current,
        { x: -300, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 10,
          ease: "power1.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 110%",
            end: "top 10%",
            scrub: true,
          },
        }
      );

      // Animar el párrafo para que se desplace un poco hacia la izquierda
      gsap.fromTo(
        paragraphRef.current,
        { x: -300, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 10,
          ease: "power1.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            end: "top 10%",
            scrub: true,
          },
        }
      );

      // Animar el botón con un efecto de escala al hacer scroll
      gsap.fromTo(
        buttonRef.current,
        { x: -300, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 10,
          ease: "power1.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            end: "top 10%",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        informationRef.current,
        { x: -300, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 10,
          ease: "power1.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={sectionRef} className="text-left z-10 !mt-[14rem] md:!mt-0">
        <h2
          ref={titleRef}
          className=" text-5xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-[#F05928] via-[#0373FF] to-[#A4A9F6] bg-clip-text text-transparent"
        >
          Clientes de todo el mundo
        </h2>
        <p ref={paragraphRef} className="text-lg text-white !mt-6 opacity-70">
          Trabajamos con empresas que tienen presencia mundial en más de 20
          países.
        </p>
        <div ref={buttonRef}>
          <MainButton
            className="!mt-6 cursor-pointer"
            icon={<ArrowRightIcon />}
          >
            Comenza a trabajar con nosotros
          </MainButton>
        </div>
        <div ref={informationRef}>
          <InformationClients />
        </div>
      </div>
    </>
  );
}
