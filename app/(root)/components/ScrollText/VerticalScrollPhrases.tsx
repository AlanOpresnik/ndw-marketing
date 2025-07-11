"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsList() {
  const frases = [
    "Diseño Web",
    "Soluciones Tech",
    "Growth Strategy",
    "Marketing Digital",
    "Desarrollos UX/UI",
  ];

  const containerRef = useRef(null);
  const refs = useRef([]);

  const panelHeightVh = 30;

  useEffect(() => {
    const panels = refs.current.filter(Boolean);

    const vhToPx = (vh) => (window.innerHeight * vh) / 100;

    panels.forEach((panel) => {
      gsap.set(panel, { opacity: 0.2, scale: 1 });
    });

    gsap.to(panels, {
      y: -(panels.length - 1) * vhToPx(panelHeightVh),
      ease: "linear",       // Animación lineal para scroll constante
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,            // Scrub más suave
        end: () =>
          `=${(panels.length - 1)}`,
      },
    });

    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 0,
        end: 0,
        onEnter: () =>
          gsap.to(panel, {
            opacity: 1,
            scale: 1.05,
            duration: 0.3,
            overwrite: "auto",
          }),
        onLeave: () =>
          gsap.to(panel, {
            opacity: 0.2,
            scale: 1,
            duration: 0.3,
            overwrite: "auto",
          }),
        onEnterBack: () =>
          gsap.to(panel, {
            opacity: 1,
            scale: 1.05,
            duration: 0.3,
            overwrite: "auto",
          }),
        onLeaveBack: () =>
          gsap.to(panel, {
            opacity: 0.2,
            scale: 1,
            duration: 0.3,
            overwrite: "auto",
          }),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white overflow-hidden h-screen  mx-auto px-8"
    >
      {/* Paréntesis Izquierdo */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 opacity-50 pointer-events-none z-20">
        <img
          src="https://cdn.prod.website-files.com/673a01d9b0f7e2eae307f471/674ba2acba458e09ccfe13ee_parentesis%20left.svg"
          alt="Paréntesis Izquierdo"
          className="w-20"
          loading="lazy"
        />
      </div>

      {/* Paréntesis Derecho */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 opacity-50 pointer-events-none z-20">
        <img
          src="https://cdn.prod.website-files.com/673a01d9b0f7e2eae307f471/674ba2ac96432aff6008311e_parentesis%20right.svg"
          alt="Paréntesis Derecho"
          className="w-20"
          loading="lazy"
        />
      </div>

      {/* Lista de habilidades */}
      <ul className="list-none m-0 p-0">
        {frases.map((frase, i) => (
          <li
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className="skills_list-item flex items-center justify-center text-4xl font-light opacity-20 scale-100 transition-opacity transition-transform"
            style={{ height: `${panelHeightVh}vh` }}
          >
            <div className="skills_text">
              <span>{frase}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
