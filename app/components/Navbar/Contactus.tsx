"use client"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';


const Contactusform = () => {
    let [isOpen, setIsOpen] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: ''
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setInputValues(prevState => ({ ...prevState, [name]: value }));
    }

    const handleClick = () => {
        // Show success UI
        setIsSubmitted(true)

        // Optionally auto-close after a short delay
        setTimeout(() => {
            setIsSubmitted(false)
            setIsOpen(false)
            // reset form values
            setInputValues({ input1: '', input2: '', input3: '', input4: '' })
        }, 3500)
    }

    // FORM SUBMIT
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // form is valid if none of the fields are empty
        const isDisabled = Object.values(inputValues).some((value) => value === '')
        if (isDisabled) return
        handleClick()
    };

    const isDisabled = Object.values(inputValues).some((value) => value === '');


    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    // listen for a global event so other components (like PackageModal) can open this form
    useEffect(() => {
        const handler = () => setIsOpen(true)
        if (typeof window !== 'undefined') {
            window.addEventListener('openContactForm', handler as EventListener)
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('openContactForm', handler as EventListener)
            }
        }
    }, [])

    return (
        <>
            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
                {/* <div className='lg:hidden'>
                    <button type="button" className='bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded' onClick={openModal}>
                        Contact Us
                    </button>
                </div> */}
                <div className='hidden lg:block'>
                    <button type="button" className='justify-end text-xl font-semibold bg-transparent py-2 px-2 lg:px-4 navbutton rounded-full hover:bg-navyblue hover:text-white' onClick={openModal}>
                        Contact Us
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                                        <div className="flex flex-shrink-0 items-center justify-center">
                                            <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                                Book Now!!
                                            </Link>
                                        </div>
                                        <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">The World is Calling. Answer in a Window Seat.</p>
                                        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                                            {isSubmitted ? (
                                                <div className="flex flex-col items-center justify-center py-8">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <h3 className="text-xl font-semibold mt-4">Message sent</h3>
                                                    <p className="text-center text-gray-600 mt-2">Our team will shortly reach out to you.</p>
                                                </div>
                                            ) : (
                                                <>
                                                    <div>
                                                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                                                        <input
                                                            id="text"
                                                            name="input1"
                                                            value={inputValues.input1}
                                                            onChange={handleChange}
                                                            type="text"
                                                            required
                                                            className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Your Name..."
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                                        <input
                                                            id="email"
                                                            name="input2"
                                                            value={inputValues.input2}
                                                            onChange={handleChange}
                                                            type="email"
                                                            required
                                                            className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="xyz@email.com"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Mobile</label>
                                                        <input
                                                            id="number"
                                                            name="input3"
                                                            value={inputValues.input3}
                                                            onChange={handleChange}
                                                            type="tel"
                                                            required
                                                            className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Enter Your Number"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="destination" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter Your Destination</label>
                                                        <input
                                                            id="destination"
                                                            name="input4"
                                                            value={inputValues.input4}
                                                            onChange={handleChange}
                                                            type="text"
                                                            required
                                                            className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Enter your destination"
                                                        />
                                                    </div>
                                                </>
                                            )}
                                            {/* <div className="sm:col-span-2">
                                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Trip Description</label>
                                                <textarea
                                                    id="message"
                                                    name="input3"
                                                    value={inputValues.input3}
                                                    onChange={handleChange}
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Leave a comment..."></textarea>
                                            </div> */}
                                            <button type="submit"
                                                onClick={handleClick}
                                                disabled={isDisabled}
                                                className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>

                                        </form>

                                    </div>

                                    {/* <div className='flex justify-end'>
                                        <button type="button"
                                            onClick={closeModal}
                                            className="py-3 px-5 mt-2 text-sm font-medium w-50 text-center text-white rounded-lg bg-red hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Close</button>
                                    </div> */}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Contactusform;
