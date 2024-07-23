"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import BurgerNavbar from "./navbar";

export default function SiteHeader() {
  const [images, setImages] = useState([
    { src: "/images/header/1.png", width: 400, height: 400 },
    { src: "/images/header/6.png", width: 400, height: 400 },
    { src: "/images/header/7.png", width: 400, height: 400 },
    { src: "/images/header/11.png", width: 400, height: 400 },
    { src: "/images/header/12.png", width: 400, height: 400 },
    { src: "/images/header/13.png", width: 400, height: 400 },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgroundImage = "/images/design/backgroundImage-1.png";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="bg-black h-[1000px] w-full lg:h-full bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative w-auto md:w-[1212px] md:h-[764px] mx-auto">
        <div className="bg-black rounded-full w-[200px] md:w-[200px]">
          <Image
            src="/images/design/logo-1.png"
            alt="main-logo"
            width={200}
            height={200}
            layout="responsive"
            className="border-2 border-white rounded-full"
          />
        </div>
        <div className="relative h-[900px] top-0 left-0 ">
          <div className="hidden md:block z-10 absolute top-[10px] left-[150px] w-[250px] md:w-80 h-[400px] md:h-[450px] overflow-hidden">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                width={image.width}
                height={image.height}
                alt="customer photo"
                className={`transition-transform duration-1000 ease-in-out transform ${index === currentIndex ? "translate-y-0" : "-translate-y-full"} absolute top-0 left-0 w-full h-full object-cover rounded-2xl`}
              />
            ))}
          </div>
          <div className="block md:hidden z-10 absolute top-[330px] left-20 w-[250px] md:w-80 h-[400px] md:h-[450px] overflow-hidden">
            {/* Images for mobile: visible on screens smaller than 768px */}
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                width={image.width}
                height={image.height}
                alt="customer photo"
                className={`transition-transform duration-1000 ease-in-out transform ${index === currentIndex ? "translate-y-0" : "-translate-y-full"} absolute top-0 left-0 w-full h-full object-cover rounded-2xl`}
              />
            ))}
          </div>

          <div className="z-0 left-[35px] top-[375px] w-[250px] h-[400px] absolute md:h-[430px] md:w-80 md:top-[50px] md:left-[100px] rounded-xl bg-yellow-300" />
        </div>
        {/***/}
        <BurgerNavbar />
        {/* Replace the second img tag */}
        <div className="rounded-full bg-black h-[300px] w-[340px] left-[30px] absolute top-[250px] md:top-[170px] md:left-[550px] lg:w-[500px] lg:h-[500px]">
          <Image
            src="/images/design/logo-transparent.png"
            alt="osvaldy the barber logo"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
