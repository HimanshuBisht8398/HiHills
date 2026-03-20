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
  haridwar: {
    title: "Haridwar - Sacred Ghats & Spiritual Escape Itinerary",
    days: [
      "Day 1: Arrival & Har Ki Pauri — Arrive in Haridwar, check in, and visit Har Ki Pauri, Mansa Devi Temple, and the local market. Attend the evening Ganga Aarti by the river.",
      "Day 2: Temple Circuit — Cover Chandi Devi Temple, Bharat Mata Mandir, Daksh Mahadev Temple, and Sapt Rishi Ashram. End the day with a peaceful riverside walk.",
      "Day 3: Rishikesh Excursion — Take a full-day trip to Rishikesh for Ram Jhula, Laxman Jhula, Triveni Ghat, and local cafes before returning to Haridwar.",
      "Day 4: Local Shopping & Departure — Spend a relaxed morning shopping for prasad and handicrafts, then proceed for your onward journey.",
    ],
    highlights: [
      "Evening Ganga Aarti at Har Ki Pauri",
      "Visit Mansa Devi and Chandi Devi temples",
      "Excursion to Rishikesh bridges and ghats",
      "Explore Daksh Mahadev and Sapt Rishi Ashram",
      "Traditional market walk and local food experience",
    ],
    inclusions: ["transport", "hotel", "meals", "guide"],
  },
  nainital: {
    title: "Nainital - Lakes, Hills & Kumaon Charm Itinerary",
    days: [
      "Day 1: Arrival & Lake Promenade — Reach Nainital, check in, enjoy Mall Road, and take an evening walk around Naini Lake with optional boating.",
      "Day 2: Nainital Sightseeing — Visit Naina Devi Temple, Snow View Point, Tiffin Top, Cave Garden, and the Tibetan Market.",
      "Day 3: Lake Circuit — Head out for Bhimtal, Sattal, and Naukuchiatal, with scenic viewpoints and leisure time by the lakes.",
      "Day 4: Nearby Hill Excursion — Explore Mukteshwar or Kainchi Dham depending on preference before returning to Nainital.",
      "Day 5: Departure — Enjoy a final morning in the hills and depart after breakfast.",
    ],
    highlights: [
      "Boating on Naini Lake",
      "Snow View and Tiffin Top viewpoints",
      "Naina Devi Temple darshan",
      "Excursion to Bhimtal, Sattal, and Naukuchiatal",
      "Optional visit to Mukteshwar or Kainchi Dham",
    ],
    inclusions: ["transport", "hotel", "meals", "guide", "sightseeing"],
  },
  almora: {
    title: "Almora - Heritage Kumaon & Mountain Calm Itinerary",
    days: [
      "Day 1: Arrival & Almora Bazaar — Arrive in Almora, settle in, and spend the evening exploring the old bazaar, local sweets, and ridge views.",
      "Day 2: Temples & Heritage — Visit Chitai Golu Devta Temple, Kasar Devi, and Bright End Corner. Enjoy sunset over the Kumaon ranges.",
      "Day 3: Binsar Excursion — Travel to Binsar Wildlife Sanctuary, walk to Zero Point, and enjoy the forested landscape and Himalayan views.",
      "Day 4: Jageshwar Circuit — Explore the Jageshwar temple complex and nearby deodar forests before returning to Almora.",
      "Day 5: Departure — Relaxed morning with local shopping and departure.",
    ],
    highlights: [
      "Historic Almora bazaar experience",
      "Visit Kasar Devi and Chitai Temple",
      "Scenic Binsar wildlife and Zero Point",
      "Spiritual outing to Jageshwar temples",
      "Classic Kumaoni food and culture",
    ],
    inclusions: ["transport", "hotel", "meals", "guide", "sightseeing"],
  },
  pithoragarh: {
    title: "Pithoragarh - Eastern Himalaya Gateway Itinerary",
    days: [
      "Day 1: Arrival in Pithoragarh — Reach Pithoragarh, check in, and cover local town viewpoints and evening market exploration.",
      "Day 2: Forts & Temples — Visit Pithoragarh Fort, Kapileshwar Mahadev Temple, and scenic valley points around the district.",
      "Day 3: Dhwaj Temple Excursion — Take a day trip to Dhwaj Temple and enjoy panoramic Himalayan scenery if weather permits.",
      "Day 4: Munsiyari Route Experience — Continue toward Munsiyari-side stretches or enjoy a long scenic drive in the district’s mountain belt.",
      "Day 5: Departure — Morning at leisure and onward departure.",
    ],
    highlights: [
      "Panoramic valley views of eastern Uttarakhand",
      "Visit to Pithoragarh Fort and Kapileshwar Temple",
      "Excursion toward Dhwaj Temple",
      "Mountain drive experience toward higher Kumaon sectors",
      "Ideal base for Adi Kailash side travel planning",
    ],
    inclusions: ["transport", "hotel", "meals", "guide"],
  },
  chamoli: {
    title: "Chamoli - Valleys, Temples & Himalayan Routes Itinerary",
    days: [
      "Day 1: Arrival in Joshimath/Chamoli — Reach the Chamoli region, settle in, and enjoy mountain views with a relaxed evening.",
      "Day 2: Joshimath & Auli — Visit Joshimath temples and continue to Auli for ropeway views, meadow walks, and mountain panoramas.",
      "Day 3: Badrinath Side Excursion — Depending on season, head toward Badrinath and Mana Village or explore nearby sacred routes.",
      "Day 4: Valley Route Highlights — Cover local viewpoints, Vishnuprayag, and scenic confluence points through the Alaknanda valley.",
      "Day 5: Departure — Wind up the trip with a final mountain morning and departure.",
    ],
    highlights: [
      "Auli meadows and cable car experience",
      "Joshimath spiritual and cultural landmarks",
      "Seasonal route to Badrinath and Mana",
      "Views across Alaknanda valley and Vishnuprayag",
      "Excellent Himalayan photo stops",
    ],
    inclusions: ["transport", "hotel", "meals", "guide", "sightseeing"],
  },
  uttarkashi: {
    title: "Uttarkashi - Temples, Rivers & High Mountain Gateways Itinerary",
    days: [
      "Day 1: Arrival in Uttarkashi — Reach Uttarkashi, check in, and visit Kashi Vishwanath Temple and the local market area.",
      "Day 2: Gangotri Route Experience — Drive toward Gangnani and the Gangotri road stretch, with temple and river viewpoints en route.",
      "Day 3: Harsil Valley Excursion — Explore the beautiful Harsil valley, apple orchards, and Bhagirathi riverside landscapes.",
      "Day 4: Adventure & Spiritual Blend — Visit nearby ashrams, riverbanks, and optional short nature walks in the district.",
      "Day 5: Departure — Morning by the river and return journey.",
    ],
    highlights: [
      "Kashi Vishwanath Temple in Uttarkashi",
      "Scenic Gangotri road drive",
      "Beautiful Harsil valley outing",
      "Bhagirathi river landscapes",
      "Blend of spirituality and mountain travel",
    ],
    inclusions: ["transport", "hotel", "meals", "guide"],
  },
  rudraprayag: {
    title: "Rudraprayag - Confluence Trails & Kedar Route Itinerary",
    days: [
      "Day 1: Arrival in Rudraprayag — Reach the district, check in, and spend the evening near the Alaknanda-Mandakini confluence.",
      "Day 2: Confluence & Temples — Visit Rudranath Temple, Koteshwar Mahadev, and nearby spiritual spots.",
      "Day 3: Chopta or Ukhimath Excursion — Travel toward Chopta/Ukhimath for scenic mountain roads and temple visits.",
      "Day 4: Guptkashi Side Exploration — Cover Guptkashi, local shrines, and route highlights linked to the Kedarnath belt.",
      "Day 5: Departure — Relaxed breakfast and onward departure.",
    ],
    highlights: [
      "Rudraprayag confluence views",
      "Koteshwar Mahadev cave temple",
      "Drive toward Chopta and Ukhimath",
      "Guptkashi and Kedar-route landmarks",
      "Strong spiritual ambience throughout the district",
    ],
    inclusions: ["transport", "hotel", "meals", "guide", "sightseeing"],
  },
  "tehri-garhwal": {
    title: "Tehri Garhwal - Lake, Hills & Adventure Itinerary",
    days: [
      "Day 1: Arrival in Tehri — Reach New Tehri, check in, and enjoy evening views over the Tehri Lake reservoir.",
      "Day 2: Tehri Lake Activities — Spend the day around Tehri Lake with optional boating, jet skiing, kayaking, or a relaxed lakeside drive.",
      "Day 3: Surkanda Devi & Dhanaulti — Visit Surkanda Devi Temple and continue toward Dhanaulti for eco parks and scenic hill walks.",
      "Day 4: Village & Nature Experience — Explore local Garhwali villages, mountain viewpoints, and quieter stretches around the district.",
      "Day 5: Departure — Morning at leisure before departure.",
    ],
    highlights: [
      "Panoramic Tehri Lake views",
      "Optional lake adventure activities",
      "Visit to Surkanda Devi Temple",
      "Dhanaulti eco parks and forest air",
      "Beautiful mix of calm and adventure",
    ],
    inclusions: ["transport", "hotel", "meals", "guide", "adventure"],
  },
  "pauri-garhwal": {
    title: "Pauri Garhwal - Quiet Hills & Sacred Escapes Itinerary",
    days: [
      "Day 1: Arrival in Pauri — Reach Pauri, check in, and enjoy sweeping Himalayan views from local viewpoints.",
      "Day 2: Temples & Local Exploration — Visit Kandoliya Temple, Kyunkaleshwar Mahadev, and peaceful town-side viewpoints.",
      "Day 3: Khirsu Excursion — Drive to Khirsu, enjoy orchard landscapes, snow-peak views, and slow-paced hill charm.",
      "Day 4: Village Life & Nature — Spend the day exploring nearby Garhwali villages and forested roads with easy walks.",
      "Day 5: Departure — Conclude the trip after breakfast.",
    ],
    highlights: [
      "Quiet mountain views in Pauri town",
      "Kandoliya and Kyunkaleshwar temples",
      "Scenic day trip to Khirsu",
      "Relaxed Garhwali village atmosphere",
      "Ideal for a peaceful hill retreat",
    ],
    inclusions: ["transport", "hotel", "meals", "guide"],
  },
  champawat: {
    title: "Champawat - Heritage Temples & Kumaon Landscapes Itinerary",
    days: [
      "Day 1: Arrival in Champawat — Reach Champawat, settle in, and explore the local town and market.",
      "Day 2: Temple Heritage Day — Visit Baleshwar Temple, Kranteshwar Mahadev, and traditional heritage points in the district.",
      "Day 3: Nature & Viewpoint Excursion — Head toward Lohaghat and Abbott Mount area for colonial-era charm and scenic ridge views.",
      "Day 4: Purnagiri Side Exploration — Depending on route and pace, cover spiritual and natural attractions connected to the district.",
      "Day 5: Departure — Morning free time and return journey.",
    ],
    highlights: [
      "Historic Baleshwar Temple architecture",
      "Lohaghat and Abbott Mount excursion",
      "Calm Kumaon ridge scenery",
      "Blend of heritage and spirituality",
      "Less-crowded district experience",
    ],
    inclusions: ["transport", "hotel", "meals", "guide"],
  },
  bageshwar: {
    title: "Bageshwar - Confluences, Temples & Kumaon Serenity Itinerary",
    days: [
      "Day 1: Arrival in Bageshwar — Arrive in town, check in, and visit the local market and riverside areas.",
      "Day 2: Temple & Confluence Tour — Explore Bagnath Temple, Bhileshwar, and the Saryu-Gomti confluence surroundings.",
      "Day 3: Baijnath/Kausani Excursion — Take a scenic trip toward Baijnath Temple and Kausani-side viewpoints if preferred.",
      "Day 4: Village & Valley Exploration — Cover nearby villages, tea gardens, and calm mountain roads around the district.",
      "Day 5: Departure — Final morning and departure.",
    ],
    highlights: [
      "Bagnath Temple and sacred confluence",
      "Baijnath excursion option",
      "Views of central Kumaon valleys",
      "Peaceful riverside atmosphere",
      "Good base for deeper Kumaon exploration",
    ],
    inclusions: ["transport", "hotel", "meals", "guide"],
  },
  "udham-singh-nagar": {
    title: "Udham Singh Nagar - Plains, Wildlife & Easy Getaways Itinerary",
    days: [
      "Day 1: Arrival in Rudrapur/Kashipur — Reach the district, settle in, and enjoy a relaxed town evening.",
      "Day 2: Corbett Side Excursion — Visit the Ramnagar/Corbett side belt for safari planning, nature drives, and wildlife ambience.",
      "Day 3: Gurudwara & Cultural Stops — Explore Nanakmatta Sahib or local spiritual/cultural landmarks in the plains region.",
      "Day 4: Leisure & Local Experiences — Cover local markets, food stops, and nearby day-trip options based on interest.",
      "Day 5: Departure — Departure after breakfast.",
    ],
    highlights: [
      "Easy-access plains district itinerary",
      "Corbett-side wildlife route access",
      "Visit to Nanakmatta Sahib",
      "Comfortable family-friendly travel pace",
      "Convenient base before hill transfers",
    ],
    inclusions: ["transport", "hotel", "meals", "guide"],
  },
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
     <div className="mt-20 bg-[#0f172a] rounded-[2rem] p-12 text-center text-white shadow-2xl relative overflow-hidden border border-white/10">
    <div className="relative z-10">
        {/* Using 'text-white' for heading and 'text-slate-300' for subtext for clear hierarchy */}
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Ready to explore <span className="text-orange-400 capitalize">{slug.replace(/-/g, " ")}</span>?
        </h3>
        
        <p className="mb-10 max-w-xl mx-auto text-lg text-slate-300 leading-relaxed">
            Get a customized quote and expert advice from our Uttarakhand specialists for your next spiritual journey.
        </p>

        <button
            onClick={openContact}
            className="inline-flex items-center justify-center bg-[#f97316] hover:bg-[#ea580c] text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:scale-105 active:scale-95 ring-4 ring-orange-500/20"
        >
            Book This Itinerary
        </button>
    </div>

    {/* Enhanced Decoration: Increased opacity for better visibility on dark bg */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
</div> 
      </div>
    </main>
  );
}
