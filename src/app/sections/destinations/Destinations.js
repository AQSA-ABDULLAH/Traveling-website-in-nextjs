const destinations = [
    {
        title: "Rome, Italy",
        price: "$5.42k",
        duration: "10 Days Trip",
        image: "/assest/destination/Rectangle 14.jpg",
    },
    {
        title: "London, UK",
        price: "$4.2k",
        duration: "12 Days Trip",
        image: "/assest/destination/Rectangle 15.png",
    },
    {
        title: "Full Europe",
        price: "$15k",
        duration: "28 Days Trip",
        image: "/assest/destination/Rectangle 16.png",
    },
];

const Destinations = () => {
    return (
        <section className="py-16 bg-white">
            {/* Section Header */}
            <div className="container mx-auto text-center mb-12">
                <p className="text-lg text-gray-500">Top Selling</p>
                <h2 className="text-4xl font-bold text-gray-800">
                    Top Destinations
                </h2>
            </div>

            {/* Destination Cards */}
            <div className="flex flex-wrap justify-center gap-8">
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className="w-[300px] bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                    >
                        {/* Image */}
                        <img
                            src={destination.image}
                            alt={destination.title}
                            className="w-full h-auto object-cover"
                        />

                        {/* Card Content */}
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold text-gray-800">
                                {destination.title}
                            </h3>
                            <p className="text-lg text-gray-600 mt-2">
                                {destination.price}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                {destination.duration}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destinations;

