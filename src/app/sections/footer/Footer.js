export default function Footer() {
  return (
    <footer className="bg-white py-16 mt-16">
      <div className="max-w-screen">
        <div className="flex flex-wrap justify-center md:justify-between items-start gap-10">

          {/* Left Section */}
          <div className="max-w-[220px] 2xl:max-w-[350px]">
            <h1 className="text-[46px] 2xl:text-[68px] text-[#181E4B] font-bold tracking-wider mt-[-9px] pb-4">Jadoo.</h1>
            <p className="text-[15px] 2xl:text-[26px] text-[#5E6282] font-medium">
              Book your trip in minutes, get full control for much longer.
            </p>
          </div>

          {/* Middle Sections */}
          <div className="flex gap-16">
            {/* Column 1 */}
            <div>
              <h3 className="text-[22px]  2xl:text-[42px] text-[#080809] font-extrabold tracking-wide mb-9">Company</h3>
              <ul className="text-[19px]  2xl:text-[32px] text-[#5E6282] font-medium tracking-wide space-y-2">
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="text-[22px] 2xl:text-[42px] text-[#080809] font-extrabold tracking-wide mb-9 ">Contact</h3>
              <ul className="text-[19px] 2xl:text-[32px] text-[#5E6282] font-medium tracking-wide space-y-2">
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affiliates</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="text-[22px] 2xl:text-[42px] text-[#080809] font-extrabold tracking-wide mb-9">More</h3>
              <ul className="text-[19px] 2xl:text-[32px] text-[#5E6282] font-medium tracking-wide space-y-2">
                <li>Airlinefees</li>
                <li>Airline</li>
                <li>Low fare tips</li>
              </ul>
            </div>
          </div>
          

          {/* Right Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Social Media Icons */}
              <div className="rounded-full flex items-center justify-center">
                <img src="/assest/footer/Social.png" className="2xl:w-[120px]"/>
              </div>
              <div className="rounded-full flex items-center justify-center">
                <img src="/assest/footer/Social1.png" className="2xl:w-[120px]" />
              </div>
              <div className="rounded-full flex items-center justify-center">
                <img src="/assest/footer/Social2.png" className="2xl:w-[120px]" />
              </div>
            </div>
            <h3 className="text-[22px] 2xl:text-[34px] text-[#5E6282] font-medium tracking-wide mb-5">Discover our app</h3>
            <div className="flex gap-4">
              {/* App Store Buttons */}
              <img
                src="/assest/footer/Google Play.png"
                alt="Google Play"
                className="2xl:w-[175px]"
              />
              <img
                src="/assest/footer/Play Store.png"
                alt="Apple Store"
                className="2xl:w-[175px]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-[18px] 2xl:text-[36px] text-[#5E6282] mt-20 text-center">
          All rights reserved@jadoo.co
        </div>
      </div>
    </footer>
  );
}

