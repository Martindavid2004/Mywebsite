import React from 'react';
import { BarChart3, Download, Filter, Calendar } from 'lucide-react';

const Reports = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Reports & Analytics</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <Download className="h-5 w-5" />
            Export Reports
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Department Overview</h2>
            <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="current">Current Semester</option>
              <option value="previous">Previous Semester</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Average CGPA</span>
                <span className="font-semibold">8.5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Attendance Rate</span>
                <span className="font-semibold">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Meeting Completion</span>
                <span className="font-semibold">88%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Mentoring Impact</h2>
            <Filter className="h-5 w-5 text-gray-500" />
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-600">Total Students</h3>
                <p className="text-2xl font-bold text-blue-600">450</p>
                <p className="text-sm text-gray-500">Across all years</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-600">Active Mentors</h3>
                <p className="text-2xl font-bold text-green-600">45</p>
                <p className="text-sm text-gray-500">Currently assigned</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Performance Trend</h3>
              <div className="h-40 flex items-end justify-between">
                {[65, 75, 85, 80, 90, 88].map((height, index) => (
                  <div key={index} className="w-8 bg-blue-500 rounded-t" style={{ height: `${height}%` }}></div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Recent Reports</h2>
          <div className="flex items-center gap-4">
            <Calendar className="h-5 w-5 text-gray-500" />
            <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="semester">This Semester</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Report Name</th>
                <th className="text-left py-3 px-4">Generated By</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: 'Monthly Performance Summary',
                  generator: 'Prof. Pandi Deepa',
                  date: '2024-03-19',
                  type: 'Performance',
                },
                {
                  name: 'Attendance Analysis Report',
                  generator: 'Dr. Rajesh Kumar',
                  date: '2024-03-18',
                  type: 'Attendance',
                },
                {
                  name: 'Mentoring Session Insights',
                  generator: 'Dr. Priya Sharma',
                  date: '2024-03-17',
                  type: 'Meeting',
                },
              ].map((report, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{report.name}</td>
                  <td className="py-3 px-4">{report.generator}</td>
                  <td className="py-3 px-4">{report.date}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {report.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-500 hover:text-blue-700">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;