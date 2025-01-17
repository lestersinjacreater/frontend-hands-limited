export function Header() {
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
        </nav>
      </div>
    </header>
  );
}