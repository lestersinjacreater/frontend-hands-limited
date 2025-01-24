import  { useState } from 'react'
import HandsKenyaProfile from './extensionaboutus'

export default function WhoWeAreSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleReadMore = () => {
    setIsModalOpen(true)
  }

  return (
    <section className="relative py-16 px-4">
      {/* Gradient overlay for smooth transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Who <span className="text-blue-300">We Are</span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Welcome to Hands Kenya Ltd, your premier partner in general supplies and services across Eastern Africa. As a market leader in Nairobi, Mombasa, and Taita Taveta Counties, we specialize in providing tailored solutions for government institutions, parastatals, and corporate clients. We understand that navigating the complexities of procurement can be challenging, which is why our dedicated team is here to simplify the process and ensure you receive high-quality products and services that meet your unique needs.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={handleReadMore}
                className="px-8 py-3 bg-white/10 backdrop-blur-md text-blue-300 rounded-full border-2 border-blue-300/20 font-semibold hover:bg-blue-300/10 transition-colors"
              >
                Read More
              </button>
              <button 
                className="px-8 py-3 text-white text-lg font-medium rounded-full
                     bg-blue-600/90 hover:bg-blue-700 transition-colors duration-300"
              >
                <a href="#contact" className="text-white hover:text-blue-400 transition-colors duration-200">Contact us today</a>
              </button>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <div className="absolute right-0 top-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-xl shadow-black/50">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img
                src="https://ik.imagekit.io/6pj2fdgsmus/digitalworkshopcenter/wp-content/uploads/2016/12/instructor.jpg"
                alt="Team members"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-0 bottom-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-xl shadow-black/50">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img
                src="https://th.bing.com/th/id/R.9feb897276616c74f489b8d2dc819384?rik=x5iWQu8sCgkBcA&pid=ImgRaw&r=0"
                alt="Team members"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900 to-black -z-10"></div>

      {/* Modal */}
      {isModalOpen && <HandsKenyaProfile setIsModalOpen={setIsModalOpen} />}
    </section>
  )
}
