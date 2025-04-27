import ProductPage from "@/components/ProductPage";
import React from "react";

const mangueras = {
  imagen: "/images/DetalleDeProducto/mangueras-imagen-producto.png",
  categoria: "Conectores y mangueras",
  subcategoria: "Mangueras",
  titulo: "Mangueras",
  descripcion: "Mangueras",
  tableHeaders: ["Modelo", "Sección", "Presión máxima"],
  tableData: [
    {
      id: 1,
      propiedades: ["MAN1/4", '1/4"', "15 BAR"],
    },
    {
      id: 2,
      propiedades: ["MAN3/8", '3/8"', "15 BAR"],
    },
    {
      id: 3,
      propiedades: ["MAN1/2", '1/2"', "15 BAR"],
    },
    {
      id: 4,
      propiedades: ["RMAN1/4", '1/4"', "15 BAR"],
    },
    {
      id: 5,
      propiedades: ["rMAN9/8", '3/8"', "15 BAR"],
    },
    {
      id: 6,
      propiedades: ["RMAN1/2", '1/2"', "15 BAR"],
    },
  ],
};

export default function ManguerasPage() {
  return (
    <ProductPage
      titulo={mangueras.titulo}
      imagen={mangueras.imagen}
      tableHeaders={mangueras.tableHeaders}
      tableData={mangueras.tableData}
      descripcion={mangueras.descripcion}
    ></ProductPage>
  );
}
