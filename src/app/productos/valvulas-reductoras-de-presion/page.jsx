import ProductPage from "@/components/ProductPage";
import React from "react";

const ablandadoresAutomaticosDeAgua = {
  imagen:
    "/images/DetalleDeProducto/valvulas-reductoras-de-presion-producto-imagen.png",
  categoria: "Válvulas de control",
  audio: "",
  subcategoria: "Válvulas reductoras de presión(inox.)",
  titulo: "Válvulas reductoras de presión(inox.)",
  descripcion:
    "La válvula reductora de presión es un dispositivo que reduce y estabiliza la presión de un fluido en una instalación en base al valor preestablecido. El uso de este dispositivo hidráulico es necesario cuando la presión del fluido en la instalación puede superar la presión máxima admisible de alguno de los otros dispositivos que forman parte de la instalación (por ejemplo, un ablandador de agua a la salida de una bomba sumergible). La estructura del pistón interno garantiza rigidez, resistencia y elevada precisión de regulación, gracias a la compensación del asiento. La junta tórica de estanqueidad asegura un bajo coeficiente de fricción estática, garantizando la resistencia al desgaste y reduciendo así su mantenimiento.",
  tableHeaders: [
    "Modelo",
    "Rango de caudal operativo",
    "Rango de presión operativo",
    "Presión máx.",
    "Rosca",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["PRV34", "3 a 8 m3/h", "1 a 5bar", "20bar", '3/4"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:PRV34%20de%203/4%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["PRV1", "4 a 10 m3/h", "1 a 5bar", "20bar", '1"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:PRV1%20de%201%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function ValvulasReductorasDePresionPage() {
  return (
    <ProductPage
      audio={ablandadoresAutomaticosDeAgua.audio}
      titulo={ablandadoresAutomaticosDeAgua.titulo}
      imagen={ablandadoresAutomaticosDeAgua.imagen}
      tableHeaders={ablandadoresAutomaticosDeAgua.tableHeaders}
      tableData={ablandadoresAutomaticosDeAgua.tableData}
      descripcion={ablandadoresAutomaticosDeAgua.descripcion}
    >
      <div className="w-full flex justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-[20px] px-10 md:px-40">
          <div className="w-full flex flex-col justify-start items-start mb-[20px]">
            <h3 className="font-bold text-2xl mb-2">Características</h3>
            <ul>
              <li className="list-disc">
                Presión máx. de trabajo 20 bar (PN-20).
              </li>
              <li className="list-disc">Cuerpo de inox. 304.</li>
              <li className="list-disc">
                Campo de regulación: 1 a 5 bar (1/2" a 2").
              </li>
              <li className="list-disc">
                Presión de salida establecida a 3 bar.
              </li>
              <li className="list-disc">
                Temperatura de trabajo desde 0ºC a 130ºC.
              </li>
              <li className="list-disc">
                Compatible con agua y solución de glicol al 50%.
              </li>
              <li className="list-disc">
                Extremos roscados gas (BSP) H-H s/ ISO 228/1.
              </li>
              <li className="list-disc">
                Conexión a manómetro Rp¼” s/ EN 10226 (ISO 7/1). (manómetro no
                incluido)
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <h3 className="font-bold text-2xl mb-2">Aplicaciones</h3>
            Instalaciones de acondicionamiento.
            <ul>
              <li className="list-disc">Sistemas sanitarios.</li>
              <li className="list-disc">Sistemas de irrigación.</li>
              <li className="list-disc">Distribución de aire comprimido.</li>
              <li className="list-disc">Instalaciones antiincendios.</li>
              <li className="list-disc">Distribución de agua en edificios.</li>
            </ul>
          </div>
        </div>
      </div>
    </ProductPage>
  );
}
