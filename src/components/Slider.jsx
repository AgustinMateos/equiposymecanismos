"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Slider = () => {
  const cards = [
    {
      image: "/images/productosDestacados/producto-prueba.jpeg",
      category: "Microorganismos y bacterias1",
      path: "",
    },
    {
      image: "/images/productosDestacados/producto-prueba.jpeg",
      category: "Microorganismos y bacterias2",
      path: "",
    },
    {
      image: "/images/productosDestacados/producto-prueba.jpeg",
      category: "Microorganismos y bacterias3",
      path: "vermas",
    },
    {
      image: "/images/productosDestacados/producto-prueba.jpeg",
      category: "Microorganismos y bacterias4",
      path: "ver mas",
    },
    {
      image: "/images/productosDestacados/producto-prueba.jpeg",
      category: "Microorganismos y bacterias5",
      path: "ver mas",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 4;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - visibleImages : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + visibleImages >= cards.length ? 0 : prev + 1
    );
  };

  // Agregar efecto para rotación automática
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Cambia cada 3 segundos (ajusta este valor según prefieras)

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [currentIndex]); // Se ejecuta cuando cambia currentIndex

  const visibleSlides = cards.slice(currentIndex, currentIndex + visibleImages);

  return (
    <div className="flex items-center max-w-[300px] sm:max-w-6xl mx-auto py-5 mt-[60px] md:mt-[0px] mb-[210px] md:mb-[0px] h-auto md:h-[500px]">
      <button
        className="bg-[#60AFFF] text-white p-3 rounded-full hover:bg-gray-900 transition-colors"
        onClick={handlePrev}
      >
        ❮
      </button>

      <div className="flex overflow-hidden py-5 w-full gap-4 px-3 sm:px-4 md:px-[70px]">
        {visibleSlides.map((card, index) => (
          <div
            key={index}
            className="w-4/4 sm:w-2/4 lg:w-1/4 flex-shrink-0 transition-transform duration-300 bg-white border-gray-500 rounded-lg shadow-md overflow-hidden relative"
          >
            <img src={card.image} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-[14px] text-center w-full text-[#555555] font-semibold mb-5">
                {card.category}
              </h3>
              <Link
                className="absolute left-0 bottom-2 w-full flex justify-center items-center"
                href={card.path}
              >
                <button className="w-full text-center text-[#60AFFF] text-[14px]">
                  Ver más
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        className="bg-[#60AFFF] ml-[10px] text-white p-3 rounded-full hover:bg-gray-900 transition-colors"
        onClick={handleNext}
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;