import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  other: {
    "google-site-verification": "BuDXj6rCWSUzzkoE7y2e9XPpMY8KH52MbFu3di_4fiY",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Esta parte se incluirá en el head real si no usás app/head.jsx */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MBJKK8JCF7"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MBJKK8JCF7');
            `,
          }}
        />
      </head>
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
