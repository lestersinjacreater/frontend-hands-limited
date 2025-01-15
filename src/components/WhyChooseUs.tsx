import React from 'react';

interface BenefitCardProps {
  number: string;
  title: string;
  description: string;
}

const benefits: BenefitCardProps[] = [
  {
    number: "01",
    title: "Expertise and Experience",
    description: "With years of experience in the sales and marketing industry, our team has a deep understanding of market dynamics.",
  },
  {
    number: "02",
    title: "Market Knowledge",
    description: "Through established networks and market expertise, we give you a competitive edge.",
  },
  {
    number: "03",
    title: "Personalized Approach",
    description: "We believe that every customer is unique, and their needs should be addressed accordingly.",
  },
  {
    number: "04",
    title: "Cost Savings",
    description: "By leveraging our industry knowledge and network, we can help you save money on your solar and cable purchases.",
  },
  {
    number: "05",
    title: "Hassle-Free Process",
    description: "We handle all the research, negotiations, and paperwork for you, making the process of finding solutions seamless.",
  },
];

const BenefitCard: React.FC<BenefitCardProps> = ({ number, title, description }) => {
  return (
    <div className="bg-gray-800 dark:bg-gray-700 p-6 rounded-lg shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white group flex flex-col justify-between h-full">
      <div>
        <div className="text-4xl font-bold mb-4 text-blue-400 dark:text-blue-300 group-hover:text-white">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-orange-400 dark:text-orange-300 group-hover:text-white">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-300 dark:text-gray-200 group-hover:text-white">
        {description}
      </p>
    </div>
  );
}

const WhyChooseUs: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-900 dark:bg-gray-800 py-16 px-4 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-4">
              <h2 className="text-4xl font-bold mb-4 text-white dark:text-gray-100">
                Why <span className="text-blue-400 dark:text-blue-300">Choose</span> Us?
              </h2>
              <p className="text-gray-300 dark:text-gray-200 text-sm">
                Whether you need reliable supplies for your business or tailored services to enhance your operations, we are committed to delivering quality solutions that meet your unique needs.
              </p>
            </div>

            {benefits.map((benefit, index) => (
              <div key={benefit.number} className={`col-span-4 ${index > 1 ? 'mt-6' : ''}`}>
                <BenefitCard {...benefit} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;