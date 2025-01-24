import type React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"

interface HeaderProps {
  isAuthenticated: boolean
}

export function Header({ isAuthenticated }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).classList.contains("menu-overlay")) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-gradient-to-r from-black via-blue-900 to-black" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handslogo.jpg-TJuhvS3rVpj0kBrc9rQL5P9XnqrOKr.jpeg"
              alt="HandsLTD Logo"
              className="h-10 w-10 object-cover rounded-full"
            />
            <span className="text-white text-xl font-bold">HandsLTD</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <ScrollLink
              to="home"
              smooth={true}
              offset={-70}
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="products"
              smooth={true}
              offset={-70}
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              Products
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              offset={-70}
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              smooth={true}
              offset={-70}
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              Testimonials
            </ScrollLink>
            <ScrollLink
              to="updates"
              smooth={true}
              offset={-70}
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              Updates
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              offset={-70}
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-70}
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              Contact
            </ScrollLink>
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50 p-4 menu-overlay"
            onClick={handleOutsideClick}
          >
            <div className="bg-gradient-to-br from-black via-blue-900 to-black p-4 md:p-8 rounded-lg shadow-lg w-full max-w-xs md:max-w-md">
              <ul className="flex flex-col space-y-4">
                <li>
                  <ScrollLink
                    to="home"
                    smooth={true}
                    offset={-70}
                    className="text-white hover:text-blue-300 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="products"
                    smooth={true}
                    offset={-70}
                    className="text-white hover:text-blue-300 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Products
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="services"
                    smooth={true}
                    offset={-70}
                    className="text-white hover:text-blue-300 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="testimonials"
                    smooth={true}
                    offset={-70}
                    className="text-white hover:text-blue-300 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="updates"
                    smooth={true}
                    offset={-70}
                    className="text-white hover:text-blue-300 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Updates
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    offset={-70}
                    className="text-white hover:text-blue-300 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    offset={-70}
                    className="text-white hover:text-blue-300 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </ScrollLink>
                </li>
                {isAuthenticated ? (
                  <li>
                    <Link
                      to="/dashboard"
                      className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      to="/login"
                      className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

