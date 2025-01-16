'use client'

import { Phone, Mail, MapPin, Twitter, Instagram, Youtube, Send } from 'lucide-react'
import { useState } from 'react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="py-16 px-4 min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-blue-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-orange-400 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Contact Information Panel */}
          <div className="md:col-span-2 bg-black p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-orange-400 text-2xl font-bold mb-8">
                Contact Information
              </h2>
              <p className="text-gray-300 mb-12">
                Say something to start a live chat!
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4">
                  <Phone className="text-orange-400" />
                  <span className="text-white">+1012 3456 789</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-orange-400" />
                  <span className="text-white">demo@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-orange-400" />
                  <span className="text-white">company location</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-orange-400 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-white hover:text-orange-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-white hover:text-orange-400 transition-colors">
                  <Youtube size={24} />
                </a>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-400 rounded-full -mb-24 -mr-24"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-600 rounded-full mb-8 mr-8"></div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-orange-400 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-200 py-2 focus:border-orange-400 outline-none transition-colors"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-orange-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-200 py-2 focus:border-orange-400 outline-none transition-colors"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-orange-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full border-b-2 border-gray-200 py-2 focus:border-orange-400 outline-none transition-colors"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-orange-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full border-b-2 border-gray-200 py-2 focus:border-orange-400 outline-none transition-colors"
                    placeholder="+1 234 567 890"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-orange-400 mb-4">Select Subject?</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['General Inquiry', 'General Inquiry', 'General Inquiry', 'General Inquiry'].map((option, index) => (
                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="subject"
                        value={option}
                        checked={formData.subject === option}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-4 h-4 text-orange-400 border-gray-300 focus:ring-orange-400"
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-orange-400 mb-2">Message</label>
                <textarea
                  className="w-full border-b-2 border-gray-200 py-2 focus:border-orange-400 outline-none transition-colors"
                  rows={4}
                  placeholder="Write your message.."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

