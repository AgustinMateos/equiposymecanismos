import ProductPage from "@/components/ProductPage";
import React from "react";

const ablandadoresAutomaticosDeAgua = {
  imagen: "/images/DetalleDeProducto/-imagen-producto.png",
  categoria: "Válvulas de control",
  subcategoria: "",
  titulo: "",
  descripcion: "",
  tableHeaders: [
    "Modelo",
    "Tipo de refrigeración",
    "Entrada/Salida",
    "Medida de tanque",
    "Cant. de resina",
    "Tanque Salero",
  ],
  tableData: [
    {
      id: 1,
      propiedades: [
        "Runxin F63C1",
        "Tiempo",
        "1",
        "8x44”",
        "25 lts.",
        "50 lts",
      ],
    },
    {
      id: 2,
      propiedades: [
        "Runxin F63C3",
        "Volumen",
        "1",
        "8x44”",
        "25 lts.",
        "50 lts",
      ],
    },
    {
      id: 3,
      propiedades: [
        "Runxin F63C1",
        "Tiempo",
        "1",
        "10x54”",
        "50 lts.",
        "75 lts",
      ],
    },
    {
      id: 4,
      propiedades: [
        "Runxin F63C3",
        "Volumen",
        "1",
        "10x54”",
        "50 lts.",
        "75 lts",
      ],
    },
  ],
};

export default function ValvulasReductorasDePresionPage() {
  return (
    <ProductPage
      titulo={ablandadoresAutomaticosDeAgua.titulo}
      imagen={ablandadoresAutomaticosDeAgua.imagen}
      tableHeaders={ablandadoresAutomaticosDeAgua.tableHeaders}
      tableData={ablandadoresAutomaticosDeAgua.tableData}
      descripcion={ablandadoresAutomaticosDeAgua.descripcion}
    ></ProductPage>
  );
}
