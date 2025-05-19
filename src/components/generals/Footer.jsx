"use client";
import montserrat from "@/app/fonts/fonts";
import Link from "next/link";
import React from "react";
//Animaciones
import { motion } from "framer-motion";

const socialIconsVariant = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

const Footer = ({}) => {
  return (
    <footer
      className={`w-full flex justify-center items-center flex-col p-3 ${montserrat.className}`}
    >
      <div className="text-white flex flex-col justify-start items-center bg-[#2A5AA7] w-full h-full rounded-[10px] p-5">
        <div className="footer-info-container pb-10 w-full flex justify-center items-start gap-[25px] max-w-[1500px]">
          <div className="flex flex-col md:flex-row gap-[30px] w-[90%] justify-between items-start">
            <div>
              <ul>
                <li className="font-bold mb-[10px]">
                  <strong>Soluciones</strong>
                </li>
                {/* <li className="mb-[10px]">
                  <Link
                    className="nav__link"
                    href="/#tratamientos-para-el-hogar"
                  >
                    Hogar
                  </Link>
                </li> */}
                <li>
                  <Link
                    className="nav__link"
                    href="/#tratamientos-para-la-industria"
                  >
                    Industria
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold mb-[10px]">
                  <strong>Productos</strong>
                </li>
                <li className="mb-[10px]">
                  <Link className="nav__link" href="/#productos">
                    Todos los productos
                  </Link>
                </li>
                <li>
                  <Link className="nav__link" href="/#productos-destacados">
                    Productos destacados
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold mb-[10px]">
                  <strong>Empresa</strong>
                </li>
                <li className="mb-[10px]">
                  <Link className="nav__link" href="/#sobre-nosotros">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link className="nav__link" href="/#preguntas-frecuentes">
                    Preguntas frecuentes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold mb-[10px]">
                  <strong>Mail</strong>
                </li>
                <li className="mb-[10px]">
                  <a
                    className="nav__link"
                    href="mailto:info@equiposymecanismos.com.ar"
                  >
                    info@equiposymecanismos.com.ar
                  </a>
                </li>
                <li className="font-bold mb-[10px]">
                  <strong>Teléfono</strong>
                </li>
                <li>1158085500</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-[10px]">
                <strong>Nuestras redes</strong>
              </h4>
              <ul className="flex gap-[5px] justfy-center items-center w-full flex justify-center gap-[20px] items-center">
                <motion.li variants={socialIconsVariant} whileHover="hover">
                  <a href="https://www.facebook.com/EQUIMECAR">
                    <img
                      className="footer-social-icon"
                      src="/icons/footer/facebook.png"
                      alt="Facebook icon"
                    />
                  </a>
                </motion.li>
                <motion.li variants={socialIconsVariant} whileHover="hover">
                  <a href="https://www.instagram.com/equiposymecanismos/">
                    <img
                      className="footer-social-icon"
                      src="/icons/footer/instagram.png"
                      alt="Instagram Icon"
                    />
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
