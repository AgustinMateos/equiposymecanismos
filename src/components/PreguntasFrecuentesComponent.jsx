"use client";
import React from "react";

export default function PreguntasFrecuentesComponent({ faqs }) {
  const [selected, setSelected] = React.useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <section
      id="preguntas-frecuentes"
      className="w-full flex flex-col justify-center items-center py-20 px-20 pb-10"
    >
      <div className="w-[80%]">
        <div className="w-full flex justify-center items-center mb-10">
          <h3 className="w-full text-center text-4xl">Preguntas Frecuentes</h3>
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          {faqs.map((pregunta) => (
            <div key={pregunta.id} className="item w-full">
              <div className="title" onClick={() => toggle(pregunta.id)}>
                <h4 className="">{pregunta.pregunta}</h4>
                <span>
                  <strong>{selected == pregunta.id ? "-" : "+"}</strong>
                </span>
              </div>
              <div
                className={selected == pregunta.id ? "content show" : "content"}
              >
                <p>{pregunta.respuesta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
