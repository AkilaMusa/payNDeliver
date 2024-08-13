"use client";
import { useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const CartItem = ({
  id,
  name,
  price,
  image,
  quantity,
  updateQuantity,
  removeItem,
}) => {
  return (
    <div className="flex h-30 mb-6 border rounded-md flex-row sm:flex-row justify-between w-full p-2 shadow-md">
      <div className="flex h-28   sm:mb-0">
        <img
          src={image}
          alt={name}
          className=" h-full rounded-md object-cover mr-1 lg:mr-4 "
        />

        <div className="flex-col flex justify-between ">
          <div className="title">
            <h3 className="font-semibold">{name}</h3>
          </div>
          <div className="btn w-full items-center  flex">
            <button
              onClick={() => updateQuantity(id, quantity - 1)}
              className="px-2  py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              onClick={() => updateQuantity(id, quantity + 1)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className=" flex-col flex justify-between">
        <p className="font-semibold">${price.toFixed(2)}</p>
        <button onClick={() => removeItem(id)} className="ml-4 text-red-700">
          <DeleteOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
