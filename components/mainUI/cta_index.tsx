//C:\Users\Gio\OneDrive\Desktop\ruizTechServices\osvaldy_barber\websites\nextjs\website_1_osvaldy_barber\components\mainUI\cta_index.tsx
import React from 'react';

interface CtaindexProps {
  title: string; // Define a prop for the title text
}

// Use destructuring to directly extract `title` from props
export default function Ctaindex({ title }: CtaindexProps) {
  return (
    <div className='bg-white text-black text-6xl h-[500px] flex flex-col items-center justify-center gap-10 mt-10 text-center m-2 font-bold'>
        <h1 className='text-black'>{title}</h1>{/* Use the title prop for the h1 text */}
    </div>
  )
}

