"use client";
import Slider from "react-slick";
import React, { Component } from "react";

interface DataType {
  profession: string;
  height: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    profession: "Kedarkantha Trek (Uttarakhand)",
    height: "12,500 ft",
    imgSrc: "/images/wework/Rishikesh.jpg",
  },
  {
    profession: "Nag Tibba Trek (Uttarakhand)",
    height: "9,915 ft",
    imgSrc: "/images/wework/Haridwar.jpeg",
  },
  {
    profession: "Khaliya Top Trek (Uttarakhand)",
    height: "11,500 ft",
    imgSrc: "/images/wework/Kedarnath.jpg",
  },
  {
    profession: "Kuari Pass Trek (Uttarakhand)",
    height: "12,516 ft",
    imgSrc: "/images/wework/Badrinath.webp",
  },
  {
    profession: "Tungnath Chandrashila Trek (Uttarakhand)",
    height: "13,123 ft",
    imgSrc: "/images/wework/Tungnath.jpeg",
  },
  {
    profession: "Brahmatal Trek (Uttarakhand)",
    height: "12,250 ft",
    imgSrc: "/images/wework/Almora.jpg",
  },
  {
    profession: "Gulabi Kantha Trek (Uttarakhand)",
    height: "13,000 ft",
    imgSrc: "/images/wework/Nainital.jpg",
  },
  {
    profession: "Pangarchulla Trek (Uttarakhand)",
    height: "15,069 ft",
    imgSrc: "/images/wework/Kainchi.webp",
  },
  {
    profession: "Triund Trek (Himachal)",
    height: "9,350 ft",
    imgSrc: "/images/wework/Kainchi.webp",
  },
  {
    profession: "Prashar Lake Trek (Himachal)",
    height: "8,960 ft",
    imgSrc: "/images/wework/Kainchi.webp",
  },
  {
    profession: "Chadar Trek (Ladakh Winter Trek)",
    height: "11,123 ft",
    imgSrc: "/images/wework/Kainchi.webp",
  },
];

type StateType = {
  animatedWords: string[];
  deleting: boolean;
  selectedPlace: DataType | null;
};

export default class Wintertrek extends Component<{}, StateType> {
  state: StateType = {
    animatedWords: [],
    deleting: false,
    selectedPlace: null,
  };

  text = "Most Recommended Winter Trek.";
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
        }, 350);
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
        }, 200);
      } else {
        setTimeout(() => {
          this.setState({ deleting: false }, this.animateWords);
        }, 500);
      }
    }
  };

  render() {
    const { selectedPlace } = this.state;

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 800, settings: { slidesToShow: 2 } },
        { breakpoint: 450, settings: { slidesToShow: 1 } },
      ],
    };

    return (
      <div className="bg-wework py-32">
        <div className="mx-auto max-w-7xl text-center">
          <h3 className="text-4xl sm:text-6xl font-bold my-2">
            {this.state.animatedWords.join(" ")}
            <span className="opacity-50">|</span>
          </h3>
        </div>

        <Slider {...settings}>
          {postData.map((items, i) => (
            <div key={i}>
              <div
                onClick={() => this.setState({ selectedPlace: items })}
                className="bg-white cursor-pointer m-3 py-14 my-10 text-center shadow-xl rounded-3xl hover:scale-105 transition"
              >
                <img
                  src={items.imgSrc}
                  alt={items.profession}
                  width={182}
                  height={282}
                  style={{ margin: "0 auto" }}
                />
                <h3 className="text-2xl pt-4 opacity-60">
                  {items.profession}
                </h3>
              </div>
            </div>
          ))}
        </Slider>

        {/* MODAL */}
        {selectedPlace && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative">
              <button
                onClick={() => this.setState({ selectedPlace: null })}
                className="absolute top-3 right-4 text-2xl font-bold"
              >
                ×
              </button>

              <img
                src={selectedPlace.imgSrc}
                className="w-full h-60 object-cover rounded-xl"
              />

              <h2 className="text-3xl font-bold mt-4">
                {selectedPlace.profession}
              </h2>

              <p className="mt-3 text-gray-600">
                Discover the winter beauty of {selectedPlace.profession}.
                Perfect destination for snow lovers and spiritual seekers.
              </p>

              <button className="mt-6 bg-black text-white px-6 py-2 rounded-xl">
                Book Trek
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
