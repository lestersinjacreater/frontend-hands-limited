import React, { useState } from 'react'
import axios from 'axios'
import Notification from './Notification'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [position, setPosition] = useState('')
  const [phone, setPhone] = useState('')
  const [testimonial, setTestimonial] = useState('')
  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null)

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:8000/auth/register', {
        username,
        email,
        position,
        phone,
        testimonial
      })
      setNotification({ message: 'Testimonial submitted successfully!', type: 'success' })
      setTimeout(() => setNotification(null), 3000)
      onClose()
    } catch (error) {
      console.error('Error submitting testimonial:', error)
      setNotification({ message: 'Failed to submit testimonial.', type: 'error' })
      setTimeout(() => setNotification(null), 3000)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg w-3/4 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">Leave a Testimonial</h2>
        <div className="mb-4">
          <label className="block text-gray-300">Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Testimonial</label>
          <textarea
            value={testimonial}
            onChange={(e) => setTestimonial(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={handleRegister}
            className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Close
          </button>
        </div>
      </div>
      {notification && <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />}
    </div>
  )
}

export default Modal