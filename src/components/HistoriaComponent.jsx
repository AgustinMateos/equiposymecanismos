import React from "react";

export default function HistoriaComponent({ items }) {
  return (
    <section
      id="mision"
      className="bg-[#60AFFF] flex flex-col justfiy-center items-center px-20 py-10 text-[white]"
    >
      <h3 className="w-full text-center mb-5 text-3xl">Nuestra Misión</h3>
      <p className="w-full text-center mb-10">
        Verellen Hnos construye hogares únicos en toda la Argentina hace más de
        7 décadas, brindando una experiencia completa desde el diseño
        personalizado hasta una gestión llave en mano. Somos especialistas en
        hormigón premoldeado y casas Estilo ANVERS. Con nuestro equipo de
        arquitectos vamos a hacer realidad tu proyecto. Podes visitarnos en
        nuestro Showroom en Capilla del Señor.
      </p>
      <div className="w-full flex justify-center items-center gap-[50px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            {/* <img src={item.icon} alt="" /> */}
            <h4 className="w-full text-center">{item.title}</h4>
            <p className="w-full text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
