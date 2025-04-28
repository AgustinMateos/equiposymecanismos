import ProductPage from "@/components/ProductPage";
import React from "react";

const portamembranasDe4DeAguaDeMar = {
  imagen:
    "/images/DetalleDeProducto/portamembranas-de-4-de-agua-de-mar-producto-imagen.png",
  categoria: "Portamembranas",
  audio: "",
  subcategoria: 'Portamembranas de 4" de agua de mar',
  titulo: 'Portamembranas de 4" de agua de mar',
  descripcion:
    "Este portamembranas de alta presión combina una resistencia excepcional con la ligereza característica del PRFV. Su construcción robusta permite soportar las altas presiones necesarias para superar la presión osmótica del agua de mar, que típicamente requiere presiones operativas de hasta 1.000 psi",
  tableHeaders: ["Modelo", "Elementos", "Presión psi / bar", "Material"],
  tableData: [
    {
      id: 1,
      propiedades: ['PM4"', "1", "1.000/69", "PRFV"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Portamembrana%20de%204%20de%20agua%20de%20mar%20PM4,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function PortamembranasDe4DeAguaDeMarPage() {
  return (
    <ProductPage
      audio={portamembranasDe4DeAguaDeMar.audio}
      titulo={portamembranasDe4DeAguaDeMar.titulo}
      imagen={portamembranasDe4DeAguaDeMar.imagen}
      tableHeaders={portamembranasDe4DeAguaDeMar.tableHeaders}
      tableData={portamembranasDe4DeAguaDeMar.tableData}
      descripcion={portamembranasDe4DeAguaDeMar.descripcion}
    ></ProductPage>
  );
}
