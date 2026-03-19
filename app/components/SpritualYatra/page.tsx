"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUtensils, FaBed, FaUserTie, FaBus } from "react-icons/fa";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { SPIRITUAL_YATRA_PACKAGES } from "@/app/spiritual-yatra/yatra-data";

const SpiritualYatra = () => {
    const [index, setIndex] = useState<number>(0);
    const [slidesToShow, setSlidesToShow] = useState<number>(3);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const intervalRef = useRef<number | null>(null);

    // update slidesToShow based on window width
    useEffect(() => {
        const update = () => {
            if (typeof window === 'undefined') return;
            const w = window.innerWidth;
            if (w >= 1024) setSlidesToShow(3);
            else if (w >= 640) setSlidesToShow(2);
            else setSlidesToShow(1);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    // auto-advance
    useEffect(() => {
        const maxIndex = Math.max(0, SPIRITUAL_YATRA_PACKAGES.length - slidesToShow);
        if (index > maxIndex) setIndex(0);
    }, [slidesToShow]);

    useEffect(() => {
        if (isPaused) return;
        // use window.setInterval so that TS knows the return type is number
        intervalRef.current = window.setInterval(() => {
            setIndex((prev) => {
                const maxIndex = Math.max(0, SPIRITUAL_YATRA_PACKAGES.length - slidesToShow);
                return prev >= maxIndex ? 0 : prev + 1;
            });
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [slidesToShow, isPaused]);

    return (
        <div id="services-section">
            {/* <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'> */}
            <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
            <h4 className='text-center text-4xl lg:text-65xl font-bold'>Spiritual Yatra's .</h4>

            {/* Carousel wrapper */}
            <div
                className="relative overflow-hidden my-16"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    className="flex transition-transform duration-700"
                    style={{
                        transform: `translateX(-${(index * 100) / slidesToShow}%)`,
                    }}
                >
                    {SPIRITUAL_YATRA_PACKAGES.map((item, i) => (
               <div
  key={i}
  className="flex-shrink-0 px-4"
  style={{ width: `${100 / slidesToShow}%` }}
>
  <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">

    {/* IMAGE */}
    <div className="relative h-[340px] w-full">
      <Image
        src={item.imgSrc || "/images/fallback.jpg"}
        alt={item.heading}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* 🔥 TAG BADGE */}
      {item.tag && (
        <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow">
          {item.tag}
        </div>
      )}

      {/* 💰 PRICE BADGE */}
      <div className="absolute top-4 right-4 bg-white text-black text-xs px-3 py-1 rounded-full font-bold shadow">
        {item.price}
      </div>
    </div>

    {/* CONTENT */}
    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">

      {/* TITLE */}
      <h3 className="text-2xl font-bold mb-1 leading-tight">
        {item.heading}
      </h3>

      {/* BEST TIME */}
      <p className="text-xs text-green-300 font-semibold mb-2">
        🌿 Best Time: {item.bestTime}
      </p>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-200 line-clamp-2 mb-3">
        {item.paragraph}
      </p>

      {/* INCLUSIONS */}
    <div className="flex items-center gap-4 text-sm mb-4">
  {item.inclusions.includes("meals") && (
    <span title="Meals">{React.createElement(FaUtensils as any)}</span>
  )}

  {item.inclusions.includes("stay") && (
    <span title="Stay">{React.createElement(FaBed as any)}</span>
  )}

  {item.inclusions.includes("guide") && (
    <span title="Guide">{React.createElement(FaUserTie as any)}</span>
  )}

  {item.inclusions.includes("transport") && (
    <span title="Transport">{React.createElement(FaBus as any)}</span>
  )}
</div>

      {/* CTA */}
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide opacity-80">
          Explore
        </span>

        <Link
          href={
            item.slug === "uttarakhand-do-dham-yatra"
              ? "/spiritual-yatra/do-dham"
              : `/spiritual-yatra/${item.slug}`
          }
          className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold hover:bg-orange-500 transition"
        >
          View
          <ChevronRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </div>
</div>
                    ))}
                </div>

                {/* simple indicators */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 flex gap-2">
                    {Array.from({ length: Math.max(1, SPIRITUAL_YATRA_PACKAGES.length - slidesToShow + 1) }).map((_, ii) => (
                        <button
                            key={ii}
                            onClick={() => setIndex(ii)}
                            // className={`w-3 h-3 rounded-full ${ii === index ? 'bg-blue' : 'bg-gray-300'}`}
                            aria-label={`Go to slide ${ii + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
        // </div>
    )
}

export default SpiritualYatra;
