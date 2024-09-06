"use client";
import React, { useState } from "react";
import { Search, UserPlus, Eye, Trash2, Edit2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";

const initialStaffData = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Teacher",
    department: "Mathematics",
    yearsOfExperience: 8,
    email: "emma.thompson@school.edu",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Administrator",
    department: "Administration",
    yearsOfExperience: 12,
    email: "michael.chen@school.edu",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Counselor",
    department: "Student Services",
    yearsOfExperience: 5,
    email: "sarah.johnson@school.edu",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Teacher",
    department: "Science",
    yearsOfExperience: 7,
    email: "david.rodriguez@school.edu",
  },
];

const AddStaffForm = ({ onClose, onAddStaff }) => {
  const [staffData, setStaffData] = useState({
    name: "",
    role: "",
    department: "",
    yearsOfExperience: "",
    email: "",
  });

  const handleChange = (e) => {
    setStaffData({ ...staffData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStaff(staffData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Add New Staff Member
        </h2>
        <form onSubmit={handleSubmit}>
          {["name", "role", "department", "yearsOfExperience", "email"].map(
            (field) => (
              <div key={field} className="mb-4">
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700 capitalize"
                >
                  {field.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "yearsOfExperience"
                      ? "number"
                      : "text"
                  }
                  id={field}
                  name={field}
                  value={staffData[field]}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  required
                />
              </div>
            )
          )}
          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Staff
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const StaffManagementDashboard = () => {
  const [staffData, setStaffData] = useState(initialStaffData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCriteria, setFilterCriteria] = useState({
    role: "",
    department: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredStaff = staffData.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCriteria.role === "" || staff.role === filterCriteria.role) &&
      (filterCriteria.department === "" ||
        staff.department === filterCriteria.department)
  );

  const handleAddStaff = (newStaff) => {
    setStaffData([...staffData, { ...newStaff, id: staffData.length + 1 }]);
  };

  const handleDeleteStaff = (id) => {
    setStaffData(staffData.filter((staff) => staff.id !== id));
  };

  const handleFilterChange = (e) => {
    setFilterCriteria({ ...filterCriteria, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Staff Management Dashboard
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search staff..."
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
            <div className="flex space-x-4">
              <button
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                onClick={() => setShowAddForm(true)}
              >
                <UserPlus size={20} className="mr-2" />
                Add Staff
              </button>
              <select
                name="role"
                value={filterCriteria.role}
                onChange={handleFilterChange}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Roles</option>
                <option value="Teacher">Teacher</option>
                <option value="Administrator">Administrator</option>
                <option value="Counselor">Counselor</option>
              </select>
              <select
                name="department"
                value={filterCriteria.department}
                onChange={handleFilterChange}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Departments</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="Administration">Administration</option>
                <option value="Student Services">Student Services</option>
              </select>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="staff table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Years of Experience</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredStaff.map((staff) => (
                  <TableRow
                    key={staff.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {staff.name}
                    </TableCell>
                    <TableCell>{staff.role}</TableCell>
                    <TableCell>{staff.department}</TableCell>
                    <TableCell>{staff.yearsOfExperience}</TableCell>
                    <TableCell>{staff.email}</TableCell>
                    <TableCell align="right">
                      <IconButton aria-label="view" color="primary">
                        <Eye size={20} />
                      </IconButton>
                      <IconButton aria-label="edit" color="default">
                        <Edit2 size={20} />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => handleDeleteStaff(staff.id)}
                      >
                        <Trash2 size={20} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      {showAddForm && (
        <AddStaffForm
          onClose={() => setShowAddForm(false)}
          onAddStaff={handleAddStaff}
        />
      )}
    </div>
  );
};

export default StaffManagementDashboard;
