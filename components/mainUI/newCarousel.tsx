'use client';
import React, { useState } from 'react';

const NewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = [
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

  const angle = currentIndex * -72;

  const handleLeftClick = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : carouselImages.length - 1);
  };

  const handleRightClick = () => {
    setCurrentIndex(currentIndex < carouselImages.length - 1 ? currentIndex + 1 : 0);
  };

  return (
    <div className="border-top-2 flex items-center justify-center h-[500px] bg-black">
      <div className="relative w-80" style={{ perspective: '1000px' }}>
        <div
          className="relative w-full h-52"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${angle}deg)`,
            transition: 'transform 1s',
          }}
        >
          {carouselImages.map((src, index) => (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-2xl"
              style={{
                transform: `rotateY(${index * 72}deg) translateZ(300px)`,
                backfaceVisibility: 'hidden',
              }}
            >
              <img src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 w-full flex justify-between px-10">
          <button
            className="bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
            onClick={handleLeftClick}
          >
            &#8592;
          </button>
          <button
            className="bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
            onClick={handleRightClick}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCarousel;
