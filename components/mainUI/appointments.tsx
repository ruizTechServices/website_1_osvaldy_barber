'use client';
import React, { useState, useEffect } from 'react';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

type Appointment = {
  id: number;
  date: string;
  time: string;
  user_id: string;
};

const AppointmentsComponent: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await supabase.auth.getUser();
      const user: User | null = response.user;

      if (!user) {
        setError('No user signed in.');
        setLoading(false);
        return;
      }

      // Fetch appointments based on role
      const { data, error } = await supabase
        .from<Appointment>('appointments')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        setError(`Error fetching appointments: ${error.message}`);
        console.error('Error fetching appointments', error);
      } else {
        setAppointments(data || []);
        console.log('Appointments:', data);
      }
      setLoading(false);
    };

    fetchAppointments();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Your Appointments</h3>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              {appointment.date} - {appointment.time}
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
};

export default AppointmentsComponent;
