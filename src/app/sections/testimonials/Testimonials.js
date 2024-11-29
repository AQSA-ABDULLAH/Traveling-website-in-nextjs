import { useState } from 'react';

const testimonials = [
  {
    name: 'Mike Taylor',
    location: 'Lahore, Pakistan',
    image: '/path/to/image1.jpg', // Replace with the actual image path
    text: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
  },
  {
    name: 'Chris Thomas',
    location: 'CEO of Red Button',
    image: '/path/to/image2.jpg', // Replace with the actual image path
    text: 'Quickly adopt next-gen solutions with business-centered strategies and user engagement.',
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
    <div className="max-w-2xl mx-auto py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">What People Say About Us</h2>
      <div className="relative">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-700 italic">{testimonials[activeIndex].text}</p>
          <p className="mt-4 font-semibold">{testimonials[activeIndex].name}</p>
          <p className="text-sm text-gray-500">{testimonials[activeIndex].location}</p>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={prevSlide}
            className="p-2 text-gray-700 hover:text-blue-500"
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            className="p-2 text-gray-700 hover:text-blue-500"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}

