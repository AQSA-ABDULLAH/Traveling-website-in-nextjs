export default function SubscribeSection() {
    return (
      <div className="bg-purple-50 py-16 px-8 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Subscribe to get information, latest news and other interesting offers about Cobham
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex items-center bg-white shadow-lg rounded-full p-2 w-full max-w-sm">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-gray-600 rounded-l-full focus:outline-none"
              />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
                Subscribe
              </button>
            </div>
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
  