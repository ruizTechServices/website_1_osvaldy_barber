import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Carouselmain() {
  return (
    <Carousel className='w-full flex flex-col items-center justify-center'>
      <CarouselContent className='w-full'>
        <CarouselItem className='flex justify-center items-center overflow-hidden'>
          <div className="flex flex-col items-center justify-center bg-black">
            {/* Responsive image width */}
            <img className='w-full max-w-[600px]' src="/images/osvaldy-pic-2.png" />
          </div>
        </CarouselItem>
        <CarouselItem className='flex justify-center items-center'>
          <div className="flex flex-col items-center justify-center bg-black">
            {/* Responsive image width */}
            <img className='w-full max-w-[300px]' src="/images/logo-2.png" />
          </div>
        </CarouselItem>
        <CarouselItem className='flex justify-center items-center'>
          <div className="flex flex-col items-center justify-center bg-black">
            {/* Responsive image width */}
            <img className='w-full max-w-[300px]' src="/images/logo-3.png" />
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* Ensure buttons are visible and usable on mobile */}
      <CarouselPrevious className='absolute left-0 z-10 p-2 bg-white bg-opacity-75 rounded-full shadow-md' />
      <CarouselNext className='absolute right-0 z-10 p-2 bg-white bg-opacity-75 rounded-full shadow-md' />
    </Carousel>
  );
}
