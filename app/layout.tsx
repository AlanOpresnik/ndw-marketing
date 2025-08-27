import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import MobileNavbar from "@/components/shared/Navbar/MobileNavbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://ndwagenciadigital.com"),
  title: "NDW Agencia de Marketing | Impulsa tu Marca al Éxito",
  description:
    "En NDW Agencia Digital transformamos tu marca, aumentando tu visibilidad y presencia online con estrategias efectivas de marketing digital.",
  keywords: [
    "marketing digital",
    "agencia digital",
    "branding",
    "publicidad online",
    "NDW",
    "estrategias digitales",
    "redes sociales",
  ],
  authors: [
    { name: "NDW Agencia de Marketing", url: "https://ndwagenciadigital.com" },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://ndwagenciadigital.com",
    siteName: "NDW Agencia de Marketing",
    title: "NDW Agencia de Marketing | Impulsa tu Marca al Éxito",
    description:
      "Transformamos tu marca con estrategias digitales efectivas y asesoramiento personalizado para que llegues al éxito online.",
    images: [
      {
        url: "https://ndwagenciadigital.com/mockup-ndw.png",
        width: 1200,
        height: 630,
        alt: "NDW Agencia de Marketing - Estrategias Digitales",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ndwagencia",
    creator: "@ndwagencia",
    title: "NDW Agencia de Marketing | Impulsa tu Marca al Éxito",
    description:
      "Transformamos tu marca con estrategias digitales efectivas y asesoramiento personalizado.",
    images: ["https://ndwagenciadigital.com/mockup-ndw.png"],
  },
  other: {
    "og:image:secure_url": "https://ndwagenciadigital.com/mockup-ndw.png",
    "og:image:type": "image/png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "theme-color": "#0d0d0d",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        <ClientWrapper>
          <div className="invisible md:visible">
            <Navbar />
          </div>
          <div className="visible md:invisible">
            <MobileNavbar/>
          </div>
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
