import montserrat from "@/app/fonts/fonts";
import Link from "next/link";
import React from "react";

export default function SobreNosotros({ titulo, texto }) {
  return (
    <section
      id="sobre-nosotros"
      className="w-full flex justify-center items-center px-10 md:px-20 2xl:px-60 xl:px-40 py-20 2xl:py-60 lg:py-40"
    >
      <div className="w-full flex justify-center items-center gap-[50px] flex-col-reverse md:flex-row">
        <div className="md:w-[55%] w-full flex flex-col justify-center items-center text-[#555555]">
          <p
            className={`${montserrat.className} mb-[30px] md:mb-[20px] text-end md:text-start`}
          >
            {texto}
          </p>
          <div className="w-full flex flex-col lg:flex-row gap-[20px] md:gap-[10px] justify-center lg:justify-start items-center md:items-start lg:items-center">
            <button className="btn-principal home-productosDestacados-generalBtn w-[75%] lg:[w-48%]">
              <Link
                className="flex justify-center items-center w-full h-full"
                href="/#tratamientos-para-el-hogar"
              >
                Soluciones para el hogar
              </Link>
            </button>
            <button className="btn-terciario home-productosDestacados-generalBtn w-[75%] lg:[w-48%]">
              <Link
                className="w-full h-full flex justify-center items-center"
                href="/#tratamientos-para-la-industria"
              >
                Soluciones para la industria
              </Link>
            </button>
          </div>
        </div>
        <div className="md:w-[45%] w-full flex justify-center sm:justify-end items-center text-3xl md:text-4xl">
          <h3 className={`${montserrat.className}`}>{titulo}</h3>
        </div>
      </div>
    </section>
  );
}
