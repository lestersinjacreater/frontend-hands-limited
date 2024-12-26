import { SectionProps } from '../types/common';

function ReasonItem({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex items-center mb-4">
      <div className="bg-yellow-400 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
        {number}
      </div>
      <div className="font-semibold">{title}</div>
    </div>
  );
}

export function WhyChooseUs({ title, children }: SectionProps) {
  const reasons = [
    "Hamali Sonilt",
    "Expertise and Experience",
    "Quality Assurance",
    "Cost Savings",
    "Hassle Free Process"
  ];

  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <ReasonItem key={index} number={index + 1} title={reason} />
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}

