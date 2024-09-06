"use client";
import React, { useState } from "react";
import {
  Users,
  BookOpen,
  Calendar,
  ClipboardList,
  TrendingUp,
  AlertCircle,
  Search,
  Bell,
  User,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const HighSchoolDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for the dashboard
  const studentData = [
    { grade: "SS1", count: 120 },
    { grade: "SS2", count: 110 },
    { grade: "SS3", count: 105 },
    // { grade: "12th", count: 100 },
  ];

  const recentActivities = [
    { id: 1, action: "New student enrolled", timestamp: "2 hours ago" },
    { id: 2, action: "Grade report generated", timestamp: "4 hours ago" },
    { id: 3, action: "Attendance updated", timestamp: "1 day ago" },
    { id: 4, action: "New document uploaded", timestamp: "2 days ago" },
  ];

  const QuickAccessCard = ({ icon, title, count, color }) => (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
      <div className={`rounded-full p-3 mr-4 ${color}`}>{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{count}</h3>
        <p className="text-gray-500">{title}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <QuickAccessCard
            icon={<Users className="h-6 w-6 text-blue-500" />}
            title="Total Students"
            count="435"
            color="bg-blue-100"
          />
          <QuickAccessCard
            icon={<Users className="h-6 w-6 text-green-500" />}
            title="Teachers"
            count="24"
            color="bg-green-100"
          />
          <QuickAccessCard
            icon={<ClipboardList className="h-6 w-6 text-yellow-500" />}
            title="Pending Records"
            count="18"
            color="bg-yellow-100"
          />
          <QuickAccessCard
            icon={<Calendar className="h-6 w-6 text-purple-500" />}
            title="Upcoming Events"
            count="3"
            color="bg-purple-100"
          />
        </div>

        {/* Charts and Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Student Distribution Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Student Distribution by Class
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={studentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="grade" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Recent Activities
            </h2>
            <ul className="space-y-4">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="flex items-start">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.timestamp}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
              Add New Student
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
              Generate Reports
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
              Update Attendance
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
              Manage Documents
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HighSchoolDashboard;
