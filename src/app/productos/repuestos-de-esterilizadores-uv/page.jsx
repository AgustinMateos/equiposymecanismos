import ProductPage from "@/components/ProductPage";
import React from "react";

const repuestosDeEsterilizadores = {
  imagen: "/images/DetalleDeProducto/repuestos-de-esterilizadores-uv.png",
  categoria: "Válvulas de control",
  audio: "",
  subcategoria: "Repuestos de esterilizadores UV",
  titulo: "Repuestos de esterilizadores UV",
  descripcion: "",
  tableHeaders: ["Modelo", "Compatible con:"],
  tableData: [
    {
      id: 1,
      propiedades: ["Lámpara UV", "12W"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20esterilizador%20UV-Lámpara%20UV,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["Cuarzo", "12W"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20esterilizador%20UV-Cuarzo,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["Balasto", "12W"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20esterilizador%20UV-Balasto,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ["Lámpara UV", "40W"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20esterilizador%20UV-Lámpara%20UV%2040W,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: ["Cuarzo", "40W"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20esterilizador%20UV-Cuarzo%2040W,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: ["Balasto", "40W"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20esterilizador%20UV-Balasto%2040W,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function RepuestosDeEstirilizadoresUvPage() {
  return (
    <ProductPage
      audio={repuestosDeEsterilizadores.audio}
      titulo={repuestosDeEsterilizadores.titulo}
      imagen={repuestosDeEsterilizadores.imagen}
      tableHeaders={repuestosDeEsterilizadores.tableHeaders}
      tableData={repuestosDeEsterilizadores.tableData}
      descripcion={repuestosDeEsterilizadores.descripcion}
    ></ProductPage>
  );
}
