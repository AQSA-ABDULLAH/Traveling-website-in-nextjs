const destinations = [
    {
        title: "Calculated Weather",
        description: "Built Wicket longer admire do barton vanity itself do it.",
        icon: "/assest/destination/Rectangle 14.jpg",
    },
    {
        title: "Best Flights",
        description: "Engrossed listening. Park gate sell they west hard for the.",
        icon: "/assest/destination/Rectangle 15.png",
    },
    {
        title: "Local Events",
        description: "Barton vanity itself do it. Preferred to men it engrossed listening.",
        icon: "/assest/destination/Rectangle 16.png",
    },
];

const Destinations = () => {
    return (
        <section className="py-16 bg-gray-50">
            {/* Section Header */}
            <div className="container mx-auto text-center mb-12">
                <p className="text-lg text-gray-600">Top Selling</p>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Top Destinations
                </h2>
            </div>

            {/* Destination Cards */}
            <div className="flex flex-wrap justify-center gap-8">
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className="w-[250px] flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Image */}
                        <div className="w-24 h-24">
                            <img
                                src={destination.icon}
                                alt={`${destination.title} icon`}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">
                            {destination.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600 text-center mt-2">
                            {destination.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destinations;
