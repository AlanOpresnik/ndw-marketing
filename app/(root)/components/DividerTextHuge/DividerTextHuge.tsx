"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DividerTextHuge() {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (text1Ref.current && text2Ref.current) {
      gsap.fromTo(
        text1Ref.current,
        { x: -70 },
        {
          x: 20,
          scrollTrigger: {
            trigger: text1Ref.current,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        text2Ref.current,
        { x: 70 },
        {
          x: -20,
          scrollTrigger: {
            trigger: text2Ref.current,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="flex !mb-12 md:!mb-0">
      <span
        ref={text1Ref}
        className="block text-[3.4rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[12rem] font-bold text-[#E0EAF9]"
      >
        IMPULSANDO
      </span>
      <span
        ref={text2Ref}
        className="block text-[3.3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[12rem] font-bold relative top-[50px] left-[-190px] text-[#F05928]"
      >
        MARCAS
      </span>
    </div>
  );
}
