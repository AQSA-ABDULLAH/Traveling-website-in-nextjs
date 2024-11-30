export default function BrandLogos() {
    const brands = [
      { name: 'Axon', logo: '/assest/brand-logo/image 31.png' },
      { name: 'Jetstar', logo: '/assest/brand-logo/image 30.png' },
      { name: 'Expedia', logo: '/assest/brand-logo/image 29.png' },
      { name: 'Qantas', logo: '/assest/brand-logo/image 28.png' },
      { name: 'Alitalia', logo: '/assest/brand-logo/image 27.png' },
    ];
  
    return (
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`p-4 transition-transform hover:scale-110 ${
                  brand.name === 'Expedia' ? 'bg-white shadow-lg rounded-lg' : ''
                }`}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  