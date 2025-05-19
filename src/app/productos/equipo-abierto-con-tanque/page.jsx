import ProductPage from "@/components/ProductPage";
import React from "react";

const equipoAbiertoConTanque = {
  imagen:
    "/images/DetalleDeProducto/equipo-abierto-con-tanque-producto-imagen.png",
  categoria: "Osmosis Inversa",
  audio: "",
  subcategoria: "Equipo abierto con tanque",
  titulo: "Equipo abierto con tanque",
  descripcion:
    "Disponemos de equipos abiertos con tanque, de gran diseño y con capacidad de producción de 600 galones dia. Estos sistemas tienen la capacidad de eliminar los siguientes contaminantes: Sales, Partículas,Coloides, Bacterias, Pirogenos, Arsénico y otros metales pesados, Nitratos, Nitritos, Calcio, Magnesio, Potasio, Fósforo, Carbonatos. Instalación muy simple, y un sistema de recambio de piezas filtrantes innovador, pensado para hacerte la vida más fácil. Comercializamos equipos de 4/5/6 etapas en la modalidad con tanque colector.",
  tableHeaders: [],
  tableData: [],
};

export default function EquipoAbiertoConTanquePage() {
  return (
    <ProductPage
      audio={equipoAbiertoConTanque.audio}
      titulo={equipoAbiertoConTanque.titulo}
      imagen={equipoAbiertoConTanque.imagen}
      tableHeaders={equipoAbiertoConTanque.tableHeaders}
      tableData={equipoAbiertoConTanque.tableData}
      descripcion={equipoAbiertoConTanque.descripcion}
    >
      <div className="w-full h-full text-black">
        <div className="w-full flex justify-center items-center mb-[50px]">
          <div className="w-[90%] gap-[20px] flex flex-col md:flex-row justify-center items-center">
            <img
              className="rounded-[12px] w-[350px] h-[350px]"
              src="/images/DetalleDeProducto/equipo-abierto-con-tanque-producto-imagen-1.jpeg"
              alt="Imagen de equipo de osmosis inversa cerrado y sin tanque"
            />
            <img
              className="rounded-[12px] w-[350px] h-[350px]"
              src="/images/DetalleDeProducto/equipo-abierto-con-tanque-producto-imagen-2.jpeg"
              alt="Imagen de equipo de osmosis inversa cerrado y sin tanque"
            />
          </div>
        </div>
      </div>
    </ProductPage>
  );
}
