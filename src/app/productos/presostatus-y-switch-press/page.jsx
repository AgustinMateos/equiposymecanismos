import ProductPage from "@/components/ProductPage";
import React from "react";

const presostatusYSwitchPress = {
  imagen:
    "/images/DetalleDeProducto/presostatos-y-switch-press-imagen-producto.png",
  categoria: "Instrumentación y control",
  audio: "/audios/audio-automatizacion.mp4",
  subcategoria: "Presostatus y switch press",
  titulo: "Presostatus y switch press",
  descripcion:
    "El presostato (switch de presión) es un dispositivo clave en sistemas de ablandamiento, filtración y purificación de agua, diseñado para activar o desactivar bombas, válvulas u otros equipos según la presión detectada en la línea. Protege tus instalaciones ante sobrepresiones o caídas de presión, optimizando el rendimiento y prolongando la vida útil del sistema.",
  tableHeaders: [
    "Modelo",
    "Tipo de refrigeración",
    "Entrada/Salida",
    "Medida de tanque",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["HM-P06", "0-6", "1-4", "1/2” macho"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Presostatus%20y%20Switch%20Press%20HM-P06,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["HM-P30", "5-30", "5-12", "1/2” macho"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Presostatus%20y%20Switch%20Press%20HM-P30,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["SB", "0-0,2", "No", "No"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Presostatus%20y%20Switch%20Press%20SB,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function PresostatusYSwitchPressPage() {
  return (
    <ProductPage
      audio={presostatusYSwitchPress.audio}
      titulo={presostatusYSwitchPress.titulo}
      imagen={presostatusYSwitchPress.imagen}
      tableHeaders={presostatusYSwitchPress.tableHeaders}
      tableData={presostatusYSwitchPress.tableData}
      descripcion={presostatusYSwitchPress.descripcion}
    ></ProductPage>
  );
}
