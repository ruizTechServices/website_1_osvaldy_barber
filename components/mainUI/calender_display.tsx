'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import Link from 'next/link';
import LoginModal from './loginModal'; // Import the LoginModal component

interface Appointment {
  start_time: string;
  end_time: string;
  notes?: string;
}

export default function CalendarMain() {
    const [date, setDate] = useState<Date>(new Date());
    const [selected, setSelected] = useState<Date | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const handleSelect = async (day: Date) => {
        setDate(day);
        setSelected(day);
        setIsOpen(true);
        await fetchAppointments(day);
    };

    const fetchAppointments = async (selectedDate: Date) => {
        const { data, error } = await supabase
            .from('appointments')
            .select('*')
            .eq('appointment_date', selectedDate.toISOString().slice(0, 10));

        if (error) console.error('Error fetching appointments', error);
        else setAppointments(data || []);
    };

    return (
        <div className='flex flex-col items-center justify-center gap-10 mt-10 h-[700px]'>
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
                        {appointments.map((appt, index) => (
                            <div key={index}>
                                <p>Time: {appt.start_time} - {appt.end_time}</p>
                                <p>
                                    {appt.notes
                                        ? `Not available - ${appt.notes}`
                                        : <button className='rounded-xl bg-yellow-300 p-2' onClick={() => setLoginModalOpen(true)}>Make an appointment</button>}{/*I want to place a modal here that asks the user if they have logged in or if they want to register* */}
                                </p>
                            </div>
                        ))}
                    </DialogDescription>
                    <DialogClose asChild>
                        <button className="text-white">Close</button>
                    </DialogClose>
                </DialogContent>
            </Dialog>
            <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} /> {/* Use the LoginModal component */}
        </div>
    );
}
