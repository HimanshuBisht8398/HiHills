"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

interface DataType {
  heading: string;
  heading2: string;
  date: string;
  Price: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    heading: "Kedarnath Dham",
    heading2: "Spiritual Himalayan Journey",
    name: "Hi Hills Travel",
    Price: "₹ 5000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/wework/kedarnath.jpg",
  },
  {
    heading: "Badrinath Dham",
    heading2: "Sacred Vishnu Temple",
    name: "Hi Hills Travel",
    Price: "₹ 5000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Badrinath_Temple.jpg",
  },
  {
    heading: "Kedarnath & Badrinath",
    heading2: "Do Dham Yatra",
    name: "Hi Hills Travel",
    Price: "₹ 12000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/KedarnathBarinath.webp",
  },
  {
    heading: "Gangotri Dham",
    heading2: "Origin of Holy Ganga",
    name: "Hi Hills Travel",
    Price: "₹ 6000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Gangotri.webp",
  },
  {
    heading: "Yamunotri Dham",
    heading2: "Source of Yamuna River",
    name: "Hi Hills Travel",
    Price: "₹ 6000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Yamunotri.webp",
  },
   {
    heading: "Gangotri & Yamunotri Dham",
    heading2: "Source of Yamuna River",
    name: "Hi Hills Travel",
    Price: "₹ 6000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Gangotriyumnotri.webp",
  },
  {
    heading: "Adi Kailash & Om Parvat ",
    heading2: "Spiritual Expedition to Adi Kailash & Om Parvat",
    name: "Hi Hills Travel",
    Price: "₹ 6000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/AdiOm.jpg",
  },
  {
    heading: "Rudranath Temple",
    heading2: "Spiritual Expedition to Rudranath Temple",
    name: "Hi Hills Travel",
    Price: "₹ 6000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Rudranath.jpeg",
  },
  {
    heading: "Tungnath Temple",
    heading2: "Spiritual Expedition to Tungnath Temple",
    name: "Hi Hills Travel",
    Price: "₹ 6000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/wework/Tungnath.jpeg",
  },
  {
    heading: "Madhyamaheshwar Temple",
    heading2: "Spiritual Expedition to Madhyamaheshwar Temple",
    name: "Hi Hills Travel",
    Price: "₹ 6000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Madmaheshwar.jpg",
  },
];

interface State {
  text: string;
  displayText: string;
  index: number;
  isDeleting: boolean;
}

export default class MultipleItems extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      text: "Our Popular Packages.",
      displayText: "",
      index: 0,
      isDeleting: false
    };
  }

  componentDidMount() {
    this.typeEffect();
  }

  typeEffect = () => {
    const { text, index, isDeleting } = this.state;
    const speed = isDeleting ? 50 : 120;

    if (!isDeleting && index < text.length) {
      this.setState(
        { index: index + 1, displayText: text.slice(0, index + 1) },
        () => setTimeout(this.typeEffect, speed)
      );
    } 
    else if (!isDeleting && index === text.length) {
      setTimeout(() => this.setState({ isDeleting: true }, this.typeEffect), 1500);
    } 
    else if (isDeleting && index > 0) {
      this.setState(
        { index: index - 1, displayText: text.slice(0, index - 1) },
        () => setTimeout(this.typeEffect, speed)
      );
    } 
    else if (isDeleting && index === 0) {
      this.setState({ isDeleting: false }, () => setTimeout(this.typeEffect, 400));
    }
  };

  render() {

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: "linear",
      pauseOnHover: true,
      arrows: false,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } }
      ]
    };

    return (
      <div className="py-20 bg-gray-50" id="blog-section">

        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h3 className="text-4xl sm:text-5xl font-bold h-16">
              {this.state.displayText}
              <span className="border-r-4 border-black animate-pulse ml-1"></span>
            </h3>
          </div>

          {/* Slider */}
          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>

                <div className="relative m-3 rounded-3xl overflow-hidden shadow-xl group bg-white">

                  {/* Image */}
                  <div className="overflow-hidden">
                    <Image
                      src={items.imgSrc}
                      alt={items.heading}
                      width={400}
                      height={260}
                      className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">

                    <h4 className="text-xl font-bold text-gray-900">
                      {items.heading}
                    </h4>

                    <p className="text-gray-500 text-sm mt-1">
                      {items.heading2}
                    </p>

                    <div className="flex justify-between items-center mt-4">

                      <span className="text-green-700 font-bold text-lg">
                        Starts from {items.Price}
                      </span>

                      <button
                        onClick={() => {
                          if (typeof window !== "undefined") {
                            window.dispatchEvent(new Event("openContactForm"));
                          }
                        }}
                        className="bg-blue-600 hover:bg-black text-white px-5 py-2 rounded-full text-sm transition"
                      >
                        Book Now
                      </button>

                    </div>

                    <div className="text-gray-400 text-sm mt-3">
                      {items.date}
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