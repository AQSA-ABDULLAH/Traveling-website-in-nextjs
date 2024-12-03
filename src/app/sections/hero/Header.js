'use client';
// components/Header.js
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="max-w-screen pt-12 flex justify-between items-center">
      {/* Logo Section */}
      <section>
        <div className="flex items-center space-x-2">
          <img src='/assest/logo.png' />
        </div>
      </section>


      {/* Navigation Links */}
      <section className='flex justify-between items-center gap-12'>
        <nav className="hidden md:flex space-x-16">
          <a href="#" className="text-[18px] text-[#212832] font-Google Sans font-medium">Destinations</a>
          <a href="#" className="text-[18px] text-[#212832] font-Google Sans font-medium">Hotels</a>
          <a href="#" className="text-[18px] text-[#212832] font-Google Sans font-medium">Flights</a>
          <a href="#" className="text-[18px] text-[#212832] font-Google Sans font-medium">Bookings</a>
          <a href="#" className="text-[18px] text-[#212832] font-Google Sans font-medium">Login</a>
        </nav>


        <div className="hidden md:block">
          <button className="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-2 rounded-lg">
            Sign up
          </button>
        </div>

        {/* Language Selector Dropdown */}
        <div className="hidden md:block">
          <select className="bg-transparent text-gray-800 rounded-md">
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
      </section>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2">
          <nav className="flex flex-col space-y-4 ">
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
