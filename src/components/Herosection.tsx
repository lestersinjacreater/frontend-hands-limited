export default function HeroSection() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homepage.jpg-MNsYXh7Kz5XJIg8KPXr3uFm4LdNtva.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-blue-900/60 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            EMPOWERING<br />
            LIVES WITH<br />
            <span className="text-blue-300">QUALITY</span><br />
            SUPPLIES
          </h1>
          
          <button 
            className="px-8 py-3 text-white text-lg font-medium rounded-full
                     bg-blue-600/90 hover:bg-blue-700 transition-colors duration-300"
            // <a href="#contact" className="text-white hover:text-blue-400 transition-colors duration-200">Contact</a>
          >
          <a href="#contact" className="text-white hover:text-blue-400 transition-colors duration-200">Contact us today</a>

            {/* Contact us today */}
          </button>
        </div>
      </div>
    </div>
  );
}

