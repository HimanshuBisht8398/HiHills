"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Bars3Icon } from "@heroicons/react/24/outline"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import Drawer from "./Drawer"
import Drawerdata from "./Drawerdata"
import Contactusform from "./Contactus"
import PackageModal from "./PackageModal"
const packagesData = {
  chardham: [
    "Char Dham Yatra 2024",
    "Char Dham Yatra (9N)",
    "Char Dham by Helicopter",
    "Do Dham Yatra (Badrinath–Kedarnath)",
    "Do Dham by Helicopter",
  ],
  tours: [
    "Jim Corbett Safari",
    "Mussoorie Rishikesh Tour",
    "Best Nainital Kausani",
    "Auli Tour Packages",
    "Sri Badrinath Ji Yatra",
    "Sri Kedarnath Ji Yatra",
  ],
  treks: [
    "Valley of Flowers",
    "Gomukh Trek",
    "Dayara Bugyal",
    "Dodital Trek",
    "Kunjapuri Trek",
    "Chopta Trek",
  ],
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [modalOpen, setModalOpen] = React.useState(false)
  const [activeTitle, setActiveTitle] = React.useState("")

  const openModal = (title: string) => {
    setActiveTitle(title)
    setModalOpen(true)
  }

  // scroll to an element id with offset to account for sticky navbar
  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    if (typeof document === 'undefined') return
    const el = document.getElementById(id)
    if (!el) return
    const nav = document.querySelector('nav')
    const navHeight = nav ? (nav as HTMLElement).offsetHeight : 80
    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 12
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex items-center space-x-10">

            {/* Logo with Image + Text */}
            <Link href="/" className="flex items-center space-x-2">
                {/* <Image
                  src="/hihills.icon"
                  alt="HI HILLS Logo"
                  width={45}
                  height={45}
                  className="object-contain"
                /> */}
              <span className="text-3xl font-bold text-black">
                HI HILLS
              </span>
            </Link>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-6 text-black font-bold text-sm">

              <div className="flex items-center space-x-1">
                <PhoneIcon className="h-4 w-4" />
                <a href="tel:+917617610909" className="hover:text-orange-500">
                  +91-7617610909 , +91-87711105877
                </a>
              </div>

              <div className="flex items-center space-x-1">
                <EnvelopeIcon className="h-4 w-4" />
                <a
                  href="mailto:hihillstourandtravels@gmail.com"
                  className="hover:text-orange-500"
                >
                  hihillstourandtravels@gmail.com
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - MENU */}
          <div className="hidden lg:flex items-center space-x-6">

            <a href="#about-us" className="navlinks" onClick={(e) => scrollToId(e, 'about-us')}>
              About Us
            </a>

            <Link href="#services-section" className="navlinks">
              Services
            </Link>

            {/* PACKAGES */}
            <div className="relative group">
              <span className="navlinks cursor-pointer">
                Packages
              </span>

              <div className="
                absolute left-[-300px] top-full mt-4 w-[1000px]
                bg-white shadow-2xl rounded-xl p-8
                grid grid-cols-3 gap-8
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
              ">

                <div>
                  <h4 className="font-semibold mb-3">Chardham</h4>
                  {packagesData.chardham.map(item => (
                    <a
                      key={item}
                      href="#"
                      className="megaItem block"
                      onClick={(e) => {
                        e.preventDefault()
                        openModal(item)
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Tours</h4>
                  {packagesData.tours.map(item => (
                    <a
                      key={item}
                      href="#"
                      className="megaItem block"
                      onClick={(e) => {
                        e.preventDefault()
                        openModal(item)
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Treks</h4>
                  {packagesData.treks.map(item => (
                    <a
                      key={item}
                      href="#"
                      className="megaItem block"
                      onClick={(e) => {
                        e.preventDefault()
                        openModal(item)
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </div>

              </div>
            </div>

            <Link href="#blog-section" className="navlinks">
              Popular
            </Link>

            <Link href="#testimonial-section" className="navlinks">
              Testimonial
            </Link>

            <Contactusform />
          </div>

          {/* MOBILE MENU */}
          <div className="block lg:hidden">
            <Bars3Icon
              className="h-7 w-7 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>

        </div>
      </div>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Drawerdata />
      </Drawer>

      <PackageModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={activeTitle}
        items={[activeTitle]}
      />
    </nav>
  )
}

export default Navbar