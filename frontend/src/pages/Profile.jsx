import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const userData = useSelector((state) => state.users.userData);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Profile</h1>
        {userData ? (
          <div className="space-y-2">
            <p className="text-lg">
              <strong>Name:</strong> {userData.name}
            </p>
            <p className="text-lg">
              <strong>Email:</strong> {userData.email}
            </p>
            <p className="text-lg">
              <strong>Username:</strong> {userData.username}
            </p>
          </div>
        ) : (
          <p className="text-lg text-center">No user data available</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
