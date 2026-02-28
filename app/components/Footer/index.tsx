"use client"

import Image from "next/image"
import Link from "next/link"
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid"

const Footer = () => {
  return (
    <footer className="relative text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/footer-bg.jpg" 
          alt="Footer Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative bg-black/80">
        <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              {/* <Image
                src="/images/logo.png"
                alt="Hi Hills Logo"
                width={60}
                height={60}
              /> */}
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
              "Embark on a soulful Chardham Yatra without the stress of logistics. At Hi Hills, we blend deep-rooted experience with modern comfort, ensuring your pilgrimage is as peaceful as the shrines themselves. Trust our veterans to handle the details while you focus on the divine."
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <Link href="https://facebook.com">
                <Image src="/images/footer/vec.svg" alt="facebook" width={20} height={20} />
              </Link>
              <Link href="https://instagram.com">
                <Image src="/images/footer/instagram.svg" alt="instagram" width={20} height={20} />
              </Link>
            </div>
          </div>

          {/* COLUMN 2 - Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#aboutus-section">About Us</Link></li>
              <li><Link href="#contact">Contact Us</Link></li>
              <li><Link href="#guestbook">Guest Book</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 - Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-300">
              <li>Transportation</li>
              <li>Adventure Activities</li>
              <li>Yoga & Mind Healing</li>
              <li>Jeep Safari</li>
              <li>Hotel Booking</li>
              <li>Destination Wedding</li>
            </ul>
          </div>

          {/* COLUMN 4 - Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">

              <li className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 mt-1 text-orange-400" />
                <span>
                  Haridwar Office <br />
                  Uttarakhand, India
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-orange-400" />
                <span>hihillstourandtravels@gmail.com</span>
              </li>

              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-orange-400" />
                <span>+91-7617610909</span>
              </li>

              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-orange-400" />
                <span>+91-87711105877   </span>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Orange Bar */}
      <div className="bg-orange-500 text-center py-4 text-white text-sm">
        ©2024 Hi Hills. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer