"use client";

import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import { FaUtensils, FaBed, FaUserTie, FaBus } from "react-icons/fa";
import { Trek, getTrekBySlug } from "@/app/treks/trek-data";

// ✅ SAFE SLUG LIST
const slugs = [
  "kedarkantha",
  "nag-tibba",
  "khaliya-top",
  "kuari-pass",
  "tungnath",
  "brahmatal",
  "gulabi-kantha",
  "pangarchulla",
  "triund",
];

// ✅ SAFE DATA BUILD
const postData: Trek[] = slugs
  .map((slug) => getTrekBySlug(slug))
  .filter((t): t is Trek => {
    if (!t) {
      console.warn("❌ Invalid slug:", slugs);
      return false;
    }
    return true;
  });

type StateType = {
  animatedWords: string[];
};

export default class Wintertrek extends Component<{}, StateType> {
  state: StateType = {
    animatedWords: [],
  };

  text = "Most Recommended Winter Trek.";
  words = this.text.split(" ");

  componentDidMount() {
    this.animateWords();
  }

  animateWords = () => {
    const index = this.state.animatedWords.length;

    if (index < this.words.length) {
      setTimeout(() => {
        this.setState(
          {
            animatedWords: [
              ...this.state.animatedWords,
              this.words[index],
            ],
          },
          this.animateWords
        );
      }, 350);
    }
  };

  render() {
    const NextArrow = ({ onClick }: any) => (
      <button
        onClick={onClick}
        className="absolute -right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border hover:bg-orange-500 hover:text-white transition"
      >
        →
      </button>
    );

    const PrevArrow = ({ onClick }: any) => (
      <button
        onClick={onClick}
        className="absolute -left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border hover:bg-orange-500 hover:text-white transition"
      >
        ←
      </button>
    );

    const settings = {
      dots: false,
      infinite: true,
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
      <div className="py-20 px-4 bg-gray-50">
        {/* Heading */}
        <div className="mx-auto max-w-7xl text-center mb-12">
          <h3 className="text-4xl sm:text-5xl font-bold">
            {this.state.animatedWords.join(" ")}
          </h3>
        </div>

        {/* Slider */}
        <div className="mx-auto max-w-7xl relative px-12">
          <Slider {...settings}>
            {postData.map((item, i) => {
              // ✅ FINAL SAFETY CHECK
              if (!item?.slug || !item?.img) return null;

              const inclusions = item.inclusions.map((v) =>
                v.toLowerCase()
              );

              return (
                <div key={item.slug || i} className="px-3 pb-10">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border flex flex-col h-full group">
                    
                    {/* Image */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={item.img || "/images/fallback.jpg"}
                        alt={item.name || "Trek"}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {item.name}
                      </h3>

                      <div className="flex items-center gap-1 mb-4">
                        <span className="text-lg font-bold text-[#1A2B49]">
                          ₹{item.price}/-
                        </span>
                        <span className="text-sm text-gray-500">
                          Onwards
                        </span>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="text-gray-600 text-sm">
                          📅 {item.days}
                        </div>
                        <div className="text-gray-500 text-xs">
                          📍 {item.route}
                        </div>
                      </div>

                      {/* Inclusions */}
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-sm font-bold text-[#1A2B49]">
                          Inclusions:
                        </span>

                      <div className="flex items-center gap-4 text-gray-600 text-lg">
  {inclusions.some(v => v.toLowerCase().includes("meal")) && 
    React.createElement(FaUtensils as any)}
    
  {inclusions.some(v => v.toLowerCase().includes("stay")) && 
    React.createElement(FaBed as any)}
    
  {inclusions.some(v => v.toLowerCase().includes("guide")) && 
    React.createElement(FaUserTie as any)}
    
  {inclusions.some(v => v.toLowerCase().includes("transport")) && 
    React.createElement(FaBus as any)}
</div>
                      </div>

                      {/* Link */}
                      <Link
                        href={`/treks/${item.slug}`}
                        className="mt-auto w-max ml-auto border border-orange-300 text-orange-600 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-orange-50 transition"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}