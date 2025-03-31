import React from "react";

export default function ProblemasEnHogar({ items }) {
  return (
    <section
      id="mision"
      className="bg-[#60AFFF] flex flex-col justfiy-center items-center px-10 md:px-20 2xl:px-60 xl:px-40 md:px-10 py-24 text-[white]"
    >
      <h3 className="w-full text-center mb-5 2xl:mb-14 xl:mb-16 lg:mb-14 text-4xl text-black font-bold">
        Problemáticas comúnes
      </h3>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[50px] 2xl:gap-[20px] 2xl:w-[80%]">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center 2xl:w-[80%]"
          >
            {/* <img src={item.icon} alt="" /> */}
            <h4 className="w-full text-left text-[18px] font-bold mb-5">
              {item.title}
            </h4>
            <p className="w-full text-left text-[14px] mb-5 text-black">
              {item.text}
            </p>
            <ul className="w-full flex flex-col justify-start items-start gap-[10px]">
              {item.productosRelacionados.map((producto, i) => (
                <li className="list-disc" key={i}>
                  {producto}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
