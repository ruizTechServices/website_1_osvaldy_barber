'use client';

import React, { useState } from 'react';
import { Save, Clock, Scissors, Users, Calendar } from 'lucide-react';

const BarberShopAdminSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    openTime: '',
    closeTime: '',
    services: '',
    staffList: '',
    bookingInterval: '',
    maxAdvanceBooking: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Settings updated', settings);
    // Here you would typically send the settings to your backend
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-blue-600">
            <h2 className="text-2xl font-bold text-white">Barber Shop Admin Settings</h2>
          </div>
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-8">
              {/* Business Hours */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  Business Hours
                </h3>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="openTime" className="block text-sm font-medium text-gray-700">Opening Time</label>
                    <input type="time" id="openTime" name="openTime" value={settings.openTime} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="closeTime" className="block text-sm font-medium text-gray-700">Closing Time</label>
                    <input type="time" id="closeTime" name="closeTime" value={settings.closeTime} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Scissors className="h-5 w-5 mr-2 text-blue-500" />
                  Services
                </h3>
                <div className="mt-3">
                  <label htmlFor="services" className="block text-sm font-medium text-gray-700">Edit Services (comma-separated)</label>
                  <textarea id="services" name="services" rows={3} value={settings.services} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Haircut, Shave, Beard Trim"></textarea>
                </div>
              </div>

              {/* Staff Management */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  Staff Management
                </h3>
                <div className="mt-3">
                  <label htmlFor="staffList" className="block text-sm font-medium text-gray-700">Edit Staff List (comma-separated)</label>
                  <textarea id="staffList" name="staffList" rows={3} value={settings.staffList} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="John Doe, Jane Smith"></textarea>
                </div>
              </div>

              {/* Booking Preferences */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  Booking Preferences
                </h3>
                <div className="mt-3 space-y-4">
                  <div>
                    <label htmlFor="bookingInterval" className="block text-sm font-medium text-gray-700">Booking Interval (minutes)</label>
                    <input type="number" id="bookingInterval" name="bookingInterval" min="15" step="15" value={settings.bookingInterval} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="maxAdvanceBooking" className="block text-sm font-medium text-gray-700">Max Advance Booking (days)</label>
                    <input type="number" id="maxAdvanceBooking" name="maxAdvanceBooking" min="1" value={settings.maxAdvanceBooking} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BarberShopAdminSettings;