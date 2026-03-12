"use client"
import React from "react"
import { useParams } from "next/navigation"

const prettify = (s: string) =>
  s.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

const baseItineraries: Record<string, string[]> = {
  badrinath: [
    "Arrival at Haridwar/Rishikesh and scenic drive to Joshimath. Overnight stay.",
    "Drive to Badrinath, temple darshan and explore Mana village.",
    "Return towards Haridwar with stops at beautiful viewpoints.",
  ],
  kedarnath: [
    "Arrival and drive to Guptkashi. Overnight stay.",
    "Trek or helicopter ride to Kedarnath and temple darshan.",
    "Return trek to Gaurikund and drive back.",
  ],
  "badrinath-kedarnath": [
    "Arrival and transfer to transit town.",
    "Visit Badrinath temple and local sightseeing.",
    "Transfer to Kedarnath base and prepare for darshan.",
    "Kedarnath darshan and return transfer.",
  ],
  "badrinath-heli": [
    "Arrival and transfer to helipad base.",
    "Helicopter ride to Badrinath and darshan.",
  ],
}

export default function TierItineraryPage() {
  const params = useParams() as { id?: string; tier?: string }

  const id = params?.id ?? "package"
  const tier = params?.tier ?? "basic"

  const title = prettify(id)
  const tierTitle = prettify(tier)

  const base = baseItineraries[id] ?? [
    "Arrival and orientation.",
    "Local exploration and activities.",
    "Return journey.",
    ""
  ]

  const tierDecoration: Record<string, string> = {
    basic: "Shared transport and standard accommodations.",
    normal: "Private transfers and comfortable hotel stays with meals.",
    premium: "Luxury transport, premium stays and priority darshan.",
  }

  const finalItinerary = [...base]

  if (tier === "normal") {
    finalItinerary.push("Local cultural immersion and guided walk.")
  }

  if (tier === "premium") {
    finalItinerary.push(
      "Exclusive private excursion with luxury amenities and guided experience."
    )
  }

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900">
            {title} Itinerary
          </h1>

          <span className="inline-block mt-4 px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-medium">
            {tierTitle} Package
          </span>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Explore the detailed day-wise itinerary for this spiritual
            Himalayan journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-blue-500 pl-8 space-y-10">

          {finalItinerary.map((activity, i) => (
            <div key={i} className="relative group">

              {/* Timeline Dot */}
              <span className="absolute -left-[34px] top-2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow"></span>

              {/* Card */}
              <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 group-hover:shadow-xl">

                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  Day {i + 1}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {activity}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* Inclusions */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md">

          <h2 className="text-2xl font-semibold mb-4">
            Inclusions & Notes
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>MEETING AND ASSISTANCE ON ARRIVAL</li>
            <li>GROUP LEADER ALSO WITH YOU IN ENTIRE JOURNEY</li>
           <li>ACCOMMODATIONS IN Rooms On Triple Occupancy At The Hotel.</li>
           <li>Daily Fixed Menu Breakfast & Dinner</li>
           <li>Driver Bata, Toll Tax And Parking</li>
          </ul>
          <br/>
            <h2 className="text-2xl font-semibold mb-4">
            Exclusions 
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>Air fare/train fare until mentioned in the itinerary</li>
            <li>Any meals other than those specified in ‘inclusions.</li>
           <li>Expenses of personal nature such as tips, telephone calls, laundry, pooja samagri etc.</li>
           <li>Any other item not specified in “inclusions”.</li>
           <li>Porterage at hotel/airport/railway station and during trekking.</li>
           <li>Entrance fee/emergency & medical cost.</li>
           <li>Cost incidental due to road blocks, landslides, change in the itinerary/stay on account of cancellation due to bad weather, ill health, and any factors beyond control.</li>
          </ul>

          {/* CTA */}
          <div className="mt-8 text-center">
          <button
  onClick={() => {
    try {
      if (typeof window !== "undefined")
        window.dispatchEvent(new Event("openContactForm"))
    } catch (e) {}
  }}
  className="bg-blue-200 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black px-8 py-3 rounded-lg font-medium shadow-md transition duration-300"
>
  Book This Package
</button>
          </div>

        </div>
      </div>
    </div>
  )
}