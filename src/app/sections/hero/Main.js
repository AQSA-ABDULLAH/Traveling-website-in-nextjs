import React from 'react'

export default function Main() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center">
        <div className="flex flex-col items-start max-w-lg md:max-w-xl md:mr-12">
          <tag className="text-[20px] text-[#DF6951] uppercase font-semibold mb-8">
            Best Destinations around the world
          </tag>
          <h1 className="text-[93px] text-[#181E4B] font-volkhov font-black leading-2 tracking-wider mb-8">
            Travel, enjoy and live a new and full life
          </h1>

          <p className="text-lg mb-6">
            Built Wicket longer admire do barton vanity itself do it. Preferred
            to sportsmen it engrossed listening. Park gate sell they west hard
            for the.
          </p>
          <div className="flex items-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg mr-4">
              Find out more
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white px-6 py-2 rounded-lg">
              Play Demo
            </button>
          </div>
        </div>
        <div className="md:mt-0">
          <img
            src="/assest/hero/Image.png"
            alt="Travel"
            className="w-400 h-auto"
          />
        </div>
      </div>
    </div>
  )
}
