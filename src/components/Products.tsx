import Link from 'next/link'

interface ProductCardProps {
  title: string
  description: string
  image: string
}

function ProductCard({ title, description, image }: ProductCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl group">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
      
      {/* Content */}
      <div className="relative z-10 p-8 min-h-[400px] flex flex-col">
        <h3 className="text-amber-500 text-3xl font-bold mb-4">
          {title}
        </h3>
        <p className="text-white text-lg mb-auto">
          {description}
        </p>
        <Link 
          href="#"
          className="inline-flex items-center justify-center px-6 py-2 mt-6 
                   bg-black/60 hover:bg-black/80 text-white rounded-full 
                   transition-colors duration-300 self-start"
        >
          See more
        </Link>
      </div>
    </div>
  )
}

export default function Products() {
  const products = [
    {
      title: "Medical Equipment",
      description: "We provide high-quality medical equipment to healthcare facilities, ensuring they have the necessary tools for effective patient care.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20110745-mcdMtejlvPVtmXH5SyMhe2h5qrOsfm.png"
    },
    {
      title: "Pharmaceuticals",
      description: "We supply essential pharmaceuticals that meet regulatory standards, supporting health institutions in delivering safe and effective treatments.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20110745-mcdMtejlvPVtmXH5SyMhe2h5qrOsfm.png"
    },
    {
      title: "Non-Pharmaceuticals",
      description: "we offer a wide range of non-pharmaceutical products, including medical supplies and consumables, to enhance healthcare service delivery.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20110745-mcdMtejlvPVtmXH5SyMhe2h5qrOsfm.png"
    },
    {
      title: "Spare Parts",
      description: "we deliver reliable spare parts for various machinery and equipment, ensuring minimal downtime and optimal performance in operations.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20110745-mcdMtejlvPVtmXH5SyMhe2h5qrOsfm.png"
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-blue-600 text-5xl font-bold mb-12">
          PRODUCTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

