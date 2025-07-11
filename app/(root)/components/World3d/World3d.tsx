// WorkdId.tsx (o el archivo donde está tu componente EarthCanvas)

import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Earth"; // Tu componente del modelo
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function EarthCanvas(props) {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Ejemplo: animar el título desde la derecha al entrar en viewport
      gsap.fromTo(
        modelRef.current,
        { x: 300, opacity: 0 },
        {
          x: -10,
          opacity: 1,
          duration: 10,
          ease: "power1.out",
          scrollTrigger: {
            trigger: modelRef.current,
            start: "top 110%",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="!h-[600px] !w-full" ref={sectionRef}>
      <div ref={modelRef}>
        <Canvas
          className="!h-[600px] !w-full"
          camera={{ position: [0, 0, 10], fov: 45 }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} />
          <Suspense fallback={null}>
            <Model />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
