import ProductPage from "@/components/ProductPage";
import React from "react";

const cartuchosRecargables = {
  imagen: "/images/DetalleDeProducto/cartuchos-recargables-imagen-producto.png",
  categoria: "Filtración",
  subcategoria: "Cartuchos Recargables",
  titulo: "Cartuchos recargables",
  audio: "",
  descripcion:
    "Nuestros cartuchos recargables son la opción ideal para quienes buscan una solución eficiente, económica y sustentable en el tratamiento de agua. Compatibles con la mayoría de los porta filtros estándar, estos cartuchos permiten rellenarse fácilmente con el material filtrante que mejor se adapte a tus necesidades: carbón activado, resina ablandadora, polifosfato y más.",
  tableHeaders: ["Modelo", "Medida"],
  tableData: [
    {
      id: 1,
      propiedades: ["CV1025", "10x2,5"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Cartuchos%20de%20Recargables%20CV1025,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["CV2025", "20x2,5"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Cartuchos%20de%20Recargables%20CV2025,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function CartuchosRecargablesPage() {
  return (
    <ProductPage
      audio={cartuchosRecargables.audio}
      titulo={cartuchosRecargables.titulo}
      imagen={cartuchosRecargables.imagen}
      tableHeaders={cartuchosRecargables.tableHeaders}
      tableData={cartuchosRecargables.tableData}
      descripcion={cartuchosRecargables.descripcion}
    ></ProductPage>
  );
}
