import ProductPage from "@/components/ProductPage";
import React from "react";

const repuestosParaValvulaF116 = {
  imagen:
    "/images/DetalleDeProducto/repuestos-para-valvula-f116-producto-imagen.png",
  categoria: "Válvulas de control",
  audio: "",
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
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F116-Control%20Board,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["Dust Cover", "Protege contra polvo y suciedad"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F116-Dust%20Cover,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: [
        "Front Cover",
        "Parte frontal que protege componentes internos",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F116-Front%20Cover,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: [
        "Valve Body",
        " Cuerpo principal de la válvula, donde ocurre la distribución del agua",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F116-Valve%20Body,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: [
        "Injector Body",
        "Regula el paso del agua y permite la inyección de salmuera ",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F116-Injector%20Body,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: [
        "Motor",
        "Mueve los discos para las funciones de la válvula ",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F116-Motor,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 7,
      propiedades: [
        "Animated Connector",
        "Conector rápido que une la válvula con la cañería",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F116-Animated%20Connector,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 8,
      propiedades: ["Flow Meter", "Caudalímetro"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F116-Flow%20Meter,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 9,
      propiedades: [
        "Moving Disk",
        "Disco que se mueve para controlar el flujo de agua",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F116-Moving%20Disk,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 10,
      propiedades: [
        "Seal Ring",
        "O´ring excluyente para evitar fugas de agua ",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F116-Seal%20Ring,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 11,
      propiedades: [
        "Fixed Disc",
        "Base fija que trabaja junto con el Moving Disk",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F116-Fixed%20Disc,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 12,
      propiedades: ["Probe Wire", "Cable para enviar/recibir señales"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F116-Probe%20Wire,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function RepuestosParaValvulaF116Page() {
  return (
    <ProductPage
      audio={repuestosParaValvulaF116.audio}
      titulo={repuestosParaValvulaF116.titulo}
      imagen={repuestosParaValvulaF116.imagen}
      tableHeaders={repuestosParaValvulaF116.tableHeaders}
      tableData={repuestosParaValvulaF116.tableData}
      descripcion={repuestosParaValvulaF116.descripcion}
    ></ProductPage>
  );
}
