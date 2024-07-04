'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import BurgerNavbar from './navbar';

export default function SiteHeader() {
  const [images, setImages] = useState([
    { src: "/images/1.png", width: 400, height: 400 },
    { src: "/images/3.png", width: 400, height: 400 },
    { src: "/images/4.png", width: 400, height: 400 },
    { src: "/images/5.png", width: 400, height: 400 },
    { src: "/images/6.png", width: 400, height: 400 },
    { src: "/images/7.png", width: 400, height: 400 },
    { src: "/images/8.png", width: 400, height: 400 },
    { src: "/images/10.png", width: 400, height: 400 },
    { src: "/images/11.png", width: 400, height: 400 },
    { src: "/images/12.png", width: 400, height: 400 },
    { src: "/images/13.png", width: 400, height: 400 },
    { src: "/images/IMG_2378.png", width: 400, height: 400 },
    { src: "/images/IMG_5873.jpg", width: 400, height: 400 },
    { src: "/images/IMG_8598.jpg", width: 400, height: 400 },
    { src: "/images/IMG_8711.jpg", width: 400, height: 400 },
    { src: "/images/IMG_8718.jpg", width: 400, height: 400 },
    { src: "/images/IMG_9997.jpg", width: 400, height: 400 },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(
    () => {
      const interval = setInterval(() => {
        setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
      }, 3000); // Change image every 3000 milliseconds (3 seconds)
      return () => clearInterval(interval);
    },
    [images.length]
  );

  return (
    <div className="border-2 border-white bg-black h-[1000px] w-full lg:h-[800px] relative overflow-hidden md:mx-25">
      {/* Replace img tags with Image component */}
      <div className="w-[200px] md:w-[15em] md:absolute md:top-[67px] md:left-[57px] md:w-[300px] md:h-[300px]">
        <Image
          src="/images/logo-1.png"
          alt="main-logo"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <div className="hidden md:block z-10 absolute top-[100px] left-[400px] w-[250px] md:w-80 h-[400px] md:h-[450px] overflow-hidden">
        {images.map((image, index) =>
          <Image
            key={index}
            src={image.src}
            width={image.width}
            height={image.height}
            alt="customer photo"
            className={`transition-transform duration-1000 ease-in-out transform ${index === currentIndex ? "translate-y-0" : "-translate-y-full"} absolute top-0 left-0 w-full h-full object-cover rounded-2xl`}
          />
        )}
      </div>
      <div className="block md:hidden z-10 absolute top-[330px] left-20 w-[250px] md:w-80 h-[400px] md:h-[450px] overflow-hidden">
        {/* Images for mobile: visible on screens smaller than 768px */}
        {images.map((image, index) =>
          <Image
            key={index}
            src={image.src}
            width={image.width}
            height={image.height}
            alt="customer photo"
            className={`transition-transform duration-1000 ease-in-out transform ${index === currentIndex ? "translate-y-0" : "-translate-y-full"} absolute top-0 left-0 w-full h-full object-cover rounded-2xl`}
          />
        )}
      </div>

      <div className="z-0 left-[35px] top-[375px] w-[250px] h-[400px] absolute md:h-[430px] md:w-80 md:top-[150px] md:left-[370px] rounded-xl bg-yellow-300" />
      <BurgerNavbar />
      {/* Replace the second img tag */}
      <div className="w-[340px] absolute top-[650px] md:top-[7px] md:left-[780px] lg:w-[500px] lg:h-[500px]">
        <Image
          src="/images/logo-transparent.png"
          alt="osvaldy the barber logo"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
    </div>
  );
}
