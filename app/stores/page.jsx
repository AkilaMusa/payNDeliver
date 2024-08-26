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

  return (
    <div className=" min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">All Restaurants</h1>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <SearchBar />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ShopCardSkeleton key={index} />
              ))
            : restaurants.map(({ id, image, name, openingTime, categories }) => (
                <ShopCard
                  key={id}
                  id={id}
                  image={image}
                  title={name}
                  rating={5}
                  categories={categories}
                  deliverytime={openingTime}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Stores;