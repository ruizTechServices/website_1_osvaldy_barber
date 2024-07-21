'use client';
import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase/client";
import { Calendar } from "@/components/ui/calendar";
import LoginModal from "./loginModal";

interface Appointment {
    id: string;
    start_time: string;
    end_time: string;
    notes?: string;
    user_id?: string;
}

async function getUser() {
    try {
        const { data, error } = await supabase.auth.getUser();
        if (error) throw error;
        return data.user;
    } catch (error) {
        console.error("Error getting user:", error);
        return null;
    }
}

export default function CalendarMain() {
    const [date, setDate] = useState<Date>(new Date());
    const [selected, setSelected] = useState<Date | undefined>(undefined);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const checkAuth = async () => {
            const user = await getUser();
            setIsLoggedIn(!!user);
        };

        checkAuth();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setIsLoggedIn(!!session);
        });

        return () => {
            subscription.unsubscribe();
        };
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
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from("appointments")
                .select("*")
                .eq("appointment_date", selectedDate.toISOString().slice(0, 10));

            if (error) throw error;
            setAppointments(data || []);
        } catch (error) {
            console.error("Error fetching appointments", error);
        } finally {
            setIsLoading(false);
        }
    };

    const scheduleAppointment = async (appointmentId: string, remarks: string) => {
        const user = await getUser();
        if (!user) {
            console.error("User not logged in");
            return;
        }

        try {
            const { error } = await supabase
                .from("appointments")
                .update({ user_id: user.id, notes: remarks })
                .eq("id", appointmentId);

            if (error) throw error;
            console.log("Appointment booked successfully");
            await fetchAppointments(selected!);
            setShowForm(false);
        } catch (error) {
            console.error("Error booking appointment:", error);
        }
    };

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const remarks = (form.elements.namedItem('remarks') as HTMLInputElement).value;
        const appointmentId = (form.elements.namedItem('appointmentId') as HTMLInputElement).value;
        await scheduleAppointment(appointmentId, remarks);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-10 mt-10 h-[700px]">
            <h1 className="text-white">Check the calendar</h1>
            <Calendar 
                mode="single" 
                selected={date} 
                onDayClick={handleSelect} 
                className="rounded-md border w-fit text-white"
            />
            {isLoggedIn && selected && (
                <div className="mt-5 text-white">
                    <h2>Available times for {selected.toLocaleDateString()}</h2>
                    {isLoading ? (
                        <p>Loading appointments...</p>
                    ) : appointments.length > 0 ? (
                        appointments.map((appt) => (
                            <div key={appt.id} className="my-2">
                                <p>
                                    Time: {appt.start_time} - {appt.end_time}
                                </p>
                                {!appt.user_id && (
                                    !showForm ? (
                                        <button 
                                            className="rounded-xl bg-yellow-300 p-2 text-black" 
                                            onClick={() => setShowForm(true)}
                                        >
                                            Schedule Now
                                        </button>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="mt-2">
                                            <input type="hidden" name="appointmentId" value={appt.id} />
                                            <label>
                                                Remarks:{" "}
                                                <input 
                                                    type="text" 
                                                    name="remarks" 
                                                    className="rounded border p-1 text-black" 
                                                    required 
                                                />
                                            </label>
                                            <button 
                                                type="submit" 
                                                className="rounded-xl bg-green-300 p-2 ml-2 text-black"
                                            >
                                                Confirm
                                            </button>
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