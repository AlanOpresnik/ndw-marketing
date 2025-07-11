import { LucideEarth, StarIcon, User } from "lucide-react";
import React from "react";

export default function InformationClients() {
  return (
    <div className="text-white flex gap-12 !mt-6 border-t w-fit !pt-4">
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-2 items-center justify-center mb-2">
          <LucideEarth className="h-6 w-6 text-blue-400 mr-2" />
          <span className="text-3xl font-bold text-white">+20</span>
        </div>
        <p>Paises</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-2 items-center justify-center mb-2">
          <User className="h-6 w-6 text-purple-400 mr-2" />
          <span className="text-3xl font-bold text-white">+69</span>
        </div>
        <p>Clientes</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-2  items-center justify-center mb-2">
          <StarIcon className="h-6 w-6 text-yellow-400 mr-2" />
          <span className="text-3xl font-bold text-white">5</span>
        </div>
        <p>Estrellas</p>
      </div>
    </div>
  );
}
