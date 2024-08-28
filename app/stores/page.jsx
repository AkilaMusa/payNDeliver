"use client";

import { useEffect, useState } from "react";
import SearchBar from "../components/search";
import ShopCard from "../components/shopCards";
import ShopCardSkeleton from "../components/loaders/shopCardskeleton";

const Stores = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchBusiness = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/business", { signal });
        if (!response.ok) throw new Error("Failed to fetch!");
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
        console.error(err.message);
      } finally {
        setLoading(false);
        setError("");
      }
    };

    fetchBusiness();

    return () => abortController.abort();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            All Restaurants
          </h1>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <SearchBar />
          </div>
        </header>

        {error && (
          <div className="text-red-500 mb-4">
            <p>{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ShopCardSkeleton key={index} />
              ))
            : data?.data?.map(({ _id, image, name, cuisineType }) => (
                <ShopCard
                  key={_id}
                  id={_id}
                  image={image}
                  title={name}
                  rating={5}
                  categories={cuisineType}
                  deliverytime={"9:00am - 4:00pm"}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Stores;
