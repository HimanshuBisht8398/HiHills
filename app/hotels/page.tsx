"use client"
import Image from 'next/image'

const hotelPackages = [
  { slug: 'nainital-resort', name: 'Nainital Resort Stay', nights: '2N/3D', price: '₹3,500/person', img: '/images/wework/Nainital.jpg' },
  { slug: 'almora-homestay', name: 'Almora Homestay', nights: '1N/2D', price: '₹2,000/person', img: '/images/wework/Almora.jpg' },
  { slug: 'haridwar-riverview', name: 'Haridwar Riverview Hotel', nights: '2N/3D', price: '₹4,200/person', img: '/images/wework/Haridwar.jpeg' },
  { slug: 'kedarnath-base', name: 'Kedarnath Base Hotel', nights: '1N/1D', price: '₹2,800/person', img: '/images/wework/Kedarnath.jpg' },
  { slug: 'rishikesh-riverside', name: 'Rishikesh Riverside Stay', nights: '2N/3D', price: '₹3,000/person', img: '/images/wework/Rishikesh.jpg' },
]

export default function HotelsPage() {
  return (
    <div className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-bold mb-6">Hotel Booking Packages</h1>
        <p className="mb-8 text-gray-600">Choose comfortable stays we handpicked — from budget to premium.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotelPackages.map((p) => (
            <div key={p.slug} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative h-44 w-full">
                <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{p.name}</h3>
                <div className="mt-2 text-gray-600">Nights: <span className="font-medium">{p.nights}</span></div>
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
                  <a href="#" className="px-4 py-2 rounded-lg border border-gray-200">Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
