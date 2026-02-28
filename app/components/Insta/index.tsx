"use client"

import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { useRef } from "react"

const Insta = () => {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  const images = [
    "/images/insta/insta1.png",
    "/images/insta/insta2.png",
    "/images/insta/insta3.png",
    "/images/insta/insta4.png",
  ]

  return (
    <div className="relative mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8">

      {/* ===== Heading Section ===== */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
          Some Memories with Happy Customers
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-0 top-[60%] -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-orange-500 hover:text-white transition"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-0 top-[60%] -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-orange-500 hover:text-white transition"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-3">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src={img}
                width={306}
                height={306}
                alt={`insta-${index}`}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Insta