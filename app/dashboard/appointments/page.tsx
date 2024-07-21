'use client';
import React from 'react';

// Client-side button press event handler
const btnPressed = () => {
  console.log("Button pressed!");
};

// Appointments component as a Client Component
const Appointments: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-white text-4xl mb-4">Appointments</h1>
        <p className="text-gray-400">Manage your appointments seamlessly and efficiently.</p>
        <button 
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={btnPressed}  // Ensure this client-side event handler is correctly handled
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Appointments;
