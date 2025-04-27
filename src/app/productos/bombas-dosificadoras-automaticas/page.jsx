import ProductPage from "@/components/ProductPage";
import React from "react";

const bombasDosificadorasAutomaticas = {
  imagen:
    "/images/DetalleDeProducto/bomba-dosificadora-automatica-imagen-producto.png",
  categoria: "Dosificación",
  subcategoria: "Bombas dosificadoras automácticas",
  titulo: "Bombas dosificadoras automácticas",
  descripcion:
    "Dosificá productos como cloro, ácido o polifosfatos de forma precisa y constante. Esta bomba automática ajusta la cantidad a inyectar según el caudal o los parámetros del agua, sin necesidad de intervención manual. Ideal para sistemas de potabilización, ablandamiento o mantenimiento de agua en hogares, industrias o piscinas.",
  tableHeaders: ["Modelo", "Caudal l/h", "Presión (bar)", "Golpes/Min."],
  tableData: [
    {
      id: 1,
      propiedades: ["V02008", "2.16", "8.2", "120"],
    },
    {
      id: 2,
      propiedades: ["V12003", "12.48", "2.8", "180"],
    },
    {
      id: 3,
      propiedades: ["C09009", "9.0", "3.5", "160"],
    },
    {
      id: 4,
      propiedades: ["C20003", "8.5", "3.5", "160"],
    },
  ],
};

export default function BombasDosificadorasAutomaticasPage() {
  return (
    <ProductPage
      titulo={bombasDosificadorasAutomaticas.titulo}
      imagen={bombasDosificadorasAutomaticas.imagen}
      tableHeaders={bombasDosificadorasAutomaticas.tableHeaders}
      tableData={bombasDosificadorasAutomaticas.tableData}
      descripcion={bombasDosificadorasAutomaticas.descripcion}
    ></ProductPage>
  );
}
