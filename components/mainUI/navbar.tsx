"use client";
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { useState } from 'react';

const BurgerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-fit text-white absolute top-10 left-[300px] md:top-0 md:left-[1200px] z-20">
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
        <Link href="/" className="mb-4 text-xl" onClick={closeMenu}>Home</Link>
        <Link href="#prices-section" className="mb-4 text-xl" onClick={closeMenu}>Prices</Link>{/*I want to hide these when it is not on the home page. I want these links to be seen ONLY in the home page <====================*/}
        <Link href="#gallery" className="mb-4 text-xl" onClick={closeMenu}>Gallery</Link>{/*I want to hide these when it is not on the home page. I want these links to be seen ONLY in the home page <====================*/}
        <Link href="/login_register" className="mb-4 text-xl" onClick={closeMenu}>Login/Register</Link>
        <div className="">
          <div className="w-[250px] text-2xl font-bold">
            <Image src="/images/logo-transparent.png" alt="Logo" width={250} height={100} layout="responsive" />
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
