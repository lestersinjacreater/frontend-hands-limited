import { SectionProps } from '../types/common';

export function AboutUs({ title, children }: SectionProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          {children}
        </div>
        <div className="w-1/2">
          <img src="/placeholder.svg?height=400&width=600" alt="Our team" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

