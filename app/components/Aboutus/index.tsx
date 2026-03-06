"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Transportation.",
        imgSrc: "/images/aboutus/Transportation.png",
        paragraph: 'We provide reliable and comfortable transportation services to make your journey smooth and hassle-free. From airport pickups and local transfers to complete travel arrangements for tours and treks, we ensure safe, timely, and convenient travel so you can focus on enjoying your trip.',
    },
    {
        heading: "Adventure Activities.",
        imgSrc: "/images/aboutus/Adventure.png",
        paragraph: 'We offer thrilling adventure activities to make your trip truly unforgettable. From exciting river rafting and jet skiing to peaceful boating, kayaking, breathtaking hot air balloon rides and many more, there’s something for every adventure lover. Whether you seek adrenaline or scenic fun, we ensure safe, well-organized, and memorable experiences every time.',
    },
    {
       heading: "Treks.",
       imgSrc: "/images/aboutus/Trek.png",
       paragraph: 'We offer unforgettable trekking experiences across summer, monsoon, and winter — each season bringing its own unique charm. From clear skies and alpine views in summer, to lush green trails in monsoon, and snow-covered landscapes in winter, every trek is carefully guided to ensure safety, adventure, and memories that last a lifetime.',
   },
    {
        heading: "Uttrakhand Char Dham Yatra.",
        imgSrc: "/images/aboutus/chardham.png",
        paragraph: 'Experience the sacred Char Dham Yatra in the serene mountains of Uttarakhand — a spiritually enriching journey to the four holy shrines: Kedarnath, Badrinath, Gangotri, & Yamunotri. This divine pilgrimage offers peace, devotion,and a once-in-a-lifetime spiritual experience.',
    }, {
        heading: "Hotel Booking.",
        imgSrc: "/images/aboutus/Hotel.png",
        paragraph: 'We offer seamless hotel booking services to ensure a comfortable and stress-free stay throughout your journey. From budget-friendly accommodations to premium stays, we carefully select hotels that provide comfort, safety, and convenience — so you can relax and enjoy your trip with complete peace of mind.',
    },
       {
        heading: "Jeep Safari.",
        imgSrc: "/images/aboutus/Junglesafari.png",
        paragraph: 'Experience the thrill of a Jeep Safari, where adventure meets the wild. Explore dense forests, scenic landscapes, and wildlife in their natural habitat with our safe and guided safari experiences. Perfect for nature lovers and adventure seekers, our Jeep Safaris offer an exciting and unforgettable journey into the wilderness',
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
            {/* <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'> */}
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
                                {/* if this card is the Treks card, link to /treks page, otherwise keep Book Now behaviour */}
                                {item.heading && item.heading.toLowerCase().includes('trek') ? (
                                    <Link href="/treks" className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group block'>
                                        <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                                        <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                                        <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                                        <div className='text-lg font-semibold group-hover:text-white text-blue hover-underline flex items-center gap-2'>
                                            Book Now
                                            <ChevronRightIcon width={20} height={20} />
                                        </div>
                                    </Link>
                                ) : item.heading && item.heading.toLowerCase().includes('advent') ? (
                                    <Link href="/adventure" className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group block'>
                                        <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                                        <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                                        <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                                        <div className='text-lg font-semibold group-hover:text-white text-blue hover-underline flex items-center gap-2'>
                                            See Packages
                                            <ChevronRightIcon width={20} height={20} />
                                        </div>
                                    </Link>
                                ) : item.heading && item.heading.toLowerCase().includes('hotel') ? (
                                    <Link href="/hotels" className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group block'>
                                        <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                                        <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                                        <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                                        <div className='text-lg font-semibold group-hover:text-white text-blue hover-underline flex items-center gap-2'>
                                            See Packages
                                            <ChevronRightIcon width={20} height={20} />
                                        </div>
                                    </Link>
                                ) : item.heading && (item.heading.toLowerCase().includes('char') && item.heading.toLowerCase().includes('dham') || item.heading.toLowerCase().includes('chardham')) ? (
                                    <Link href="/chardham" className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group block'>
                                        <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                                        <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                                        <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                                        <div className='text-lg font-semibold group-hover:text-white text-blue hover-underline flex items-center gap-2'>
                                            See Packages
                                            <ChevronRightIcon width={20} height={20} />
                                        </div>
                                    </Link>
                                ) : item.heading && (item.heading.toLowerCase().includes('jeep') || item.heading.toLowerCase().includes('safari')) ? (
                                    <Link href="/jeep-safari" className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group block'>
                                        <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                                        <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                                        <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                                        <div className='text-lg font-semibold group-hover:text-white text-blue hover-underline flex items-center gap-2'>
                                            See Packages
                                            <ChevronRightIcon width={20} height={20} />
                                        </div>
                                    </Link>
                                ) : (
                                    <div className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                                        <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                                        <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                                        <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                                        <button
                                            type="button"
                                            className='text-lg font-semibold group-hover:text-white text-blue hover-underline flex items-center gap-2'
                                            onClick={() => {
                                                try {
                                                    if (typeof window !== 'undefined') {
                                                        window.dispatchEvent(new Event('openContactForm'))
                                                    }
                                                } catch (e) {
                                                    // ignore
                                                }
                                            }}
                                        >
                                            Book Now
                                            <ChevronRightIcon width={20} height={20} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* simple indicators */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 flex gap-2">
                        {Array.from({ length: Math.max(1, Aboutdata.length - slidesToShow + 1) }).map((_, ii) => (
                            <button
                                key={ii}
                                onClick={() => setIndex(ii)}
                                // className={`w-3 h-3 rounded-full ${ii === index ? 'bg-blue' : 'bg-gray-300'}`}
                                aria-label={`Go to slide ${ii + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Aboutus;