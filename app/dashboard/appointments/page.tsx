//app/dashboard/appointments/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';

interface Appointment {
  id: number;
  start_time: string;
  end_time: string;
  notes: string;
  appointment_date: string;
}

const Appointments: React.FC = () => {
  const [notes, setNotes] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('appointment_date', { ascending: true });

    if (error) {
      console.error('Error fetching appointments:', error);
    } else {
      setAppointments(data || []);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('appointments')
      .insert([
        {
          start_time: startTime,
          end_time: endTime,
          notes: notes,
          appointment_date: appointmentDate,
        }
      ]);

    if (error) {
      console.error('Error inserting appointment:', error);
    } else {
      console.log('Appointment added successfully:', data);
      // Clear form fields
      setNotes("");
      setStartTime("");
      setEndTime("");
      setAppointmentDate("");
      // Refresh appointments list
      fetchAppointments();
    }
  };

return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">Appointments</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6">
        <form onSubmit={handleFormSubmit} className="mb-6 space-y-4">
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            required
          />
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full md:w-1/2 p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              required
            />
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full md:w-1/2 p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <textarea
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Schedule Appointment
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Upcoming Appointments</h2>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Date: {appointment.appointment_date}</p>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Time: {appointment.start_time} - {appointment.end_time}</p>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Notes: {appointment.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;