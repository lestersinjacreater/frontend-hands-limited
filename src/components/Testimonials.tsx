'use client'

import React, { useState, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import axios from 'axios'

interface User {
  username: string
  position: string
  profilePicture: string
}

interface TestimonialProps {
  testimonialid: number
  userId: number
  text: string
  createdAt: string
  user: User
  isActive: boolean
}

const Testimonial: React.FC<TestimonialProps> = ({ user, text, isActive }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`relative transition-all duration-500 ease-in-out ${
      isActive ? 'w-full md:w-[700px] scale-100 opacity-100 z-20' 
      : 'w-full md:w-[500px] scale-90 opacity-70 z-10'
    }`}>
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg max-h-[400px] overflow-hidden">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img 
              src={user.profilePicture} 
              alt={user.username} 
              className="w-24 h-24 rounded-full mb-6 object-cover"
            />
            <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-2">
              <Quote className="w-5 h-5 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-white">{user.username}</h3>
          <p className="text-blue-300 mb-6 text-lg">{user.position}</p>
          <p className={`text-gray-200 text-center text-lg leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
            {text}
          </p>
          {text.length > 100 && (
            <button onClick={toggleExpand} className="text-blue-500 hover:underline mt-2">
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-500 rounded-full -z-10 transform -translate-x-1/2 opacity-30"></div>
      <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-500 rounded-full -z-10 transform translate-x-1/2 opacity-30"></div>
    </div>
  )
}

export default function TestimonialsScroll() {
  const [testimonials, setTestimonials] = useState<TestimonialProps[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const totalTestimonials = testimonials.length

  const defaultTestimonials: TestimonialProps[] = [
    {
      testimonialid: 1,
      userId: 1,
      text: "This is an amazing service! Highly recommended.",
      createdAt: "2023-01-01",
      user: { 
        username: "John Doe", 
        position: "CEO", 
        profilePicture: "https://via.placeholder.com/150?text=JD" 
      },
      isActive: false
    },
    {
      testimonialid: 2,
      userId: 2,
      text: "The quality of the products is top-notch. Very satisfied.",
      createdAt: "2023-01-02",
      user: { 
        username: "Jane Smith", 
        position: "Manager", 
        profilePicture: "https://via.placeholder.com/150?text=JS" 
      },
      isActive: false
    },
    {
      testimonialid: 3,
      userId: 3,
      text: "Excellent customer support and fast delivery.",
      createdAt: "2023-01-03",
      user: { 
        username: "Alice Johnson", 
        position: "Director", 
        profilePicture: "https://via.placeholder.com/150?text=AJ" 
      },
      isActive: false
    }
  ]

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:8000/testimonials')
        setTestimonials(response.data)
      } catch (error) {
        console.error('Error fetching testimonials:', error)
        setTestimonials(defaultTestimonials)
      }
    }

    fetchTestimonials()
  }, [])

  useEffect(() => {
    if (!autoplay || totalTestimonials === 0) return

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalTestimonials)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay, totalTestimonials])

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % totalTestimonials)
    setAutoplay(false)
  }

  const prevSlide = () => {
    setActiveIndex((current) => 
      current === 0 ? totalTestimonials - 1 : current - 1
    )
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
          {totalTestimonials > 0 ? (
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
          ) : (
            <p className="text-white">Loading testimonials...</p>
          )}

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
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex % 3 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Leave a Testimonial
          </button>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900 to-black -z-10"></div>
    </section>
  )
}