const BookTrip = () => {
  const steps = [
    {
      title: "Choose Destination",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: "/assest/book-section/Group 7.png",
    },
    {
      title: "Make Payment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: "/assest/book-section/Group 12.png",
    },
    {
      title: "Reach Airport on Selected Date",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: "/assest/book-section/Group 11.png",
    },
  ];

  return (
    <section className="py-16 ml-36">
      <div className="container flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side - Text and Steps */}
        <div className="lg:w-1/2 pr-12">
          <h3 className="text-[18px] text-[#5E6282] font-poppins font-semibold mb-2">
            Easy and Fast
          </h3>
          <h2 className="text-[53px] text-[#14183E] font-volkhov font-bold mb-6">
            Book Your Next Trip In 3 Easy Steps
          </h2>

          <div className="space-y-6 w-[440px]">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className={`w-16 h-12 flex items-center justify-center rounded-lg`}
                >
                  <img src={step.icon} alt={`${step.title} icon`} className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="text-[18px] font-[600] font-poppins text-[#5E6282]">{step.title}</h4>
                  <p className="text-[17px] font-poppins leading-5 text-[#5E6282]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Card */}
        <div className=" mt-12 lg:mt-0">
          <img
            src="/assest/book-section/Image.png"
            alt="Trip to Greece"
            className="w-[750px] h-[780px]"
          />
        </div>

      </div>
    </section>
  );
};

export default BookTrip;
