"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import './index.css'
const FAQ = () => {
    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>
            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'>Benefits of Our Services</h2>
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-2 px-6 mb-5">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Why Choose Us ?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    <ul className="travel-features">
                                        <li>Experienced local guides</li>
                                        <li>Safe and well-planned itineraries</li>
                                        <li>Affordable packages</li>
                                        <li>24/7 travel support</li>
                                        <li>Comfortable stays & transportation</li>
                                    </ul>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-2 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Visit Popular Pilgrim Places</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                                <ul className="travel-features">
                                                    <li>Kedarnath</li>
                                                    <li>Badrinath</li>
                                                    <li>Chardham</li>
                                                    <li>Panch-Kedar</li>
                                                    <li>Hemkund Sahib</li>
                                                    <li>Vaishno Devi</li>
                                                </ul>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-2 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Explore hidden gems of Uttarakhand</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                                <ul className="travel-features">
                                                    <li>Munsiyari</li>
                                                    <li>Ranikhet</li>
                                                    <li>Auli</li>
                                                    <li>Chakrata</li>
                                                    <li>Binsar</li>
                                                    <li>Mukteshwar</li>
                                                </ul>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                 <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-2 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Explore hidden Treks of Uttarakhand</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                                <ul className="travel-features">
                                                    <li>Khaliya Top</li>
                                                    <li>Roop kund</li>
                                                    <li>Kedarkantha</li>
                                                    <li>Har Ki Dun</li>
                                                    <li>Pindari Glacier</li>
                                                    <li>Valley of Flowers</li>
                                                </ul>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                 <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-2 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Explore hidden Waterfalls of Uttarakhand</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                                <ul className="travel-features">
                                                    <li>Bhalu Garh Waterfall</li>
                                                    <li>Dhokani Waterfall</li>
                                                    <li>Pari tal Waterfall</li>
                                                    <li>Devkund Waterfall</li>
                                                    <li>Birthi Waterfall</li>
                                                </ul>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-2 px-6">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span> 24/7 Safety & Support</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    <ul className="travel-features">
                                        <li>Experienced local guides</li>
                                        <li>Safe and well-planned itineraries</li>
                                        <li>Affordable packages</li>
                                        <li>24/7 travel support</li>
                                        <li>Comfortable stays & transportation</li>
                                    </ul>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            </div>
        </div>
    )
}

export default FAQ;