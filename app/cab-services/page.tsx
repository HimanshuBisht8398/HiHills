"use client";

import { useMemo, useState } from "react";
import { CarFront, CalendarDays, MapPin, Mountain, Route, Users, Phone } from "lucide-react";

type CabCategory = {
  slug: string;
  name: string;
  type: string;
  passengers: string;
  hourlyCharge: string;
  area: "Hilly Areas" | "Plain Areas" | "Both";
  description: string;
};

type BookingForm = {
  vehicle: string;
  pickup: string;
  destination: string;
  persons: string;
  fromDate: string;
  toDate: string;
  mobile: string;
};

const CAB_CATEGORIES: CabCategory[] = [
  {
    slug: "hatchback",
    name: "Hatchback",
    type: "Budget city cab",
    passengers: "3-4 Persons",
    hourlyCharge: "₹350/hr",
    area: "Plain Areas",
    description: "Best for local sightseeing, station pickups, and short plain-road trips.",
  },
  {
    slug: "sedan",
    name: "Sedan",
    type: "Comfort car",
    passengers: "4 Persons",
    hourlyCharge: "₹450/hr",
    area: "Plain Areas",
    description: "Ideal for smooth highway travel, airport transfers, and comfortable family movement.",
  },
  {
    slug: "xuv",
    name: "XUV",
    type: "Premium utility vehicle",
    passengers: "5-6 Persons",
    hourlyCharge: "₹650/hr",
    area: "Both",
    description: "A strong choice for long road journeys with extra comfort, luggage space, and hill-road support.",
  },
  {
    slug: "suv",
    name: "SUV",
    type: "Mountain-ready family vehicle",
    passengers: "6-7 Persons",
    hourlyCharge: "₹700/hr",
    area: "Hilly Areas",
    description: "Recommended for steep climbs, rougher roads, and family travel across Uttarakhand hills.",
  },
  {
    slug: "innova-crysta",
    name: "Innova Crysta",
    type: "Premium tour vehicle",
    passengers: "6-7 Persons",
    hourlyCharge: "₹750/hr",
    area: "Both",
    description: "Perfect for premium outstation trips, Do Dham routes, and longer tours with luggage.",
  },
  {
    slug: "tempo-traveller",
    name: "Tempo Traveller",
    type: "Group travel vehicle",
    passengers: "12-17 Persons",
    hourlyCharge: "₹1,200/hr",
    area: "Both",
    description: "Best for group tours, pilgrimage departures, and coordinated mountain or plain-area travel.",
  },
  {
    slug: "urbania",
    name: "Force Urbania",
    type: "Large premium shuttle",
    passengers: "10-14 Persons",
    hourlyCharge: "₹1,400/hr",
    area: "Both",
    description: "A premium large-format option for curated groups who want more comfort and cleaner interiors.",
  },
  {
    slug: "mini-bus",
    name: "Mini Bus",
    type: "Large group transport",
    passengers: "18-26 Persons",
    hourlyCharge: "₹1,800/hr",
    area: "Plain Areas",
    description: "Suitable for school groups, corporate movement, and larger plain-road transfers.",
  },
];

const emptyForm: BookingForm = {
  vehicle: "",
  pickup: "",
  destination: "",
  persons: "",
  fromDate: "",
  toDate: "",
  mobile: "",
};

