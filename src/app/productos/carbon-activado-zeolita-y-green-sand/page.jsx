import ProductPage from "@/components/ProductPage";
import React from "react";

const carbonActivadoZeolitayGreenSand = {
  imagen:
    "/images/DetalleDeProducto/carbon-activado-zeolita-y-green-sand-producto-detalle.png",
  categoria: "Resinas y Lechos",
  audio: "",
  subcategoria: "Carbón activado, zeolita y green sand",
  titulo: "Carbón activado, zeolita y greensand",
  descripcion:
    "El carbón activado, la zeolita y el green sand son medios filtrantes esenciales para sistemas de purificación de agua, cada uno con funciones específicas que mejoran la calidad del tratamiento. El carbón activado elimina cloro, olores, sabores y compuestos orgánicos gracias a su alta capacidad de absorción. La zeolita, de origen natural, actúa como un filtro físico y químico, reteniendo sólidos suspendidos, amoníaco y metales pesados. Por su parte, el green sand es ideal para remover hierro, manganeso y sulfuros, gracias a su capacidad de oxidación y retención. Combinados o utilizados según la necesidad, estos medios garantizan un agua más limpia, segura y libre de contaminantes, tanto en aplicaciones domiciliarias como industriales.",
  tableHeaders: ["Modelo", "Peso", "Volumen"],
  tableData: [
    {
      id: 1,
      propiedades: ["Carbón activado", "25 kg", "25 lts"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Carbón%20Activado%20de%2025kg,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["Zeolita", "25 kg", "25 lts"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Zeolita%20%20de%2025kg,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["Greensand", "25 kg", "25lts"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Greensand%20de%2025kg,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function CarbonActivadoZeolitaYGreenSandPage() {
  return (
    <ProductPage
      audio={carbonActivadoZeolitayGreenSand.audio}
      titulo={carbonActivadoZeolitayGreenSand.titulo}
      imagen={carbonActivadoZeolitayGreenSand.imagen}
      tableHeaders={carbonActivadoZeolitayGreenSand.tableHeaders}
      tableData={carbonActivadoZeolitayGreenSand.tableData}
      descripcion={carbonActivadoZeolitayGreenSand.descripcion}
    ></ProductPage>
  );
}
