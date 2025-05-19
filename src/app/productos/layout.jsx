import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/generals/Navbar";
import Footer from "@/components/generals/Footer";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "EQUIMEC | Equipos para la purificación, ablandamiento y filtración de agua",
  description:
    "Conocé nuestras soluciones para el tratamiento de agua: ablandadores, filtros y productos antisarro para proteger tus equipos y mejorar la calidad del agua.",
};

export default function ProductsPageLayout({ children }) {
  return (
    <>
      <Navbar bgColorMovement="bg-[#2A5AA7]" bgColorStatic="bg-[#2A5AA7]" />
      {children}
      <Link
        href="https://wa.me/541158085500"
        className="fixed bottom-5 right-5 flex justify-center items-center"
      >
        <img
          className="w-[55px] h-[55px] whatsapp-icon"
          src="/icons/whatsapp-icon.webp"
          alt=""
        />
      </Link>
    </>
  );
}
