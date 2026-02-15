"use client";
import PriceCard from "./ui/PriceCard";

const vehicles = [
  {
    title: "Hatchback",
    passengers: "4 Seats",
    luggage: "2 Bags",
    price: "11/km",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=2070",
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
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2070",
  },
  {
    title: "Tempo Traveller",
    passengers: "12–17 Seats",
    luggage: "10 Bags",
    price: "25/km",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2070",
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