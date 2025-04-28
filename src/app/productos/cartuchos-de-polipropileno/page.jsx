import ProductPage from "@/components/ProductPage";
import React from "react";

const cartuchosDePolipropileno = {
  imagen:
    "/images/DetalleDeProducto/cartuchos-de-polipropileno-imagen-producto.png",
  categoria: "Filtración",
  subcategoria: "Cartuchos de polipropileno",
  titulo: "Cartuchos de polipropileno",
  audio: "",
  descripcion:
    "Los cartuchos de polipropileno son ampliamente utilizados en sistemas de tratamiento del agua para la eliminación eficaz de partículas y sedimentos. Fabricados a partir de fibras de polipropileno termosoldadas, estos cartuchos ofrecen una solución económica y eficiente para la filtración tangencial del agua.",
  tableHeaders: ["Modelo", "Medida", "Micronaje"],
  tableData: [
    {
      id: 1,
      propiedades: ["PP1025", '10x2,5"', "1-5-20"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Cartucho%20de%20Polipropileno%20PP1025,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["PP1045", '10x4,5"', "1-5-20"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Cartucho%20de%20Polipropileno%20PP1045,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["PP2025", '20x2,5"', "1-5-20"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Cartucho%20de%20Polipropileno%20PP2025,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ["PP2045", '20x4,5"', "1-5-20"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Cartucho%20de%20Polipropileno%20PP2045,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function CartuchosDePolipropilenoPage() {
  return (
    <ProductPage
      audio={cartuchosDePolipropileno.audio}
      titulo={cartuchosDePolipropileno.titulo}
      imagen={cartuchosDePolipropileno.imagen}
      tableHeaders={cartuchosDePolipropileno.tableHeaders}
      tableData={cartuchosDePolipropileno.tableData}
      descripcion={cartuchosDePolipropileno.descripcion}
    >
      <div>
        <div className="w-full h-[300px] flex justify-start items-start gap-[50px] px-40">
          {/* <div className="w-[50%] flex flex-col justify-start items-start">
            <h3 className="font-bold text-2xl mb-2">Descripción</h3>
            <p>
 
            </p>
          </div> */}
          <div className="w-[50%] flex flex-col justify-center items-start">
            <h3 className="font-bold text-2xl mb-2">Características</h3>
            <p>
              Los cartuchos de polipropileno se caracterizan por su estructura
              de densidad gradual, que permite una filtración en profundidad.
              Esta configuración única permite que las partículas más grandes
              queden atrapadas en las capas exteriores del cartucho, mientras
              que las partículas más finas son capturadas en las capas
              interiores.
            </p>
          </div>
        </div>
        <div className="w-full h-[300px] flex justify-center items-center gap-[20px] px-40">
          <div className="flex w-[50%] h-full flex-col justify-start items-start">
            <h3 className="w-full text-left font-bold text-2xl mb-2">
              Mantenimiento y reemplazo
            </h3>
            <p>
              Aunque los cartuchos de polipropileno NO son lavables ni
              regenerables, su bajo costo los hace económicos para reemplazar
              regularmente. El intervalo de reemplazo depende de la calidad del
              agua de entrada y el uso, pero generalmente varía entre 1 y 6
              meses. Es importante monitorear la presión de agua a la salida del
              filtro con un manómetro para determinar el momento óptimo del
              reemplazo.
            </p>
          </div>
        </div>
      </div>
    </ProductPage>
  );
}
