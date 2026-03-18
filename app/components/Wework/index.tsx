"use client";
import Slider from "react-slick";
import React, { Component } from "react";

interface DataType {
   profession: string;
  price: string;
  duration: string;
  route: string;
  imgSrc: string;
  tag?: string;
}

const postData: DataType[] = [
  { profession: "Rishikesh", price: " 5,000", duration: "2 Days", route: "Rishikesh - Neelkanth - Rishikesh", imgSrc: "/images/wework/Rishikesh.jpg" },
  { profession: "Haridwar", price: " 4,000", duration: "1 Day", route: "Haridwar - Rishikesh - Haridwar", imgSrc: "/images/wework/Haridwar.jpeg" },
  { profession: "Kedarnath Dham", price: " 12,000", duration: "5 Days", route: "Haridwar - Kedarnath - Haridwar", imgSrc: "/images/wework/Kedarnath.jpg" },
  { profession: "Badrinath Dham", price: " 12,000", duration: "5 Days", route: "Haridwar - Badrinath - Haridwar", imgSrc: "/images/wework/Badrinath.webp" },
  { profession: "Tungnath Temple", price: " 6,000", duration: "3 Days", route: "Rishikesh - Tungnath - Rishikesh", imgSrc: "/images/wework/Tungnath.jpeg" },
  { profession: "Almora", price: " 8,000", duration: "4 Days", route: "Rishikesh - Almora - Rishikesh", imgSrc: "/images/wework/Almora.jpg" },
  { profession: "Gangotri", price: " 10,000", duration: "5 Days", route: "Haridwar - Gangotri - Haridwar", imgSrc: "/images/wework/Nainital.jpg" },
  { profession: "Yamunotri", price: " 10,000", duration: "5 Days", route: "Haridwar - Yamunotri - Haridwar", imgSrc: "/images/wework/Nainital.jpg" },
  { profession: "Kainchi Dham", price: " 6,000", duration: "3 Days", route: "Rishikesh - Kainchi Dham - Rishikesh", imgSrc: "/images/wework/Kainchi.webp" },
  { profession: "Panch Kedar", price: " 15,000", duration: "7 Days", route: "Haridwar - Panch Kedar - Haridwar", imgSrc: "/images/wework/Nainital.jpg" },
  { profession: "Kartik swami Temple", price: " 5,000", duration: "2 Days", route: "Rishikesh - Kartik Swami - Rishikesh", imgSrc: "/images/wework/Kartik_swami.jpeg" },
  { profession: "Patal Bhuvneshwar", price: " 6,000", duration: "3 Days", route: "Rishikesh - Patal Bhuvneshwar - Rishikesh", imgSrc: "/images/wework/patal-bhuvaneshwar.webp" },
  { profession: "Jageshwar", price: " 7,000", duration: "4 Days", route: "Rishikesh - Jageshwar - Rishikesh", imgSrc: "/images/wework/Nainital.jpg" },
  { profession: "Baijnath Temple", price: " 5,000", duration: "2 Days", route: "Rishikesh - Baijnath - Rishikesh", imgSrc: "/images/wework/Nainital.jpg" },
  { profession: "Mukteshwar Mahadev", price: " 5,000", duration: "2 Days", route: "Rishikesh - Mukteshwar - Rishikesh", imgSrc: "/images/wework/MukteshwarMahadev.jpg" },
  { profession: "Dhari Devi Temple", price: " 4,000", duration: "1 Day", route: "Rishikesh - Dhari Devi - Rishikesh", imgSrc: "/images/wework/DhariDevi.webp" },
  { profession: "Naina Devi Temple(Almora)", price: " 4,000", duration: "1 Day", route: "Rishikesh - Naina Devi - Rishikesh", imgSrc: "/images/wework/Nainital.jpg" },
  { profession: "Surkunda Devi Temple", price: " 4,000", duration: "1 Day", route: "Rishikesh - Surkunda Devi - Rishikesh", imgSrc: "/images/wework/surkanda-devi-temple.jpeg" },
  { profession: "Chitai Golu & Ghodkhal Temple ", price: " 4,000", duration: "1 Day", route: "Rishikesh - Chitai Golu - Rishikesh", imgSrc: "/images/wework/Chitai-Golu-Devta-Temple.jpg" },
  { profession: "Kasar Devi Temple", price: " 4,000", duration: "1 Day", route: "Rishikesh - Kasar Devi - Rishikesh", imgSrc: "/images/wework/Kasardevi.jpeg" },
  { profession: "Puniya Giri", price: " 4,000", duration: "1 Day", route: "Rishikesh - Puniya Giri - Rishikesh", imgSrc: "/images/wework/Purnagiri.jpg" },
  { profession: "Nanda Devi Temple", price: " 4,000", duration: "1 Day", route: "Rishikesh - Nanda Devi - Rishikesh", imgSrc: "/images/wework/Nandadevitemple.avif" }
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

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
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
        <div className="mx-auto max-w-7xl">
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
                    {item.tag && (
                      <span className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    )}
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
                        📅 <span>{item.duration}</span>
                      </div>
                      <div className="text-gray-500 text-xs">
                        📍 {item.route}
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