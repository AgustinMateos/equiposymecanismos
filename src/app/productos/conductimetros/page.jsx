import ProductPage from "@/components/ProductPage";
import React from "react";

const ablandadoresAutomaticosDeAgua = {
  imagen: "/images/DetalleDeProducto/-imagen-producto.png",
  categoria: "Válvulas de control",
  audio: "/audios/audio-automatizacion (2).mp4",
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
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20control%20Runxin%20F63C1,%20cuál%20es%20el%20precio?%20Gracias.",
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
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20control%20Runxin%20F63C3,%20cuál%20es%20el%20precio?%20Gracias.",
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
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20control%20Runxin%20F63C1,%20cuál%20es%20el%20precio?%20Gracias.",
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
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20control%20Runxin%20F63C3,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function ConductimetrosPage() {
  return (
    <ProductPage
      audio={ablandadoresAutomaticosDeAgua.audio}
      titulo={ablandadoresAutomaticosDeAgua.titulo}
      imagen={ablandadoresAutomaticosDeAgua.imagen}
      tableHeaders={ablandadoresAutomaticosDeAgua.tableHeaders}
      tableData={ablandadoresAutomaticosDeAgua.tableData}
      descripcion={ablandadoresAutomaticosDeAgua.descripcion}
    ></ProductPage>
  );
}
