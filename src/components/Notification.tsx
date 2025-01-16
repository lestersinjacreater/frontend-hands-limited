import React from 'react'

interface NotificationProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500'

  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-4 py-2 rounded-lg shadow-lg z-50`}>
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-white">
          &times;
        </button>
      </div>
    </div>
  )
}

export default Notification