import ProductPage from "@/components/ProductPage";
import React from "react";

const toberas = {
  imagen: "/images/DetalleDeProducto/toberas-producto-imagen.png",
  categoria: "Válvulas de control",
  subcategoria: "Toberas",
  audio: "",
  titulo: "Toberas",
  descripcion:
    "Una tobera es un componente utilizado en sistemas de filtración que actúa como difusor o colector de agua dentro del filtro. Su función principal es permitir el paso del agua sin dejar que se escape el medio filtrante (como arena, resina, carbón activado, etc.).",
  tableHeaders: [
    "Modelo",
    "Tipo de refrigeración",
    "Entrada/Salida",
    "Medida de tanque",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["F116/F63", "Superior", "Recto", '8" a 16"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tobera%20F116/F63%20Superior%20Recto,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["F116/F63", "Inferior", "Recto", '8" a 16"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tobera%20F116/F63%20Inferior%20Recto,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["N74", "Superior", "Recto", '18" a 24"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tobera%20N74%20Superior%20Recto,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ["N74", "Inferior", "Recto", '18" a 24"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tobera%20N74%20Inferior%20Recto,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: ["F111", "Superior", "Recto", '18" a 36"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tobera%20F111%20Superior%20Recto,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: ["F111", "Inferior", "Recto", '18" a 21"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tobera%20F111%20Inferior%20Recto,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 7,
      propiedades: ["F111", "Inferior", "Estrella", '24" a 30"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tobera%20F111%20Inferior%20Estrella%2024%20a%2030,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 8,
      propiedades: ["F111", "Inferior", "Estrella", '36"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tobera%20F111%20Inferior%20Estrella%2036,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 9,
      propiedades: ["F112", "Superior", "Recto", '48"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tobera%20F112%20Superior%20Recto%2048,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 10,
      propiedades: ["F112", "Inferior", "Estrella", '48"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tobera%20F112%20Inferior%20Estrella%2048,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function ToberasPage() {
  return (
    <ProductPage
      audio={toberas.audio}
      titulo={toberas.titulo}
      imagen={toberas.imagen}
      tableHeaders={toberas.tableHeaders}
      tableData={toberas.tableData}
      descripcion={toberas.descripcion}
    ></ProductPage>
  );
}
