import React from "react";

export default function SobreNosotros({ titulo, texto }) {
  return (
    <section
      id="sobre-nosotros"
      className="w-full flex justify-center items-center px-10 md:px-20 2xl:px-60 xl:px-40 py-20 2xl:py-60 lg:py-40"
    >
      <div className="w-full flex justify-center items-center gap-[50px] flex-col-reverse md:flex-row">
        <div className="md:w-[55%] w-full flex justify-center items-center text-[#555555]">
          {texto}
        </div>
        <div className="md:w-[45%] w-full flex justify-center sm:justify-end items-center text-3xl md:text-4xl">
          {titulo}
        </div>
      </div>
    </section>
  );
}
