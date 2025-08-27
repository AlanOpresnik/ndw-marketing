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
    text: "Antes de trabajar con el equipo, tenía miedo de que otra persona registrara el nombre de mi emprendimiento primero. Me acompañaron en todo el proceso de búsqueda, presentación y seguimiento, y hoy mi marca está protegida legalmente. Ahora puedo crecer tranquilo, sabiendo que mi identidad es solo mía",
    author: "Mari ",
    position: "Mari, Vuelo de Angeles",
    company: "Vuelo de Angeles",
    avatar: "https://avatar.iran.liara.run/public",
  },
  {
    id: 2,
    rating: 5,
    text: "Yo me siento super bien con el trabajo. Me dan respuestas, me dan ideas. Posta que estoy re contenta. Me saqué un re peso de encima y además le dimos un re valor agregado a todo",
    author: "Sol",
    position: "Sol, CrediOn",
    company: "CrediOn",
    avatar: "https://avatar.iran.liara.run/public",
  },
  {
    id: 3,
    rating: 5,
    text: "Muy contentos con los trabajos, No queria dejar de agradecerles, y reconocerles el trabajo. Los valoramos mucho.",
    author: "Gabriela ",
    position: "Gabriela,  Eco Asociación",
    company: " Eco Asociación",
    avatar: "https://avatar.iran.liara.run/public",
  },
  {
    id: 4,
    rating: 5,
    text: "Estoy muy contenta, de verdad gracias. Es un contexto re dificil todo. Pero todo esto me entusiasma. Asi que muchas gracias de verdad.",
    author: "Nadina",
    position: "Nadina, NAF Seguros",
    company: "NAF Seguros",
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
        <h2 className="text-4xl md:text-5xl font-bold text-white !mb-12 text-center ">
          Testimonios de clientes
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
