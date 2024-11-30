export default function Footer() {
  return (
    <footer className="bg-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Left Section */}
          <div className="max-w-sm">
            <h1 className="text-4xl font-bold text-[#14183E]">Jadoo.</h1>
            <p className="mt-4 text-gray-500">
              Book your trip in minutes, get full control for much longer.
            </p>
          </div>

          {/* Middle Sections */}
          <div className="flex gap-16">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-500">
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-500">
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affiliates</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">More</h3>
              <ul className="space-y-2 text-gray-500">
                <li>Airlinefees</li>
                <li>Airline</li>
                <li>Low fare tips</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              {/* Social Media Icons */}
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <i className="fab fa-facebook-f text-gray-700"></i>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <i className="fab fa-instagram text-gray-700"></i>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <i className="fab fa-twitter text-gray-700"></i>
              </div>
            </div>
            <h3 className="font-bold text-gray-800 mb-4">Discover our app</h3>
            <div className="flex gap-4">
              {/* App Store Buttons */}
              <img
                src="/google-play.png"
                alt="Google Play"
                className="w-32"
              />
              <img
                src="/app-store.png"
                alt="Apple Store"
                className="w-32"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center text-gray-500">
          All rights reserved@jadoo.co
        </div>
      </div>
    </footer>
  );
}

