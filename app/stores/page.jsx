"use client";
import { useEffect, useState } from "react";
import SearchBar from "../components/search";
import ShopCard from "../components/shopCards";
import { restaurants } from "../data/data";
import ShopCardSkeleton from "../components/loaders/shopCardskeleton";
const Stores = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const data = restaurants.map((item) => item);
  console.log(data);
  return (
    <>
      <div className="flex p-4 flex-wrap ">
        <div className="w-full mb-5">
          <div className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h1 className="mb-4 sm:mb-0 self-start">All Restaurants</h1>
            <div className="w-full sm:w-auto sm:ml-4 lg:w-1/3 xl:w-1/4">
              <SearchBar />
            </div>
          </div>
        </div>

        {loading ? (
          <div className="w-full flex flex-wrap">
            <div className="lg:w-1/3 md:w-full w-full mb-4">
              <ShopCardSkeleton />
            </div>
            <div className="lg:w-1/3 md:w-full w-full mb-4">
              <ShopCardSkeleton />
            </div>
            <div className="lg:w-1/3 md:w-full w-full mb-4">
              <ShopCardSkeleton />
            </div>
            <div className="lg:w-1/3 md:w-full w-full mb-4">
              <ShopCardSkeleton />
            </div>
            <div className="lg:w-1/3 md:w-full w-full mb-4">
              <ShopCardSkeleton />
            </div>
            <div className="lg:w-1/3 md:w-full w-full mb-4">
              <ShopCardSkeleton />
            </div>
          </div>
        ) : (
          restaurants.map(({ id, image, name, openingTime, categories }) => (
            <div className="lg:w-1/3 md:w-full w-full mb-4" key={id}>
              <ShopCard
                id={id}
                image={image}
                title={name}
                rating={5}
                categories={categories}
                deliverytime={openingTime}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Stores;
