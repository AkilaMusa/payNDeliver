"use client";
import React, { useState } from "react";
import {
  User,
  ShoppingCart,
  CreditCard,
  Heart,
  Star,
  Gift,
  ArrowLeftRight,
  Settings,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import Header from "../components/header";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const TabButton = ({ value, icon: Icon, label }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`flex items-center justify-center p-3 rounded-lg transition-all duration-300 ${
        activeTab === value
          ? "bg-indigo-600 text-white shadow-lg transform -translate-y-1"
          : "bg-white text-gray-600 hover:bg-indigo-100"
      }`}
    >
      <Icon
        className={`w-5 h-5 mr-2 ${activeTab === value ? "animate-pulse" : ""}`}
      />
      {label}
    </button>
  );

  const TabContent = ({ title, icon: Icon, children }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-6 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-3xl font-bold text-indigo-800 flex items-center mb-6">
        <Icon className="w-8 h-8 mr-3 text-indigo-600" />
        {title}
      </h2>
      {children}
    </div>
  );

  const Input = ({ label, id, type = "text", placeholder }) => (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
      />
    </div>
  );

  return (
    <>
      <div className="mb-4">
        <Header />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-indigo-600 p-6 text-white">
            {/* <h1 className="text-4xl font-bold text-center">Your Profile</h1> */}
          </div>

          <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <TabButton value="personal" icon={User} label="Personal" />
              <TabButton value="orders" icon={ShoppingCart} label="Orders" />
              <TabButton value="payment" icon={CreditCard} label="Payment" />
              <TabButton value="wishlist" icon={Heart} label="Wishlist" />
              <TabButton value="reviews" icon={Star} label="Reviews" />
            </div>

            {activeTab === "personal" && (
              <TabContent title="Personal Information" icon={User}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Full Name" id="name" placeholder="John Doe" />
                  <Input
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                  <Input
                    label="Phone"
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                  />
                  <Input
                    label="Shipping Address"
                    id="address"
                    placeholder="123 Main St, City, Country"
                  />
                </div>
                <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Save Changes
                </button>
              </TabContent>
            )}

            {activeTab === "orders" && (
              <TabContent title="Order History" icon={ShoppingCart}>
                <div className="space-y-6">
                  {[1, 2].map((order) => (
                    <div
                      key={order}
                      className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-xl text-indigo-800">
                          Order #{12345 + order}
                        </h3>
                        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Delivered
                        </span>
                      </div>
                      <p className="text-gray-600 mt-2">
                        Placed on: May {order}, 2023
                      </p>
                      <p className="text-xl font-bold text-indigo-600 mt-2">
                        Total: $129.99
                      </p>
                      <button className="mt-4 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center">
                        View Details
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </TabContent>
            )}

            {activeTab === "payment" && (
              <TabContent title="Payment Methods" icon={CreditCard}>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-xl text-indigo-800">
                        Visa ending in 1234
                      </h3>
                      <img
                        src="/api/placeholder/60/40"
                        alt="Visa Logo"
                        className="h-8"
                      />
                    </div>
                    <p className="text-gray-600 mt-2">Expiry: 12/2025</p>
                    <button className="mt-4 bg-red-100 hover:bg-red-200 text-red-800 font-bold py-2 px-4 rounded-lg transition-all duration-300">
                      Remove
                    </button>
                  </div>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center">
                    <CreditCard className="mr-2" />
                    Add New Payment Method
                  </button>
                </div>
              </TabContent>
            )}

            {activeTab === "wishlist" && (
              <TabContent title="Wishlist" icon={Heart}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <img
                        src={`/api/placeholder/400/${300 + item * 10}`}
                        alt="Product"
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-bold text-xl text-indigo-800">
                          Product Name {item}
                        </h3>
                        <p className="text-2xl font-bold text-indigo-600 mt-2">
                          $99.99
                        </p>
                        <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 w-full flex items-center justify-center">
                          <ShoppingCart className="mr-2" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabContent>
            )}

            {activeTab === "reviews" && (
              <TabContent title="Your Reviews" icon={Star}>
                <div className="space-y-6">
                  {[1, 2].map((review) => (
                    <div
                      key={review}
                      className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-xl text-indigo-800">
                          Product Name {review}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Reviewed on: June {review + 14}, 2023
                        </p>
                      </div>
                      <div className="flex my-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-5 h-5 ${
                              star <= review + 3
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 mt-2">
                        Great product! Exactly what I was looking for. The
                        quality exceeded my expectations.
                      </p>
                      <button className="mt-4 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-bold py-2 px-4 rounded-lg transition-all duration-300">
                        Edit Review
                      </button>
                    </div>
                  ))}
                </div>
              </TabContent>
            )}

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Gift,
                  title: "Loyalty Program",
                  content: "1,250 points",
                  subcontent: "Silver Member",
                  action: "View Rewards",
                },
                {
                  icon: ArrowLeftRight,
                  title: "Returns",
                  content: "No active returns",
                  action: "Start a Return",
                },
                {
                  icon: Settings,
                  title: "Preferences",
                  content: "Manage your account",
                  action: "Edit Preferences",
                },
                {
                  icon: HelpCircle,
                  title: "Support",
                  content: "Need help?",
                  action: "Get Support",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-lg shadow-lg text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="font-bold text-xl flex items-center mb-4">
                    <item.icon className="w-6 h-6 mr-2" />
                    {item.title}
                  </h3>
                  <p className="font-bold text-2xl mb-2">{item.content}</p>
                  {item.subcontent && (
                    <p className="text-indigo-200">{item.subcontent}</p>
                  )}
                  <button className="mt-4 bg-white text-indigo-600 font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-indigo-100 w-full">
                    {item.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
