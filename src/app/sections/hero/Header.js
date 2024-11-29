'use client';
// components/Header.js
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="">
      <div className="max-w-screen-xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src='/assest/logo.png' />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-800 hover:text-gray-600">Destinations</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Hotels</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Flights</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Bookings</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Login</a>
        </nav>

        {/* Sign Up Button */}
        <div className="hidden md:block">
          <button className="bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg">
            Sign up
          </button>
        </div>

        {/* Language Selector Dropdown */}
        <div className="hidden md:block">
          <select className="bg-transparent text-gray-800 border-2 border-gray-800 rounded-md p-2">
            <option value="EN">EN</option>
            <option value="FR">FR</option>
            <option value="ES">ES</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-800">Destinations</a>
            <a href="#" className="text-gray-800">Hotels</a>
            <a href="#" className="text-gray-800">Flights</a>
            <a href="#" className="text-gray-800">Bookings</a>
            <a href="#" className="text-gray-800">Login</a>
            <button className="bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg">
              Sign up
            </button>
            <select className="bg-transparent text-gray-800 border-2 border-gray-800 rounded-md p-2">
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="ES">ES</option>
            </select>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
