"use client";
import Slider from "react-slick";
import React, { Component } from "react";

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
}

const postData: DataType[] = [
  {
    name: "Kedarkantha Trek (Uttarakhand)",
    price: "8,500",
    duration: "6 Days",
    route: "Sankri - Kedarkantha - Sankri",
    imgSrc: "/images/Treks/Kedarkantha.webp",
  },
  
  {
    name: "Nag Tibba Trek (Uttarakhand)",
    price: "7,000",
    duration: "5 Days",
    route: "Pantwari - Nag Tibba - Pantwari",
    imgSrc: "/images/Treks/Naag-tibba.webp",
  },
  {
    name: "Khaliya Top Trek (Uttarakhand)",
    price: "6,500",
    duration: "4 Days",
    route: "Mukhwa - Khaliya Top - Mukhwa",
    imgSrc: "/images/Treks/Khaliyatop.webp",
  },
  {
    name: "Kuari Pass Trek (Uttarakhand)",
    price: "7,500",
    duration: "5 Days",
    route: "Joshimath - Kuari Pass - Joshimath",
    imgSrc: "/images/Treks/Kauripass.webp",
  },
  {
    name: "Chandrashila Trek (Uttarakhand)",
    price: "6,500",
    duration: "5 Days",
    route: "Chopta - Tungnath - Chandrashila - Chopta",
    imgSrc: "/images/Treks/Chandrashila.jpg",
  },
  {
    name: "Brahmatal Trek (Uttarakhand)",
    price: "7,000",
    duration: "5 Days",
    route: "Karinth - Brahmatal - Karinth",
    imgSrc: "/images/Treks/Brahmataal.jpg",
  },
  {
    name: "Gulabi Kantha Trek (Uttarakhand)",
    price: "6,500",
    duration: "5 Days",
    route: "Mukhwa - Khaliya Top - Mukhwa",
    imgSrc: "/images/Treks/Gulabikantha.webp",
  },
  {
    name: "Pangarchulla Trek (Uttarakhand)",
    price: "8,500",
    duration: "6 Days",
    route: "Joshimath - Pangarchulla - Joshimath",
    imgSrc: "/images/Treks/pangarchulla.jpg",
  },
  {
    name: "Triund Trek (Himachal)",
    price: "4,500",
    duration: "3 Days",
    route: "McLeod Ganj - Triund - McLeod Ganj",
    imgSrc: "/images/Treks/Triund.jpg",
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
  //       }, 350);
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
  //       }, 200);
  //     } else {
  //       setTimeout(() => {
  //         this.setState({ deleting: false }, this.animateWords);
  //       }, 500);
  //     }
  //   }
  // };


  animateWords = () => {
    const { animatedWords } = this.state;
    let index = animatedWords.length;

    // Fixed: Logic only adds words and stops once the array is full
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

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3, // Changed to 3 to match the screenshot layout
      slidesToScroll: 1,
      arrows: true, // Arrows are visible in your screenshot
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1500,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 640, settings: { slidesToShow: 1 } },
      ],
    };

    return (
      <div className=" py-20 px-4">
        <div className="mx-auto max-w-7xl text-center mb-12">
          <h3 className="text-4xl sm:text-5xl font-bold">
            {this.state.animatedWords.join(" ")}
            {/* <span className="text-blue-500 animate-pulse">|</span> */}
          </h3>
        </div>

        <div className="mx-auto max-w-7xl">
          <Slider {...settings}>
            {postData.map((item, i) => (
              <div key={i} className="px-3 pb-10">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full group">
                  {/* Image Section */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {item.tag && (
                      <span className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-5 flex flex-col flex-grow text-left">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-lg font-bold text-[#1A2B49]">₹{item.price}/-</span>
                      <span className="text-sm text-gray-500 font-medium">Onwards</span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600 text-sm gap-2">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                         <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-xs gap-2">
                        <span>{item.route}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => this.setState({ selectedPlace: item })}
                      className="mt-auto w-max ml-auto border border-orange-300 text-orange-600 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-orange-50 transition-colors"
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
            <div className="bg-white rounded-2xl overflow-hidden max-w-lg w-full relative animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => this.setState({ selectedPlace: null })}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold z-10 shadow-md"
              >
                ×
              </button>

              <img
                src={selectedPlace.imgSrc}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                        {selectedPlace.name}
                    </h2>
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-sm font-bold">
                        {selectedPlace.duration}
                    </span>
                </div>

                <p className="text-gray-600 mb-6">
                    Join our group trek to {selectedPlace.name}. Experience the raw beauty 
                    of the Himalayas starting from {selectedPlace.route.split(' ')[0]}.
                </p>

                <div className="flex items-center justify-between border-t pt-6">
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Price</p>
                        <p className="text-2xl font-black text-gray-900">₹{selectedPlace.price}</p>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-orange-200">
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
