import ProductPage from "@/components/ProductPage";
import React from "react";

const dmi65 = {
  imagen: "/images/DetalleDeProducto/dmi-65-quantum-australia.png",
  audio: "",
  titulo: "DMI-65® de Quantum Australia",
  descripcion:
    "DMI-65® es un lecho filtrante catalítico desarrollado por Quantum Filtration Medium en Australia para el tratamiento de agua. Permite remover hierro y manganeso y, con un sistema diseñado para las características del agua a tratar, también arsénico. Se aplica al tratamiento de agua de perforación y en proyectos municipales e industriales, incluidos los sectores de distribución de agua y minería. Consultanos para evaluar su aplicación en tu proyecto y solicitar una cotización.",
  tableHeaders: ["Producto", "Tipo", "Aplicación"],
  tableData: [
    {
      id: 1,
      propiedades: [
        "DMI-65®",
        "Lecho filtrante catalítico",
        "Remoción de arsénico, hierro y manganeso",
      ],
      link: "https://wa.me/541158085500?text=Hola%2C%20me%20interesa%20el%20lecho%20filtrante%20DMI-65%20de%20Quantum%20Australia.%20%C2%BFPodr%C3%ADan%20asesorarme%20y%20enviarme%20una%20cotizaci%C3%B3n%3F",
    },
  ],
};

export default function DMI65FormaQuantumDeAustraliaPage() {
  return (
    <ProductPage
      audio={dmi65.audio}
      titulo={dmi65.titulo}
      imagen={dmi65.imagen}
      tableHeaders={dmi65.tableHeaders}
      tableData={dmi65.tableData}
      descripcion={dmi65.descripcion}
    />
  );
}
