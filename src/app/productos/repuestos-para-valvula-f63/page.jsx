import ProductPage from "@/components/ProductPage";
import React from "react";

const repuestosParaValvulaF63 = {
  imagen:
    "/images/DetalleDeProducto/repuestos-para-valvula-f63-producto-imagen.png",
  categoria: "Válvulas de control",
  audio: "",
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
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F63-Display%20Board,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: [
        "Control Board",
        "Circuito principal para controlar la válvula.",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F63-Control%20Board,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["Dust Cover", "Protege contra polvo y suciedad"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F63-Dust%20Cover,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: [
        "Front Cover",
        "Parte frontal que protege componentes internos",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F63-Frontal%20Cover,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: [
        "Valve Body",
        "Cuerpo principal de la válvula, donde ocurre la distribución del agua",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F63-Valve%20Body,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: [
        "New Injector",
        "Regula el paso del agua y permite la inyección de salmuera",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F63-New%20Injector,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 7,
      propiedades: [
        "Motor",
        "Mueve los discos para las funciones de la válvula",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F63-Motor,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 8,
      propiedades: [
        "Animated Connector",
        "Conector rápido que une la válvula con la cañería",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F63-Animated%20Connector,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 9,
      propiedades: ["Flow Meter", "Caudalímetro "],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F63-Flow%20Meter,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 10,
      propiedades: [
        "Moving Disk",
        "Disco que se mueve para controlar el flujo de agua ",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F63-Moving%20Disk,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 11,
      propiedades: ["Seal Ring", "O’ring excluyente para evitar fugas de agua"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F63-Seal%20Ring,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 12,
      propiedades: [
        "Fixed disc",
        "Base fija que trabaja junto con el Moving Disk",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F63-Fixed%20Disc,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 13,
      propiedades: ["Probe Wire", "Cable para enviar recibir señales."],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20válvula%20F63-Probe%20Wire,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function RepuestosParaValvulaF63Page() {
  return (
    <ProductPage
      audio={repuestosParaValvulaF63.audio}
      titulo={repuestosParaValvulaF63.titulo}
      imagen={repuestosParaValvulaF63.imagen}
      tableHeaders={repuestosParaValvulaF63.tableHeaders}
      tableData={repuestosParaValvulaF63.tableData}
      descripcion={repuestosParaValvulaF63.descripcion}
    ></ProductPage>
  );
}
