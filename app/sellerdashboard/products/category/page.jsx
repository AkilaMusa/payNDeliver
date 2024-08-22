"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import Image from "next/image";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import SearchIcon from "@mui/icons-material/Search";
import { Add } from "@mui/icons-material";
const foodCategories = [
  {
    id: 1,
    name: "Appetizers",
    image: "https://images.unsplash.com/photo-1598887142481-81bcb2ebd6b5",
    amountOfFoods: 12,
  },
  {
    id: 2,
    name: "Main Course",
    image: "https://images.unsplash.com/photo-1612874746357-8bdeedb4a013",
    amountOfFoods: 20,
  },
  {
    id: 3,
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1512058564366-c9faccaccf3c",
    amountOfFoods: 15,
  },
  {
    id: 4,
    name: "Beverages",
    image: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc",
    amountOfFoods: 10,
  },
  {
    id: 5,
    name: "Salads",
    image: "https://images.unsplash.com/photo-1572448862528-61d1a6dc7a04",
    amountOfFoods: 8,
  },
  {
    id: 6,
    name: "Soups",
    image: "https://images.unsplash.com/photo-1600417091385-cb2dfb3f52e9",
    amountOfFoods: 6,
  },
  {
    id: 7,
    name: "Grill",
    image: "https://images.unsplash.com/photo-1578836537282-bbdba55e3f90",
    amountOfFoods: 14,
  },
  {
    id: 8,
    name: "Pasta",
    image: "https://images.unsplash.com/photo-1589307000156-966c2e0f6f4b",
    amountOfFoods: 9,
  },
  {
    id: 9,
    name: "Seafood",
    image: "https://images.unsplash.com/photo-1600891964757-341e3c8c5a8d",
    amountOfFoods: 11,
  },
  {
    id: 10,
    name: "Sides",
    image: "https://images.unsplash.com/photo-1613489920383-6da5c1f5df83",
    amountOfFoods: 7,
  },
];

export default function DataTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tableRows, setTableRows] = useState(foodCategories);
  const [isVisible, setIsVisible] = useState(false);

  const handleDelete = (id) => {
    setTableRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const columns = [
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <DeleteIcon
          className="text-red-700"
          onClick={() => handleDelete(params.row.id)}
        />
      ),
    },
    { field: "id", headerName: "ID", width: 120 },
    { field: "name", headerName: "Category", width: 200 },
    { field: "amountOfFoods", headerName: "Amount", width: 200 },
  ];

  return (
    <div className="mt-16 py-4 ">
      <div className="flex justify-between items-center p-5">
        <h1 className="text-xl font-semibold">Categories</h1>
        <button className="bg-green-600 text-white rounded-md hover:shadow-md hover:bg-green-700 p-2 flex items-center">
          Add Category
          <Add />{" "}
        </button>
      </div>
      <div className="flex  items-center justify-between">
        <div className="">
          {/* <h1 className="font-semibold text-xl">Categories</h1> */}
        </div>
        <div className=" flex items-center">
          <div
            className={`  
      transition-all duration-300 ease-in-out
      ${
        isVisible
          ? "opacity-100 scale-100 translate-x-0"
          : "opacity-0 scale-95 -translate-x-full"
      }
    `}
          >
            <div className="p-2 flex items-center">
              <SearchIcon className="cursor-pointer  text-gray-400" />
              <input
                className="border-b border-gray-300 focus:outline-none focus:border-b-2 focus:border-black"
                onChange={handleSearch}
                value={searchTerm}
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="mx-2">
            {isVisible ? (
              <SearchOffIcon
                className={`
                cursor-pointer
                transition-all duration-300 ease-in-out
                `}
                onClick={() => setIsVisible((prev) => !prev)}
              />
            ) : (
              <SearchIcon
                className={`
            cursor-pointer
            transition-all duration-300 ease-in-out
          `}
                onClick={() => setIsVisible((prev) => !prev)}
              />
            )}
          </div>
        </div>
      </div>

      <DataGrid
        rows={tableRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        filterModel={{
          items: [
            {
              field: "name",
              operator: "contains",
              value: searchTerm,
            },
          ],
        }}
      />
    </div>
  );
}
