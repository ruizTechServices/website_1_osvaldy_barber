//C:\Users\Gio\OneDrive\Desktop\ruizTechServices\osvaldy_barber\websites\nextjs\website_1_osvaldy_barber\components\mainUI\calender_display.tsx
'use client';
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog"

export default function Calendermain() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selected, setSelected] = useState<Date | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (day: Date) => {
        setDate(day);
        setSelected(day);
        setIsOpen(true);
    };

    return (
        <div className='flex flex-col items-center justify-center gap-10 mt-10 bg-black h-[700px]'>
            <h1 className='text-white'>Check the calendar</h1>
            <Calendar
                mode="single"
                selected={date}
                onDayClick={handleSelect}
                className="rounded-md border w-fit text-white"
            />
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <button className="hidden">Open</button>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>Date Details</DialogTitle>
                    <DialogDescription>
                        Contents for {selected?.toLocaleDateString()} here.
                    </DialogDescription>
                    <DialogClose asChild>
                        <button className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:ring-2 focus:ring-blue-500">
                            Close
                        </button>
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </div>
    );
}

