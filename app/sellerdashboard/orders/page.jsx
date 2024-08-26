"use client"
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  IconButton,
  Chip,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';

function createData(id, product, orderId, date, customerName, status) {
  return { id, product, orderId, date, customerName, status };
}

const rows = [
  createData(1, 'Laptop', 'ORD123', '2024-08-23', 'John Doe', 'Shipped'),
  createData(2, 'Smartphone', 'ORD124', '2024-08-20', 'Jane Doe', 'Pending'),
  createData(3, 'Headphones', 'ORD125', '2024-08-18', 'Alice Smith', 'Cancelled'),
  createData(4, 'Monitor', 'ORD126', '2024-08-16', 'Bob Johnson', 'Delivered'),
  createData(5, 'Keyboard', 'ORD127', '2024-08-15', 'Michael Brown', 'Shipped'),
];

function SortableOrdersTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('date');

  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedRows = rows.sort((a, b) => {
    if (order === 'asc') {
      return a[orderBy] < b[orderBy] ? -1 : 1;
    } else {
      return a[orderBy] > b[orderBy] ? -1 : 1;
    }
  });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'shipped': return 'primary';
      case 'pending': return 'warning';
      case 'cancelled': return 'error';
      case 'delivered': return 'success';
      default: return 'default';
    }
  };

  return (
    <div className='mt-20 mx-auto max-w-7xl min-h-full px-4 sm:px-6 lg:px-8'>
      <h1 className="mb-6 font-semibold text-xl text-gray-800">
       All Orders
      </h1>
      <TableContainer component={Paper} elevation={3} className="shadow-xl rounded-lg">
        <Table>
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell className="font-bold text-gray-700">Action</TableCell>
              {['product', 'orderId', 'date', 'customerName', 'status'].map((column) => (
                <TableCell 
                  key={column}
                  sortDirection={orderBy === column ? order : false}
                  className="font-bold text-gray-700"
                >
                  <TableSortLabel
                    active={orderBy === column}
                    direction={orderBy === column ? order : 'asc'}
                    onClick={() => handleSortRequest(column)}
                  >
                    {column.charAt(0).toUpperCase() + column.slice(1)}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map((row) => (
              <TableRow 
                key={row.id}
                hover
                className="transition duration-300 ease-in-out hover:bg-gray-50"
              >
                <TableCell>
                    <Link href={`orders/${row.orderId}`}>
                    <IconButton aria-label="view" size="small" className="text-blue-500 hover:text-blue-700">
                    <VisibilityIcon />
                  </IconButton>
                    </Link>
                  
                  {/* <IconButton aria-label="delete" size="small" className="text-red-500 hover:text-red-700">
                    <DeleteIcon />
                  </IconButton> */}
                </TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.orderId}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.customerName}</TableCell>
                <TableCell>
                  <Chip 
                    label={row.status} 
                    color={getStatusColor(row.status)}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SortableOrdersTable;