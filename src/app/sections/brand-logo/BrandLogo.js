export default function BrandLogos() {
    const brands = [
      { name: 'Axon', logo: '/path/to/axon-logo.png' },
      { name: 'Jetstar', logo: '/path/to/jetstar-logo.png' },
      { name: 'Expedia', logo: '/path/to/expedia-logo.png' },
      { name: 'Qantas', logo: '/path/to/qantas-logo.png' },
      { name: 'Alitalia', logo: '/path/to/alitalia-logo.png' },
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
                  className="h-12 mx-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  