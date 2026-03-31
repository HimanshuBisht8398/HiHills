"use client"

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { getApiUrl } from '@/app/lib/api'

interface FormValues {
  input1: string
  input2: string
  input3: string
  input4: string
  input5: string
  input6: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

type OpenContactFormDetail = {
  destination?: string
  district?: string
}

const Contactusform = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({})

  const [inputValues, setInputValues] = useState<FormValues>({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: ''
  })

  const validateField = (name: keyof FormValues, value: string) => {
    const trimmedValue = value.trim()

    switch (name) {
      case 'input1':
        if (!trimmedValue) return 'Name is required.'
        if (trimmedValue.length < 2) return 'Name must be at least 2 characters.'
        return ''
      case 'input2':
        if (!trimmedValue) return 'Email is required.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) return 'Enter a valid email address.'
        return ''
      case 'input3':
        if (!trimmedValue) return 'Mobile number is required.'
        if (!/^\d{10}$/.test(trimmedValue)) return 'Enter a valid 10-digit mobile number.'
        return ''
      case 'input4':
        if (!trimmedValue) return 'Destination is required.'
        if (trimmedValue.length < 2) return 'Destination must be at least 2 characters.'
        return ''
      case 'input5': {
        if (!trimmedValue) return 'Number of persons is required.'
        const persons = Number(trimmedValue)
        if (!Number.isInteger(persons) || persons < 1) return 'Enter at least 1 person.'
        if (persons > 20) return 'Please enter 20 or fewer persons.'
        return ''
      }
      case 'input6':
        if (!trimmedValue) return 'Date of journey is required.'
        if (trimmedValue < today) return 'Date of journey cannot be in the past.'
        return ''
      default:
        return ''
    }
  }

  const validateForm = (values: FormValues) => {
    const nextErrors: FormErrors = {}

    ;(Object.keys(values) as Array<keyof FormValues>).forEach((key) => {
      const error = validateField(key, values[key])
      if (error) {
        nextErrors[key] = error
      }
    })

    return nextErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const fieldName = name as keyof FormValues
    setInputValues(prev => ({ ...prev, [fieldName]: value }))

    if (touched[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: validateField(fieldName, value)
      }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const fieldName = name as keyof FormValues

    setTouched(prev => ({ ...prev, [fieldName]: true }))
    setErrors(prev => ({
      ...prev,
      [fieldName]: validateField(fieldName, value)
    }))
  }

  const resetForm = () => {
    setInputValues({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: ''
    })
    setErrors({})
    setTouched({})
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validateForm(inputValues)
    setErrors(nextErrors)
    setTouched({
      input1: true,
      input2: true,
      input3: true,
      input4: true,
      input5: true,
      input6: true
    })
    if (Object.keys(nextErrors).length > 0) return

    setSubmitError('')
    setIsSubmitting(true)

    try {
      const response = await fetch(getApiUrl('/customers'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: inputValues.input1,
          email: inputValues.input2,
          mobileNumber: inputValues.input3,
          vehicleType: 'Not specified',
          pickup: '',
          destination: inputValues.input4,
          dateofjourney: new Date(inputValues.input6).toISOString(),
          numberOfPersons: Number(inputValues.input5),
          metadata: {}
        })
      })

      if (!response.ok) {
        throw new Error('Failed to send inquiry')
      }

      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setIsOpen(false)
        resetForm()
      }, 3500)
    } catch (error) {
      console.error('Customer inquiry submission failed:', error)
      setSubmitError('Unable to send your inquiry right now. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isDisabled = Object.values(inputValues).some(
    value => value.trim() === ''
  )

  const openModal = () => {
    setSubmitError('')
    setIsOpen(true)
  }
  const closeModal = () => {
    setSubmitError('')
    setIsOpen(false)
  }

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
                          handleBlur={handleBlur}
                          error={touched.input1 ? errors.input1 : undefined}
                          placeholder="Your Name..." />

                        <InputField label="Your Email" name="input2" type="email"
                          value={inputValues.input2} handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={touched.input2 ? errors.input2 : undefined}
                          placeholder="xyz@email.com" />

                        <InputField label="Your Mobile" name="input3" type="tel"
                          value={inputValues.input3} handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={touched.input3 ? errors.input3 : undefined}
                          placeholder="Enter Your Number" />

                        <InputField label="Destination" name="input4" type="text"
                          value={inputValues.input4} handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={touched.input4 ? errors.input4 : undefined}
                          placeholder="Enter your destination" />

                        <InputField label="Number of Persons" name="input5" type="number"
                          value={inputValues.input5} handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={touched.input5 ? errors.input5 : undefined}
                          placeholder="Enter number of persons" min="1" />

                        <InputField label="Date of Journey" name="input6" type="date"
                          value={inputValues.input6} handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={touched.input6 ? errors.input6 : undefined}
                          min={today} />

                      </div>

                      {submitError ? (
                        <p className="mt-4 text-sm text-red-600">{submitError}</p>
                      ) : null}

                      <button
                        type="submit"
                        disabled={isDisabled || isSubmitting}
                        className="mt-8 py-3 px-5 w-full text-white rounded-lg bg-blue disabled:opacity-50"
                      >
                        {isSubmitting ? 'Sending...' : 'Send inquiry'}
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
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  placeholder?: string
  min?: string
  error?: string
}

const InputField = ({
  label,
  name,
  type,
  value,
  handleChange,
  handleBlur,
  placeholder,
  min,
  error
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
      onBlur={handleBlur}
      required
      min={min}
      placeholder={placeholder}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${name}-error` : undefined}
      className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${
        error
          ? 'border-red-500 bg-red-50 focus:ring-red-300'
          : 'border-gray-300 focus:ring-indigo-500'
      }`}
    />
    {error ? (
      <p id={`${name}-error`} className="mt-2 text-sm text-red-600">
        {error}
      </p>
    ) : null}
  </div>
)

export default Contactusform
