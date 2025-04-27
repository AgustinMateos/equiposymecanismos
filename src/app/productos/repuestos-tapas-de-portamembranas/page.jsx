import ProductPage from "@/components/ProductPage";
import React from "react";

const repuestosTapasPortamembranas = {
  imagen:
    "/images/DetalleDeProducto/repuestos-tapas-de-portamembranas-producto-imagen.png",
  categoria: "Portamembranas",
  subcategoria: "Repuestos tapas de portamembranas",
  titulo: "Repuestos tapas de portamembranas",
  descripcion:
    "Los repuestos de tapas para portamembranas aseguran el correcto sellado y funcionamiento de los sistemas de filtrado por ósmosis inversa. Fabricadas con materiales resistentes y compatibles con estándares internacionales, estas tapas son ideales para mantener la presión interna, prevenir fugas y prolongar la vida útil del equipo. Su diseño permite una instalación simple y segura, y son compatibles con la mayoría de los modelos de portamembranas del mercado. Una solución confiable para el mantenimiento preventivo o correctivo de sistemas de purificación de agua.",
  tableHeaders: [
    "Código",
    "Presión",
    "Incluye trabas de seguridad y tornillos",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["CAP-PMINOX", "300 psi", "Si"],
    },
    {
      id: 2,
      propiedades: ["CAP-PM4PRFV300", "300 psi", "Si"],
    },
    {
      id: 3,
      propiedades: ["CAP-PM8PRFV300", "300 psi", "Si"],
    },
    {
      id: 4,
      propiedades: ["CAP-PM8PRFV450", "450 psi", "Si"],
    },
    {
      id: 5,
      propiedades: ["CAP-PM8PRFV600", "600 psi", "Si"],
    },
  ],
};

export default function RepuestosTapasDePortamembranasPage() {
  return (
    <ProductPage
      titulo={repuestosTapasPortamembranas.titulo}
      imagen={repuestosTapasPortamembranas.imagen}
      tableHeaders={repuestosTapasPortamembranas.tableHeaders}
      tableData={repuestosTapasPortamembranas.tableData}
      descripcion={repuestosTapasPortamembranas.descripcion}
    ></ProductPage>
  );
}
