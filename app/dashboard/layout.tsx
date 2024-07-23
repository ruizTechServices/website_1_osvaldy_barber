// app/dashboard/layout.tsx
'use client';
import { useState } from 'react';
import Sidebar from "../../components/mainUI/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
    { name: "Home", icon: "home", href: "/" },
    { name: "Appointments", icon: "calendar", href: "/dashboard/appointments" },
    { name: "Profile", icon: "user", href: "/dashboard/profile" },
    { name: "Settings", icon: "settings", href: "/dashboard/settings" },
    { name: "Reports", icon: "chart-bar", href: "/dashboard/help" },
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Mobile header */}
      <header className="md:hidden bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 focus:outline-none focus:bg-gray-700 rounded"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block md:w-64 bg-gray-800 text-white overflow-y-auto transition-all duration-300 ease-in-out`}>
          <Sidebar links={links} />
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
