export default function SubscribeSection() {
  return (
    <div className="bg-purple-50 mx-28 mt-24 py-16 px-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-2xl lg:text-3xl text-[#5E6282] font-poppins font-bold leading-normal mb-16">
          Subscribe to get information, latest news and other interesting offers about Cobham
        </h2>

        <div className="flex justify-center items-center space-x-4">
          <div className="flex items-center bg-white rounded-lg p-2 w-full max-w-sm">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 text-gray-600 focus:outline-none"
            />
          </div>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600">
            Subscribe
          </button>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 right-10 bg-purple-400 p-3 rounded-full shadow-lg">
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10l9-7 9 7-9 7-9-7z"
          />
        </svg>
      </div>
    </div>
  );
}
