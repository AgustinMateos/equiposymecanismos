import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/generals/Navbar";
import Footer from "@/components/generals/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EQUIMEC | Equipos y mecanismos para la purificación de agua",
  description:
    "Soluciones eficaces para la purificación y ablandamiento del agua. Protegé tus cañerías y electrodomésticos con nuestros sistemas de tratamiento.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar bgColorMovement="bg-[#2A5AA7]" bgColorStatic="bg-transparent" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
