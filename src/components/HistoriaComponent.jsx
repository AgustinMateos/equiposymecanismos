import React from "react";

export default function HistoriaComponent({ items }) {
  return (
    <section
      id="mision"
      className="bg-[#60AFFF] flex flex-col justfiy-center items-center px-10 sm:px-20 2xl:px-60 py-20 2xl:py-30 text-[white]"
    >
      <h3 className="w-full text-center mb-10 text-3xl">¿Por qué elegirnos?</h3>
      <div className="w-full flex flex-col md:flex-row justify-center items-center sm:ap-[50px] gap-[25px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            <img className="w-[50px] h-[50px] mb-5" src={item.icon} alt="" />
            <h4 className="w-full text-center text-[18px] font-bold mb-5">
              {item.title}
            </h4>
            <p className="md:w-full sm:w-[60%] w-[85%] text-center text-[14px] text-black">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
