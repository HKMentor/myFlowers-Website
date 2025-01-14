import Image from "next/image";
import React from "react";

const Cart: React.FC = () => {
  // Placeholder data for cart items
  const cartItems = [
    {
      id: 1,
      name: "Elegant Rose",
      price: 93,
      quantity: 2,
      image: "/images/flower1.jpg"
    },
    {
      id: 2,
      name: "Sunny Sunflower",
      price: 120,
      quantity: 1,
      image: "/images/flower3.jpg"
    }
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Your Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty. Start adding some products!</p>
      ) : (
        <div>
          {/* Cart Items */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-lg object-cover mr-4"
                  width={300}
                  height={300}
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
                  <p className="text-sm text-gray-500">Price: PKR {item.price}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <button className="px-4 py-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-600">
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Order Summary</h2>
            <p className="text-lg text-gray-600">
              Total Price: <span className="font-semibold text-gray-800">PKR {totalPrice}</span>
            </p>
            <button className="mt-4 w-full py-2 px-4 text-white bg-pink-500 rounded-md hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
