"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import MainButton from "@/components/shared/MainButton";
import { services } from "./ServicesData";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface BentoGridItemProps {
  className?: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function BentoGridItem({
  className,
  title,
  description,
  icon,
}: BentoGridItemProps) {
  return (
    <Card
      className={cn(
        "bento-item opacity-0 hover:!scale-102  hover:shadow-white/10 translate-y-8 flex flex-col justify-between !p-6 bg-white/5 backdrop-blur-lg border border-neutral-700/50 text-neutral-50 shadow-xl transition-all",
        className
      )}
    >
      <div className="flex flex-col gap-6">
        <div className="mb-4 ">{icon}</div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>

        <CardContent className="p-0 text-neutral-200">
          <p className="text-base leading-relaxed">{description}</p>
        </CardContent>
      </div>
    </Card>
  );
}

export default function BentoGridServices() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll(".bento-item");

    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="w-full flex justify-center !py-12 md:!py-24 lg:!py-32  text-neutral-50">
      <div className="container !px-4 md:!px-6 !z-10">
        <div className="text-center !mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-ndw-green">
            Servicios que brindamos
          </h2>
          <p className="!mt-4 text-xl text-neutral-300">
            En NDW Agencia Digital potenciamos tu marca desde la estrategia
            hasta la ejecución.
          </p>
          <p className="text-xl text-neutral-300">
            Estos son los servicios que ofrecemos:
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service, i) => (
            <BentoGridItem key={i} {...service} />
          ))}
        </div>

        <div className="flex justify-center !mt-12 z-10">
          <MainButton href="/contactanos" icon={<ArrowRight />}>
            Empezá a trabajar con nosotros
          </MainButton>
        </div>
      </div>
    </section>
  );
}
