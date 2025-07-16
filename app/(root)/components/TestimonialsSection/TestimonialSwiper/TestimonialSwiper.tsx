"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    quote:
      "La productividad de nuestro equipo se dispara con esta herramienta de mensajería. Su simplicidad facilita la toma de decisiones rápida y una colaboración fluida, esenciales para el rápido desarrollo de nuestros productos.",
    name: "Emily Rodriguez",
    company: "Emily Rodriguez, PinPoint",
    companyName: "PinPoint",
    avatar: "https://avatar.iran.liara.run/public",
    initials: "ER",
  },
  {
    id: 2,
    quote:
      "Con esta herramienta, el flujo de trabajo de nuestro equipo se volvió más eficiente y organizado. Dedicamos menos tiempo a navegar por interfaces complejas y más tiempo a concentrarnos en lo importante: ofrecer productos de calidad a nuestros clientes.",
    name: "David Patel",
    company: "David Patel, Hues",
    companyName: "Hues",
    avatar: "https://avatar.iran.liara.run/public",
    initials: "DP",
  },
  {
    id: 3,
    quote:
      "The integration capabilities are outstanding. We've streamlined our entire workflow and reduced communication overhead by 60%. It's been a game-changer for our remote team.",
    name: "Sarah Chen",
    company: "Sarah Chen, TechFlow",
    companyName: "TechFlow",
    avatar: "https://avatar.iran.liara.run/public",
    initials: "SC",
  },
  {
    id: 4,
    quote:
      "Customer support is exceptional and the platform is incredibly intuitive. Our onboarding time was cut in half, and team adoption was seamless across all departments.",
    name: "Michael Johnson",
    company: "Michael Johnson, InnovateLab",
    companyName: "InnovateLab",
    avatar: "https://avatar.iran.liara.run/public",
    initials: "MJ",
  },
  {
    id: 5,
    quote:
      "The analytics dashboard provides incredible insights into our team's performance. We've been able to identify bottlenecks and optimize our processes like never before.",
    name: "Lisa Wang",
    companyName: "DataDriven",
    company: "Lisa Wang, DataDriven",
    avatar: "https://avatar.iran.liara.run/public",
    initials: "LW",
  },
  {
    id: 6,
    quote:
      "Security features are top-notch and compliance management is seamless. Our IT team loves the granular control and our executives appreciate the transparency.",
    name: "Robert Kim",
    company: "Robert Kim, SecureFlow",
     companyName: "SecureFlow",
    avatar: "https://avatar.iran.liara.run/public",
    initials: "RK",
  },
];

export default function TestimonialSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 2.2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - slidesPerView;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className=" text-white !py-16 !px-4 z-10">
      <div className=" !mx-auto z-10">
        {/* Header with navigation */}
        <div className="flex items-center justify-between !mb-12 z-10">
          <h2 className="text-3xl md:text-5xl font-bold z-10">
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex gap-2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={isTransitioning}
              className="bg-transparent border-gray-600 hover:bg-gray-800 hover:border-gray-500 cursor-pointer text-white disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={isTransitioning}
              className="bg-transparent border-gray-600 cursor-pointer hover:bg-gray-800 hover:border-gray-500 text-white disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>

        {/* Slider container */}
        <div className="overflow-hidden z-10">
          <div
            className="flex z-10 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / slidesPerView)
              }%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                avatar={testimonial.avatar}
                company={testimonial.company}
                id={testimonial.id}
                initials={testimonial.initials}
                name={testimonial.name}
                quote={testimonial.quote}
                companyName={testimonial.companyName}
                slidesPerView={slidesPerView}
              />
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 !mt-8 !z-20">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 rounded-full transition-colors duration-200 disabled:cursor-not-allowed ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
