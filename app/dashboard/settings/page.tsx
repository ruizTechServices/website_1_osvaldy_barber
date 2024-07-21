//app/dashboard/settings/page.tsx
import React from 'react';

const SettingsPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full bg-gray-900 text-white p-4'>
      <h1 className='text-3xl font-bold mb-4'>Settings</h1>
      <p className='text-lg text-center'>Manage your application settings here.</p>
    </div>
  );
};

export default SettingsPage;