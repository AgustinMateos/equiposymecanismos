import ProductPage from "@/components/ProductPage";
import React from "react";

const equipoCerradoSinTanque = {
  imagen:
    "/images/DetalleDeProducto/equipo-cerrado-sin-tanque-imagen-producto.png",
  categoria: "Osmosis Inversa",
  audio: "",
  subcategoria: "Equipo cerrado sin tanque",
  titulo: "Equipo cerrado sin tanque",
  descripcion:
    "Disponemos de equipos cerrados sin tanque, de gran diseño y con capacidad de producción de 600 galones dia. Estos sistemas tienen la capacidad de eliminar los siguientes contaminantes: Sales, Partículas,Coloides, Bacterias, Pirogenos, Arsénico y otros metales pesados, Nitratos, Nitritos, Calcio, Magnesio, Potasio, Fósforo, Carbonatos. Instalación muy simple, y un sistema de recambio de piezas filtrantes innovador, pensado para hacerte la vida más fácil. Comercializamos equipos de 4/5/6 etapas en la modalidad con tanque colector.",
  tableHeaders: [],
  tableData: [],
};

export default function EquipoCerradoSinTanquePage() {
  return (
    <ProductPage
      audio={equipoCerradoSinTanque.audio}
      titulo={equipoCerradoSinTanque.titulo}
      imagen={equipoCerradoSinTanque.imagen}
      tableHeaders={equipoCerradoSinTanque.tableHeaders}
      tableData={equipoCerradoSinTanque.tableData}
      descripcion={equipoCerradoSinTanque.descripcion}
    >
      <div className="w-full h-full text-black">
        <div className="w-full flex flex-col justify-center items-center mb-[50px]">
          <div className="w-[90%] gap-[20px] flex flex-col md:flex-row justify-center items-center mb-[50px]">
            <img
              className="rounded-[12px] w-[350px] h-[350px]"
              src="/images/DetalleDeProducto/equipo-cerrado-sin-tanque-imagen-producto-2.png"
              alt="Imagen de equipo de osmosis inversa cerrado y sin tanque"
            />
            <img
              className="rounded-[12px] w-[350px] h-[350px]"
              src="/images/DetalleDeProducto/equipo-cerrado-sin-tanque-imagen-producto-3.png"
              alt="Imagen de equipo de osmosis inversa cerrado y sin tanque"
            />
          </div>
          <div className="w-full flex justify-center items-center mt-[20px]">
            <video
              className="rounded-[20px] w-[314px] height-[565px]"
              src="/videos/equipo-cerrado-osmosis.mp4"
              controls={true}
            ></video>
          </div>
        </div>
      </div>
    </ProductPage>
  );
}
