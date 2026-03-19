"use client";

import React from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "917617610909";
const CALL_NUMBER = "+917617610909";
const DEFAULT_MESSAGE =
  "Hello Hi Hills, I would like to know more about your travel packages.";

export default function WhatsappChatButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <Link
        href={`tel:${CALL_NUMBER}`}
        aria-label="Call Hi Hills"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1A2B49] text-white shadow-2xl transition hover:scale-105 hover:bg-black"
      >
        <PhoneCall size={22} />
      </Link>

      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105 hover:bg-[#1fb85a]"
      >
        {React.createElement(FaWhatsapp as React.ComponentType<{ size?: number }>, {
          size: 30,
        })}
      </Link>
    </div>
  );
}
