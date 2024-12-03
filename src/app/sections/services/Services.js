const services = [
    {
        title: "Calculated Weather",
        description:
            "Built Wicket longer admire do barton vanity itself do it.",
        icon: "/assest/services/satellite-dish.png",
        bgImage: "/assest/services/Rectangle 157.png",
        bgPosition: { top: "2", left: "7" }
    },
    {
        title: "Best Flights",
        description:
            "Engrossed listening. Park gate sell they west hard for the.",
        icon: "/assest/services/plane.png",
        bgImage: "/assest/services/Rectangle 158.png",
        bgPosition: { top: "0", left: "4" }
    },
    {
        title: "Local Events",
        description:
            "Barton vanity itself do it. Preferred to men it engrossed listening.",
        icon: "/assest/services/image 25.png",
        bgImage: "/assest/services/Rectangle 159.png",
        bgPosition: { top: "0", left: "6" }
    },
    {
        title: "Customization",
        description:
            "We deliver outsourced aviation services for military customers.",
        icon: "/assest/services/power-supply_1.png",
        bgImage: "/assest/services/Rectangle 160.png",
        bgPosition: { top: "2", left: "6" }
    }
];

const ServicesSection = () => {
    return (
        <section className="py-20">
            {/* Section Header */}
            <div className="text-center mb-12">
                <p className="text-[19px] 2xl:text-[32px] text-[#5E6282] font-poppins font-semibold mb-3">CATEGORY</p>
                <h2 className="text-[32px] 2xl:text-[74px] md:text-[48px] lg:text-[53px] text-[#14183E] font-volkhov font-bold pb-14">
                    We Offer Best Services
                </h2>
            </div>

            {/* Service Cards */}
            <div className="flex flex-wrap justify-center gap-16 xl:justify-between">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="w-[280px] md:w-[220px] lg:w-[200px] 2xl:w-[320px] flex flex-col items-center relative"
                    >
                        {/* Background image with dynamic position */}
                        <div
                            className="absolute"
                            style={{
                                top: `${service.bgPosition.top}rem`,
                                left: `${service.bgPosition.left}rem`
                            }}
                        >
                            <img
                                alt="Background Shape"
                                src={service.bgImage}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        {/* Foreground image */}
                        <div className="w-22 h-20 relative z-10">
                            <img
                                src={service.icon}
                                alt={`${service.title} icon`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="text-center pt-10">
                            <h3 className="text-[18px] lg:text-[20px] 2xl:text-[36px] text-[#1E1D4C] font-semibold mb-2 tracking-wide 2xl:tracking-normal">
                                {service.title}
                            </h3>
                            <p className="text-[18px] lg:text-[18px] 2xl:text-[27px] text-[#5E6282] mb-2 tracking-wide">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;

