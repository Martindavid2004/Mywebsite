import React, { useState } from 'react';
import { Bell, Lock, User, Mail, Shield, Database, Globe } from 'lucide-react';

const Settings = () => {
  const [formData, setFormData] = useState({
    fullName: 'Dr. Aishwaraya',
    email: 'aishwaraya@college.edu',
    department: 'AI&DS',
    emailNotifications: true,
    meetingReminders: true
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    // Handle saving the settings
    console.log('Saving settings:', formData);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <button 
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md">
            <nav className="p-4">
              <a
                href="#profile"
                className="flex items-center gap-3 px-4 py-3 text-blue-600 bg-blue-50 rounded-lg"
              >
                <User className="h-5 w-5" />
                <span>Profile Settings</span>
              </a>
              <a
                href="#notifications"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg mt-1"
              >
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
              </a>
              <a
                href="#security"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg mt-1"
              >
                <Lock className="h-5 w-5" />
                <span>Security</span>
              </a>
              <a
                href="#preferences"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg mt-1"
              >
                <Globe className="h-5 w-5" />
                <span>Preferences</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Receive email updates about your mentees</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="emailNotifications"
                      checked={formData.emailNotifications}
                      onChange={handleInputChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Meeting Reminders</h3>
                    <p className="text-sm text-gray-500">Get notified about upcoming meetings</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="meetingReminders"
                      checked={formData.meetingReminders}
                      onChange={handleInputChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between px-4 py-2 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-gray-500" />
                    <span>Change Password</span>
                  </div>
                  <span className="text-blue-500">Update</span>
                </button>
                <button className="w-full flex items-center justify-between px-4 py-2 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-gray-500" />
                    <span>Two-Factor Authentication</span>
                  </div>
                  <span className="text-green-500">Enabled</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;