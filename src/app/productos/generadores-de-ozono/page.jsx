import ProductPage from "@/components/ProductPage";
import React from "react";

const generadoresDeOzono = {
  imagen: "/images/DetalleDeProducto/generador-de-ozono.png",
  categoria: "Desinfección",
  audio: "/audios/audio-equipos-ozonizadores.mp4",
  subcategoria: "Generadores de Ozono(03)",
  titulo: "Generadores de Ozono(O3)",
  descripcion:
    "El ozono es un potente agente oxidante y desinfectante utilizado en el tratamiento del agua. Es altamente efectivo contra bacterias, virus, protozoos y otros microorganismos, incluso aquellos resistentes al cloro. Además de la desinfección, el ozono oxida eficazmente compuestos orgánicos, mejorando el sabor,olor y color del agua.",
  tableHeaders: [
    "Modelo",
    "Producción de Ozono",
    "Coecntración de Ozono",
    "Ozonización",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["OZA-10G", "10 g/h", "15-20 mg/l", "En tanque"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Generador%20de%20Ozono%20OZA-10G%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["OZA-30G", "30 g/h", "60-80 mg/l", "En tanque/En línea"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Generador%20de%20Ozono%20OZA-30G%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function GeneradoresDeOzonoPage() {
  return (
    <ProductPage
      audio={generadoresDeOzono.audio}
      titulo={generadoresDeOzono.titulo}
      imagen={generadoresDeOzono.imagen}
      tableHeaders={generadoresDeOzono.tableHeaders}
      tableData={generadoresDeOzono.tableData}
      descripcion={generadoresDeOzono.descripcion}
    ></ProductPage>
  );
}
