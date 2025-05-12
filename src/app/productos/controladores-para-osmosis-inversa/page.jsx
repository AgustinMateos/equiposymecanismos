import ProductPage from "@/components/ProductPage";
import React from "react";

const controladoresParaOsmosisInversa = {
  imagen:
    "/images/DetalleDeProducto/controladores-para-osmosis-inversa-imagen-producto.png",
  categoria: "",
  subcategoria: "Controladores para ósmosis inversa",
  titulo: "Controladores para ósmosis inversa",
  descripcion:
    "Los controladores de ósmosis inversa permiten gestionar el funcionamiento del sistema de forma automática, optimizando su rendimiento y evitando fallas por exceso de presión, bajo caudal o tanques llenos. Una solución clave para instalaciones eficientes y seguras. Mejorá la eficiencia y prolongá la vida útil de tu sistema de ósmosis con un controlador que lo hace todo más simple y confiable.",
  audio: "",
  tableHeaders: [
    "Modelo",
    "Monitor de conductividad",
    "Rutina auto-flushing",
    "Tensión de alimentación",
    "Control",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["ROS-2210", "Incluido", "Si", "220V", "Relé"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Controlador%20para%20ósmosis%20inversa%20ROS-2210,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 1,
      propiedades: ["RO-PLC", "No Incluido", "Si", "220V", "Relé"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Controlador%20para%20ósmosis%20inversa%20RO-PLC,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function ControladoresParaOsmosisInversaPage() {
  return (
    <ProductPage
      audio={controladoresParaOsmosisInversa.audio}
      titulo={controladoresParaOsmosisInversa.titulo}
      imagen={controladoresParaOsmosisInversa.imagen}
      tableHeaders={controladoresParaOsmosisInversa.tableHeaders}
      tableData={controladoresParaOsmosisInversa.tableData}
      descripcion={controladoresParaOsmosisInversa.descripcion}
    ></ProductPage>
  );
}
