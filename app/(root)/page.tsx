import HeroMain from "./components/Hero";
import ScrollText from "./components/ScrollText/ScrollText";
import DividerTextHuge from "./components/DividerTextHuge/DividerTextHuge";
import AboutUsSection from "./components/AbourUsSection/AboutUsSection";
import PowBanner from "@/components/ui/infinite-moving-pharses";
import Navbar from "@/components/shared/Navbar/Navbar";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import { WorldMapDemo } from "./components/WorldMap/WorldMap";
import InfiniteBrandSlider from "./components/InfiteCarouselClients/ClientesWhitUs";
import BentoGridServices from "./components/BentoGridServices/BentoGridServices";
import PhotosSection from "./components/PhotosSection/PhotosSection";
import ImageBackgroundSection from "./components/ImageBackgroundSection/ImageBackgroundSection";
import { ProyectsCarrousel } from "./components/ProyectsCarrousel/ProyectsCarrousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111] text-gray-900 relative overflow-hidden">
      {/* Navigation */}


      {/* Radial Lines Effect */}
      <div className="radial-lines">
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={i}
            className="radial-line"
            style={{ transform: `rotate(${i * 9}deg)` }}
          ></div>
        ))}
      </div>

      {/* More Animated Lines Background - RESTORED */}
      <div className="lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
        <div className="line line-5"></div>
        <div className="line line-6"></div>
        <div className="line line-7"></div>
        <div className="line line-8"></div>
        <div className="line line-9"></div>
        <div className="line line-10"></div>
        <div className="line line-11"></div>
        <div className="line line-12"></div>
      </div>

      {/* More Floating Bubbles - RESTORED */}
      <div className="particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
        <div className="particle particle-9"></div>
        <div className="particle particle-10"></div>
        <div className="particle particle-11"></div>
        <div className="particle particle-12"></div>
        <div className="particle particle-13"></div>
        <div className="particle particle-14"></div>
        <div className="particle particle-15"></div>
      </div>

      {/* Enhanced Geometric Elements - RESTORED */}
      <div className="geometric-elements">
        <div className="geo-element circle-1"></div>
        <div className="geo-element circle-2"></div>
        <div className="geo-element circle-3"></div>
        <div className="geo-element square-1"></div>
        <div className="geo-element square-2"></div>
        <div className="geo-element triangle-1"></div>
      </div>

      {/* More Connection Lines - RESTORED */}
      <div className="connection-lines">
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

      {/* Floating Bubbles Background - RESTORED */}
      <div className="bubbles">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        <div className="bubble bubble-7"></div>
        <div className="bubble bubble-8"></div>
        <div className="bubble bubble-9"></div>
        <div className="bubble bubble-10"></div>
      </div>

      {/* Decorative Dots - RESTORED */}
      <div className="decorative-dots">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
        <div className="dot dot-4"></div>
        <div className="dot dot-5"></div>
        <div className="dot dot-6"></div>
        <div className="dot dot-7"></div>
        <div className="dot dot-8"></div>
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
        <div className="!mb-24">
          <PowBanner />
        </div>
        <section className="">
          <div className=" items-center ">
            <WorldMapDemo />
          </div>
          <div className="absolute  top-0 left-0 w-full h-full overflow-hidden ">
            <div className="w-96 h-96 bg-[#f05a2818] opacity-10 rounded-full blur-3xl animate-pulse absolute bottom-10 right-10"></div>
          </div>
        </section>
        <section>
          <ProyectsCarrousel/>
        </section>
        <section className="!z-50">
          <TestimonialsSection/>
        </section>
        <section id="services" className="">
          <BentoGridServices/>
        </section>
        <section>
          <PhotosSection />
        </section>
        <div>
          <ImageBackgroundSection/>
        </div>
      </div>

      {/* Enhanced Animated Background Gradient - RESTORED */}
      <div className="animated-gradient z-[-1]"></div>
    </div>
  );
}
