import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll

interface HeaderProps {
  isAuthenticated: boolean;
}

export function Header({ isAuthenticated }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).classList.contains("menu-overlay")) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className="relative top-0 left-0 right-0 z-10">
      <div className="bg-gradient-to-br from-black/90 via-blue-900/60 to-black pt-4 pb-8">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="flex items-center space-x-4 pl-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handslogo.jpg-TJuhvS3rVpj0kBrc9rQL5P9XnqrOKr.jpeg"
              alt="HandsLTD Logo"
              className="h-10 w-10 object-cover rounded-full"
            />
            <span className="text-white text-xl font-bold">HandsLTD</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="flex space-x-4 items-center">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  offset={-70} // Adjust for fixed header
                  className="text-white hover:text-blue-300 transition-colors duration-200"
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
                >
                  Contact
                </ScrollLink>
              </li>
              {isAuthenticated ? (
                <li>
                  <Link
                    to="/dashboard"
                    className="text-white hover:text-blue-300 transition-colors duration-200"
                  >
                    Dashboard
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="text-white hover:text-blue-300 transition-colors duration-200"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50 p-4 menu-overlay"
            onClick={handleOutsideClick}
          >
            <div className="bg-white/10 backdrop-blur-md p-4 md:p-8 rounded-lg shadow-lg w-full max-w-xs md:max-w-md">
              <ul className="flex flex-col space-y-4">
                <li>
                  <ScrollLink
                    to="home"
                    smooth={true}
                    offset={-70}
                    className="text-white hover:text-orange-300 transition-colors duration-200"
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
                    className="text-white hover:text-orange-300 transition-colors duration-200"
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
                    className="text-white hover:text-orange-300 transition-colors duration-200"
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
                    className="text-white hover:text-orange-300 transition-colors duration-200"
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
                    className="text-white hover:text-orange-300 transition-colors duration-200"
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
                    className="text-white hover:text-orange-300 transition-colors duration-200"
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
                    className="text-white hover:text-orange-300 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </ScrollLink>
                </li>
                {isAuthenticated ? (
                  <li>
                    <Link
                      to="/dashboard"
                      className="text-white hover:text-orange-300 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      to="/login"
                      className="text-white hover:text-orange-300 transition-colors duration-200"
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
  );
}
