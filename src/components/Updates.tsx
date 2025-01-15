import { ArrowRight } from 'lucide-react'

interface UpdateCard {
  image: string
  date: string
  title: string
  content: string
}

const updates: UpdateCard[] = [
  {
    image: "https://media.istockphoto.com/id/157613698/photo/united-nations-building.jpg?s=1024x1024&w=is&k=20&c=UYLiAgy18PplaU6hMItjmVsifAQO1Em66feGoqeusSU=",
    date: "24 Oct,2021",
    title: "Lorem Ipsum passage, used since the 1500s",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    image: "https://media.istockphoto.com/id/157613698/photo/united-nations-building.jpg?s=1024x1024&w=is&k=20&c=UYLiAgy18PplaU6hMItjmVsifAQO1Em66feGoqeusSU=",
    date: "24 Oct,2021",
    title: "Lorem Ipsum passage, used since the 1500s",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    image: "https://media.istockphoto.com/id/157613698/photo/united-nations-building.jpg?s=1024x1024&w=is&k=20&c=UYLiAgy18PplaU6hMItjmVsifAQO1Em66feGoqeusSU=",
    date: "24 Oct,2021",
    title: "Lorem Ipsum passage, used since the 1500s",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
]

export default function UpdatesSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-12">
          Updates
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <article key={index} className="flex flex-col">
              <div className="relative aspect-[4/3] mb-6">
                <img
                  src={update.image || "/placeholder.svg"}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 2L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 2L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <time className="text-gray-600">{update.date}</time>
              </div>
              
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                {update.title}
              </h2>
              
              <p className="text-gray-600 mb-6 flex-grow">
                {update.content}
              </p>
              
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors hover:bg-blue-700 w-fit">
                Read More
                <ArrowRight className="w-5 h-5" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

