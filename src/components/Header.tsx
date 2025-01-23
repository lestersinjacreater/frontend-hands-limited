import React, { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handles clicks outside the menu (on the overlay) to close the menu
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).classList.contains("menu-overlay")) {
      setIsMenuOpen(false); // Close the menu when clicking on the overlay
    }
  };

  useEffect(() => {
    // Closes the menu if the window is resized to a larger screen (>= 768px)
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the resize event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

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
          <ul className="flex space-x-4 items-center">
            <li><a href="#home" className="text-white hover:text-blue-300 transition-colors duration-200">Home</a></li>
            <li><a href="#services" className="text-white hover:text-blue-300 transition-colors duration-200">Services</a></li>
            <li><a href="#testimonials" className="text-white hover:text-blue-300 transition-colors duration-200">Testimonials</a></li>
            <li><a href="#updates" className="text-white hover:text-blue-300 transition-colors duration-200">Updates</a></li>
            <li><a href="#about" className="text-white hover:text-blue-300 transition-colors duration-200">About</a></li>
            <li><a href="#contact" className="text-white hover:text-blue-300 transition-colors duration-200">Contact</a></li>
            <li><a href="#login" className="text-white hover:text-blue-300 transition-colors duration-200">Login</a></li>
          </ul>
        </nav>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50 p-4 menu-overlay" onClick={handleOutsideClick}>
            <div className="bg-white/10 backdrop-blur-md p-4 md:p-8 rounded-lg shadow-lg w-full max-w-xs md:max-w-md">
              <ul className="flex flex-col space-y-4">
                <li><a href="#home" className="text-white hover:text-orange-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                <li><a href="#services" className="text-white hover:text-orange-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Services</a></li>
                <li><a href="#testimonials" className="text-white hover:text-orange-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
                <li><a href="#updates" className="text-white hover:text-orange-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Updates</a></li>
                <li><a href="#about" className="text-white hover:text-orange-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>About</a></li>
                <li><a href="#contact" className="text-white hover:text-orange-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                <li><a href="#login" className="text-white hover:text-orange-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Login</a></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
