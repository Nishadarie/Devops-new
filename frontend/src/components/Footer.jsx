import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">Glam Galore</h2>
            <p className="text-gray-400">Making your life beautiful...</p>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link to="/about" className="hover:text-gray-400 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-400 transition duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="border-gray-700 my-6" />
        <p className="text-gray-400 text-center">&copy; {new Date().getFullYear()} Glam Galore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
