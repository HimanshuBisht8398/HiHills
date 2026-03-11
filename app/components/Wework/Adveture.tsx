"use client";

import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface DataType {
  profession: string;
  name: string;
  images: string[];
}

const postData: DataType[] = [
  {
    profession: "Rafting In Rishikesh",
    name: "John Doe",
    images: ["/images/wework/Rafting.jpeg"],
  },
  {
    profession: "Jungle Safari in Corbett",
    name: "John Doe",
    images: ["/images/wework/JungleSafari.avif"],
  },
  {
    profession: "Paragliding",
    name: "John Doe",
    images: ["/images/wework/Paragliding.jpeg"],
  },
  {
    profession: "Jet skiing in Tehri",
    name: "John Doe",
    images: ["/images/wework/Jetskee.jpg"],
  },
  {
    profession: "Bungee Jumping in Rishikesh",
    name: "John Doe",
    images: ["/images/wework/bungee-jumping.webp"],
  },
  {
    profession: "Zipline in Rishikesh",
    name: "John Doe",
    images: ["/images/wework/Zipline.jpeg"],
  },
  {
    profession: "Hot Air Balloon in Ramnagar",
    name: "John Doe",
    images: ["/images/wework/Hotairbaloon.jpg"],
  },
  {
    profession: "Skiing in Auli",
    name: "John Doe",
    images: ["/images/wework/SnowSkii.jpeg"],
  },
  {
    profession: "Camping in Rishikesh",
    name: "John Doe",
    images: ["/images/wework/Camping.avif"],
  }
];

type StateType = {
  animatedWords: string[];
  deleting: boolean;
};

export default class Adveture extends Component<{}, StateType> {
  state: StateType = {
    animatedWords: [],
    deleting: false,
  };

  text = "Adventure Activities in Uttarakhand.";
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
          settings: {
            slidesToShow: 2,
            centerMode: false,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
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
            {postData.map((items, i) => (
              <div key={i} className="px-4">

                <div className="relative h-[320px] rounded-3xl overflow-hidden shadow-xl group transition">

                  {/* Image */}
                  <img
                    src={items.images[0]}
                    alt={items.profession}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Text */}
                  <div className="absolute bottom-6 left-6 right-6">

                    <h3 className="text-white text-2xl font-semibold">
                      {items.profession}
                    </h3>
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