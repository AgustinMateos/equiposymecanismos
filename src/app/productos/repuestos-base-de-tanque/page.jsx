import ProductPage from "@/components/ProductPage";
import React from "react";

const repuestosBaseDeTanque = {
  imagen:
    "/images/DetalleDeProducto/repuestos-base-de-tanque-producto-imagen.png",
  categoria: "Tanques",
  audio: "",
  subcategoria: "Repuestos base de tanque",
  titulo: "Repuestos base de tanque",
  descripcion:
    "Asegurá el funcionamiento óptimo de tus sistemas de purificación con nuestros repuestos originales para base de tanque. Diseñados para un encastre perfecto y máxima resistencia, garantizan estabilidad y protección para el tanque de presión. Aptos para equipos domiciliarios e industriales.",
  tableHeaders: [
    "Base(pollera) para modelo de tanque",
    "Compatible con tanque",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["BASE8", '8"x44"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20base%20de%20tanque%20BASE8,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["BASE10", '10"x54"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20base%20de%20tanque%20BASE10,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["BASE12", '12"x52"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20base%20de%20tanque%20BASE12,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ["BASE14", '14"x65"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20base%20de%20tanque%20BASE14,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: ["BASE16", '16"x65"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20base%20de%20tanque%20BASE16,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: ["BASE18", '18"x65"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20base%20de%20tanque%20BASE18,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 7,
      propiedades: ["BASE21", '21"x62"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20base%20de%20tanque%20BASE21,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 8,
      propiedades: ["BASE24", '24"x72"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20base%20de%20tanque%20BASE24,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 9,
      propiedades: ["BASE30", '30"x72"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20base%20de%20tanque%20BASE30,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 10,
      propiedades: ["BASE36", '36"x72"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20base%20de%20tanque%20BASE36,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function RepuestosBaseDeTanquePage() {
  return (
    <ProductPage
      audio={repuestosBaseDeTanque.audio}
      titulo={repuestosBaseDeTanque.titulo}
      imagen={repuestosBaseDeTanque.imagen}
      tableHeaders={repuestosBaseDeTanque.tableHeaders}
      tableData={repuestosBaseDeTanque.tableData}
      descripcion={repuestosBaseDeTanque.descripcion}
    ></ProductPage>
  );
}
