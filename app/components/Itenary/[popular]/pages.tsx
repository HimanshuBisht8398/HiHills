"use client";

import { useParams } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

type Itinerary = {
  title: string;
  days: string[];
  highlights?: string[];
  inclusions?: string[];
};

const ITINERARIES: Record<string, Itinerary> = {
  kedarnath: {
    title: "Kedarnath Dham Yatra",
    days: ["Arrival", "Trek", "Darshan", "Return"],
    highlights: ["Temple", "Himalayas"],
    inclusions: ["transport", "hotel"],
  },

  badrinath: {
    title: "Badrinath Dham Yatra",
    days: ["Travel", "Darshan", "Explore"],
  },

  "kedarnath-badrinath": {
    title: "Do Dham Yatra",
    days: ["Haridwar", "Kedarnath", "Badrinath"],
  },

  gangotri: {
    title: "Gangotri Yatra",
    days: ["Travel", "Temple Visit"],
  },

  yamunotri: {
    title: "Yamunotri Yatra",
    days: ["Travel", "Temple Visit"],
  },
};

export default function ItineraryPage() {
  const params = useParams();
  const slug = (params?.district as string)?.toLowerCase();
  const data = ITINERARIES[slug];
    console.log("Params:", params, "Slug:", slug, "Data:", data);
  if (!data) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Package Coming Soon</h1>
        <button
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <div className="h-[300px] bg-blue-900 flex items-center justify-center text-white text-3xl font-bold">
        {data.title}
      </div>

      <div className="max-w-5xl mx-auto py-12 px-6">

        {/* Highlights */}
        {data.highlights && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Highlights</h2>
            <ul className="list-disc ml-6">
              {data.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Days */}
        <h2 className="text-2xl font-bold mb-6">Day-wise Plan</h2>

        {data.days.map((day, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <div className="mb-3 border rounded-lg">
                <Disclosure.Button className="flex justify-between w-full px-4 py-3 font-semibold">
                  Day {idx + 1}
                  <ChevronUpIcon className={`w-5 ${open ? "rotate-180" : ""}`} />
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 pb-4 text-gray-600">
                  {day}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </main>
  );
}