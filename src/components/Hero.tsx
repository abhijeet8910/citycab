"use client";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const vehicles = [
  {
    name: "Rickshaw",
    image:
      "https://images.unsplash.com/photo-1665206221135-4a2c62677bc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kYWluJTIwY2Fic3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Sedan",
    image:
      "https://images.unsplash.com/photo-1612563893490-d86ed296e5e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1dnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "SUV",
    image:
      "https://images.unsplash.com/photo-1705624843697-4461f9dce482?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1dnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Tempo Traveller",
    image:
      "https://media.istockphoto.com/id/950577080/photo/the-autorickshaw-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=9L8MEx6u944k1GtuUcup6p_b2EFYWJoCFUiZM2N7Yh4=",
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
            // "url('https://images.unsplash.com/photo-1661061968438-97ab151ac32e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGluZGFpbiUyMGNhYnN8ZW58MHx8MHx8fDA%3D')",
           "url('https://images.unsplash.com/photo-1724612703809-32391fee29b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGNhYnxlbnwwfHwwfHx8MA%3D%3D')" 
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
        <div className="relative bg-white/10  rounded-xl">
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