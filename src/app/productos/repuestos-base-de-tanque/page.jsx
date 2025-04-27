import ProductPage from "@/components/ProductPage";
import React from "react";

const repuestosBaseDeTanque = {
  imagen:
    "/images/DetalleDeProducto/repuestos-base-de-tanque-producto-imagen.png",
  categoria: "Tanques",
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
    },
    {
      id: 2,
      propiedades: ["BASE10", '10"x54"'],
    },
    {
      id: 3,
      propiedades: ["BASE12", '12"x52"'],
    },
    {
      id: 4,
      propiedades: ["BASE14", '14"x65"'],
    },
    {
      id: 5,
      propiedades: ["BASE16", '16"x65"'],
    },
    {
      id: 6,
      propiedades: ["BASE18", '18"x65"'],
    },
    {
      id: 7,
      propiedades: ["BASE21", '21"x62"'],
    },
    {
      id: 8,
      propiedades: ["BASE24", '24"x72"'],
    },
    {
      id: 9,
      propiedades: ["BASE30", '30"x72"'],
    },
    {
      id: 10,
      propiedades: ["BASE36", '36"x72"'],
    },
  ],
};

export default function RepuestosBaseDeTanquePage() {
  return (
    <ProductPage
      titulo={repuestosBaseDeTanque.titulo}
      imagen={repuestosBaseDeTanque.imagen}
      tableHeaders={repuestosBaseDeTanque.tableHeaders}
      tableData={repuestosBaseDeTanque.tableData}
      descripcion={repuestosBaseDeTanque.descripcion}
    ></ProductPage>
  );
}
