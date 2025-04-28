import ProductPage from "@/components/ProductPage";
import React from "react";

const valvulasDeSalmuera = {
  imagen: "/images/DetalleDeProducto/valvula-de-salmuera-producto-imagen.png",
  categoria: "Válvulas de control",
  audio: "",
  subcategoria: "Válvulas de salmuera",
  titulo: "Válvulas de salmuera",
  descripcion:
    "Las válvulas de salmuera son de gran importancia para el correcto funcionamiento de las válvulas de control. Estas evitan el ingreso de aire en el ciclo de succión de salmuera, evitando así que se despurgue el sistema y que pueda sufrir golpes de ariete. NO se recomienda el uso de una válvula automática sin su correspondiente válvula de salmuera.",
  tableHeaders: ["Modelo", "Tipo", "Sección", "Compatibilidad con válvula"],
  tableData: [
    {
      id: 1,
      propiedades: ["VS38", 'Air check 3/8"', '3/8"', "F116/F63"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20salmuera%20VS38,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: ["F434", 'Air check 3/8" con flotante', '3/8"', "F116/F63"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20salmuera%20F434,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: [
        "VAF",
        'Válvula de alto flujo 3/4"',
        '3/4"',
        "N74/F111/F122",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20salmuera%20VAF,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: [
        "F454",
        'Válvula de alto flujo 3/4" con flotante',
        '3/4"',
        "N74/F111/F122",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20salmuera%20F454,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function ValvulaDeSalmueraPage() {
  return (
    <ProductPage
      audio={valvulasDeSalmuera.audio}
      titulo={valvulasDeSalmuera.titulo}
      imagen={valvulasDeSalmuera.imagen}
      tableHeaders={valvulasDeSalmuera.tableHeaders}
      tableData={valvulasDeSalmuera.tableData}
      descripcion={valvulasDeSalmuera.descripcion}
    ></ProductPage>
  );
}
