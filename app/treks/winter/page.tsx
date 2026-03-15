"use client"

import Image from 'next/image'
import { Calendar, MapPin } from 'lucide-react' // Using lucide-react for the icons

const winterTreks = [
  { slug: 'kedarkantha', name: 'Kedarkantha Trek', price: '6,500', days: '4N/5D', route: 'Dehradun ⇄ Dehradun', img: '/images/Treks/Kedarkantha.png', tag: 'Group' },
  { slug: 'tungnath', name: 'Tungnath & Chandrashila', price: '5,200', days: '2N/3D', route: 'Rishikesh ⇄ Rishikesh', img: '/images/wework/Tungnath.jpeg', tag: 'Group' },
  { slug: 'kedar', name: 'Khaliya Top', price: '25,000', days: '1N/2D', route: 'Munsiyari ⇄ Munsiyari', img: '/images/wework/Kedarnath.jpg', tag: 'Group' },
  { slug: 'kuari-pass', name: 'Kuari Pass', price: '9,000', days: '6N/7D', route: 'Joshimath ⇄ Joshimath', img: '/images/Treks/Kedarkantha.png', tag: 'Group' },
  { slug: 'hamta-pass', name: 'Hamta Pass', price: '9,000', days: '6N/7D', route: 'Manali ⇄ Manali', img: '/images/Treks/Kedarkantha.png', tag: 'Group' },
  { slug: 'brahmatal', name: 'Brahmatal Trek', price: '9,000', days: '6N/7D', route: 'Kathgodam ⇄ Kathgodam', img: '/images/Treks/Kedarkantha.png', tag: 'Group' },
]

export default function WinterTreksPage() {
  return (
    <div className="py-20 bg-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A2B49] mb-4 text-center">Winter Treks</h1>
            <p className="text-center text-gray-500 max-w-2xl mx-auto">
                Discover the magic of the Himalayas in winter. Choose from our handpicked group departures or create your own trail.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {winterTreks.map((t) => (
            <div key={t.slug} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
              {/* Image Section */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                    src={t.img} 
                    alt={t.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                {t.tag && (
                    <span className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {t.tag}
                    </span>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1A2B49] mb-2">{t.name}</h3>
                
                <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-xl font-black text-gray-900">₹{t.price}/-</span>
                    <span className="text-xs text-gray-400 font-medium">Onwards</span>
                </div>

                <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} className="text-orange-500" />
                        <span className="text-sm font-medium">{t.days}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} />
                        <span className="text-xs truncate">{t.route}</span>
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
                    className="bg-[#1A2B49] hover:bg-black text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors"
                  >
                    Book Now
                  </button>

                  <a 
                    href={`/treks/${t.slug}`} 
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