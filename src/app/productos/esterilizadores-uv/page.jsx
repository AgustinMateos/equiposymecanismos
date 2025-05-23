import ProductPage from "@/components/ProductPage";
import React from "react";

const esterilizadoresUV = {
  imagen: "/images/DetalleDeProducto/esterilizadores-uv-imagen-producto.png",
  categoria: "Válvulas de control",
  audio: "",
  subcategoria: "Esterilizadores UV",
  titulo: "Esterilizadores UV",
  descripcion:
    "Los esterilizadores UV son dispositivos que utilizanluz ultravioleta para desinfectar el agua, eliminando microorganismos patógenos. Estos dispositivos emplean luz ultravioleta de onda corta (típicamente UV-C con una longitud de onda de 254 nm) para inactivar microorganismos en el agua. El agua fluye a través de una cámara de acero inoxidable que alberga una o más lámparas UV, rodeadas por una funda de cuarzo que permite la transmisión eficiente de la luz. La radiación UV daña el ADN de los microorganismos, impidiendo su reproducción.",
  tableHeaders: ["Modelo", "Caudal máximo", "In-Out", "Vida útil de lámpara"],
  tableData: [
    {
      id: 1,
      propiedades: ["UV-12W", "250 lts/h", "Rosca H 1/4", "8.000 HS continuas"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Esterilizador%20UV%20Modelo%20UV-12W,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: [
        "UV-40W",
        "2.500 lts/h",
        "Rosca M 3/4",
        "8.000 Hs continuas",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Esterilizador%20UV%20Modelo%20UV-40W,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function EsterilizadoresUvPage() {
  return (
    <ProductPage
      audio={esterilizadoresUV.audio}
      titulo={esterilizadoresUV.titulo}
      imagen={esterilizadoresUV.imagen}
      tableHeaders={esterilizadoresUV.tableHeaders}
      tableData={esterilizadoresUV.tableData}
      descripcion={esterilizadoresUV.descripcion}
    ></ProductPage>
  );
}
