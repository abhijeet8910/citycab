import React from "react";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function StickyBookingBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden z-50">
      <div className="grid grid-cols-2">
        <Link
          href="tel:+919999999999"
          className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 font-semibold"
        >
          <Phone size={18} />
          Call Now
        </Link>

        <Link
          href="https://wa.me/919999999999"
          className="flex items-center justify-center bg-green-600 text-white py-4 font-semibold"
        >
          WhatsApp Booking
        </Link>
      </div>
    </div>
  );
}