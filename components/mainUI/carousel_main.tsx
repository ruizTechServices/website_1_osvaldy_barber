'use client';
import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { arrowForwardOutline, arrowBackOutline } from 'ionicons/icons';


const images = [
  "/images/1.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/10.png",
  "/images/11.png",
  "/images/12.png",
  "/images/13.png",
  "/images/IMG_2378.png",
  "/images/IMG_5873.jpg",
  "/images/IMG_8598.jpg",
  "/images/IMG_8711.jpg",
  "/images/IMG_8718.jpg",
  "/images/IMG_9997.jpg",
];


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="h-[600px] w-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="md:w-[600px] flex justify-center items-center overflow-hidden">
        <img className="max-h-[300px] md:max-h-[500px] md:max-w-[500px] max-w-[300px]" src={images[currentIndex]} alt="Carousel item" />
      </div>
      <div className='flex justify-between items-center md:w-[600px] md:absolute'>
        <button onClick={prevSlide} className="md:h-[200px] left-4 top-0 transform -translate-y-1/2 bg-yellow-400 text-white font-bold text-3xl p-2 rounded-full"><IonIcon icon={arrowBackOutline}/></button>
        <button onClick={nextSlide} className="md:h-[200px] right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white font-bold text-3xl p-2 rounded-full"><IonIcon icon={arrowForwardOutline} /></button>
      </div>
    </div>
  );
};

export default Carousel;
