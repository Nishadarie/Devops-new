
import { Link } from 'react-router-dom'; 

const ladies = [
  {
    id: 1,
    name: 'White Frock',
    imageUrl: '/images/L01.webp',
    price: '$39.99',
  },
  {
    id: 2,
    name: 'Two parts wear',
    imageUrl: '/images/L02.jpg',
    price: '$49.99',
  },
  
  {
    id: 3,
    name: 'Formal Kit',
    imageUrl: '/images/L03.webp',
    price: '$29.99',
  },
  {
    id: 4,
    name: 'Blue Skirt',
    imageUrl: '/images/L04.jpg',
    price: '$39.99',
  },
  {
    id: 5,
    name: 'Beach Wear',
    imageUrl: '/images/L05.jpg',
    price: '$34.99',
  },
  {
    id: 6,
    name: 'Salvar',
    imageUrl: '/images/L06.jpg',
    price: '$44.99',
  },
  {
    id: 7,
    name: 'Blue Frock',
    imageUrl: '/images/L07.webp',
    price: '$49.99',
  },
  {
    id: 8,
    name: 'Pink Long Frock',
    imageUrl: '/images/L08.jpg',
    price: '$39.99',
  },
  {
    id: 9,
    name: 'Red Lehenga',
    imageUrl: '/images/L09.jpg',
    price: '$49.99',
  },
];

const Ladies = () => {
  const storeStyle = {
    backgroundImage: 'url("/images/bg.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="p-4" style={storeStyle}>
      <h1 className="text-3xl font-semibold text-white mb-4">LADIES WEAR</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ladies.map((lady) => (
          <div key={lady.id} className="bg-gray-200 rounded-lg shadow-md p-4 text-center">
            <img src={lady.imageUrl} alt={lady.name} className="w-full object-cover mb-2" />
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{lady.name}</h2>
                <p className="text-purple-500 text-lg font-semibold text-left">{lady.price}</p>
              </div>
              <Link to={"/Cart"}>
              <button className="bg-green-800 text-white px-6 py-2 rounded-md hover-bg-blue-500 focus:outline-none mt-2">
                  <span className="pr-2">Add to Cart</span>
                  <img src="/images/Cart.png" alt="Cart Icon" className="w-6 h-6" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ladies;
