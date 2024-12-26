import { SectionProps, ItemProps } from '../types/common';

function ServiceItem({ title, image }: ItemProps) {
  return (
    <div className="text-center">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-2 rounded" />
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}

export function Services({ title, children }: SectionProps) {
  const services = [
    { title: 'Online Support', image: '/placeholder.svg?height=100&width=100' },
    { title: 'Documents', image: '/placeholder.svg?height=100&width=100' },
    { title: 'Download', image: '/placeholder.svg?height=100&width=100' },
    { title: 'Event Organization', image: '/placeholder.svg?height=100&width=100' },
    { title: 'Transport & Logistics', image: '/placeholder.svg?height=100&width=100' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceItem key={service.title} {...service} />
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}

