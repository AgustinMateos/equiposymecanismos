import ProductPage from "@/components/ProductPage";
import React from "react";

const electrovalvulasDeAceroInoxidable = {
  imagen:
    "/images/DetalleDeProducto/electrovalvula-de-acero-inoxidable-imagen-producto.png",
  categoria: "Instrumentación y control",
  audio: "/audios/audio-automatizacion.mp4",
  subcategoria: "Electroválvulas de acero inoxidable",
  titulo: "Electroválvulas de acero inoxidable",
  descripcion:
    "Nuestra electroválvula de acero inoxidable, tipo normalmente cerrada (NC), está diseñada para ofrecer un control confiable del flujo en sistemas de ablandamiento, filtración y purificación de agua. Fabricada en materiales de alta resistencia, soporta condiciones exigentes y garantiza un cierre hermético cuando no recibe corriente, protegiendo tus equipos y asegurando un manejo eficiente del agua.",
  tableHeaders: [
    "Modelo",
    "Sección",
    "Q Máx.",
    "Mín. presión de trabajo",
    "Máx. presión de trabajo",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["DN15", '1/2"', "2,1 m3/h", "0,3BAR", "16BAR"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Electroválvula%20de%20Acero%20Inoxidable%20DN15,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["DN20", '3/4"', "5,7 m3/h", "0,3BAR", "16BAR"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Electroválvula%20de%20Acero%20Inoxidable%20DN20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["DN25", '1"', "9,6 m3/h", "0,3BAR", "16BAR"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Electroválvula%20de%20Acero%20Inoxidable%20DN25,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ["DN32", '11/4"', "22 m3/h", "0,3BAR", "16BAR"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Electroválvula%20de%20Acero%20Inoxidable%20DN32,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: ["DN40", '11/2"', "27 m3/h", "0,3BAR", "16BAR"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Electroválvula%20de%20Acero%20Inoxidable%20DN40,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: ["DN50", '2"', "35 m3/h", "0,3BAR", "16BAR"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Electroválvula%20de%20Acero%20Inoxidable%20DN50,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function ElectrovalvulasDeAceroInoxidablePage() {
  return (
    <ProductPage
      audio={electrovalvulasDeAceroInoxidable.audio}
      titulo={electrovalvulasDeAceroInoxidable.titulo}
      imagen={electrovalvulasDeAceroInoxidable.imagen}
      tableHeaders={electrovalvulasDeAceroInoxidable.tableHeaders}
      tableData={electrovalvulasDeAceroInoxidable.tableData}
      descripcion={electrovalvulasDeAceroInoxidable.descripcion}
    ></ProductPage>
  );
}
