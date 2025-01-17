import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold">HandsLTD</span>
        </div>
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} HandsLTD. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer