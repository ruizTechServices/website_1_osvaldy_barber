import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image

export default function Aboutsection() {
      const backgroundImage = "/images/backgroundImage-1.png";

  return (
    <div className='h-screen flex flex-col items-center justify-center mt-10 bg-black' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Image 
            src="/images/logo-1.png" 
            alt="Osvaldy Logo"
            width={650}  // Specify width
            height={300} // Specify height
        />
        <p className='absolute text-center bg-black md:text-4xl text-white text-2xl'>
            Osvaldy has many years in the 
            <br/>
            art of hair and beauty.
            <br/>
            <br/>
            He has been in the hair
            <br/>
            industry for over 10 years.
        </p>
    </div>
  )
}
