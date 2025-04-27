import ProductPage from "@/components/ProductPage";
import React from "react";

const repuestosDeEsterilizadores = {
  imagen: "/images/DetalleDeProducto/repuestos-de-esterilizadores-uv.png",
  categoria: "Válvulas de control",
  subcategoria: "Repuestos de esterilizadores UV",
  titulo: "Repuestos de esterilizadores UV",
  descripcion: "",
  tableHeaders: ["Modelo", "Compatible con:"],
  tableData: [
    {
      id: 1,
      propiedades: ["Lámpara UV", "12W"],
    },
    {
      id: 2,
      propiedades: ["Cuarzo", "12W"],
    },
    {
      id: 3,
      propiedades: ["Balasto", "12W"],
    },
    {
      id: 4,
      propiedades: ["Lámpara UV", "40W"],
    },
    {
      id: 5,
      propiedades: ["Cuarzo", "40W"],
    },
    {
      id: 6,
      propiedades: ["Balasto", "40W"],
    },
  ],
};

export default function RepuestosDeEstirilizadoresUvPage() {
  return (
    <ProductPage
      titulo={repuestosDeEsterilizadores.titulo}
      imagen={repuestosDeEsterilizadores.imagen}
      tableHeaders={repuestosDeEsterilizadores.tableHeaders}
      tableData={repuestosDeEsterilizadores.tableData}
      descripcion={repuestosDeEsterilizadores.descripcion}
    ></ProductPage>
  );
}
