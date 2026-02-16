"use client";
import PriceCard from "./ui/PriceCard";

const vehicles = [
  {
    title: "Maruti Suzuki",
    passengers: "4 Seats",
    luggage: "2 Bags",
    price: "11/km",
    image:
      "https://images.unsplash.com/photo-1605270396307-d00ba5cda1d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3V6dWtpJTIwY2FyfGVufDB8fDB8fHww",
  },
  {
    title: "Sedan",
    passengers: "4 Seats",
    luggage: "3 Bags",
    price: "13/km",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
  },
  {
    title: "SUV",
    passengers: "6–7 Seats",
    luggage: "5 Bags",
    price: "18/km",
    image:
      "https://plus.unsplash.com/premium_photo-1698071712692-325ef15ef312?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3V2fGVufDB8fDB8fHww",
  },
  {
    title: "Tempo Traveller",
    passengers: "12–17 Seats",
    luggage: "10 Bags",
    price: "25/km",
    image:
      "https://media.istockphoto.com/id/1428046828/photo/indian-man-drives-auto-rickshaw-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=8qdiUAxN7wxWs9xRqdd7t5_OBsJSgaduwJGRmxDYD7E=",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Vehicle Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the right vehicle for your trip at affordable pricing.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <PriceCard key={index} {...vehicle} />
          ))}
        </div>

      </div>
    </section>
  );
}