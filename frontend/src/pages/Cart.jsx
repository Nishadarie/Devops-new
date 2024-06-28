import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Blue Colour shirt',
      imageUrl: '/images/M01.webp',
      price: 39.99, 
      size: 'Medium', 
      quantity: 1, 
    },
    {
      id: 2,
      name: 'Tshirt',
      imageUrl: '/images/M11.webp',
      price: 49.99,
      size: 'Large',
      quantity: 1,
    },
    
  ]);

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  // Update the size of an item
  const updateSize = (itemId, newSize) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, size: newSize };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Increment quantity
  const incrementQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Decrement quantity
  const decrementQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4" style={{ backgroundImage: 'url("/images/bg.jpeg")', backgroundSize: 'cover' }}>
      <h1 className="text-3xl font-semibold text-white mb-4">My Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="bg-white rounded-md shadow-md p-2 mb-4 flex items-center">
              <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover mr-2" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
                <div>
                  <p className="text-blue-800 text-sm font-semibold">${item.price.toFixed(2)} each</p>
                  <label className="text-sm font-medium text-gray-500">Size:</label>
                  <select
                    value={item.size}
                    onChange={(e) => updateSize(item.id, e.target.value)}
                    className="w-32 px-2 py-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Small">XS</option>
                    <option value="Medium">S</option>
                    <option value="Large">M</option>
                    <option value="Large">L</option>
                    <option value="Large">XL</option>
                    <option value="Large">XXL</option>
                  </select>
                  <div className="mt-2">
                    <label className="text-sm font-medium text-gray-500">Quantity:</label>
                    <div className="flex items-center">
                      <button
                        className="bg-green-800 text-white px-2 py-1 rounded-md ml-2 hover:bg-green-700 focus:outline-none"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        className="bg-green-800 text-white px-2 py-1 rounded-md ml-2 hover:bg-green-700 focus:outline-none"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-black-500 text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-md ml-2 hover:bg-red-700 focus:outline-none"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right">
            <p className="text-2xl text-blue-800 font-semibold">Total: ${totalPrice.toFixed(2)}</p>
          </div>
          <div className="text-center mt-4">
            <p className="text-xl text-white font-semibold mb-4">Do you want to proceed?</p>
            <Link to="/Checkout">
              <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none mr-4">
                 Check Out
              </button>
            </Link>
            <Link to="/FrontPage">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
