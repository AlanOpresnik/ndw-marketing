import HeroMain from "./components/Hero";
import ScrollText from "./components/ScrollText/ScrollText";
import DividerTextHuge from "./components/DividerTextHuge/DividerTextHuge";
import AboutUsSection from "./components/AbourUsSection/AboutUsSection";
import PowBanner from "@/components/ui/infinite-moving-pharses";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import { WorldMapDemo } from "./components/WorldMap/WorldMap";
import InfiniteBrandSlider from "./components/InfiteCarouselClients/ClientesWhitUs";
import BentoGridServices from "./components/BentoGridServices/BentoGridServices";
import PhotosSection from "./components/PhotosSection/PhotosSection";
import { ProyectsCarrousel } from "./components/ProyectsCarrousel/ProyectsCarrousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111] text-gray-900 relative overflow-hidden">
      {/* Navigation */}

      {/* Radial Lines Effect */}
      <div className="radial-lines !z-0">
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={i}
            className="radial-line"
            style={{ transform: `rotate(${i * 9}deg)` }}
          ></div>
        ))}
      </div>

      {/* More Animated Lines Background - RESTORED */}
      <div className="lines !z-0">
        <div className="line line-1 !z-0"></div>
        <div className="line line-2 !z-0"></div>
        <div className="line line-3 !z-0"></div>
        <div className="line line-4 !z-0"></div>
        <div className="line line-5 !z-0"></div>
        <div className="line line-6 !z-0"></div>
        <div className="line line-7 !z-0"></div>
        <div className="line line-8 !z-0"></div>
        <div className="line line-9 !z-0"></div>
        <div className="line line-10 !z-0"></div>
        <div className="line line-11 !z-0"></div>
        <div className="line line-12 !z-0"></div>
        <div className="line line-13 !z-0"></div>
        <div className="line line-14 !z-0"></div>
        <div className="line line-15 !z-0"></div>
        <div className="line line-16 !z-0"></div>
        <div className="line line-17 !z-0"></div>
      </div>

      {/* More Connection Lines - RESTORED */}
      <div className="connection-lines !z-0">
        <div className="connection-line line-horizontal-1"></div>
        <div className="connection-line line-horizontal-2"></div>
        <div className="connection-line line-diagonal-1"></div>
        <div className="connection-line line-diagonal-2"></div>
        <div className="connection-line line-vertical-1"></div>
        <div className="connection-line line-horizontal-1"></div>
        <div className="connection-line line-horizontal-2"></div>
        <div className="connection-line line-diagonal-1"></div>
        <div className="connection-line line-diagonal-2"></div>
        <div className="connection-line line-vertical-1"></div>
      </div>

      {/* Enhanced Gradient Orbs - RESTORED */}
      <div className="gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
      </div>

      {/* Main Content */}
      <div>
        <main className="relative !mt-24">
          <HeroMain />
          <div className="absolute  top-0 left-0 w-full h-full overflow-hidden ">
            <div className="w-72 h-72 bg-[#0373FF] opacity-20 rounded-full blur-3xl animate-pulse absolute top-20 left-20"></div>
            <div className="w-96 h-96 bg-[#f05a2881] opacity-10 rounded-full blur-3xl animate-pulse absolute bottom-10 right-10"></div>
          </div>
        </main>
        <div className="mb-0">
          <InfiniteBrandSlider />
        </div>
        <div className="!pt-0">
          <ScrollText />
        </div>
        <div>
          <DividerTextHuge />
        </div>
        <div className="z-10 relative">
          <AboutUsSection />
        </div>
        <div>
          <div className="!pb-24 w-full flex flex-col justify-center items-center">
            <h1 className="text-[3rem]  md:text-[6rem] lg:text-[8rem] xl:text-[10rem] text-center font-bold bg-gradient-to-r from-[#F05928] via-[#0373FF] to-[#A4A9F6] bg-clip-text text-transparent will-change-transform">
              <span className=" flex justify-center items-center ">NDW</span>
            </h1>
          </div>
        </div>
        <div className="!mb-24">
          <PowBanner />
        </div>
        <section className="">
          <div className=" items-center ">
            <WorldMapDemo />
          </div>
        </section>
        <section id="services" className="">
          <BentoGridServices />
        </section>
        <section className="!z-20">
          <TestimonialsSection />
        </section>
        <section>
          <ProyectsCarrousel />
        </section>
        <section className="!pt-24 !z-50 relative">
          <PhotosSection />
        </section>
      </div>

      {/* Enhanced Animated Background Gradient - RESTORED */}
      <div className="animated-gradient !z-[-1]"></div>
    </div>
  );
}
