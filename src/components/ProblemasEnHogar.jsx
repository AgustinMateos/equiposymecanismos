import montserrat from "@/app/fonts/fonts";
import React from "react";

export default function ProblemasEnHogar({ items }) {
  return (
    <section
      id="mision"
      className="relative bg-[#60AFFF] flex flex-col justify-center items-center px-10 md:px-20 2xl:px-60 xl:px-40 md:px-10 py-24 text-white overflow-hidden h-[1300px] sm:h-[1000px] md:h-[680px]"
    >
      {/* Top Wave (Inclined Upwards) */}
      <svg
        className="absolute top-0 left-0 w-full rotate-0"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C360,0 720,120 1080,30 C1260,-10 1440,80 1440,0 L0,0 Z"
          fill="#ffffff"
        />
      </svg>

      {/* Content */}
      <h3
        className={`font-bold w-full text-center mb-10 md:mb-5 2xl:mb-14 xl:mb-16 lg:mb-14 text-4xl text-black ${montserrat.className}`}
      >
        Problemáticas comunes
      </h3>

      <div className="problematicasComunes-problemas-container w-full px-5 sm:px-0 flex flex-col md:flex-row justify-center items-start gap-[50px] 2xl:gap-[20px] 2xl:w-[80%]">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col justify-center items-center 2xl:w-[80%] ${montserrat.className}`}
          >
            <h4 className="w-full text-left md:text-[18px] text-[22px] font-bold mb-5">
              {item.title}
            </h4>
            <p className="w-full text-left md:text-[14px] text-[18px] mb-5 text-black">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Wave (Inclined Upwards) */}
      <svg
        className="absolute bottom-0 left-0 w-full rotate-180"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C360,0 720,120 1080,30 C1260,-10 1440,80 1440,0 L0,0 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
