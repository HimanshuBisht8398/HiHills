"use client"
import Image from 'next/image'
import { Moon, MapPin } from 'lucide-react' // Using lucide-react for consistency

const hotelPackages = [
  { slug: 'nainital-resort', name: 'Nainital Resort Stay', nights: '2N/3D', location: 'Near Naini Lake', price: '3,500', img: '/images/wework/Nainital.jpg', tag: 'Luxury' },
  { slug: 'almora-homestay', name: 'Almora Homestay', nights: '1N/2D', location: 'Binsar Road', price: '2,000', img: '/images/wework/Almora.jpg', tag: 'Homestay' },
  { slug: 'haridwar-riverview', name: 'Haridwar Riverview Hotel', nights: '2N/3D', location: 'Vishnu Ghat', price: '4,200', img: '/images/wework/Haridwar.jpeg', tag: 'Riverfront' },
  { slug: 'kedarnath-base', name: 'Kedarnath Base Hotel', nights: '1N/1D', location: 'Guptkashi/Phata', price: '2,800', img: '/images/wework/Kedarnath.jpg', tag: 'Standard' },
  { slug: 'rishikesh-riverside', name: 'Rishikesh Riverside Stay', nights: '2N/3D', location: 'Laxman Jhula', price: '3,000', img: '/images/wework/Rishikesh.jpg', tag: 'Boutique' },
]

export default function HotelsPage() {
  return (
    <div className="py-20 bg-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A2B49] mb-4">Handpicked Stays</h1>
            <p className="text-gray-500 max-w-2xl mx-auto italic">
                From cozy mountain homestays to luxury riverside resorts.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotelPackages.map((p) => (
            <div key={p.slug} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
              {/* Image Section */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image 
                    src={p.img} 
                    alt={p.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                {p.tag && (
                    <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {p.tag}
                    </span>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1A2B49] mb-1">{p.name}</h3>
                
                <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-xl font-black text-gray-900">₹{p.price}/-</span>
                    <span className="text-xs text-gray-400 font-medium">Per Night</span>
                </div>

                <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Moon size={16} className="text-blue-500" />
                        <span className="text-sm font-medium">{p.nights} Stay</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} />
                        <span className="text-xs truncate">{p.location}</span>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-auto flex items-center justify-between">
                  <button
                    onClick={() => {
                      try {
                        if (typeof window !== 'undefined') window.dispatchEvent(new Event('openContactForm'))
                      } catch (e) {}
                    }}
                    className="bg-[#1A2B49] hover:bg-black text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-md"
                  >
                    Book Now
                  </button>

                  <a 
                    href={`/hotels/${p.slug}`} 
                    className="text-orange-600 border border-orange-200 hover:bg-orange-50 px-4 py-2 rounded-lg text-xs font-bold transition-all"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}