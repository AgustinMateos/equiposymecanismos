import ProductPage from "@/components/ProductPage";
import React from "react";

const repuestosParaCarcasas = {
  imagen:
    "/images/DetalleDeProducto/repuestos-para-carcasas-imagen-producto.png",
  categoria: "Filtración",
  audio: "",
  subcategoria: "Repuestos para carcasas",
  titulo: "Repuestos para carcasas",
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
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20Carcasa%20BFL-1,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: [
        "BFL-2 (Incluye 1 bolsa de 5M)",
        "40 m3/h",
        "Acero inox. 304",
        "Rosca hembra 2",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Repuesto%20para%20Carcasa%20BFL-2,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function RepuestosParaCarcasasPage() {
  return (
    <ProductPage
      audio={repuestosParaCarcasas.audio}
      titulo={repuestosParaCarcasas.titulo}
      imagen={repuestosParaCarcasas.imagen}
      tableHeaders={repuestosParaCarcasas.tableHeaders}
      tableData={repuestosParaCarcasas.tableData}
      descripcion={repuestosParaCarcasas.descripcion}
    >
      <div>
        <div className="w-full flex justify-start items-start gap-[50px] px-10 md:px-40">
          {/* <div className="w-[50%] flex flex-col justify-start items-start">
            <h3 className="font-bold text-2xl mb-2">Descripción</h3>
            <p>
              
            </p>
          </div> */}
          <div className="w-full flex flex-col justify-center items-start">
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
