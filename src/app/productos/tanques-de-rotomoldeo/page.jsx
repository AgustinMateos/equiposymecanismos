import ProductPage from "@/components/ProductPage";
import React from "react";

const tanquesDeRotomoldeo = {
  imagen:
    "/images/DetalleDeProducto/tanques-de-roto-moldeo-producto-imagen.png",
  categoria: "Tanques",
  subcategoria: "Tanques de Rotomoldeo",
  titulo: "Tanques de Rotomoldeo",
  descripcion:
    "Fabricados mediante el sistema de rotomoldeo con polietileno virgen de media densidad lineal, con protección UV (rayos ultravioleta), lo que les confiere una vida útil más prolongada.",
  tableHeaders: [
    "Modelo",
    "Capacidad",
    "Diámetero inferior",
    "Diámtero superior",
    "Altura",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["RC-20", "20 lts.", "200 mm", "290mm", "385 mm"],
    },
    {
      id: 2,
      propiedades: ["RC-50", "50 lts.", "345 mm", "390mm", "490 mm"],
    },
    {
      id: 3,
      propiedades: ["RC-75", "75 lts.", "435 mm", "475mm", "575 mm"],
    },
    {
      id: 4,
      propiedades: ["RC-100", "100 lts.", "435 mm", "475 mm", "710 mm"],
    },
  ],
};

export default function TanquesDeRotomoldeoPage() {
  return (
    <ProductPage
      titulo={tanquesDeRotomoldeo.titulo}
      imagen={tanquesDeRotomoldeo.imagen}
      tableHeaders={tanquesDeRotomoldeo.tableHeaders}
      tableData={tanquesDeRotomoldeo.tableData}
      descripcion={tanquesDeRotomoldeo.descripcion}
    ></ProductPage>
  );
}
