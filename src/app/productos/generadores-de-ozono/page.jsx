import ProductPage from "@/components/ProductPage";
import React from "react";

const generadoresDeOzono = {
  imagen: "/images/DetalleDeProducto/generador-de-ozono.png",
  categoria: "Desinfección",
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
    },
    {
      id: 2,
      propiedades: ["OZA-30G", "30 g/h", "60-80 mg/l", "En tanque/En línea"],
    },
  ],
};

export default function GeneradoresDeOzonoPage() {
  return (
    <ProductPage
      titulo={generadoresDeOzono.titulo}
      imagen={generadoresDeOzono.imagen}
      tableHeaders={generadoresDeOzono.tableHeaders}
      tableData={generadoresDeOzono.tableData}
      descripcion={generadoresDeOzono.descripcion}
    ></ProductPage>
  );
}
