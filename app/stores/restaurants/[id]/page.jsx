"use client";
import { Star, AccessTime, LocalDining, DirectionsCar, Phone, Email, LocationOn } from "@mui/icons-material";
import ProductCard from "../../../components/productscard";
import CartEmpty from "../../../components/cartempty";
import { useEffect, useState } from "react";
import FoodDetailsModal from "../../../components/productdetails";
import { restaurants } from "../../../data/data";
import Productscardskeleton from "../../../components/loaders/productskeleton";
import { useCart } from "../../../contex/cartcontex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartItem from "../../../components/shoppingCart";
import CartPage from "../../../cart/page";
import CartContent from "./cartcontent";

const Restaurant = ({ params }) => {
  const { id } = params;
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState("All");
  const { addToCart } = useCart();

  const restaurant = restaurants.find((food) => parseInt(id) === food.id);
  const prod = restaurant.foods.map(({ name, title, image, id, price }) => ({
    name,
    title,
    image,
    id,
    price,
  }));

  const [data, setData] = useState(prod);
  const [det, setDet] = useState({
    title: "",
    price: "",
    dsc: "",
    image: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const details = (e) => {
    const m = restaurant.foods.find((food) => e === food.id);
    setDet({
      id: m.id,
      title: m.name,
      image: m.image,
      dsc: m.title,
      price: m.price,
    });
    setIsModalOpen(true);
  };

  const handleDishes = (e) => {
    setCat(e);
    const dish = restaurant.foods.filter(({ category }) => category === e);
    if (dish.length === 0) return;
    setData(dish);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Added item to cart");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <FoodDetailsModal
            id={det.id}
            title={det.title}
            price={det.price}
            image={det.image}
            addToCart={handleAddToCart}
            dsc={det.dsc}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      )}

      <div className="container mx-auto max-w-screen-xl border p-4">
        <div className="lg:flex gap-8">
          <div className="w-full lg:w-3/4">
            {/* Hero Section */}
            <div className="relative h-80 mb-6 rounded-xl overflow-hidden shadow-lg">
              {loading ? (
                <div className="h-full w-full bg-gray-300 animate-pulse flex items-center justify-center">
                  <div className="w-20 h-20"></div>
                  {/* <img src="/images/imageplaceholder.png" className="w-20 h-20 object-cover" alt="" /> */}
                </div>
              ) : (
                <img src={restaurant.image} className="w-full h-full object-cover" alt={restaurant.name} />
              )}
              {/* <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-full shadow-md flex items-center space-x-2">
                <AccessTime className="text-green-600" fontSize="small" />
                <span className="text-sm font-medium text-green-800">{restaurant.deliveryTime}</span>
              </div> */}
            </div>

            {/* Restaurant Info */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                {loading ? (
                  <div className="h-8 bg-gray-300 rounded w-1/3 animate-pulse"></div>
                ) : (
                  <h1 className="text-3xl font-bold">{restaurant.name}</h1>
                )}
                {loading ? (
                  <div className="h-6 bg-gray-300 rounded w-16 animate-pulse"></div>
                ) : (
                  <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                    <Star className="text-yellow-500 mr-1" fontSize="small" />
                    <span className="font-medium">{restaurant.rating}</span>
                    <span className="text-sm text-gray-600 ml-1">(5)</span>
                  </div>
                )}
              </div>

              <div className="flex space-x-4 mb-6">
                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
                  <LocalDining className="mr-2" /> Deliver now
                </button>
                <button className="flex-1 border border-green-600 text-green-600 py-2 px-4 rounded-full hover:bg-green-50 transition duration-300 flex items-center justify-center">
                  <DirectionsCar className="mr-2" /> Pickup
                </button>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mb-6">
                <div>
                  <p className="font-semibold text-gray-800">Opening time</p>
                  <p>{restaurant.openingTime}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Min Order</p>
                  <p>$0</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Cuisine</p>
                  <p className="text-green-600">African</p>
                </div>
              </div>
            </div>

            {/* Menu Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
              <div className="flex space-x-2 overflow-x-auto pb-4 mb-6">
                {loading
                  ? Array(6).fill().map((_, index) => (
                      <div key={index} className="h-10 w-20 bg-gray-300 rounded-full animate-pulse flex-shrink-0"></div>
                    ))
                  : [
                      <button
                        key="all"
                        onClick={() => { setData(prod); setCat("All"); }}
                        className={`px-4 py-2 rounded-full flex-shrink-0 transition duration-300 ${
                          cat === "All" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                      >
                        All
                      </button>,
                      ...restaurant.categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => handleDishes(category)}
                          className={`px-4 py-2 rounded-full flex-shrink-0 transition duration-300 ${
                            category === cat ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                          }`}
                        >
                          {category}
                        </button>
                      )),
                    ]}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {loading
                  ? Array(4).fill().map((_, index) => <Productscardskeleton key={index} />)
                  : data.map(({ name, title, image, id, price }) => (
                      <ProductCard
                        key={id}
                        id={id}
                        image={image}
                        title={name}
                        dsc={title}
                        price={price}
                        onclick={() => details(id)}
                      />
                    ))}
              </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
              <div className="space-y-4">
                {loading ? (
                  Array(3).fill().map((_, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg animate-pulse">
                      <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    </div>
                  ))
                ) : (
                  [
                    { name: "John D.", rating: 5, comment: "Absolutely delicious! The pizza was perfect and delivery was quick." },
                    { name: "Sarah M.", rating: 4, comment: "Great food and service. Will order again!" },
                    { name: "Mike R.", rating: 5, comment: "Best Italian food in town. Highly recommended!" }
                  ].map((review, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Star className="text-yellow-500 mr-1" fontSize="small" />
                        <span className="font-medium">{review.rating}</span>
                        <span className="text-sm text-gray-600 ml-2">{review.name}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Opening Hours and Contact Info */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
                <div className="bg-gray-100 p-4 rounded-lg">
                  {loading ? (
                    Array(7).fill().map((_, index) => (
                      <div key={index} className="flex justify-between mb-2">
                        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex justify-between mb-2">
                        <span>Monday - Friday:</span>
                        <span>11:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Saturday - Sunday:</span>
                        <span>12:00 PM - 11:00 PM</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="bg-gray-100 p-4 rounded-lg">
                  {loading ? (
                    Array(3).fill().map((_, index) => (
                      <div key={index} className="flex items-center mb-3">
                        <div className="h-6 w-6 bg-gray-300 rounded-full mr-3"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex items-center mb-3">
                        <LocationOn className="text-green-600 mr-3" />
                        <span>123 Main St, Anytown, USA 12345</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <Phone className="text-green-600 mr-3" />
                        <span>555-123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <Email className="text-green-600 mr-3" />
                        <span>info@tastybites.com</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Cart Section */}
          <div className="hidden lg:block border lg:w-1/4">
            <div className="sticky top-4 bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Your Cart</h2>
              {/* cart items */}
              <CartContent/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurant;