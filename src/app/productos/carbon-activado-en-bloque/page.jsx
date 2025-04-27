import ProductPage from "@/components/ProductPage";
import React from "react";

const carbonActivadoEnBloque = {
  imagen:
    "/images/DetalleDeProducto/carbon-activado-en-bloque-imagen-producto.png",
  categoria: "Filtración",
  subcategoria: "Carbón Activado en Bloque",
  titulo: "Carbón activado en bloque",
  descripcion:
    "Los cartuchos de carbón activado en bloque son un material filtrante que absorbe sustancias orgánicas presentes en el agua.El carbón activado tiene una gran superficie específica, lo que le      permite absorber más que otros tipos de filtros. Retienen diversos contaminantes presentes en el agua, como toxinas, grasas, aceites, detergentes, insecticidas y trihalometanos, entre otros.",
  tableHeaders: ["Modelo", "Medida", "Micronaje"],
  tableData: [
    {
      id: 1,
      propiedades: ["CAB1025", '10x2,5"', "5"],
    },
    {
      id: 2,
      propiedades: ["CAB1045", '1"', "5"],
    },
    {
      id: 3,
      propiedades: ["CAB2025", '1"', "5"],
    },
    {
      id: 4,
      propiedades: ["CAB2045", '1"', "5"],
    },
  ],
};

export default function CarbonActivadoPage() {
  return (
    <ProductPage
      titulo={carbonActivadoEnBloque.titulo}
      imagen={carbonActivadoEnBloque.imagen}
      tableHeaders={carbonActivadoEnBloque.tableHeaders}
      tableData={carbonActivadoEnBloque.tableData}
      descripcion={carbonActivadoEnBloque.descripcion}
    >
      <div>
        <div className="w-full h-[300px] flex justify-start items-start gap-[50px] px-40">
          {/* <div className="w-[50%] flex flex-col justify-start items-start">
            <h3 className="font-bold text-2xl mb-2">Descripción</h3>
            <p></p>
          </div> */}
          <div className="w-[50%] flex flex-col justify-center items-start">
            <h3 className="font-bold text-2xl mb-2">Características</h3>
            <ul>
              <li>
                Medidas estándar compatibles con distintas marcas de carcasas.
              </li>
              <li>Filtración hasta 5 micrones.</li>
              <li> Temperatura máxima de trabajo: 35°C.</li>
              <li>Vida útil máxima: 1 año desde su primer uso</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[300px] flex justify-center items-center gap-[20px] px-40">
          <div className="flex w-[50%] h-full flex-col justify-start items-start">
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
              <li className="list-disc">Incluye postizo roscado de bronce.</li>
            </ul>
          </div>
          <div className="flex w-[50%] h-full flex-col justify-start items-start">
            <h3 className="w-full text-left font-bold text-2xl mb-2">Usos</h3>
            <ul>
              <li>
                Prefiltración/decloración previo a membranas de ósmosis inversa
              </li>
              <li>Nanofiltración</li>
              <li>Resinas</li>
              <li>Purificadores de agua</li>
              <li>Decloración previa a máquinas de café</li>
              <li>Máquinas de hielo</li>
              <li>Dispensadores de agua</li>
            </ul>
          </div>
        </div>
      </div>
    </ProductPage>
  );
}
