"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
  UserIcon
} from "@heroicons/react/24/solid"
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  const router = useRouter()

  const openContactForm = () => {
    try {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("openContactForm"))
      }
    } catch (error) {
      console.error("Unable to open contact form:", error)
    }
  }

  const navigateToSection = (sectionId: string) => {
    router.push(`/#${sectionId}`)
  }

  return (
    <footer className="relative text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/wework/Aboutus.png"
          alt="Footer Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative bg-black/80">
        <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COLUMN 1 */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-orange-400">
                  Hi Hills
                </h2>
                <p className="text-sm italic text-green-400">
                  a journey to Hills...
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-7">
              &quot;Embark on a soulful Chardham Yatra without the stress of logistics.
              At Hi Hills, we blend deep-rooted experience with modern comfort, ensuring
              your pilgrimage is as peaceful as the shrines themselves. Trust our
              veterans to handle the details while you focus on the divine.&quot;
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-[#1877F2] p-2.5 text-white transition-all hover:scale-110 hover:shadow-lg"
                title="Follow on Facebook"
              >
                {React.createElement(FaFacebookF as any, { size: 20 })}
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-[#E4405F] p-2.5 text-white transition-all hover:scale-110 hover:shadow-lg"
                title="Follow on Instagram"
              >
                {React.createElement(FaInstagram as any, { size: 20 })}
              </Link>


              <Link
                href="https://wa.me/917617610909?text=Hello%20Hi%20Hills%2C%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-[#25D366] p-2.5 text-white transition-all hover:scale-110 hover:shadow-lg"
                title="Chat on WhatsApp"
              >
                {/* The fix: Use createElement with 'as any' */}
                {React.createElement(FaWhatsapp as any, { size: 22 })}
              </Link>
            </div>
          </div>

          {/* COLUMN 2 - Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-orange-400/30 pb-2 w-fit">Links</h3>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="/" className="hover:text-orange-400 transition">Home</Link></li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateToSection("about-us")}
                  className="hover:text-orange-400 transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openContactForm}
                  className="hover:text-orange-400 transition"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateToSection("testimonial-section")}
                  className="hover:text-orange-400 transition"
                >
                  Guest Book
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 - Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-orange-400/30 pb-2 w-fit">Services</h3>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="/cab-services" className="hover:text-orange-400 transition">Transportation</Link></li>
              <li><Link href="/adventure" className="hover:text-orange-400 transition">Adventure Activities</Link></li>
              <li><Link href="/spiritual-places/rishikesh" className="hover:text-orange-400 transition">Yoga & Mind Healing</Link></li>
              <li><Link href="/jeep-safari" className="hover:text-orange-400 transition">Jeep Safari</Link></li>
              <li><Link href="/hotels" className="hover:text-orange-400 transition">Hotel Booking</Link></li>
              <li>
                <button
                  type="button"
                  onClick={openContactForm}
                  className="hover:text-orange-400 transition"
                >
                  Destination Wedding
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 - Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-orange-400/30 pb-2 w-fit">Get In Touch</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 mt-1 text-orange-400 flex-shrink-0" />
                <span>
                  257, SANT KRIPAL NAGAR - SHIVALIK NAGAR, HARIDWAR, UTTARAKHAND
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-orange-400" />
                <a href="mailto:hihillstourandtravels@gmail.com" className="hover:text-white">hihillstourandtravels@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-orange-400" />
                <a href="tel:+917617610909" className="hover:text-white">+91-7617610909</a>
              </li>
               <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-orange-400" />
                <a href="tel:+917617610909" className="hover:text-white">+91-8171105877</a>
              </li>
            </ul>
          </div>
        </div>

        {/* DEVELOPER INFORMATION SECTION */}
        <div className="bg-black/40 border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-orange-400/10 rounded-full">
                <UserIcon className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Designed & Developed By -</p>
                <h4 className="text-lg font-semibold text-white">Himanshu Bisht</h4>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <a href="tel:+917466934041" className="flex items-center space-x-2 hover:text-orange-400 transition">
                <PhoneIcon className="h-4 w-4 text-orange-400" />
                <span>+91-7466934041</span>
              </a>
              <a href="mailto:himanshubisht831998@gmail.com" className="flex items-center space-x-2 hover:text-orange-400 transition">
                <EnvelopeIcon className="h-4 w-4 text-orange-400" />
                <span>himanshubisht831998@gmail.com</span>
              </a>
              <a href="https://portfolio-himanshu.pages.dev/" target="_blank" className="flex items-center space-x-2 hover:text-orange-400 transition">
                <GlobeAltIcon className="h-4 w-4 text-orange-400" />
                <span>Portfolio</span>
              </a>
            </div>
          </div>
        </div>

        {/* FINAL COPYRIGHT */}
        <div className="bg-gray-950 text-center py-4 text-gray-400 text-xs border-t border-gray-900">
          © 2024-2026 Hi Hills Tour and Travels | All rights reserved.{" "}
          <Link href="/terms" className="underline hover:text-white ml-2">
            Terms
          </Link>{" "}
          &{" "}
          <Link href="/privacy" className="underline hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
