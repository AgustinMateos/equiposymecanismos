import ProductPage from "@/components/ProductPage";
import React from "react";

const resinasDeIntercambioIonico = {
  imagen:
    "/images/DetalleDeProducto/resinas-de-intercambio-ionico-producto-imagen.png",
  categoria: "Rsinas y lechos",
  subcategoria: "Resinas de intercambio iónico",
  titulo: "Resinas de intercambio iónico",
  audio: "",
  descripcion:
    "Las resinas de intercambio iónico son el corazón de los sistemas ablandadores de agua. Funcionan eliminando iones como calcio y magnesio (causantes del sarro), intercambiándolos por sodio. Esto permite obtener agua más blanda, protegiendo cañerías, electrodomésticos y optimizando el uso de detergentes.",
  tableHeaders: [
    "Modelo",
    "Cantidad por bolsa",
    "Regeneración",
    "Grado alimenticio",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["Catiónica", "25 lts.", "Sódica", "Si"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Resina%20para%20Catiónica,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["Aniónica", "25 lts", "Sódica / ácida", "Si"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Resina%20para%20Aniónica,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function ResinasDeIntercambioIonicoPage() {
  return (
    <ProductPage
      audio={resinasDeIntercambioIonico.audio}
      titulo={resinasDeIntercambioIonico.titulo}
      imagen={resinasDeIntercambioIonico.imagen}
      tableHeaders={resinasDeIntercambioIonico.tableHeaders}
      tableData={resinasDeIntercambioIonico.tableData}
      descripcion={resinasDeIntercambioIonico.descripcion}
    ></ProductPage>
  );
}
