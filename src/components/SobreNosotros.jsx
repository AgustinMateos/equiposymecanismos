import React from "react";

export default function SobreNosotros({ titulo, texto }) {
  return (
    <section
      id="sobre-nosotros"
      className="w-full flex justify-center items-center px-20 py-10"
    >
      <div className="w-full flex justify-center items-center gap-[50px]">
        <div className="w-[50%] flex justify-center items-center text-[#555555]">
          {texto}
        </div>
        <div className="w-[50%] flex justify-end items-center text-4xl">
          {titulo}
        </div>
      </div>
    </section>
  );
}
