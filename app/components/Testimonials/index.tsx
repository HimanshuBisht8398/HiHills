"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
  profession: string;
  comment: string;
  // imgSrc: string;
  name: string;
  rating: number;
}

const postData: DataType[] = [
  {
    name: "Himanshu Bisht",
    profession: "Our Happy Customer",
    comment:
      "We have a very good experience with Hi Hills Tour and travels from 23-25 of August they provide me and all my friends such a beautiful experience of tungnath of chopta valley ,We enjoyed a lot with them they also provide us beautiful sight seens of chopta valley like water falls and view point of beautiful Himalayas which not included in our package I would recomend that you should travel with Hi Hills tour and travels for better experience with him Thanks Hi Hills Tour and Travels To make our trip memorable ❤️❤️",
    rating: 5
  },
  {
    name: "Tanvi Tiwari",
    profession: "Our Happy Customer",
    comment:
      "Imagine leaving your belongings on a trip when you’re way home and no chance to get it, the same happened to me on this trip. I had misplaced my phone that had all my work documents in car. But Suraj not only called to inform but also couriered it. Such honesty and simplicity is hard to find.My trip from Dubai to Haridwar was amazing all because we booked this amazing tour company.",
    rating: 5,
  },
  {
    name: "kailash sharma",
    profession: "Our Happy Customer",
    comment:
      "We had the pleasure of planning our recent trip to Rishikesh with Hi Hills Tour and Travels, and the experience exceeded our expectations. The entire journey was seamlessly organized, reflecting their commitment to quality service and attention to detail. Their team demonstrated exceptional professionalism, ensuring our comfort and satisfaction at every step. From well-curated itineraries to warm hospitality, every aspect of the trip was handled with great care. We truly appreciate their efforts in making our travel experience both enjoyable and memorable. Highly recommended for anyone seeking a reliable and well-managed travel service.",
    rating: 5,
  },
  {
    name: "Xènia Gavaldà Elias",
    profession: "Our Happy Customer",
    comment:
      "I had the loveliest experience  from Rishikesh to Delhi Airport. From the moment we started the journey, I felt completely safe, relaxed, and well taken care of. Suraj was not only professional and punctual, but also incredibly kind and easy to connect with. The entire ride was smooth, chill, and truly enjoyable — he made everything feel effortless. Highly recommend him if you’re looking for a trustworthy and genuine driver!",
    rating: 5,
  },
  {
    name: "Urvika Vyas",
    profession: "Our Happy Customer",
    comment:
      "Hi Hills Tours and Travels is literally the best travel services anyone can opt for.Take my word for it and book Suraj for your travels in the hills. I was visiting India from Canada after 3.5 years and Suraj was my point of contact in arranging everything. I was travelling with my grandparents along with the family. Suraj is such a gentleman and knows how to treat elders with respect. He is very well travelled, knowledgeable and also flexible. He goes above and beyond to help you out..",
    rating: 4,
  },
  {
    name: "Yogender Singh",
    profession: "Our Happy Customer",
    comment:"It was a great Excursion and the way it was carried out was extremely at a next level.We faced some tough challenges, but overcame them as a team,This trip pushed me outside my comfort zone and made me stronger.Over all it was a great trip hope to visit again soon.A heartly thanks to the organiser of the trip Mr Suraj Singh Rawat(Hi &Hills tour and Travels).",
    rating: 5,
  },
  {
    name:"Smita Tiwari",
    profession:"Our Happy Cutomer",
    comment:"It was an amazing and relaxed vacation with them. A special thanks to Suraj who suggested the best time and itinerary for us considering the age group. He is a very humble person.Thank you Suraj once again for making this trip memorable.",
    rating:5
  },
  {
    name:"Joydeep Banerjee",
    profession:"Our Happy Customer",
    comment:"Recently did a tour from rishikesh and nainital with Suraj. He has been an exceptional driver and amazing hospitality. Our trip was memorable just because of his company and helping nature. I strongly recommend Suraj for any trip to uttarakhand and surroundings.",
    rating:5
  },
  {
    name:"ANKIT MISHRA",
    profession:"Our Happy Customer",
    comment:"Best tour and travel company for the best experience we had a very good experience with him . He also provide a good hospitality over the trip .Most recommend.. To travel with him hills tours and travels",
    rating:5
  }
];

export default class MultipleItems extends Component<
  {},
  { expandedIndexes: Set<number> }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      expandedIndexes: new Set(),
    };
  }

  toggleExpand = (index: number) => {
    this.setState((prevState) => {
      const newSet = new Set(prevState.expandedIndexes);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return { expandedIndexes: newSet };
    });
  };

  renderStars = (rating: number) => {
    const totalStars = 5;
    return (
      <div className="flex">
        {[...Array(totalStars)].map((_, index) =>
          index < rating ? (
            <SolidStar
              key={index}
              width={20}
              height={20}
              className="mx-0.5"
              style={{ fill: "#FFD700" }} // bright yellow
            />
          ) : (
            <OutlineStar
              key={index}
              width={20}
              height={20}
              className="mx-0.5"
              style={{ stroke: "#FFD700", strokeWidth: 2 }} // yellow outline
            />
          )
        )}
      </div>
    );
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 800,
      cssEase: "ease-in-out",
      pauseOnHover: false,
      pauseOnFocus: false,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 800, settings: { slidesToShow: 2 } },
        { breakpoint: 450, settings: { slidesToShow: 1 } },
      ],
    };

    return (
      <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
          <div className="text-center">
            <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">
              See what others are saying.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">
              See what others are saying.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">
              See what others are saying.
            </h3>
          </div>

          <Slider {...settings}>
            {postData.map((item, i) => {
              const isExpanded = this.state.expandedIndexes.has(i);
              const shouldTruncate = item.comment.length > 150;
              const displayedComment = isExpanded
                ? item.comment
                : item.comment.slice(0, 150) +
                (shouldTruncate ? "..." : "");

              return (
                <div key={i} className="relative">
                  <div className="bg-white test-sha m-3 p-10 my-20 rounded-3xl relative">
                    {/* <Image
                      src={item.imgSrc}
                      alt={item.name}
                      width={71}
                      height={71}
                      className="inline-block m-auto absolute test-pos"
                    /> */}

                    {/* Comment */}
                    <h4 className="text-base font-medium text-testColor my-4">
                      {displayedComment}
                      {shouldTruncate && (
                        <button
                          onClick={() => this.toggleExpand(i)}
                          className="text-blue-500 ml-2 hover:underline focus:outline-none"
                        >
                          {isExpanded ? "See less" : "See more"}
                        </button>
                      )}
                    </h4>

                    <hr style={{ color: "lightgrey" }} />

                    {/* Name and stars */}
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-base font-medium pt-4 pb-2">
                          {item.name}
                        </h3>
                        <h3 className="text-xs font-medium pb-2 opacity-50">
                          {item.profession}
                        </h3>
                      </div>
                      {this.renderStars(item.rating)}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
