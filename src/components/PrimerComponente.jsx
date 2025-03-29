"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function PrimerComponente() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Soluciones para la purificación y ablandamiento de agua",
      text: "Contamos con soluciones para tu hogar y para la industria",
      buttons: [
        { text: "Hogar", action: () => console.log("Ver más - Slide 1") },
        {
          text: "Industria",
          action: () => console.log("Registrarse - Slide 1"),
        },
      ],
    },
    {
      title: "¿Quiénes somos?",
      text: "Somos una empresa con más de 50 años de trayectoria en la ingeniería del agua",
      buttons: [
        {
          text: "Sobre nosotros",
          action: () => console.log("Explorar - Slide 2"),
        },
      ],
    },
    {
      title: "Encontrá la solución perfecta para vos",
      text: "Contamos con una amplia variedad de productos para solucionar tus necesidades.",
      buttons: [
        {
          text: "Productos destacados",
          action: () => console.log("Comprar - Slide 3"),
        },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
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

      <div className="relative sm:w-[60%] z-10 flex items-center justify-center h-full px-4">
        <div className="relative w-full max-w-md md:max-w-lg">
          <div className="bg-black/50 p-6 h-[300px] flex justify-center items-center flex-col rounded-lg text-center text-white transition-all duration-500 ease-in-out transform relative">
            <h1 className="text-3xl md:text-[28px] font-bold mb-4 text-left w-full px-5">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-base px-5 mb-6 text-left w-full">
              {slides[currentSlide].text}
            </p>

            <div className="flex justify-start gap-4 w-full pl-5">
              <button
                onClick={slides[currentSlide].buttons[0].action}
                className={
                  "px-4 py-2 hover:bg-gray-200 transition-colors btn-principal"
                }
              >
                {slides[currentSlide].buttons[0].text}
              </button>
              {slides[currentSlide].buttons[1] && (
                <button
                  onClick={slides[currentSlide].buttons[1].action}
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors btn-secundario"
                >
                  {slides[currentSlide].buttons[1].text}
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
