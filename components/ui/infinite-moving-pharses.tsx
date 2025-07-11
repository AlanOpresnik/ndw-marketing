"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PowBanner({
  text = "Influenciando marcas",
  speed = "30s",
  avatar = "/recurso-4.svg", // Usa este prop consistentemente
}: {
  text?: string;
  speed?: string;
  avatar?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const content = scrollerRef.current.innerHTML;
    scrollerRef.current.innerHTML += content; // duplicar contenido para loop
    setStart(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full bg-white border-y border-black"
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex whitespace-nowrap text-black text-2xl md:text-3xl font-semibold uppercase animate-marquee",
          start && "will-change-transform"
        )}
        style={{
          animationDuration: speed,
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex items-center !py-4 gap-12 !mx-10">
            <div className="flex-shrink-0">
              <Image
                src={avatar} // ✅ Usa el prop avatar consistentemente
                alt="Arrow"
                width={24}
                height={24}
                className="h-12 w-12 object-cover" // ✅ Clases más simples y apropiadas
              />
            </div>
            <div className="">
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Estilos globales para la animación */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}