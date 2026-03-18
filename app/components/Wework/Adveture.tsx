  "use client";

  import Slider from "react-slick";
  import React, { Component } from "react";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";

  interface DataType {
    profession: string;
    price: string;
    inclusions: string;
    pickup: string;
    images: string[];
  }

  const postData: DataType[] = [
    {
      profession: "Rafting In Rishikesh",
      price: "₹1200 / person",
      inclusions: "Rafting, Safety Gear, Guide",
      pickup: "Pickup: Tapovan / Shivpuri",
      images: ["/images/wework/Rafting.jpeg"],
    },
    {
      profession: "Jungle Safari in Corbett",
      price: "₹3500 / jeep",
      inclusions: "Safari Permit, Guide",
      pickup: "Pickup: Ramnagar",
      images: ["/images/wework/JungleSafari.avif"],
    },
    {
      profession: "Paragliding",
      price: "₹2500 / person",
      inclusions: "Pilot, Safety Equipment",
      pickup: "Pickup: Naukuchiatal",
      images: ["/images/wework/Paragliding.jpeg"],
    },
    {
      profession: "Jet skiing in Tehri",
      price: "₹800 / ride",
      inclusions: "Life Jacket, Instructor",
      pickup: "Pickup: Tehri Lake",
      images: ["/images/wework/Jetskee.jpg"],
    },
    {
      profession: "Bungee Jumping in Rishikesh",
      price: "₹3700 / person",
      inclusions: "Jump, Safety Gear, Certificate",
      pickup: "Pickup: Mohanchatti",
      images: ["/images/wework/bungee-jumping.webp"],
    },
    {
      profession: "Zipline in Rishikesh",
      price: "₹1800 / person",
      inclusions: "Safety Harness, Guide",
      pickup: "Pickup: Mohanchatti",
      images: ["/images/wework/Zipline.jpeg"],
    },
    {
      profession: "Hot Air Balloon in Ramnagar",
      price: "₹3500 / person",
      inclusions: "Balloon Ride, Safety Briefing",
      pickup: "Pickup: Ramnagar",
      images: ["/images/wework/Hotairbaloon.jpg"],
    },
    {
      profession: "Skiing in Auli",
      price: "₹2000 / session",
      inclusions: "Instructor, Ski Gear",
      pickup: "Pickup: Auli Base Camp",
      images: ["/images/wework/SnowSkii.jpeg"],
    },
    {
      profession: "Camping in Rishikesh",
      price: "₹1500 / person",
      inclusions: "Stay, Meals, Bonfire",
      pickup: "Pickup: Shivpuri",
      images: ["/images/wework/Camping.avif"],
    },
  ];

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
    // open contact modal (used when a card is clicked)
    openContact = () => {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("openContactForm"));
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
              {/* <span className="opacity-40">|</span> */}
            </h3>
          </div>

          {/* Slider */}
          <div className="max-w-7xl mx-auto px-6">
            <Slider {...settings}>
              {postData.map((items, i) => (
                <div key={i} className="px-4">

                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => this.openContact()}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") this.openContact();
                    }}
                    className="relative h-[340px] rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
                  >

                    {/* Image */}
                    <img
                      src={items.images[0]}
                      alt={items.profession}
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
                        {items.profession}
                      </h3>

                      <p className="text-sm opacity-90">
                        📍 {items.pickup}
                      </p>

                      <p className="text-sm opacity-90">
                        ✔ {items.inclusions}
                      </p>
                         <p className="text-sm opacity-90">
                        ✔ {items.price}
                      </p>
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