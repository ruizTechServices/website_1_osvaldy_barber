import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <p>Welcome to the profile page!</p>
      <div className="profile-details">
        <div className="profile-picture">
          <img src="/path/to/profile/picture.jpg" alt="Profile" />
        </div>
        <div className="profile-info">
          <h2>John Doe</h2>
          <p>Email: john.doe@example.com</p>
          <p>Location: New York, USA</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;