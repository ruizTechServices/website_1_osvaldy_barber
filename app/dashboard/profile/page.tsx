import React from 'react';

//app/dashboard/profile/page.tsx
const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
      <p className="text-lg mb-6">Welcome to the profile page!</p>
      <div className="profile-details max-w-4xl w-full bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        <div className="profile-picture flex justify-center mb-4">
          <img className="rounded-full w-32 h-32 object-cover border-4 border-gray-300 dark:border-gray-700" src="/path/to/profile/picture.jpg" alt="Profile" />
        </div>
        <div className="profile-info text-center">
          <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
          <p className="text-lg mb-1">Email: john.doe@example.com</p>
          <p className="text-lg">Location: New York, USA</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;