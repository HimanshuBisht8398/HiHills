"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import './index.css'

const FAQ_DATA = [
    {
        question: "Why Choose Us ?",
        items: ["Experienced local guides", "Safe and well-planned itineraries", "Affordable packages", "24/7 travel support", "Comfortable stays & transportation"]
    },
    {
        question: "Visit Popular Pilgrim Places",
        items: ["Kedarnath", "Badrinath", "Chardham", "Panch-Kedar", "Hemkund Sahib", "Vaishno Devi"]
    },
    {
        question: "Explore hidden gems of Uttarakhand",
        items: ["Munsiyari", "Ranikhet", "Auli", "Chakrata", "Binsar", "Mukteshwar"]
    },
    {
        question: "Explore hidden Treks of Uttarakhand",
        items: ["Khaliya Top", "Roop kund", "Kedarkantha", "Har Ki Dun", "Pindari Glacier", "Valley of Flowers"]
    },
    {
        question: "Explore hidden Waterfalls of Uttarakhand",
        items: ["Bhalu Garh Waterfall", "Dhokani Waterfall", "Pari tal Waterfall", "Devkund Waterfall", "Birthi Waterfall"]
    },
    {
        question: "24/7 Safety & Support",
        items: ["Experienced local guides", "Safe and well-planned itineraries", "Affordable packages", "24/7 travel support", "Comfortable stays & transportation"]
    }
]

const FAQ = () => {
    // 0 means the first one is open by default
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>
            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white mb-12'>
                Benefits of Our Services
            </h2>
            
            <div className="w-full px-4">
                {FAQ_DATA.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div key={index} className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-2 px-6 mb-5">
                            {/* Logic: Only show the content if openIndex matches current index */}
                            <Disclosure>
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium focus:outline-none"
                                >
                                    <span>{faq.question}</span>
                                    <ChevronUpIcon
                                        className={`${isOpen ? 'rotate-180' : ''} h-6 w-6 text-purple-500 transition-transform duration-200`}
                                    />
                                </button>

                                {/* We use a manual div for the panel to control the 'one-at-a-time' behavior perfectly */}
                                <div 
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-4 pt-4 text-base text-black font-normal opacity-70">
                                        <ul className="travel-features list-disc ml-5 space-y-2">
                                            {faq.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Disclosure>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default FAQ;