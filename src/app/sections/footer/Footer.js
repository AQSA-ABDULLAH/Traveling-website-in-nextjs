export default function Footer() {
  return (
    <footer className="bg-white py-16 mt-16 px-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-start gap-10">

          {/* Left Section */}
          <div className="max-w-[220px]">
            <h1 className="text-[46px] text-[#181E4B] font-bold tracking-wider mt-[-9px] pb-4">Jadoo.</h1>
            <p className="text-[15px] text-[#5E6282] font-medium">
              Book your trip in minutes, get full control for much longer.
            </p>
          </div>

          {/* Middle Sections */}
          <div className="flex gap-16">
            {/* Column 1 */}
            <div>
              <h3 className="text-[22px] text-[#080809] font-extrabold tracking-wide mb-9">Company</h3>
              <ul className="text-[19px] text-[#5E6282] font-medium tracking-wide space-y-2">
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="text-[22px] text-[#080809] font-extrabold tracking-wide mb-9 ">Contact</h3>
              <ul className="text-[19px] text-[#5E6282] font-medium tracking-wide space-y-2">
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affiliates</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="text-[22px] text-[#080809] font-extrabold tracking-wide mb-9">More</h3>
              <ul className="text-[19px] text-[#5E6282] font-medium tracking-wide space-y-2">
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
                <img src="/assest/footer/Social.png" />
              </div>
              <div className="rounded-full flex items-center justify-center">
                <img src="/assest/footer/Social1.png" />
              </div>
              <div className="rounded-full flex items-center justify-center">
                <img src="/assest/footer/Social2.png" />
              </div>
            </div>
            <h3 className="text-[22px] text-[#5E6282] font-medium tracking-wide mb-5">Discover our app</h3>
            <div className="flex gap-4">
              {/* App Store Buttons */}
              <img
                src="/assest/footer/Google Play.png"
                alt="Google Play"
                className="w-30"
              />
              <img
                src="/assest/footer/Play Store.png"
                alt="Apple Store"
                className="w-30"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-[18px] text-[#5E6282] mt-20 text-center">
          All rights reserved@jadoo.co
        </div>
      </div>
    </footer>
  );
}

