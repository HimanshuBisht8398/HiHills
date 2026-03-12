"use client";

import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface DataType {
  district: string;
  images: string[];
}

const postData: DataType[] = [
  { district: "Dehradun", images: ["/images/District/Dehradun.webp"] },
  { district: "Haridwar", images: ["/images/District/Haridwar.webp"] },
  { district: "Nainital", images: ["/images/District/Nainital.webp"] },
  { district: "Almora", images: ["/images/District/almora.webp"] },
  { district: "Pithoragarh", images: ["/images/District/Pithoragarh.webp"] },
  { district: "Chamoli", images: ["/images/District/Chamoli.webp"] },
  { district: "Uttarkashi", images: ["/images/District/Uttarkashi.webp"] },
  { district: "Rudraprayag", images: ["/images/District/Rudrapryaag.webp"] },
  { district: "Tehri Garhwal", images: ["/images/District/Tehri.webp"] },
  { district: "Pauri Garhwal", images: ["/images/District/Pauri.webp"] },
  { district: "Champawat", images: ["/images/District/Champawat.webp"] },
  { district: "Bageshwar", images: ["/images/District/Bageshwar.webp"] },
  { district: "Udham Singh Nagar", images: ["/images/District/UdhamSingh.webp"] },
];

type StateType = {
  animatedWords: string[];
  deleting: boolean;
  previewImage: string | null;
};

export default class index extends Component<{}, StateType> {
  state: StateType = {
    animatedWords: [],
    deleting: false,
    previewImage: null,
  };

  text = "Explore All Uttarakhand With Us";
  words = this.text.split(" ");

  componentDidMount() {
    this.animateWords();
  }

  animateWords = () => {
    const { animatedWords, deleting } = this.state;
    let index = deleting ? animatedWords.length - 1 : animatedWords.length;

    if (!deleting) {
      if (index < this.words.length) {
        setTimeout(() => {
          this.setState(
            { animatedWords: [...animatedWords, this.words[index]] },
            this.animateWords
          );
        }, 200);
      } else {
        setTimeout(() => {
          this.setState({ deleting: true }, this.animateWords);
        }, 1200);
      }
    } else {
      if (index >= 0) {
        setTimeout(() => {
          this.setState(
            { animatedWords: animatedWords.slice(0, index) },
            this.animateWords
          );
        }, 120);
      } else {
        setTimeout(() => {
          this.setState({ deleting: false }, this.animateWords);
        }, 400);
      }
    }
  };

  openPreview = (e: React.MouseEvent, img: string) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ previewImage: img });
  };

  closePreview = () => {
    this.setState({ previewImage: null });
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      centerMode: true,
      centerPadding: "0px",
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 1000,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2, centerMode: false },
        },
        {
          breakpoint: 640,
          settings: { slidesToShow: 1, centerMode: false },
        },
      ],
    };

    return (
      <div className="bg-gray-50 py-28">

        {/* Heading */}
        <div className="mx-auto max-w-7xl text-center mb-16 px-6">
          <h3 className="text-4xl sm:text-6xl font-bold text-gray-900">
            {this.state.animatedWords.join(" ")}
            <span className="opacity-40">|</span>
          </h3>
        </div>

        {/* Slider */}
        <div className="max-w-7xl mx-auto px-6">
          <Slider {...settings}>
            {postData.map((items, i) => {
              const slug = items.district
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "");

              return (
                <div key={i} className="px-4">
                  <Link href={`/districts/${slug}`} className="block">

                    <div className="relative h-[260px] rounded-3xl overflow-hidden shadow-xl group transition flex items-center justify-center bg-black/5">

                      <img
                        src={items.images[0]}
                        alt={items.district}
                        className="max-w-full max-h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                      {/* Eye Icon */}
                      <button
                        onClick={(e) =>
                          this.openPreview(e, items.images[0])
                        }
                        className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white"
                      >
                        {React.createElement(FaEye as any, {
                          className: "text-gray-800",
                          size: 16,
                        })}
                      </button>

                      {/* District Name */}
                      <div className="absolute bottom-2 left-6 right-6">
                        <h3 className="text-white text-2xl font-semibold">
                          {items.district}
                        </h3>
                      </div>

                    </div>

                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* Image Popup */}
        {this.state.previewImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            onClick={this.closePreview}
          >
            <img
              src={this.state.previewImage}
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
              alt="Preview"
            />
          </div>
        )}
      </div>
    );
  }
}