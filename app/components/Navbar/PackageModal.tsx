"use client"
import React from "react"

interface Props {
  open: boolean
  onClose: () => void
  title: string
  image: string
  description: string
}

const PackageModal = ({ open, onClose, title, image, description }: Props) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center">
      <div className="bg-white rounded-2xl w-[600px] p-4 relative">

        <button
          className="absolute right-4 top-2 text-2xl"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={image}
          alt={title}
          className="rounded-xl h-[260px] w-full object-cover"
        />

        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>

          <button
            className="bg-black text-white px-6 py-2 rounded-full"
            onClick={() => {
              // close the package modal and open the contact form elsewhere
              try {
                onClose()
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new Event('openContactForm'))
                }
              } catch (e) {
                // fail silently
              }
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default PackageModal
