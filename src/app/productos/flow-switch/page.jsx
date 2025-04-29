import ProductPage from "@/components/ProductPage";
import React from "react";

const flowSwitch = {
  imagen: "/images/DetalleDeProducto/flow-switch-imagen-producto.png",
  categoria: "Instrumentación y control",
  audio: "/audios/audio-automatizacion (2).mp4",
  subcategoria: "Flow Switch",
  titulo: "Flow Switch",
  descripcion:
    "El flow switch es un componente esencial para garantizar el correcto funcionamiento de tus sistemas de ablandamiento, filtración y purificación de agua. Detecta el flujo de líquido en las tuberías y activa o desactiva equipos como bombas, válvulas o alarmas, protegiendo tus instalaciones ante caídas o interrupciones del caudal.",
  tableHeaders: [
    "Modelo",
    "Tensión AC/DC",
    "Conexión",
    "Máx temp.",
    "Máx presión",
    "Paleta",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["HFS-20", "220V", 'M 1"', "100°C", "10BAR", "Acero Inox."],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Flow%20Switch%20HFS-20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: [
        "FS-14",
        "24V/220V",
        'Tubo/Tubo 1/4"',
        "50°C",
        "10BAR",
        "-",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Flow%20Switch%20FS-14,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function FlowSwitchPage() {
  return (
    <ProductPage
      audio={flowSwitch.audio}
      titulo={flowSwitch.titulo}
      imagen={flowSwitch.imagen}
      tableHeaders={flowSwitch.tableHeaders}
      tableData={flowSwitch.tableData}
      descripcion={flowSwitch.descripcion}
    ></ProductPage>
  );
}
