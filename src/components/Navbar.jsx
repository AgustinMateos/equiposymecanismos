'use client'; 

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const menuItems = [
    { text: 'Soluciones', width: 'w-[120px]' },
    { text: 'Hogar', width: 'w-[100px]' },
    { text: 'Industrias', width: 'w-[120px]' },
    { text: 'Quienes somos', width: 'w-[160px]' },
    { text: 'Preguntas Frecuentes', width: 'w-[160px]' },
    { text: 'Contacto', width: 'w-[120px]' },
  ];

  return (
    <div className="w-full h-[70px] bg-white shadow-md fixed top-0 left-0 z-20">
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
              {item.text}
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
    </div>
  );
};

export default Navbar;