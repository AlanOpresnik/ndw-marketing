"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import MainButton from "@/components/shared/MainButton";
import { ArrowRightFromLine } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    function checkScreen() {
      setIsMobile(window.innerWidth < 768);
    }

    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Imagen: scale parallax
      gsap.to(imageRef.current, {
        scale: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", // empieza cuando entra a viewport
          end: "bottom top", // termina cuando sale
          scrub: true,
        },
      });

      // Texto: se acerca a la imagen (arriba o lateral)
      gsap.to(textRef.current, {
        x: isMobile ? 0 : -80, // se acerca hacia arriba
        scale: isMobile ? 0.9 : 1, // se acerca hacia arriba
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    gsap.fromTo(
      titleRef.current,
      { x: isMobile ? 290 : 1200, opacity: isMobile ? 1 : 0.6 },
      {
        x: isMobile ? 120 : 1000,
        opacity: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 110%", // más espacio para animar
          end: "top 50%",
          scrub: true,
        },
      }
    );

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <>
      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-2 !py-32 place-items-center gap-12 px-6"
      >
        <div ref={imageRef} className="w-full col-span-1">
          <Image
            src={
              "https://saucovision.com/images/WhatsApp%20Image%202024-07-29%20at%2020.22.47.jpeg"
            }
            alt="About Us"
            width={1200}
            height={400}
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <div ref={textRef} className="text-white col-span-1">
          <h3 className="text-4xl md:text-5xl xl:text-7xl max-w-2xl font-bold !mb-6">
            El <span className="">motor</span> detrás del{" "}
            <span className="text-[#F05928]">éxito</span> de nuestros clientes
          </h3>
          <p className="max-w-xl text-lg lg:text-xl opacity-70 !mb-6">
            Somos un grupo de expertos en tecnología, automatización y
            crecimiento digital. Nuestra misión es transformar los retos del
            e-commerce en oportunidades de éxito, colaborando de cerca con
            marcas líderes en LATAM para impulsar resultados extraordinarios.
          </p>
          <MainButton icon={<ArrowRightFromLine />} className="!mt-4">
            Trabajemos juntos
          </MainButton>
        </div>
      </div>
      <div className="!pb-24">
        <h1
          ref={titleRef}
          className="text-[3rem] w-full md:text-[6rem] lg:text-[8rem] xl:text-[10rem] text-center font-bold bg-gradient-to-r from-[#F05928] via-[#0373FF] to-[#A4A9F6] bg-clip-text text-transparent"
        >
          {isMobile ? "NEW DIGITAL" : "NEW DIGITAL WORLD"}
        </h1>
      </div>
    </>
  );
}
