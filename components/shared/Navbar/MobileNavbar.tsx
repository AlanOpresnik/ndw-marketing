"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, PhoneCallIcon, X } from "lucide-react";
import MainButton from "../MainButton";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top w-full glass-nav !mx-auto !z-[100]">
      <div className="relative flex justify-between items-center !p-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image src={"/logo.webp"} alt="Logo" width={150} height={150} />
          </Link>
        </div>

        {/* Drawer Trigger */}
        <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <button
              className="!p-2 text-white hover:text-navy transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </DrawerTrigger>

          {/* Drawer Content */}
          <DrawerContent className=" h-full w-80 bg-black/90 backdrop-blur-md border-none !z-50 !pt-24">
            <div className="flex flex-col !px-6 !py-4 !space-y-6">
              <Link
                href="/"
                className="text-white hover:text-primary-blue font-medium text-lg !py-3 border-b border-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>

              <Link
                href="/#services"
                className="text-white hover:text-primary-blue font-medium text-lg !py-3 border-b border-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>

              <Link
                href="/contactanos"
                className="text-white hover:text-primary-blue font-medium text-lg !py-3 border-b border-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>

              <div className="pt-6">
                <MainButton
                  icon={<PhoneCallIcon />}
                  
                  href="https://wa.me/5491169985566"
                  className="w-full text-center flex justify-center !px-6 !py-3 bg-navy text-white font-bold rounded-full hover:bg-primary-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  WhatsApp
                </MainButton>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
