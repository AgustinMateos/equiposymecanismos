import ProductPage from "@/components/ProductPage";
import React from "react";

const cartuchosRecargables = {
  imagen: "/images/DetalleDeProducto/cartuchos-recargables-imagen-producto.png",
  categoria: "Filtración",
  subcategoria: "Cartuchos Recargables",
  titulo: "Cartuchos recargables",
  descripcion: "",
  tableHeaders: ["Modelo", "Medida"],
  tableData: [
    {
      id: 1,
      propiedades: ["CV1025", "10x2,5"],
    },
    {
      id: 2,
      propiedades: ["CV2025", "20x2,5"],
    },
  ],
};

export default function CartuchosRecargablesPage() {
  return (
    <ProductPage
      titulo={cartuchosRecargables.titulo}
      imagen={cartuchosRecargables.imagen}
      tableHeaders={cartuchosRecargables.tableHeaders}
      tableData={cartuchosRecargables.tableData}
      descripcion={cartuchosRecargables.descripcion}
    ></ProductPage>
  );
}
