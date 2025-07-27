"use client";

import { useState, useEffect } from "react";

const marketingPhrases = [
  "Transformando ideas en resultados digitales",
  "Conectando marcas con audiencias globales",
  "Impulsando tu presencia en el mundo digital",
  "Creando experiencias que realmente convierten",
  "Elevando tu marca al siguiente nivel",
  "Construyendo el futuro de tu negocio",
  "Maximizando tu ROI con estrategias inteligentes",
  "Innovación digital que marca la diferencia",
  "Convirtiendo visitantes en clientes leales",
  "Potenciando tu crecimiento exponencial",
];

export default function Loader({ isLoaded }: { isLoaded: boolean }) {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [particles, setParticles] = useState<
    { left: string; top: string; delay: string; duration: string }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 2}s`,
    }));
    setParticles(generated);
  }, []);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % marketingPhrases.length);
    }, 1500);

    return () => {
      clearInterval(phraseInterval);
    };
  }, []);

  if (isLoaded) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50 animate-fade-out">
        <div className="text-center text-white animate-bounce">
          <div className="text-2xl font-bold mb-4">
            ¡Listo para despegar! 🚀
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Elementos de fondo animados */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center !px-8 max-w-4xl mx-auto">
        {/* Logo/Icono principal */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-24 h-24 mx-auto mb-6 relative">
              {/* Spinner principal */}
              <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-2 border-transparent border-t-purple-300 rounded-full animate-spin animate-reverse"></div>

              {/* Icono central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frase principal */}
        <div className="!mb-8 h-20 flex items-center justify-center">
          <h1
            key={currentPhrase}
            className="text-2xl md:text-4xl font-bold text-white animate-fade-in-up leading-tight"
          >
            {marketingPhrases[currentPhrase]}
          </h1>
        </div>

        {/* Barra de progreso */}

        {/* Puntos de carga */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Texto adicional */}
        <div className="mt-8 text-white/70 text-sm">
          Preparando una experiencia increíble para ti
        </div>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-out {
          to {
            opacity: 0;
            transform: scale(1.1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-fade-out {
          animation: fade-out 0.5s ease-in-out forwards;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-reverse {
          animation-direction: reverse;
        }
      `}</style>
    </div>
  );
}
