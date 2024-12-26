export function Header() {
    return (
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Logo</div>
          <ul className="flex space-x-4">
            {['Home', 'Services', 'Testimonials', 'Updates', 'About', 'Contact us'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-yellow-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
  
  