import montserrat from "@/app/fonts/fonts";
import Link from "next/link";
import React from "react";

export default function TratamientosHogar({
  titulo,
  subtitulo,
  texto,
  btnText,
}) {
  return (
    <section
      id="tratamientos-para-el-hogar"
      className="w-full py-5 sm:py-10 sm:px-20 px-10 2xl:px-60 mb-20 flex justify-center items-center "
    >
      <div className="w-full flex justify-center items-center gap-[50px] md:gap-[10px] tratamientosHogar-container flex-col md:flex-row">
        <div className="md:w-[50%] flex justify-center items-center w-full">
          <div className="flex flex-col w-full justify-start items-center w-full">
            <h3
              className={`${montserrat.className} w-full text-left mb-6 md:mb-2 text-[#7e8f9d] md:text-base text-[16px]`}
            >
              {subtitulo.toUpperCase()}
            </h3>
            <h2
              className={`title-industria-hogar w-full text-left mb-6 md:mb-2 text-3xl sm:text-4xl md:text-3xl ${montserrat.className}`}
            >
              {titulo}
            </h2>
            <p
              className={`w-full text-left text-[18px] text-[#555555] mb-8 ${montserrat.className}`}
            >
              {texto}
            </p>
            <div className="w-full flex justify-start items-center">
              <button
                className={`btn-principal home-productosDestacados-generalBtn w-[75%] h-[50px] lg:h-[40px] sm:w-[50%] md:w-[75%] lg:w-[45%] ${montserrat.className}`}
              >
                <Link className="h-full w-full" href="/#productos">
                  {btnText}
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] flex justify-center items-center w-full">
          <div>
            <img
              src="/images/tratamientosParaHogar/graficaTratamientosHogar.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
