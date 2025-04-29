import ProductPage from "@/components/ProductPage";
import React from "react";

const tanquesDePlasticoReforzado = {
  imagen:
    "/images/DetalleDeProducto/tanques-de-plastico-reforzado-con-fibra-de-vidrio-producto-imagen.jpeg",
  categoria: "Tanques",
  audio: "/audios/audio-tanque-prfv-2.mp4",
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
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20con%20plástico%20reforzado%20con%20fibra%20de%20vidrio%208x44,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ['10"x54"', '2,5"', "-", "63lts", "45 lts."],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20con%20plástico%20reforzado%20con%20fibra%20de%20vidrio%2010x54,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ['12"x52"', '2,5"', "-", "97lts", "75 lts."],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20con%20plástico%20reforzado%20con%20fibra%20de%20vidrio%2012x52,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ['8"x44"', '2,5"', "-", "35lts", "25 lts."],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20con%20plástico%20reforzado%20con%20fibra%20de%20vidrio%208x44,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: ['14"x65"', '2,5"', "-", "150lts", "100 lts."],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20con%20plástico%20reforzado%20con%20fibra%20de%20vidrio%2014x65,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: ['16"x65', '2,5"', "-", "185lts", "125 lts."],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20con%20plástico%20reforzado%20con%20fibra%20de%20vidrio%2016x65,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 7,
      propiedades: ['18"x65"', '4"', "-", "235lts", "150 lts."],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20con%20plástico%20reforzado%20con%20fibra%20de%20vidrio%2018x65,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 8,
      propiedades: ['21"x62"', '4"', "-", "312lts", "200 lts."],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20con%20plástico%20reforzado%20con%20fibra%20de%20vidrio%2021x62,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 9,
      propiedades: ['24"x72"', '4"', '4"', "450lts", "300 lts."],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20con%20plástico%20reforzado%20con%20fibra%20de%20vidrio%2024x72,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 10,
      propiedades: ['30"x72"', '4"', '4"', "697 lts", "525 lts."],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20con%20plástico%20reforzado%20con%20fibra%20de%20vidrio%2030x72,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 11,
      propiedades: ['36"x72"', '4"', '4"', "999 lts", "750 lts."],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20con%20plástico%20reforzado%20con%20fibra%20de%20vidrio%2036x72,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 12,
      propiedades: ['48"x72"', "BRIDA", "BRIDA", "1.760 lts", "1.370 lts."],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20con%20plástico%20reforzado%20con%20fibra%20de%20vidrio%2048x72,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function TanquePRFVPage() {
  return (
    <ProductPage
      audio={tanquesDePlasticoReforzado.audio}
      titulo={tanquesDePlasticoReforzado.titulo}
      imagen={tanquesDePlasticoReforzado.imagen}
      tableHeaders={tanquesDePlasticoReforzado.tableHeaders}
      tableData={tanquesDePlasticoReforzado.tableData}
      descripcion={tanquesDePlasticoReforzado.descripcion}
    ></ProductPage>
  );
}
