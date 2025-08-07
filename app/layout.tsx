import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
   metadataBase: new URL('https://ndwagenciadigital.com'),
  title: "NDW AGENCIA DE MARKETING ",
  description:
    "En New Digital World nos encargamos de influenciar tu marca y llevarla al exito",
    icons: {
      icon: '/favicon.ico'
    },
  openGraph: {
    title: "NDW AGENCIA DE MARKETING",
    description: "En New Digital World nos encargamos de influenciar tu marca y llevarla al exito",
    images: [
      {
        url: "https://ndwagenciadigital.com/mockup-ndw.png",
        width: 1200,
        height: 630,
        alt: "NDW-AGENCIA DE MARKETING ",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
