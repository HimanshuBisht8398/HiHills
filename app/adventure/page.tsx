"use client"
import Image from 'next/image'

const adventurePackages = [
  { slug: 'river-rafting', name: 'River Rafting Package', days: '1N/2D', price: '₹2,500/person', img: '/images/wework/Rishikesh.jpg' },
  { slug: 'camping-chopta', name: 'Chopta Camping & Trek', days: '2N/3D', price: '₹4,000/person', img: '/images/insta/One.jpeg' },
  { slug: 'rock-climbing', name: 'Rock Climbing Adventure', days: '1N/1D', price: '₹1,800/person', img: '/images/wework/Almora.jpg' },
  { slug: 'tungnath-trek', name: 'Tungnath Trek', days: '2N/3D', price: '₹3,200/person', img: '/images/wework/Tungnath.jpeg' },
  { slug: 'kedarkantha', name: 'Kedarkantha (Adventure)', days: '4N/5D', price: '₹6,500/person', img: '/images/Treks/Kedarkantha.png' },
]

export default function AdventurePage() {
  return (
    <div className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-bold mb-6">Adventure Activities & Packages</h1>
        <p className="mb-8 text-gray-600">Choose from thrilling adventure activities curated for all experience levels.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adventurePackages.map((p) => (
            <div key={p.slug} className="bg-white rounded-2xl shadow-md overflow-hidden">
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
                      try {
                        if (typeof window !== 'undefined') window.dispatchEvent(new Event('openContactForm'))
                      } catch (e) {}
                    }}
                    className="bg-blue text-white px-4 py-2 rounded-lg"
                  >
                    Book Now
                  </button>
                  <a href={`#`} className="px-4 py-2 rounded-lg border border-gray-200">Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
