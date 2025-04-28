import ProductPage from "@/components/ProductPage";
import React from "react";

const mangueras = {
  imagen: "/images/DetalleDeProducto/mangueras-imagen-producto.png",
  categoria: "Conectores y mangueras",
  subcategoria: "Mangueras",
  audio: "",
  titulo: "Mangueras",
  descripcion: "Mangueras",
  tableHeaders: ["Modelo", "Sección", "Presión máxima"],
  tableData: [
    {
      id: 1,
      propiedades: ["MAN1/4", '1/4"', "15 BAR"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Manguera%20MAN1/4,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["MAN3/8", '3/8"', "15 BAR"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Manguera%20MAN3/8,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["MAN1/2", '1/2"', "15 BAR"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Manguera%20MAN1/2,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ["RMAN1/4", '1/4"', "15 BAR"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Manguera%20RMAN1/4,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: ["rMAN9/8", '3/8"', "15 BAR"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Manguera%20rMAN9/8,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: ["RMAN1/2", '1/2"', "15 BAR"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Manguera%20RMAN1/2,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function ManguerasPage() {
  return (
    <ProductPage
      audio={mangueras.audio}
      titulo={mangueras.titulo}
      imagen={mangueras.imagen}
      tableHeaders={mangueras.tableHeaders}
      tableData={mangueras.tableData}
      descripcion={mangueras.descripcion}
    ></ProductPage>
  );
}
