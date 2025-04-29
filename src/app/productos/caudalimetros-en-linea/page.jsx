import ProductPage from "@/components/ProductPage";
import React from "react";

const caudalimetrosEnLinea = {
  imagen: "/images/DetalleDeProducto/caudalimetro-en-linea-imagen-producto.png",
  categoria: "Instrumentación y control",
  subcategoria: "Caudalímetros en línea",
  titulo: "Caudalímetros en línea",
  audio: "/audios/audio-automatizacion (2).mp4",
  descripcion:
    "Medí con precisión el flujo de agua en sistemas de filtrado, potabilización o distribución. Instalado directamente en la tubería, permite un monitoreo en tiempo real para optimizar el rendimiento de bombas, filtros y otros equipos. Ideal para uso doméstico o industrial, facilita el control, la detección de fallas y el ahorro de recursos.",
  tableHeaders: ["Modelo", "Galones por minuto", "Rosca"],
  tableData: [
    {
      id: 1,
      propiedades: ["CL/0.3-3", "Hasta 3gpm", 'H 1/2"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Caudalímetro%20en%20línea%20CL/0.3-3%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["CL/0.5-5", "Hasta 5gpm", 'H 1/2"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Caudalímetro%20en%20línea%20CL/0.5-5%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["CL/1-10", "Hasta 10gpm", 'H 3/4"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Caudalímetro%20en%20línea%20CL/1-10%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ["CL/5-30", "Hasta 30gpm", 'H 1"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Caudalímetro%20en%20línea%20CL/5-30%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: ["CL/20-60", "Hasta 60gpm", 'M 1 1/2"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Caudalímetro%20en%20línea%20CL/20-60%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: ["CL/20-120", "Hasta 120gpm", 'M 2"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Caudalímetro%20en%20línea%20CL/20-120%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function CaudalimetrosEnLineaPage() {
  return (
    <ProductPage
      audio={caudalimetrosEnLinea.audio}
      titulo={caudalimetrosEnLinea.titulo}
      imagen={caudalimetrosEnLinea.imagen}
      tableHeaders={caudalimetrosEnLinea.tableHeaders}
      tableData={caudalimetrosEnLinea.tableData}
      descripcion={caudalimetrosEnLinea.descripcion}
    ></ProductPage>
  );
}
