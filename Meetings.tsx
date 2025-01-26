import React from 'react';
import { Calendar, Clock, Users, Plus, Search, Filter } from 'lucide-react';

const meetings = [
  {
    id: 1,
    title: 'Academic Progress Review',
    date: '2024-03-20',
    time: '10:00 AM',
    student: 'Martin david',
    mentor: 'Prof. Pandi Deepa',
    status: 'upcoming',
    topics: ['CGPA Discussion', 'Career Guidance', 'Project Review'],
  },
  {
    id: 2,
    title: 'Monthly Mentoring Session',
    date: '2024-03-19',
    time: '2:30 PM',
    student: 'Vigneshwar',
    mentor: 'Prof. Dhavapavithra',
    status: 'completed',
    topics: ['Academic Performance', 'Internship Discussion'],
  },
  {
    id: 3,
    title: 'Emergency Counseling',
    date: '2024-03-21',
    time: '11:30 AM',
    student: 'Balakishnan',
    mentor: 'Prof. Pandi Selvi',
    status: 'upcoming',
    topics: ['Personal Issues', 'Academic Support'],
  },
];

const Meetings = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Meetings Schedule</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <Plus className="h-5 w-5" />
            Schedule Meeting
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search meetings..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            Filter
          </button>
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className="space-y-4">
          {meetings.map((meeting) => (
            <div
              key={meeting.id}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold">{meeting.title}</h3>
                  <div className="flex items-center gap-4 text-gray-600 mt-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{meeting.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{meeting.time}</span>
                    </div>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    meeting.status === 'upcoming'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {meeting.status.charAt(0).toUpperCase() + meeting.status.slice(1)}
                </span>
              </div>

              <div className="flex items-center gap-4 text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{meeting.student} with {meeting.mentor}</span>
                </div>
              </div>

              <div className="flex gap-2">
                {meeting.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  View Details
                </button>
                {meeting.status === 'upcoming' && (
                  <button className="flex-1 border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-50 transition-colors">
                    Cancel Meeting
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meetings;