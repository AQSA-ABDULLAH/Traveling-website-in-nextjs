export default function SubscribeSection() {
  return (
    <div className="bg-purple-50 rounded-tl-large rounded-b-2xl mt-24 py-24 relative">
      <div className="px-32 text-center">
        <h1 className="text-[32px] 2xl:text-[54px] leading-large text-[#5E6282] font-bold mb-16 2xl:mb-32">
          Subscribe to get information, latest news and other interesting offers about Cobham
        </h1>

        <div className="flex justify-center items-center space-x-4">
          <div className="flex items-center bg-white rounded-lg p-2 w-full max-w-[420px] 2xl:max-w-[700px]">
            <input
              type="email"
              placeholder="Your email"
              className="w-full 2xl:w-[400px] px-4
              py-2 text-gray-600 focus:outline-none 2xl:text-[38px]"
            />
          </div>
          <button className="bg-orange-500 2xl:text-[38px] text-white px-8 py-4 rounded-lg hover:bg-orange-600">
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
