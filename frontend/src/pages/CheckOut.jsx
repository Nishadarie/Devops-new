import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Blue Colour shirt',
      price: 39.99,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Tshirt',
      price: 49.99,
      quantity: 1,
    },
  ]);

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const checkoutStyle = {
    backgroundImage: 'url("/images/bg.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="p-4" style={checkoutStyle}>
      <h1 className="text-3xl font-semibold text-black mb-4">Checkout</h1>
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2 text-green-600">Items in Cart:</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="text-blue-600">
              {item.name}: ${item.price.toFixed(2)} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2 text-green-600">Total Price:</h2>
        <p className="text-blue-600">${totalPrice.toFixed(2)}</p>
      </div>
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2 text-green-600">Payment Method:</h2>
        <div>
          <label className="text-blue-600">
            <input type="radio" name="paymentMethod" value="creditCard" /> Credit Card
          </label>
        </div>
        <div>
          <label className="text-blue-600">
            <input type="radio" name="paymentMethod" value="Cash" /> Cash
          </label>
        </div>
      </div>
      <div className="text-right">
        <p className="text-2xl text-green-500 font-semibold">Total: ${totalPrice.toFixed(2)}</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-xl text-white font-semibold mb-4">Do you wish to proceed?</p>
        <Link to="/ThankYouPage">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none mr-4">
            Pay Now
          </button>
        </Link>
        <Link to="/FrontPage">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none">
            No, I will Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;