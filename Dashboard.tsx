import React from 'react';
import { 
  Users, 
  CalendarCheck, 
  GraduationCap, 
  BarChart3,
  Clock,
  AlertCircle 
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Mentors', value: '7', icon: Users, color: 'bg-blue-500' },
    { label: 'Total Students', value: '57', icon: GraduationCap, color: 'bg-green-500' },
    { label: 'Today\'s Meetings', value: '12', icon: CalendarCheck, color: 'bg-purple-500' },
    { label: 'Pending Actions', value: '8', icon: AlertCircle, color: 'bg-yellow-500' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mentor Monitoring Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-600 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Upcoming Meetings</h2>
            <Clock className="w-5 h-5 text-gray-500" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Student Counseling Session</p>
                  <p className="text-sm text-gray-600">Prof. Pandi Deepa • AI&DS</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">2:00 PM</p>
                  <p className="text-xs text-gray-500">Today</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Performance Overview</h2>
            <BarChart3 className="w-5 h-5 text-gray-500" />
          </div>
          <div className="space-y-4">
            {['CGPA Trends', 'Attendance Analysis', 'Academic Progress'].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">{item}</p>
                <button className="text-sm text-blue-600 hover:text-blue-700">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;