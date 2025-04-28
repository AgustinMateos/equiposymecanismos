import ProductPage from "@/components/ProductPage";
import React from "react";

const bombasDosificadorasAutomaticas = {
  imagen: "/images/DetalleDeProducto/boya-antisarro.png",
  categoria: "Dosificación",
  subcategoria: "Boya anti-sarro",
  audio: "",
  titulo: "Boya anti-sarro",
  descripcion:
    "Nuestra Boya Antisarro es la solución ideal para proteger tus artefactos de cocina, baño y lavandería de los daños causados por el sarro y el óxido. Gracias a su tecnología alemana Siliphos®, convierte el agua de red o de pozo en un agua anti-incrustante, evitando manchas, corrosión y prolongando la vida útil de tus equipos. Con una autonomía de hasta 30.000 litros de agua tratada es ideal para termotanques, lavavajillas, calefones, hidrolavadoras, cafeteras y mucho más.",
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
      audio={bombasDosificadorasAutomaticas.audio}
      titulo={bombasDosificadorasAutomaticas.titulo}
      imagen={bombasDosificadorasAutomaticas.imagen}
      tableHeaders={bombasDosificadorasAutomaticas.tableHeaders}
      tableData={bombasDosificadorasAutomaticas.tableData}
      descripcion={bombasDosificadorasAutomaticas.descripcion}
    ></ProductPage>
  );
}
