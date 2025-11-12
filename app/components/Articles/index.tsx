"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    time: string;
    heading: string;
    heading2: string;
    date: string;
    Price:string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        time: "Book Now",
        heading: 'Kedarnath Dham',
        heading2: 'Webflow this Week!',
        name: "Published on Startupon",
        Price:"₹ 5000/person",
        date: 'August 19, 2021',
        imgSrc: '/images/wework/kedarnath.jpg',
    },
    {
        time: "5 min",
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Published on Startupon",
        Price:"₹ 5000/person",
        date: 'August 19, 2021',
        imgSrc: '/images/articles/article2.png',
    },
    {
        time: "5 min",
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Published on Startupon",
        Price:"",
        date: 'August 19, 2021',
        imgSrc: '/images/articles/article3.png',
    },
    {
        time: "5 min",
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Published on Startupon",
        Price:"",
        date: 'August 19, 2021',
        imgSrc: '/images/articles/article.png',
    },
    {
        time: "5 min",
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Published on Startupon",
        Price:"",
        date: 'August 19, 2021',
        imgSrc: '/images/articles/article2.png',
    },
    {
        time: "5 min",
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Published on Startupon",
        Price:"",
        date: 'August 19, 2021',
        imgSrc: '/images/articles/article3.png',
    },
]
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
      isDeleting: true
    };
  }

  componentDidMount() {
    this.typeEffect();
  }

  typeEffect = () => {
    const { text, index, isDeleting } = this.state;
    const speed = isDeleting ? 60 : 120; 

    if (!isDeleting && index < text.length) {
      // Typing
      this.setState(
        { index: index + 1, displayText: text.slice(0, index + 1) },
        () => setTimeout(this.typeEffect, speed)
      );
    } 
    else if (!isDeleting && index === text.length) {
      // Pause before deleting
      setTimeout(() => this.setState({ isDeleting: true }, this.typeEffect), 1500);
    } 
    else if (isDeleting && index > 0) {
      // Deleting
      this.setState(
        { index: index - 1, displayText: text.slice(0, index - 1) },
        () => setTimeout(this.typeEffect, speed)
      );
    } 
    else if (isDeleting && index === 0) {
      // Reset to typing
      this.setState({ isDeleting: false }, () => setTimeout(this.typeEffect, 400));
    }
  };

  render() {
    const { displayText } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: true,
      autoplay: true,
      speed: 500,
      cssEase: "linear",
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1, dots: true }},
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false }}
      ]
    };

    return (
      <div className="bg-lightgrey py-20" id="blog-section">
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>

          <div className="text-center">
            <h3 className="text-4xl sm:text-6xl font-bold h-20">
              {displayText}
              <span className="border-r-4 border-black animate-pulse ml-1"></span>
            </h3>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                  <Image src={items.imgSrc} alt="img" width={389} height={262} className="inline-block m-auto" />
                  {/* <Link href={''}> */}
                    <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">
                      {items.time} 
                    </h3>
                  {/* </Link> */}
                  <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                  <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>
                  <div>
                    <h3 className='text-base font-normal pt-6 pb-2 opacity-75'>{items.name}</h3>
                    <h3 className='text-base font-normal pb-1 opacity-75'>{items.date}</h3>
                    <h3 className='text-1.5xl font-bold pb-2 opacity-75 text-green-800'>{items.Price}</h3>     
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
