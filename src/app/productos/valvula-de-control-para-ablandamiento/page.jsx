import ProductPage from "@/components/ProductPage";
import React from "react";

const ablandadoresAutomaticosDeAgua = {
  imagen:
    "/images/DetalleDeProducto/valvulas-de-control-para-ablandamiento-imagen-producto.png",
  categoria: "Válvulas de control",
  subcategoria: "Válvulas de control para ablandamiento",
  titulo: "Válvulas de control para ablandamiento",
  audio: "",
  descripcion:
    "Las válvulas de control automáticas Runxin son componentes esenciales en sistemas de tratamiento del agua, diseñadas para regular y automatizar el flujo de agua y las operaciones de regeneración en equipos como ablandadores y filtros. Fabricadas con materiales durables y resistentes a la corrosión, estas válvulas incorporan tecnología avanzada de control electrónico. Típicamente cuentan con una pantalla digital para la programación y monitoreo, múltiples puertos para las diferentes etapas del ciclo de tratamiento y un motor paso a paso para un control preciso del posicionamiento de la válvula.",
  tableHeaders: [
    "Modelo",
    "Volumen/Tiempo",
    "Entrada/Salida",
    "Diámetro de tanque",
    "Caudal máximo",
  ],
  tableData: [
    {
      id: 1,
      propiedades: ["Runxin F116Q1", "Tiempo", "1", '8" a 16"', "4.000 lts/h"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20control%20para%20ablandamiento%20Runxin%20F116Q1,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 2,
      propiedades: [
        "Runxin F116Q3",
        "Volumen",
        "1”",
        '8" a 16"',
        "4.000 lts/h",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20control%20para%20ablandamiento%20Runxin%20F116Q3,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 3,
      propiedades: ["Runxin F63C1", "Tiempo", "1", '8" a 16"', "4.000 lts/h"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20control%20para%20ablandamiento%20Runxin%20F63C1,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 4,
      propiedades: ["Runxin F63C3", "Volumen", "1", '8" a 16"', "4.000 lts/h"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20control%20para%20ablandamiento%20Runxin%20F63C3,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 5,
      propiedades: [
        "Runxin N74A3",
        "Volumen",
        "2",
        '18" a 30"',
        "10.000 lts/h",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20control%20para%20ablandamiento%20Runxin%20N74A3,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 6,
      propiedades: ["Runxin F111A3", "Volumen", "2", '18"x48"', "20.000 lts/h"],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20control%20para%20ablandamiento%20Runxin%20F111A3,%20cuál%20es%20el%20precio?%20Gracias.",
    },
    {
      id: 7,
      propiedades: [
        "Runxin F112A3",
        "Volumen",
        "2-1/2",
        '24" a 48"',
        "40.000 lts/h",
      ],
      link: "https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:Válvula%20de%20control%20para%20ablandamiento%20Runxin%20F112A3,%20cuál%20es%20el%20precio?%20Gracias.",
    },
  ],
};

export default function ValvulaDeControlParaAblandamientoPage() {
  return (
    <ProductPage
      audio={ablandadoresAutomaticosDeAgua.audio}
      titulo={ablandadoresAutomaticosDeAgua.titulo}
      imagen={ablandadoresAutomaticosDeAgua.imagen}
      tableHeaders={ablandadoresAutomaticosDeAgua.tableHeaders}
      tableData={ablandadoresAutomaticosDeAgua.tableData}
      descripcion={ablandadoresAutomaticosDeAgua.descripcion}
    ></ProductPage>
  );
}
