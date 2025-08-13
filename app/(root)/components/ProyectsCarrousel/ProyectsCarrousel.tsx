"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from 'embla-carousel';
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "/proyectosCarousel/BannerImageModelos.jpg",
    title: "Foto con Modelos",
    description: "Fotografia profesional con modelos",
  },
  {
    id: 2,
    image: "/proyectosCarousel/BannerImageSplash.jpg",
    title: "Fotos de Producto",
    description: "Nos encargamos de las fotos de tu Ecommerce",
  },
  {
    id: 3,
    image: "/backgroundImage.jpg",
    title: "Fotografia profesional",
    description: "Fotografia profesional para todos los lugares",
  },
  {
    id: 4,
    image: "/backgroundImage.jpg",
    title: "Tecnología Avanzada",
    description: "El futuro está aquí, experiméntalo hoy",
  },
  {
    id: 5,
    image: "/backgroundImage.jpg",
    title: "Océano Infinito",
    description: "Sumérgete en la serenidad del mar",
  },
];

export const ProyectsCarrousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30,
    startIndex: 0,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const toggleAutoplay = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi, isPlaying]);

  return (
    <div className="relative w-full h-full xl:h-[800px] !px-4 !mx-auto">
      {/* Main Carousel */}
      <div
        className="overflow-hidden rounded-2xl shadow-carousel"
        ref={emblaRef}
      >
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] relative">
              <div className="relative w-full h-[440px]  xl:h-[800px] md:aspect-video group">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-[center_29%]  transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-60" />

                {/* Content Overlay */}
                <div className="absolute bg-black/60 inset-0 flex items-end  !p-8 md:!p-12">
                  <div className="space-y-4 animate-fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl !mt-4 text-white max-w-md">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-md border-border/20 hover:bg-background/30 transition-all duration-300 hover:scale-110 shadow-glow"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-md border-border/20 hover:bg-background/30 transition-all duration-300 hover:scale-110 shadow-glow"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicators */}
      <div className="flex justify-center items-center space-x-3 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === selectedIndex
                ? "bg-primary scale-125 shadow-glow"
                : "bg-muted hover:bg-muted-foreground/50 hover:scale-110"
            )}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>

      {/* Play/Pause Control */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-md border-border/20 hover:bg-background/30 transition-all duration-300"
        onClick={toggleAutoplay}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};
