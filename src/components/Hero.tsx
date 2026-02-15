"use client";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const vehicles = [
  {
    name: "Hatchback",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=2070",
  },
  {
    name: "Sedan",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
  },
  {
    name: "SUV",
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2070",
  },
  {
    name: "Tempo Traveller",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2070",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % vehicles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556122071-e404eaedb77f?q=80&w=2070')",
        }}
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-24 grid md:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Reliable Cab & Tempo Traveller Service
          </h1>

          <p className="text-lg mb-2">
            आपकी हर यात्रा के लिए भरोसेमंद Taxi Service
          </p>

          <p className="text-gray-200 mb-6">
            Local, Airport & Outstation Taxi Available 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/919999999999"
              className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700"
            >
              WhatsApp Booking
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-200">
            <span>✔ Clean Cars</span>
            <span>✔ Professional Drivers</span>
            <span>✔ Best Price</span>
          </div>
        </div>

        {/* Vehicle Slider */}
        <div className="relative bg-white/10 backdrop-blur-md p-4 rounded-xl">
          <img
            src={vehicles[index].image}
            alt={vehicles[index].name}
            className="w-full h-75 md:h-95 object-cover rounded-lg transition-all duration-500"
          />

          <div className="text-center mt-3 font-semibold text-lg">
            {vehicles[index].name}
          </div>
        </div>

      </div>
    </section>
  );
}