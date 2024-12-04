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
    <div className="lg:pt-0 pt-32">
      <div className="max-w-screen flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between">
        {/* Left Side */}
        <div className="lg:w-[48%] 2xl:w-[56%] desktop:w-[43%] lg:pr-12 desktop:pr-4">
          <h3 className="text-[28px] sm:text-[35px] lg:text-[20px] 2xl:text-[35px] desktop:text-[40px] text-[#5E6282] font-poppins font-semibold lg:mb-2">
            Easy and Fast
          </h3>
          <h2 className="text-[32px] sm:text-[60px] lg:text-[53px] 2xl:text-[68px] desktop:text-[83px] text-[#14183E] font-volkhov font-bold mb-6">
            Book Your Next Trip In 3 Easy Steps
          </h2>
          <div className="lg:w-[440px] 2xl:w-[600px] desktop:w-[740px] space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 sm:gap-6 ">
                <div className=" flex items-center justify-center rounded-lg mt-6 sm:mt-0">
                  <img src={step.icon} alt={`${step.title} icon`} className="sm:w-24 sm:h-20 lg:w-16 lg:h-12 2xl:w-28 2xl:h-16 desktop:w-32 desktop:h-24" />
                </div>
                <div>
                  <h4 className="text-[24px] sm:text-[32px] lg:text-[18px] 2xl:text-[30px] desktop:text-[36px] font-[600] font-poppins text-[#5E6282]">
                    {step.title}
                  </h4>
                  <p className="text-[20px] sm:text-[25px] lg:text-[17px] 2xl:text-[26px] desktop:text-[30px] font-poppins leading-7 sm:leading-9 lg:leading-6 2xl:leading-9 text-[#5E6282]">
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
            className="w-[960px] lg:w-[750px] lg:h-[780px] 2xl:w-[980px] 2xl:h-[1000px] desktop:w-[1400px] desktop:h-[1400px]"
          />
        </div>
      </div>
    </div>

  );
};

export default BookTrip;
