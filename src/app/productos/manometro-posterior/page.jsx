import ProductPage from "@/components/ProductPage";
import React from "react";

const manometroPosterior = {
  imagen: "/images/DetalleDeProducto/manometro-posterior-imagen-producto.png",
  categoria: "Instrumentación y control",
  subcategoria: "Manómetro posterior",
  audio: "/audios/audio-automatizacion.mp4",
  titulo: "Manómetro posterior",
  descripcion:
    "Asegura el correcto funcionamiento de tus equipos de ablandamiento y purificación de agua con nuestro manómetro posterior. Diseñado para monitorear la presión de entrada y salida en filtros, ablandadores y sistemas de ósmosis inversa, este instrumento es clave para detectar obstrucciones, variaciones de presión y garantizar un tratamiento eficiente.",
  tableHeaders: [
    "Modelo",
    "Diámetro",
    "Rosca BSP",
    "Presión operativa",
    "Temperatura",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["MPB7", "68mm", '1/4"', "0-7bar", "4°C a 50°C"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Manómetro%20Posterior%20MPB7,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["MP20B", "68mm", '1/4"', "0-20bar", "4°C a 50°C"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Manómetro%20Posterior%20MP20B,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["MP60B", "68mm", '1/4"', "0-60bar", "4°C a 50°C"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Manómetro%20Posterior%20MP60B,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function ManometroPosteriorPage() {
  return (
    <ProductPage
      audio={manometroPosterior.audio}
      titulo={manometroPosterior.titulo}
      imagen={manometroPosterior.imagen}
      tableHeaders={manometroPosterior.tableHeaders}
      tableData={manometroPosterior.tableData}
      descripcion={manometroPosterior.descripcion}
    ></ProductPage>
  );
}
