"use client";
import { useState } from 'react';

const testimonials = [
  {
    image: '/assest/Testimonials/Group 64.png'
  },
  {
    image: '/assest/Testimonials/Group 64.png'
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex py-16 ml-36 justify-between">
      <section className=''>
        <h3 className='text-[18px] text-[#5E6282] font-poppins font-semibold mb-2 tracking-wider'>TESTIMONIALS</h3>
        <h2 className="text-[53px] text-[#14183E] font-volkhov font-bold mb-6">What People Say About Us</h2>
        <img src='/assest/Testimonials/Group 61.png'/>
      </section>
      <section className="w-4/5 flex mr-12">
        <div>
          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
          />
        </div>
        <div className="flex flex-col justify-between mt-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center text-3xl text-gray-700 hover:text-blue-500"
          >
            &#x2303;
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center text-3xl text-gray-700 hover:text-blue-500"
          >
            &#x2304;
          </button>

        </div>
      </section>
    </div>
  );
}

