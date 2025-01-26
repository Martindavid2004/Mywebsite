import React from 'react';
import { Mail, GraduationCap, BookOpen, Search, UserCircle } from 'lucide-react';

const students = [
  {
    id: 1,
    name: 'Martin david',
    rollNumber: '21AIML001',
    year: 3,
    semester: 5,
    department: 'AI&DS',
    email: 'martin.d@college.edu',
    mentor: 'Prof. Pandi Deepa',
    cgpa: 8.9,
    attendance: 92,
  },
  {
    id: 2,
    name: 'Vigneshwar',
    rollNumber: '21AIML002',
    year: 3,
    semester: 5,
    department: 'AI&DS',
    email: 'vigneshwar@college.edu',
    mentor: 'Prof. Dhavapavithra',
    cgpa: 9.2,
    attendance: 95,
  },
  {
    id: 3,
    name: 'Balakishnan',
    rollNumber: '21AIML003',
    year: 3,
    semester: 5,
    department: 'AI&DS',
    email: 'balakishnan@college.edu',
    mentor: 'Prof. Pandi Selvi',
    cgpa: 8.7,
    attendance: 88,
  },
];

const Students = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Students Directory</h1>
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search students..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Years</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div key={student.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">{student.name}</h2>
                <p className="text-gray-600">{student.rollNumber}</p>
              </div>
              <UserCircle className="h-8 w-8 text-blue-500" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                <span>{student.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <GraduationCap className="h-5 w-5 mr-2" />
                <span>{student.department} • Year {student.year}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>Semester {student.semester}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <h3 className="text-sm font-semibold text-gray-600">Academic Performance</h3>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">CGPA</p>
                  <p className="text-lg font-semibold">{student.cgpa}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Attendance</p>
                  <p className="text-lg font-semibold">{student.attendance}%</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <h3 className="text-sm font-semibold text-gray-600">Mentor</h3>
              <p className="mt-1 text-gray-800">{student.mentor}</p>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                View Profile
              </button>
              <button className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                Schedule Meeting
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;