"use client";

import { useEffect, useState } from "react";
import SearchBar from "../components/search";
import ShopCard from "../components/shopCards";
import ShopCardSkeleton from "../components/loaders/shopCardskeleton";
import { Search, Utensils, PizzaIcon, Pill, ShoppingBag, ShoppingCart, Shirt } from 'lucide-react';

const Stores = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const CategoryButton = ({ children, icon: Icon, isActive, onClick }) => (
    <button 
      onClick={onClick}
      className={`flex items-center px-4 py-2 rounded-full transition-all duration-200 ${
        isActive 
          ? 'bg-green-500 text-white  scale-105' 
          : 'bg-white text-gray-700 hover:bg-green-100 hover:text-green-700'
      }`}
    >
      <Icon className={`mr-2 ${isActive ? 'stroke-white' : 'stroke-green-500'}`} size={20} />
      <span className="font-medium">{children}</span>
    </button>
  );

  const categories = [
    { name: 'All', icon: ShoppingCart },
    { name: 'Restaurants', icon: Utensils },
    { name: 'Pizza', icon: PizzaIcon },
    { name: 'Pharmacy', icon: Pill },
    { name: 'Provision', icon: ShoppingBag },
    { name: 'Fashion', icon: Shirt },
  ];

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
  
    const fetchBusiness = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/business", { signal });
        if (!response.ok) throw new Error("Failed to fetch!");
        const fetchedData = await response.json();
        setData(fetchedData);
        console.log(fetchedData);
      } catch (err) {
        if (err.name !== 'AbortError') {  
          setError(err.message);
          console.error(err.message);
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchBusiness();
  
    return () => abortController.abort();
  }, []);
  

  const filteredData = data?.data?.filter(shop => 
    (activeCategory === 'All' || shop.cuisineType.includes(activeCategory)) &&
    shop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex px-5 space-x-4 mb-8 overflow-x-auto pb-4">
          {categories.map((category) => (
            <CategoryButton 
              key={category.name} 
              icon={category.icon}
              isActive={activeCategory === category.name}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </CategoryButton>
          ))}
        </div>
        
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            All Stores
          </h1>
          <div className="w-full md:w-1/2 lg:w-1/3 relative">
            <input
              type="text"
              placeholder="Search stores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </header>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ShopCardSkeleton key={index} />
              ))
            : filteredData?.map(({ _id, image, name, cuisineType }) => (
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