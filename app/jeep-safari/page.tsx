"use client"
import Image from 'next/image'
import Link from 'next/link'

const jeepPackages = [
  { slug: 'corbett-jeep', name: 'Jim Corbett Jeep Safari', duration: '1N/2D', price: '₹4,500/person', img: '/images/dedicated/man.svg' },
  { slug: 'rajaji-jeep', name: 'Rajaji National Park Safari', duration: '1N/2D', price: '₹3,800/person', img: '/images/wework/Almora.jpg' },
  { slug: 'paldwani-jeep', name: 'Paldwani Jeep Adventure', duration: '1N/1D', price: '₹3,200/person', img: '/images/wework/Nainital.jpg' },
  { slug: 'corbett-overnight', name: 'Corbett Overnight Safari', duration: '2N/3D', price: '₹8,500/person', img: '/images/wework/Badrinath.webp' },
]

export default function JeepSafariPage() {
  return (
    <div className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-bold mb-6">Jeep Safari Packages</h1>
        <p className="mb-8 text-gray-600">Explore wildlife with safe, guided jeep safaris across top reserves.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jeepPackages.map((p) => (
            <div key={p.slug} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative h-44 w-full">
                <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{p.name}</h3>
                <div className="mt-2 text-gray-600">Duration: <span className="font-medium">{p.duration}</span></div>
                <div className="mt-1 text-green-700 font-bold">Price: {p.price}</div>
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
                  <Link href="#" className="px-4 py-2 rounded-lg border border-gray-200">Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
