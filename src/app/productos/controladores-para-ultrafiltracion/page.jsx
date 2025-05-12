import ProductPage from "@/components/ProductPage";
import React from "react";

const ablandadoresAutomaticosDeAgua = {
  imagen:
    "/images/DetalleDeProducto/controlador-para-ultrafiltracion-imagen-producto.png",
  categoria: "",
  audio: "",
  subcategoria: "Controladores para ultrafiltración",
  titulo: "Controladores para ultrafiltración",
  descripcion:
    "Optimizá el rendimiento de tu sistema de ultrafiltración con nuestros controladores automáticos. Diseñados para manejar ciclos de filtrado, retrolavado y enjuague, garantizan un funcionamiento estable y sin intervención manual. Una solución confiable para asegurar agua filtrada de calidad constante, cuidando tanto tu instalación como tu tiempo.",
  tableHeaders: ["Modelo", "Tipo de refrigeración", "Entrada/Salida"],
  tableData: [
    {
      id: 1,
      propiedades: ["UF-PLC", "220V", "Relé"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Controlador%20y%20para%20ultrafiltración,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function ControladoresParaUltrafiltracionPage() {
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
