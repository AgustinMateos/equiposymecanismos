"use client";
import montserrat from "@/app/fonts/fonts";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function SolucionesGrales({ solutions }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Deja de observar una vez que se activa
        }
      },
      {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="soluciones" ref={sectionRef}>
      <div className="xl:h-[400px] lg:h-[690px] flex flex-col justify-center items-center w-full py-10 relative">
        <div className="w-full flex justify-center items-center py-5">
          <h2
            className={`font-bold w-full text-center h-full text-3xl text-[#60AFFF] px-10 ${montserrat.className}`}
          >
            BRINDAMOS SOLUCIONES
          </h2>
        </div>

        <div
          className="w-full z-0 h-[50%] bg-[#F0F0F0] absolute bottom-0"
          style={{
            height: "300px",
            clipPath: "ellipse(75% 100% at 50% 100%)",
          }}
        >
          {""}
        </div>
        <div className="flex flex-wrap justify-between lg:justify-center items-center lg:py-10 lg:w-[95%] max-w-[1440px] xl:gap-[15px] lg:gap-[5px] z-0 bg-[#60AFFF] rounded-[10px] solucionesGrales-container">
          {solutions.map((solucion, i) => (
            <div
              className={`relative w-[220px] h-[245px] p-5 flex flex-col justify-start items-center ${
                isVisible ? "fade-in" : "opacity-0"
              }`}
              key={i}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="w-full flex justify-center items-center">
                <img
                  width={"50px"}
                  height={"50px"}
                  src={solucion.icon}
                  alt=""
                  className="mb-4"
                />
              </div>

              <h2
                className={`text-[14px] leading-[18px] mb-4 w-full text-center font-semibold text-[white] ${montserrat.className}`}
              >
                {solucion.title}
              </h2>
              <div className="flex justify-center items-center"></div>
              <p
                className={`${montserrat.className} text-[12px] w-full text-center mb-2`}
              >
                {solucion.text}
              </p>
              {/* <Link
                className="absolute bottom-[15px] underline text-white"
                href={solucion.link}
              >
                Conocé más
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
