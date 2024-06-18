'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';



export default function Siteheader() {
  const [images, setImages] = useState([
    { src: '/images/IMG_9997.jpg', width: 400, height: 400 },
    { src: '/images/IMG_8718.jpg', width: 400, height: 400 },
    { src: '/images/IMG_8598.jpg', width: 400, height: 400 },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3000); // Change image every 3000 milliseconds (3 seconds)
    return () => clearInterval(interval);
  }, [images.length]);

  return (

    <div className="bg-black h-[1000px] lg:h-[800px] relative overflow-hidden">
      <img src='/images/logo-1.png' alt="main-logo" className="w-[200px] md:w-[15em] md:absolute md:top-[67px] md:left-[57px] md:w-[300px] md:h-[300px]" />
      <div className='z-10 absolute top-[100px] left-[400px] w-[250px] md:w-80 h-[400px] md:h-[450px] overflow-hidden'>
        {images.map((image, index) => (
          <Image key={index} src={image.src} width={image.width} height={image.height} alt="customer photo" className={`transition-transform duration-1000 ease-in-out transform ${index === currentIndex ? 'translate-y-0' : '-translate-y-full'} absolute top-0 left-0 w-full h-full object-cover rounded-2xl`} />
        ))}
      </div>
      <div className="z-0 left-[35px] top-[375px] w-[250px] h-[400px] absolute md:h-[430px] md:w-80 md:top-[150px] md:left-[370px] rounded-xl bg-yellow-300" />{/*<=====HOw do I move this behind the image? I am using `z-index` but it s not working...*/}
      <img src="/images/logo-4.png" alt="osvaldy the barber logo" className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-[30em] absolute top-[650px] md:top-[7px] md:left-[580px] lg:w-[800px] lg:h-[800px]" />
    </div>
  )
}
