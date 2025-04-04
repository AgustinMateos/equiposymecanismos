"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const ProductosDeHogar = ({
  title,
  spanTitle,
  subTitle,
  spanSubtitle,
  data,
}) => {
  const [activeCategory, setActiveCategory] = useState("Filtración");
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const filtrarProductos = (category) => {
    console.log("Category: ", category);
    const filteredProducts = data.filter(
      (product) => product.categoria === category
    );
    console.log("FilteredProducts: ", filteredProducts);
    setProducts(filteredProducts);
  };

  useEffect(() => {
    console.log("State: ", products);
    filtrarProductos("Filtración");
  }, []);

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
    <section
      ref={sectionRef}
      className="md:px-20 px-5 2xl:px-40 w-full flex justify-center items-center"
    >
      <div className="w-full py-10 md:py-20 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full mb-10">
          <h3 className="w-full text-center text-3xl font-bold mb-5">
            {subTitle} <span className="text-[#60AFFF]">{spanSubtitle}</span>
          </h3>
          <h3 className="w-full text-center text-3xl font-bold">
            {title} <span className="text-[#60AFFF]">{spanTitle}.</span>
          </h3>
        </div>
        <div className="w-full flex flex-col justify-center items-center 2xl:w-[80%]">
          <nav className="w-full flex flex-col flex-row lg:flex-col gap-[10px] sm:gap-[20px] lg:gap-[0px] justify-center items-start lg:items-center mb-10">
            <ul className="flex flex-col lg:flex-row gap-[5px] justify-between items-center w-fit mb-5">
              <li
                className={
                  activeCategory === "Filtración"
                    ? "productNavbar-link-active"
                    : "productNavbar-link"
                }
                onClick={() => {
                  setActiveCategory("Filtración");
                  filtrarProductos("Filtración");
                }}
              >
                Filtración
              </li>
              <li
                className={
                  activeCategory === "Ablandadores de agua"
                    ? "productNavbar-link-active"
                    : "productNavbar-link"
                }
                onClick={() => {
                  setActiveCategory("Ablandadores de agua");
                  filtrarProductos("Ablandadores de agua");
                }}
              >
                Ablandadores de agua
              </li>
              <li
                className={
                  activeCategory === "Válvulas de control"
                    ? "productNavbar-link-active"
                    : "productNavbar-link"
                }
                onClick={() => {
                  setActiveCategory("Válvulas de control");
                  filtrarProductos("Válvulas de control");
                }}
              >
                Válvulas de control
              </li>
              <li
                className={
                  activeCategory === "Tanques"
                    ? "productNavbar-link-active"
                    : "productNavbar-link"
                }
                onClick={() => {
                  setActiveCategory("Tanques");
                  filtrarProductos("Tanques");
                }}
              >
                Tanques
              </li>
              <li
                className={
                  activeCategory === "Resinas y lechos"
                    ? "productNavbar-link-active"
                    : "productNavbar-link"
                }
                onClick={() => {
                  setActiveCategory("Resinas y lechos");
                  filtrarProductos("Resinas y lechos");
                }}
              >
                Resinas y lechos
              </li>
              <li
                className={
                  activeCategory === "Membranas y portamembranas"
                    ? "productNavbar-link-active"
                    : "productNavbar-link"
                }
                onClick={() => {
                  setActiveCategory("Membranas y portamembranas");
                  filtrarProductos("Membranas y portamembranas");
                }}
              >
                Membranas y portamembranas
              </li>
            </ul>
            <ul className="flex gap-[5px] justify-between items-center w-fit flex-col lg:flex-row">
              <li
                className={
                  activeCategory === "Instrumentación y control"
                    ? "productNavbar-link-active"
                    : "productNavbar-link"
                }
                onClick={() => {
                  setActiveCategory("Instrumentación y control");
                  filtrarProductos("Instrumentación y control");
                }}
              >
                Instrumentación y control
              </li>
              <li
                className={
                  activeCategory === "Dosificación"
                    ? "productNavbar-link-active"
                    : "productNavbar-link"
                }
                onClick={() => {
                  setActiveCategory("Dosificación");
                  filtrarProductos("Dosificación");
                }}
              >
                Dosificación
              </li>
              <li
                className={
                  activeCategory === "Soluciones Químicas"
                    ? "productNavbar-link-active"
                    : "productNavbar-link"
                }
                onClick={() => {
                  setActiveCategory("Soluciones Químicas");
                  filtrarProductos("Soluciones Químicas");
                }}
              >
                Soluciones Químicas
              </li>
              <li
                className={
                  activeCategory === "Desinfección"
                    ? "productNavbar-link-active"
                    : "productNavbar-link"
                }
                onClick={() => {
                  setActiveCategory("Desinfección");
                  filtrarProductos("Desinfección");
                }}
              >
                Desinfección
              </li>
              <li
                className={
                  activeCategory === "Conectores y mangueras"
                    ? "productNavbar-link-active"
                    : "productNavbar-link"
                }
                onClick={() => {
                  setActiveCategory("Conectores y mangueras");
                  filtrarProductos("Conectores y mangueras");
                }}
              >
                Conectores y mangueras
              </li>
              <li
                className={
                  activeCategory === "Electrodesionización"
                    ? "productNavbar-link-active"
                    : "productNavbar-link"
                }
                onClick={() => {
                  setActiveCategory("Electrodesionización");
                  filtrarProductos("Electrodesionización");
                }}
              >
                Electrodesionización
              </li>
            </ul>
          </nav>
          <div className="w-full md:justify-center flex sm:gap-[10px] gap-[5px] flex-wrap justify-center md:justify-start 2xl:justify-center items-center xl:w-[85%]">
            {products.map((product, i) => (
              <div
                key={product.id}
                className={`product-card ${
                  isVisible ? "scale-fade-in" : "opacity-0 scale-0"
                }`}
                style={{ animationDelay: `${i * 0.2}s` }} 
              >
                <div className="w-full flex justify-center items-center gap-[10px]">
                  <div className="flex justify-center items-center w-[30%]">
                    <img
                      className="product-card-img"
                      src={product.imagen}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start w-[70%]">
                    <h3 className="w-full text-left text-[18px] font-bold mb-5">
                      {product.titulo}
                    </h3>
                    <Link className="link-a-producto" href={product.linkHref}>
                      Ver detalles de producto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductosDeHogar;