"use client";

import montserrat from "@/app/fonts/fonts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ bgColorMovement, bgColorStatic }) => {
  const [isOpen, setIsOpen] = useState(false);
  //Manejo del cambio de color del navbar en el Scroll
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //Data para el Header
  const menuItems = [
    { text: "Soluciones", width: "w-[100px]", link: "/#soluciones" },
    { text: "Hogar", width: "w-[100px]", link: "/#tratamientos-para-el-hogar" },
    {
      text: "Industrias",
      width: "w-[120px]",
      link: "/#tratamientos-para-la-industria",
    },
    { text: "Productos", width: "w-[160px]", link: "/#productos" },
    {
      text: "Sobre nosotros",
      width: "w-[160px]",
      link: "/#sobre-nosotros",
    },
    {
      text: "FAQs",
      width: "w-[120px]",
      link: "/#preguntas-frecuentes",
    },
  ];

  return (
    // <nav className="w-full h-[70px] bg-white shadow-md fixed top-0 left-0 z-20">
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-white p-3  flex items-center justify-center transition-all duration-300 ease-in-out ${montserrat.className}`}
    >
      <div
        className={`px-4 md:px-10 py-4 rounded-[10px] w-full max-w-[1600px] flex flex-row justify-between items-center h-full ${
          scrollPosition > 0 ? `${bgColorMovement}` : `${bgColorStatic}`
        }`}
      >
        <div>
          <Link href="/">
            <h1 className="text-xl font-bold">Equipos y Mecanismos</h1>
          </Link>
        </div>

        <div className="hidden md:flex flex-row items-center">
          {menuItems.map((item, index) => (
            <p
              key={index}
              className={`${item.width} text-center hover:text-blue-500 transition-colors cursor-pointer`}
            >
              <Link href={item.link}> {item.text}</Link>
            </p>
          ))}
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-[70px] left-0 w-full bg-white shadow-md">
          {menuItems.map((item, index) => (
            <p
              key={index}
              className="w-full text-center py-3 hover:bg-gray-100 hover:text-blue-500 transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.text}
            </p>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
