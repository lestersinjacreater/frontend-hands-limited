export default function WhoWeAreSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Who <span className="text-blue-600">We Are</span>
            </h1>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to Hands Kenya Ltd, your premier partner in general supplies and services across Eastern Africa. As a market leader in Nairobi, Mombasa, and Taita Taveta Counties, we specialize in providing tailored solutions for government institutions, parastatals, and corporate clients. We understand that navigating the complexities of procurement can be challenging, which is why our dedicated team is here to simplify the process and ensure you receive high-quality products and services that meet your unique needs.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 bg-white text-gray-900 rounded-full border-2 border-gray-200 font-semibold hover:bg-gray-50 transition-colors">
                Read More
              </button>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Contact us today
              </button>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <div className="absolute right-0 top-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_2025-01-15_190156804-ZyDPVROfBjfCbPt2pxiK1wBEON6j8T.png"
                alt="Team members"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-0 bottom-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_2025-01-15_190156804-ZyDPVROfBjfCbPt2pxiK1wBEON6j8T.png"
                alt="Team members"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

