"use client"

import Image from 'next/image'
import { Calendar, MapPin, Sun } from 'lucide-react' 

const summerTreks = [
  { 
    slug: 'roopkund', 
    name: 'Roopkund Trek', 
    price: '11,500', 
    days: '7N/8D', 
    route: 'Kathgodam ⇄ Kathgodam', 
    img: '/images/Treks/Roopkund.jpg', 
    tag: 'High Altitude' 
  },
  { 
    slug: 'pindari-glacier', 
    name: 'Pindari Glacier Trek', 
    price: '9,000', 
    days: '6N/7D', 
    route: 'Kathgodam ⇄ Kathgodam', 
    img: '/images/Treks/Pindari.jpg', 
    tag: 'Glacier' 
  },
  { 
    slug: 'rupinn-pass', 
    name: 'Rupin Pass Trek', 
    price: '15,500', 
    days: '7N/8D', 
    route: 'Dehradun ⇄ Shimla', 
    img: '/images/Treks/RupinPass.jpg', 
    tag: 'Cross-Over' 
  },
  { 
    slug: 'buran-ghati', 
    name: 'Buran Ghati Trek', 
    price: '14,000', 
    days: '6N/7D', 
    route: 'Shimla ⇄ Shimla', 
    img: '/images/Treks/BuranGhati.jpg', 
    tag: 'Adventure' 
  },
  { 
    slug: 'har-ki-dun-summer', 
    name: 'Har Ki Dun Valley', 
    price: '9,500', 
    days: '6N/7D', 
    route: 'Dehradun ⇄ Dehradun', 
    img: '/images/Treks/Harkidun-Summer.jpg', 
    tag: 'Ancient Culture' 
  },
  { 
    slug: 'kedartal', 
    name: 'Kedartal Trek', 
    price: '12,500', 
    days: '6N/7D', 
    route: 'Dehradun ⇄ Dehradun', 
    img: '/images/Treks/Kedartal.jpg', 
    tag: 'Emerald Lake' 
  },
  { 
    slug: 'bali-pass', 
    name: 'Bali Pass Trek', 
    price: '16,500', 
    days: '7N/8D', 
    route: 'Dehradun ⇄ Rishikesh', 
    img: '/images/Treks/BaliPass.jpg', 
    tag: 'Technical' 
  },
  { 
    slug: 'gaumukh-tapovan', 
    name: 'Gaumukh Tapovan', 
    price: '13,500', 
    days: '5N/6D', 
    route: 'Dehradun ⇄ Dehradun', 
    img: '/images/Treks/Gaumukh.jpg', 
    tag: 'Spiritual' 
  },
];

export default function SummerTreksPage() {
  return (
    <div className="py-20 "> {/* Warm amber tint for summer theme */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A2B49] mb-4 text-center">Summer Treks</h1>
            <p className="text-center text-gray-500 max-w-2xl mx-auto">
                Escape the heat of the plains. Embark on epic journeys to high-altitude glaciers, ancient passes, and emerald alpine lakes.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {summerTreks.map((t) => (
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
                    <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                        <Sun size={10} />
                        {t.tag}
                    </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1A2B49] mb-2">{t.name}</h3>
                
                <div className="flex items-baseline gap-1 mb-4 text-amber-700">
                    <span className="text-xl font-black">₹{t.price}/-</span>
                    <span className="text-xs text-gray-400 font-medium italic">Fixed Departure</span>
                </div>

                <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} className="text-amber-500" />
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
                    className="bg-[#1A2B49] hover:bg-black text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-md shadow-blue-100"
                  >
                    Join Batch
                  </button>

                  <a 
                    href={`/treks/${t.slug}`} 
                    className="text-amber-600 border border-amber-200 hover:bg-amber-50 px-4 py-2 rounded-lg text-xs font-bold transition-all"
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