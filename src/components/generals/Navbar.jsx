"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
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
    { text: "Hogar", width: "w-[100px]", link: "/#tratamientos-para-el-hogar" },
    {
      text: "Industrias",
      width: "w-[120px]",
      link: "/#tratamientos-para-la-industria",
    },
    { text: "Quienes somos", width: "w-[160px]", link: "/#sobre-nosotros" },
    {
      text: "Preguntas Frecuentes",
      width: "w-[160px]",
      link: "/#preguntas-frecuentes",
    },
    { text: "Contacto", width: "w-[120px]", link: "/#contacto" },
  ];

  return (
    // <nav className="w-full h-[70px] bg-white shadow-md fixed top-0 left-0 z-20">
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-[1rem] md:px-10 text-white px-4 py-6  flex items-center justify-between transition-all duration-300 ease-in-out ${
        scrollPosition > 0 ? "bg-[#00000096]" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-row justify-between items-center h-full px-4">
        <div>
          <h1 className="text-xl font-bold">Equipos y Mecanismos</h1>
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
