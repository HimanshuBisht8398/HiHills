"use client";

import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import { FaUtensils, FaBed, FaUserTie, FaBus } from "react-icons/fa";
import { SPIRITUAL_PLACES } from "@/app/spiritual-places/place-data";

type DataType = (typeof SPIRITUAL_PLACES)[number];

type StateType = {
  animatedWords: string[];
};

export default class SpiritualPlaces extends Component<{}, StateType> {
  state: StateType = {
    animatedWords: [],
  };

  text = "Spiritual Places of Uttarakhand.";
  words = this.text.split(" ");

  componentDidMount() {
    this.animateWords();
  }

  animateWords = () => {
    const { animatedWords } = this.state;
    let index = animatedWords.length;

    if (index < this.words.length) {
      setTimeout(() => {
        this.setState(
          { animatedWords: [...animatedWords, this.words[index]] },
          this.animateWords
        );
      }, 300);
    }
  };

  render() {
    const safePlaces = (SPIRITUAL_PLACES || []).filter(
      (item) =>
        item &&
        item.slug &&
        item.imgSrc &&
        item.inclusions
    );

    // ✅ Arrows
    const NextArrow = (props: any) => (
      <div onClick={props.onClick} className="absolute -right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border hover:bg-orange-500 hover:text-white transition">
        ➡
      </div>
    );

    const PrevArrow = (props: any) => (
      <div onClick={props.onClick} className="absolute -left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border hover:bg-orange-500 hover:text-white transition">
        ⬅
      </div>
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
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
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
        <div className="mx-auto max-w-7xl relative">
          <Slider {...settings}>
            {safePlaces.map((item, i) => (
              <div key={item.slug || i} className="px-3 pb-10">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border flex flex-col h-full group">

                  {/* Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={item.imgSrc || "/images/fallback.jpg"}
                      alt={item.profession || "Place"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {item.profession || "Unknown Place"}
                    </h3>

                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-lg font-bold text-[#1A2B49]">
                        ₹{item.price || "N/A"}/-
                      </span>
                      <span className="text-sm text-gray-500">
                        Onwards
                      </span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600 text-sm gap-2">
                        📅 {item.duration || "N/A"}
                      </div>
                      <div className="text-gray-500 text-xs">
                        📍 {item.route || "N/A"}
                      </div>
                    </div>

                    {/* Inclusions */}
                    <div className="flex items-center gap-4 mb-5">
                      <span className="text-sm font-bold text-[#1A2B49]">
                        Inclusions:
                      </span>

                     <div className="flex items-center gap-4 text-gray-600 text-lg">
  {(item.inclusions || []).map((value: string, idx: number) => {
    const v = value.toLowerCase();

    if (v.includes("meal"))
      return <React.Fragment key={idx}>{React.createElement(FaUtensils as any)}</React.Fragment>;
    
    if (v.includes("stay"))
      return <React.Fragment key={idx}>{React.createElement(FaBed as any)}</React.Fragment>;
    
    if (v.includes("guide"))
      return <React.Fragment key={idx}>{React.createElement(FaUserTie as any)}</React.Fragment>;
    
    if (v.includes("transport"))
      return <React.Fragment key={idx}>{React.createElement(FaBus as any)}</React.Fragment>;

    return null;
  })}
</div>
                    </div>

                    {/* Button */}
                    <Link
                      href={`/spiritual-places/${item.slug || ""}`}
                      className="mt-auto w-max ml-auto border border-orange-300 text-orange-600 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-orange-50 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    );
  }
}