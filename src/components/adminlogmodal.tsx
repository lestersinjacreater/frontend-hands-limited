import React, { useState } from 'react'
import axios from 'axios'
import Notification from './Notification'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const AdminLogModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null)

  const handleLogin = async () => {
    try {
      await axios.post('https://rest-api-for-hands.onrender.com/auth/login', {
        email,
        password
      })
      setNotification({ message: 'Login successful!', type: 'success' })
      setTimeout(() => setNotification(null), 3000)
      onClose()
    } catch (error) {
      console.error('Error logging in:', error)
      setNotification({ message: 'Failed to log in.', type: 'error' })
      setTimeout(() => setNotification(null), 3000)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white/10 backdrop-blur-md p-4 md:p-8 rounded-lg shadow-lg w-full max-w-lg md:max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">Admin Login</h2>
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
          <label className="block text-gray-300">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
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

export default AdminLogModal