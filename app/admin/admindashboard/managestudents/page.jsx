"use client";
import React, { useState } from "react";
import { Search, UserPlus, Filter, Eye, Trash2 } from "lucide-react";
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
import AddStudentForm from "./Addstudent";
const initialStudentsData = [
  {
    id: 1,
    name: "John Doe",
    class: "SS1",
    attendance: "95%",
    performance: "A",
  },
  {
    id: 2,
    name: "Jane Smith",
    class: "SS2",
    attendance: "98%",
    performance: "A+",
  },
  {
    id: 3,
    name: "Bob Johnson",
    class: "SS3",
    attendance: "92%",
    performance: "B",
  },
  {
    id: 4,
    name: "Alice Brown",
    class: "SS1",
    attendance: "97%",
    performance: "A-",
  },
];

const StudentManagementDashboard = () => {
  const [studentsData, setStudentsData] = useState(initialStudentsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCriteria, setFilterCriteria] = useState({
    grade: "",
    performance: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredStudents = studentsData.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCriteria.grade === "" || student.grade === filterCriteria.grade) &&
      (filterCriteria.performance === "" ||
        student.performance === filterCriteria.performance)
  );

  const handleAddStudent = (newStudent) => {
    setStudentsData([
      ...studentsData,
      { ...newStudent, id: studentsData.length + 1 },
    ]);
  };

  const handleDeleteStudent = (id) => {
    setStudentsData(studentsData.filter((student) => student.id !== id));
  };

  const handleFilterChange = (e) => {
    setFilterCriteria({ ...filterCriteria, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Student Management
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search students..."
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
                Add Student
              </button>
              <select
                name="grade"
                value={filterCriteria.grade}
                onChange={handleFilterChange}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Classes</option>
                <option value="9th">SS1</option>
                <option value="10th">SS2</option>
                <option value="11th">SS3</option>
              </select>
              <select
                name="performance"
                value={filterCriteria.performance}
                onChange={handleFilterChange}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Performances</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Grade</TableCell>
                  <TableCell>Attendance</TableCell>
                  <TableCell>Performance</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow
                    key={student.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {student.name}
                    </TableCell>
                    <TableCell>{student.grade}</TableCell>
                    <TableCell>{student.attendance}</TableCell>
                    <TableCell>{student.performance}</TableCell>
                    <TableCell align="right">
                      <IconButton aria-label="view" color="primary">
                        <Eye size={20} />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => handleDeleteStudent(student.id)}
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
        <AddStudentForm
          onClose={() => setShowAddForm(false)}
          onAddStudent={handleAddStudent}
        />
      )}
    </div>
  );
};

export default StudentManagementDashboard;
