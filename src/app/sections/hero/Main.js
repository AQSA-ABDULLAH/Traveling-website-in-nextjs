import React from 'react'

export default function Main() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="container flex flex-col md:flex-row items-center">

        <div className="flex flex-col items-start w-3/4">
          <tag className="text-[20px] text-[#DF6951] uppercase font-semibold mb-8">
            Best Destinations around the world
          </tag>
          <h1 className="text-[96px] text-[#181E4B] font-volkhov font-black leading-extra-loose mb-8 z-10">
            Travel, enjoy and live a new and full life
          </h1>

          <img src='/assest/hero/Decore.png' className='absolute top-[19rem] right-[30rem] opacity-100' />

          <p className="text-[17px] text-[#5E6282] w-[480px] tracking-wider font-medium mb-6">
            Built Wicket longer admire do barton vanity itself do it. Preferred
            to sportsmen it engrossed listening. Park gate sell they west hard
            for the.
          </p>
          <div className="flex items-center">
            <button className="text-white hover:bg-orange-600 text-[18px] bg-[#F1A501] px-6 py-4 rounded-lg mr-4">
              Find out more
            </button>
            <button className='mt-2'>
              <img src='/assest/hero/Play Demo.png' />
            </button>
          </div>
        </div>
        <div className='mt-4'>
          <img
            src="/assest/hero/Image.png"
            alt="Travel"
            className='w-[800px] h-[680px]'
          />
        </div>
      </div>
    </div>
  )
}
