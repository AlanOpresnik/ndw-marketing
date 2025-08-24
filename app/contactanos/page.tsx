import React from "react";
import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex justify-center items-center !pt-32 bg-gradient-to-br  bg-[#111] ">
      {/* Header */}
      <div className=" fixed inset-0 overflow-hidden rounded-lg h-full">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute top-1/4 -right-6 w-32 h-32 bg-cyan-400/15 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-6 right-1/4 w-28 h-28 bg-emerald-300/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/8 via-transparent to-cyan-500/8 animate-pulse"></div>
      </div>
      {/* Main Content */}
      <div className="!px-6 !pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center !mb-16">
            <h1 className="text-white text-5xl md:text-6xl font-bold text-foreground !mb-6">
              Conectemos
            </h1>
            <p className="text-xl text-white max-w-2xl !mx-auto leading-relaxed">
              Tu transformación digital comienza aquí. En NDW, creemos en el
              poder de lo digital.
            </p>
          </div>

          {/* Contact Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Contact Info & Visual */}
            <div className="order-1 lg:order-2">
              <ContactInfo />
            </div>
          </div>
          <div className="!mt-24 gap-24 flex">
            <div>
              <Image
                src={"/mockup-ndw.png"}
                width={600}
                height={600}
                alt="mockUp NDW"
              />
            </div>
            <div>
              <p className="text-6xl text-white font-bold">Te gustaría formar parte del equipo? </p>
              <p className="text-xl !mt-4 text-white/50 font-semibold">
                si te entusiasma el mundo digital y sos creativ@, Envianos tu CV
                y porfolio a:
              </p>
              <p className="text-5xl text-white font-bold">hola@ndw.digital</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
