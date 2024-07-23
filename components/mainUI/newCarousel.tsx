'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const NewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = [
    "/images/carousel/5.png",
    "/images/carousel/10.png",
    "/images/carousel/IMG_5873.jpg",
    "/images/carousel/IMG_8598.jpg",
    "/images/carousel/IMG_8718.jpg",
    "/images/carousel/IMG_9997.jpg",
  ];

  const handleLeftClick = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : carouselImages.length - 1);
  };

  const handleRightClick = () => {
    setCurrentIndex(currentIndex < carouselImages.length - 1 ? currentIndex + 1 : 0);
  };

  return (
    <div id="gallery" className="flex items-center justify-center w-full h-[600px] md:h-[500px] bg-black">
      {/* Container with perspective to enable 3D effects */}
      <div className="relative w-full max-w-[800px]" style={{ perspective: '1000px' }}>
        {/* Inner container with 3D transform based on current index */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${currentIndex * -72}deg)`,
            transition: 'transform 1s',
          }}
        >
          {/* Map through the carouselImages array to create each image element */}
          {carouselImages.map((src, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center
                ${index !== currentIndex ? 'hidden md:flex' : 'flex'}`}
              style={{
                transform: `rotateY(${index * 72}deg) translateZ(300px)`,
                backfaceVisibility: 'hidden',
              }}
            >
              {/* Container for each image with responsive sizing */}
              <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
                <Image src={src} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 top-[150px] w-full flex justify-between">
          {/* Left navigation button */}
          <button
            className="bg-yellow-500 rounded-full w-20 h-20 flex items-center justify-center"
            onClick={handleLeftClick}
          >
            <div className='text-6xl'>&#8592;</div>
          </button>
          {/* Right navigation button */}
          <button
            className="bg-yellow-500 rounded-full w-20 h-20 flex items-center justify-center"
            onClick={handleRightClick}
          >
            <div className='text-6xl'>&#8594;</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCarousel;
