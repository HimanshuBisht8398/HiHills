"use client";

import Slider from "react-slick";
import React, { Component } from "react";
import { FaUtensils, FaBed, FaUserTie, FaBus } from "react-icons/fa";
interface DataType {
  profession: string;
  price: string;
  duration: string;
  route: string;
  imgSrc: string;
  tag?: string;
  inclusions: {
    meals?: boolean;
    stay?: boolean;
    guide?: boolean;
    transport?: boolean;
  };
}

const postData: DataType[] = [
  { profession: "Rishikesh", price: "5,000", duration: "2 Days", route: "Rishikesh - Neelkanth - Rishikesh", imgSrc: "/images/wework/Rishikesh.jpg", inclusions: { meals: true, guide: true, transport: true }, },
  { profession: "Haridwar", price: "4,000", duration: "1 Day", route: "Haridwar - Rishikesh - Haridwar", imgSrc: "/images/wework/Haridwar.jpeg", inclusions: { meals: false, guide: true, transport: true }, },
  { profession: "Kedarnath Dham", price: "12,000", duration: "5 Days", route: "Haridwar - Kedarnath - Haridwar", imgSrc: "/images/wework/Kedarnath.jpg", inclusions: { meals: true, stay: true, guide: true, transport: true }, },
  { profession: "Badrinath Dham", price: "12,000", duration: "5 Days", route: "Haridwar - Badrinath - Haridwar", imgSrc: "/images/wework/Badrinath.webp", inclusions: { meals: true, stay: true, guide: true, transport: true }, },
  { profession: "Tungnath Temple", price: "6,000", duration: "3 Days", route: "Rishikesh - Tungnath - Rishikesh", imgSrc: "/images/wework/Tungnath.jpeg", inclusions: { meals: true, guide: true, transport: true }, },
  { profession: "Almora", price: "8,000", duration: "4 Days", route: "Rishikesh - Almora - Rishikesh", imgSrc: "/images/wework/Almora.jpg", inclusions: { meals: true, stay: true, guide: true, transport: true }, },
];

type StateType = {
  animatedWords: string[];
  selectedPlace: DataType | null;
};

export default class SpiritualPlaces extends Component<{}, StateType> {
  state: StateType = {
    animatedWords: [],
    selectedPlace: null,
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
    const { selectedPlace } = this.state;

    // ✅ Custom Arrows
    const NextArrow = (props: any) => (
      <div
        onClick={props.onClick}
        className="absolute -right-10 top-1/2 -translate-y-1/2 z-20
      w-12 h-12 flex items-center justify-center
      rounded-full bg-white shadow-lg border
      hover:bg-orange-500 hover:text-white
      transition"
      >
        ➡
      </div>
    );

    const PrevArrow = (props: any) => (
      <div
        onClick={props.onClick}
        className="absolute -left-10 top-1/2 -translate-y-1/2 z-20
      w-12 h-12 flex items-center justify-center
      rounded-full bg-white shadow-lg border
      hover:bg-orange-500 hover:text-white
      transition"
      >
        ⬅
      </div>
    );

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false, // ✅ controlled by arrows
      speed: 600,
      swipeToSlide: true,
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
            {postData.map((item, i) => (
              <div key={i} className="px-3 pb-10">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border flex flex-col h-full group">

                  {/* Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={item.imgSrc}
                      alt={item.profession}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {item.profession}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-lg font-bold text-[#1A2B49]">
                        ₹{item.price}/-
                      </span>
                      <span className="text-sm text-gray-500">
                        Onwards
                      </span>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600 text-sm gap-2">
                        📅 {item.duration}
                      </div>
                      <div className="text-gray-500 text-xs">
                        📍 {item.route}
                      </div>
                    </div>
                <div className="flex items-center gap-4 mb-5">
  {/* Label */}
  <span className="text-sm font-bold text-[#1A2B49] whitespace-nowrap">
    Inclusions:
  </span>

  {/* Icons Container */}
  <div className="flex items-center gap-4 text-gray-600 text-lg">
    {item.inclusions.meals && (
      <div className="flex flex-col items-center text-[10px] leading-tight">
        {React.createElement(FaUtensils as any)}
        <span>Meals</span>
      </div>
    )}

    {item.inclusions.stay && (
      <div className="flex flex-col items-center text-[10px] leading-tight">
        {React.createElement(FaBed as any)}
        <span>Stay</span>
      </div>
    )}

    {item.inclusions.guide && (
      <div className="flex flex-col items-center text-[10px] leading-tight">
        {React.createElement(FaUserTie as any)}
        <span>Guide</span>
      </div>
    )}

    {item.inclusions.transport && (
      <div className="flex flex-col items-center text-[10px] leading-tight">
        {React.createElement(FaBus as any)}
        <span>Transport</span>
      </div>
    )}
  </div>
</div>
                    {/* Button */}
                    <button
                      onClick={() =>
                        this.setState({ selectedPlace: item })
                      }
                      className="mt-auto w-max ml-auto border border-orange-300 text-orange-600 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-orange-50 transition"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* MODAL */}
        {selectedPlace && (
          <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl overflow-hidden max-w-lg w-full relative">

              <button
                onClick={() =>
                  this.setState({ selectedPlace: null })
                }
                className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold"
              >
                ×
              </button>

              <img
                src={selectedPlace.imgSrc}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-2">
                  {selectedPlace.profession}
                </h2>

                <p className="text-gray-600 mb-6">
                  Explore the divine beauty of {selectedPlace.profession}.
                  A peaceful and spiritual journey awaits you.
                </p>

                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold">
                    ₹{selectedPlace.price}
                  </p>

                  <button className="bg-orange-500 text-white px-6 py-2 rounded-xl">
                    Book Now
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    );
  }
}