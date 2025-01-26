import React from 'react';
import { BookOpen } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Mentors from './components/Mentors';
import Students from './components/Students';
import Meetings from './components/Meetings';
import Reports from './components/Reports';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <span className="ml-2 text-xl font-semibold">MentorTrack</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700">Dr. Aishwaraya</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Sidebar and Main Content */}
        <div className="flex">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/students" element={<Students />} />
              <Route path="/meetings" element={<Meetings />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

function Sidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Mentors', path: '/mentors' },
    { name: 'Students', path: '/students' },
    { name: 'Meetings', path: '/meetings' },
    { name: 'Reports', path: '/reports' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-white h-[calc(100vh-4rem)] shadow-md">
      <nav className="mt-5 px-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md ${
              isActive(item.path)
                ? 'text-blue-600 bg-gray-100'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default App;