import Link from 'next/link'
import Image from 'next/image'

const seasons = [
  {
    key: 'winter',
    title: 'Winter Treks',
    img: '/images/Treks/Winter.jpg',
    desc: 'Experience the serene beauty of winter landscapes with our curated winter treks.',
  },
  {
    key: 'summer',
    title: 'Summer Treks',
    img: '/images/Treks/Summer.jpg',
    desc: 'Discover the vibrant flora and fauna of the Himalayas with our summer trekking routes.',
  },
  {
    key: 'rainy',
    title: ' Monsoon Treks',
    img: '/images/Treks/Monsoon.jpg',
    desc: 'Embark on an adventure through lush greenery and rejuvenating landscapes during the monsoon season.',
  },
]

export const metadata = {
  title: 'Treks by Season — Winter, Summer & Monsoon',
  description:
    'Himalayan treks by season: winter treks (Kedarkantha, Tungnath), summer and monsoon treks. Expert-led group departures from Haridwar.',
}

export default function TreksPage() {
  return (
    <div className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-bold mb-8">Treks by Season</h1>
        <p className="mb-8 text-gray-600">Choose a season to see recommended treks and itineraries.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {seasons.map((s, index) => (
            <Link
              key={s.key}
              href={`/treks/${s.key}`}
              prefetch
              className="block rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-white"
            >
                <div className="relative h-48 w-full">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{s.title}</h3>
                  <p className="text-gray-500 mt-2">{s.desc}</p>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
