import montserrat from "@/app/fonts/fonts";
import Link from "next/link";
import React from "react";

export default function TratamientosIndustria({
  titulo,
  subtitulo,
  texto,
  btnText,
}) {
  return (
    <section
      id="tratamientos-para-la-industria"
      className="w-full py-10 px-10 md:px-20 2xl:px-60 flex justify-center items-center "
    >
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[50px]">
        <div className="md:w-[50%] w-full flex justify-center items-center">
          <div className="w-full">
            <img
              src="/images/tratamientosParaHogar/graficaTratamientosIndustria.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="md:w-[50%] w-full flex justify-center items-center">
          <div className="flex flex-col w-full justify-start items-center">
            <h3
              className={`w-full text-left mb-2 text-[#7e8f9d] md:text-base text-[14px] ${montserrat.className}`}
            >
              {subtitulo.toUpperCase()}
            </h3>
            <h2
              className={`w-full text-left mb-2 text-3xl sm:text-4xl md:text-3xl ${montserrat.className}`}
            >
              {titulo}
            </h2>
            <p
              className={`w-full text-left mb-2 text-[#555555] mb-5 ${montserrat.className}`}
            >
              {texto}
            </p>
            <div className="w-full flex justify-start items-center">
              <button
                className={`btn-principal w-full md:w-[50%] ${montserrat.className}`}
              >
                <Link className="w-full h-full" href="/#productos">
                  {btnText}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
