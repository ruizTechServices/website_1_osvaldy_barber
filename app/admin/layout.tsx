'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, LayoutDashboard, Settings, Users } from 'lucide-react';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { href: '/', icon: Home, label: 'Homepage' },
    { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/admin/users', icon: Users, label: 'Users' },
    { href: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-indigo-700 text-white transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0
        `}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4">
            <span className="text-2xl font-bold">Admin</span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 space-y-2 p-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-300 hover:bg-indigo-800 hover:text-white transition-colors duration-200"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="rounded-full p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring md:hidden"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              {/* Add user avatar, notifications, etc. here */}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;