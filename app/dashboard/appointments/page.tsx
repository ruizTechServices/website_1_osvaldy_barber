'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client'; // Adjust this import path as needed

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
    <div className="container mx-auto p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-white text-4xl mb-4">Appointments</h1>
        <p className="text-gray-400 mb-6">Manage your appointments seamlessly and efficiently.</p>
        <form onSubmit={handleFormSubmit} className="mb-6">
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            className="w-full mb-4 p-2 rounded"
            required
          />
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full mb-4 p-2 rounded"
            required
          />
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full mb-4 p-2 rounded"
            required
          />
          <textarea
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full mb-4 p-2 rounded"
          />
          <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Schedule Appointment
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-white text-2xl mb-4">Upcoming Appointments</h2>
          {appointments.map((appointment) => (
            <div key={appointment.id} className="bg-gray-700 p-4 rounded mb-2">
              <p className="text-white">Date: {appointment.appointment_date}</p>
              <p className="text-white">Time: {appointment.start_time} - {appointment.end_time}</p>
              <p className="text-white">Notes: {appointment.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;