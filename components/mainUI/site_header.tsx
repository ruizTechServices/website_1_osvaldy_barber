import React from 'react'

export default function Siteheader() {
  return (
    <div className="bg-black h-[1000px] lg:h-[800px] ">
      <img src="/images/logo-1.png" alt="main-logo" className="w-[200px] md:w-[15em] md:absolute md:top-[77px] md:left-[157px] md:w-[300px] md:h-[300px]" />
      <div className='flex flex-col items-center justify-center gap-10 mt-10'>
        <img src="/images/osvaldy-pic-1.png" alt="osvaldy picture in front of Yankee Stadium" className="z-50 rounded-2xl w-[250px] md:w-40 md:h-40 md:absolute md:top-[100px] md:left-[500px] md:w-[250px] lg:h-[450px]" />
        <div className="left-[35px] top-[375px] w-[250px] h-[400px] absolute md:h-[430px] md:w-[250px] md:top-[150px] md:left-[470px] z-10 rounded-xl bg-yellow-300" />
      </div>
      <img src="/images/logo-4.png" alt="osvaldy the barber logo" className="w-[30em] absolute top-[650px] md:top-[7px] md:left-[650px] lg:w-[800px] lg:h-[800px]" />
    </div>
  )
}
