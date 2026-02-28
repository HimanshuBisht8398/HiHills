"use client";
import Slider from "react-slick";
import React, { Component } from "react";

interface DataType {
  profession: string;
  name: string;
  images: string[];
}

const postData: DataType[] = [
  {
    profession: "Rishikesh",
    name: "John Doe",
    images: [
      "/images/wework/Rishikesh.jpg",
      "/images/wework/Haridwar.jpeg",
      "/images/wework/Kedarnath.jpg",
    ],
  },
  {
    profession: "Nainital",
    name: "John Doe",
    images: [
      "/images/wework/Nainital.jpg",
      "/images/wework/Almora.jpg",
      "/images/wework/Kainchi.webp",
    ],
  },
  {
    profession: "Badrinath Dham",
    name: "John Doe",
    images: [
      "/images/wework/Badrinath.webp",
      "/images/wework/Tungnath.jpeg",
    ],
  },
];

type StateType = {
  animatedWords: string[];
  deleting: boolean;
  selectedPlace: DataType | null;
};

export default class Adveture extends Component<{}, StateType> {
  state: StateType = {
    animatedWords: [],
    deleting: false,
    selectedPlace: null,
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
        }, 1000);
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
    const { selectedPlace } = this.state;

    const mainSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 800, settings: { slidesToShow: 2 } },
        { breakpoint: 450, settings: { slidesToShow: 1 } },
      ],
    };

    const modalSettings = {
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="bg-wework py-32">
        <div className="mx-auto max-w-7xl text-center mb-10">
          <h3 className="text-4xl sm:text-6xl font-bold">
            {this.state.animatedWords.join(" ")}
            <span className="opacity-50">|</span>
          </h3>
        </div>

        {/* MAIN SLIDER */}
        <Slider {...mainSettings}>
          {postData.map((items, i) => (
            <div key={i}>
              <div
                onClick={() => this.setState({ selectedPlace: items })}
                className="bg-white cursor-pointer m-3 py-10 text-center shadow-xl rounded-3xl hover:scale-105 transition"
              >
                <img
                  src={items.images[0]}
                  alt={items.profession}
                  className="h-52 mx-auto object-cover rounded-xl"
                />
                <h3 className="text-xl pt-4 opacity-70">
                  {items.profession}
                </h3>
              </div>
            </div>
          ))}
        </Slider>

        {/* MODAL WITH CAROUSEL */}
        {selectedPlace && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-6 max-w-2xl w-full relative animate-scale">
              <button
                onClick={() => this.setState({ selectedPlace: null })}
                className="absolute top-2 right-3 text-3xl font-bold"
              >
                ×
              </button>

              <Slider {...modalSettings}>
                {selectedPlace.images.map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>
                ))}
              </Slider>

              <h2 className="text-3xl font-bold mt-4">
                {selectedPlace.profession}
              </h2>

              <p className="mt-2 text-gray-600">
                Discover thrilling adventure experiences at{" "}
                {selectedPlace.profession}. Perfect for trekking, rafting,
                camping and spiritual journeys.
              </p>

              <button className="mt-5 bg-black text-white px-6 py-2 rounded-xl">
                Book Activity
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
