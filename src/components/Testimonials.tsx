"use client";
import React, { useEffect, useRef } from "react";
import TestimonialCard from "./ui/TestimonialCard";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Very punctual service. Driver was polite and vehicle was clean.",
  },
  {
    name: "Priya Verma",
    text: "Booked airport taxi at midnight. Pickup was perfectly on time.",
  },
  {
    name: "Amit Patel",
    text: "Best pricing compared to others. Smooth journey.",
  },
  {
    name: "Sneha Gupta",
    text: "Outstation trip was comfortable. Will book again.",
  },
  {
    name: "Vikram Singh",
    text: "Quick booking confirmation and good support.",
  },
  {
    name: "Neha Jain",
    text: "Great experience for family travel.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll on mobile
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      container.scrollBy({
        left: 300,
        behavior: "smooth",
      });

      // Reset scroll when end reached
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-gray-50 pb-40">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 mt-3">
            Trusted by hundreds of happy travelers.
          </p>
        </div>

        {/* Mobile Slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto md:hidden snap-x snap-mandatory scrollbar-hide"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[85%] snap-center"
            >
              <TestimonialCard name={t.name} text={t.text} />
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} name={t.name} text={t.text} />
          ))}
        </div>
      </div>
    </section>
  );
}