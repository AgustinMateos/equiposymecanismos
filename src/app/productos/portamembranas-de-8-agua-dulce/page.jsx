import ProductPage from "@/components/ProductPage";
import React from "react";

const portaMembranasDe8DeAguaDulce = {
  imagen:
    "/images/DetalleDeProducto/portamembranas-de-8-de-agua-dulce-producto-imagen.png",
  categoria: "Portamembranas",
  subcategoria: 'Portamembranas de 8" para agua dulce',
  titulo: 'Portamembranas de 8" para agua dulce',
  descripcion:
    'Estos portamembranas de gran capacidad están diseñados para sistemas de tratamiento del agua a gran escala, ofreciendo una combinación óptima de rendimiento, durabilidad y flexibilidad. La construcción en PRFV proporciona una excelente resistencia química y a la corrosión, mientras que su diseño permite albergar múltiples elementos de membrana de 8" de diámetro',
  tableHeaders: ["Modelo", "Cant. de membranas", "Conexión tipo Victaulic"],
  tableData: [
    {
      id: 1,
      propiedades: ['PM8"X1', "1", "Incluida"],
    },
    {
      id: 2,
      propiedades: ['PM8"X2', "2", "Incluida"],
    },
    {
      id: 3,
      propiedades: ['PM8"X3', "3", "Incluida"],
    },
    {
      id: 4,
      propiedades: ['PM8"X4', "4", "Incluida"],
    },
    {
      id: 5,
      propiedades: ['PM8"X5', "5", "Incluida"],
    },
    {
      id: 6,
      propiedades: ['PM8"X6', "6", "Incluida"],
    },
  ],
};

export default function PortamembranasDe8DeAguaDulcePage() {
  return (
    <ProductPage
      titulo={portaMembranasDe8DeAguaDulce.titulo}
      imagen={portaMembranasDe8DeAguaDulce.imagen}
      tableHeaders={portaMembranasDe8DeAguaDulce.tableHeaders}
      tableData={portaMembranasDe8DeAguaDulce.tableData}
      descripcion={portaMembranasDe8DeAguaDulce.descripcion}
    ></ProductPage>
  );
}
