export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="bg-gradient-to-b from-black via-black/70 to-transparent pt-4 pb-8">
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
            {['Home', 'Services', 'Testimonials', 'Updates', 'About', 'Contact us'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
