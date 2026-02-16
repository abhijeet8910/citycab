"use client";
import { useState } from "react";

const vehicles = [
  {
    title: "Maruti Suzuki",
    seats: 4,
    luggage: "2 Bags",
    rate: 11,
    image:
      "https://images.unsplash.com/photo-1605270396307-d00ba5cda1d0?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Sedan",
    seats: 4,
    luggage: "3 Bags",
    rate: 13,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
  },
  {
    title: "SUV",
    seats: 7,
    luggage: "5 Bags",
    rate: 18,
    image:
      "https://plus.unsplash.com/premium_photo-1698071712692-325ef15ef312?w=600",
  },
  {
    title: "Tempo Traveller",
    seats: 17,
    luggage: "10 Bags",
    rate: 25,
    image:
      "https://media.istockphoto.com/id/1428046828/photo/indian-man-drives-auto-rickshaw-india.webp",
  },
  {
    title: "Innova Crysta",
    seats: 7,
    luggage: "6 Bags",
    rate: 20,
    image:
      "https://images.unsplash.com/photo-1626668893632-6f3a4466d0b5?w=600",
  },
  {
    title: "Mini Bus",
    seats: 26,
    luggage: "15 Bags",
    rate: 35,
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600",
  },
];

export default function FareCalculator() {
  const [distance, setDistance] = useState("");
  const [passengers, setPassengers] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const calculateFare = () => {
    if (!distance || !passengers) return;

    const km = Number(distance);
    const pax = Number(passengers);

    const recommended = vehicles
      .filter((v) => v.seats >= pax)
      .map((v) => ({
        ...v,
        fare: v.rate * km,
      }));

    setResults(recommended);
  };

  return (
    <section id="fare" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Fare Calculator
        </h2>

        <p className="text-gray-600 mb-8">
          Enter trip details to see recommended vehicles.
        </p>

        <div className="grid gap-4 md:grid-cols-3 mb-10">
          <input
            type="number"
            placeholder="Distance (KM)"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Passengers"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <button
            onClick={calculateFare}
            className="bg-blue-600 text-white rounded-lg"
          >
            Show Fare
          </button>
        </div>

        {/* Vehicle Results */}
        {results.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((v, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={v.image}
                  alt={v.title}
                  className="h-40 w-full object-cover"
                />

                <div className="p-4 text-left">
                  <h3 className="font-semibold text-lg">
                    {v.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    Seats: {v.seats}
                  </p>
                  <p className="text-sm text-gray-600">
                    Luggage: {v.luggage}
                  </p>
                  <p className="text-sm text-gray-600">
                    Rate: ₹{v.rate}/km
                  </p>

                  <div className="mt-3 font-semibold text-lg">
                    ₹ {v.fare}
                  </div>

                  <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="text-sm text-gray-500 mt-5">
          *Toll, parking & driver allowance extra.
        </p>
      </div>
    </section>
  );
}