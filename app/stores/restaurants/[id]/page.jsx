"use client";
import { Star } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ProductCard from "../../../components/productscard";
import CartEmpty from "../../../components/cartempty";
import { useEffect, useState } from "react";
import FoodDetailsModal from "../../../components/productdetails";
import { restaurants } from "../../../data/data";
import Productscardskeleton from "../../../components/loaders/productskeleton";
import { useCart } from "../../../contex/cartcontex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    console.log(cat);
    const dish = restaurant.foods.filter(({ category }) => category === e);
    console.log(dish);
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
    toast.success("added item to cart");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

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

      <div className="container lg:p-2 lg:flex mx-auto max-w-screen-xl h-auto border-2 py-4">
        {/* First div: background img div */}

        <div className="w-full lg:w-3/4 h-auto p-2">
          <div className={`w-full h-60 relative `}>
            <div
              className={`time absolute bg-gray-50 bottom-2 left-3 w-fit justify-center rounded-md flex items-center space-x-1 p-2 border text-xs border-green-800 text-green-800 ${
                loading ? "hidden" : "block"
              }`}
            >
              <span>
                <AccessTimeIcon className="text-sm" />
              </span>
              <span>{restaurant.deliveryTime}</span>
            </div>
            {loading ? (
              <div className="flex h-full w-full bg-gray-300 animate-pulse rounded-xl items-center border-2 justify-center">
                <img
                  src="/images/imageplaceholder.png"
                  className="w-14 h-17 object-cover rounded-xl"
                  alt=""
                />
              </div>
            ) : (
              <img
                src={restaurant.image}
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            )}
          </div>

          <div>
            {/* title */}
            <div className="lg:flex  sm:block justify-between">
              <div
                className={`flex ${
                  loading ? "lg:w-1/2" : ""
                } items-center justify-between`}
              >
                {loading ? (
                  <h1
                    className={` bg-gray-300 animate-pulse  w-1/2 mt-2  h-3 rounded-md ${
                      loading ? "lg:w-full" : ""
                    }`}
                  ></h1>
                ) : (
                  <h1 className="text-2xl">{restaurant.name}</h1>
                )}{" "}
                {loading ? (
                  <span
                    className={`${
                      loading ? "lg:hidden" : ""
                    } px-2 h-2  w-8 animate-pulse bg-gray-300 rounded-md`}
                  ></span>
                ) : (
                  <span className="px-2 text-xs flex justify-center items-center">
                    {restaurant.rating}
                    <Star fontSize="13px" className="mx-1 text-yellow-600" />
                    <span className="text-gray-600">(5)</span>
                  </span>
                )}
                {/* <span className="px-2 text-xs flex justify-center items-center">
                  {restaurant.rating}
                  <Star fontSize="13px" className="mx-1 text-yellow-600" />
                  <span className="text-gray-600">(5)</span>
                </span> */}
              </div>
              <div className="p-1 lg:hidden md:flex md:justify-between">
                <div className="flex justify-between">
                  {loading ? (
                    <p
                      className={`${
                        loading ? "lg:w-28" : ""
                      }  bg-gray-300 mt-2 rounded-md animate-pulse h-2 w-14`}
                    ></p>
                  ) : (
                    <p className="text-green-700">African</p>
                  )}
                  {loading ? (
                    <p className="bg-gray-300 mt-2 rounded-md animate-pulse h-2 w-14"></p>
                  ) : (
                    <p className="text-gray-400">{restaurant.deliveryTime}</p>
                  )}
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

              {loading ? (
                <p className="bg-gray-300 mt-4 lg:hidden rounded-md animate-pulse h-2 w-14"></p>
              ) : (
                <p className="text-green-900 pt-3 lg:hidden md:block">
                  Min Order $0
                </p>
              )}
            </div>
            <div className="py-5 border-b hidden lg:block">
              {loading ? (
                <div className=" ">
                  <p className="lg:w-1/3 bg-gray-300 mt-2  rounded-md animate-pulse h-2 w-14"></p>
                </div>
              ) : (
                <p className="text-green-700">African</p>
              )}
            </div>
            <div className="py-5 hidden lg:flex lg:justify-between">
              <div>
                {loading ? (
                  <p className="bg-gray-300 mt-2 rounded-md animate-pulse h-2 w-14"></p>
                ) : (
                  <p className="font-semibold">Opening time</p>
                )}
                {loading ? (
                  <p className="bg-gray-300 mt-2 rounded-md animate-pulse h-2 w-14"></p>
                ) : (
                  <p className="text-gray-400">{restaurant.openingTime}</p>
                )}
              </div>
              <div>
                {loading ? (
                  <p className="bg-gray-300 mt-2 rounded-md animate-pulse h-2 w-14"></p>
                ) : (
                  <p className="text-green-900">Min Order $0</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 overflow-x-auto p-4 flex items-center md:no-scrollbar border-b mb-5">
            {loading ? (
              <div>
                <span className="bg-gray-300 animate-pulse h-6 w- py-1 px-4 rounded-xl"></span>
                <span className="bg-gray-300 animate-pulse h-6 w-12 py-1 px-8 rounded-xl mx-2"></span>
                <span className="bg-gray-300 animate-pulse h-6 w-12 py-1 px-4 rounded-xl mx-2"></span>
                <span className="bg-gray-300 animate-pulse h-6 w-6 py-1 px-12 rounded-xl mx-2"></span>
                <span className="bg-gray-300 animate-pulse h-6 w-8 py-1 px-8 rounded-xl mx-2"></span>
                <span className="bg-gray-300 animate-pulse h-6 w-8 py-1 px-4 rounded-xl mx-2"></span>
                <span className="bg-gray-300 animate-pulse h-6 w-8 py-1 px-8 rounded-xl mx-2"></span>
                <span className="bg-gray-300 animate-pulse h-6 w-8 py-1 px-4 rounded-xl mx-2"></span>
              </div>
            ) : (
              <>
                <span
                  onClick={() => {
                    setData(prod);
                    setCat("All");
                  }}
                  className={`px-4 py-1 cursor-pointer text-gray-400 ${
                    cat === "All"
                      ? "bg-green-50 text-green-900"
                      : "bg-white text-gray-400"
                  } rounded-xl`}
                >
                  All
                </span>
                {restaurant.categories.map((category, index) => (
                  <span
                    key={index}
                    className={`p-3 cursor-pointer ${
                      category === cat
                        ? "bg-green-50 text-green-900 rounded-xl"
                        : "bg-white text-gray-400"
                    } mx-3`}
                    onClick={() => handleDishes(category)}
                  >
                    {category}
                  </span>
                ))}
              </>
            )}
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 lg:p-4">
            {loading ? (
              <>
                <div className="w-100 ">
                  <Productscardskeleton />
                </div>
                <div className="w-100 ">
                  <Productscardskeleton />
                </div>
              </>
            ) : (
              data.map(({ name, title, image, id, price }) => (
                <ProductCard
                  key={id}
                  id={id}
                  image={image}
                  title={name}
                  dsc={title}
                  price={price}
                  onclick={() => details(id)}
                />
              ))
            )}
          </div>
        </div>

        {/* Second div: cart */}
        <div className="hidden lg:block lg:w-1/4 border p-3 pt-5 justify-center">
          <div className="mb-4">
            <CartEmpty />
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
