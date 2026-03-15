"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Disclosure, Transition } from "@headlessui/react"; // Required for accordions
import { ChevronUpIcon } from "@heroicons/react/24/solid"; // Required for icons

type Itinerary = {
  title: string;
  img?: string;
  days: string[];
  inclusions?: string[];
  highlights?: string[];
};

const ITINERARIES: Record<string, Itinerary> = {
  // ... (All your ITINERARIES data here)
  dehradun: {
    title: "Dehradun - The Ultimate Doon & Queen of Hills Itinerary",
    days: [
      "Day 1: Arrival & Heritage — Pickup from Dehradun Railway Station/Airport. Check-in and visit the Forest Research Institute (FRI) and Tapkeshwar Mahadev Temple. Evening at Mindrolling Monastery and local cafes.",
      "Day 2: Nature's Wonders — Explore Robber's Cave (Guchhupani) and the medicinal springs of Sahastradhara. Afternoon visit to Malsi Deer Park. Overnight stay in Dehradun.",
      "Day 3: Mussoorie Day Trip — Drive to Mussoorie. Visit Kempty Falls, Mussoorie Lake, and Gun Hill. Spend the evening walking the Mall Road before returning to Dehradun.",
      "Day 4: Offbeat & Departure — Visit Lacchiwala Nature Park for a morning dip and the Kalinga War Memorial. Drop-off at Dehradun Railway Station/Airport for your departure.",
    ],
    highlights: [
      "Explore the iconic Forest Research Institute campus",
      "Adventure at Robber’s Cave and Sahastradhara springs",
      "Full-day excursion to Mussoorie – Queen of Hills",
      "Visit Tapkeshwar Mahadev Temple",
      "Peaceful walk at Mindrolling Monastery",
      "Relaxation at Lacchiwala Nature Park"
    ],
    inclusions: ["transport", "hotel", "meals", "guide"],
  },
  // ... Include all other districts (Nainital, Almora, Bageshwar, Pithoragarh, Champawat, 
  // Udham Singh Nagar, Haridwar, Chamoli, Uttarkashi, Pauri, Tehri, Rudraprayag)
};

export default function DistrictItineraryPage() {
  const params = useParams() as { district?: string };
  const slug = (params?.district || "").toLowerCase();
  const data = ITINERARIES[slug];

  const openContact = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("openContactForm", { detail: { district: slug } })
      );
    }
  };

  if (!data) {
    return (
      <main className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Itinerary not found</h1>
        <p className="text-gray-600 mb-8">We couldn't find a plan for "{params?.district}".</p>
        <button
          onClick={openContact}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Enquire Now
        </button>
      </main>
    );
  }

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-[#1A2B49]">
        <div className="absolute inset-0 z-0">
          {/* Fallback pattern if image is missing */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight drop-shadow-lg">
            {data.title}
          </h1>
          <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
            {slug.replace(/-/g, " ")} District
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-6">
        
        {/* HIGHLIGHTS SECTION */}
        {data.highlights && (
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 whitespace-nowrap">Package Highlights</h2>
              <div className="h-[1px] w-full bg-gray-200"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {data.highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white border border-gray-100 shadow-sm rounded-xl p-4 transition-transform hover:scale-[1.02]">
                  <div className="bg-green-100 rounded-full p-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  </div>
                  <p className="text-gray-700 font-medium text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INCLUSIONS BAR */}
        {data.inclusions && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-16">
            <h3 className="text-center text-gray-400 uppercase tracking-widest text-xs font-bold mb-6">What's Included</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {data.inclusions.map((item) => (
                <div key={item} className="flex flex-col items-center gap-2">
                  <div className="text-2xl">
                    {item === "transport" && "🚗"}
                    {item === "hotel" && "🏨"}
                    {item === "meals" && "🍳"}
                    {item === "guide" && "🧭"}
                    {item === "sightseeing" && "🎡"}
                    {item === "trekking" && "🥾"}
                    {item === "adventure" && "🚤"}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">
                    {item === "transport" && "Transport"}
                    {item === "hotel" && "Stay"}
                    {item === "meals" && "Meals"}
                    {item === "guide" && "Guide"}
                    {item === "sightseeing" && "Tour"}
                    {item === "trekking" && "Trekking"}
                    {item === "adventure" && "Activities"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ITINERARY DAYS (ACCORDION) */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Day-wise Plan</h2>
          {data.days.map((text, idx) => (
            <Disclosure key={idx} defaultOpen={idx === 0}>
              {({ open }) => (
                <div className={`rounded-2xl border transition-all duration-300 ${open ? 'bg-white shadow-md border-blue-100' : 'bg-white border-gray-100 hover:border-gray-300'}`}>
                  <Disclosure.Button className="flex w-full justify-between items-center px-6 py-5 text-left">
                    <div className="flex items-center gap-4">
                      <span className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm ${open ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {idx + 1}
                      </span>
                      <span className={`text-lg font-bold ${open ? 'text-gray-900' : 'text-gray-700'}`}>
                        Day {idx + 1} Schedule
                      </span>
                    </div>
                    <ChevronUpIcon className={`${open ? "rotate-180" : ""} h-6 w-6 text-gray-400 transition-transform`} />
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-150 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-100 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-6 pb-6 text-gray-600 leading-relaxed pl-20">
                      {text}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>

        {/* FOOTER CALL TO ACTION */}
        <div className="mt-20 bg-blue-900 rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to explore {slug.replace(/-/g, " ")}?</h3>
                <p className="text-blue-200 mb-8 max-w-lg mx-auto">Get a customized quote and expert advice for your Uttarakhand trip.</p>
                <button
                    onClick={openContact}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105"
                >
                    Book This Itinerary
                </button>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-20 -mb-20"></div>
        </div>
      </div>
    </main>
  );
}