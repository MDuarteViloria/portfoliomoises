'use client';
import React, { useState } from "react";
import { useTheme } from '@/app/providers';

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [buttonOpen, setButtonOpen] = useState(false);
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full max-w-2xl flex justify-between mx-auto text-gray-900 dark:text-gray-100 shadow-md px-6 bg-white/80 dark:bg-gray-800 py-3 rounded-b-2xl relative">
      <div className="sm:hidden flex items-center justify-between w-full">       
        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <div
  className={`absolute top-16 left-1/4 transform -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-10 flex flex-col items-start gap-4 ${
    isMenuOpen ? "scale-y-100 opacity-100 max-h-screen" : "scale-y-0 opacity-0 max-h-0"
  } transition-all duration-300 origin-top`}
>
  {menuItems.map((item) => (
    <a
      key={item.name}
      href={item.href}
      className="w-full text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300"
    >
      {item.name}
    </a>
  ))}
</div>
      </div>
      {/* Botón para abrir el menú */}
      <div className="flex items-center gap-2 sm:mr-4">
      <button
          onClick={() => setButtonOpen(!buttonOpen)}
          className="block text-gray-700 dark:text-gray-300 focus:outline-none"
        >
          <i className="bx bx-sun text-2xl"></i>
      </button>
      </div>

        {buttonOpen && (
          <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-10">
            <button
              onClick={() => setTheme("light")}
              className={`w-full px-4 py-2 mb-2 rounded ${
                theme === "light"
                  ? "bg-primary text-black"
                  : "bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-300"
              }`}
            >
              Claro
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`w-full px-4 py-2 mb-2 rounded ${
                theme === "dark"
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-300"
              }`}
            >
              Oscuro
            </button>
          </div>
        )}
      

      {/* Menú de escritorio */}
      <div className="hidden sm:flex gap-8 items-center">
        {menuItems.slice(0, 3).map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="hover:text-primary text-gray-700 dark:text-gray-300 transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
        <a
          href="#contact"
          className="bg-primary text-black dark:text-white rounded-xl px-4 py-2 hover:bg-primary/90 transition-all duration-300"
        >
          Contact
        </a>
      </div>

      {/* Menú desplegable en móviles */}
      
    </nav>
  );
}