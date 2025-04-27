import ProductPage from "@/components/ProductPage";
import React from "react";

const toberas = {
  imagen: "/images/DetalleDeProducto/toberas-producto-imagen.png",
  categoria: "Válvulas de control",
  subcategoria: "Toberas",
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
    },
    {
      id: 2,
      propiedades: ["F116/F63", "Inferior", "Recto", '8" a 16"'],
    },
    {
      id: 3,
      propiedades: ["N74", "Superior", "Recto", '18" a 24"'],
    },
    {
      id: 4,
      propiedades: ["N74", "Inferior", "Recto", '18" a 24"'],
    },
    {
      id: 5,
      propiedades: ["F111", "Superior", "Recto", '18" a 36"'],
    },
    {
      id: 6,
      propiedades: ["F111", "Inferior", "Recto", '18" a 21"'],
    },
    {
      id: 7,
      propiedades: ["F111", "Inferior", "Estrella", '24" a 30"'],
    },
    {
      id: 8,
      propiedades: ["F111", "Inferior", "Estrella", '36"'],
    },
    {
      id: 9,
      propiedades: ["F112", "Superior", "Recto", '48"'],
    },
    {
      id: 10,
      propiedades: ["F112", "Inferior", "Estrella", '48"'],
    },
  ],
};

export default function ToberasPage() {
  return (
    <ProductPage
      titulo={toberas.titulo}
      imagen={toberas.imagen}
      tableHeaders={toberas.tableHeaders}
      tableData={toberas.tableData}
      descripcion={toberas.descripcion}
    ></ProductPage>
  );
}
