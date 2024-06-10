import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Carouselmain() {
  return (
    <Carousel className='w-fit flex flex-col items-center justify-center'>
      <CarouselContent className=''>
        <CarouselItem className='flex justify-center items-center overflow-hidden'>
          <div className="flex flex-col items-center justify-center bg-black ">
            <img className='w-[600px]' src="/images/osvaldy-pic-2.png" />
          </div>
        </CarouselItem>
        <CarouselItem className='flex justify-center items-center'>
        <div className="flex flex-col items-center justify-center bg-black">
            <img className='w-[300px]' src="/images/logo-2.png" />
          </div>
        </CarouselItem>
        <CarouselItem className='flex justify-center items-center'>
        <div className="flex flex-col items-center justify-center bg-black">
            <img className='w-[300px]' src="/images/logo-3.png" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

  )
}
