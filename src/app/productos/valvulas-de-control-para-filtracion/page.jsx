import ProductPage from "@/components/ProductPage";
import React from "react";

const valuvlasDeControlParaFiltracion = {
  imagen:
    "/images/DetalleDeProducto/valvulas-de-control-para-filtracion-producto-imagen.png",
  categoria: "Válvulas de control",
  subcategoria: "Válvulas de control para filtración",
  titulo: "Válvulas de control para filtración",
  audio: "",
  descripcion:
    "Las válvulas de control en sistemas de filtración son componentes clave que permiten automatizar y optimizar el proceso de filtrado del agua. Su función principal es dirigir y controlar el flujo de agua a través del sistema en distintos momentos del ciclo de filtración.",
  tableHeaders: [
    "Modelo",
    "Rosca a tanque",
    "Entrada/Salida",
    "Diámetro de tanque",
    "Caudal máximo",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["Runxin F56A1", '2,5"', '1"', '8" a 16"', "4.000 lts/h"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20control%20para%20filtración%20Runxin%20F56A1,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["Runxin N56D1", '4"', '2"', '18" a 36"', "10.000 lts/h"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20control%20para%20filtración%20Runxin%20N56D1,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function ValvulaDeControlParaFiltracionPage() {
  return (
    <ProductPage
      audio={valuvlasDeControlParaFiltracion.audio}
      titulo={valuvlasDeControlParaFiltracion.titulo}
      imagen={valuvlasDeControlParaFiltracion.imagen}
      tableHeaders={valuvlasDeControlParaFiltracion.tableHeaders}
      tableData={valuvlasDeControlParaFiltracion.tableData}
      descripcion={valuvlasDeControlParaFiltracion.descripcion}
    ></ProductPage>
  );
}
