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
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10"></div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              EMPOWERING<br />
              LIVES WITH<br />
              <span className="text-blue-600">QUALITY</span><br />
              SUPPLIES
            </h1>
            
            <button 
              className="px-8 py-3 text-white text-lg font-medium rounded-full
                       bg-black/40 hover:bg-black/60 transition-colors duration-300"
            >
              Contact us today
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  