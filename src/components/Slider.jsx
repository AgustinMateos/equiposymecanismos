"use client";
import React, { useState } from "react";
import Link from "next/link";

const Slider = () => {
  const cards = [
    {
      image: "/images/productosDestacados/producto-prueba.jpeg",
      category: "Producto 1",
      path: "",
    },
    {
      image: "/images/productosDestacados/producto-prueba.jpeg",
      category: "Producto 2",
      path: "",
    },
    {
      image: "/images/productosDestacados/producto-prueba.jpeg",
      category: "Prodcuto 3",
      path: "vermas",
    },
    {
      image: "/images/productosDestacados/producto-prueba.jpeg",
      category: "Producto 4",
      path: "ver mas",
    },
    {
      image: "/images/productosDestacados/producto-prueba.jpeg",
      category: "Microorganismos y bacterias",
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
        className="bg-[#60AFFF] text-white p-3 rounded-full hover:bg-gray-900 transition-colors"
        onClick={handlePrev}
      >
        ❮
      </button>

      <div className="flex overflow-hidden py-20 w-full gap-4 px-4 md:px-[70px]">
        {visibleSlides.map((card, index) => (
          <div
            key={index}
            className="w-4/4 sm:w-2/4 md:w-1/4 flex-shrink-0 transition-transform duration-300 bg-white border-gray-500 rounded-lg shadow-md overflow-hidden relative"
          >
            <img src={card.image} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-[14px] text-center w-full text-[#555555] font-semibold mb-5">
                {card.category}
              </h3>
              {/* <p className="text-sm text-gray-600 h-[70px]">
                {card.subcategory}
              </p> */}
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
