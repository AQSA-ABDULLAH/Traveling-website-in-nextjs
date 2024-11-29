const services = [
    {
        title: "Calculated Weather",
        description:
            "Built Wicket longer admire do barton vanity itself do it.",
        icon: "/assest/services/satellite-dish.png"
    },
    {
        title: "Best Flights",
        description:
            "Engrossed listening. Park gate sell they west hard for the.",
        icon: "/assest/services/plane.png"
    },
    {
        title: "Local Events",
        description:
            "Barton vanity itself do it. Preferred to men it engrossed listening.",
        icon: "/assest/services/image 25.png"
    },
    {
        title: "Customization",
        description:
            "We deliver outsourced aviation services for military customers.",
        icon: "/assest/services/power-supply 1.png"
    },
];

const ServicesSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    We Offer Best Services
                </h2>
                <p className="text-lg text-gray-600">CATEGORY</p>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="w-[200px] flex flex-col items-center relative"
                    >
                        {/* Background image */}
                        <div className="absolute -top-4 -left-4 w-20 h-20">
                            <img
                                src="/assest/services/Rectangle 160.png"
                                alt="Background Shape"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        {/* Foreground image */}
                        <div className="w-16 h-16 relative z-10">
                            <img
                                src={service.icon}
                                alt={`${service.title} icon`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                            {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 text-center">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
