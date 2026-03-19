"use client";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react"; // Added React for createElement if needed
import { Bus, User, Bed, Utensils } from "lucide-react";
import { POPULAR_PACKAGES } from "@/app/packages/package-data";

// Type-safe mapping for Lucide icons
const inclusionIcons: Record<string, any> = {
  meals: Utensils,
  transport: Bus,
  guide: User,
  stay: Bed,
};

export default function MultipleItems() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = "Our Popular Packages.";

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  // Arrow Components
  const NextArrow = ({ onClick }: any) => (
    <button onClick={onClick} className="absolute -right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-gray-200 hover:bg-orange-500 hover:text-white transition-all duration-300">
      <span className="text-xl font-bold">→</span>
    </button>
  );

  const PrevArrow = ({ onClick }: any) => (
    <button onClick={onClick} className="absolute -left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-gray-200 hover:bg-orange-500 hover:text-white transition-all duration-300">
      <span className="text-xl font-bold">←</span>
    </button>
  );

  const settings = {
    dots: false,
    infinite: POPULAR_PACKAGES.length > 3, // Prevent slider bugs if data is small
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    speed: 600,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 relative"> {/* Added relative for arrows */}
        <div className="text-center mb-14">
          <h3 className="text-4xl sm:text-5xl font-bold h-16">{displayText}</h3>
        </div>

        <Slider {...settings}>
          {POPULAR_PACKAGES.map((item, i) => {
            // Error Prevention: Ensure slug exists
            const itemSlug = item.slug || "not-found";

            return (
              <div key={i}>
                <Link 
                  href={`/packages/${itemSlug}`} 
                  className="block cursor-pointer m-3 rounded-3xl overflow-hidden shadow-xl bg-white group"
                >
                  <div className="relative h-[260px] overflow-hidden">
                    <Image
                      src={item.imgSrc || "/fallback.jpg"} // Fallback image
                      alt={item.heading}
                      width={400}
                      height={260}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold">{item.heading}</h4>
                    <p className="text-gray-500 text-sm line-clamp-1">{item.heading2}</p>

                    <div className="flex justify-between mt-4 items-center">
                      <span className="text-green-700 font-bold">{item.price}</span>
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                        View
                      </span>
                    </div>

                    <div className="text-gray-500 text-sm mt-3 flex items-center gap-1">
                      <span>📍</span> {item.route}
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Inclusions:
                      </span>
                      <div className="flex gap-2">
                        {item.inclusions?.map((inc: string, idx: number) => {
                          const Icon = inclusionIcons[inc.toLowerCase()];
                          return Icon ? (
                            <div key={idx} className="p-1.5 bg-gray-100 rounded-lg" title={inc}>
                              <Icon size={14} className="text-gray-600" />
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}