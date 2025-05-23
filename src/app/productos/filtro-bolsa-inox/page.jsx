import ProductPage from "@/components/ProductPage";
import React from "react";

const filtroBolsaInox = {
  imagen: "/images/DetalleDeProducto/filtro-bolsa-inox-imagen-producto.png",
  categoria: "Filtración",
  subcategoria: "Filtro Bolsa Inox",
  audio: "/audios/audio-filtros-tipo-bolsa.mp4",
  titulo: "Filtro bolsa inox",
  descripcion:
    "Los filtros bolsa están construidos íntegramente en acero inoxidable, con altura regulable y fácil conexión. Los mismos se caracterizan por su alta capacidad de retención de partículas y grandes caudales de filtración.",
  tableHeaders: ["Modelo", "Caudal Máximo(Q)", "Material", "Entrada/Salida"],
  tableData: [
    {
      id: 1,
      propiedades: [
        "BFL-1 (Incluye 1 bolsa de 5M)",
        "20 m3/h",
        "Acero inox. 304",
        "Rosca hembra 2",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Filtro%20UV%20Bolsa%20Inox%20BFL-1,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: [
        "BFL-2 (Incluye 1 bolsa de 5M)",
        "40 m3/h",
        "Acero inox. 304",
        "Rosca hembra 2",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Filtro%20UV%20Bolsa%20Inox%20BFL-2,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function FiltroBolsaInoxPage() {
  return (
    <ProductPage
      audio={filtroBolsaInox.audio}
      titulo={filtroBolsaInox.titulo}
      imagen={filtroBolsaInox.imagen}
      tableHeaders={filtroBolsaInox.tableHeaders}
      tableData={filtroBolsaInox.tableData}
      descripcion={filtroBolsaInox.descripcion}
    >
      <div className="w-full flex justify-center items-center">
        <div className="w-full h-[300px] flex justify-start items-start gap-[50px] px-10 md:px-40">
          <div className="w-full flex flex-col justify-center items-start">
            <h3 className="font-bold text-2xl mb-2">Ventajas</h3>
            <p className="w-full">
              Se caracterizan por su alta capacidad de retención de partículas y
              grandes caudales de filtración. Ofrecen una gran superficie de
              filtración en un espacio compacto, lo que resulta en una vida útil
              prolongada y una menor frecuencia de cambios. Son capaces de
              manejar fluidos viscosos y cargas de contaminantes elevadas. La
              flexibilidad en la elección de materiales los hace adecuados para
              una amplia gama de aplicaciones químicas y de temperatura.
            </p>
          </div>
        </div>
      </div>
    </ProductPage>
  );
}
