import React from 'react';
import { Link } from 'react-router-dom';

const gents = [
  {
    id: 1,
    name: 'Blue Colour shirt',
    imageUrl: '/images/M01.webp',
    price: '$39.99',
  },
  {
    id: 2,
    name: 'Tshirt',
    imageUrl: '/images/M11.webp',
    price: '$49.99',
  },
  {
    id: 3,
    name: 'Coat Kit',
    imageUrl: '/images/M03.jpg',
    price: '$29.99',
  },
  {
    id: 4,
    name: 'Beach Kit',
    imageUrl: '/images/M04.jpg',
    price: '$39.99',
  },
  {
    id: 5,
    name: 'White Shirt',
    imageUrl: '/images/M05.jpg',
    price: '$34.99',
  },
  {
    id: 6,
    name: 'Blue Line Shirt',
    imageUrl: '/images/M06.jpg',
    price: '$44.99',
  },
  {
    id: 7,
    name: 'Blue Designed Shirt',
    imageUrl: '/images/M07.jpeg',
    price: '$49.99',
  },
  {
    id: 8,
    name: 'Ash Coat',
    imageUrl: '/images/M08.jpg',
    price: '$39.99',
  },
  {
    id: 9,
    name: 'Office Kit',
    imageUrl: '/images/M09.jpg',
    price: '$49.99',
  },
];

const Gents = () => {
  const storeStyle = {
    backgroundImage: 'url("/images/bg.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="p-4 relative" style={storeStyle}>
      <Link to="/Cart" className="absolute top-4 right-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
          Cart
        </button>
      </Link>
      <h1 className="text-3xl font-semibold text-white mb-4">Gents Wear</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {gents.map((gent) => (
          <div key={gent.id} className="bg-gray-200 rounded-lg shadow-md p-4 text-center">
            <img src={gent.imageUrl} alt={gent.name} className="w-full object-cover mb-2" />
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{gent.name}</h2>
                <p className="text-blue-800 text-lg font-semibold text-left">{gent.price}</p>
              </div>
             
                <button className="bg-green-800 text-white px-6 py-2 rounded-md hover-bg-blue-500 focus:outline-none mt-2">
                  <span className="pr-2">Add to Cart</span>
                  <img src="/images/Cart.png" alt="Cart Icon" className="w-6 h-6" />
                </button>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gents;
