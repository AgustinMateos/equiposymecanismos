import ProductPage from "@/components/ProductPage";
import React from "react";

const ablandadoresAutomaticosDeAgua = {
  imagen: "/images/DetalleDeProducto/manometro-inferior-imagen-producto.png",
  categoria: "Válvulas de control",
  audio: "/audios/audio-automatizacion (2).mp4",
  subcategoria: "Manómetro inferior",
  titulo: "Manómetro inferior",
  descripcion:
    "Nuestro manómetro inferior es la herramienta ideal para medir la presión en equipos de ablandamiento, filtración y purificación de agua. Su conexión inferior facilita la instalación directa en tuberías, válvulas o bases de equipos, ofreciendo una lectura precisa que ayuda a detectar variaciones críticas en el sistema.",
  tableHeaders: [
    "Modelo",
    "Tipo de refrigeración",
    "Entrada/Salida",
    "Medida de tanque",
    "Cant. de resina",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["MI7B", "68mm", '1/4"', "0-70bar", "4°C a 50°C"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Manómetro%20Inferior%20MI7B,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["MI20B", "68mm", '1/4"', "0-20bar", "4°C a 50°C"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Manómetro%20Inferior%20MI20B,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function ManometroInferiorPage() {
  return (
    <ProductPage
      audio={ablandadoresAutomaticosDeAgua.audio}
      titulo={ablandadoresAutomaticosDeAgua.titulo}
      imagen={ablandadoresAutomaticosDeAgua.imagen}
      tableHeaders={ablandadoresAutomaticosDeAgua.tableHeaders}
      tableData={ablandadoresAutomaticosDeAgua.tableData}
      descripcion={ablandadoresAutomaticosDeAgua.descripcion}
    ></ProductPage>
  );
}
