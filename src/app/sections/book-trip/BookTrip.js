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
    <div className="lg:py-16 lg:pt-0 pt-32">
      <div className="max-w-screen flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between">
        {/* Left Side */}
        <div className="lg:w-[48%] 2xl:w-[43%] lg:pr-12 2xl:pr-4">
          <h3 className="text-[35px] lg:text-[20px] 2xl:text-[40px] text-[#5E6282] font-poppins font-semibold lg:mb-2">
            Easy and Fast
          </h3>
          <h2 className="text-[70px] lg:text-[53px] 2xl:text-[83px] text-[#14183E] font-volkhov font-bold mb-6">
            Book Your Next Trip In 3 Easy Steps
          </h2>
          <div className="lg:w-[440px] 2xl:w-[740px] space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className=" flex items-center justify-center rounded-lg">
                  <img src={step.icon} alt={`${step.title} icon`} className="w-24 h-20 lg:w-16 lg:h-12 2xl:w-32 2xl:h-24" />
                </div>
                <div>
                  <h4 className="text-[32px] lg:text-[18px] 2xl:text-[36px] font-[600] font-poppins text-[#5E6282]">
                    {step.title}
                  </h4>
                  <p className="text-[28px] lg:text-[17px] 2xl:text-[30px] font-poppins leading-9 lg:leading-6 2xl:leading-9 text-[#5E6282]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:mt-4">
          <img
            src="/assest/book-section/Image.png"
            alt="Trip to Greece"
            className="w-[960px] lg:w-[750px] lg:h-[780px] 2xl:w-[1400px] 2xl:h-[1400px]"
          />
        </div>
      </div>
    </div>

  );
};

export default BookTrip;
