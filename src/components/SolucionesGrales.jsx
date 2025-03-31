import Link from "next/link";
import React from "react";

export default function SolucionesGrales({ solutions }) {
  return (
    <section id="soluciones">
      <div className="xl:h-[400px] lg:h-[690px] flex flex-col justify-center items-center w-full py-10 relative">
        <div className="w-full flex justify-center items-center py-5">
          <h2 className=" w-full text-center h-full text-3xl text-[#60AFFF] px-10">
            BRINDAMOS SOLUCIONES
          </h2>
        </div>

        <div className="w-full z-0 h-[50%] bg-[#cbcbcb] absolute bottom-0">
          {""}
        </div>
        <div className="flex flex-wrap justify-start lg:justify-center items-center lg:py-10 lg:w-[95%] max-w-[1440px] xl:gap-[10px] lg:gap-[5px] z-0 bg-[#60AFFF] rounded-md solucionesGrales-container">
          {solutions.map((solucion, i) => (
            <div
              className="relative w-[220px] h-[245px] p-5 flex flex-col justify-start items-center"
              key={i}
            >
              <img
                width={"50px"}
                height={"50px"}
                src={solucion.icon}
                alt=""
                className="mb-4"
              />
              <h2 className="mb-2 w-full text-center text-[white]">
                {solucion.title}
              </h2>
              <p className="text-sm w-full text-center mb-2">{solucion.text}</p>
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
