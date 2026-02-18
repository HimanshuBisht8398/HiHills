"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Transportation.",
        imgSrc: "/images/aboutus/Transportation.png",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    },
    {
        heading: "Adventure Activities.",
        imgSrc: "/images/aboutus/Adventure.png",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    },
    {
       heading: "Treks.",
       imgSrc: "/images/aboutus/Trek.png",
       paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
       link: 'Learn more'
   },
    {
        heading: "Uttrakhand Char Dham Yatra.",
        imgSrc: "/images/aboutus/chardham.png",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    }, {
        heading: "Hotel Booking.",
        imgSrc: "/images/aboutus/Hotel.png",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    },
       {
        heading: "Jeep Safari.",
        imgSrc: "/images/aboutus/Junglesafari.png",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    }
]

const Aboutus = () => {
    const [index, setIndex] = useState<number>(0);
    const [slidesToShow, setSlidesToShow] = useState<number>(3);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const intervalRef = useRef<number | null>(null);

    // update slidesToShow based on window width
    useEffect(() => {
        const update = () => {
            if (typeof window === 'undefined') return;
            const w = window.innerWidth;
            if (w >= 1024) setSlidesToShow(3);
            else if (w >= 640) setSlidesToShow(2);
            else setSlidesToShow(1);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    // auto-advance
    useEffect(() => {
        const maxIndex = Math.max(0, Aboutdata.length - slidesToShow);
        if (index > maxIndex) setIndex(0);
    }, [slidesToShow]);

    useEffect(() => {
        if (isPaused) return;
        // use window.setInterval so that TS knows the return type is number
        intervalRef.current = window.setInterval(() => {
            setIndex((prev) => {
                const maxIndex = Math.max(0, Aboutdata.length - slidesToShow);
                return prev >= maxIndex ? 0 : prev + 1;
            });
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [slidesToShow, isPaused]);

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Know more about our Services.</h4>

                {/* Carousel wrapper */}
                <div
                    className="relative overflow-hidden my-16"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className="flex transition-transform duration-700"
                        style={{
                            transform: `translateX(-${(index * 100) / slidesToShow}%)`,
                        }}
                    >
                        {Aboutdata.map((item, i) => (
                            <div
                                key={i}
                                className='flex-shrink-0 px-4'
                                style={{ width: `${100 / slidesToShow}%` }}
                            >
                                <div className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                                    <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                                    <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                                    <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                        {item.link}
                                        <ChevronRightIcon width={20} height={20} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* simple indicators */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 flex gap-2">
                        {Array.from({ length: Math.max(1, Aboutdata.length - slidesToShow + 1) }).map((_, ii) => (
                            <button
                                key={ii}
                                onClick={() => setIndex(ii)}
                                className={`w-3 h-3 rounded-full ${ii === index ? 'bg-blue' : 'bg-gray-300'}`}
                                aria-label={`Go to slide ${ii + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;