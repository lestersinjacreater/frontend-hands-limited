import  { useState, useEffect } from 'react'
import {  useLocation } from 'react-router-dom'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [location])

  return (
    <header className="relative top-0 left-0 right-0 z-10">
      <div className="bg-gradient-to-br from-black/90 via-blue-900/60 to-black pt-4 pb-8">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4 pl-4">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handslogo.jpg-TJuhvS3rVpj0kBrc9rQL5P9XnqrOKr.jpeg" 
              alt="HandsLTD Logo" 
              className="h-10 w-10 object-cover rounded-full"
            />
            <span className="text-white text-xl font-bold">HandsLTD</span>
          </div>
          <ul className="flex space-x-4">
            <li><a href="#home" className="text-white hover:text-blue-300 transition-colors duration-200">Home</a></li>
            <li><a href="#services" className="text-white hover:text-blue-300 transition-colors duration-200">Services</a></li>
            <li><a href="#testimonials" className="text-white hover:text-blue-300 transition-colors duration-200">Testimonials</a></li>
            <li><a href="#updates" className="text-white hover:text-blue-300 transition-colors duration-200">Updates</a></li>
            <li><a href="#about" className="text-white hover:text-blue-300 transition-colors duration-200">About</a></li>
            <li><a href="#contact" className="text-white hover:text-blue-300 transition-colors duration-200">Contact</a></li>
          </ul>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-90">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <button onClick={() => setIsMenuOpen(false)} className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <ul className="flex flex-col items-center space-y-4">
                <li><a id="mobile-home-link" href="#Herosection" className="text-white hover:text-blue-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                <li><a id="mobile-services-link" href="#services" className="text-white hover:text-blue-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Services</a></li>
                <li><a id="mobile-testimonials-link" href="#testimonials" className="text-white hover:text-blue-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
                <li><a id="mobile-updates-link" href="#updates" className="text-white hover:text-blue-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Updates</a></li>
                <li><a id="mobile-about-link" href="#about" className="text-white hover:text-blue-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>About</a></li>
                <li><a id="mobile-contact-link" href="#contact" className="text-white hover:text-blue-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Contact us</a></li>
                {/* <li><Link id="mobile-admin-login-link" to="/admin" className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full border-2 border-white transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Admin Login</Link></li> */}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header