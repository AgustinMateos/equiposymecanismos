import ProductPage from "@/components/ProductPage";
import React from "react";

const repuestosBombaDosificadora = {
  imagen:
    "/images/DetalleDeProducto/repuestos-bomba-dosificadora-imagen-producto.png",
  categoria: "Dosificación",
  audio: "",
  subcategoria: "Repuestos para bomba dosificadora",
  titulo: "Repuestos para bomba dosificadora",
  descripcion: "",
  tableHeaders: ["Modelo", "Compatible con:"],
  tableData: [
    {
      id: 1,
      propiedades: ["Diafragma", "V-02008/12003"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20bomba%20dosificadora%20Diafragma,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["Válvula de pie", "V-02008/12003"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20bomba%20dosificadora%20Válvula%20de%20pie,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["Plaqueta", "V-02008/12003"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20bomba%20dosificadora%20Plaqueta,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ["Punto de inyección", "V-02008/12003"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20bomba%20dosificadora%20Punto%20de%20inyección,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: ["Cabezal", "V-02008/12003"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20bomba%20dosificadora%20Cabezal,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function RepuestosBombaDosificadoraPage() {
  return (
    <ProductPage
      audio={repuestosBombaDosificadora.audio}
      titulo={repuestosBombaDosificadora.titulo}
      imagen={repuestosBombaDosificadora.imagen}
      tableHeaders={repuestosBombaDosificadora.tableHeaders}
      tableData={repuestosBombaDosificadora.tableData}
      descripcion={repuestosBombaDosificadora.descripcion}
    ></ProductPage>
  );
}
