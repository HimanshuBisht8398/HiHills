"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MapPin, Utensils, Bus, User, Bed } from "lucide-react";

interface DataType {
  heading: string;
  heading2: string;
  date: string;
  Price: string;
  imgSrc: string;
  name: string;
  slug: string;
  route?: string;
  inclusions: string[];
}

const postData: DataType[] = [
  {
    heading: "Kedarnath Dham",
    heading2: "Spiritual Himalayan Journey",
    name: "Hi Hills Travel",
    Price: "₹ 5000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/wework/kedarnath.jpg",
    slug: "kedarnath",
    route: "Haridwar ⇄ Haridwar",
    inclusions: ["meals", "stay", "transport", "guide"],
  },
  {
    heading: "Badrinath Dham",
    heading2: "Sacred Vishnu Temple",
    name: "Hi Hills Travel",
    Price: "₹ 5000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Badrinath_Temple.jpg",
    slug: "badrinath",
    route: "Haridwar ⇄ Haridwar",
    inclusions: ["meals", "stay", "transport", "guide"],
  },
  {
    heading: "Kedarnath & Badrinath",
    heading2: "Do Dham Yatra",
    name: "Hi Hills Travel",
    Price: "₹ 12000/person",
    slug: "kedarnath-badrinath",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/KedarnathBarinath.webp",
    route: "Haridwar ⇄ Haridwar",
      inclusions: ["meals", "stay", "transport", "guide"],
  },
  {
    heading: "Gangotri Dham",
    heading2: "Origin of Holy Ganga",
    name: "Hi Hills Travel",
    Price: "₹ 6000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Gangotri.webp",
    slug: "gangotri",
    route: "Haridwar ⇄ Haridwar",
    inclusions: ["meals", "stay", "transport", "guide"],
  },
  {
    heading: "Yamunotri Dham",
    heading2: "Source of Yamuna River",
    name: "Hi Hills Travel",
    Price: "₹ 6000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Yamunotri.webp",
    slug: "yamunotri",
    route: "Haridwar ⇄ Haridwar",
    inclusions: ["meals", "stay", "transport", "guide"],
  },
  {
    heading: "Gangotri & Yamunotri Dham",
    heading2: "Source of Yamuna River",
    name: "Hi Hills Travel",
    Price: "₹ 6000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Gangotriyumnotri.webp",
    slug: "gangotri-yamunotri",
    route: "Haridwar ⇄ Haridwar",
    inclusions: ["meals", "stay", "transport", "guide"],
  },
  {
    heading: "Adi Kailash & Om Parvat ",
    heading2: "Spiritual Expedition to Adi Kailash & Om Parvat",
    name: "Hi Hills Travel",
    Price: "₹ 6000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/AdiOm.jpg",
    slug: "adi-kailash-om-parvat",
    route: "Kathgodam ⇄ Kathgodam",
      inclusions: ["meals", "stay", "transport", "guide"],
  },
  {
    heading: "Rudranath Temple",
    heading2: "Spiritual Expedition to Rudranath Temple",
    name: "Hi Hills Travel",
    Price: "₹ 6000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Rudranath.jpeg",
    slug: "rudranath",
    route: "Haridwar ⇄ Haridwar",
      inclusions: ["meals", "stay", "transport", "guide"],
  },
  {
    heading: "Tungnath Temple",
    heading2: "Spiritual Expedition to Tungnath Temple",
    name: "Hi Hills Travel",
    Price: "₹ 6000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/wework/Tungnath.jpeg",
    slug: "tungnath",
    route: "Haridwar ⇄ Haridwar",
      inclusions: ["meals", "stay", "transport", "guide"],
  },
  {
    heading: "Madhyamaheshwar Temple",
    heading2: "Spiritual Expedition to Madhyamaheshwar Temple",
    name: "Hi Hills Travel",
    Price: "₹ 6000/person",
    date: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Madmaheshwar.jpg",
    slug: "madhyamaheshwar",
    route: "Haridwar ⇄ Haridwar",
      inclusions: ["meals", "stay", "transport", "guide"],
  },
  {
    heading: "Panchachuli Base Camp",
    heading2: "Journey to the Five Peaks of Kumaon",
    name: "Hi Hills Travel",
    Price: "₹ 15000/person",
    date: "Best Season: May - June, Sept - Oct",
    imgSrc: "/images/aboutus/Panchachuli-Base-Camp.jpg",
    slug: "panchachuli-base-camp",
    route: "Kathgodam ⇄ Kathgodam",
    inclusions: ["meals", "stay", "transport", "guide"],
  },
  {
    heading:"valley of flowers",
    heading2: "Explore the Blooming Paradise of the Himalayas",
    name: "Hi Hills Travel",
    Price: "₹ 8000/person",
    date: "Best Season: July - Aug",
    imgSrc: "/images/aboutus/Valleyofflowers.jpg",
    slug: "valley-of-flowers",
    route: "Rishikesh ⇄ Rishikesh",
    inclusions: ["meals", "stay", "transport", "guide"],
  }
];

