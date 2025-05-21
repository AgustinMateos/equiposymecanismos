import ProductPage from "@/components/ProductPage";
import React from "react";

const boyaAntisarro = {
  imagen: "/images/productosDestacados/boya-antisarro.png",
  categoria: "Dosificación",
  audio: "",
  subcategoria: "Boya antisarro",
  titulo: "Boya antisarro",
  descripcion:
    "La boya antisarro es una solución práctica y sin mantenimiento para prevenir la acumulación de sarro en tanques de agua. Al liberar gradualmente agentes antisarro, ayuda a proteger cañerías, electrodomésticos y sistemas de calefacción, mejorando su rendimiento y prolongando su vida útil.Ideal para viviendas, comercios y edificios con agua dura. Cuidá tu instalación desde el origen con una solución eficiente y accesible.",
  tableHeaders: [],
  tableData: [],
};

export default function BombasDosificadorasAutomaticasPage() {
  return (
    <ProductPage
      audio={boyaAntisarro.audio}
      titulo={boyaAntisarro.titulo}
      imagen={boyaAntisarro.imagen}
      tableHeaders={boyaAntisarro.tableHeaders}
      tableData={boyaAntisarro.tableData}
      descripcion={boyaAntisarro.descripcion}
    >
      {" "}
      <div className="w-full flex justify-center items-center">
        <div className="w-[85%] flex flex-col md:flex-row justify-center items-center gap-[20px]">
          <img
            className="w-[350px] h-[350px] rounded-[12px]"
            src="/images/boya-antisarro-1.jpeg"
            alt=""
          />
          <img
            className="w-[350px] h-[350px] rounded-[12px]"
            src="/images/boya-antisarro-2.jpeg"
            alt=""
          />
        </div>
      </div>
    </ProductPage>
  );
}
