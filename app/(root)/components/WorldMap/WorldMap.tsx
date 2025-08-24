"use client";
import { WorldMap } from "@/components/ui/world-map";

export function WorldMapDemo() {
  return (
    <div className=" !py-4   w-full">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-bold max-w-4xl mx-auto text-2xl md:text-6xl text-white  !px-4">
          Contamos con clientes de todo el{" "}
          <span className="bg-gradient-to-r from-[#F05928] via-[#0373FF] to-[#A4A9F6] bg-clip-text text-transparent">
            {"MUNDO".split("").map((word, idx) => (
              <span key={idx}>{word}</span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-4xl mx-auto !py-4 px-4">
          desde Europa hasta Latino America. Impulsamos marcas de todo el mundo,
          no importa donde estes ofrecemos soluciones digitales adaptadas a la
          necesidad de tu marca.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}
