"use client";
import Slider from "react-slick";
import React, { Component } from "react";

// CAROUSEL DATA
interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
}

const postData: DataType[] = [
  { profession: "Rishikesh", name: "John Doe", imgSrc: "/images/wework/Rishikesh.jpg" },
  { profession: "Haridwar", name: "John Doe", imgSrc: "/images/wework/Haridwar.jpeg" },
  { profession: "Kedarnath Dham", name: "John Doe", imgSrc: "/images/wework/Kedarnath.jpg" },
  { profession: "Badrinath Dham", name: "John Doe", imgSrc: "/images/wework/Badrinath.webp" },
  { profession: "Tungnath Temple", name: "John Doe", imgSrc: "/images/wework/Tungnath.jpeg" },
  { profession: "Almora", name: "John Doe", imgSrc: "/images/wework/Almora.jpg" },
  { profession: "Nainital", name: "John Doe", imgSrc: "/images/wework/Nainital.jpg" },
  { profession: "Kainchi Dham", name: "John Doe", imgSrc: "/images/wework/Kainchi.webp" },
];

export default class MultipleItems extends Component {
  state = {
    animatedWords: [] as string[],
    deleting: false,
  };

  text = "Spiritual Places of Uttarakhand.";
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
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
          <div className="text-center">
            <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
              {this.state.animatedWords.join(" ")}
              <span className="opacity-50">|</span>
            </h3>
          </div>
        </div>

        <Slider {...settings}>
          {postData.map((items, i) => (
            <div key={i}>
              <div className="bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl">
                <div className="relative">
                  <img
                    src={items.imgSrc}
                    alt={items.profession}
                    width={182}
                    height={282}
                    style={{ margin: "0 auto" }}
                  />
                </div>
                <h3 className="text-2xl font-normal pt-4 pb-2 opacity-50">
                  {items.profession}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
