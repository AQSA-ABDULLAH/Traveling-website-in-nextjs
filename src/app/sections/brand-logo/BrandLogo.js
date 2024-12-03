export default function BrandLogos() {
  const brands = [
    { name: 'Axon', logo: '/assest/brand-logo/image 31.png' },
    { name: 'Jetstar', logo: '/assest/brand-logo/image 30.png' },
    { name: 'Expedia', logo: '/assest/brand-logo/image 29.png' },
    { name: 'Qantas', logo: '/assest/brand-logo/image 28.png' },
    { name: 'Alitalia', logo: '/assest/brand-logo/image 27.png' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-screen">
        <div className="flex justify-between items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="p-4 transition-transform hover:scale-110 hover:bg-white hover:shadow-lg hover:rounded-lg"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 2xl:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  