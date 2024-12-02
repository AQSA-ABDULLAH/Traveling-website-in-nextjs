export default function SubscribeSection() {
  return (
    <div className="bg-purple-50 rounded-tl-large rounded-b-2xl mx-28 mt-24 py-24 px-8 relative">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-2xl lg:text-[32px] text-[#5E6282] font-bold leading-extra-loose mb-16">
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
      <div className="absolute top-[-14px] right-[-14px] rounded-full shadow-lg">
        <img src="/assest/subscribe/Group 77.png" className="z-10" alt="Subscription Icon" />
      </div>
    </div>
  );
}
