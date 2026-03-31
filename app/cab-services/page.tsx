"use client";

import { useMemo, useState } from "react";
import { CarFront, CalendarDays, MapPin, Mountain, Route, Users, Phone } from "lucide-react";
import { getApiUrl } from "@/app/lib/api";

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
  name: string;
  email: string;
  vehicle: string;
  pickup: string;
  destination: string;
  persons: string;
  fromDate: string;
  toDate: string;
  mobile: string;
  flightNumber: string;
  notes: string;
};

type BookingFormErrors = Partial<Record<keyof BookingForm, string>>;

const CAB_CATEGORIES: CabCategory[] = [
  {
    slug: "hatchback",
    name: "Hatchback",
    type: "Budget city cab",
    passengers: "3-4 Persons",
    hourlyCharge: "₹150/hr",
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
  name: "",
  email: "",
  vehicle: "",
  pickup: "",
  destination: "",
  persons: "",
  fromDate: "",
  toDate: "",
  mobile: "",
  flightNumber: "",
  notes: "",
};

const REQUIRED_FIELDS: Array<keyof BookingForm> = [
  "name",
  "email",
  "vehicle",
  "pickup",
  "destination",
  "persons",
  "fromDate",
  "toDate",
  "mobile",
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^\d{10}$/;

const validateForm = (form: BookingForm): BookingFormErrors => {
  const errors: BookingFormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.vehicle.trim()) {
    errors.vehicle = "Vehicle type is required.";
  }

  if (!form.pickup.trim()) {
    errors.pickup = "Pickup location is required.";
  }

  if (!form.destination.trim()) {
    errors.destination = "Destination is required.";
  }

  if (!form.mobile.trim()) {
    errors.mobile = "Mobile number is required.";
  } else if (!mobileRegex.test(form.mobile.trim())) {
    errors.mobile = "Enter a valid 10-digit mobile number.";
  }

  if (!form.persons.trim()) {
    errors.persons = "Number of persons is required.";
  } else {
    const persons = Number(form.persons);
    if (!Number.isInteger(persons) || persons < 1) {
      errors.persons = "Enter a valid number of persons.";
    } else if (persons > 26) {
      errors.persons = "Number of persons cannot exceed 26.";
    }
  }

  if (!form.fromDate) {
    errors.fromDate = "From date is required.";
  }

  if (!form.toDate) {
    errors.toDate = "To date is required.";
  } else if (form.fromDate && form.toDate < form.fromDate) {
    errors.toDate = "To date cannot be earlier than from date.";
  }

  return errors;
};

const getFieldClasses = (hasError: boolean, extraClasses = "") =>
  `w-full rounded-xl border px-4 py-3 text-slate-700 outline-none transition ${
    hasError
      ? "border-red-400 bg-red-50 focus:border-red-500"
      : "border-slate-300 focus:border-orange-400"
  } ${extraClasses}`.trim();

export default function CabServicesPage() {
  const [selectedCab, setSelectedCab] = useState<CabCategory | null>(null);
  const [form, setForm] = useState<BookingForm>(emptyForm);
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const openBooking = (cab: CabCategory) => {
    setSelectedCab(cab);
    setSubmitted(false);
    setSubmitError("");
    setErrors({});
    setForm({
      ...emptyForm,
      vehicle: cab.name,
    });
  };

  const closeBooking = () => {
    setSelectedCab(null);
    setSubmitted(false);
    setSubmitError("");
    setErrors({});
    setIsSubmitting(false);
    setForm(emptyForm);
  };

  const handleChange = (field: keyof BookingForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => {
      if (!prev[field]) return prev;

      const nextErrors = { ...prev };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setErrors({});

    try {
      const response = await fetch(getApiUrl("/customers"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          mobileNumber: form.mobile,
          vehicleType: form.vehicle,
          pickup: form.pickup,
          destination: form.destination,
          dateofjourney: new Date(form.fromDate).toISOString(),
          fromDate: form.fromDate,
          toDate: form.toDate,
          numberOfPersons: Number(form.persons),
          metadata: {
            bookingType: "cab-service",
            flightNumber: form.flightNumber.trim(),
            notes: form.notes.trim(),
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit cab booking");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Cab booking submission failed:", error);
      setSubmitError("Unable to send your booking right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled = REQUIRED_FIELDS.some((field) => form[field].trim() === "");

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
                {/* <div className="flex items-center gap-2">
                  <Route size={16} className="text-orange-500" />
                  <span>{cab.hourlyCharge}</span>
                </div> */}
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
                  <label className="mb-2 block text-sm font-medium text-slate-900">Your Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Enter your name"
                    className={getFieldClasses(Boolean(errors.name))}
                  />
                  {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Enter your email"
                    className={getFieldClasses(Boolean(errors.email))}
                  />
                  {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">Vehicle Type</label>
                  <input
                    value={form.vehicle}
                    readOnly
                    className={getFieldClasses(Boolean(errors.vehicle), "bg-slate-50")}
                  />
                  {errors.vehicle ? <p className="mt-2 text-sm text-red-600">{errors.vehicle}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">Number of Persons</label>
                  <input
                    type="number"
                    min="1"
                    value={form.persons}
                    onChange={(e) => handleChange("persons", e.target.value)}
                    placeholder="Enter number of persons"
                    className={getFieldClasses(Boolean(errors.persons))}
                  />
                  {errors.persons ? <p className="mt-2 text-sm text-red-600">{errors.persons}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">Pickup</label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={form.pickup}
                      onChange={(e) => handleChange("pickup", e.target.value)}
                      placeholder="Enter pickup location"
                      className={getFieldClasses(Boolean(errors.pickup), "px-11")}
                    />
                  </div>
                  {errors.pickup ? <p className="mt-2 text-sm text-red-600">{errors.pickup}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">Destination</label>
                  <div className="relative">
                    <Route size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={form.destination}
                      onChange={(e) => handleChange("destination", e.target.value)}
                      placeholder="Enter destination"
                      className={getFieldClasses(Boolean(errors.destination), "px-11")}
                    />
                  </div>
                  {errors.destination ? <p className="mt-2 text-sm text-red-600">{errors.destination}</p> : null}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">Mobile Number</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={form.mobile}
                      onChange={(e) => handleChange("mobile", e.target.value)}
                      placeholder="Enter mobile number"
                      className={getFieldClasses(Boolean(errors.mobile), "px-11")}
                    />
                  </div>
                  {errors.mobile ? <p className="mt-2 text-sm text-red-600">{errors.mobile}</p> : null}
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
                      className={getFieldClasses(Boolean(errors.fromDate), "px-11")}
                    />
                  </div>
                  {errors.fromDate ? <p className="mt-2 text-sm text-red-600">{errors.fromDate}</p> : null}
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
                      className={getFieldClasses(Boolean(errors.toDate), "px-11")}
                    />
                  </div>
                  {errors.toDate ? <p className="mt-2 text-sm text-red-600">{errors.toDate}</p> : null}
                </div>

                {submitError ? (
                  <p className="md:col-span-2 text-sm text-red-600">{submitError}</p>
                ) : null}

                <div className="md:col-span-2 flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={closeBooking}
                    className="flex-1 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100 hover:border-red-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isDisabled || isSubmitting}
                    className="flex-1 rounded-xl border border-[#1A2B49] px-4 py-3 text-sm font-semibold text-[#1A2B49] transition hover:bg-[#1A2B49] hover:text-white"
                  >
                    {isSubmitting ? "Sending..." : "Send Request"}
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
