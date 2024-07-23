"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function SiteHeader2() {
  const [images, setImages] = useState([
    { src: "/images/header/1.png", width: 400, height: 400 },
    { src: "/images/header/6.png", width: 400, height: 400 },
    { src: "/images/header/7.png", width: 400, height: 400 },
    { src: "/images/header/11.png", width: 400, height: 400 },
    { src: "/images/header/12.png", width: 400, height: 400 },
    { src: "/images/header/13.png", width: 400, height: 400 },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center p-4 md:p-8">
      <div className="w-full max-w-4xl mx-auto grid grid-cols-12 gap-8 items-center">
        <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
          <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                  index === currentIndex ? "translate-y-0" : "-translate-y-full"
                }`}
              >
                <Image
                  src={image.src}
                  layout="fill"
                  objectFit="cover"
                  alt="customer photo"
                  className="rounded-2xl"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-4 -z-10 bg-yellow-300 rounded-xl" />
        </div>

        <div className="w-full max-w-sm mx-auto md:max-w-full">
          <div className="relative aspect-square">
            <Image
              src="/images/logo-transparent.png"
              alt="osvaldy the barber logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}