import ProductPage from "@/components/ProductPage";
import React from "react";

const conductimetros = {
  imagen: "/images/DetalleDeProducto/conducimetro-image-producto.png",
  categoria: "Válvulas de control",
  audio: "",
  subcategoria: "Conductímetros",
  titulo: "Conductímetros",
  descripcion:
    "Nuestros conductímetros te permiten medir de forma rápida y confiable la conductividad del agua, un dato clave para evaluar su nivel de pureza. Ideales para sistemas de ósmosis inversa, procesos industriales o control de agua potable. Una herramienta esencial para quienes necesitan controlar la calidad del agua en todo momento. Precisión al alcance de tu mano.",
  tableHeaders: ["Modelo", "Tipo de refrigeración"],
  tableData: [
    {
      id: 1,
      propiedades: ["TDS-IL", "uS/cm-TDS"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Conductímetro%20TDS-IL,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["TDS-P", "ppm-TDS"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Conductímetro%20TDS-P,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function ConductimetrosPage() {
  return (
    <ProductPage
      audio={conductimetros.audio}
      titulo={conductimetros.titulo}
      imagen={conductimetros.imagen}
      tableHeaders={conductimetros.tableHeaders}
      tableData={conductimetros.tableData}
      descripcion={conductimetros.descripcion}
    ></ProductPage>
  );
}
