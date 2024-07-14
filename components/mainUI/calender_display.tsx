'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { Calendar } from "@/components/ui/calendar";
// import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import LoginModal from './loginModal';

// Dummy data: If you fetch appointments from a database, replace this interface accordingly.
interface Appointment {
  start_time: string;
  end_time: string;
  notes?: string;
}

export default function CalendarMain() {
    const [date, setDate] = useState<Date>(new Date());
    const [selected, setSelected] = useState<Date | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // To check if user is logged in
    const [showForm, setShowForm] = useState(false);    // To show the scheduling form

    useEffect(() => {
        // Check if the user is logged in, this is just a placeholder mechanism
        // You should replace this with your actual authentication check logic
        const checkAuth = async () => {
            // Assume a function `getUser` returns logged in user, null if not logged in.
            const user = await getUser();
            setIsLoggedIn(!!user);
        };

        checkAuth();
    }, []);

    const handleSelect = async (day: Date) => {
        setSelected(day);
        if (!isLoggedIn) {
            setLoginModalOpen(true);
        } else {
            setDate(day);
            await fetchAppointments(day);
        }
    };

    const fetchAppointments = async (selectedDate: Date) => {
        const { data, error } = await supabase
            .from('appointments')
            .select('*')
            .eq('appointment_date', selectedDate.toISOString().slice(0, 10));

        if (error) console.error('Error fetching appointments', error);
        else setAppointments(data || []);
    };

    const scheduleAppointment = () => {
        setShowForm(true);
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
            {isLoggedIn && selected && (
                <div className='mt-5'>
                    <h2>Available times for {selected.toLocaleDateString()}</h2>
                    {appointments.length > 0 ? (
                        appointments.map((appt, index) => (
                            <div key={index} className='my-2'>
                                <p>Time: {appt.start_time} - {appt.end_time}</p>
                                {!appt.notes && (
                                    !showForm ? (
                                        <button
                                            className='rounded-xl bg-yellow-300 p-2'
                                            onClick={scheduleAppointment}
                                        >
                                            Schedule Now
                                        </button>
                                    ) : (
                                        <form className='mt-2'>
                                            <label>Remarks: <input type="text" className='rounded border p-1' /></label>
                                            <button type="submit" className='rounded-xl bg-green-300 p-2 ml-2'>Confirm</button>
                                        </form>
                                    )
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No available times for the selected day.</p>
                    )}
                </div>
            )}
            <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
        </div>
    );
}

// Placeholder function to check user authentication. Replace with actual auth logic.
async function getUser() {
    // Example code to simulate async auth check
    return new Promise((resolve) => setTimeout(() => resolve(null), 1000));
}