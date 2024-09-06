"use client"
import Image from 'next/image';
import { useState } from 'react';

const BusinessProfile = () => {
  const [activeTab, setActiveTab] = useState('Appetizers');

  const tabs = ['Appetizers', 'Main Courses', 'Desserts', 'Beverages'];

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="relative rounded-lg overflow-hidden shadow-lg mb-8">
        <Image
          src="https://th.bing.com/th/id/OIP.F48Ta-u-I74gaRY18l_8sAHaE8?rs=1&pid=ImgDetMain"
          alt="Restaurant cover"
          width={1200}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <div className="flex items-end space-x-4">
            <Image
              src="/restaurant-logo.png"
              alt="Restaurant logo"
              width={80}
              height={80}
              className="rounded-full border-4 border-white"
            />
            <div className="text-white">
              <h1 className="text-3xl font-bold">Tasty Bites Restaurant</h1>
              <p className="text-sm">Delicious Italian cuisine delivered to your doorstep</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="ml-2 text-sm">4.8 (500+ reviews)</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            {['Italian', 'Pizza', 'Pasta'].map((tag) => (
              <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
        <div className="flex space-x-2 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full ${
                activeTab === tab ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/margherita-pizza.jpg"
              alt="Margherita Pizza"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Margherita Pizza</h3>
              <p className="text-gray-600 mb-4">Classic pizza with tomato, mozzarella, and basil</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">$12.99</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">About Us</h3>
          <p className="text-gray-600">Tasty Bites has been serving authentic Italian cuisine since 1995...</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
          <ul className="text-gray-600">
            <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
            <li>Saturday - Sunday: 12:00 PM - 11:00 PM</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <address className="text-gray-600 not-italic">
            <p>123 Main St, Anytown, USA 12345</p>
            <p>Phone: 555-123-4567</p>
            <p>Email: info@tastybites.com</p>
          </address>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-2">
            <span className="text-yellow-400 mr-2">★★★★★</span>
            <span className="font-semibold">5 stars</span>
          </div>
          <p className="text-gray-600 mb-2">Absolutely delicious! The pizza was perfect and delivery was quick.</p>
          <div className="text-sm text-gray-500">
            <span>John D.</span> • <time>May 15, 2023</time>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessProfile;