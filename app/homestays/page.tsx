"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomestaysComingSoon() {
  const notify = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(
      new CustomEvent("openContactForm", {
        detail: { source: "homestay", message: "Notify me when Homestays go live" },
      })
    );
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-24 px-6">
      <div className="max-w-3xl text-center">
        <div className="mx-auto w-36 h-36 mb-6 opacity-10">
          <Image src="/icon.svg" alt="Hi Hills logo" width={144} height={144} className="object-contain" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Homestays — Coming Soon
        </h1>

        <p className="text-gray-600 mb-8">
          We’re building a curated collection of homestays across Uttarakhand. Soon you'll be able to browse and book handpicked stays in popular destinations.
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={notify}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow"
          >
            Notify Me
          </button>

          <Link href="/" className="px-6 py-3 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100">
            Back to Home
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Want early access for a specific location? Click Notify Me and mention the place in the message.
        </p>
      </div>
    </main>
  );
}