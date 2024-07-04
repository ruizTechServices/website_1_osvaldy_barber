'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import { IonIcon } from '@ionic/react';
import { arrowForwardOutline, arrowBackOutline } from 'ionicons/icons';

const carouselImages = [
  { src: "/images/1.png", width: 500, height: 300 },
  { src: "/images/3.png", width: 500, height: 300 },
  { src: "/images/4.png", width: 500, height: 300 },
  { src: "/images/5.png", width: 500, height: 300 },
  { src: "/images/6.png", width: 500, height: 300 },
  { src: "/images/7.png", width: 500, height: 300 },
  { src: "/images/8.png", width: 500, height: 300 },
  { src: "/images/10.png", width: 500, height: 300 },
  { src: "/images/11.png", width: 500, height: 300 },
  { src: "/images/12.png", width: 500, height: 300 },
  { src: "/images/13.png", width: 500, height: 300 },
  { src: "/images/IMG_2378.png", width: 500, height: 300 },
  { src: "/images/IMG_5873.jpg", width: 500, height: 300 },
  { src: "/images/IMG_8598.jpg", width: 500, height: 300 },
  { src: "/images/IMG_8711.jpg", width: 500, height: 300 },
  { src: "/images/IMG_8718.jpg", width: 500, height: 300 },
  { src: "/images/IMG_9997.jpg", width: 500, height: 300 },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="h-[500px] w-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="md:w-[600px] flex justify-center items-center overflow-hidden">
        <Image 
          className="max-h-[300px] md:max-h-[500px] md:max-w-[500px] max-w-[300px]" 
          src={carouselImages[currentIndex].src} 
          alt="Carousel item" 
          width={carouselImages[currentIndex].width} 
          height={carouselImages[currentIndex].height}
          layout="responsive"
        />
      </div>
      <div className='flex justify-between items-center md:w-[600px] md:absolute'>
        <button onClick={prevSlide} className="md:h-[200px] left-4 top-0 transform -translate-y-1/2 bg-yellow-400 text-white font-bold text-3xl p-2 rounded-full"><IonIcon icon={arrowBackOutline}/></button>
        <button onClick={nextSlide} className="md:h-[200px] right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white font-bold text-3xl p-2 rounded-full"><IonIcon icon={arrowForwardOutline} /></button>
      </div>
    </div>
  );
};

export default Carousel;
