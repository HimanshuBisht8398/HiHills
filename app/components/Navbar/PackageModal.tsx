"use client"
import React from "react"
import Image from "next/image"

interface Props {
  open: boolean
  onClose: () => void
  title: string
  // optional fields to support different usages
  items?: string[]
  image?: string
  description?: string
}

const PackageModal = ({ open, onClose, title, items, image, description }: Props) => {
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

        {items && items.length > 0 ? (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <div className="grid grid-cols-2 gap-3">
              {items.map((i) => (
                <div key={i} className="border p-3 rounded hover:bg-orange-50 cursor-pointer">
                  {i}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {image && (
              <div className="relative h-[260px] w-full rounded-xl overflow-hidden">
                <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 600px" className="object-cover" />
              </div>
            )}
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              {description && <p className="text-gray-600 mb-4">{description}</p>}

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
          </>
        )}
      </div>
    </div>
  )
}

export default PackageModal
