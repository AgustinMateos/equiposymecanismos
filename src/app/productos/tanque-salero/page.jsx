import ProductPage from "@/components/ProductPage";
import React from "react";

const tanqueSalero = {
  imagen: "/images/DetalleDeProducto/tanques-saleros-producto-imagen.png",
  categoria: "Válvulas de control",
  audio: "",
  subcategoria: "Tanques Saleros",
  titulo: "Tanques saleros",
  descripcion:
    "El tanque salero es un componente esencial en sistemas de ablandamiento de agua. Su función principal es almacenar la sal que, disuelta en agua, genera la salmuera necesaria para regenerar la resina del ablandador. Fabricado en polietileno de alta resistencia, es durable, liviano y resistente a la corrosión. Entre sus beneficios se encuentra la mejora de eficiencia del ablandador, el fácil matenimiento y limpieza del equipo y la prolongación de la vida útil del sistema donde se utlice.",
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
      propiedades: ["TS50AC", "50 lts.", "345 mm", "390mm", "490 mm"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20salero%20TS50AC,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["TS75AC", "75 lts.", "435 mm", "475mm", "575 mm"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20salero%20TS75AC,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["TS100AC", "100 lts.", "435 mm", "475mm", "710 mm"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20salero%20TS100AC,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ["TS230AC", "230 lts.", "605 mm", "630 mm", "860 mm"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20salero%20TS230AC,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: ["TS230VAF", "230 lts.", "605 mm", "630 mm", "860 mm"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20salero%20TS230VAF,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: ["TS500VAF", "500 lts.", "875 mm", "985 mm", "975 mm"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Tanque%20salero%20TS500VAF,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function TanqueSaleroPage() {
  return (
    <ProductPage
      audio={tanqueSalero.audio}
      titulo={tanqueSalero.titulo}
      imagen={tanqueSalero.imagen}
      tableHeaders={tanqueSalero.tableHeaders}
      tableData={tanqueSalero.tableData}
      descripcion={tanqueSalero.descripcion}
    ></ProductPage>
  );
}
