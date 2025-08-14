import React from "react";

export default function WhyChooseNdw() {
  return (
    <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl !p-8 !mb-12 w-full !mx-auto">
      <h2 className="text-3xl font-bold text-white !mb-6">
        ¿Por qué elegir NDW?
      </h2>
      <div className="grid md:grid-cols-3 gap-6 text-left">
        <div className="!space-y-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">🚀</span>
          </div>
          <h3 className="font-semibold text-white text-lg">
            Resultados Comprobados
          </h3>
          <p className="text-gray-400 text-sm">
            Más de 200 proyectos exitosos y clientes satisfechos que han
            multiplicado su presencia digital.
          </p>
        </div>

        <div className="!space-y-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">⚡</span>
          </div>
          <h3 className="font-semibold text-white text-lg">
            Tecnología Avanzada
          </h3>
          <p className="text-gray-400 text-sm">
            Utilizamos las últimas herramientas de IA y automatización para
            maximizar tu ROI.
          </p>
        </div>

        <div className="!space-y-3">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">🎯</span>
          </div>
          <h3 className="font-semibold text-white text-lg">
            Estrategia Personalizada
          </h3>
          <p className="text-gray-400 text-sm">
            Cada proyecto es único. Creamos estrategias a medida para tu
            industria y objetivos.
          </p>
        </div>
      </div>
    </div>
  );
}