export default function MultipleItems() {
  const router = useRouter();

  // Typing effect
  // const [displayText, setDisplayText] = useState("");
  // const [index, setIndex] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  const text = "Our Popular Packages.";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const speed = isDeleting ? 50 : 120;

  //   const timeout = setTimeout(() => {
  //     if (!isDeleting && index < text.length) {
  //       setDisplayText(text.slice(0, index + 1));
  //       setIndex(index + 1);
  //     } else if (!isDeleting && index === text.length) {
  //       setIsDeleting(true);
  //     } else if (isDeleting && index > 0) {
  //       setDisplayText(text.slice(0, index - 1));
  //       setIndex(index - 1);
  //     } else if (isDeleting && index === 0) {
  //       setIsDeleting(false);
  //     }
  //   }, index === text.length ? 1500 : speed);

  //   return () => clearTimeout(timeout);
  // }, [index, isDeleting]);

  useEffect(() => {
    // Check if the current typed text is shorter than the full text
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 120); // Typing speed

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);
    const NextArrow = ({ onClick }: any) => (
      <button
        onClick={onClick}
        className="
          absolute -right-10 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 flex items-center justify-center
          rounded-full bg-white/90 backdrop-blur-md
          shadow-xl border border-gray-200
          hover:bg-orange-500 hover:text-white
          transition-all duration-300 group
        "
      >
        <span className="text-xl font-bold group-hover:scale-110 transition">
          →
        </span>
      </button>
    );

    const PrevArrow = ({ onClick }: any) => (
      <button
        onClick={onClick}
        className="
          absolute -left-10 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 flex items-center justify-center
          rounded-full bg-white/90 backdrop-blur-md
          shadow-xl border border-gray-200
          hover:bg-orange-500 hover:text-white
          transition-all duration-300 group
        "
      >
        <span className="text-xl font-bold group-hover:scale-110 transition">
          ←
        </span>
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
  const inclusionIcons: Record<string, any> = {
  meals: Utensils,
  transport: Bus,
  guide: User,
  stay: Bed,
};
  return (
    <div className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="text-4xl sm:text-5xl font-bold h-16">
            {displayText}
            {/* <span className="border-r-4 border-black animate-pulse ml-1"></span> */}
          </h3>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {postData.map((item, i) => (
            <div key={i}>
              <div
                onClick={() => router.push(`/Itenary/${item.slug}`)}
                className="cursor-pointer m-3 rounded-3xl overflow-hidden shadow-xl bg-white"
              >
                <Image
                  src={item.imgSrc}
                  alt={item.heading}
                  width={400}
                  height={260}
                  className="w-full h-[260px] object-cover"
                />

                <div className="p-6">
                  <h4 className="text-xl font-bold">{item.heading}</h4>
                  <p className="text-gray-500 text-sm">{item.heading2}</p>

                  <div className="flex justify-between mt-4">
                    <span className="text-green-700 font-bold">
                      {item.Price}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/itinerary/${item.slug}`);
                      }}
                      className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm"
                    >
                      View
                    </button>
                  </div>
                  <div className="text-gray-500 text-sm mt-3">
                    📍 {item.route}
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    {item.date}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-green-700 font-bold">
                      Inclusions:-
                    </span>
    {item.inclusions.map((inc, i) => {
      const Icon = inclusionIcons[inc];
      return (
        <div
          key={i}
          className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full"
          title={inc}
        >
          {Icon && <Icon size={16} className="text-gray-700" />}
        </div>
      );
    })}
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