interface FeatureCard {
  number: string
  title: string
  description: string
  isHighlighted?: boolean
}

const features: FeatureCard[] = [
  {
    number: "01",
    title: "Expertise and Experience",
    description: "With years of experience in the sales and marketing industry, our team has a deep"
  },
  {
    number: "02",
    title: "Quality Assurance",
    description: "We pride ourselves in delivering high quality products and services that meet international standards"
  },
  {
    number: "03",
    title: "Personalized Approach",
    description: "We believe that every customer is unique, and their needs should be addressed accordingly"
  },
  {
    number: "04",
    title: "Cost Savings",
    description: "By leveraging our industry knowledge and network, we can help you save money on your solar and cable purchases"
  },
  {
    number: "05",
    title: "Hassle-Free Process",
    description: "We handle all the research, negotiations, and paperwork for you, making the process of finding"
  },
  {
    number: "06",
    title: "Customer Support",
    description: "Our dedicated customer support team is available 24/7 to assist you with any questions or concerns you may have"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 px-4">
      {/* Gradient overlay for smooth transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Why <span className="text-blue-300">Choose</span> Us?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you need reliable supplies for your business or tailored services to enhance your operations, Hands Kenya Ltd is committed to delivering quality solutions that meet your unique needs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:bg-blue-600/90 hover:backdrop-blur-md ${
                feature.isHighlighted 
                  ? 'bg-blue-600/90 backdrop-blur-md' 
                  : 'bg-white/10 backdrop-blur-md'
              }`}
            >
              <div className="flex flex-col h-full">
                <span className={`text-5xl md:text-6xl font-bold mb-6 ${
                  feature.isHighlighted ? 'text-white/90' : 'text-blue-300'
                }`}>
                  {feature.number}
                </span>
                
                <h3 className={`text-2xl font-semibold mb-4 ${
                  feature.isHighlighted ? 'text-white' : 'text-amber-500'
                }`}>
                  {feature.title}
                </h3>
                
                <p className={`${
                  feature.isHighlighted ? 'text-white/90' : 'text-gray-300'
                }`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900 to-black -z-10"></div>
    </section>
  )
}