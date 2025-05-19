"use client";
import montserrat from "@/app/fonts/fonts";
import Link from "next/link";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { AudioPlayerComponent } from "./audio/AudioPlayerComponent";
import Slider from "./Slider";

const productosDestacados = [
  {
    id: 1,
    image: "/images/productosDestacados/ablandador-de-agua.jpg",
    title: "Ablandadores de agua",
    path: "/productos/ablandadores-automaticos-de-agua",
  },
  {
    id: 2,
    image: "/images/Productos/valvula-de-control-para-ablandamiento.png",
    title: "Válvulas de control",
    path: "/productos/valvula-de-control-para-ablandamiento",
  },
  {
    id: 3,
    image:
      "/images/Productos/tanques-de-plastico-reforzado-con-fibra-de-vidrio.png",
    title: "Tanques PRFV",
    path: "/productos/tanques-con-plastico-reforzado-con-fibra-de-vidrio",
  },
  {
    id: 4,
    image: "/images/Productos/portamembranas-de-4-de-agua-dulce.png",
    title: 'Portamembranas de 4"- Agua dulce',
    path: "/productos/portamembranas-de-4-agua-dulce",
  },
  {
    id: 5,
    image: "/images/Productos/bomba-dosificadora-automatica.png",
    title: "Bombas Dosificadoras automáticas",
    path: "/productos/bombas-dosificadoras-automaticas",
  },
  {
    id: 6,
    image: "/images/Productos/carcasa.jpg",
    title: "Carcasas",
    path: "/productos/carcasas",
  },
  {
    id: 7,
    image: "/images/Productos/filtro-bolsa-inox.png",
    title: "Filtro bolsa Inox",
    path: "/productos/filtro-bolsa-inox",
  },
  {
    id: 8,
    image: "/images/productosDestacados/purificador-de-agua-sobremesada.png",
    title: "Purificador sobremesada",
    path: "/productos/purificador-sobremesada",
  },
  {
    id: 9,
    image: "/images/productosDestacados/boya-antisarro.png",
    title: "Boya Antisarro",
    path: "/productos/boya-antisarro",
  },
];

export default function ProductPage({
  titulo,
  children,
  descripcion,
  tableHeaders,
  tableData,
  imagen,
  audio,
}) {
  console.log("TableData: ", tableData);
  console.log("TableHeaders: ", tableHeaders);

  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="max-w-[1500px] justify-center items-center flex flex-col w-full">
        <div className="w-full px-6 md:px-20 pt-24 flex justify-center items-center mb-5 ">
          <div className="w-full">
            <h1
              className={`w-full text-left text-[#60AFFF] text-4xl font-bold py-5 product-title ${montserrat.className}`}
            >
              {titulo}
            </h1>
            <div className="flex lg:flex-row flex-col gap-[50px] justify-center items-start px-0 md:px-10 py-10">
              <div className="w-full lg:w-[50%] flex flex-col justify-center items-center h-full">
                <img
                  src={imagen}
                  alt={`Imagen de ${titulo}`}
                  className="mb-5 rounded-[12px]"
                />
              </div>

              <div className="w-full lg:w-[50%] flex flex-col justify-center items-center">
                <h3
                  className={`w-full text-left font-bold text-2xl mb-5 ${montserrat.className}`}
                >
                  Descripción del producto
                </h3>
                <p
                  className={`${montserrat.className} mb-6 text-[14px] text-black leading-[18px]`}
                >
                  {descripcion}
                </p>
                {audio == "" ? null : (
                  <div className="w-full flex justify-start items-center">
                    <AudioPlayerComponent
                      audioSrc={audio}
                      title="Descripción detallada"
                      description="Conozca los detalles del producto y sus características."
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {tableData.length == 0 || tableHeaders.length == 0 ? null : (
          <div className="w-full h-auto pb-10 px-5 md:px-20 mb-10">
            <h2
              className={`w-full text-left text-[#60AFFF] text-3xl font-bold mb-5 ${montserrat.className}`}
            >
              Modelos y características
            </h2>
            <div className="w-full flex justify-center items-center">
              <table
                className={`w-full rounded-xl tabla-productos-especificaciones ${montserrat.className}`}
              >
                <thead className="bg-[#60AFFF] rounded-xl py-2">
                  <tr className="py-2 text-[10px] sm:text-[14px]">
                    {tableHeaders.map((header, index) => (
                      <th className="py-2 rounded-[5px]" key={index}>
                        {header}
                      </th>
                    ))}
                    <th className="py-2 rounded-[5px]">Acciones</th>
                  </tr>
                </thead>
                <tbody className="sm:text-[14px] text-[10px]">
                  {tableData.map((data, index) => (
                    <tr key={index}>
                      {data.propiedades.map((propiedad, index) => (
                        <td className="text-center py-2" key={index}>
                          {propiedad}
                        </td>
                      ))}
                      <td className="text-center py-2">
                        <Link
                          className="text-[#60AFFF] underline"
                          href={data.link}
                        >
                          Comprar
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      {children == undefined || children == null ? null : (
        <>
          <div
            ref={sectionRef}
            className="relative w-full bg-[#F0F0F0] flex flex-col justify-center items-center px-0 sm:px-20 2xl:px-60 py-20 md:py-40 2xl:py-60 text-black overflow-hidden h-auto"
          >
            {/* Bottom Wave */}
            <svg
              className="absolute bottom-0 left-0 w-full rotate-180"
              viewBox="0 0 1440 150"
              preserveAspectRatio="none"
            >
              <path
                d="M0,30 C150,90 300,0 450,60 C600,120 750,30 900,90 C1050,150 1200,60 1350,90 L1440,120 L1440,0 L0,0 Z"
                fill="#ffffff"
              />
            </svg>

            {/* Content */}
            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-[1500px]">{children}</div>
            </div>

            {/* Top Wave */}
            <svg
              className="absolute top-0 left-0 w-full rotate-0"
              viewBox="0 0 1440 150"
              preserveAspectRatio="none"
            >
              <path
                d="M0,30 C150,90 300,0 450,60 C600,120 750,30 900,90 C1050,150 1200,60 1350,90 L1440,120 L1440,0 L0,0 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </>
      )}

      <div
        id="productos-destacados"
        className="w-full flex flex-col justify-center items-center pt-10 pb-0"
      >
        <h2
          className={`${montserrat.className} font-bold w-full text-center text-3xl text-[#60AFFF]`}
        >
          Productos Relacionados
        </h2>
        <Slider cards={productosDestacados} />
        <div className="w-full flex justify-center items-center pb-10">
          <button className={`btn-principal ${montserrat.className}`}>
            <Link className="w-full h-full" href="/#productos">
              Volver a productos
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
