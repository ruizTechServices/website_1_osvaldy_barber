// components/mainUI/dashboard.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

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
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Customer Emails and Names */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Customer List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
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
                      <TableCell className="font-medium">{user.email}</TableCell>
                      <TableCell>{user.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Next Appointment */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Next Scheduled Appointment</CardTitle>
          </CardHeader>
          <CardContent>
            {nextAppointment ? (
              <div className="space-y-2">
                <p><span className="font-semibold">Start Time:</span> {new Date(nextAppointment.start_time).toLocaleString()}</p>
                <p><span className="font-semibold">End Time:</span> {new Date(nextAppointment.end_time).toLocaleString()}</p>
                {nextAppointment.notes && <p><span className="font-semibold">Notes:</span> {nextAppointment.notes}</p>}
              </div>
            ) : (
              <p>No upcoming appointments</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default DashboardMain;