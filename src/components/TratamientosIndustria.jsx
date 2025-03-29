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
      className="w-full py-10 px-20 flex justify-center items-center "
    >
      <div className="w-full flex justify-center items-center gap-[50px]">
        <div className="w-[50%] flex justify-center items-center">
          <div>
            <img
              src="/images/tratamientosParaHogar/graficaTratamientosIndustria.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="flex flex-col w-full justify-start items-center">
            <h3 className="w-full text-left mb-2 text-[#7e8f9d] text-base">
              {subtitulo.toUpperCase()}
            </h3>
            <h2 className="w-full text-left mb-2 text-4xl">{titulo}</h2>
            <p className="w-full text-left mb-2 text-[#555555] mb-5">{texto}</p>
            <div className="w-full flex justify-start items-center">
              <button className="btn-principal">
                <Link href="/">{btnText}</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
