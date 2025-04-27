import ProductPage from "@/components/ProductPage";
import React from "react";

const antiincrustantesEversafe = {
  imagen:
    "/images/DetalleDeProducto/antiincrustante-eversafe-11-imagen-prodcuto.png",
  categoria: "Soluciones Químicas",
  subcategoria: "Antiincrustante Eversafe 11",
  titulo: "Antiincrustante Eversafe 11",
  descripcion:
    "Un antiincrustante es un producto químico diseñado para evitar la formación de incrustaciones en las membranas de ósmosis inversa. Estas incrustaciones son causadas por minerales presentes en el agua, como el calcio, los sulfatos o la sílice, que se cristalizan durante el proceso de filtración. Usar un antiincrustante adecuado protege las membranas, mejora su rendimiento y prolonga su vida útil.",
  tableHeaders: ["Marca", "Nombre", "Peso"],
  tableData: [
    {
      id: 1,
      propiedades: ["Neo Chemical", "Eversafe 11", "20Kg"],
    },
    {
      id: 2,
      propiedades: ["Neo Chemical", "Eversafe 11", "200Kg"],
    },
  ],
};

export default function AntiincrustanteEversafePage() {
  return (
    <ProductPage
      titulo={antiincrustantesEversafe.titulo}
      imagen={antiincrustantesEversafe.imagen}
      tableHeaders={antiincrustantesEversafe.tableHeaders}
      tableData={antiincrustantesEversafe.tableData}
      descripcion={antiincrustantesEversafe.descripcion}
    ></ProductPage>
  );
}
