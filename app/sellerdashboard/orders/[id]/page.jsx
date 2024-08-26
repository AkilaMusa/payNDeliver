"use client"
import {
  Container,
  Paper,
  Typography,
  Grid,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ProductTable from './productstable';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
function OrderDetailPage({params}) {
    const {id} = params
    console.log(id)
  const orderData = {
    customer: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Lagos, Nigeria',
    },
    order: {
      id: 'ORD123',
      date: '2024-08-23',
      status: 'Shipped',
    },
    delivery: {
      method: 'Standard Shipping',
      trackingNumber: 'TRACK123456',
      estimatedDelivery: '2024-08-30',
    },
    products: [
      { name: 'Laptop', quantity: 1, price: '$1000' },
      { name: 'Smartphone', quantity: 2, price: '$600' },
    ],
  };
  const products = [
    { name: "Tesla Model 3", price: 49990, quantity: 1 },
    { name: "iPhone 13 Pro", price: 999, quantity: 2 },
    { name: "MacBook Pro", price: 1999, quantity: 1 },
  ];
  return (
    <>
    <div className="mt-20 mb-5">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
        
  <div className="p-6 flex flex-col items-center border rounded-xl shadow-lg bg-white transform hover:scale-105 transition-all duration-300 ease-in-out">
    <span className="rounded-full flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 text-white mb-4">
      <PersonOutlineOutlinedIcon className="text-3xl" />
    </span>
    <div className="text-center">
      <h1 className="font-bold mb-3 text-xl text-gray-800">Customer</h1>
      <p className="mb-2 text-gray-600">Name: <span className="text-gray-900 font-semibold">John</span></p>
      <p className="mb-4 text-gray-600">Email: <span className="text-gray-900 font-semibold">John@gmail.com</span></p>
      <button className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 px-6 rounded-full text-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-1">
        View Profile
      </button>
    </div>
  </div>

  <div className="p-6 flex flex-col items-center border rounded-xl shadow-lg bg-white transform hover:scale-105 transition-all duration-300 ease-in-out">
    <span className="rounded-full flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 text-white mb-4">
      <PaymentsOutlinedIcon className="text-3xl" />
    </span>
    <div className="text-center">
      <h1 className="font-bold mb-3 text-xl text-gray-800">Payment Method</h1>
      <p className="mb-4 text-gray-600">Method: <span className="text-gray-900 font-semibold">Crypto</span></p>
      <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto rounded-full"></div>
    </div>
  </div>

  <div className="p-6 flex flex-col items-center border rounded-xl shadow-lg bg-white transform hover:scale-105 transition-all duration-300 ease-in-out">
    <span className="rounded-full flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-white mb-4">
      <LocalShippingOutlinedIcon className="text-3xl" />
    </span>
    <div className="text-center">
      <h1 className="font-bold mb-3 text-xl text-gray-800">Delivery</h1>
      <p className="mb-2 text-gray-600">City: <span className="text-gray-900 font-semibold">Maiduguri</span></p>
      <p className="mb-4 text-gray-600">maiduguri post nipost</p>
      <button className="bg-gradient-to-r from-yellow-500 to-orange-600 p-2 px-6 rounded-full text-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:from-yellow-600 hover:to-orange-700 transform hover:-translate-y-1">
        View on Map
      </button>
    </div>
  </div>
</div>
<div className="mt-10">
<ProductTable products={products} />

</div>
    </div>
    </>
  );
}

export default OrderDetailPage;
