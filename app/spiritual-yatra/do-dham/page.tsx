import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

import { DO_DHAM_COMBOS } from "./do-dham-data";

export const metadata = {
  title: "Do Dham Yatra Combinations - HI HILLS",
  description: "Choose from all Do Dham combinations of Kedarnath, Badrinath, Gangotri, and Yamunotri.",
};

export default function DoDhamSelectionPage() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#1A2B49] transition hover:text-orange-600"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-600">
            Do Dham Options
          </span>
          <h1 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Choose Your Do Dham 
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Explore all combinations of Kedarnath, Badrinath, Gangotri, and Yamunotri.
            Select one package to open its full itinerary page with day-wise plan, inclusions, and exclusions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DO_DHAM_COMBOS.map((combo) => (
            <Link
              key={combo.slug}
              href={`/spiritual-yatra/do-dham/${combo.slug}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={combo.imgSrc}
                  alt={combo.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900">{combo.name}</h2>
                <p className="mt-2 text-sm text-slate-500">{combo.subtitle}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-600">{combo.price}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {combo.duration}
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-orange-500" />
                    <span>{combo.route}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-orange-500" />
                    <span>{combo.bestTime}</span>
                  </div>
                </div>

                <div className="mt-6 inline-flex rounded-full border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-600 transition group-hover:bg-orange-50">
                  View Itinerary
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
