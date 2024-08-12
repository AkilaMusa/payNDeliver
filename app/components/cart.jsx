"use client";
import { Add, ReduceCapacity } from "@mui/icons-material";
import Image from "next/image";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
const Cart = ({ image, name, dsc, price }) => {
  const [count, setCount] = useState(1);
  const stock = 5;
  return (
    <>
      <div className="m-1  ">
        <div className="relative flex flex-row p-2   bg-white rounded-lg shadow md:flex-row">
          <input type="checkbox" className="absolute top-2 right-2 z-10" />

          <div className="flex flex-row justify-center items-center w-full">
            <div className="imgdiv rounded-lg">
              <Image
                src="/images/coffe.jpg"
                className="rounded-lg"
                width={90}
                height={80}
                alt="Coffee"
              />
            </div>

            <div className="flex justify-between w-full mx-2">
              <div className="w-full">
                <p className="text-">Cappuchino</p>
                <p className="text-sm text-gray-400"> strawberrys</p>
                <p className="text-sm font-semibold text-green-800">$200</p>
              </div>
              <div className="btns flex w-full justify-end items-center pr-6">
                <button
                  onClick={() =>
                    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1))
                  }
                  className="bg-gray-50 px-1 text-gray-500 flex items-center rounded-md"
                >
                  <RemoveIcon />
                </button>
                <span className="px-2 cursor-pointer text-gray-400">
                  {count}
                </span>
                <button
                  onClick={() =>
                    setCount((prevCount) =>
                      prevCount < stock ? prevCount + 1 : stock
                    )
                  }
                  className="bg-gray-50 text-gray-500 rounded-md flex items-center px-1"
                >
                  <Add />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
