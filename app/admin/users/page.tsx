import React from 'react';
import { User, Mail, MoreVertical } from 'lucide-react';

const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 4, name: 'Chris Lee', email: 'chris.lee@example.com' },
];

const UserList: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">User List</h1>
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-150">
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 p-2 rounded-full">
                <User className="text-indigo-600 w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700">{user.name}</h2>
                <div className="flex items-center text-gray-500">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>{user.email}</span>
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;