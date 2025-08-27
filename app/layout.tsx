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
  title: "NDW AGENCIA DE MARKETING",
  description:
    "En New Digital World nos encargamos de influenciar tu marca y llevarla al exito",
  icons: {
    icon: "/favicon.ico",
  },
  // OpenGraph mejorado
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://ndwagenciadigital.com",
    siteName: "NDW AGENCIA DE MARKETING",
    title: "NDW AGENCIA DE MARKETING",
    description:
      "En New Digital World nos encargamos de influenciar tu marca y llevarla al exito",
    images: [
      {
        url: "/mockup-ndw.png",
        width: 1200,
        height: 630,
        alt: "NDW AGENCIA DE MARKETING",
        type: "image/png",
      },
    ],
  },
  // Twitter Cards (WhatsApp también las usa como fallback)
  twitter: {
    card: "summary_large_image",
    site: "@ndwagencia", // Cambia por tu handle de Twitter si tienes
    title: "NDW AGENCIA DE MARKETING",
    description:
      "En New Digital World nos encargamos de influenciar tu marca y llevarla al exito",
    images: ["https://ndwagenciadigital.com/mockup-ndw.png"],
  },
  // Meta tags adicionales para mejor compatibilidad
  other: {
    "og:image:secure_url": "https://ndwagenciadigital.com/mockup-ndw.png",
    "og:image:type": "image/png",
    "og:image:width": "1200",
    "og:image:height": "630",
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
