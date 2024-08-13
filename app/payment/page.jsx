"use client";
import { useState } from "react";

const PaymentModal = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [cryptoInfo, setCryptoInfo] = useState({
    walletAddress: "",
    selectedCrypto: "BTC",
  });

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  const handleCryptoInputChange = (e) => {
    const { name, value } = e.target;
    setCryptoInfo({ ...cryptoInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === "card") {
      console.log("Submitting card payment:", cardInfo);
    } else {
      console.log("Submitting crypto payment:", cryptoInfo);
    }
    //  process the payment
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Payment</h2>
          <button onClick={onClose} className="text-gray-500">
            &times;
          </button>
        </div>
        <div className="p-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full">
              <div className="p-6 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-4">
                  Select Payment Method
                </h2>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                  <button
                    className={`w-full border sm:w-1/2 px-4 py-2 rounded ${
                      paymentMethod === "card"
                        ? "border-green-600 text-green-700"
                        : "border-gray-400"
                    }`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    Credit/Debit Card
                  </button>
                  <button
                    className={`w-full sm:w-1/2 px-4 py-2 rounded border ${
                      paymentMethod === "crypto"
                        ? "border-green-600 text-green-700"
                        : "border-gray-400"
                    }`}
                    onClick={() => setPaymentMethod("crypto")}
                  >
                    Cryptocurrency
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  {paymentMethod === "card" ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={cardInfo.cardNumber}
                        onChange={handleCardInputChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                      <input
                        type="text"
                        name="cardName"
                        placeholder="Name on Card"
                        value={cardInfo.cardName}
                        onChange={handleCardInputChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <input
                          type="text"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={cardInfo.expiryDate}
                          onChange={handleCardInputChange}
                          className="w-full sm:w-1/2 p-2 border rounded"
                          required
                        />
                        <input
                          type="text"
                          name="cvv"
                          placeholder="CVV"
                          value={cardInfo.cvv}
                          onChange={handleCardInputChange}
                          className="w-full sm:w-1/2 p-2 border rounded"
                          required
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <select
                        name="selectedCrypto"
                        value={cryptoInfo.selectedCrypto}
                        onChange={handleCryptoInputChange}
                        className="w-full p-2 border rounded"
                      >
                        <option value="BTC">Bitcoin (BTC)</option>
                        <option value="ETH">Ethereum (ETH)</option>
                        <option value="USDT">Tether (USDT)</option>
                        <option value="XRP">Ripple (XRP)</option>
                      </select>
                      <input
                        type="text"
                        name="walletAddress"
                        placeholder="Your Wallet Address"
                        value={cryptoInfo.walletAddress}
                        onChange={handleCryptoInputChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded mt-6 hover:bg-green-700 transition-colors"
                  >
                    Pay Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
