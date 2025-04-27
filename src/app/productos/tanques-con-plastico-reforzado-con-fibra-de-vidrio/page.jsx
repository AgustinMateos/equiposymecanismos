import ProductPage from "@/components/ProductPage";
import React from "react";

const tanquesDePlasticoReforzado = {
  imagen:
    "/images/DetalleDeProducto/tanques-de-plastico-reforzado-con-fibra-de-vidrio-producto-imagen.jpeg",
  categoria: "Tanques",
  subcategoria: "Tanques con plástico reforzado con fibra de vidrio",
  titulo: "Tanques con plástico reforzado con fibra de vidrio",
  descripcion:
    "Los tanques de PRFV (Poliéster Reforzado con Fibra de Vidrio) se utilizan principalmente en sistemas de tratamiento del agua, como ablandadores, filtros de carbón, filtros de arena, intercambio iónico y otros lechos. Se emplean junto con medios filtrantes y válvulas, ofreciendo una excelente relación costo-beneficio. Su conexión de apertura superior varía según el tamaño. Estos tanques están fabricados con materiales no susceptibles a la corrosión.",
  tableHeaders: [
    "Modelo/Medida diámetro x altura",
    "Rosca superior (NPSM)",
    "Rosca inferior (NPSM)",
    "Capacidad total",
    "Cant. de resina",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ['8"x44"', '2,5"', "-", "35lts", "25 lts."],
    },
    {
      id: 2,
      propiedades: ['10"x54"', '2,5"', "-", "63lts", "45 lts."],
    },
    {
      id: 3,
      propiedades: ['12"x52"', '2,5"', "-", "97lts", "75 lts."],
    },
    {
      id: 4,
      propiedades: ['8"x44"', '2,5"', "-", "35lts", "25 lts."],
    },
    {
      id: 5,
      propiedades: ['14"x65"', '2,5"', "-", "150lts", "100 lts."],
    },
    {
      id: 6,
      propiedades: ['16"x65', '2,5"', "-", "185lts", "125 lts."],
    },
    {
      id: 7,
      propiedades: ['18"x65"', '4"', "-", "235lts", "150 lts."],
    },
    {
      id: 8,
      propiedades: ['21"x62"', '4"', "-", "312lts", "200 lts."],
    },
    {
      id: 9,
      propiedades: ['24"x72"', '4"', '4"', "450lts", "300 lts."],
    },
    {
      id: 10,
      propiedades: ['30"x72"', '4"', '4"', "697 lts", "525 lts."],
    },
    {
      id: 11,
      propiedades: ['36"x72"', '4"', '4"', "999 lts", "750 lts."],
    },
    {
      id: 12,
      propiedades: ['48"x72"', "BRIDA", "BRIDA", "1.760 lts", "1.370 lts."],
    },
  ],
};

export default function TanquePRFVPage() {
  return (
    <ProductPage
      titulo={tanquesDePlasticoReforzado.titulo}
      imagen={tanquesDePlasticoReforzado.imagen}
      tableHeaders={tanquesDePlasticoReforzado.tableHeaders}
      tableData={tanquesDePlasticoReforzado.tableData}
      descripcion={tanquesDePlasticoReforzado.descripcion}
    ></ProductPage>
  );
}
