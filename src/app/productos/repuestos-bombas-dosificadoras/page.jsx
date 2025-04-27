import ProductPage from "@/components/ProductPage";
import React from "react";

const repuestosBombaDosificadora = {
  imagen:
    "/images/DetalleDeProducto/repuestos-bomba-dosificadora-imagen-producto.png",
  categoria: "Dosificación",
  subcategoria: "Repuestos para bomba dosificadora",
  titulo: "Repuestos para bomba dosificadora",
  descripcion: "",
  tableHeaders: ["Modelo", "Compatible con:"],
  tableData: [
    {
      id: 1,
      propiedades: ["Diafragma", "V-02008/12003"],
    },
    {
      id: 2,
      propiedades: ["Válvula de pie", "V-02008/12003"],
    },
    {
      id: 3,
      propiedades: ["Plaqueta", "V-02008/12003"],
    },
    {
      id: 4,
      propiedades: ["Punto de inyección", "V-02008/12003"],
    },
    {
      id: 5,
      propiedades: ["Cabezal", "V-02008/12003"],
    },
  ],
};

export default function RepuestosBombaDosificadoraPage() {
  return (
    <ProductPage
      titulo={repuestosBombaDosificadora.titulo}
      imagen={repuestosBombaDosificadora.imagen}
      tableHeaders={repuestosBombaDosificadora.tableHeaders}
      tableData={repuestosBombaDosificadora.tableData}
      descripcion={repuestosBombaDosificadora.descripcion}
    ></ProductPage>
  );
}
