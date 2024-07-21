// components/mainUI/dashboard.tsx
'use client';
import React, { useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase/client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import Link from 'next/link';

interface User {
  email: string;
  name: string;
}

interface Appointment {
  start_time: string;
  end_time: string;
  notes?: string;
}

// Fetch users function
async function fetchUsers() {
  const { data, error } = await supabase.from('users').select('email, name');
  if (error) {
    console.error("Error fetching users:", error);
    return [];
  }
  return data;
}

// Fetch next appointment function
async function fetchNextAppointment() {
  const { data, error } = await supabase
    .from('appointments')
    .select('*')
    .order('start_time', { ascending: true })
    .limit(1)
    .single();

  if (error) {
    console.error("Error fetching next appointment:", error);
    return null;
  }
  return data;
}

const DashboardMain: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [nextAppointment, setNextAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    async function loadData() {
      const usersData = await fetchUsers();
      setUsers(usersData);

      const appointmentData = await fetchNextAppointment();
      setNextAppointment(appointmentData);
    }

    loadData();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-white">
      <nav className="bg-black p-4">
        <ul className="flex flex-col lg:flex-row gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#prices-section">Prices</Link></li>
          <li><Link href="#gallery">Gallery</Link></li>
          <li><Link href="/login_register">Login/Register</Link></li>
        </ul>
      </nav>
      <div className="flex-grow p-4 lg:p-8 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Customer Emails and Names */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Customer List</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Name</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Next Appointment */}
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle>Next Scheduled Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              {nextAppointment ? (
                <div>
                  <p><strong>Start Time:</strong> {new Date(nextAppointment.start_time).toLocaleString()}</p>
                  <p><strong>End Time:</strong> {new Date(nextAppointment.end_time).toLocaleString()}</p>
                  {nextAppointment.notes && <p><strong>Notes:</strong> {nextAppointment.notes}</p>}
                </div>
              ) : (
                <p>No upcoming appointments</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;