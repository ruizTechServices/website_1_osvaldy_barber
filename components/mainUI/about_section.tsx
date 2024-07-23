import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image

export default function Aboutsection() {
      const backgroundImage = "/images/design/backgroundImage-1.png";

  return (
    <div className='h-screen bg-cover flex flex-col items-center justify-center bg-black' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Image 
            src="/images/logo-1.png" 
            alt="Osvaldy Logo"
            width={750}  
            height={700} 
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
