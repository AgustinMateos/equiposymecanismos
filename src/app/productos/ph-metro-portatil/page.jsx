import ProductPage from "@/components/ProductPage";
import React from "react";

const ablandadoresAutomaticosDeAgua = {
  imagen: "/images/DetalleDeProducto/-imagen-producto.png",
  categoria: "",
  audio: "",
  subcategoria: "pH-metro portátil",
  titulo: "pH-metro portátil",
  descripcion:
    "El pH-metro portátil es la herramienta ideal para controlar de forma rápida y precisa el nivel de acidez o alcalinidad del agua. Compacto, liviano y fácil de usar, es perfecto para aplicaciones domésticas, comerciales e industriales. Ideal para acuarios, piscinas, sistemas de filtrado o procesos de tratamiento de agua. Un pH equilibrado es clave para la salud de tus instalaciones y equipos.",
  tableHeaders: ["Modelo", "Medición"],
  tableData: [
    {
      id: 1,
      propiedades: ["PH-P", "pH"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:pH-metro%20portatil%20PH-P,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function PhMetroPortatilPage() {
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
