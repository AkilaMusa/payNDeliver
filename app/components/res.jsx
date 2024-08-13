"use client";
import { Reviews, Star, Timer } from "@mui/icons-material";
import SearchBar from "./search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Link from "next/link";
import CartEmpty from "./cartempty";
import ProductCard from "./productscard";
import Cart from "./cart";
import { useEffect, useState } from "react";
import Skeleton from "./loaders/skeleton";
import RestaurantSkeleton from "./loaders/restuarant-skeleton";
const Restaurant = () => {
  const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLoading(true);
  //     }, 1000);
  //   }, []);
  return (
    <>
      <div className="container p-2 lg:flex mx-auto max-w-screen-xl h-auto border-2 py-4">
        {/* First div: background img div */}

        <div className="w-full lg:w-3/4  p-5 h-auto">
          <div className="w-full   h-60 relative">
            <div className="time absolute bottom-2 left-3 w-fit justify-center rounded-md flex items-center space-x-1 p-2 border text-xs border-green-800  text-green-800 ">
              <span>
                <AccessTimeIcon className="text-sm" />
              </span>
              <span>16-26 mins</span>
            </div>
            <img
              src="/images/coffe.jpg"
              className="w-full h-full object-cover rounded-xl"
              alt=""
            />
          </div>

          <div>
            {/* title */}
            <div className="lg:flex  sm:block justify-between">
              <div className="flex items-center justify-between ">
                <h1 className="text-2xl">Sweet Sensation-AbuleEgba</h1>
                <span className="px-2 text-xs flex justify-center items-center">
                  5.0
                  <Star fontSize="13px" className="mx-1" />
                  <span className="text-gray-300">(5)</span>
                </span>
              </div>
              <div className=" p-1  lg:hidden md:flex md:justify-between">
                <div className="  flex justify-between">
                  <p className="text-green-700">African</p>
                  <p className="text-gray-400">10:00am - 06:00pm</p>
                </div>
              </div>
              {/* Delivery btns */}
              <div className="flex  lg:max-w-[250px] md:w-full mt-4 border border-black p-1 bg-green-50 rounded-md">
                <button className="p-2 w-full text-white rounded-md bg-green-600 hover:bg-green-700">
                  Deliver now
                </button>
                <button className="p-2 w-full px-4 text-green-900 rounded-md hover:bg-green-100">
                  Pickup
                </button>
              </div>
              <p className="text-green-900 pt-3 lg:hidden md:block">
                Min Order $0
              </p>
            </div>
            <div className="py-5 border-b hidden lg:block">
              <p className="text-green-700">African</p>
            </div>
            <div className="py-5  hidden lg:flex lg:justify-between">
              <div>
                <p className="font-semibold">Opening time</p>
                <p className="text-gray-400">10:00am - 06:00pm</p>
              </div>
              <div>
                <p className="text-green-900">Min Order $0</p>
              </div>
            </div>
          </div>
          <div className="mt-5 overflow-x-auto p-4 md:no-scrollbar border-b">
            <span className="px-4 py-1 bg-green-200 text-green-900 rounded-xl  mx-3">
              All
            </span>
            <span className="p-3 text-gray-400 mx-3">Traditional</span>
            <span className="p-3 text-gray-400 mx-3">Spanish</span>
            <span className="p-3 text-gray-400 mx-3">Italian</span>
            <span className="p-3 text-gray-400 mx-3">Ghanian</span>
            <span className="p-3 text-gray-400 mx-3">Nigerian</span>
            <span className="p-3 text-gray-400 mx-3">Meals</span>
            <span className="p-3 text-gray-400 mx-3">Algerian</span>
            <span className="p-3 text-gray-400 mx-3">Arabian</span>
            <span className="p-3 text-gray-400 mx-3">English</span>
          </div>

          <div className="my-5 grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            {loading ? <Skeleton /> : <ProductCard />}
            {/* <ProductCard /> */}
          </div>
        </div>

        {/* Second div: cart */}
        <div className="hidden lg:block lg:w-2/4 border p-3 pt-5 justify-center">
          <div className="mb-4 ">{/* <Cart /> */}</div> {/* {/* <Cart /> */}
          <Cart />
          {/* <CartEmpty /> */}
        </div>
      </div>
    </>
  );
};

export default Restaurant;
