"use client";
import React, { useState } from "react";
import PaymentModal from "./payment";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dummyOrderData = {
    customerId: "66ce3dfdb9a235324ccad373",
    businessId: "66ce3f187780c0a2e4b23987",
    orderItems: [
      {
        productId: "66cee0d29269b6478cdc1d0c",
        quantity: 2,
        price: 29.99,
        name: "Premium Widget",
        subtotal: 59.98,
      },
    ],
    totalAmount: 109.97,
    status: "Processing",
    shippingAddress: {
      street: "123 Test Street",
      city: "Testville",
      state: "Testylvania",
      postalCode: "12345",
      country: "Testland",
    },
    paymentMethod: "Card",
    paymentStatus: "Paid",
    paymentIntentId: "pi_" + Math.random().toString(36).substr(2, 9),
    paymentDate: new Date(),
    orderDate: new Date(),
    deliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    trackingNumber: "TRK" + Math.random().toString(36).substr(2, 9),
    notes: "This is a test order.",
  };

  useEffect(() => {
    const abortcontroller = new AbortController();
    const { signal } = abortcontroller;

    const createOrder = async () => {
      try {
        const response = await fetch("/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dummyOrderData),
          signal,
        });

        if (!response.ok) {
          throw new Error("Error posting data!");
        }

        const data = await response.json();
        console.log("Order created successfully:", data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
        }
      }
    };

    //  createOrder();

    return () => abortcontroller.abort();
  }, []);

  const [cartItems] = useState([
    { id: 1, name: "Product 1", price: 19.99, quantity: 1 },
    { id: 2, name: "Product 2", price: 29.99, quantity: 2 },
    { id: 3, name: "Product 3", price: 39.99, quantity: 1 },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send the form data to db
    console.log("Form submitted:", formData);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded mt-6 hover:bg-green-700 transition-colors"
              onClick={() => setIsModalOpen(true)}
              //   className="bg-blue-600 text-white py-2 px-4 rounded"
            >
              Proceed to payment
            </button>
            <PaymentModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
