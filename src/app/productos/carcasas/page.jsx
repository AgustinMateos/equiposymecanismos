import ProductPage from "@/components/ProductPage";
import React from "react";

const carcasas = {
  imagen: "/images/DetalleDeProducto/carcasas-imagen-producto.webp",
  categoria: "Filtración",
  subcategoria: "Carcasas",
  titulo: "Carcasas",
  audio: "",
  descripcion:
    "Las carcasas son componentes esenciales en los sistemas de filtración de agua, diseñadas para contener diversos cartuchos filtrantes como polipropileno, carbón activado o resinas. Están fabricadas con materiales de alta calidad, como polipropileno reforzado (HFPP), y proporcionan una protección segura y eficiente para los medios filtrantes.",
  tableHeaders: ["Modelo", "Caudal máximo", "Conexión", "Medida"],
  tableData: [
    {
      id: 1,
      propiedades: ["Mini Blue", "750 Lts/h", '3/4"', '10"x2.5"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Carcasa%20Mini%20Blue,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["Jumbo", "1.500 Lts/h", '1"', '10"x4.5"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Carcasa%20Jumbo%20,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["XL", "1.500 Lts/h", '1"', '20"x2.5"'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Carcasa%20XL,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ["Big Blue", "3.000 Lts/h", '1"', '20"x4.5'],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Carcasa%20Big%20Blue,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function CarcasasPage() {
  return (
    <ProductPage
      audio={carcasas.audio}
      titulo={carcasas.titulo}
      imagen={carcasas.imagen}
      tableHeaders={carcasas.tableHeaders}
      tableData={carcasas.tableData}
      descripcion={carcasas.descripcion}
    >
      <div className="w-full h-full text-black">
        <div className="w-full flex justify-center items-center mb-[50px]">
          <div className="w-[90%] gap-[20px] flex flex-col md:flex-row justify-center items-center">
            <img
              className="rounded-[12px] w-[350px] h-[350px]"
              src="/images/carcasa-1.png"
              alt="Imagen de carcasa"
            />
            <img
              className="rounded-[12px] w-[350px] h-[350px]"
              src="/images/carcasa-2.png"
              alt="Imagen de carcasa"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-[50px] py-5 px-10 md:px-40">
          <div>
            <h3 className="w-full text-left font-bold text-2xl mb-2">Usos</h3>
            <p className="w-full text-left">
              Las carcasas son ideales para una amplia gama de aplicaciones de
              tratamiento del agua, desde sistemas residenciales en el punto de
              entrada o salida de bomba sumergible, hasta instalaciones
              industriales/comerciales de gran escala. Son particularmente
              útiles en procesos que requieren filtración de sedimentos (sólidos
              en suspensión), reducción de cloro (eliminación de olores y
              sabores) o como pretratamiento para sistemas de ósmosis inversa,
              ablandadores de agua, etc.
            </p>
          </div>
          <div className="h-full w-full">
            <h3 className="font-bold text-2xl mb-2">Características</h3>
            <ul>
              <li className="list-disc">
                {" "}
                Disponibles en 4 medidas: Mini Blue (10x2,5"), XL (20x2,5"),
                Jumbo (10x4,5") y Big Blue (20x4,5").
              </li>
              <li className="list-disc">
                Rosca de entrada y salida tipo NPT cónica con postizo de bronce.
              </li>
              <li className="list-disc">
                Botón de purga para liberación de aire.
              </li>
              <li className="list-disc">
                Junta tórica en EPDM. Presión máxima operativa: 90 PSI (6.2
                BAR).
              </li>
            </ul>
          </div>
          <div className="h-full flex justify-start items-start w-full">
            <div className="">
              <h3 className="w-full text-left font-bold text-2xl mb-2">
                Ventajas
              </h3>
              <ul className="w-full">
                <li className="list-disc">
                  Incluye soporte de carcasa (escuadra).
                </li>
                <li className="list-disc">
                  Incluye llave (paleta) para apertura.
                </li>
                <li className="list-disc">Incluye botón de purga.</li>
                <li className="list-disc">
                  Incluye postizo roscado de bronce.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-start gap-[20px] w-full"></div>
    </ProductPage>
  );
}
