"use client";
import Link from "next/link";
import React from "react";

const ProductosDeHogar = ({
  title,
  spanTitle,
  subTitle,
  spanSubtitle,
  data,
}) => {
  console.log("data: ", data);

  const [activeCategory, setActiveCategory] = React.useState("Filtración");
  const [products, setProducts] = React.useState([]);

  const filtrarProductos = (category) => {
    console.log("Category: ", category);

    const filteredProducts = data.filter(
      (product) => product.categoria === category
    );
    console.log("FilteredProducts: ", filteredProducts);
    setProducts(filteredProducts);
  };

  React.useEffect(() => {
    console.log("State: ", products);
    filtrarProductos("Filtración");
  }, []);

  return (
    <section className="px-20 2xl:px-40 w-full flex justify-center items-center">
      <div className="w-full py-20 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full mb-10">
          <h3 className="w-full text-center text-3xl font-bold">
            {subTitle} <span className="text-[#60AFFF]">{spanSubtitle}</span>
          </h3>
          <h3 className="w-full text-center text-3xl font-bold">
            {title} <span className="text-[#60AFFF]">{spanTitle}.</span>
          </h3>
        </div>
        <div className="w-full flex flex-col justify-center items-center 2xl:w-[80%]">
          <nav className="w-full flex flex-col justify-center items-center mb-10">
            <ul className="flex gap-[5px] justify-between items-center w-fit mb-5">
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
            <ul className="flex gap-[5px] justify-between items-center w-fit">
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
          <div className="w-full flex gap-[10px] flex-wrap justify-start 2xl:justify-center items-center xl:w-[85%]">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="w-full flex justify-center items-center gap-[10px]">
                  <div className="flex justify-center items-center w-[30%]">
                    <img src={product.imagen} alt="" />
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
