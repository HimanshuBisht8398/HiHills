"use client"

import Image from 'next/image'
import { Calendar, MapPin, CloudRain } from 'lucide-react' 

const monsoonTreks = [
  { 
    slug: 'valley-of-flowers', 
    name: 'Valley of Flowers Trek', 
    price: '9,500', 
    days: '5N/6D', 
    route: 'Rishikesh ⇄ Rishikesh', 
    img: '/images/Treks/ValleyOfFlowers.jpg', 
    tag: 'Seasonal' 
  },
  { 
    slug: 'hemkund-sahib', 
    name: 'Hemkund Sahib Trek', 
    price: '8,500', 
    days: '4N/5D', 
    route: 'Rishikesh ⇄ Rishikesh', 
    img: '/images/Treks/Hemkund.jpg', 
    tag: 'Pilgrimage' 
  },
  { 
    slug: 'har-ki-dun', 
    name: 'Har Ki Dun Trek', 
    price: '9,900', 
    days: '6N/7D', 
    route: 'Dehradun ⇄ Dehradun', 
    img: '/images/Treks/Harkidun.jpg', 
    tag: 'Group' 
  },
  { 
    slug: 'tarsar-marsar', 
    name: 'Tarsar Marsar (Kashmir)', 
    price: '14,500', 
    days: '6N/7D', 
    route: 'Srinagar ⇄ Srinagar', 
    img: '/images/Treks/Tarsar.jpg', 
    tag: 'Monsoon Special' 
  },
  { 
    slug: 'nag-tibba-monsoon', 
    name: 'Nag Tibba Monsoon Hike', 
    price: '3,500', 
    days: '1N/2D', 
    route: 'Dehradun ⇄ Dehradun', 
    img: '/images/Treks/Nagtibba.jpg', 
    tag: 'Weekend' 
  },
  { 
    slug: 'hampta-pass-monsoon', 
    name: 'Hampta Pass Trek', 
    price: '9,500', 
    days: '4N/5D', 
    route: 'Manali ⇄ Manali', 
    img: '/images/Treks/Hamptapass.webp', 
    tag: 'Top Seller' 
  },
  { 
    slug: 'bhrigu-lake', 
    name: 'Bhrigu Lake Trek', 
    price: '6,500', 
    days: '3N/4D', 
    route: 'Manali ⇄ Manali', 
    img: '/images/Treks/Bhrigu.jpg', 
    tag: 'Alpine Lake' 
  },
  { 
    slug: 'ali-bedni-bugyal', 
    name: 'Ali Bedni Bugyal', 
    price: '10,500', 
    days: '5N/6D', 
    route: 'Rishikesh ⇄ Rishikesh', 
    img: '/images/Treks/Bedni.jpg', 
    tag: 'Meadows' 
  },
];

export default function MonsoonTreksPage() {
  return (
    <div className="py-20"> {/* Light blue-ish tint for monsoon theme */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A2B49] mb-4 text-center">Monsoon Treks</h1>
            <p className="text-center text-gray-500 max-w-2xl mx-auto">
                Witness the mountains come alive. Explore emerald meadows, blooming valleys, and misty trails during the magical rainy season.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {monsoonTreks.map((t) => (
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
                    <div className="absolute top-4 right-4 bg-green-600/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                        <CloudRain size={10} />
                        {t.tag}
                    </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1A2B49] mb-2">{t.name}</h3>
                
                <div className="flex items-baseline gap-1 mb-4 text-green-700">
                    <span className="text-xl font-black">₹{t.price}/-</span>
                    <span className="text-xs text-gray-400 font-medium italic">All Inclusive</span>
                </div>

                <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} className="text-green-500" />
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
                    className="bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors"
                  >
                    Enquire Now
                  </button>

                  <a 
                    href={`/treks/${t.slug}`} 
                    className="text-blue-600 border border-blue-200 hover:bg-blue-50 px-4 py-2 rounded-lg text-xs font-bold transition-all"
                  >
                    View Trail
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