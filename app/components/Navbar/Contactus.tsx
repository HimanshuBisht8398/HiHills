"use client"

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'

interface FormValues {
  input1: string
  input2: string
  input3: string
  input4: string
  input5: string
  input6: string
}

type OpenContactFormDetail = {
  destination?: string
  district?: string
}

const Contactusform = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [inputValues, setInputValues] = useState<FormValues>({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValues(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isDisabled = Object.values(inputValues).some(
      value => value === ''
    )
    if (isDisabled) return

    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setIsOpen(false)
      setInputValues({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: ''
      })
    }, 3500)
  }

  const isDisabled = Object.values(inputValues).some(
    value => value === ''
  )

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<OpenContactFormDetail>
      const destination =
        customEvent.detail?.destination ||
        customEvent.detail?.district?.replace(/-/g, ' ')

      if (destination) {
        setInputValues(prev => ({
          ...prev,
          input4: destination
        }))
      }

      setIsOpen(true)
    }

    window.addEventListener('openContactForm', handler as EventListener)
    return () => {
      window.removeEventListener('openContactForm', handler as EventListener)
    }
  }, [])

  const today = new Date().toISOString().split('T')[0]

  return (
    <>
      <div className="hidden lg:block">
        <button
          type="button"
          className="text-xl font-semibold bg-transparent py-2 px-4 navbutton rounded-full hover:bg-navyblue hover:text-white"
          onClick={openModal}
        >
          Contact Us
        </button>
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
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl bg-white rounded-2xl p-8 shadow-xl">

                <div className="text-center mb-6">
                  <Link href="/" className="text-3xl font-semibold">
                    Book Now!!
                  </Link>
                  <p className="text-gray-500 mt-3">
                    The World is Calling. Answer in a Window Seat.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <h3 className="text-xl font-semibold mt-4">
                        Message sent successfully
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Our team will shortly reach out to you.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <InputField label="Your Name" name="input1" type="text"
                          value={inputValues.input1} handleChange={handleChange}
                          placeholder="Your Name..." />

                        <InputField label="Your Email" name="input2" type="email"
                          value={inputValues.input2} handleChange={handleChange}
                          placeholder="xyz@email.com" />

                        <InputField label="Your Mobile" name="input3" type="tel"
                          value={inputValues.input3} handleChange={handleChange}
                          placeholder="Enter Your Number" />

                        <InputField label="Destination" name="input4" type="text"
                          value={inputValues.input4} handleChange={handleChange}
                          placeholder="Enter your destination" />

                        <InputField label="Number of Persons" name="input5" type="number"
                          value={inputValues.input5} handleChange={handleChange}
                          placeholder="Enter number of persons" min="1" />

                        <InputField label="Date of Journey" name="input6" type="date"
                          value={inputValues.input6} handleChange={handleChange}
                          min={today} />

                      </div>

                      <button
                        type="submit"
                        disabled={isDisabled}
                        className="mt-8 py-3 px-5 w-full text-white rounded-lg bg-blue disabled:opacity-50"
                      >
                        Send inquiry
                      </button>
                    </>
                  )}

                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

interface InputProps {
  label: string
  name: string
  type: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  min?: string
}

const InputField = ({
  label,
  name,
  type,
  value,
  handleChange,
  placeholder,
  min
}: InputProps) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-900">
      {label}
    </label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      required
      min={min}
      placeholder={placeholder}
      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
)

export default Contactusform
