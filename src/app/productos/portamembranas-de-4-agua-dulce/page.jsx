import ProductPage from "@/components/ProductPage";
import React from "react";

const portaMembranasDe4DeAguaDulce = {
  imagen:
    "/images/DetalleDeProducto/portamembranas-de-4-de-agua-dulce-producto-imagen.png",
  categoria: "Válvulas de control",
  audio: "",
  subcategoria: 'Portamembranas de 4" de agua dulce',
  titulo: 'Portamembranas de 4" de agua dulce',
  descripcion:
    "Diseñado con sistema In-Out en los extremos, este portamembranas es compatible con todas las marcas de membranas estándar, lo que lo convierte en una solución versátil y confiable para sistemas de purificación de agua. Soporta una temperatura máxima de operación de 60 °C, garantizando un rendimiento óptimo incluso en condiciones exigentes. Todos sus componentes están fabricados con materiales aprobados por FDA/NSF, asegurando la seguridad en aplicaciones de agua potable. Además, su superficie exterior cuenta con un recubrimiento de pintura poliuretánica de alto brillo, resistente a los rayos solares, lo que ofrece mayor durabilidad y protección en instalaciones tanto interiores como exteriores.",
  tableHeaders: ["Modelo", "Elementos", "Presión psi / bar", "Material"],
  tableData: [
    {
      id: 1,
      propiedades: ['PMA14"', "1", "300/20,6", "Acero Inox. 304"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Portamembrana%20de%204%20de%20agua%20dulce%20PMA14,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ['PM4"', "1", "300/20,6", "PRFV"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Portamembrana%20de%204%20de%20agua%20dulce%20PMA4,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ['PM4"X2', "2", "300/20,6", "PRFV"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Portamembrana%20de%204%20de%20agua%20dulce%20PM4X2,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ['PM4"X3', "3", "300/20,6", "PRFV"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Portamembrana%20de%204%20de%20agua%20dulce%20PM4X3,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function PortamembranasDe4AguaDulcePage() {
  return (
    <ProductPage
      titulo={portaMembranasDe4DeAguaDulce.titulo}
      imagen={portaMembranasDe4DeAguaDulce.imagen}
      tableHeaders={portaMembranasDe4DeAguaDulce.tableHeaders}
      tableData={portaMembranasDe4DeAguaDulce.tableData}
      descripcion={portaMembranasDe4DeAguaDulce.descripcion}
    ></ProductPage>
  );
}
