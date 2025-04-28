import ProductPage from "@/components/ProductPage";
import React from "react";

const antiincrustantesEversafe = {
  imagen:
    "/images/DetalleDeProducto/antiincrustante-eversafe-11-imagen-prodcuto.png",
  categoria: "Soluciones Químicas",
  subcategoria: "Antiincrustante Eversafe 11",
  titulo: "Antiincrustante Eversafe 11",
  audio: "",
  descripcion:
    "Un antiincrustante es un producto químico diseñado para evitar la formación de incrustaciones en las membranas de ósmosis inversa. Estas incrustaciones son causadas por minerales presentes en el agua, como el calcio, los sulfatos o la sílice, que se cristalizan durante el proceso de filtración. Usar un antiincrustante adecuado protege las membranas, mejora su rendimiento y prolonga su vida útil.",
  tableHeaders: ["Marca", "Nombre", "Peso"],
  tableData: [
    {
      id: 1,
      propiedades: ["Neo Chemical", "Eversafe 11", "20Kg"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Neco%20Chemical%20Eversafe%11,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["Neo Chemical", "Eversafe 11", "200Kg"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Neco%20Chemical%20Eversafe%11,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function AntiincrustanteEversafePage() {
  return (
    <ProductPage
      audio={antiincrustantesEversafe.audio}
      titulo={antiincrustantesEversafe.titulo}
      imagen={antiincrustantesEversafe.imagen}
      tableHeaders={antiincrustantesEversafe.tableHeaders}
      tableData={antiincrustantesEversafe.tableData}
      descripcion={antiincrustantesEversafe.descripcion}
    ></ProductPage>
  );
}
