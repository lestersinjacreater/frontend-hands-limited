import { SectionProps } from '../types/common';

function TestimonialItem() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
      <div className="font-semibold">- Client Name</div>
    </div>
  );
}

export function Testimonials({ title, children }: SectionProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <TestimonialItem key={index} />
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}