export default function CabServicesPage() {
  const [selectedCab, setSelectedCab] = useState<CabCategory | null>(null);
  const [form, setForm] = useState<BookingForm>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const openBooking = (cab: CabCategory) => {
    setSelectedCab(cab);
    setSubmitted(false);
    setForm({
      ...emptyForm,
      vehicle: cab.name,
    });
  };

  const closeBooking = () => {
    setSelectedCab(null);
    setSubmitted(false);
    setForm(emptyForm);
  };

  const handleChange = (field: keyof BookingForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasEmpty = Object.values(form).some((value) => value.trim() === "");
    if (hasEmpty) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef4ff_100%)] py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-600">
            Cab Services
          </span>
          <h1 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Choose The Right Vehicle For Every Route
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Explore our car categories for hilly areas, plain areas, family trips, and group movement.
            Each card shows the vehicle type, suitability, and per-hour charge.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {CAB_CATEGORIES.map((cab) => (
            <div
              key={cab.slug}
              className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-[#1A2B49] p-4 text-white">
                  <CarFront size={28} />
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${cab.area === "Hilly Areas"
                    ? "bg-emerald-100 text-emerald-700"
                    : cab.area === "Plain Areas"
                      ? "bg-sky-100 text-sky-700"
                      : "bg-amber-100 text-amber-700"
                    }`}
                >
                  {cab.area}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">{cab.name}</h2>
              <p className="mt-1 text-sm font-medium text-slate-500">{cab.type}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{cab.description}</p>

              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-orange-500" />
                  <span>{cab.passengers}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mountain size={16} className="text-orange-500" />
                  <span>Best for: {cab.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Route size={16} className="text-orange-500" />
                  <span>{cab.hourlyCharge}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => openBooking(cab)}
                className="mt-6 w-full rounded-xl bg-[#1A2B49] px-4 py-3 text-sm font-bold text-white transition hover:bg-black"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedCab && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
          <div className="w-full max-w-2xl rounded-[28px] bg-white p-6 shadow-2xl md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">
                  Cab Booking
                </p>
                <h3 className="mt-2 text-3xl font-black text-slate-900">
                  {selectedCab.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Fill the details below and our team will reach out with availability and pricing.
                </p>
              </div>
              <button
                type="button"
                onClick={closeBooking}
                className="rounded-full bg-slate-100 px-3 py-1 text-lg font-bold text-slate-600 transition hover:bg-slate-200"
              >
                ×
              </button>
            </div>

            {submitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CarFront size={28} />
                </div>
                <h4 className="mt-4 text-2xl font-bold text-slate-900">Booking request sent</h4>
                <p className="mt-2 text-slate-600">
                  We received your cab request for {form.vehicle}. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">Vehicle Type</label>
                  <input
                    value={form.vehicle}
                    readOnly
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">Number of Persons</label>
                  <input
                    type="number"
                    min="1"
                    value={form.persons}
                    onChange={(e) => handleChange("persons", e.target.value)}
                    placeholder="Enter number of persons"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 outline-none focus:border-orange-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">Pickup</label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={form.pickup}
                      onChange={(e) => handleChange("pickup", e.target.value)}
                      placeholder="Enter pickup location"
                      className="w-full rounded-xl border border-slate-300 px-11 py-3 text-slate-700 outline-none focus:border-orange-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">Destination</label>
                  <div className="relative">
                    <Route size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={form.destination}
                      onChange={(e) => handleChange("destination", e.target.value)}
                      placeholder="Enter destination"
                      className="w-full rounded-xl border border-slate-300 px-11 py-3 text-slate-700 outline-none focus:border-orange-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">Mobile Number</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={form.mobile}
                      onChange={(e) => handleChange("mobile", e.target.value)}
                      placeholder="Enter mobile number"
                      className="w-full rounded-xl border border-slate-300 px-11 py-3 text-slate-700 outline-none focus:border-orange-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">From Date</label>
                  <div className="relative">
                    <CalendarDays size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="date"
                      min={today}
                      value={form.fromDate}
                      onChange={(e) => handleChange("fromDate", e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-11 py-3 text-slate-700 outline-none focus:border-orange-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">To Date</label>
                  <div className="relative">
                    <CalendarDays size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="date"
                      min={form.fromDate || today}
                      value={form.toDate}
                      onChange={(e) => handleChange("toDate", e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-11 py-3 text-slate-700 outline-none focus:border-orange-400"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={closeBooking}
                    className="flex-1 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100 hover:border-red-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={closeBooking}
                    className="flex-1 rounded-xl border border-[#1A2B49] px-4 py-3 text-sm font-semibold text-[#1A2B49] transition hover:bg-[#1A2B49] hover:text-white"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
