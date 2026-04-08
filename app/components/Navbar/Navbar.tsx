"use client"

import React from "react"
import Link from "next/link"
import { Bars3Icon } from "@heroicons/react/24/outline"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import Drawer from "./Drawer"
import Drawerdata from "./Drawerdata"
import Contactusform from "./Contactus"
import { packagesData, type PackageLink } from "./packages-data"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

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

  const renderPackageLinks = (items: PackageLink[]) =>
    items.map((item) => (
      <Link
        key={item.title}
        href={item.href}
        className="group/item flex items-center justify-between rounded-2xl border border-transparent bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
      >
        <span className="pr-4">{item.title}</span>
        <span className="text-base text-slate-300 transition group-hover/item:translate-x-1 group-hover/item:text-orange-500">
          →
        </span>
      </Link>
    ))

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
                  +91-7617610909 , +91-8171105877
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
  <span className="navlinks inline-flex cursor-pointer items-center gap-2 py-4">
    Packages
    <span className="text-xs text-slate-400 transition-transform duration-300 group-hover:rotate-180">
      ▾
    </span>
  </span>

  {/* Mega Menu Container */}
  <div className="
    absolute left-1/2 top-full z-50 w-[1000px] -translate-x-1/2
    pointer-events-none invisible opacity-0 translate-y-2
    transition-all duration-300 ease-out
    group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
    pt-2 /* This bridge removes the 'height' gap issue */
  ">
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_40px_100px_-20px_rgba(15,23,42,0.25)]">
      
      {/* Sleek Header Section */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-10 py-7">
        <div className="max-w-xl">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">
              Curated Uttarakhand Journeys
            </p>
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Find your next escape by vibe or destination.
          </h3>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-3xl font-bold text-slate-900">
            {packagesData.reduce((count, section) => count + section.items.length, 0)}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
            Total Experiences
          </span>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-3 gap-6 p-6">
        {packagesData.map((section) => (
          <div
            key={section.title}
            className={`group/section flex flex-col rounded-[24px] border border-slate-100 p-6 transition-colors duration-300 hover:border-slate-200 hover:bg-slate-50/30 ${section.accent}`}
          >
            <div className="mb-6">
              <div className="mb-3 flex items-center justify-between">
                <h4 className="font-bold tracking-tight text-slate-900 text-lg">
                  {section.title}
                </h4>
                <span className="rounded-lg bg-white px-2 py-1 text-[10px] font-bold text-slate-500 shadow-sm ring-1 ring-slate-200">
                  {section.items.length} TOURS
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                {section.description}
              </p>
            </div>

            <div className="space-y-1.5">
              {renderPackageLinks(section.items)}
            </div>
            
            {/* Subtle bottom arrow that appears on section hover */}
            <div className="mt-auto pt-4 opacity-0 transition-opacity group-hover/section:opacity-100">
              <span className="text-[11px] font-bold text-orange-600 underline underline-offset-4">
                View All {section.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

            <Link href="/#blog-section" className="navlinks">
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
    </nav>
  )
}

export default Navbar
