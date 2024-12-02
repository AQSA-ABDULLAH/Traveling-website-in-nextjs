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
    },
];

const ServicesSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto text-center mb-12">
                <p className="text-[19px] text-[#5E6282] font-poppins font-semibold mb-3">CATEGORY</p>
                <h2 className="text-[53px] text-[#14183E] font-volkhov font-bold pb-14">
                    We Offer Best Services
                </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-24">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="w-[200px] flex flex-col items-center relative"
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
                            <h3 className="text-[20px] text-[#1E1D4C] font-semibold mb-2 tracking-wide">
                                {service.title}
                            </h3>
                            <p className="text-[18px] text-[#5E6282] mb-2 tracking-wide">
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
