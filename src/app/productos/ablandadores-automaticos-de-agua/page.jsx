import ProductPage from "@/components/ProductPage";
import React from "react";

const ablandadoresAutomaticosDeAgua = {
  imagen:
    "/images/DetalleDeProducto/ablandadores-automaticos-de-agua-imagen-producto.png",
  categoria: "Filtración",
  subcategoria: "Ablandador automático de agua",
  titulo: "Ablandador automático de agua",
  audio: "",
  descripcion:
    "El ablandador automático es un sistema de tratamiento del agua diseñado para eliminar la dureza total (sarro) presente en el agua, mediante un proceso de intercambio iónico. Este equipo se     programa para regenerar la resina de intercambio iónico a través de intervalos por tiempo o por volumen, según el modelo correspondiente. El sistema consta de un tanque PRFV para acopio de resina, un tanque de rotomoldeo para salmuera y una válvula de control automática Runxin (por volumen o por tiempo).",
  tableHeaders: [
    "Modelo",
    "Tipo de refrigeración",
    "Entrada/Salida",
    "Medida de tanque",
    "Cant. de resina",
    "Tanque Salero",
  ],
  tableData: [
    {
      id: 1,
      propiedades: [
        "Runxin F63C1",
        "Tiempo",
        "1",
        "8x44”",
        "25 lts.",
        "50 lts",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Runxin%20F63C1,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: [
        "Runxin F63C3",
        "Volumen",
        "1",
        "8x44”",
        "25 lts.",
        "50 lts",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Runxin%20F63C3,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: [
        "Runxin F63C1",
        "Tiempo",
        "1",
        "10x54”",
        "50 lts.",
        "75 lts",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Runxin%20F63C1,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: [
        "Runxin F63C3",
        "Volumen",
        "1",
        "10x54”",
        "50 lts.",
        "75 lts",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Runxin%20F63C3,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function AblandadoresDeAguaPage() {
  return (
    <ProductPage
      audio={ablandadoresAutomaticosDeAgua.audio}
      titulo={ablandadoresAutomaticosDeAgua.titulo}
      imagen={ablandadoresAutomaticosDeAgua.imagen}
      tableHeaders={ablandadoresAutomaticosDeAgua.tableHeaders}
      tableData={ablandadoresAutomaticosDeAgua.tableData}
      descripcion={ablandadoresAutomaticosDeAgua.descripcion}
    >
      <div>
        <div className="w-full  flex justify-start items-start gap-[50px] px-40">
          <div className="flex w-full h-full flex-col justify-start items-start">
            <h3 className="w-full text-left font-bold text-2xl mb-2">Usos</h3>
            <ul>
              <li className="list-disc">
                <strong>Industriales:</strong>Torres de enfriamiento, chillers,
                calderas, sistemas de ósmosis inversa, circuitos de calefacción,
                lavados, etc.
              </li>
              <li className="list-disc">
                <strong>Comerciales:</strong>Natatorios, máquinas de café,
                máquinas de hielo, hotelería, restaurantes, tintorerías,
                lavaderos, hidromasajes, etc.
              </li>
              <li className="list-disc">
                <strong>Residenciales:</strong> Termotanques, calderas,
                lavarropas, lavavajillas, griferías, vajilla, etc.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ProductPage>
  );
}
