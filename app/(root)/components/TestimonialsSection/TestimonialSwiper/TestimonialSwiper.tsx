"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "La productividad de nuestro equipo se dispara con esta herramienta de mensajería. Su simplicidad facilita la toma de decisiones rápida y una colaboración fluida, esenciales para el rápido desarrollo de nuestros productos.",
    author: "Emily Rodriguez",
    position: "Emily Rodriguez, PinPoint",
    company: "PinPoint",
    avatar: "https://avatar.iran.liara.run/public",
  },
  {
    id: 2,
    rating: 5,
    text: "Increíble plataforma que ha transformado completamente nuestra forma de trabajar. La interfaz intuitiva y las funcionalidades avanzadas nos han permitido optimizar todos nuestros procesos internos.",
    author: "Carlos Mendoza",
    position: "Carlos Mendoza, TechFlow",
    company: "TechFlow",
    avatar: "https://avatar.iran.liara.run/public",
  },
  {
    id: 3,
    rating: 5,
    text: "Una solución excepcional que superó todas nuestras expectativas. El soporte técnico es outstanding y la implementación fue sorprendentemente sencilla para todo nuestro equipo.",
    author: "Ana García",
    position: "Ana García, InnovateLab",
    company: "InnovateLab",
    avatar: "https://avatar.iran.liara.run/public",
  },
  {
    id: 4,
    rating: 5,
    text: "Desde que implementamos esta herramienta, nuestra eficiencia ha aumentado un 300%. Es exactamente lo que necesitábamos para escalar nuestro negocio de manera sostenible.",
    author: "Miguel Torres",
    position: "Miguel Torres, ScaleUp",
    company: "ScaleUp",
    avatar: "https://avatar.iran.liara.run/public",
  },
];

export default function TestimonialsSwiper() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType>(null);

  return (
    <section className=" min-h-screen !py-16 !px-4">
      <div className="w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white !mb-12 text-center md:text-left">
          Lo que dicen nuestros clientes
        </h2>

        <div className="relative">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onBeforeInit={(swiper) => {
              // @ts-expect-error prevEl is manually assigned due to custom navigation refs
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error nextEl is manually assigned due to custom navigation refs
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 1.2,
              },
              900: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 1.4,
              },
              1124: {
                slidesPerView: 1.6,
              },
              1264: {
                slidesPerView: 1.9,
              },
              1564: {
                slidesPerView: 2.2,
              },
              1700: {
                slidesPerView: 2.4,
              },
              1800: {
                slidesPerView: 2.6,
              },
            }}
            className="testimonials-swiper !pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10  hover:bg-gray-700 text-white !p-3 rounded-full border border-gray-600 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            ref={nextRef}
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10  hover:bg-gray-700 text-white !p-3 rounded-full border border-gray-600 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
          position: relative !important;
          margin-top: 2rem !important;
        }

        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          background: #4b5563 !important;
          opacity: 0.5 !important;
        }

        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #ffffff !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
