import ProductPage from "@/components/ProductPage";
import React from "react";

const conectoresRapidos = {
  imagen: "/images/DetalleDeProducto/-imagen-producto.png",
  categoria: "Mangueras y conectores",
  subcategoria: "Conectores rápidos",
  titulo: "Conectores rápidos",
  descripcion: "",
  tableHeaders: ["Nombre", "Tipo de rosca", "Tipo de conexión"],
  tableData: [
    {
      id: 1,
      propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    },
    {
      id: 2,
      propiedades: ["Conector rápido 'T'", "Tubo 3/8", " derivación 3/8"],
    },
    {
      id: 3,
      propiedades: ["Conector rápido 'T'", "Tubo 1/2", " derivación 1/2"],
    },
    {
      id: 4,
      propiedades: ["Conector rápido codo", "Tubo 1/4", " derivación 1/4"],
    },
    {
      id: 5,
      propiedades: ["Conector rápido codo", "Tubo 3/8", " derivación 3/8"],
    },
    {
      id: 6,
      propiedades: ["Conector rápido codo", "Tubo 1/2", " derivación 1/2"],
    },
    {
      id: 7,
      propiedades: [
        "Conector rápido codo-rosca macho",
        "Rosca macho 1/4",
        "Tubo 1/4",
      ],
    },
    {
      id: 8,
      propiedades: [
        "Conector rápido codo-rosca macho",
        "Rosca macho 1/2",
        " Rosca  1/4",
      ],
    },
    {
      id: 9,
      propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    },
    {
      id: 1,
      propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    },
    {
      id: 1,
      propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    },
    {
      id: 1,
      propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    },
    {
      id: 1,
      propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    },
    {
      id: 1,
      propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    },
    {
      id: 1,
      propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    },
    {
      id: 1,
      propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    },
    {
      id: 1,
      propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    },
    {
      id: 1,
      propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    },
  ],
};

export default function ConectoresRapidosPage() {
  return (
    <ProductPage
      titulo={conectoresRapidos.titulo}
      imagen={conectoresRapidos.imagen}
      tableHeaders={conectoresRapidos.tableHeaders}
      tableData={conectoresRapidos.tableData}
      descripcion={conectoresRapidos.descripcion}
    ></ProductPage>
  );
}
