import { useEffect } from 'react';
import { useServices } from '../hooks/useService';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl group h-[450px] flex flex-col shadow-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent group-hover:from-black/80 group-hover:via-black/60 transition-colors duration-300" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-4 md:p-8">
        {/* Title at the top */}
        <h3 className="text-amber-500 text-2xl md:text-3xl font-bold leading-tight mb-2 md:mb-4">
          {title}
        </h3>

        {/* Spacer to push the rest to the bottom */}
        <div className="flex-grow" />

        {/* Description and button at the bottom */}
        <div>
          <p className="text-white/90 text-base md:text-lg leading-relaxed tracking-wide mb-4 md:mb-6">
            {description}
          </p>
          <a 
            href="#"
            className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3
                     bg-blue-600 hover:bg-blue-700 text-white rounded-full 
                     transition-all duration-300 text-sm md:text-base font-medium
                     hover:transform hover:translate-y-[-2px] hover:shadow-lg
                     self-start"
          >
            See more
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const { services, loading, error, fetchServices } = useServices();

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return (
    <section className="relative">
      {/* Gradient overlay for smooth transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
      
      {/* Main content */}
      <div className="relative z-20 py-20 px-4 bg-gradient-to-b from-black via-blue-900 to-black">
        <div className="container mx-auto">
          <h2 className="text-blue-300 text-4xl md:text-5xl font-bold mb-8 md:mb-12">
            SERVICES
          </h2>
          {loading ? (
            <p className="text-white">Loading services...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.serviceid}
                  title={service.title}
                  description={service.description}
                  image={service.imageUrl || 'default-image-url.jpg'}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}