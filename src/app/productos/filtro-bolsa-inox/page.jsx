import ProductPage from "@/components/ProductPage";
import React from "react";

const filtroBolsaInox = {
  imagen: "/images/DetalleDeProducto/filtro-bolsa-inox-imagen-producto.png",
  categoria: "Filtración",
  subcategoria: "Filtro Bolsa Inox",
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
    },
    {
      id: 2,
      propiedades: [
        "BFL-2 (Incluye 1 bolsa de 5M)",
        "40 m3/h",
        "Acero inox. 304",
        "Rosca hembra 2",
      ],
    },
  ],
};

export default function FiltroBolsaInoxPage() {
  return (
    <ProductPage
      titulo={filtroBolsaInox.titulo}
      imagen={filtroBolsaInox.imagen}
      tableHeaders={filtroBolsaInox.tableHeaders}
      tableData={filtroBolsaInox.tableData}
      descripcion={filtroBolsaInox.descripcion}
    >
      <div>
        <div className="w-full h-[300px] flex justify-start items-start gap-[50px] px-20">
          <div className="w-[50%] flex flex-col justify-center items-start">
            <h3 className="font-bold text-2xl mb-2">Ventajas</h3>
            <p>
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
