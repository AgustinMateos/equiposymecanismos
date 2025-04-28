import ProductPage from "@/components/ProductPage";
import React from "react";

const carbonActivadoEnBloque = {
  imagen:
    "/images/DetalleDeProducto/carbon-activado-en-bloque-imagen-producto.png",
  categoria: "Filtración",
  subcategoria: "Carbón Activado en Bloque",
  titulo: "Carbón activado en bloque",
  audio: "",
  descripcion:
    "Los cartuchos de carbón activado en bloque son un material filtrante que absorbe sustancias orgánicas presentes en el agua.El carbón activado tiene una gran superficie específica, lo que le      permite absorber más que otros tipos de filtros. Retienen diversos contaminantes presentes en el agua, como toxinas, grasas, aceites, detergentes, insecticidas y trihalometanos, entre otros.",
  tableHeaders: ["Modelo", "Medida", "Micronaje"],
  tableData: [
    {
      id: 1,
      propiedades: ["CAB1025", '10x2,5"', "5"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Carbón%20Activado%20CAB1025,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["CAB1045", '1"', "5"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Carbón%20Activado%20CAB1045,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["CAB2025", '1"', "5"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Carbón%20Activado%20CAB2025,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ["CAB2045", '1"', "5"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Carbón%20Activado%20CAB2045,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function CarbonActivadoPage() {
  return (
    <ProductPage
      audio={carbonActivadoEnBloque.audio}
      titulo={carbonActivadoEnBloque.titulo}
      imagen={carbonActivadoEnBloque.imagen}
      tableHeaders={carbonActivadoEnBloque.tableHeaders}
      tableData={carbonActivadoEnBloque.tableData}
      descripcion={carbonActivadoEnBloque.descripcion}
    >
      <div className="w-full h-full px-10 text-black">
        <div className="w-full flex flex-col justify-start items-start gap-[20px] py-5 px-0">
          <div>
            <h3 className="w-full text-left font-bold text-2xl mb-2">
              Características
            </h3>
            <ul>
              <li className="list-disc">
                Medidas estándar compatibles con distintas marcas de carcasas.
              </li>
              <li className="list-disc">Filtración hasta 5 micrones.</li>
              <li className="list-disc">
                {" "}
                Temperatura máxima de trabajo: 35°C.
              </li>
              <li className="list-disc">
                Vida útil máxima: 1 año desde su primer uso
              </li>
            </ul>
          </div>
          <div className="h-full w-full">
            <h3 className="font-bold text-2xl mb-2">Ventajas</h3>
            <ul>
              <li className="list-disc">
                Incluye soporte de carcasa (escuadra).
              </li>
              <li className="list-disc">
                Incluye llave (paleta) para apertura.
              </li>
              <li className="list-disc">Incluye botón de purga.</li>
              <li className="list-disc">Incluye postizo roscado de bronce.</li>
            </ul>
          </div>
          <div className="h-full flex justify-start items-start w-full">
            <div className="">
              <h3 className="w-full text-left font-bold text-2xl mb-2">Usos</h3>
              <ul className="w-full">
                <li className="list-disc">
                  Prefiltración/decloración previo a membranas de ósmosis
                  inversa
                </li>
                <li className="list-disc">Nanofiltración</li>
                <li className="list-disc">Resinas</li>
                <li className="list-disc">Purificadores de agua</li>
                <li className="list-disc">
                  Decloración previa a máquinas de café
                </li>
                <li className="list-disc">Máquinas de hielo</li>
                <li className="list-disc">Dispensadores de agua</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ProductPage>
  );
}
