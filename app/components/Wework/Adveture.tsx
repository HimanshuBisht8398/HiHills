  "use client";

  import Slider from "react-slick";
  import React, { Component } from "react";
  import Link from "next/link";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import { ADVENTURE_PACKAGES } from "@/app/adventure/adventure-data";

  type StateType = {
    animatedWords: string[];
    deleting: boolean;
  };

  export default class Adventure extends Component<{}, StateType> {
    state: StateType = {
      animatedWords: [],
      deleting: false,
    };

    text = "Adventure Activities in Uttarakhand.";
    words = this.text.split(" ");

    componentDidMount() {
      this.animateWords();
    }

    // animateWords = () => {
    //   const { animatedWords, deleting } = this.state;
    //   let index = deleting ? animatedWords.length - 1 : animatedWords.length;

    //   if (!deleting) {
    //     if (index < this.words.length) {
    //       setTimeout(() => {
    //         this.setState(
    //           { animatedWords: [...animatedWords, this.words[index]] },
    //           this.animateWords
    //         );
    //       }, 200);
    //     } else {
    //       setTimeout(() => {
    //         this.setState({ deleting: true }, this.animateWords);
    //       }, 1200);
    //     }
    //   } else {
    //     if (index >= 0) {
    //       setTimeout(() => {
    //         this.setState(
    //           { animatedWords: animatedWords.slice(0, index) },
    //           this.animateWords
    //         );
    //       }, 120);
    //     } else {
    //       setTimeout(() => {
    //         this.setState({ deleting: false }, this.animateWords);
    //       }, 400);
    //     }
    //   }
    // };


    animateWords = () => {
    const { animatedWords } = this.state;
    let index = animatedWords.length;

    // Only add words if we haven't reached the end of the sentence
    if (index < this.words.length) {
      setTimeout(() => {
        this.setState(
          { animatedWords: [...animatedWords, this.words[index]] },
          this.animateWords // Call again for the next word
        );
      }, 200);
    }
    // No 'else' block here means it stops once the sentence is full
  };
    render() {
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
    →
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
    ←
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
        <div className="bg-gray-50 py-28">

          {/* Heading */}
          <div className="mx-auto max-w-7xl text-center mb-16 px-6">
            <h3 className="text-4xl sm:text-6xl font-bold text-gray-900">
              {this.state.animatedWords.join(" ")}
              {/* <span className="opacity-40">|</span> */}
            </h3>
          </div>

          {/* Slider */}
          <div className="max-w-7xl mx-auto px-6">
            <Slider {...settings}>
              {ADVENTURE_PACKAGES.map((items, i) => (
                <div key={i} className="px-4">

                  <div className="relative h-[340px] rounded-3xl overflow-hidden shadow-xl group">

                    {/* Image */}
                    <img
                      src={items.img}
                      alt={items.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* Price Badge */}
                    {/* <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold shadow">
                      {items.price}
                    </div> */}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Text */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">

                      <h3 className="text-2xl font-semibold mb-2">
                        {items.name}
                      </h3>

                      <p className="text-sm opacity-90">
                        📍 Pickup: {items.pickup}
                      </p>

                      <p className="text-sm opacity-90">
                        📅 Duration: {items.duration}
                      </p>

                      <p className="text-sm opacity-90">
                        Inclusions:- {items.inclusions.slice(0, 3).join(", ")}
                      </p>
                      <p className="text-sm opacity-90">
                        ₹{items.price}/-
                      </p>

                      <div className="mt-4">
                        <Link
                          href={`/adventure/${items.slug}`}
                          className="inline-flex rounded-lg border border-orange-300 bg-white/90 px-4 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
                        >
                          View Details
                        </Link>
                      </div>
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
