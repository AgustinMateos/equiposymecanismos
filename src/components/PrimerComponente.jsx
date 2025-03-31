"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function PrimerComponente() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: ": soluciones para tu hogar e industria",
      span: "Agua pura, cuidado seguro",
      text: "Evitá daños en cañerías, electrodomésticos y agua de baja calidad. Nuestros sistemas de filtración, ablandamiento y potabilización protegen tu hogar y mejoran procesos industriales.",
      buttons: [
        {
          text: "Soluciones para el Hogar",
          action: () => console.log("Ver más - Slide 1"),
          link: "/#tratamientos-para-el-hogar",
        },
        {
          text: "Soluciones para la Industria",
          action: () => console.log("Registrarse - Slide 1"),
          link: "/#tratamientos-para-la-industria",
        },
      ],
    },
    {
      title: "Más de 30 años llevando agua pura a ",
      span: " hogares e industrias",
      text: " Brindamos soluciones que cuidan de tu familia y optimizan tu industria ahorrandote tiempo y dinero. Con años de experiencia y un equipo de especialistas, garantizamos agua pura y segura.",
      buttons: [
        {
          text: " Conócenos",
          action: () => console.log("Explorar - Slide 2"),
          link: "/#sobre-nosotros",
        },
      ],
    },
    {
      title: "para un agua más pura",
      span: "Tecnología avanzada ",
      text: "Soluciones innovadoras para el hogar y la industria. Conocé nuestros productos destacados y lleva la mejor calidad de agua a tu vida.",
      buttons: [
        {
          text: "Productos destacados",
          action: () => console.log("Comprar - Slide 3"),
          link: "/#productos-destacados",
        },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative lg:w-[60%] sm:w-[100%] z-10 flex items-center justify-center h-full px-4">
        <div className="relative w-full max-w-xl md:max-w-xl">
          <div className="bg-black/50 p-6 md:h-[300px] h-[450px] flex justify-center items-center flex-col rounded-lg text-center text-white transition-all duration-500 ease-in-out transform relative">
            {currentSlide === 0 ? (
              <>
                <h2 className="text-2xl sm:text-3xl md:text-[24px] font-bold mb-4 text-left w-full md:px-5 pr-0 pl-5">
                  <span className="text-[#60AFFF]">
                    {slides[currentSlide].span}
                  </span>
                  {slides[currentSlide].title}
                </h2>
                <p className="text-[14px] md:text-base px-5 mb-6 text-left w-full">
                  {slides[currentSlide].text}
                </p>
              </>
            ) : currentSlide === 1 ? (
              <>
                <h2 className="text-2xl sm:text-3xl md:text-[24px] font-bold mb-4 text-left w-full px-5">
                  {slides[currentSlide].title}{" "}
                  <span className="text-[#60AFFF]">
                    {slides[currentSlide].span}
                  </span>
                </h2>
                <p className="text-[14px] md:text-base px-5 mb-6 text-left w-full">
                  {slides[currentSlide].text}
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl md:text-[24px] font-bold mb-4 text-left w-full px-5">
                  <span className="text-[#60AFFF]">
                    {slides[currentSlide].span}
                  </span>
                  {slides[currentSlide].title}
                </h2>
                <p className="text-[14px] md:text-base px-5 mb-6 text-left w-full">
                  {slides[currentSlide].text}
                </p>
              </>
            )}

            <div className="flex flex-col sm:flex-row justify-start gap-4 w-full pl-5">
              <button
                onClick={slides[currentSlide].buttons[0].action}
                className={
                  "px-4 py-2 hover:bg-gray-200 transition-colors btn-principal"
                }
              >
                <Link
                  className="w-full h-full"
                  href={slides[currentSlide].buttons[0].link}
                >
                  {slides[currentSlide].buttons[0].text}
                </Link>
              </button>
              {slides[currentSlide].buttons[1] && (
                <button
                  onClick={slides[currentSlide].buttons[1].action}
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors btn-secundario"
                >
                  <Link href={slides[currentSlide].buttons[1].link}>
                    {slides[currentSlide].buttons[1].text}
                  </Link>
                </button>
              )}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-2xl p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors -ml-4"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-2xl p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors -mr-4"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
