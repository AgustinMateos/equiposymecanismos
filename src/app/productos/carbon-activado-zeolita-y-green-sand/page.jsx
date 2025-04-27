import ProductPage from "@/components/ProductPage";
import React from "react";

const carbonActivadoZeolitayGreenSand = {
  imagen:
    "/images/DetalleDeProducto/carbon-activado-zeolita-y-green-sand-producto-detalle.png",
  categoria: "Resinas y Lechos",
  subcategoria: "Carbón activado, zeolita y green sand",
  titulo: "Carbón activado, zeolita y greensand",
  descripcion:
    "El carbón activado, la zeolita y el green sand son medios filtrantes esenciales para sistemas de purificación de agua, cada uno con funciones específicas que mejoran la calidad del tratamiento. El carbón activado elimina cloro, olores, sabores y compuestos orgánicos gracias a su alta capacidad de absorción. La zeolita, de origen natural, actúa como un filtro físico y químico, reteniendo sólidos suspendidos, amoníaco y metales pesados. Por su parte, el green sand es ideal para remover hierro, manganeso y sulfuros, gracias a su capacidad de oxidación y retención. Combinados o utilizados según la necesidad, estos medios garantizan un agua más limpia, segura y libre de contaminantes, tanto en aplicaciones domiciliarias como industriales.",
  tableHeaders: ["Modelo", "Peso", "Volumen"],
  tableData: [
    {
      id: 1,
      propiedades: ["Carbón activado", "25 kg", "25 lts"],
    },
    {
      id: 2,
      propiedades: ["Zeolita", "25 kg", "25 lts"],
    },
    {
      id: 3,
      propiedades: ["Greensand", "25 kg", "25lts"],
    },
  ],
};

export default function CarbonActivadoZeolitaYGreenSandPage() {
  return (
    <ProductPage
      titulo={carbonActivadoZeolitayGreenSand.titulo}
      imagen={carbonActivadoZeolitayGreenSand.imagen}
      tableHeaders={carbonActivadoZeolitayGreenSand.tableHeaders}
      tableData={carbonActivadoZeolitayGreenSand.tableData}
      descripcion={carbonActivadoZeolitayGreenSand.descripcion}
    ></ProductPage>
  );
}
