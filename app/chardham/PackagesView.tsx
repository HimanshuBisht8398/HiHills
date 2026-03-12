"use client"
import React from "react"
import Link from "next/link"

interface Props {
  id: string
}

const tierTemplates = [
  {
    key: "basic",
    title: "Basic Package",
    Price: "25999",
    features: [
      "Complete travel assistance for the Char Dham Yatra covering Yamunotri, Gangotri, Kedarnath, and Badrinath.",
      "Budget-friendly accommodation in clean guesthouses, dharamshalas, or standard hotels.",
      "Daily vegetarian meals (Breakfast & Dinner) with hygienic arrangements.",
      "Transportation by sedan/SUV/tempo traveller as per group size.",
      "Experienced mountain driver for safe travel with pickup & drop from Haridwar / Rishikesh / Dehradun.",
      "Temple darshan assistance and local travel coordination.",
      "Basic trekking guidance (pony/palki available at extra cost).",
      "All toll taxes, parking, fuel charges & driver allowance included with 24/7 support.",
    ],
  },
  {
    key: "normal",
    title: "Delux Package",
    Price: "34999",
    features: [
      "Complete travel arrangements for the Char Dham Yatra covering Yamunotri, Gangotri, Kedarnath, and Badrinath.",
      "Comfortable stay in deluxe hotels with attached bathrooms and modern amenities.",
      "Daily hygienic vegetarian meals (Breakfast & Dinner) with betterdining facilities.",
      "Travel by comfortable AC sedan/SUV/tempo traveler based ongroup size.ERTIGA / DZIRE / PUSH BACK TEMPO TRAVELLER",
      "Skilled and experienced mountain drivers for safe hill journeys.Pickup and drop services from Haridwar/Rishikesh / Dehradun.",
      "Priority assistance for temple darshan and smooth localcoordination.",
      "Basic assistance for pony, palki, or helicopter booking (onrequest).",
      "All toll taxes, parking charges, fuel, and driver allowance included. Dedicated tour support team and 24/7 customer assistance throughout the trip."
    ],
  },
  {
    key: "premium",
    title: "Premium Package",
    Price: "54999",
    features: [
      "Complete VIP travel arrangements for the Char Dham Yatra covering Yamunotri, Gangotri, Kedarnath, and Badrinath.",
      "Stay in premium luxury hotels, resorts, and best available properties at each destination.",
      "Spacious rooms with modern amenities, scenic views, and personalized services.",
      "All meals included (Breakfast & Dinner) with high-quality dining options.",
      "Travel in luxury AC vehicles such as premium SUVs or luxury tempo travelers. INNOVA CRYSTA / FULLY AC URBANIA.",
      "Highly experienced drivers trained for mountain routes and guest comfort.",
      "VIP darshan assistance and priority temple visit coordination. Helicopter booking assistance for Kedarnath and optional Char Dham heli services.",
      "Personalized tour manager support and dedicated customer care. Pickup and drop from airport/railway station with seamless transfer services. All tolls, parking, fuel, driver allowance, and travel coordination included. 24/7 on-tour assistance ensuring a smooth, safe, and premium travel experience"
    ],
  },
]

export default function PackagesView({ id }: Props) {
  const title = id.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

  const baseDaysMap: Record<string, string> = {
    badrinath: "9N/10D",
    kedarnath: "7N/8D",
    "badrinath-kedarnath": "6N/7D",
    "badrinath-heli": "2N/3D",
  }

  const baseDays = baseDaysMap[id] ?? "9N/10D"

  return (
    <div className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          {title} Packages
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Choose the best package for your spiritual journey.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {tierTemplates.map((t) => (
            <div
              key={t.key}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
            >

              <div className="p-8 flex flex-col h-full">

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t.title}
                </h3>

                {/* Duration */}
                <div className="mt-2 text-gray-500 text-sm">
                  Duration: <span className="font-medium">{baseDays}</span>
                </div>

                {/* Price */}
                <div className="mt-4 text-3xl font-bold text-blue-600">
                  ₹{t.Price}
                  <span className="text-sm text-gray-500 font-normal">
                    {" "} / person
                  </span>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3 text-gray-700 text-sm leading-relaxed flex-grow list-disc list-inside">
                  {t.features.map((f) => (
                    <li key={f} className="py-1">{f}</li>
                  ))}
                </ul>

                {/* Button */}
                  <div className="mt-6 flex gap-3">
                    <Link href={`/chardham/${id}/${t.key}`} className="px-4 py-2 rounded-lg border border-gray-200"> View Itinerary</Link>
                  </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}