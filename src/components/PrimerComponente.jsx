'use client'; // Necesario para componentes con estado en Next.js

import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Iconos de flechas

export default function PrimerComponente() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Contenido de las 3 cards con botones
  const slides = [
    {
      title: "Tipos de Usuario",
      text: "Contenido responsive 1",
      buttons: [
        { text: "Ver más", action: () => console.log("Ver más - Slide 1") },
        { text: "Registrarse", action: () => console.log("Registrarse - Slide 1") }
      ]
    },
    {
      title: "Que hacemos?",
      text: "Contenido responsive 2",
      buttons: [
        { text: "Explorar", action: () => console.log("Explorar - Slide 2") },
        { text: "Contacto", action: () => console.log("Contacto - Slide 2") }
      ]
    },
    {
      title: "Productos Destacados",
      text: "Contenido responsive 3",
      buttons: [
        { text: "Comprar", action: () => console.log("Comprar - Slide 3") },
        { text: "Detalles", action: () => console.log("Detalles - Slide 3") }
      ]
    }
  ];

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5000ms = 5 segundos

    // Limpieza del intervalo al desmontar
    return () => clearInterval(timer);
  }, [slides.length]);

  // Funciones para las flechas
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Slider */}
      <div className="relative sm:w-[50%] z-10 flex items-center justify-center h-full px-4">
        {/* Contenedor del slide con flechas */}
        <div className="relative w-full max-w-md md:max-w-lg">
          {/* Card */}
          <div className="bg-black/50 p-6 h-[300px] flex justify-center items-center flex-col rounded-lg text-center text-white transition-all duration-500 ease-in-out transform relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              {slides[currentSlide].text}
            </p>

            {/* Botones debajo del contenido */}
            <div className="flex justify-center gap-4">
              <button
                onClick={slides[currentSlide].buttons[0].action}
                className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
              >
                {slides[currentSlide].buttons[0].text}
              </button>
              <button
                onClick={slides[currentSlide].buttons[1].action}
                className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
              >
                {slides[currentSlide].buttons[1].text}
              </button>
            </div>

            {/* Flecha izquierda */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-2xl p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors -ml-4"
            >
              <FaArrowLeft />
            </button>

            {/* Flecha derecha */}
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