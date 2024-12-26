import { SectionProps } from '../types/common';

function UpdateItem() {
  return (
    <div>
      <img src="/placeholder.svg?height=200&width=300" alt="Update" className="w-full h-48 object-cover mb-2 rounded" />
      <h3 className="font-semibold mb-1">Update Title</h3>
      <p className="text-sm text-gray-600">Short description of the update...</p>
    </div>
  );
}

export function Updates({ title, children }: SectionProps) {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <UpdateItem key={index} />
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}

