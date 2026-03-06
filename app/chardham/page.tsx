"use client"
import Image from 'next/image'

const charDhamPackages = [
  { id: 'badrinath', name: 'Badrinath Package', days: '9N/10D', price: '₹12,000/person', img: '/images/digital/Aadi Kailash.jpg' },
  { id: 'kedarnath', name: 'Kedarnath Package', days: '7N/8D', price: '₹10,000/person', img: '/images/wework/Kedarnath.jpg' },
  { id: 'kedarnath', name: 'Kedarnath Package', days: '7N/8D', price: '₹10,000/person', img: '/images/wework/Kedarnath.jpg' }
]

const doDhamPackages = [
  { id: 'badrinath-kedarnath', name: 'Do Dham (Badrinath–Kedarnath)', days: '6N/7D', price: '₹8,500/person', img: '/images/wework/Kedarnath.jpg' },
  { id: 'badrinath-heli', name: 'Do Dham by Helicopter', days: '2N/3D', price: '₹45,000/person', img: '/images/digital/BADRINATH.mp4' },
  { id: 'badrinath-heli', name: 'Do Dham by Helicopter', days: '2N/3D', price: '₹45,000/person', img: '/images/digital/BADRINATH.mp4' }
]

export default function ChardhamPage() {
  return (
    <div className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-bold mb-6">Char Dham Yatra Packages</h1>
        <p className="mb-8 text-gray-600">Choose from our curated Char Dham and Do Dham packages.</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Char Dham Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {charDhamPackages.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative h-44 w-full">
                  <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{p.name}</h3>
                  <div className="mt-2 text-gray-600">Duration: <span className="font-medium">{p.days}</span></div>
                  <div className="mt-1 text-green-700 font-bold">Price: {p.price}</div>
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => {
                        try { if (typeof window !== 'undefined') window.dispatchEvent(new Event('openContactForm')) } catch (e) {}
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
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Do Dham Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doDhamPackages.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative h-44 w-full">
                  <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{p.name}</h3>
                  <div className="mt-2 text-gray-600">Duration: <span className="font-medium">{p.days}</span></div>
                  <div className="mt-1 text-green-700 font-bold">Price: {p.price}</div>
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => {
                        try { if (typeof window !== 'undefined') window.dispatchEvent(new Event('openContactForm')) } catch (e) {}
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
        </section>
      </div>
    </div>
  )
}
