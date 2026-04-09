"use client";

import React from "react";
import Image from "next/image";

type Homestay = {
  slug: string;
  name: string;
  location: string;
  pricePerNight: string;
  img: string;
};

const HOMESTAYS: Homestay[] = [
  { slug: "mussoorie-mountain-haven", name: "Mountain Haven Homestay", location: "Mussoorie", pricePerNight: "₹2,000", img: "/images/homestays/mussoorie1.jpg" },
  { slug: "mussoorie-valley-view", name: "Valley View Homestay", location: "Mussoorie", pricePerNight: "₹1,800", img: "/images/homestays/mussoorie2.jpg" },
  { slug: "dehradun-riverside-retreat", name: "Riverside Retreat", location: "Dehradun", pricePerNight: "₹1,200", img: "/images/homestays/dehradun1.jpg" },
  { slug: "dehradun-garden-homes", name: "Garden Homes", location: "Dehradun", pricePerNight: "₹1,500", img: "/images/homestays/dehradun2.jpg" },
  { slug: "rishikesh-ganga-haven", name: "Ganga Haven Homestay", location: "Rishikesh", pricePerNight: "₹1,400", img: "/images/homestays/rishikesh1.jpg" },
  { slug: "rishikesh-yoga-retreat", name: "Rishikesh Yoga Retreat", location: "Rishikesh", pricePerNight: "₹1,600", img: "/images/homestays/rishikesh2.jpg" },
  { slug: "nainital-lakeview-cottage", name: "Lakeview Cottage", location: "Nainital", pricePerNight: "₹2,200", img: "/images/homestays/nainital1.jpg" },
  { slug: "nainital-hilltop-haven", name: "Hilltop Haven", location: "Nainital", pricePerNight: "₹2,400", img: "/images/homestays/nainital2.jpg" },
  { slug: "almora-sunrise-homestay", name: "Sunrise Homestay", location: "Almora", pricePerNight: "₹1,700", img: "/images/homestays/almora1.jpg" },
  { slug: "almora-traditional-home", name: "Traditional Home Stay", location: "Almora", pricePerNight: "₹1,500", img: "/images/homestays/almora2.jpg" },
  { slug: "kausani-peaceful-retreat", name: "Peaceful Retreat", location: "Kausani", pricePerNight: "₹1,900", img: "/images/homestays/kausani1.jpg" },
  { slug: "ranikhet-heritage-hut", name: "Heritage Hut", location: "Ranikhet", pricePerNight: "₹1,800", img: "/images/homestays/ranikhet1.jpg" },
  { slug: "mukteshwar-orchard-homestay", name: "Orchard Homestay", location: "Mukteshwar", pricePerNight: "₹2,100", img: "/images/homestays/mukteshwar1.jpg" },
  { slug: "binsar-forest-lodge", name: "Forest Lodge", location: "Binsar", pricePerNight: "₹1,900", img: "/images/homestays/binsar1.jpg" },
  { slug: "bageshwar-valley-homestay", name: "Valley Homestay", location: "Bageshwar", pricePerNight: "₹1,400", img: "/images/homestays/bageshwar1.jpg" },
  { slug: "pithoragarh-hillside-home", name: "Hillside Home", location: "Pithoragarh", pricePerNight: "₹1,600", img: "/images/homestays/pithoragarh1.jpg" },
  { slug: "munsiyari-alpine-cottage", name: "Alpine Cottage", location: "Munsiyari", pricePerNight: "₹2,300", img: "/images/homestays/munsiyari1.jpg" },
  { slug: "uttarkashi-riverfront-hut", name: "Riverfront Hut", location: "Uttarkashi", pricePerNight: "₹1,600", img: "/images/homestays/uttarkashi1.jpg" },
  { slug: "joshimath-himalayan-homestay", name: "Himalayan Homestay", location: "Joshimath", pricePerNight: "₹2,000", img: "/images/homestays/joshimath1.jpg" },
  { slug: "auli-snow-view-cottage", name: "Snow View Cottage", location: "Auli", pricePerNight: "₹2,800", img: "/images/homestays/auli1.jpg" },
  { slug: "chopta-alpine-retreat", name: "Alpine Retreat", location: "Chopta", pricePerNight: "₹1,700", img: "/images/homestays/chopta1.jpg" },
  { slug: "corbett-river-breeze", name: "River Breeze Homestay", location: "Jim Corbett", pricePerNight: "₹2,200", img: "/images/homestays/corbett1.jpg" },
  { slug: "ramnagar-wildlife-hut", name: "Wildlife Hut", location: "Ramnagar", pricePerNight: "₹1,900", img: "/images/homestays/ramnagar1.jpg" },
  { slug: "tehri-lakeview-house", name: "Lakeview House", location: "Tehri", pricePerNight: "₹1,500", img: "/images/homestays/tehri1.jpg" },
  { slug: "pauri-garhwal-hillhome", name: "Hillhome", location: "Pauri Garhwal", pricePerNight: "₹1,400", img: "/images/homestays/pauri1.jpg" },
  { slug: "rudraprayag-riveredge", name: "Riveredge Homestay", location: "Rudraprayag", pricePerNight: "₹1,300", img: "/images/homestays/rudraprayag1.jpg" },
  { slug: "uttarakashi-heritage-cottage", name: "Heritage Cottage", location: "Uttarkashi Town", pricePerNight: "₹1,500", img: "/images/homestays/uttarkashi2.jpg" },
  { slug: "pauri-village-stay", name: "Village Stay", location: "Pauri", pricePerNight: "₹1,200", img: "/images/homestays/pauri2.jpg" },
  { slug: "nainital-bayview-homestay", name: "Bayview Homestay", location: "Bhimtal", pricePerNight: "₹1,700", img: "/images/homestays/bhimtal1.jpg" },
  { slug: "sattal-lake-cottage", name: "Lake Cottage", location: "Sattal", pricePerNight: "₹1,600", img: "/images/homestays/sattal1.jpg" },
  { slug: "lanSDowne-quiet-retreat", name: "Quiet Retreat", location: "Lansdowne", pricePerNight: "₹1,500", img: "/images/homestays/lansdowne1.jpg" },
  { slug: "champawat-traditional-hut", name: "Traditional Hut", location: "Champawat", pricePerNight: "₹1,300", img: "/images/homestays/champawat1.jpg" },
];

export default function HomestaysPage() {
  const openContactWith = (name: string) => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent("openContactForm", { detail: { source: "homestay", name } }));
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Homestays across Uttarakhand</h1>
      <p className="text-gray-600 mb-8">Explore popular homestays in tourist destinations across Uttarakhand. Click Book Now to enquire — the contact form will be prefilled with the homestay name.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {HOMESTAYS.map((h) => (
          <div key={h.slug} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative h-48 bg-gray-100 flex items-center justify-center">
              {/* fallback: if image missing, this prevents crop issues */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={h.img} alt={h.name} className="max-h-full max-w-full object-contain" />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold">{h.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{h.location}</p>
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold">{h.pricePerNight} / night</div>
                <button
                  onClick={() => openContactWith(h.name)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}