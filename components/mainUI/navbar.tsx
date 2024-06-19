// C:\Users\Gio\OneDrive\Desktop\ruizTechServices\osvaldy_barber\websites\nextjs\website_1_osvaldy_barber\components\mainUI\navbar.tsx
"use client";
import { useState } from 'react';

const BurgerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-fit text-white absolute top-10  left-[300px] md:top-0 md:left-[1200px] z-10">
      <div className="flex justify-between items-center p-4">
        <div>
          <button
            onClick={toggleMenu}
            className="focus:outline-none menu-button"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-between items-center">
              <span
                className={`block h-1 w-full bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-1 w-full bg-white transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-1 w-full bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-[300px] h-screen bg-gray-800 text-white flex flex-col justify-center items-center z-50 overflow-hidden transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
      >
        <a href="/" className="mb-4 text-xl">Home</a>
        <a href="#" className="mb-4 text-xl">Prices</a>
        <a href="#" className="mb-4 text-xl">Gallery</a>
        <a href="#" className="mb-4 text-xl">Login/Register</a>
        <div className="absolute bottom-4">
          <div className="text-2xl font-bold">
            <img src="/images/logo-4.png" alt="Logo" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .menu-button span {
          transition: all 0.3s ease;
        }

        .menu-button span:nth-child(1) {
          transform: ${isOpen ? 'rotate(45deg) translate(5px, 10px)' : 'rotate(0)'};
        }

        .menu-button span:nth-child(2) {
          opacity: ${isOpen ? 0 : 1};
        }

        .menu-button span:nth-child(3) {
          transform: ${isOpen ? 'rotate(-45deg) translate(5px, -8px)' : 'rotate(0)'};
        }
      `}</style>
    </nav>
  );
};

export default BurgerNavbar;
