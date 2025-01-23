import { Link } from "react-scroll";

export function Header() {
  return (
    <header className="relative top-0 left-0 right-0 z-10">
      <div className="bg-gradient-to-b from-black via-black/70 to-black pt-4 pb-5">
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
            {[
              { name: 'Home', id: 'hero' },
              { name: 'Services', id: 'services' },
              { name: 'Testimonials', id: 'testimonials' },
              { name: 'Updates', id: 'updates' },
              { name: 'About', id: 'about' },
              { name: 'Contact us', id: 'contact' }
            ].map(({ name, id }) => (
              <li key={id}>
                <Link 
                  to={id} 
                  smooth={true} 
                  duration={600} 
                  offset={-80} // Adjust for fixed navbar
                  className="text-white hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
