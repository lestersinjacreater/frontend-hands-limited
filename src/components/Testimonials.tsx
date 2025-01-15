'use client'

import React, { useState, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

interface TestimonialProps {
  image: string
  name: string
  role: string
  content: string
  isActive: boolean
}

const testimonials = [
  {
    image: "https://th.bing.com/th/id/R.f65a7e03386f595cd874a31bf44f2d2d?rik=Pwj0Yv%2b0uNEcQw&pid=ImgRaw&r=0",
    name: "Hannah Schmitt",
    role: "Lead designer",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim"
  },
  {
    image: "https://img.freepik.com/premium-photo/mysterious-man-illustration_553012-67234.jpg",
    name: "John Doe",
    role: "Software Engineer",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim"
  },
  {
    image: "https://i.pinimg.com/736x/fb/d3/00/fbd300d11c93aebee6845221cb2fc292.jpg",
    name: "Jane Smith",
    role: "Product Manager",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim"
  },
  {
    image: "https://th.bing.com/th/id/OIP.TOgF9zMrpb95GUgyVZjUigHaJB?rs=1&pid=ImgDetMain",
    name: "Michael Brown",
    role: "Marketing Specialist",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim"
  },
  {
    image: "https://th.bing.com/th/id/OIP.tEKtENQfxJVFz_mT0uE8ZQHaJw?w=475&h=626&rs=1&pid=ImgDetMain",
    name: "Emily Davis",
    role: "UX Designer",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim"
  }
]

const Testimonial: React.FC<TestimonialProps> = ({ image, name, role, content, isActive }) => (
  <div className={`relative transition-all duration-500 ease-in-out ${
    isActive ? 'w-full md:w-[700px] scale-100 opacity-100 z-20' 
    : 'w-full md:w-[500px] scale-90 opacity-70 z-10'
  }`}>
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img 
            src={image || "/placeholder.svg"} 
            alt={name} 
            className="w-24 h-24 rounded-full mb-6 object-cover"
          />
          <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-2">
            <Quote className="w-5 h-5 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-2 text-white">{name}</h3>
        <p className="text-blue-300 mb-6 text-lg">{role}</p>
        <p className="text-gray-200 text-center text-lg leading-relaxed">{content}</p>
      </div>
    </div>
    <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-500 rounded-full -z-10 transform -translate-x-1/2 opacity-30"></div>
    <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-500 rounded-full -z-10 transform translate-x-1/2 opacity-30"></div>
  </div>
)

export default function TestimonialsScroll() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const totalTestimonials = testimonials.length

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % (totalTestimonials - 2))
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay, totalTestimonials])

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % (totalTestimonials - 2))
    setAutoplay(false)
  }

  const prevSlide = () => {
    setActiveIndex((current) => 
      current === 0 ? totalTestimonials - 3 : current - 1
    )
    setAutoplay(false)
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
    setAutoplay(false)
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-24 px-4">
      {/* Gradient overlay for smooth transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      
      {/* Main content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-white">
          What Our{' '}
          <span className="text-blue-300">Clients Say About Us</span>
        </h2>

        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
          <div className="flex items-center justify-center gap-6 md:gap-12">
            {[0, 1, 2].map((offset) => {
              const testimonialIndex = (activeIndex + offset) % totalTestimonials
              const isCenter = offset === 1
              
              return (
                <Testimonial
                  key={testimonialIndex}
                  {...testimonials[testimonialIndex]}
                  isActive={isCenter}
                />
              )
            })}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-blue-500 rounded-full p-2 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-blue-500 rounded-full p-2 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalTestimonials - 2)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900 to-black -z-10"></div>
    </section>
  )
}

