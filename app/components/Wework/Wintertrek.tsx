"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { FaUtensils, FaBed, FaUserTie, FaBus } from "react-icons/fa";
// import { FaBus,FaUtensils,FaBed,FaUserTie } from '@heroicons/react/24/solid';
// interface DataType {
//   profession: string;
//   height: string;
//   imgSrc: string;
// }
interface DataType {
  name: string;
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
  {
    name: "Kedarkantha Trek (Uttarakhand)",
    price: "8,500",
    duration: "6 Days",
    route: "Sankri - Kedarkantha - Sankri",
    imgSrc: "/images/Treks/Kedarkantha.webp",
    inclusions: { meals: true, stay: true, guide: true, transport: true },
  },

  {
    name: "Nag Tibba Trek (Uttarakhand)",
    price: "7,000",
    duration: "5 Days",
    route: "Pantwari - Nag Tibba - Pantwari",
    imgSrc: "/images/Treks/Naag-tibba.webp",
    inclusions: { meals: true, stay: true, guide: true, transport: true },
  },
  {
    name: "Khaliya Top Trek (Uttarakhand)",
    price: "6,500",
    duration: "4 Days",
    route: "Mukhwa - Khaliya Top - Mukhwa",
    imgSrc: "/images/Treks/Khaliyatop.webp",
    inclusions: { meals: true, stay: true, guide: true, transport: true },
  },
  {
    name: "Kuari Pass Trek (Uttarakhand)",
    price: "7,500",
    duration: "5 Days",
    route: "Joshimath - Kuari Pass - Joshimath",
    imgSrc: "/images/Treks/Kauripass.webp",
    inclusions: { meals: true, stay: true, guide: true, transport: true },
  },
  {
    name: "Chandrashila Trek (Uttarakhand)",
    price: "6,500",
    duration: "5 Days",
    route: "Chopta - Tungnath - Chandrashila - Chopta",
    imgSrc: "/images/Treks/Chandrashila.jpg",
    inclusions: { meals: true, stay: true, guide: true, transport: true },
  },
  {
    name: "Brahmatal Trek (Uttarakhand)",
    price: "7,000",
    duration: "5 Days",
    route: "Karinth - Brahmatal - Karinth",
    imgSrc: "/images/Treks/Brahmataal.jpg",
    inclusions: { meals: true, stay: true, guide: true, transport: true },
  },
  {
    name: "Gulabi Kantha Trek (Uttarakhand)",
    price: "6,500",
    duration: "5 Days",
    route: "Mukhwa - Khaliya Top - Mukhwa",
    imgSrc: "/images/Treks/Gulabikantha.webp",
    inclusions: { meals: true, stay: true, guide: true, transport: true },
  },
  {
    name: "Pangarchulla Trek (Uttarakhand)",
    price: "8,500",
    duration: "6 Days",
    route: "Joshimath - Pangarchulla - Joshimath",
    imgSrc: "/images/Treks/pangarchulla.jpg",
    inclusions: { meals: true, stay: true, guide: true, transport: true },
  },
  {
    name: "Triund Trek (Himachal)",
    price: "4,500",
    duration: "3 Days",
    route: "McLeod Ganj - Triund - McLeod Ganj",
    imgSrc: "/images/Treks/Triund.jpg",
    inclusions: { meals: true, stay: true, guide: true, transport: true },
  },
  // {
  //   name: "Prashar Lake Trek (Himachal)",
  //   price: "5,000",
  //   duration: "2 Days",
  //   route: "Kullu - Prashar Lake - Kullu",
  //   imgSrc: "/images/wework/Kainchi.webp",
  // },
  // {
  //   name: "Chadar Trek (Ladakh Winter Trek)",
  //   price: "₹ 12,000",
  //   duration: "9 Days",
  //   route: "Leh - Chadar - Leh",
  //   imgSrc: "/images/wework/Kainchi.webp",
  // },
];


type StateType = {
  animatedWords: string[];
  selectedPlace: DataType | null;
};

export default class Wintertrek extends Component<{}, StateType> {
  state: StateType = {
    animatedWords: [],
    selectedPlace: null,
  };

  text = "Most Recommended Winter Trek.";
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
      }, 350);
    }
  };

  render() {
    const { selectedPlace } = this.state;

    // ✅ PREMIUM ARROWS (OUTSIDE)
    const NextArrow = ({ onClick }: any) => (
      <button
        onClick={onClick}
        className="
          absolute -right-10 top-1/2 -translate-y-1/2 z-20
      w-12 h-12 flex items-center justify-center
      rounded-full bg-white shadow-lg border
      hover:bg-orange-500 hover:text-white
      transition
        "
      >
        <span className="text-xl font-bold group-hover:scale-110 transition">
          →
        </span>
      </button>
    );

    const PrevArrow = ({ onClick }: any) => (
      <button
        onClick={onClick}
        className="
          absolute -left-10 top-1/2 -translate-y-1/2 z-20
      w-12 h-12 flex items-center justify-center
      rounded-full bg-white shadow-lg border
      hover:bg-orange-500 hover:text-white
      transition
        "
      >
        <span className="text-xl font-bold group-hover:scale-110 transition">
          ←
        </span>
      </button>
    );

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false, // ✅ manual control
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
        <div className="mx-auto max-w-7xl relative px-12">
          <Slider {...settings}>
            {postData.map((item, i) => (
              <div key={i} className="px-3 pb-10">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full group">

                  {/* Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={item.imgSrc}
                      alt={item.name}
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
                      <div className="flex gap-4 text-gray-600 text-lg">
                        {item.inclusions.meals && (
                          <div className="flex flex-col items-center text-[10px] leading-none gap-1">
                            {React.createElement(FaUtensils as any)}
                            <span>Meals</span>
                          </div>
                        )}

                        {item.inclusions.stay && (
                          <div className="flex flex-col items-center text-[10px] leading-none gap-1">
                            {React.createElement(FaBed as any)}
                            <span>Stay</span>
                          </div>
                        )}

                        {item.inclusions.guide && (
                          <div className="flex flex-col items-center text-[10px] leading-none gap-1">
                            {React.createElement(FaUserTie as any)}
                            <span>Guide</span>
                          </div>
                        )}

                        {item.inclusions.transport && (
                          <div className="flex flex-col items-center text-[10px] leading-none gap-1">
                            {React.createElement(FaBus as any)}
                            <span>Transport</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => this.setState({ selectedPlace: item })}
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
                onClick={() => this.setState({ selectedPlace: null })}
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
                  {selectedPlace.name}
                </h2>

                <p className="text-gray-600 mb-6">
                  Experience the beauty of {selectedPlace.name} with our guided trek.
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