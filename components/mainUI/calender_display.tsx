//C:\Users\Gio\OneDrive\Desktop\ruizTechServices\osvaldy_barber\websites\nextjs\website_1_osvaldy_barber\components\mainUI\calender_display.tsx
'use client';
import React from 'react';
import { Calendar } from "@/components/ui/calendar"


export default function Calendermain() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [selected, setSelected] = React.useState<Date | undefined>(new Date())//the selected date, I want to display the dates 'contents' with 'dialog' shadcn component
    return (
        <div className='flex flex-col items-center justify-center gap-10 mt-10 bg-black h-[700px]'>
            <h1 className='text-white'>Check the calender</h1>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border w-fit text-white"
            />
        </div>
    )
}
