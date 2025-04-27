import ProductPage from "@/components/ProductPage";
import React from "react";

const repuestosParaValvulaF116 = {
  imagen:
    "/images/DetalleDeProducto/repuestos-para-valvula-f116-producto-imagen.png",
  categoria: "Válvulas de control",
  subcategoria: "Repuestos para válvula F116",
  titulo: "Repuestos para válvula F116",
  descripcion:
    "Mantén el rendimiento óptimo de tu sistema de filtración con nuestros repuestos originales para válvula F116. Contamos con kits completos y piezas individuales para garantizar un funcionamiento eficiente y prolongar la vida útil de tu equipo.",
  tableHeaders: ["Modelo", "Función"],
  tableData: [
    {
      id: 1,
      propiedades: [
        "Control Board",
        "Circuito principal para controlar la válvula.",
      ],
    },
    {
      id: 2,
      propiedades: ["Dust Cover", "Protege contra polvo y suciedad"],
    },
    {
      id: 3,
      propiedades: [
        "Front Cover",
        "Parte frontal que protege componentes internos",
      ],
    },
    {
      id: 4,
      propiedades: [
        "Valve Body",
        " Cuerpo principal de la válvula, donde ocurre la distribución del agua",
      ],
    },
    {
      id: 5,
      propiedades: [
        "Injector Body",
        "Regula el paso del agua y permite la inyección de salmuera ",
      ],
    },
    {
      id: 6,
      propiedades: [
        "Motor",
        "Mueve los discos para las funciones de la válvula ",
      ],
    },
    {
      id: 7,
      propiedades: [
        "Animated Connector",
        "Conector rápido que une la válvula con la cañería",
      ],
    },
    {
      id: 8,
      propiedades: ["Flow Meter", "Caudalímetro"],
    },
    {
      id: 9,
      propiedades: [
        "Moving Disk",
        "Disco que se mueve para controlar el flujo de agua",
      ],
    },
    {
      id: 10,
      propiedades: [
        "Seal Ring",
        "O´ring excluyente para evitar fugas de agua ",
      ],
    },
    {
      id: 11,
      propiedades: [
        "Fixed Disc",
        "Base fija que trabaja junto con el Moving Disk",
      ],
    },
    {
      id: 12,
      propiedades: ["Probe Wire", "Cable para enviar/recibir señales"],
    },
  ],
};

export default function RepuestosParaValvulaF116Page() {
  return (
    <ProductPage
      titulo={repuestosParaValvulaF116.titulo}
      imagen={repuestosParaValvulaF116.imagen}
      tableHeaders={repuestosParaValvulaF116.tableHeaders}
      tableData={repuestosParaValvulaF116.tableData}
      descripcion={repuestosParaValvulaF116.descripcion}
    ></ProductPage>
  );
}
