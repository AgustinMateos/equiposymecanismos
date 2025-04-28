import ProductPage from "@/components/ProductPage";
import React from "react";

const portaMembranasDe8DeAguaDulce = {
  imagen:
    "/images/DetalleDeProducto/portamembranas-de-8-de-agua-dulce-producto-imagen.png",
  categoria: "Portamembranas",
  audio: "",
  subcategoria: 'Portamembranas de 8" para agua dulce',
  titulo: 'Portamembranas de 8" para agua dulce',
  descripcion:
    'Estos portamembranas de gran capacidad están diseñados para sistemas de tratamiento del agua a gran escala, ofreciendo una combinación óptima de rendimiento, durabilidad y flexibilidad. La construcción en PRFV proporciona una excelente resistencia química y a la corrosión, mientras que su diseño permite albergar múltiples elementos de membrana de 8" de diámetro',
  tableHeaders: ["Modelo", "Cant. de membranas", "Conexión tipo Victaulic"],
  tableData: [
    {
      id: 1,
      propiedades: ['PM8"X1', "1", "Incluida"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Portamembrana%20de%204%20de%20agua%20dulce%20PM8X1,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ['PM8"X2', "2", "Incluida"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Portamembrana%20de%204%20de%20agua%20dulce%20PM8X2,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ['PM8"X3', "3", "Incluida"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Portamembrana%20de%204%20de%20agua%20dulce%20PM8X3,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ['PM8"X4', "4", "Incluida"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Portamembrana%20de%204%20de%20agua%20dulce%20PM8X4,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: ['PM8"X5', "5", "Incluida"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Portamembrana%20de%204%20de%20agua%20dulce%20PM8X5,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: ['PM8"X6', "6", "Incluida"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Portamembrana%20de%204%20de%20agua%20dulce%20PM8X6,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function PortamembranasDe8DeAguaDulcePage() {
  return (
    <ProductPage
      audio={portaMembranasDe8DeAguaDulce.audio}
      titulo={portaMembranasDe8DeAguaDulce.titulo}
      imagen={portaMembranasDe8DeAguaDulce.imagen}
      tableHeaders={portaMembranasDe8DeAguaDulce.tableHeaders}
      tableData={portaMembranasDe8DeAguaDulce.tableData}
      descripcion={portaMembranasDe8DeAguaDulce.descripcion}
    ></ProductPage>
  );
}
