interface ProductCardProps {
  title: string
  description: string
  image: string
}

function ProductCard({ title, description, image }: ProductCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl group h-[450px] flex flex-col shadow-lg">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent group-hover:from-black/80 group-hover:via-black/60 transition-colors duration-300" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-8">
        {/* Title at the top */}
        <h3 className="text-amber-500 text-3xl font-bold leading-tight mb-4">
          {title}
        </h3>

        {/* Spacer to push the rest to the bottom */}
        <div className="flex-grow" />

        {/* Description and button at the bottom */}
        <div>
          <p className="text-white/90 text-lg leading-relaxed tracking-wide mb-6">
            {description}
          </p>
          <a 
            href="#"
            className="inline-flex items-center justify-center px-8 py-3
                     bg-blue-600 hover:bg-blue-700 text-white rounded-full 
                     transition-all duration-300 text-base font-medium
                     hover:transform hover:translate-y-[-2px] hover:shadow-lg
                     self-start"
          >
            See more
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const products = [
    {
      title: "Medical Equipment",
      description: "We provide high-quality medical equipment to healthcare facilities, ensuring they have the necessary tools for effective patient care.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handsprod.jpg-mvzaTjhEsgXnkwAzfZPfOR4tzg160Y.jpeg"
    },
    {
      title: "Pharmaceuticals",
      description: "We supply essential pharmaceuticals that meet regulatory standards, supporting health institutions in delivering safe and effective treatments.",
      image: "https://gowarehouse.io/wp-content/uploads/2021/05/pharmaceutical-storage-1-970x965.png"
    },
    {
      title: "Non-Pharmaceuticals",
      description: "We offer a wide range of non-pharmaceutical products, including medical supplies and consumables, to enhance healthcare service delivery.",
      image: "https://th.bing.com/th/id/OIP.SbrM5x9AZ4TmA-pf6RNmcgAAAA?rs=1&pid=ImgDetMain"
    },
    {
      title: "Spare Parts",
      description: "We deliver reliable spare parts for various machinery and equipment, ensuring minimal downtime and optimal performance in operations.",
      image: "https://th.bing.com/th/id/OIP.9x1Zjoh_rZqZCOWg2I-lUAHaH2?rs=1&pid=ImgDetMain"
    }
  ]

  return (
    <section className="relative">
      {/* Gradient overlay for smooth transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
      
      {/* Main content */}
      <div className="relative z-20 py-20 px-4 bg-gradient-to-b from-black via-blue-900 to-black">
        <div className="container mx-auto">
          <h2 className="text-blue-300 text-5xl font-bold mb-12">
            PRODUCTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.title}
                {...product}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}