import ProductPage from "@/components/ProductPage";
import React from "react";

const repuestosParaValvulaF63 = {
  imagen:
    "/images/DetalleDeProducto/repuestos-para-valvula-f63-producto-imagen.png",
  categoria: "Válvulas de control",
  subcategoria: "Repuestos para válvula F63",
  titulo: " Repuestos para válvula F63",
  descripcion:
    "Prolongá la vida útil de tu válvula G63 con repuestos originales y de alta calidad. Contamos con todos los componentes necesarios para realizar un mantenimiento completo y asegurar el funcionamiento óptimo de tu sistema de filtración.",
  tableHeaders: ["Modelo", "Función"],
  tableData: [
    {
      id: 1,
      propiedades: [
        "Display Board",
        "Muestra información y permite la interacción con el usuario",
      ],
    },
    {
      id: 2,
      propiedades: [
        "Control Board",
        "Circuito principal para controlar la válvula.",
      ],
    },
    {
      id: 3,
      propiedades: ["Dust Cover", "Protege contra polvo y suciedad"],
    },
    {
      id: 4,
      propiedades: [
        "Front Cover",
        "Parte frontal que protege componentes internos",
      ],
    },
    {
      id: 5,
      propiedades: [
        "Valve Body",
        "Cuerpo principal de la válvula, donde ocurre la distribución del agua",
      ],
    },
    {
      id: 6,
      propiedades: [
        "New Injector",
        "Regula el paso del agua y permite la inyección de salmuera",
      ],
    },
    {
      id: 7,
      propiedades: [
        "Motor",
        "Mueve los discos para las funciones de la válvula",
      ],
    },
    {
      id: 8,
      propiedades: [
        "Animated Connector",
        "Conector rápido que une la válvula con la cañería",
      ],
    },
    {
      id: 9,
      propiedades: ["Flow Meter", "Caudalímetro "],
    },
    {
      id: 10,
      propiedades: [
        "Moving Disk",
        "Disco que se mueve para controlar el flujo de agua ",
      ],
    },
    {
      id: 11,
      propiedades: ["Seal Ring", "O’ring excluyente para evitar fugas de agua"],
    },
    {
      id: 12,
      propiedades: [
        "Fixed disc",
        "Base fija que trabaja junto con el Moving Disk",
      ],
    },
    {
      id: 13,
      propiedades: ["Probe Wire", "Cable para enviar recibir señales."],
    },
  ],
};

export default function RepuestosParaValvulaF63Page() {
  return (
    <ProductPage
      titulo={repuestosParaValvulaF63.titulo}
      imagen={repuestosParaValvulaF63.imagen}
      tableHeaders={repuestosParaValvulaF63.tableHeaders}
      tableData={repuestosParaValvulaF63.tableData}
      descripcion={repuestosParaValvulaF63.descripcion}
    ></ProductPage>
  );
}
