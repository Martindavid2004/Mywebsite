import React from 'react';
import { Mail, Phone, Award, Users, Search } from 'lucide-react';

const mentors = [
  {
    id: 1,
    name: 'Prof. Pandi Deepa',
    department: 'AI&DS',
    email: 'pandideepa@college.edu',
    phone: '+91 98765 43210',
    specialization: 'Machine Learning',
    studentsCount: 45,
  },
  {
    id: 2,
    name: 'Prof. Dhavapavithra',
    department: 'AI&DS',
    email: 'dhavapavithra@college.edu',
    phone: '+91 98765 43211',
    specialization: 'Deep Learning',
    studentsCount: 38,
  },
  {
    id: 3,
    name: 'Prof. Pandi Selvi',
    department: 'AI&DS',
    email: 'pandiselvi@college.edu',
    phone: '+91 98765 43212',
    specialization: 'Data Science',
    studentsCount: 42,
  },
];

const Mentors = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mentors Directory</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search mentors..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">{mentor.name}</h2>
                <p className="text-gray-600">{mentor.department}</p>
              </div>
              <Award className="h-8 w-8 text-blue-500" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                <span>{mentor.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>{mentor.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2" />
                <span>{mentor.studentsCount} Students</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <h3 className="text-sm font-semibold text-gray-600">Specialization</h3>
              <p className="mt-1 text-gray-800">{mentor.specialization}</p>
            </div>

            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;