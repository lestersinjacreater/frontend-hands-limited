import { SectionProps, ItemProps } from '../types/common';

function ProductItem({ title, image }: ItemProps) {
  return (
    <div className="text-center">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-2 rounded" />
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}

export function Products({ title, children }: SectionProps) {
  const products = [
    { title: 'Medical Equipment', image: '/placeholder.svg?height=100&width=100' },
    { title: 'Surgicals', image: '/placeholder.svg?height=100&width=100' },
    { title: 'Spare Parts', image: '/placeholder.svg?height=100&width=100' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductItem key={product.title} {...product} />
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}
