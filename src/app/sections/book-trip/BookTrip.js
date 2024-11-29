const BookTrip = () => {
    const steps = [
      {
        title: "Choose Destination",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        icon: "/assets/icons/choose-destination.png",
        bgColor: "bg-yellow-100",
      },
      {
        title: "Make Payment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        icon: "/assets/icons/make-payment.png",
        bgColor: "bg-orange-100",
      },
      {
        title: "Reach Airport on Selected Date",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        icon: "/assets/icons/reach-airport.png",
        bgColor: "bg-green-100",
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side - Text and Steps */}
          <div className="lg:w-1/2">
            <h3 className="text-lg text-gray-500 font-medium mb-2">Easy and Fast</h3>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Book Your Next Trip <br />
              In 3 Easy Steps
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-lg ${step.bgColor}`}
                  >
                    <img src={step.icon} alt={`${step.title} icon`} className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Right Side - Card */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="bg-white rounded-xl shadow-lg w-[300px]">
              <img
                src="/assets/images/trip-to-greece.jpg"
                alt="Trip to Greece"
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Trip To Greece</h4>
                <p className="text-sm text-gray-500 mb-4">14-29 June | By Robbin Joe</p>
                <div className="flex items-center justify-between text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>24 people going</span>
                  </div>
                  <i className="fas fa-heart"></i>
                </div>
                {/* Progress Widget */}
                <div className="relative bg-gray-200 rounded-full h-2">
                  <div className="absolute bg-blue-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Ongoing: Trip to Rome - 40% completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BookTrip;
  