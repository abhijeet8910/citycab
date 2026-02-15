"use client";
import { Phone, Users, Briefcase } from "lucide-react";


type cardProps = {
    title: string;
    image: string;
    passengers: string;
    luggage: string;
    price:string;
}
export default function PriceCard({
  title,
  image,
  passengers,
  luggage,
  price,
}: cardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      {/* Vehicle Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col">

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        {/* Capacity */}
        <div className="flex justify-between text-gray-600 text-sm mb-4">
          <span className="flex items-center gap-1">
            <Users size={16} /> {passengers}
          </span>

          <span className="flex items-center gap-1">
            <Briefcase size={16} /> {luggage}
          </span>
        </div>

        {/* Price */}
        <div className="text-2xl font-bold mb-4 text-blue-600">
          ₹{price}
          <span className="text-sm text-gray-500 font-normal">
            {" "}starting
          </span>
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