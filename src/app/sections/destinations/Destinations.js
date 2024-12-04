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
                <p className="text-[22px] sm:text-[28px] lg:text-[19px] 2xl:text-[32px] text-[#5E6282] font-poppins font-semibold mb-3">Top Selling</p>
                <h2 className="text-[38px] sm:text-[48px] lg:text-[40px] 2xl:text-[74px] md:text-[48px] lg:text-[53px] text-[#14183E] font-volkhov font-bold pb-2">
                    Top Destinations
                </h2>
            </div>

            {/* Destination Cards */}
            <div className="flex flex-wrap justify-center gap-16 xl:justify-between ">
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className="w-[280px] sm:w-[400px] lg:w-[320px] xl:w-[290px] 2xl:w-[360px] desktop:w-[420px] bg-white shadow-md rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
                    >
                        {/* Image */}
                        <img
                            src={destination.image}
                            alt={destination.title}
                            className="w-full h-auto object-cover"
                        />

                        {/* Card Content */}
                        <div className="p-6 text-[20px] sm:text-[25px] lg:text-[17px] 2xl:text-[28px] text-[#5E6282]">
                            <div className="flex justify-between">
                                <h3>
                                    {destination.title}
                                </h3>
                                <p>
                                    {destination.price}
                                </p>
                            </div>
                            <p className="flex gap-2 mt-2">
                                <img src="/assest/destination/navigation 1.png" alt="icon"/>
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

