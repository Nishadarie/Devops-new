import React from 'react';

const kids = [
  {
    id: 1,
    name: 'Blue Tshirt with short Trouser',
    imageUrl: '/public/images/04.jpeg',
    price: '$30.99',
  },
  {
    id: 2,
    name: 'Baby girl Kit',
    imageUrl: '/public/images/05.jpeg',
    price: '$40.99',
  },
  {
    id: 3,
    name: 'Baby Frock',
    imageUrl: '/public/images/06.jpg',
    price: '$20.99',
  },
  {
    id: 4,
    name: ' Orange Baby Frock',
    imageUrl: '/public/images/08.jpg',
    price: '$85.99',
  },
  {
    id: 5,
    name: 'Baby Boy Kit',
    imageUrl: '/public/images/09.jpg',
    price: '$88.99',
  },
  {
    id: 6,
    name: 'Yellow Frock',
    imageUrl: '/public/images/10.webp',
    price: '$64.99',
  },
  {
    id: 7,
    name: 'Baby KIt Blue',
    imageUrl: '/public/images/07.webp',
    price: '$42.99',
  },
  {
    id: 8,
    name: 'Yellow & Red Frock',
    imageUrl: '/public/images/11.avif',
    price: '$45.99',
  },
  {
    id: 9,
    name: 'Red Frock',
    imageUrl: '/public/images/12.jpg',
    price: '$56.99',
  },
];

const Store = () => {
  const storeStyle = {
    backgroundImage: 'url("/public/images/bg.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="p-4" style={storeStyle}>
      <h1 className="text-3xl font-semibold text-white mb-4">KIDS WEAR</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {kids.map((kid) => (
          <div key={kid.id} className="bg-gray-200 rounded-lg shadow-md p-4 text-center">
            <img src={kid.imageUrl} alt={kid.name} className="w-full object-cover mb-2" />
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{kid.name}</h2>
                <p className="text-purple-500 text-lg font-semibold text-left">{kid.price}</p>
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

export default Store;
