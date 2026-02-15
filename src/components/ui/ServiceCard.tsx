"use client";
import { Phone } from "lucide-react";

type cardProps = {
    title: string;
    description: string;
    image: string;
}
export default function ServiceCard({
  title,
  description,
  image,
}:cardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">
            {description}
          </p>
        </div>

        {/* Booking Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href="tel:+919999999999"
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            <Phone size={16} />
            Call
          </a>

          <a
            href="https://wa.me/919999999999"
            className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}