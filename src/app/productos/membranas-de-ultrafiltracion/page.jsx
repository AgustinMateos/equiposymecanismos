import ProductPage from "@/components/ProductPage";
import React from "react";

const membranasDeUltraFiltracion = {
  imagen:
    "/images/DetalleDeProducto/membranas-de-ultrafiltracion-producto-imagen.png",
  categoria: "Portamembranas",
  subcategoria: "Membranas de ultrfiltración",
  titulo: "Membranas de ultrafiltración",
  descripcion:
    "Las membranas de ultrafiltración Mizuki Gakko ofrecen una solución avanzada para el tratamiento de agua, con un rango de filtración de 0.01 a 0.1 micrones. Fabricadas con materiales de alta calidad como PES o PVDF, estas membranas retienen eficazmente bacterias, virus, partículas y macromoléculas, sin necesidad de productos químicos. Su diseño permite un alto flujo con baja presión de operación, reduciendo el consumo energético y los costos operativos. Son ideales para potabilización de aguas superficiales, pretratamiento en sistemas de ósmosis inversa, reutilización de efluentes y aplicaciones en la industria alimentaria o biomédica. Robustas, eficientes y automatizables, garantizan agua segura y de alta pureza con bajo mantenimiento.",
  tableHeaders: [
    "Modelo",
    "Área membrana",
    "Presión de operación",
    "Q de diseño",
    "Q máx de permeado",
    "Tempr. de operación",
    "Rango de pH",
  ],
  tableData: [
    {
      id: 1,
      propiedades: [
        "MUF 4046",
        "4,8 m2",
        "1.5 Bar",
        "40-150 L/m2/h",
        "0,3m3/h",
        "5~40 °C",
        "3-11",
      ],
    },
    {
      id: 2,
      propiedades: [
        "MUF 8040",
        "25 m2",
        "1,5 Bar",
        "40-150 L/m2/h",
        "1,5 m3/h",
        "5~40 °C",
        "3-11",
      ],
    },
  ],
};

export default function MembranasDeUltrafiltracionPage() {
  return (
    <ProductPage
      titulo={membranasDeUltraFiltracion.titulo}
      imagen={membranasDeUltraFiltracion.imagen}
      tableHeaders={membranasDeUltraFiltracion.tableHeaders}
      tableData={membranasDeUltraFiltracion.tableData}
      descripcion={membranasDeUltraFiltracion.descripcion}
    ></ProductPage>
  );
}
