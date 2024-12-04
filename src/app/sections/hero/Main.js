import React from "react";

export default function Main() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-screen flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-[55%] flex flex-col items-start">
        <tag className="text-[20px] 2xl:text-[33px] text-[#DF6951] uppercase font-semibold mb-8">
            Best Destinations around the world
          </tag>
          <h1 className="text-[96px] 2xl:text-[140px] text-[#181E4B] font-volkhov font-black leading-loose 2xl:leading-extra-loose mb-8 z-10">
            Travel, enjoy and live a new and full life
          </h1>

          {/* Decorative Image */}
          <img src='/assest/hero/Decore.png' className='absolute top-[20.8rem] right-[30rem] opacity-100' />

          <p className="text-[17px] 2xl:text-[29px] text-[#5E6282] w-[480px] 2xl:w-[880px] tracking-wider font-medium mb-6">
            Built Wicket longer admire do barton vanity itself do it. Preferred
            to sportsmen it engrossed listening. Park gate sell they west hard
            for the.
          </p>
          <div className="flex items-center">
            <button className="text-white hover:bg-orange-600 text-[18px] 2xl:text-[36px] bg-[#F1A501] px-6 py-4 rounded-lg mr-4">
              Find out more
            </button>
            <button className="mt-2">
              <img src="/assest/hero/Play Demo.png" alt="Play Demo" className="2xl:w-[300px]" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-12 md:mt-0 md:w-[45%]  flex items-center justify-end">
          <img
            src="/assest/hero/Image.png"
            alt="Travel"
            className="w-full h-auto 2xl:w-[900px] 2xl:h-[980px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

