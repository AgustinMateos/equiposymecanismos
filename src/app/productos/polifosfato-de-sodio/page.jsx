import ProductPage from "@/components/ProductPage";
import React from "react";

const polifosfatoDeSodio = {
  imagen: "/images/Productos/polifosfato-de-sodio.jpeg",
  categoria: "Ablandadores de agua",
  audio: "",
  subcategoria: "Polifosfato de sodio",
  titulo: "Polifosfato de sodio",
  descripcion:
    "Las sales de polifosfato de sodio se utilizan en sistemas de tratamiento de agua para prevenir la formación de sarro y la corrosión en cañerías, electrodomésticos, calderas y termotanques. Al disolverse lentamente, forman una capa protectora que evita la incrustación de minerales como el calcio y el magnesio, responsables de la dureza del agua, y protegen los metales contra la oxidación. Su uso regular mejora la calidad del agua, prolonga la vida útil de los equipos, reduce el mantenimiento y optimiza el rendimiento energético de los sistemas de calefacción o distribución de agua. Es una solución práctica, económica y efectiva para el ablandamiento y la purificación del agua  en todas sus aplicaciones.",
  tableHeaders: [],
  tableData: [],
};

export default function PolifosfatoDeSodioPage() {
  return (
    <ProductPage
      audio={polifosfatoDeSodio.audio}
      titulo={polifosfatoDeSodio.titulo}
      imagen={polifosfatoDeSodio.imagen}
      tableHeaders={polifosfatoDeSodio.tableHeaders}
      tableData={polifosfatoDeSodio.tableData}
      descripcion={polifosfatoDeSodio.descripcion}
    ></ProductPage>
  );
}
