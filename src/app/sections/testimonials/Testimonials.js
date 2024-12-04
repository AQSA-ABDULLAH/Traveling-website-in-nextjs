"use client";
import { useState } from "react";

const testimonials = [
  {
    image: "/assest/Testimonials/Group 64.png",
  },
  {
    image: "/assest/Testimonials/Group 64.png",
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
    <div className="py-16">
      <div className="max-w-screen flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section - Title and Heading */}
        <section className="lg:w-[40%]">
          <h3 className="text-[18px] 2xl:text-[28px] text-[#5E6282] font-poppins font-semibold mb-2 tracking-wider">
            TESTIMONIALS
          </h3>
          <h2 className="text-[38px] sm:text-[49px] lg:text-[53px] 2xl:text-[96px] text-[#14183E] font-volkhov font-bold mb-6">
            What People Say About Us
          </h2>
          <img
            src="/assest/Testimonials/Group 61.png"
            alt="Testimonials decoration"
            className="w-[100px] mt-4"
          />
        </section>

        {/* Right Section - Image Carousel */}
        <section className="flex items-center justify-end mt-12 lg:mt-0">
          <div className="relative">
            {/* Image Carousel */}
            <div className="w-full h-auto">
              <img
                src={testimonials[activeIndex].image}
                alt={`Testimonial ${activeIndex + 1}`}
                className="w-full h-auto 2xl:w-[980px] object-contain"
              />
            </div>

            <div>

            </div>

            {/* Navigation Buttons */}
            {/* Navigation Buttons */}
            {/* This div shows on larger screens */}
            <div className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 flex flex-col items-center space-y-4 hidden lg:flex">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-gray-300"
              >
                &#x25B2; {/* Up arrow */}
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-gray-300"
              >
                &#x25BC; {/* Down arrow */}
              </button>
            </div>

            {/* This div shows on small screens */}
            <div className="flex justify-center mt-6 space-x-8 lg:hidden">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-gray-300"
              >
                &#x25C0; {/* Left arrow */}
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-gray-300"
              >
                &#x25B6; {/* Right arrow */}
              </button>
            </div>



          </div>
        </section>
      </div>
    </div>
  );
}


