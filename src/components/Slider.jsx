"use client";
import React, { useState } from "react";
import Link from "next/link";

const Slider = () => {
  const cards = [
    {
      image: "/sarro.webp",
      category: "Acumulacion de Sarro",
      subcategory:
        "Protegé tus cañerías y electrodomésticos de obstrucciones y daños por sarro.",
      path: "",
    },
    {
      image: "/cloro.jpg",
      category: "Exceso de cloro",
      subcategory:
        "Eliminá el olor y sabor a cloro para un agua más pura y saludable.",
      path: "",
    },
    {
      image: "/arsenico.jpg",
      category: "Contaminantes y toxinas",
      subcategory:
        "Agua libre de arsénico, metales pesados y otras sustancias nocivas.",
      path: "vermas",
    },
    {
      image: "/aguacristalina.jpeg",
      category: "Turbidez y partículas",
      subcategory:
        "Disfrutá de agua cristalina eliminando sedimentos y partículas en suspensión.",
      path: "ver mas",
    },
    {
      image: "/aguafamilia.jpg",
      category: "Microorganismos y bacterias",
      subcategory:
        "Eliminá bacterias y asegurá agua segura para toda tu familia.",
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

  const visibleSlides = cards.slice(currentIndex, currentIndex + visibleImages);

  return (
    <div className="flex items-center max-w-6xl mx-auto py-5 mt-[60px] md:mt-[0px] mb-[210px] md:mb-[0px] h-auto md:h-[500px]">
      <button
        className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors"
        onClick={handlePrev}
      >
        ❮
      </button>

      <div className="flex overflow-hidden w-full gap-4 px-4 md:px-[70px]">
        {visibleSlides.map((card, index) => (
          <div
            key={index}
            className="w-4/4 sm:w-2/4 md:w-1/4 flex-shrink-0 transition-transform duration-300 bg-white border rounded-lg shadow-md overflow-hidden"
          >
            <img src={card.image} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 h-[60px]">
                {card.category}
              </h3>
              <p className="text-sm text-gray-600 h-[70px]">
                {card.subcategory}
              </p>
              <Link href={card.path}>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Ver más
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        className="bg-gray-800 ml-[10px] text-white p-3 rounded-full hover:bg-gray-900 transition-colors"
        onClick={handleNext}
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;
