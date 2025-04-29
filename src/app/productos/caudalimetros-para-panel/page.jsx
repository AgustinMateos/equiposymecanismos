import ProductPage from "@/components/ProductPage";
import React from "react";

const caudalimetrosParaPanel = {
  imagen:
    "/images/DetalleDeProducto/caudalimetro-para-panel-imagen-producto.png",
  categoria: "Instrumentación y control",
  subcategoria: "Caudalímetros para panel",
  titulo: "Caudalímetros para panel",
  audio: "/audios/audio-automatizacion (2).mp4",
  descripcion:
    "Controlá de forma clara y precisa el caudal de agua desde un tablero o panel de control. Este tipo de caudalímetro se monta externamente y permite visualizar el flujo en tiempo real, ideal para sistemas de filtrado, ósmosis o dosificación. Su diseño práctico facilita el monitoreo y ajuste de procesos tanto en aplicaciones domésticas como industriales.Visualización directa para un control eficiente.",
  tableHeaders: ["Modelo", "Galones por minuto", "Rosca"],
  tableData: [
    {
      id: 1,
      propiedades: ["CL/0.3-3", "Hasta 3gpm", 'M 1/2"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Caudalímetro%20para%20panel%20CL/0.3-3%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["CL/0.5-5", "Hasta 5gpm", 'M 1/2"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Caudalímetro%20para%20panel%20CL/0.5-5%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["CL/1-10", "Hasta 10gpm", 'M 1"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Caudalímetro%20para%20panel%20CL/1-10%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ["CL/5-30", "Hasta 35gpm", 'M 1"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Caudalímetro%20para%20panel%20CL/5-30%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: ["CL/20-60", "Hasta 60gpm", 'M 2"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Caudalímetro%20para%20panel%20CL/20-60%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: ["CL/20-120", "Hasta 150gpm", 'M 2"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Caudalímetro%20para%20panel%20CL/20-120%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function CaudalimetrosParaPanelPage() {
  return (
    <ProductPage
      audio={caudalimetrosParaPanel.audio}
      titulo={caudalimetrosParaPanel.titulo}
      imagen={caudalimetrosParaPanel.imagen}
      tableHeaders={caudalimetrosParaPanel.tableHeaders}
      tableData={caudalimetrosParaPanel.tableData}
      descripcion={caudalimetrosParaPanel.descripcion}
    ></ProductPage>
  );
}
