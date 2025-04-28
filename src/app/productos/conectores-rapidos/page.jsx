import ProductPage from "@/components/ProductPage";
import React from "react";

const conectoresRapidos = {
  imagen: "/images/DetalleDeProducto/-imagen-producto.png",
  categoria: "Mangueras y conectores",
  subcategoria: "Conectores rápidos",
  audio: "",
  titulo: "Conectores rápidos",
  descripcion: "",
  tableHeaders: ["Nombre", "Tipo de rosca", "Tipo de conexión"],
  tableData: [
    {
      id: 1,
      propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Conector%%20rápido%20'T'%20de%201/4,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["Conector rápido 'T'", "Tubo 3/8", " derivación 3/8"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Conector%20rápido%20'T'%20de%203/8,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["Conector rápido 'T'", "Tubo 1/2", " derivación 1/2"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Conector%20rápido%20'T'%20de%201/2,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ["Conector rápido codo", "Tubo 1/4", " derivación 1/4"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Conector%20rápido%20'T'%20de%203/8,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: ["Conector rápido codo", "Tubo 3/8", " derivación 3/8"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Conector%20rápido%20'T'%20de%203/8,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: ["Conector rápido codo", "Tubo 1/2", " derivación 1/2"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Conector%20rápido%20codo%20Tubo%20de%201/2,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 7,
      propiedades: [
        "Conector rápido codo-rosca macho",
        "Rosca macho 1/4",
        "Tubo 1/4",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Conector%20rápido%20codo-rosca%20macho%20de%201/4,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 8,
      propiedades: [
        "Conector rápido codo-rosca macho",
        "Rosca macho 1/2",
        " Rosca  1/4",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Conector%20rápido%20codo-rosca%20macho%20de%201/2,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 9,
      propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Conector%20rápido%20'T'%20tubo%20de%201/4,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    // {
    //   id: 1,
    //   propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    // },
    // {
    //   id: 1,
    //   propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    // },
    // {
    //   id: 1,
    //   propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    // },
    // {
    //   id: 1,
    //   propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    // },
    // {
    //   id: 1,
    //   propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    // },
    // {
    //   id: 1,
    //   propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    // },
    // {
    //   id: 1,
    //   propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    // },
    // {
    //   id: 1,
    //   propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    // },
    // {
    //   id: 1,
    //   propiedades: ["Conector rápido 'T'", "Tubo 1/4", " derivación 1/4"],
    // },
  ],
};

export default function ConectoresRapidosPage() {
  return (
    <ProductPage
      titulo={conectoresRapidos.titulo}
      imagen={conectoresRapidos.imagen}
      tableHeaders={conectoresRapidos.tableHeaders}
      tableData={conectoresRapidos.tableData}
      descripcion={conectoresRapidos.descripcion}
    ></ProductPage>
  );
}
