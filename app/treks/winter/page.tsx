"use client"

import Image from 'next/image'

const winterTreks = [
  { slug: 'kedarkantha', name: 'Kedarkantha Trek', price: '₹6,500/person', days: '4N/5D', img: '/images/Treks/Kedarkantha.png' },
  { slug: 'tungnath', name: 'Tungnath & Chandrashila', price: '₹5,200/person', days: '2N/3D', img: '/images/wework/Tungnath.jpeg' },
  { slug: 'kedar', name: 'Kedarnath Winter (Heli assist)', price: '₹25,000/person', days: '1N/2D', img: '/images/wework/Kedarnath.jpg' },
  { slug: 'kedar-kantha-extended', name: 'Kedarkantha Extended', price: '₹9,000/person', days: '6N/7D', img: '/images/Treks/Kedarkantha.png' },
]

export default function WinterTreksPage() {
  return (
    <div className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-bold mb-6">Winter Treks</h1>
        <p className="mb-8 text-gray-600">Popular winter treks — choose a package or book a custom itinerary.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {winterTreks.map((t) => (
            <div key={t.slug} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative h-44 w-full">
                <Image src={t.img} alt={t.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{t.name}</h3>
                <div className="mt-2 text-gray-600">Duration: <span className="font-medium">{t.days}</span></div>
                <div className="mt-1 text-green-700 font-bold">Price: {t.price}</div>

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => {
                      try {
                        if (typeof window !== 'undefined') window.dispatchEvent(new Event('openContactForm'))
                      } catch (e) {}
                    }}
                    className="bg-blue text-white px-4 py-2 rounded-lg"
                  >
                    Book Now
                  </button>

                  <a href="#" className="px-4 py-2 rounded-lg border border-gray-200">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
