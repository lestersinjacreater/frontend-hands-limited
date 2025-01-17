'use client'

import { Phone, Mail, MapPin, Twitter, Instagram, Youtube, Send } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import Notification from './Notification'

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
  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null)

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Custom validation for email and phone number
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phonePattern = /^(?:\+?[1-9]\d{1,14}|0[17]\d{8})$/

    if (!emailPattern.test(formData.email)) {
      setNotification({ message: 'Please enter a valid email address.', type: 'error' })
      return
    }

    if (!phonePattern.test(formData.phone)) {
      setNotification({ message: 'Please enter a valid phone number.', type: 'error' })
      return
    }

    // Prepare request data
    const requestData = {
      firstname: formData.firstName,
      lastname: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject.toLowerCase().replace(' ', '_'),
      message: formData.message
    }

    console.log('Submitting form with data:', requestData)

    try {
      // Send POST request to the backend
      const response = await axios.post('https://rest-api-for-hands.onrender.com/clients', requestData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log('Response from server:', response.data)
      setNotification({ message: 'Message sent successfully!', type: 'success' })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error response:', error.response?.data)
        setNotification({ message: `Failed to send message: ${error.response?.data}`, type: 'error' })
      } else {
        console.error('Unexpected error:', error)
        setNotification({ message: 'Failed to send message due to an unexpected error.', type: 'error' })
      }
    }
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
                    onChange={(e) => {
                      console.log('First Name:', e.target.value)
                      setFormData({...formData, firstName: e.target.value})
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-orange-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-200 py-2 focus:border-orange-400 outline-none transition-colors"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => {
                      console.log('Last Name:', e.target.value)
                      setFormData({...formData, lastName: e.target.value})
                    }}
                    required
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
                    onChange={(e) => {
                      console.log('Email:', e.target.value)
                      setFormData({...formData, email: e.target.value})
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-orange-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full border-b-2 border-gray-200 py-2 focus:border-orange-400 outline-none transition-colors"
                    placeholder="+1 234 567 890"
                    value={formData.phone}
                    onChange={(e) => {
                      console.log('Phone:', e.target.value)
                      setFormData({...formData, phone: e.target.value})
                    }}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-orange-400 mb-4">Select Subject?</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['General Inquiry', 'Product Support', 'Billing', 'Other'].map((option, index) => (
                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="subject"
                        value={option}
                        checked={formData.subject === option}
                        onChange={(e) => {
                          console.log('Subject:', e.target.value)
                          setFormData({...formData, subject: e.target.value})
                        }}
                        className="w-4 h-4 text-orange-400 border-gray-300 focus:ring-orange-400"
                        required
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
                  onChange={(e) => {
                    console.log('Message:', e.target.value)
                    setFormData({...formData, message: e.target.value})
                  }}
                  required
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
      {notification && <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />}
    </section>
  )
}