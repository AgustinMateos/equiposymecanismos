import ProductPage from "@/components/ProductPage";
import React from "react";

const membranasRoLg = {
  imagen: "/images/DetalleDeProducto/membrana-ro-lg-producto-imagen.png",
  categoria: "Válvulas de control",
  subcategoria: "Membranas RO LG",
  audio: "/audios/audio-membranas.mp4",
  titulo: "Membranas RO LG",
  descripcion:
    "Las membranas de ósmosis inversa para Brackish Water NanoH2O™ de LG Chem se utilizan en diferentes aplicaciones residenciales, comerciales, industriales y municipales. LG BWRO, que incorpora la innovadora tecnología de membranas nanocompuestas de película fina (TFN), se ofrece en la  configuración estándar del sector y se adapta fácilmente a las plantas nuevas o ya existentes de ósmosis inversa. Clientes de más de 50 países de todo el mundo ya operan con estas membranas LG BWRO.",
  tableHeaders: [
    "Modelo",
    "Tipo",
    "Diámetro",
    "Flujo promedio de permeado",
    "Flujo mín. de rechazo",
    "Flujo máx. de entrada",
    "Superficie(m2)",
    "Tipo de agua",
  ],
  tableData: [
    {
      id: 1,
      propiedades: [
        "CW4040SF",
        "Ultra baja presión",
        '4"',
        "300 lts/h",
        "700 lts/h",
        "3.600 lts/h",
        "7,9",
        "Brackish",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Membrana%20RO%20LG%20CW4040SF,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: [
        "BW4040ES",
        "Baja presión",
        '4"',
        "300 lts/h",
        "700 lts/h",
        "3.600 lts/h",
        "7,9",
        "Brackish",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Membrana%20RO%20LG%20BW4040ES,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: [
        "BW4040R",
        "Alto flujo Alto rechazo",
        '4"',
        "300 lts/h",
        "700 lts/h",
        "3.600 lts/h",
        "9,5",
        "Brackish",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Membrana%20RO%20LG%20BW4040R,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: [
        "BW440ES",
        "Baja presión",
        '8"',
        "1.250 lts/h",
        "3.000 lts/h",
        "16.000 lts/h",
        "41",
        "Brackish",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Membrana%20RO%20LG%20BW440ES,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: [
        "BW440R",
        "Alto flujo Alto rechazo",
        '8"',
        "1.250 lts/h",
        "3.000 lts/h",
        "16.000 lts/h",
        "41",
        "Brackish",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Membrana%20RO%20LG%20BW440R,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: [
        "SW4040R",
        "Alto flujo Alto Rechazo",
        '4"',
        "300 lts/h",
        "700 lts/h",
        "3.600 lts/h",
        "7,4",
        "Agua de mar",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Membrana%20RO%20LG%20SW4040R,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 7,
      propiedades: [
        "SW4040R",
        "Alto flujo Alto Rechazo",
        '8"',
        "1.250 lts/h",
        "3.000 lts/h",
        "16.000 lts/h",
        "41",
        "Agua de mar",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Membrana%20RO%20LG%20SW4040R,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function MembranasRoLGPage() {
  return (
    <ProductPage
      titulo={membranasRoLg.titulo}
      imagen={membranasRoLg.imagen}
      tableHeaders={membranasRoLg.tableHeaders}
      tableData={membranasRoLg.tableData}
      descripcion={membranasRoLg.descripcion}
    ></ProductPage>
  );
}
